import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <h2>
          Sh<span>ah</span>
        </h2>
      </NavLink>

      <nav className="nav">
        <NavLink to="/AboutMe">About Me</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </div>

      <div className={`mobile-nav ${isOpen ? "active" : ""}`}>
        <NavLink to="/AboutMe" onClick={() => setIsOpen(false)}>
          About Me
        </NavLink>

        <NavLink to="/services" onClick={() => setIsOpen(false)}>
          Services
        </NavLink>

        <NavLink to="/skills" onClick={() => setIsOpen(false)}>
          Skills
        </NavLink>

        <NavLink to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </NavLink>
      </div>
    </header>
  );
};

export default Header;