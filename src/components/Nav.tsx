import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Connect", href: "#connect" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl glass-card rounded-full px-6 sm:px-8 py-3 flex justify-between items-center">
      {/* Logo */}
      <a
        href="#hero"
        className="text-lg sm:text-xl font-black tracking-tighter font-['Plus_Jakarta_Sans']"
      >
        <span className="text-white">AUSTIN</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F2FF] to-[#7000FF]">
          REHORN
        </span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
        {links.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className={
              i === 0
                ? "text-[#00F2FF] font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#00F2FF] glow-cyan text-sm uppercase tracking-widest"
                : "text-gray-400 hover:text-white transition-colors font-medium text-sm uppercase tracking-widest"
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Desktop CTA */}
      <a
        href="#connect"
        className="hidden sm:inline-flex bg-gradient-to-r from-[#7000FF] to-[#00F2FF] text-white font-bold px-5 lg:px-6 py-2 rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(112,0,255,0.4)] text-xs lg:text-sm"
      >
        Work Together
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden p-2 rounded-full text-gray-300 hover:text-white transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-3 glass-card rounded-3xl md:hidden px-6 py-5 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium uppercase tracking-widest text-gray-300 hover:text-[#00F2FF] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#connect"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-gradient-to-r from-[#7000FF] to-[#00F2FF] text-white font-bold text-center px-5 py-2.5 rounded-full text-sm"
          >
            Work Together
          </a>
        </div>
      )}
    </nav>
  );
}
