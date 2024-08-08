import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "transparent"}`}>
      <div className="flex justify-between items-center px-16">
        <a href="#" className="logo">
          Blizzard
        </a>
        <div className="flex items-center">
          <div className="menu-icon md:hidden" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <div className={`menu-links ${menuOpen ? "open" : ""} md:flex hidden`}>
            <ScrollLink to="home" smooth={true} duration={500} offset={-64} className="mx-3">
              Home
            </ScrollLink>
            <ScrollLink to="services" smooth={true} duration={500} offset={-64} className="mx-3">
              Services
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} offset={-64} className="mx-3">
              About
            </ScrollLink>
            <ScrollLink to="tech" smooth={true} duration={500} offset={-64} className="mx-3">
              Technologies
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-64} className="mx-3">
              Contact
            </ScrollLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;