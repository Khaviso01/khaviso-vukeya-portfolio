import { profile } from "../data/portfolio";
import { handleAnchorClick } from "../lib/scroll";
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="#006ae2" />
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

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <span className="pill-status">
          <CheckIcon />
          AVAILABLE FOR NEW OPPORTUNITIES
        </span>

        <h1 className="hero-title">
          Crafting Intuitive products from UX to UI systems. <span className="sub-tagline">Software Developer Trainee.</span>
        </h1>

        <p className="hero-intro">{profile.intro}</p>

        <div className="hero-actions">
          <a
            href="#contact"
            className="btn-avatar"
            onClick={(e) => handleAnchorClick(e, "#contact")}
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="btn btn-ghost"
            onClick={(e) => handleAnchorClick(e, "#projects")}
          >
            Projects
            <HugeiconsIcon icon={ArrowRight01Icon} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
