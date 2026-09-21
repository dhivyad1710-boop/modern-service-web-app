import "./Contact.css";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [popup, setPopup] = useState(null);

  /* =========================================
     AOS
  ========================================= */

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
  }, []);

  /* =========================================
     CLOSE POPUP
  ========================================= */

  const closePopup = () => {
    setPopup(null);
  };

  /* =========================================
     SHOW POPUP
  ========================================= */

  const showPopup = (type, title, message) => {
    setPopup({
      type,
      title,
      message,
    });
  };

  /* =========================================
     SEND EMAIL
  ========================================= */

  const sendEmail = async (e) => {
    e.preventDefault();

    if (cooldown || loading) {
      return;
    }

    /* =========================================
       BOT / SPAM CHECK
    ========================================= */

    if (form.current.bot_field.value) {
      return;
    }

    /* =========================================
       GET FORM VALUES
    ========================================= */

    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const phone = form.current.phone.value.trim();
    const service = form.current.service.value.trim();
    const message = form.current.message.value.trim();

    /* =========================================
       EMPTY FIELD VALIDATION
    ========================================= */

    if (!name || !email || !phone || !service || !message) {
      showPopup(
        "error",
        "Incomplete Form",
        "Please fill in all the required fields before submitting your request."
      );

      return;
    }

    /* =========================================
       EMAIL VALIDATION
    ========================================= */

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      showPopup(
        "error",
        "Invalid Email",
        "Please enter a valid email address."
      );

      return;
    }

    /* =========================================
       INDIAN MOBILE NUMBER VALIDATION
       10 digits and starts with 6-9
    ========================================= */

    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
      showPopup(
        "error",
        "Invalid Mobile Number",
        "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9."
      );

      return;
    }

    /* =========================================
       START LOADING
    ========================================= */

    setLoading(true);

    try {
      /* =========================================
         SEND REQUEST TO ADMIN
      ========================================= */

      await emailjs.sendForm(
        "service_c5mncvc",
        "template_tm0w6yj",
        form.current,
        "_I4FQBfqB9eFC0fa4"
      );

      /* =========================================
         SEND AUTO REPLY TO CUSTOMER
      ========================================= */

      await emailjs.send(
        "service_c5mncvc",
        "template_8c63vm7",
        {
          from_name: name,
          from_email: email,
          phone: phone,
          service: service,
          message: message,
        },
        "_I4FQBfqB9eFC0fa4"
      );

      /* =========================================
         SUCCESS
      ========================================= */

      showPopup(
        "success",
        "Message Sent Successfully!",
        "Thank you for contacting Bright Home Solution. Your service request has been received. We will get back to you soon."
      );

      /* Reset form */

      form.current.reset();

      /* =========================================
         COOLDOWN
      ========================================= */

      setCooldown(true);

      setTimeout(() => {
        setCooldown(false);
      }, 30000);

    } catch (error) {

      /* =========================================
         EMAILJS ERROR
      ========================================= */

      console.error("========== EMAILJS ERROR ==========");
      console.error("Status:", error?.status);
      console.error("Text:", error?.text);
      console.error("Full Error:", error);
      console.error("===================================");

      showPopup(
        "error",
        "Message Not Sent",
        "We couldn't send your request right now. Please try again or contact us directly by phone or WhatsApp."
      );

    } finally {
      setLoading(false);
    }
  };

  /* =========================================
     RETURN
  ========================================= */

  return (
    <section
      className="contact-section"
      id="contact"
    >

      {/* =====================================
          CUSTOM POPUP
      ===================================== */}

      {popup && (
        <div
          className="contact-popup-overlay"
          onClick={closePopup}
        >

          <div
            className={`contact-popup ${
              popup.type === "success"
                ? "contact-popup-success"
                : "contact-popup-error"
            }`}
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="contact-popup-close"
              onClick={closePopup}
              aria-label="Close popup"
            >
              ✕
            </button>


            {/* ICON */}

            <div className="contact-popup-icon">

              {popup.type === "success" ? (
                "✓"
              ) : (
                "!"
              )}

            </div>


            {/* TITLE */}

            <h3>
              {popup.title}
            </h3>


            {/* MESSAGE */}

            <p>
              {popup.message}
            </p>


            {/* OK BUTTON */}

            <button
              type="button"
              className="contact-popup-button"
              onClick={closePopup}
            >
              OK
            </button>

          </div>

        </div>
      )}


      {/* =====================================
          CONTACT CONTAINER
      ===================================== */}

      <div className="contact-container">


        {/* ===================================
            LEFT SIDE
        =================================== */}

        <div
          className="contact-left"
          data-aos="fade-right"
        >

          <p className="contact-tag">
            GET IN TOUCH
          </p>


          <h2 className="contact-title">
            Need Reliable{" "}
            <span>
              Electrical Service?
            </span>
          </h2>


          <p className="contact-subtitle">
            Professional electrical solutions designed
            for safety, performance, and long-term
            reliability for homes, offices, and
            commercial spaces.
          </p>


          {/* CONTACT INFO */}

          <div className="contact-info">


            {/* PHONE */}

            <div
              className="info-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <h4>
                <FaPhoneAlt className="icon-yellow" />
                Call Us
              </h4>

              <a
                href="tel:+918667345003"
                className="contact-link-btn"
              >
                📞 Call Now
              </a>

            </div>


            {/* EMAIL */}

            <div
              className="info-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <h4>
                <MdEmail className="icon-email" />
                Email
              </h4>

              <a
                href="mailto:brighthomefuture@gmail.com"
                className="contact-link-btn"
              >
                📧 Send Email
              </a>

            </div>


            {/* LOCATION */}

            <div
              className="info-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              <h4>
                <FaMapMarkerAlt className="icon-yellow" />
                Location
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


        {/* ===================================
            RIGHT SIDE
        =================================== */}

        <div
          id="service-form"
          className="contact-right"
          data-aos="fade-left"
        >

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            noValidate
          >

            {/* =================================
                HIDDEN BOT FIELD
            ================================= */}

            <input
              type="text"
              name="bot_field"
              className="bot-field"
              tabIndex="-1"
              autoComplete="off"
            />


            {/* =================================
                NAME
            ================================= */}

            <div className="input-group">

              <label htmlFor="from_name">
                Full Name
              </label>

              <input
                id="from_name"
                type="text"
                name="from_name"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />

            </div>


            {/* =================================
                EMAIL
            ================================= */}

            <div className="input-group">

              <label htmlFor="from_email">
                Email Address
              </label>

              <input
                id="from_email"
                type="email"
                name="from_email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
              />

            </div>


            {/* =================================
                PHONE
            ================================= */}

            <div className="input-group">

              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter 10-digit mobile number"
                inputMode="numeric"
                autoComplete="tel"
                maxLength="10"
                required

                onInput={(e) => {
                  e.target.value =
                    e.target.value.replace(/\D/g, "");
                }}
              />

            </div>


            {/* =================================
                SERVICE
            ================================= */}

            <div className="input-group">

              <label htmlFor="service">
                Service Needed
              </label>

              <input
                id="service"
                type="text"
                name="service"
                placeholder="Example: Home Wiring"
                required
              />

            </div>


            {/* =================================
                MESSAGE
            ================================= */}

            <div className="input-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your electrical requirement..."
                required
              />

            </div>


            {/* =================================
                SUBMIT BUTTON
            ================================= */}

            <button
              type="submit"
              className="contact-btn"
              disabled={loading || cooldown}
            >

              {loading
                ? "⏳ Sending..."
                : cooldown
                ? "✓ Request Received"
                : "⚡ Request Service"}

            </button>

          </form>

        </div>

      </div>


      {/* =====================================
          FLOATING WHATSAPP
      ===================================== */}

      <a
        href="https://wa.me/918667345003?text=Hello%20Bright%20Home%20Solution%20👋%0A%0AI%20am%20interested%20in%20your%20electrical%20services.%0A%0AName:%0ALocation:%0AService%20Needed:"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Bright Home Solution on WhatsApp"
      >

        <FaWhatsapp />

      </a>

    </section>
  );
}

export default Contact;