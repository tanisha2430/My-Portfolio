import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Stack from "./components/Stack/Stack";
import Build from "./components/Build/Build";
import Awards from "./components/Awards/Awards";
// Hidden until real testimonials are collected — component kept for when they're ready.
// import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = gsap.utils.toArray("[data-reveal]");
    const counts = gsap.utils.toArray("[data-count]");
    const isAboveTheFold = (el) => !!el.closest(".hero-viewport");

    if (reduce) {
      reveals.forEach((el) => {
        el.style.opacity = 1;
      });
    } else {
      reveals.forEach((el, i) => {
        if (isAboveTheFold(el)) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: i * 0.08 }
          );
        } else {
          gsap.fromTo(
            el,
            { opacity: 0, y: 26 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            }
          );
        }
      });

      counts.forEach((el) => {
        const target = +el.dataset.count;
        gsap.fromTo(
          el,
          { innerText: 0 },
          isAboveTheFold(el)
            ? { innerText: target, duration: 1.4, ease: "power2.out", snap: { innerText: 1 }, delay: 0.3 }
            : {
                innerText: target,
                duration: 1.4,
                ease: "power2.out",
                snap: { innerText: 1 },
                scrollTrigger: { trigger: el, start: "top 90%", once: true },
              }
        );
      });
    }

    const magneticButtons = document.querySelectorAll("[data-magnetic]");
    const moveHandlers = [];
    const leaveHandlers = [];

    magneticButtons.forEach((btn) => {
      const onMove = (e) => {
        const r = btn.getBoundingClientRect();
        gsap.to(btn, {
          x: (e.clientX - r.left - r.width / 2) * 0.18,
          y: (e.clientY - r.top - r.height / 2) * 0.3,
          duration: 0.3,
          ease: "power2.out",
        });
      };
      const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.45, ease: "elastic.out(1, .5)" });

      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);
      moveHandlers.push([btn, onMove]);
      leaveHandlers.push([btn, onLeave]);
    });

    const glow = document.querySelector("[data-glow]");
    let glowTween;
    if (glow) {
      glowTween = gsap.to(glow, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: { trigger: "#top", start: "top top", end: "bottom top", scrub: true },
      });
    }

    return () => {
      moveHandlers.forEach(([btn, handler]) => btn.removeEventListener("mousemove", handler));
      leaveHandlers.forEach(([btn, handler]) => btn.removeEventListener("mouseleave", handler));
      glowTween?.scrollTrigger?.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="hero-viewport">
        <Hero />
        <Stats />
      </div>
      <Experience />
      <Projects />
      <Stack />
      <Build />
      <Awards />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
