import { useState } from "react";
import { navLinks, profile } from "../data/portfolio";
import { handleAnchorClick } from "../lib/scroll";

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.35-3.88-1.35-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17v3.21c0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a
          href="#home"
          className="nav-mark"
          aria-label="Home"
          onClick={(e) => handleAnchorClick(e, "#home")}
        >
          {profile.initials}
        </a>


        <span className="nav-divider" />

        <nav className="nav-links" aria-label="Primary">
          {navLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <a
            className="nav-icon-btn"
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>

          <a
            className="btn-avatar nav-cta"
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "#contact")}
          >
            <span className="nav-cta-label">Get in Touch</span>
          </a>

          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>

      <div className={`nav-mobile ${open ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              handleAnchorClick(e, link.href);
              setOpen(false);
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
