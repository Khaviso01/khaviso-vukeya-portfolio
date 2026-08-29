import { profile, values } from "../data/portfolio";

function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">About</span>
            <h2 className="section-title">
              A web developer and data analyst who cares about impactful
              solutions.
            </h2>
          </div>
        </div>

        <div className="about-inner">
          <div>
            <p className="about-lede">{profile.about}</p>

            <div className="value-list">
              {values.map((value, i) => (
                <div className="value-item" key={value.title}>
                  <span className="value-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="value-title">{value.title}</p>
                    <p className="value-body">{value.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-body">
            {profile.aboutLong.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
