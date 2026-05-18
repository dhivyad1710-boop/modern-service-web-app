import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Electrical Wiring",
    desc: "Safe and professional wiring solutions for homes and offices.",
    icon: "⚡",
    className: "wiring",
  },

  {
    title: "Appliance Repair",
    desc: "Quick repair services for all electrical appliances.",
    icon: "🔧",
    className: "repair",
  },

  {
    title: "Installation",
    desc: "Fan, light, and equipment installation with precision.",
    icon: "💡",
    className: "install",
  },

  {
    title: "Maintenance",
    desc: "Regular maintenance to ensure safety and efficiency.",
    icon: "🛠️",
    className: "maintain",
  },

  { 
    title: "Plumbing Services",
    desc: "Fast and reliable plumbing repairs, installations, and maintenance for homes and buildings.",
    icon: "🚿", 
    className: "plumbing" 
    },

 { 
  title: "Solar Installation", 
  desc: "Solar panel installation and maintenance for efficient and sustainable energy solutions.",
  icon: "☀️", 
  className: "solar" 
},
];

function Services() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
  }, []);

  return (
    <section id="services" className="services">

      <h2 data-aos="fade-up">
        Our Services
      </h2>

      <div className="services-container">

        {services.map((service, index) => (

          <div
            className="service-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >

            <div className={`icon ${service.className}`}>
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;