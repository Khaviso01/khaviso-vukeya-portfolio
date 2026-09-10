import { navLinks, profile } from "../data/portfolio";
import { handleAnchorClick } from "../lib/scroll";
import { HugeiconsIcon } from '@hugeicons/react'
import { Download01Icon } from '@hugeicons/core-free-icons'

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <p className="mark">{profile.initials}</p>
          <p className="footer-tagline">
            Clearer product experiences, without sanding off the personality.
          </p>
          <a
            className="btn-avatar cv-btn"
            href="/Khaviso Vukeya CV.pdf"
            target="_blank"
            download="Khaviso Vukeya CV.pdf"
          >
            <span className="cv-btn-content">
              <HugeiconsIcon icon={Download01Icon} />
              <span>Download CV</span>
            </span>
          </a>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <span className="footer-col-label">Navigate</span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <span className="footer-col-label">Direct contact</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>{profile.phone}</span>
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        © {year} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
