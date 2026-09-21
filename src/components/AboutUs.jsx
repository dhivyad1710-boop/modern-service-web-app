import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

import "./AboutUs.css";
import aboutImg from "../assets/about-electrician.png";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
  }, []);

  const features = [
    "Certified & Skilled Electricians",
    "Transparent Pricing & Honest Service",
    "Quality Workmanship with Modern Tools",
    "Reliable Support for Homes & Businesses",
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Left Content */}
        <div
          className="about-content"
          data-aos="fade-right"
        >
          <p className="section-subtitle">
            ABOUT US
          </p>

          <h2 className="about-title">
            Reliable Electrical Solutions Built on Trust & Quality
          </h2>

          <p className="about-description">
            At Bright Home Solution, we provide safe, efficient and
            professional electrical services for residential and
            commercial spaces. Every project is completed with
            precision, transparency and long-lasting quality.
          </p>

          <div className="about-features">
            {features.map((feature, index) => (
              <div
                className="feature-item"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <FaCheckCircle className="check-icon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <a href="#services" className="about-btn">
            Explore Services
            <FaArrowRight />
          </a>
        </div>

        {/* Right Image */}
        <div
          className="about-image-wrapper"
          data-aos="fade-left"
        >
          <div className="image-glow"></div>

          <img
            src={aboutImg}
            alt="Professional Electrician"
            className="about-image"
          />
        </div>

      </div>
    </section>
  );
}

export default AboutUs;