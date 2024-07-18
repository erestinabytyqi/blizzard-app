import React from 'react';
import { ChakraProvider, Box, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cisco from '../images/ciscow.png';
import microsoft from '../images/Microsoft.png';
import googlecloud from '../images/googlecloud.png';
import etherium from '../images/etherium.png';
import tableau from '../images/tableau.png';
import oculus from '../images/oculus.png';
import atandt from '../images/atandt.png';

const MotionBox = motion(Box);

function OurTechnologies() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    cssEase: 'linear'
  };

  const imageLinks = [
    { src: microsoft, alt: "Microsoft", url: "https://www.microsoft.com" },
    { src: cisco, alt: "Cisco", url: "https://www.cisco.com" },
    { src: googlecloud, alt: "Google Cloud", url: "https://cloud.google.com" },
    { src: etherium, alt: "Ethereum", url: "https://ethereum.org" },
    { src: oculus, alt: "Oculus", url: "https://www.oculus.com" },
    { src: atandt, alt: "AT&T", url: "https://www.att.com" },
    { src: tableau, alt: "Tableau", url: "https://www.tableau.com" }
  ];

  return (
    <div className='text-black'>
      <h1 className='text-4xl pt-10 font-bold pl-5'>
        OUR TECHNOLOGIES
      </h1>
      <p className='pt-10 pb-10 text-xl text-gray-400 pl-5 pr-96'>
      Security and collaboration elevate our IT infrastructure, both physical and virtual, unified by a reliable network – the cornerstone of your digital transformation. Our robust security measures ensure the protection of sensitive data, while fostering a collaborative environment that enhances productivity and innovation. With a network designed to support seamless communication and data exchange, your organization can achieve unparalleled efficiency and agility. This integrated approach not only safeguards your digital assets but also empowers your team to work more effectively, driving growth and success in a rapidly evolving technological landscape. By prioritizing both security and collaboration, we create a resilient and adaptive IT infrastructure that is poised to meet the challenges of today and tomorrow.</p>
      <ChakraProvider>
        <Box pl={5} pr={5} className='pb-20 pt-20'>
          <Slider {...settings}>
            {imageLinks.map((image, index) => (
              <MotionBox
                key={index}
                p={2}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a href={image.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    boxSize="150px"
                    objectFit="contain"
                    mx="auto"
                    cursor="pointer"
                  />
                </a>
              </MotionBox>
            ))}
          </Slider>
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default OurTechnologies;