import "./Contact.css";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {

  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
  }, []);

  const sendEmail = async (e) => {
  e.preventDefault();

  if (cooldown) return;

    // 🚫 BOT/SPAM CHECK
  if (form.current.bot_field.value) {
    return;
  }


  setLoading(true);

  try {

    // ✅ SEND EMAIL TO ADMIN
    await emailjs.sendForm(
      "service_c5mncvc",
      "template_tm0w6yj",
      form.current,
      "_I4FQBfqB9eFC0fa4"
    );

    // ✅ SEND AUTO REPLY TO CUSTOMER
    await emailjs.send(
      "service_c5mncvc",
      "template_8c63vm7",
      {
        from_name: form.current.from_name.value,
        from_email: form.current.from_email.value,
        phone: form.current.phone.value,
        service: form.current.service.value,
        message: form.current.message.value,
      },
      "_I4FQBfqB9eFC0fa4"
    );

    // ✅ SUCCESS
    setStatus("success");
    form.current.reset();

    setCooldown(true);

    setTimeout(() => {
      setCooldown(false);
    }, 30000);

  } catch (error) {

    console.log("EmailJS Error:", error);
    setStatus("error");

  } finally {

    setLoading(false);

    setTimeout(() => {
      setStatus("");
    }, 3000);

  }
};

  return (
    <section id="contact" className="contact section">

      {/* ===== POPUP ===== */}
      {status && (
        <div className={`popup ${status}`}>
          {status === "success" ? (
            <h3>⚡ Message Sent Successfully!</h3>
          ) : (
            <h3>❌ Failed to Send Message</h3>
          )}
        </div>
      )}

      <div className="contact-container">

        {/* ===== LEFT SIDE ===== */}
        <div className="contact-left" data-aos="fade-right">

          <p className="contact-tag">GET IN TOUCH</p>

          <h2 className="contact-title">
            Need Reliable <span>Electrical Service?</span>
          </h2>

          <p className="contact-subtitle">
            Professional electrical solutions designed for safety,
            performance, and long-term reliability for homes,
            offices, and commercial spaces.
          </p>

          <div className="contact-info">

            <div className="info-card" data-aos="fade-up" data-aos-delay="100">
              <h4>
                <FaPhoneAlt className="icon-yellow" /> Call Us
              </h4>
              <a href="tel:+918667345003" className="contact-link-btn">
                📞 Call Now
              </a>
            </div>

            <div className="info-card" data-aos="fade-up" data-aos-delay="200">
              <h4>
                <MdEmail className="icon-email" /> Email
              </h4>
              <a href="mailto:brighthomefuture@gmail.com" className="contact-link-btn">
                📧 Send Email
              </a>
            </div>

            <div className="info-card" data-aos="fade-up" data-aos-delay="300">
              <h4>
                <FaMapMarkerAlt className="icon-yellow" /> Location
              </h4>
              <a
                href="https://www.google.com/maps/place/Bright+home+solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-btn"
              >
                📌 Locate Us on Map
              </a>
            </div>

          </div>
        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div id="service-form" className="contact-right" data-aos="fade-left" >

          <form ref={form} onSubmit={sendEmail} className="contact-form">

            <input type="text" name="bot_field" style={{ display: "none" }} />

            <div className="input-group">
              <input type="text" name="from_name" required />
              <label>Full Name</label>
            </div>

            {/* ⚡ FIXED: EMAIL FIELD ADDED */}
            <div className="input-group">
              <input type="email" name="from_email" required />
              <label>Email Address</label>
            </div>

            <div className="input-group">
              <input type="tel" name="phone" required />
              <label>Phone Number</label>
            </div>

            <div className="input-group">
              <input type="text" name="service" required />
              <label>Service Needed</label>
            </div>

            <div className="input-group">
              <textarea name="message" rows="5" required></textarea>
              <label>Message</label>
            </div>

            <button
              type="submit"
              className="contact-btn"
              disabled={loading}
            >
              {loading ? "⏳ Sending..." : "⚡ Request Service"}
            </button>

          </form>

        </div>

      </div>

      {/* ===== FLOATING WHATSAPP BUTTON ===== */}
      <a
        href="https://wa.me/918667345003?text=Hello%20Bright%20Home%20Solution%20👋%0A%0AI%20am%20interested%20in%20your%20electrical%20services.%0A%0AName:%0ALocation:%0AService%20Needed:"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

    </section>
  );
}

export default Contact;