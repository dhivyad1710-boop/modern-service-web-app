import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <h2 className="logo">
        ⚡ Bright Home Solution
      </h2>

      {/* MENU ICON */}

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* NAV LINKS */}

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <a
          href="#home"
          className="nav-item"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>

        <a
          href="#services"
          className="nav-item"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </a>

         <a
          href="#WhyChoose"
          className="nav-item"
          onClick={() => setMenuOpen(false)}
        >
          WhyChooseUs
        </a>

        <a
          href="#projects"
          className="nav-item"
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>

        <a
          href="#reviews"
          className="nav-item"
          onClick={() => setMenuOpen(false)}
        >
          Review
        </a>

        <a
          href="#contact"
          className="nav-item"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>

      </div>

      {/* BUTTON */}

      <a href="#contact">
        <button className="btn-primary nav-btn">
          Call Now
        </button>
      </a>

    </nav>
  );
}

export default Navbar;