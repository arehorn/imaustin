import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

// Text is read back from the DOM then re-injected as HTML for word
// splitting — escape it so CMS text can't smuggle markup.
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function init() {
  if (prefersReducedMotion) return;
  // Degenerate viewport (prerender, some embeds) — ScrollTrigger math
  // breaks and content would be stuck hidden. Serve the static page.
  if ((window.innerHeight || document.documentElement.clientHeight) === 0)
    return;

  /* ── Section heading reveals: word-by-word rise ─────────────────── */
  document.querySelectorAll<HTMLElement>("section h2").forEach((h2) => {
    // Skip headings with nested markup beyond plain text (gradient spans etc.)
    if (h2.children.length > 0) {
      gsap.from(h2, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: h2, start: "top 85%" },
      });
      return;
    }
    const words = h2.textContent?.trim().split(/\s+/) ?? [];
    if (!words.length) return;
    h2.innerHTML = words
      .map(
        (w) =>
          `<span class="inline-block overflow-hidden align-bottom"><span class="inline-block will-change-transform">${esc(w)}</span></span>`,
      )
      .join(" ");
    gsap.from(h2.querySelectorAll(":scope > span > span"), {
      yPercent: 110,
      duration: 0.8,
      ease: "power4.out",
      stagger: 0.06,
      scrollTrigger: { trigger: h2, start: "top 85%" },
    });
  });

  /* ── Card reveals: rise + settle ────────────────────────────────── */
  const cards = gsap.utils.toArray<HTMLElement>(
    "section .glass-card, section .glass-inset",
  );
  // Only animate top-level cards. Skip cards nested inside other cards,
  // React islands (mutating them pre-hydration causes hydration
  // mismatches), and interactive elements that own CSS transitions.
  const topCards = cards.filter(
    (el) =>
      !el.parentElement?.closest(".glass-card") &&
      !el.closest("astro-island") &&
      el.tagName !== "A" &&
      el.tagName !== "BUTTON",
  );
  topCards.forEach((card) => {
    // CSS transitions/animations (hover lifts, float) fight GSAP's
    // inline styles — suspend them for the duration of the reveal.
    card.classList.add("gsap-reveal");
    gsap.fromTo(
      card,
      { y: 56, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 92%", once: true },
        onComplete: () => {
          card.classList.remove("gsap-reveal");
          gsap.set(card, { clearProps: "transform,opacity,visibility" });
        },
      },
    );
  });

  /* ── Hero parallax: headshot drifts, text recedes ───────────────── */
  const hero = document.querySelector<HTMLElement>("#hero");
  if (hero) {
    const photo = hero.querySelector<HTMLElement>(".lg\\:col-span-5");
    const text = hero.querySelector<HTMLElement>(".lg\\:col-span-7");
    if (photo && text) {
      gsap.to(photo, {
        y: 90,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      gsap.to(text, {
        y: 40,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom 20%",
          scrub: 0.6,
        },
      });
    }
  }

  /* ── About bio: scrubbed word-opacity reveal ────────────────────── */
  document
    .querySelectorAll<HTMLElement>("#about article > div > p")
    .forEach((p) => {
      const words = p.textContent?.trim().split(/\s+/) ?? [];
      if (words.length < 4) return;
      p.innerHTML = words
        .map((w) => `<span class="reveal-word">${esc(w)}</span>`)
        .join(" ");
      gsap.fromTo(
        p.querySelectorAll(".reveal-word"),
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.02,
          ease: "none",
          scrollTrigger: {
            trigger: p,
            start: "top 80%",
            end: "bottom 55%",
            scrub: true,
          },
        },
      );
    });

  /* ── Stat count-up ──────────────────────────────────────────────── */
  document
    .querySelectorAll<HTMLElement>("section .glass-card p.font-black")
    .forEach((stat) => {
      const raw = stat.textContent?.trim() ?? "";
      const match = raw.match(/^(\d+(?:\.\d+)?)(.*)$/);
      if (!match) return;
      const target = parseFloat(match[1]);
      const suffix = match[2] ?? "";
      const counter = { val: 0 };
      gsap.to(counter, {
        val: target,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: stat, start: "top 88%" },
        onUpdate: () => {
          const v = Number.isInteger(target)
            ? Math.round(counter.val).toString()
            : counter.val.toFixed(1);
          stat.textContent = `${v}${suffix}`;
        },
      });
    });

  /* ── Experience timeline: line draws as you scroll ──────────────── */
  document
    .querySelectorAll<HTMLElement>("[data-timeline-line]")
    .forEach((line) => {
      gsap.fromTo(
        line,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: line.parentElement,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 0.8,
          },
        },
      );
    });

  /* ── Magnetic pull on primary CTAs ──────────────────────────────── */
  document
    .querySelectorAll<HTMLElement>("a[href='#connect'], .btn-primary")
    .forEach((btn) => {
      const strength = 18;
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
          x: (x / rect.width) * strength,
          y: (y / rect.height) * strength,
          duration: 0.4,
          ease: "power2.out",
        });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
      });
    });

  ScrollTrigger.refresh();

  if (import.meta.env.DEV) {
    (window as any).__gsap = gsap;
    (window as any).__st = ScrollTrigger;
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
