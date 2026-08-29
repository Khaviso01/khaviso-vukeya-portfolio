import { projects } from "../data/portfolio";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="section-title">My work &amp; featured projects.</h2>
          </div>
          <p className="section-note">
            A mix of dashboards, data-cleaning work, and web applications
            built from real coursework and initiatives.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <a
              className="project-row"
              href={project.href}
              key={project.index}
              onClick={(e) => {
                // Placeholder until real project URLs are added in portfolio.ts
                if (project.href === "#") e.preventDefault();
              }}
            >
              <span className="project-index">{project.index}</span>

              <div className="project-heading">
                <span className="project-category">{project.category}</span>
                <span className="project-title">{project.title}</span>
                <p className="project-desc">{project.description}</p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-meta">
                <span className="project-link">
                  {project.linkLabel}
                  <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
