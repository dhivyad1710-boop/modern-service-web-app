import { useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <nav className="navbar">


      {/* LOGO */}

      <h2 
        className="logo"
        title="Bright Home Solution"
      >
        ⚡ Bright Home Solution
      </h2>



      {/* MENU ICON */}

      <button
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>



      {/* NAV LINKS */}

      <div 
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >


        <a
          href="#home"
          className="nav-item"
          onClick={closeMenu}
        >
          Home
        </a>


        <a
          href="#about"
          className="nav-item"
          onClick={closeMenu}
        >
          About
        </a>


        <a
          href="#services"
          className="nav-item"
          onClick={closeMenu}
        >
          Services
        </a>


        <a
          href="#why-choose"
          className="nav-item"
          onClick={closeMenu}
        >
          Why Us
        </a>


        <a
          href="#projects"
          className="nav-item"
          onClick={closeMenu}
        >
          Projects
        </a>


        <a
          href="#reviews"
          className="nav-item"
          onClick={closeMenu}
        >
          Reviews
        </a>


        <a
          href="#faq"
          className="nav-item"
          onClick={closeMenu}
        >
          FAQ
        </a>


        <a
          href="#contact"
          className="nav-item"
          onClick={closeMenu}
        >
          Contact
        </a>


      </div>



      {/* CTA BUTTON */}

      <a 
        href="#contact"
        onClick={closeMenu}
      >

        <button className="btn-primary nav-btn">
          Call Now
        </button>

      </a>


    </nav>
  );
}


export default Navbar;