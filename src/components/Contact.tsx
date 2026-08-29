import { profile } from "../data/portfolio";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 11L11 3M11 3H4.5M11 3V9.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Contact() {
  const rows = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "GitHub", value: profile.github, href: profile.githubUrl },
    { label: "LinkedIn", value: profile.linkedin, href: profile.linkedinUrl },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  ];

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Contact</span>
            <h2 className="section-title">Let's connect.</h2>
          </div>
        </div>

        <div className="contact-inner">
          <div>
            <p className="contact-lede">
              Open to internships, entry-level roles, and freelance
              opportunities.
            </p>
            <p className="contact-body">
              Feel free to reach out — I'm happy to talk about data,
              dashboards, or your next web project.
            </p>
          </div>

          <div className="contact-list">
            {rows.map((row) => (
              <a
                className="contact-row"
                href={row.href}
                key={row.label}
                target={row.label === "GitHub" || row.label === "LinkedIn" ? "_blank" : undefined}
                rel="noreferrer"
              >
                <div>
                  <p className="contact-label">{row.label}</p>
                  <p className="contact-value">{row.value}</p>
                </div>
                <span className="contact-arrow">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
