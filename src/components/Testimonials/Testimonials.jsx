import "./testimonials.scss";

const TESTIMONIALS = [
  {
    quote:
      "Add a real quote here — e.g. from your Product Manager or Engineering Manager at Datman about the merchant portal or Pay by Link work.",
    initials: "PM",
    name: "Name Surname",
    role: "Product Manager, Datman Ltd",
  },
  {
    quote:
      "Second quote slot — a senior engineer or lead who can speak to your ownership of the Adyen onboarding or reseller portal.",
    initials: "EM",
    name: "Name Surname",
    role: "Engineering Manager, Datman Ltd",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-wrapper">
        <div data-reveal className="testimonials-eyebrow">06 — TESTIMONIALS</div>
        <h2 data-reveal>What colleagues say</h2>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <figure data-reveal key={t.name + t.role} className="testimonial-card">
              <blockquote>&quot;{t.quote}&quot;</blockquote>
              <figcaption>
                <span className="testimonial-avatar">{t.initials}</span>
                <span>
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
