import "./navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <a href="#top" className="navbar-logo">
          Tanisha Saxena<span>.</span>
        </a>
        <div className="navbar-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#contact" className="navbar-cta">
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
