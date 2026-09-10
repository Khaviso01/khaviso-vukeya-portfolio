import ShopBuddy from "../assets/shopping-list-ui-prev.png";
import WeatherApp from "../assets/weather-app-prev.png";
import LinkVault from "../assets/link-vault-prev.png"
import Earnalytics from "../assets/earnalytics-previ.png"
import BusinessKPI from "../assets/business-kpi-prev.png"
import NextStop from "../assets/next-stop-prev.png"

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
            Web applications built from projects and initiatives. A mix of data work.
          </p>
        </div>

        <div className="project-list">
          <a
            className="project-row"

          >
            <span className="project-index">01</span>

            <div className="project-heading">
              <span className="project-category">Travel Assistant App</span>

              <div className="project-image-wrapper project-nextstop">
                <img
                  src={NextStop}
                  alt="Next Stop"
                  className="project-image"
                />
              </div>
            </div>

            <div className="project-tags">
              <span className="project-title">NextStop</span>
              <p className="project-desc">Trip planning assistant, journey suggestions are that are deterministic from the bundled Limpopo directory, assists Limpopo communters to with promised safety and getting information on how to reach their destinations.</p>
              <span className="project-tag" >
                React
              </span>
              <span className="project-tag" >
                TypeScript
              </span>
              <span className="project-tag" >
                OpenStreetMap API
              </span>
              <span className="project-tag" >
                Microsoft Tools
              </span>
            </div>
            <div className="project-meta">
              <a
                className="btn-avatar"
                href="https://next-stop-lilac.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <ArrowIcon />
              </a>
            </div>
          </a>
        </div>

        <div className="project-list">
          <a
            className="project-row"

          >
            <span className="project-index">02</span>

            <div className="project-heading">
              <span className="project-category">Shopping List App</span>

              <div className="project-image-wrapper project-shopping">
                <img
                  src={ShopBuddy}
                  alt="ShopBuddy"
                  className="project-image"
                />
              </div>
            </div>

            <div className="project-tags">
              <span className="project-title">ShopBuddy</span>
              <p className="project-desc">Shopping-list app. It lets users manage a personal shopping list, search and sort their items, pick real product photos from Unsplash, and share their list with others</p>
              <span className="project-tag" >
                React
              </span>
              <span className="project-tag" >
                TypeScript
              </span>
              <span className="project-tag" >
                Unsplash API
              </span>
            </div>
            <div className="project-meta">
              <a
                className="btn-avatar"
                href="https://shopping-list-iota-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <ArrowIcon />
              </a>
            </div>
          </a>
        </div>

        <div className="project-list">
          <a
            className="project-row"

          >
            <span className="project-index">03</span>

            <div className="project-heading">
              <span className="project-category">Weather Application</span>

              <div className="project-image-wrapper project-weather">
                <img
                  src={WeatherApp}
                  alt="Weather App"
                  className="project-image"
                />
              </div>
            </div>

            <div className="project-tags">
              <span className="project-title">Weather App</span>
              <p className="project-desc">responsive weather app. Gets real-time weather data and multi-day forecasts for multiple locations with a beautiful, intuitive interface.</p>
              <span className="project-tag" >
                React
              </span>
              <span className="project-tag" >
                TypeScript
              </span>
              <span className="project-tag" >
                WeatherAPI
              </span>
              <span className="project-tag" >
                lucide icons
              </span>
            </div>
            <div className="project-meta">
              <a
                className="btn-avatar"
                href="https://weather-app-task-4.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <ArrowIcon />
              </a>
            </div>
          </a>
        </div>

        <div className="project-list">
          <a
            className="project-row"

          >
            <span className="project-index">04</span>

            <div className="project-heading">
              <span className="project-category">Link Storage App</span>

              <div className="project-image-wrapper project-links">
                <img
                  src={LinkVault}
                  alt="Link Vault"
                  className="project-image"
                />
              </div>
            </div>

            <div className="project-tags">
              <span className="project-title">LinkVault</span>
              <p className="project-desc">A personal bookmark manager. It allows you to save, organize, search, and filter your favorite links from a single, clean interface</p>
              <span className="project-tag" >
                React
              </span>
              <span className="project-tag" >
                TypeScript
              </span>
              <span className="project-tag" >
                localStorage
              </span>
              <span className="project-tag" >
                Huge Icons
              </span>
            </div>
            <div className="project-meta">
              <a
                className="btn-avatar"
                href="https://vault-links-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <ArrowIcon />
              </a>
            </div>
          </a>
        </div>

        <div className="project-list">
          <a
            className="project-row"

          >
            <span className="project-index">05</span>

            <div className="project-heading">
              <span className="project-category">Predictive AI</span>

              <div className="project-image-wrapper project-earnalytics">
                <img
                  src={Earnalytics}
                  alt="Earnalytics AI"
                  className="project-image"
                />
              </div>
            </div>

            <div className="project-tags">
              <span className="project-title">Earnalytics AI</span>
              <p className="project-desc">Earnlytics is a salary prediction AI designed to support financial planning and equitable compensation.</p>
              <span className="project-tag" >
                Python
              </span>
              <span className="project-tag" >
                Pandas
              </span>
              <span className="project-tag" >
                NumPy
              </span>
              <span className="project-tag" >
                Scikit-learn
              </span>
            </div>
            <div className="project-meta">
              <a
                className="btn-avatar"
                href="https://github.com/Mustard-Core/Earnalytics-AI/tree/main"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
                <ArrowIcon />
              </a>
            </div>
          </a>
        </div>

        <div className="project-list">
          <a
            className="project-row"

          >
            <span className="project-index">06</span>

            <div className="project-heading">
              <span className="project-category">Business Dashboard</span>

              <div className="project-image-wrapper project-earnalytics">
                <img
                  src={BusinessKPI}
                  alt="Business KPIs"
                  className="project-image"
                />
              </div>
            </div>

            <div className="project-tags">
              <span className="project-title">Business KPIs</span>
              <p className="project-desc">Business KPIs, comparing actual performance(2024 sales) against goals(2023 sales). It tracks sales, orders, customers, and product categories, highlights monthly trends, and identifies top customers and regions to guide strategic decisions.</p>
              <span className="project-tag" >
                Power BI
              </span>
              <span className="project-tag" >
                Power Query
              </span>
              <span className="project-tag" >
                Data Cleaning
              </span>
              <span className="project-tag" >
                Dashboard Development
              </span>
            </div>
            <div className="project-meta">
              <a
                className="btn-avatar"
                href="https://www.datascienceportfol.io/khavisovukeya/projects/0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Insights
                <ArrowIcon />
              </a>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
