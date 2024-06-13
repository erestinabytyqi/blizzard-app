import React, { useEffect, useState } from "react";
import '../style/Navbar.css'

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
        <a href="#home" className="mx-3">
          Home
        </a>
        <a href="#tech" className="mx-3">
          Technologies
        </a>
        <a href="#about" className="mx-3">
          About
        </a>
        <a href="#services" className="mx-3">
          Services
        </a>
        <a href="#contact" className="mx-3">
          Contact
        </a>
      </div>
    </header>
  );
}

export default Navbar;
