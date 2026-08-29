import { profile } from "../data/portfolio";
import { handleAnchorClick } from "../lib/scroll";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="#1e9e5a" />
      <path
        d="M5 8.2L7 10.2L11 5.8"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CursorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
      <path d="M2 1.5 15.5 8 9.4 9.4 8 15.5 2 1.5Z" />
    </svg>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <span className="pill-status">
          <CheckIcon />
          OPEN FOR NEW OPPORTUNITIES
        </span>

        <h1 className="hero-title">
          Turning data into decisions. Building clean web experiences.
        </h1>

        <p className="hero-intro">{profile.intro}</p>

        <p className="hero-meta">
          {profile.location} - {profile.focus}
        </p>

        <div className="hero-actions">
          <a
            href="#contact"
            className="btn-avatar"
            onClick={(e) => handleAnchorClick(e, "#contact")}
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="btn btn-ghost"
            onClick={(e) => handleAnchorClick(e, "#projects")}
          >
            Projects
          </a>

          <span className="cursor-tag">
            <CursorIcon />
            <span>{profile.name.split(" ")[0]}</span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
