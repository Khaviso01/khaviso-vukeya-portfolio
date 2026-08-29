import { skillGroups } from "../data/portfolio";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Skills</span>
            <h2 className="section-title">
              Tools and languages I use to build and analyze.
            </h2>
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.label}>
              <p className="skill-card-label">{group.label}</p>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
