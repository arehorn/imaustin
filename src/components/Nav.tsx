import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold tracking-tighter font-display">
          <span style={{ color: "#c3c0ff" }}>AUSTIN</span>
          <span style={{ color: "#dae2fd" }}>REHORN</span>
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-2">
          {["Work", "Experience", "Connect"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300"
              style={{ color: "#c6c6cd" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#dae2fd")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#c6c6cd")}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2.5 rounded-xl transition-colors duration-300"
          style={{ color: "#c6c6cd" }}
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
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden px-6 pb-4 flex flex-col gap-2" style={{ backgroundColor: "rgba(19,27,46,0.97)" }}>
          {["Work", "Experience", "Connect"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-300"
              style={{ color: "#c6c6cd" }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
