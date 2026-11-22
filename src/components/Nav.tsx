import { useEffect, useState } from "react";

interface NavProps {
  resumeUrl?: string;
}

const LINKS = [
  { label: "Experience", href: "#career" },
  { label: "Work", href: "#builder" },
  { label: "Connect", href: "#connect" },
];

export default function Nav({ resumeUrl }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = LINKS.map((link) => document.querySelector(link.href)).filter(
      (section): section is Element => Boolean(section),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));

    // Nothing should read as "current" while the visitor is still in the hero.
    const hero = document.getElementById("hero");
    const heroObserver = hero
      ? new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActive("");
          },
          { threshold: 0.3 },
        )
      : null;
    if (hero && heroObserver) heroObserver.observe(hero);

    return () => {
      observer.disconnect();
      heroObserver?.disconnect();
    };
  }, []);

  return (
    <nav className="glass-card fixed left-1/2 top-6 z-50 flex w-[95%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full px-6 py-3 sm:px-8">
      {/* Logo */}
      <a href="#hero" className="font-display text-lg font-black tracking-tighter sm:text-xl">
        <span className="text-white">AUSTIN</span>{" "}
        <span className="bg-gradient-to-r from-[#FF5A1F] to-[#C9A86C] bg-clip-text text-transparent">
          REHORN
        </span>
      </a>

      {/* Desktop links */}
      <div className="hidden items-center space-x-8 lg:space-x-10 md:flex">
        {LINKS.map((link) => {
          const isActive = active === link.href;
          return (
            <a
              key={link.label}
              href={link.href}
              aria-current={isActive ? "true" : undefined}
              className={`relative rounded text-sm font-medium uppercase tracking-widest transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] ${
                isActive ? "text-white" : "text-gray-400"
              }`}
            >
              {link.label}
              <span
                aria-hidden="true"
                className={`absolute -bottom-1.5 left-0 h-px bg-gradient-to-r from-[#FF5A1F] to-[#C9A86C] transition-all duration-500 ${
                  isActive ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </a>
          );
        })}
      </div>

      {/* Desktop actions */}
      <div className="hidden items-center gap-3 sm:flex">
        {resumeUrl && (
          <a
            href={resumeUrl}
            download
            className="hidden rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest text-gray-400 transition-colors hover:text-white lg:inline-flex"
          >
            Résumé
          </a>
        )}
        <a
          href="#connect"
          className="hidden items-center justify-center rounded-full bg-gradient-to-r from-[#C9A86C] to-[#FF5A1F] px-5 py-2 text-xs font-bold text-white shadow-[0_0_20px_rgba(201,168,108,0.4)] transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] sm:inline-flex lg:px-6 lg:text-sm"
        >
          Work Together
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="rounded-full p-2 text-gray-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="glass-card absolute left-0 right-0 top-full mt-3 flex flex-col gap-3 rounded-3xl px-6 py-5 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded px-3 py-2 text-sm font-medium uppercase tracking-widest text-gray-300 transition-colors hover:text-[#FF5A1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
            >
              {link.label}
            </a>
          ))}
          {resumeUrl && (
            <a
              href={resumeUrl}
              download
              onClick={() => setMenuOpen(false)}
              className="rounded px-3 py-2 text-sm font-medium uppercase tracking-widest text-gray-300 transition-colors hover:text-[#FF5A1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
            >
              Résumé
            </a>
          )}
          <a
            href="#connect"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-gradient-to-r from-[#C9A86C] to-[#FF5A1F] px-5 py-2.5 text-center text-sm font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
          >
            Work Together
          </a>
        </div>
      )}
    </nav>
  );
}
