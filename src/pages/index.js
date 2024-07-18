import React from 'react';
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Element } from 'react-scroll';
import HeroSection from '../components/HeroSection'

import AboutUs from '../components/AboutUs';
import Navbar from '../components/Navbar';
import OurSolution from '../components/OurSolutions'
import ContactUs from '../components/formcomponents/ContactUs'
import OurTechnologies from '../components/OurTechnologies';
import Footer from '../components/Footer'
function IndexPage() {
  return (
    <ChakraProvider>
      <Navbar />
      <Box pt="60px">
        <Element name="home">
          <Box h="auto">
            <HeroSection/>
          </Box>
        </Element>
        <Element name="about">
          <AboutUs />
        </Element>
        <Element name="services">
          <Box h="auto" >
              <OurSolution/>
          </Box>
        </Element>
      
        <Element>
          <Box className='hero-short'>

          </Box>
        </Element>
        <Element name='herosection'>

        </Element>
        <Element name="tech">
        <Box h="auto" bg="white" >
          
        <OurTechnologies/>
          </Box>
        </Element>
        <Element>
          <Box className='hero-short'>

          </Box>
        </Element>
        <Element name="contact" >
          <Box h="auto" bg="white" >
          <ContactUs/>
          </Box>
        </Element>
        <Element name="footer">
          <Box>
            <Footer/>
          </Box>
        </Element>
      </Box>
    </ChakraProvider>
  );
}

export default IndexPage;