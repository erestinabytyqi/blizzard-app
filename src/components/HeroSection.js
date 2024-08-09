import React from "react";
import { Button } from "@chakra-ui/react";
function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="main-text">
          Effortless Connections,
          <br />
          Limitless Possibilities
        </div>
        <div className="sub-text">Securing the Digital Pathways</div>
        <div className="pt-8">
          <Button colorScheme="black" size="sm">
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
