import "./contact.scss";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-wrapper">
        <div data-reveal className="contact-eyebrow">07 — CONTACT</div>
        <h2 data-reveal>Let&apos;s build something that matters.</h2>
        <p data-reveal>
          Open to engineering roles where the work ships to real users and the
          bar is high.
        </p>
        <div data-reveal className="contact-actions">
          <a data-magnetic href="mailto:tanishasaxena1224@gmail.com" className="contact-btn-primary">
            tanishasaxena1224@gmail.com
          </a>
          <a
            href="https://github.com/tanishasaxena24"
            target="_blank"
            rel="noreferrer"
            className="contact-btn-secondary"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tanishasaxena2412"
            target="_blank"
            rel="noreferrer"
            className="contact-btn-secondary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
