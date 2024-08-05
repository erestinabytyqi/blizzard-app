import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";


function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#" className="pl-16">
        Blizzard
      </a>
      <div className="flex justify-end items-center">
        <ScrollLink to="home" smooth={true} duration={500} offset={-70} className="mx-3">
          Home
        </ScrollLink>
        <ScrollLink to="services" smooth={true} duration={500} offset={-70} className="mx-3">
          Services
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} offset={-70} className="mx-3">
          About
        </ScrollLink>
        <ScrollLink to="tech" smooth={true} duration={500} offset={-70} className="mx-3">
          Technologies
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} offset={-70} className="mx-3">
          Contact
        </ScrollLink>
      </div>
    </header>
  );
}

export default Navbar;