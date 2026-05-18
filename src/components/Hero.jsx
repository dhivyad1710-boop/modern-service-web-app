import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
  }, []);

  return (
    <section id="home" className="hero-section">

      {/* ELECTRIC LIGHTNING EFFECTS */}
      <div className="lightning lightning1"></div>
      <div className="lightning lightning2"></div>
      <div className="lightning lightning3"></div>

      {/* FLOATING ENERGY ORBS */}
      <div className="energy-orb orb1"></div>
      <div className="energy-orb orb2"></div>
      <div className="energy-orb orb3"></div>

      {/* MAIN HERO GLOW */}
      <div className="hero-glow"></div>

      {/* PREMIUM OVERLAY GLOW */}
      <div className="hero-overlay-glow"></div>

      {/* HERO CONTENT */}
      <div className="hero-content">

        <h1
          className="hero-title"
          data-aos="fade-up"
        >
          Powering Your Home <br />
          with Reliable Electrical Solutions ⚡
        </h1>

        <p
          className="hero-subtitle"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          24/7 expert electricians for wiring, repair,
          plumbing, solar installation & premium electrical
          solutions with professional safety standards.
        </p>

        <div
          className="hero-buttons"
          data-aos="fade-up"
          data-aos-delay="400"
        >

          {/* REAL CALL BUTTON */}
          <a
            href="tel:+918667345003"
            className="btn-primary"
          >
             Call Now
          </a>

          {/* BOOK SERVICE BUTTON */}
          <a
            href="#service-form"
            className="btn-secondary"
          >
             Book Service
          </a>

        </div>

      </div>

      {/* BOTTOM FADE */}
      <div className="hero-bottom-fade"></div>

    </section>
  );
}

export default Hero;