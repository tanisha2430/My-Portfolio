import "./experience.scss";

const EXPERIENCE = [
  {
    role: "SDE-1 · Web & App",
    org: "Datman Ltd — UK-based payment processor · Bengaluru",
    period: "APR 2025 — PRESENT",
    active: true,
    bullets: [
      <>
        Built <strong>Pay by Link</strong> — HMAC signatures, concurrency
        controls and rate limiting on a public payment surface, mitigating
        DDoS and link abuse
      </>,
      <>
        Engineered a <strong>script-based embeddable merchant portal</strong>{" "}
        with origin validation and secure cross-domain messaging — live in
        production with Foodhub (UK)
      </>,
      <>
        Led <strong>Adyen merchant onboarding</strong> end-to-end across UK,
        US, AUS, NZ, MEX and IRE — owning frontend and backend
      </>,
      "Designed a state machine orchestrating transaction-report generation with explicit lifecycle states and automatic retries",
      "Lead frontend developer for the merchant portal; converted it to a PWA with service workers and offline caching",
      "Built and maintain the reseller portal across 8 modules — a Cloudflare-based monorepo enabling white-label deployment per client",
    ],
    tags: ["React", "Node.js", "AWS", "Cloudflare Workers", "DynamoDB", "Adyen"],
  },
  {
    role: "Full Stack Web Developer Intern",
    org: "Medanjali Healthtech Pvt. Ltd. — Remote",
    period: "JUL 2024 — DEC 2024",
    active: false,
    bullets: [
      "Owned the frontend of Politik Connect — delivered 8+ key modules with API integration and state management via Context API and Hooks",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-wrapper">
        <div data-reveal className="experience-eyebrow">01 — EXPERIENCE</div>
        <h2 data-reveal>Where I&apos;ve shipped</h2>

        <div className="experience-timeline">
          <div className="experience-timeline-line" />
          {EXPERIENCE.map((job) => (
            <div data-reveal key={job.role} className="experience-entry">
              <div
                className={`experience-dot ${job.active ? "experience-dot-active" : ""}`}
              />
              <div className="experience-card">
                <div className="experience-card-head">
                  <div>
                    <div className="experience-role">{job.role}</div>
                    <div className="experience-org">{job.org}</div>
                  </div>
                  <div className="experience-period">{job.period}</div>
                </div>
                <ul className="experience-bullets">
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <div className="experience-tags">
                  {job.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
