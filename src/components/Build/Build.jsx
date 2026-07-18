import "./build.scss";

const BUILD_CARDS = [
  {
    title: "Payment Platforms",
    desc: "Pay by Link, checkout card forms, 3DS/SCA flows and webhook processing on live payment rails.",
  },
  {
    title: "Merchant Onboarding",
    desc: "End-to-end KYC and account creation flows across six markets on Adyen.",
  },
  {
    title: "Embeddable Portals",
    desc: "Script-based embeds with origin validation and secure cross-domain messaging.",
  },
  {
    title: "Enterprise Dashboards",
    desc: "Reseller and merchant portals — transactions, finance, reporting, user management.",
  },
  {
    title: "Auth & Security",
    desc: "JWT, RBAC, rate limiting and PCI-aware card handling on public surfaces.",
  },
  {
    title: "Report Orchestration",
    desc: "State machines with explicit lifecycle states and automatic retries.",
  },
  {
    title: "API Integrations",
    desc: "Payment processor, banking and partner APIs — resilient, idempotent, observable.",
  },
  {
    title: "Progressive Web Apps",
    desc: "Service workers, offline caching and installability for merchant tooling.",
  },
];

function Build() {
  return (
    <section className="build">
      <div className="build-wrapper">
        <div data-reveal className="build-eyebrow">04 — WHAT I BUILD</div>
        <h2 data-reveal>Systems I know how to ship</h2>
        <div className="build-grid">
          {BUILD_CARDS.map((card) => (
            <div data-reveal key={card.title} className="build-card">
              <div className="build-card-title">{card.title}</div>
              <div className="build-card-desc">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Build;
