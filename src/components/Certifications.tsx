import { certifications } from "../data/portfolio";

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Certifications</span>
            <h2 className="section-title">
              Professional certifications and achievements.
            </h2>
          </div>
          <p className="section-note">
            Continuous learning across data, networking, and cybersecurity.
          </p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <div className="cert-card" key={cert.title}>
              <div className="cert-top">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-category">{cert.category}</span>
              </div>
              <p className="cert-title">{cert.title}</p>
              <p className="cert-program">{cert.program}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
