import "./hero.scss";

function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-grid-bg" />
      <div data-glow className="hero-glow" />
      <div className="hero-wrapper">
        <div className="hero-text">
          <div data-reveal className="hero-badge">
            <span className="hero-badge-dot" />
            SDE-1 · DATMAN LTD — BENGALURU
          </div>
          <h1 data-reveal>
            Building production software that scales — from payment
            infrastructure<span className="hero-muted"> to enterprise portals.</span>
          </h1>
          <p data-reveal>
            Full-stack engineer building production systems across payments,
            merchant tooling, and enterprise portals — with two engineering
            awards in the first eight months at a UK payment processor.
          </p>
          <div data-reveal className="hero-actions">
            <a data-magnetic href="#projects" className="hero-btn-primary">
              View projects
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a
              data-magnetic
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hero-btn-secondary"
            >
              Download resume
            </a>
            <div className="hero-socials">
              <a
                href="https://github.com/tanishasaxena24"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hero-icon-btn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/tanishasaxena2412"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hero-icon-btn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div data-reveal className="hero-photo">
          <div className="hero-photo-frame">
            <img src="/PhotoME.jpg" alt="Tanisha Saxena" />
          </div>
          <div className="hero-photo-caption">
            <div className="hero-photo-name">Tanisha Saxena</div>
            <div className="hero-photo-role">SDE-1 · Bengaluru, India</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
