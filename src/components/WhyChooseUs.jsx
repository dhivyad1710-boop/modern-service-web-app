import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaShieldAlt,
  FaBroom,
  FaClock,
  FaUserCheck,
} from "react-icons/fa";

function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
  }, []);

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Safety First",
      desc: "Every installation is checked carefully to ensure maximum electrical safety.",
    },
    {
      icon: <FaBroom />,
      title: "Clean & Professional Work",
      desc: "Neat wiring, organized setup, and respectful service inside your home.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Service",
      desc: "Quick response and reliable service without unnecessary delays.",
    },
    {
      icon: <FaUserCheck />,
      title: "Trusted Local Experts",
      desc: "Experienced electricians focused on quality and long-term reliability.",
    },
  ];

  return (
    <section id="why-choose" className="why-Choose">

      <h2
        className="why-title"
        data-aos="fade-up"
      >
        Why Choose Us
      </h2>

      <div className="features-grid">

        {features.map((item, index) => (

          <div
            className="feature-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 120}
          >

            <div className="card-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;