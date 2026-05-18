import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonials() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const testimonials = [
    {
      name: "Residential Client",
      role: "Home Electrical Service",
      review:
        "Excellent electrical service with clean wiring and professional installation work.",
    },

    {
      name: "Commercial Client",
      role: "Office Electrical Setup",
      review:
        "Fast response and premium quality service. Everything was completed safely and professionally.",
    },

    {
      name: "Villa Project Owner",
      role: "Luxury Home Installation",
      review:
        "Very reliable electricians with excellent attention to detail and safety.",
    },
  ];

  return (
    <section className="testimonials-section">

      <h2
        className="testimonials-title"
        data-aos="fade-up"
      >
        What Our Clients Say
      </h2>

      <div className="testimonial-slider">

        <div className="testimonial-track">

          {[...testimonials, ...testimonials].map((item, index) => (

            <div
              className="testimonial-card"
              key={index}
            >

              <div className="testimonial-top no-image">

                <div>
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>

              </div>

              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="testimonial-review">
                "{item.review}"
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;