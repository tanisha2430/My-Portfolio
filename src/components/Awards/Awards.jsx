import { FiAward } from "react-icons/fi";
import "./awards.scss";

const FEATURED_AWARD = {
  meta: "DATMAN LTD · 2026",
  title: "Rising Star Award",
  desc: "Recognised for outstanding early-career impact — taking ownership of critical systems end-to-end and delivering at a senior pace from day one.",
};

const AWARDS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"></circle>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
      </svg>
    ),
    tone: "blue",
    meta: "DATMAN LTD · 2025",
    title: "Resilient Innovation Award",
    desc: "Awarded within the first 8 months for impactful engineering contributions — building production systems that shipped reliably under real constraints.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    ),
    tone: "green",
    meta: "DR. APJ AKTU · 2021–25",
    title: "Academic Excellence Scholarship",
    desc: "Merit scholarship worth ₹1,37,000 across B.Tech, awarded for consistently high academic performance. CGPA 8.81.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
    tone: "blue",
    meta: "SRMSCET · 2024",
    title: "National Hackathon 2.0",
    desc: "Consolation prize at the National Hackathon 2.0 hosted by SRMSCET, Bareilly — competing against teams from across the country.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"></circle>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
      </svg>
    ),
    tone: "green",
    meta: "HARTMANN COLLEGE · 2020–21",
    title: "ISC Intermediate Topper (First Rank)",
    desc: "Topped the batch in ISC Intermediate examinations with 97.25%, securing First Rank at Hartmann College, Bareilly.",
  },
];

function Awards() {
  return (
    <section className="awards">
      <div className="awards-wrapper">
        <div data-reveal className="awards-eyebrow">05 — AWARDS & RECOGNITION</div>
        <h2 data-reveal>Recognised early, recognised often</h2>

        <div data-reveal className="award-featured">
          <div className="award-featured-badge">
            <FiAward />
          </div>
          <div className="award-featured-body">
            <div className="award-meta">{FEATURED_AWARD.meta}</div>
            <div className="award-featured-title">{FEATURED_AWARD.title}</div>
            <div className="award-desc">{FEATURED_AWARD.desc}</div>
          </div>
        </div>

        <div className="awards-grid">
          {AWARDS.map((award) => (
            <div data-reveal key={award.title} className="award-card">
              <div className="award-card-head">
                <div className={`award-icon award-icon-${award.tone}`}>{award.icon}</div>
                <div className="award-meta">{award.meta}</div>
              </div>
              <div className="award-title">{award.title}</div>
              <div className="award-desc">{award.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
