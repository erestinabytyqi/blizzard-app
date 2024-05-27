import React from "react";
import icon from '../images/icon.png';
function Navbar() {
  return (
    <div>
      <header className="navbar fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 ">
        <a href="#" className="">
          <img src={icon} alt="Logo" className="h-8" />
        </a>
        <div className="flex justify-center items-center flex-grow ">
          <a href="#home" className="mx-2">
            HomePage
          </a>
          <a href="#services" className="mx-2">
            Services
          </a>
          <a href="#about" className="mx-2">
            About 
          </a>
          <a href="#tech" className="mx-2">
          Technologies
          </a>
          <a href="#contact" className="mx-2">
            Contact 
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
