import React from "react";

import icon from '../images/icon.png';
function Navbar() {
  return (
    <div>
      <header className="navbar fixed top-0 left-0 right-0 z-50 flex items-end justify-between pt-10  ">
        <a href="#" className="pl-16">
         Blizzard
        </a>
        <div className="flex justify-end items-end flex-grow pr-16 ">
          <a href="#home" className="mx-2">
            Home
          </a>
          <a href="#tech" className="mx-2">
          Technologies
          </a>
          <a href="#about" className="mx-2">
            About 
          </a>
          <a href="#services" className="mx-2">
            Services
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
