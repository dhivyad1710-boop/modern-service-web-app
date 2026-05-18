import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WhyChooseUs() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
  }, []);

  const features = [
    {
      title: "Safety First",
      desc: "Every installation is checked carefully to ensure maximum electrical safety.",
    },
    {
      title: "Clean & Professional Work",
      desc: "Neat wiring, organized setup, and respectful service inside your home.",
    },
    {
      title: "On-Time Service",
      desc: "Quick response and reliable service without unnecessary delays.",
    },
    {
      title: "Trusted Local Experts",
      desc: "Experienced electricians focused on quality and long-term reliability.",
    },
  ];

  return (
    <section id="WhyChoose" className="Why-Choose">

      <h1
        className="why-title"
        data-aos="fade-up"
      >
        Why Choose Us
      </h1>

      <div className="stats-container">

        {features.map((item, index) => (

          <div
            className="stat-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >

            <h2>{item.title}</h2>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;