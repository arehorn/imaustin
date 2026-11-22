import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Run a one-shot callback when an element first becomes visible.
 * IntersectionObserver is used instead of ScrollTrigger for anything that
 * might sit inside a hidden `.path-only` block: observers simply never fire
 * while the group is display:none, so nothing gets stuck invisible or
 * counted to zero when the visitor switches modes.
 */
function onVisible(el: Element, cb: () => void) {
  if (typeof IntersectionObserver === "undefined") {
    cb();
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        observer.disconnect();
        cb();
      }
    },
    { rootMargin: "0px 0px -6% 0px" },
  );
  observer.observe(el);
}

function init() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  // Degenerate viewport (prerender, some embeds): serve the static page.
  if ((window.innerHeight || document.documentElement.clientHeight) === 0) return;

  /* ── Hero headline: line-by-line rise ──────────────────────────── */
  const lines = gsap.utils.toArray<HTMLElement>("[data-line]");
  if (lines.length) {
    gsap.from(lines, {
      yPercent: 118,
      duration: 1.1,
      ease: "power4.out",
      stagger: 0.09,
      delay: 0.05,
    });
  }

  /* ── Quiet reveals ─────────────────────────────────────────────── */
  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
    onVisible(el, () => {
      gsap.from(el, { y: 26, autoAlpha: 0, duration: 0.8, ease: "power3.out" });
    });
  });

  /* ── Stat count-up ─────────────────────────────────────────────── */
  gsap.utils.toArray<HTMLElement>("[data-stat]").forEach((el) => {
    const value = Number(el.dataset.value ?? "");
    if (!Number.isFinite(value)) return;
    const prefix = el.dataset.prefix ?? "";
    const suffix = el.dataset.suffix ?? "";

    onVisible(el, () => {
      const counter = { n: 0 };
      el.textContent = `${prefix}0${suffix}`;
      gsap.to(counter, {
        n: value,
        duration: 1.4,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(counter.n)}${suffix}`;
        },
        onComplete: () => {
          el.textContent = `${prefix}${value}${suffix}`;
        },
      });
    });
  });

  /* ── The signature: one continuous career line ─────────────────── */
  gsap.utils.toArray<HTMLElement>("[data-career-line]").forEach((line) => {
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: line.parentElement,
          start: "top 70%",
          end: "bottom 78%",
          scrub: 0.6,
        },
      },
    );
  });

  /* ── Nodes light as the line reaches them ──────────────────────── */
  gsap.utils.toArray<HTMLElement>("[data-entry]").forEach((entry) => {
    onVisible(entry, () => entry.classList.add("is-live"));
  });

  /* ── Portrait drifts as the hero leaves ────────────────────────── */
  const hero = document.querySelector<HTMLElement>("#hero");
  const portrait = document.querySelector<HTMLElement>("[data-portrait]");
  if (hero && portrait) {
    gsap.to(portrait, {
      y: 70,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      },
    });
  }

  ScrollTrigger.refresh();

  // Switching doors changes the height of the page, so recalculate the
  // scroll positions rather than leaving triggers pointing at stale offsets.
  window.addEventListener("pathchange", () => {
    requestAnimationFrame(() => ScrollTrigger.refresh());
  });

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
