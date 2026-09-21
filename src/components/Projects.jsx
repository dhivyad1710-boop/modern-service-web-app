import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import "./Projects.css";

function Projects() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });

    const updateVisibleCards = () => {

      if (window.innerWidth <= 600) {
        setVisibleCards(1);
      } 
      else if (window.innerWidth <= 1024) {
        setVisibleCards(2);
      } 
      else {
        setVisibleCards(3);
      }

    };

    updateVisibleCards();

    window.addEventListener(
      "resize",
      updateVisibleCards
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateVisibleCards
      );
    };

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


  const maxIndex =
    Math.max(
      0,
      projects.length - visibleCards
    );


  const nextSlide = () => {

    setCurrentIndex((prev) =>
      prev >= maxIndex
        ? 0
        : prev + 1
    );

  };


  const prevSlide = () => {

    setCurrentIndex((prev) =>
      prev <= 0
        ? maxIndex
        : prev - 1
    );

  };


  return (

    <section
      className="projects-section"
      id="projects"
    >

      {/* HEADER */}

      <div
        className="projects-header"
        data-aos="fade-up"
      >

        <span className="projects-tag">
          OUR WORK
        </span>

        <h2 className="projects-title">
          Our Recent Projects
        </h2>

        <p className="projects-subtitle">
          A showcase of electrical installations,
          lighting solutions and professional
          projects completed with quality and precision.
        </p>

      </div>


      {/* CAROUSEL */}

      <div
        className="projects-carousel"
        data-aos="fade-up"
      >

        {/* PREVIOUS BUTTON */}

        <button
          className="project-arrow project-prev"
          onClick={prevSlide}
          aria-label="Previous project"
        >
          <FaChevronLeft />
        </button>


        {/* VIEWPORT */}

        <div className="projects-viewport">

          <div
            className="projects-track"
            style={{
              transform: `translateX(-${
                currentIndex *
                (100 / visibleCards)
              }%)`,
            }}
          >

            {projects.map(
              (project, index) => (

                <div
                  className="project-slide"
                  key={index}
                >

                  <div
                    className="project-card"
                  >

                    {/* IMAGE */}

                    <div className="project-image-wrapper">

                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />

                      <div className="project-overlay"></div>

                      <span className="project-badge">
                        Completed
                      </span>

                    </div>


                    {/* CONTENT */}

                    <div className="project-content">

                      <span className="project-number">
                        PROJECT{" "}
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3>
                        {project.title}
                      </h3>

                      <p>
                        {project.description}
                      </p>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        </div>


        {/* NEXT BUTTON */}

        <button
          className="project-arrow project-next"
          onClick={nextSlide}
          aria-label="Next project"
        >
          <FaChevronRight />
        </button>

      </div>


      {/* DOTS */}

      <div className="project-dots">

        {Array.from({
          length: maxIndex + 1
        }).map((_, index) => (

          <button
            key={index}
            className={`project-dot ${
              currentIndex === index
                ? "active"
                : ""
            }`}
            onClick={() =>
              setCurrentIndex(index)
            }
            aria-label={`Go to project ${index + 1}`}
          />

        ))}

      </div>


      {/* MOBILE HINT */}

      <p className="project-swipe-hint">
        Swipe to explore projects
      </p>

    </section>

  );

}

export default Projects;