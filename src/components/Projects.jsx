import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
  }, []);

  const projects = [
    {
      title: "Smart Home Wiring",
      description:
        "Modern electrical wiring solutions with premium safety standards.",
      image: "/images/project1.jpeg",
    },

    {
      title: "Luxury Lighting Installation",
      description:
        "Elegant lighting systems designed for modern premium interiors.",
      image: "/images/project2.jpeg",
    },

    {
      title: "Office Electrical Setup",
      description:
        "Complete office electrical installation with efficient power management.",
      image: "/images/project3.jpeg",
    },

    {
      title: "Industrial Power Maintenance",
      description:
        "Reliable maintenance and power optimization for commercial systems.",
      image: "/images/project4.jpeg",
    },

    {
      title: "Premium Home Lighting",
      description:
        "Beautiful modern lighting solutions designed to enhance comfort and elegance.",
      image: "/images/project5.jpeg",
    },

    {
      title: "Advanced Electrical Panel Setup",
      description:
        "Organized wiring and secure electrical distribution systems for long-term safety.",
      image: "/images/project6.jpeg",
    },
  ];

  return (
    <section id="projects" className="projects-section">

      <h2
        className="projects-title"
        data-aos="fade-up"
      >
        Our Recent Projects
      </h2>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div
            className="project-card"
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 150}
          >

            <div className="project-image-wrapper">

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-overlay"></div>

              <span className="project-badge">
                Completed Successfully
              </span>

            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;