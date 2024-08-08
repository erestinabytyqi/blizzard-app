import React from 'react';
import { ChakraProvider, Box, Image, Text, Center } from '@chakra-ui/react';
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
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
      <ChakraProvider>
        <Center>
          <Box w={{ base: '90%', md: '70%', lg: '50%' }} textAlign="center">
            <Text as="h1" fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" pt="10">
              OUR TECHNOLOGIES
            </Text>
            <Text fontSize={{ base: 'md', md: 'xl' }} color="gray.400" pt="10" pb="10">
              Security and collaboration elevate our IT infrastructure, both physical and virtual, unified by a reliable network – the cornerstone of your digital transformation.
            </Text>
          </Box>
        </Center>
        <Box p={{ base: 5, md: 10 }} className='pb-20 pt-20'>
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