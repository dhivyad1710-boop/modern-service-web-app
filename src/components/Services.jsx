import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  FaBolt,
  FaLightbulb,
  FaShower,
  FaSolarPanel,
} from "react-icons/fa";

import {
  FaScrewdriverWrench,
  FaWrench,
} from "react-icons/fa6";

const services = [
  {
    title: "Electrical Wiring",
    desc: "Expert wiring solutions for homes, offices, and commercial spaces.",
    icon: <FaBolt />,
    className: "wiring",
  },
  {
    title: "Appliance Repair",
    desc: "Fast and reliable repair services for all major electrical appliances.",
    icon: <FaWrench />,
    className: "repair",
  },
  {
    title: "Installation",
    desc: "Professional installation of fans, lights, switches, and electrical equipment.",
    icon: <FaLightbulb />,
    className: "install",
  },
  {
    title: "Maintenance",
    desc: "Preventive maintenance to keep your electrical systems safe and efficient.",
    icon: <FaScrewdriverWrench />,
    className: "maintain",
  },
  {
    title: "Plumbing Services",
    desc: "Complete plumbing solutions including repairs, fittings, and maintenance.",
    icon: <FaShower />,
    className: "plumbing",
  },
  {
    title: "Solar Installation",
    desc: "Efficient solar panel installation and maintenance for sustainable energy.",
    icon: <FaSolarPanel />,
    className: "solar",
  },
];

function Services() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <section id="services" className="services">

      <h2 data-aos="fade-up">Our Services</h2>

      {isMobile ? (

        <Swiper
  modules={[Pagination]}
  pagination={{ clickable: true }}
  slidesPerView={1}
  centeredSlides={false}
  spaceBetween={20}
  loop={true}
  className="services-swiper"
>
  
          {services.map((service, index) => (

            <SwiperSlide key={index}>

              <div
                className="service-card"
                data-aos="fade-up"
              >

                <div className="icon-wrapper">
                  <div className={`icon ${service.className}`}>
                    {service.icon}
                  </div>
                </div>

                <h3>{service.title}</h3>

                <div className="service-divider"></div>

                <p>{service.desc}</p>

              </div>

            </SwiperSlide>

          ))}
        </Swiper>

      ) : (

        <div className="services-container">

          {services.map((service, index) => (

            <div
              className="service-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >

              <div className="icon-wrapper">
                <div className={`icon ${service.className}`}>
                  {service.icon}
                </div>
              </div>

              <h3>{service.title}</h3>

              <div className="service-divider"></div>

              <p>{service.desc}</p>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}

export default Services;