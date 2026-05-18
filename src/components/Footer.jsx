import "./Footer.css";
import {
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-brand">

          <h2>
            Bright Home <span>Solution ⚡</span>
          </h2>

          <p>
            Professional electrical services for homes,
            offices, and commercial spaces with safety,
            quality, and reliability.
          </p>

        </div>

        {/* CENTER */}

        <div className="footer-links">

         <h3>Quick Links</h3>

         <a href="#home">Home</a>

         <a href="#services">Services</a>

         <a href="#WhyChoose">Why Choose Us</a>

         <a href="#projects">Projects</a>

         <a href="#reviews">Reviews</a>

         <a href="#contact">Contact</a>

        </div>

        {/* RIGHT */}

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>
          <FaPhoneAlt className="footer-icon" />
            +91 8667345003
          </p>

          <p>
          <MdEmail className="footer-icon" />
            brighthomefuture@gmail.com
          </p>

          <p>
          <FaMapMarkerAlt className="footer-icon" />
            Tiruppur, Tamil Nadu
          </p>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">
        © 2026 Bright Home Solution. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;