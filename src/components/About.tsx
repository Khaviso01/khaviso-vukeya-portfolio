import { profile } from "../data/portfolio";
import { HugeiconsIcon } from '@hugeicons/react'
import { CodeXmlIcon, AiIdeaIcon, ArtificialIntelligence03Icon } from '@hugeicons/core-free-icons'

function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">About</span>
          </div>
        </div>

        <div className="about-inner">
          <div>
            <p className="about-lede">{profile.about}</p>

            <div className="value-list">
              <div className="value-item">
                  <span className="value-index">
                    <HugeiconsIcon icon={CodeXmlIcon} />
                  </span>
                  <div>
                    <p className="value-title">Clean development</p>
                    <p className="value-body">I focus on writing structured, readable, and maintainable code across projects.</p>
                  </div>
                </div>
            </div>
            <div className="value-list">
              <div className="value-item">
                  <span className="value-index">
                    <HugeiconsIcon icon={AiIdeaIcon} />
                  </span>
                  <div>
                    <p className="value-title">Problem solving</p>
                    <p className="value-body">Optimising and finding solutions in a pragmatic approach.</p>
                  </div>
                </div>
            </div>
            <div className="value-list">
              <div className="value-item">
                  <span className="value-index">
                    <HugeiconsIcon icon={ArtificialIntelligence03Icon} />
                  </span>
                  <div>
                    <p className="value-title">Continous learning</p>
                    <p className="value-body">Constantly improving my skills across software development, understanding vast technologies that are shaping the industry.</p>
                  </div>
                </div>
            </div>
            
          </div>

          <div className="about-body">
            <p>I'm currently working with <span>React</span>, <span>TypeScript</span>, and <span>JavaScript</span> to craft scalable applications with clean intuitive UI. Skilled in leveraging data with Python, SQL, and Power BI to provide actionable insights.</p>
            <p>My background includes IT support — troubleshooting hardware and software issues, configuring networks, and  providing user support across Microsoft 365 environments.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
