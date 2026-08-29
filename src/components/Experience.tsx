import { education, experience, type TimelineEntry } from "../data/portfolio";

function TimelineList({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div>
      {entries.map((entry) => (
        <div className="timeline-entry" key={entry.title}>
          <span className="timeline-period">{entry.period}</span>
          <div>
            <p className="timeline-title">{entry.title}</p>
            <p className="timeline-place">{entry.place}</p>
            <ul className="timeline-points">
              {entry.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Experience</span>
            <h2 className="section-title">Education and experience.</h2>
          </div>
        </div>

        <div className="timeline-group">
          <span className="timeline-group-label">Education</span>
          <TimelineList entries={education} />
        </div>

        <div className="timeline-group">
          <span className="timeline-group-label">Work</span>
          <TimelineList entries={experience} />
        </div>
      </div>
    </section>
  );
}

export default Experience;
