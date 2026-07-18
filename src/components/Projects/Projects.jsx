import "./projects.scss";

const PROJECTS = [
  {
    tag: "LIVE IN PRODUCTION",
    tagColor: "green",
    title: "Pay by Link",
    problem: "A public-facing payment surface exposed to DDoS and payment-link abuse.",
    solution:
      "Hardened link generation and redemption with HMAC signatures, concurrency controls and rate limiting.",
    outcome:
      "Abuse mitigated on a revenue-critical surface; links safely shareable by merchants at scale.",
    stack: ["Node.js", "HMAC", "Rate limiting", "SQS"],
    visual: "payByLink",
  },
  {
    tag: "LIVE WITH FOODHUB (UK)",
    tagColor: "green",
    title: "Embeddable Merchant Portal",
    problem:
      "Partners needed the full merchant portal inside their own product — iframes were too limiting and insecure.",
    solution:
      "A script-based embed with strict origin validation and secure cross-domain messaging over the postMessage API.",
    outcome: "Live in production with Foodhub (UK), serving real merchants inside a partner's product.",
    stack: ["JavaScript", "postMessage", "Origin validation", "React"],
    visual: "embed",
    reverse: true,
  },
  {
    tag: "SOLE ENGINEER, END-TO-END",
    tagColor: "gray",
    title: "Adyen Merchant Onboarding",
    problem: "Manual, slow merchant onboarding across six regulatory regimes.",
    solution:
      "Owned the full onboarding flow — frontend, backend and Adyen integration — across UK, US, AUS, NZ, MEX and IRE.",
    outcome: "Significantly reduced manual ops effort and onboarding time in every market.",
    stack: ["Adyen APIs", "Node.js", "React", "KYC flows"],
    visual: "onboarding",
  },
  {
    tag: "8 MODULES · WHITE-LABEL",
    tagColor: "gray",
    title: "Reseller Portal Monorepo",
    problem:
      "Multiple global resellers — QuickChow, Foodhub, FastFood OS, eDining Express — each needing a branded portal.",
    solution:
      "A Cloudflare-based monorepo spanning 8 major modules, architected for white-label deployment per client.",
    outcome: "One codebase serving every reseller — onboarding, payments, invoicing, reporting and more.",
    stack: ["Monorepo", "Cloudflare", "React", "White-label"],
    visual: "monorepo",
    reverse: true,
  },
];

function PayByLinkVisual() {
  return (
    <div className="visual-card">
      <div className="visual-eyebrow">PAYMENT REQUEST</div>
      <div className="visual-amount">GBP 58.10</div>
      <div className="visual-divider" />
      <div className="visual-rows">
        <div className="visual-row">
          <span>Signature</span>
          <span className="visual-ok">HMAC ✓ valid</span>
        </div>
        <div className="visual-row">
          <span>Rate limit</span>
          <span className="visual-mono">12 / 100 rpm</span>
        </div>
        <div className="visual-row">
          <span>Expiry</span>
          <span className="visual-mono">23:59:12</span>
        </div>
      </div>
      <div className="visual-pay-btn">Pay securely</div>
    </div>
  );
}

function EmbedVisual() {
  return (
    <div className="visual-embed">
      <div className="visual-embed-code">
        <span className="visual-tag">&lt;script</span> src=
        <span className="visual-string">&quot;portal.datman.js&quot;</span>
        <span className="visual-tag">&gt;</span>
        <br />
        <span className="visual-comment">{"// origin validated · postMessage secured"}</span>
      </div>
      <div className="visual-embed-portal">
        <div className="visual-embed-portal-head">
          <div>Merchant Portal</div>
          <div className="visual-ok">EMBEDDED · foodhub.co.uk</div>
        </div>
        <div className="visual-embed-portal-grid">
          <div />
          <div />
          <div className="visual-embed-portal-wide" />
        </div>
      </div>
    </div>
  );
}

function OnboardingVisual() {
  const markets = [
    { label: "UK · GBP", status: "ONBOARDED", done: true },
    { label: "US · USD", status: "ONBOARDED", done: true },
    { label: "AUS · AUD", status: "ONBOARDED", done: true },
    { label: "NZ · MEX · IRE", status: "+3 MARKETS", done: false },
  ];
  return (
    <div className="visual-onboarding">
      {markets.map((m) => (
        <div className="visual-onboarding-row" key={m.label}>
          <span className={`visual-dot ${m.done ? "visual-dot-done" : "visual-dot-pending"}`} />
          <span>{m.label}</span>
          <span className={m.done ? "visual-ok" : "visual-pending"}>{m.status}</span>
        </div>
      ))}
    </div>
  );
}

function MonorepoVisual() {
  return (
    <div className="visual-monorepo">
      <div className="visual-monorepo-titlebar">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-monorepo-body">
        <div className="visual-monorepo-nav">
          {[80, 65, 72, 58, 70, 62, 68, 55].map((w, i) => (
            <div key={i} style={{ width: `${w}%` }} className={i === 0 ? "active" : ""} />
          ))}
        </div>
        <div className="visual-monorepo-content">
          <div className="row" />
          <div className="row-tall" />
          <div className="row-pair">
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}

const VISUALS = {
  payByLink: PayByLinkVisual,
  embed: EmbedVisual,
  onboarding: OnboardingVisual,
  monorepo: MonorepoVisual,
};

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-wrapper">
        <div data-reveal className="projects-eyebrow">02 — FEATURED PROJECTS</div>
        <h2 data-reveal>Production systems, not demos</h2>
        <div className="projects-list">
          {PROJECTS.map((project) => {
            const Visual = VISUALS[project.visual];
            return (
              <article
                data-reveal
                key={project.title}
                className={`project-card ${project.reverse ? "reverse" : ""}`}
              >
                <div className="project-info">
                  <div className={`project-tag project-tag-${project.tagColor}`}>{project.tag}</div>
                  <h3>{project.title}</h3>
                  <div className="project-details">
                    <div>
                      <span className="project-label">PROBLEM</span>
                      <span>{project.problem}</span>
                    </div>
                    <div>
                      <span className="project-label">SOLUTION</span>
                      <span>{project.solution}</span>
                    </div>
                    <div>
                      <span className="project-label">OUTCOME</span>
                      <span>{project.outcome}</span>
                    </div>
                  </div>
                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-visual">
                  <Visual />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
