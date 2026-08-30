import { navLinks, profile } from "../data/portfolio";
import { handleAnchorClick } from "../lib/scroll";

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
