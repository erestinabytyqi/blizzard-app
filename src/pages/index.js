import React from 'react';
import { ChakraProvider, Box, useBreakpointValue } from "@chakra-ui/react";
import { Element } from 'react-scroll';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Navbar from '../components/Navbar';
import OurSolution from '../components/OurSolutions';
import ContactUs from '../components/formcomponents/ContactUs';
import OurTechnologies from '../components/OurTechnologies';
import Footer from '../components/Footer';

function Index() {
  const sectionPadding = useBreakpointValue({ base: '4', md: '8', lg: '16' });

  return (
    <ChakraProvider>
      <Navbar />
      <Box>
        <Element name="home">
          <Box h="auto" >
            <HeroSection />
          </Box>
        </Element>
        <Element name="about">
          <Box h="auto" p={sectionPadding}>
            <AboutUs />
          </Box>
        </Element>
        <Element name="services">
          <Box h="auto" p={sectionPadding}>
            <OurSolution />
          </Box>
        </Element>
        <Element>
          <Box className='hero-short' p={sectionPadding}>
            {/* Content for hero-short */}
          </Box>
        </Element>
        <Element name='herosection'>
          <Box h="auto" p={sectionPadding}>
            {/* Content for herosection */}
          </Box>
        </Element>
        <Element name="tech">
          <Box h="auto" bg="white" p={sectionPadding}>
            <OurTechnologies />
          </Box>
        </Element>
        <Element>
          <Box className='hero-short' p={sectionPadding}>
            {/* Content for hero-short */}
          </Box>
        </Element>
        <Element name="contact">
          <Box h="auto" bg="white" p={sectionPadding}>
            <ContactUs />
          </Box>
        </Element>
        <Element name="footer">
          <Box p={sectionPadding}>
            <Footer />
          </Box>
        </Element>
      </Box>
    </ChakraProvider>
  );
}

export default Index;