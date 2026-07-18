import "./stats.scss";

const STATS = [
  { count: 2, suffix: "+", label: "Years of experience, incl. internship" },
  { count: 1, suffix: "+", label: "Years in production software" },
  { count: 6, suffix: "", label: "International markets contributed to" },
  { count: 2, suffix: "", label: "Engineering awards in 8 months" },
];

function Stats() {
  return (
    <section aria-label="Engineering highlights" className="stats">
      <div className="stats-wrapper">
        {STATS.map((stat) => (
          <div data-reveal key={stat.label} className="stats-item">
            <div className="stats-number">
              <span data-count={stat.count}>0</span>
              {stat.suffix}
            </div>
            <div className="stats-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
