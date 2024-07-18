import React from 'react';
import { ChakraProvider, Grid, GridItem, Box, Text } from "@chakra-ui/react";

const TypingHumanSVG = () => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="200px"
    height="200px"
  >
    <g id="body">
      <path
        fill="#D9E3E8"
        d="M32,2c7.732,0,14,6.268,14,14s-6.268,14-14,14s-14-6.268-14-14S24.268,2,32,2 M32,0
        C23.163,0,16,7.163,16,16s7.163,16,16,16s16-7.163,16-16S40.837,0,32,0L32,0z"
      />
      <path
        fill="#BEC9D1"
        d="M46,30H18c-2.209,0-4,1.791-4,4v20c0,2.209,1.791,4,4,4h28c2.209,0,4-1.791,4-4V34
        C50,31.791,48.209,30,46,30z"
      />
    </g>
    <g id="keyboard">
      <rect x="12" y="48" fill="#E1E8EE" width="40" height="6" />
      <rect x="14" y="49" fill="#BCC5CB" width="36" height="2" />
    </g>
    <g id="hands">
      <path
        fill="#F4CCB0"
        d="M14,36h4v6h-4V36z M46,36h4v6h-4V36z"
      />
    </g>
    <g id="arms">
      <path
        fill="#D9E3E8"
        d="M14,36c0,3.314,2.686,6,6,6s6-2.686,6-6s-2.686-6-6-6S14,32.686,14,36z M46,36c0,3.314-2.686,6-6,6
        s-6-2.686-6-6s2.686-6,6-6S46,32.686,46,36z"
      />
    </g>
    <g id="face">
      <circle fill="#F4CCB0" cx="32" cy="16" r="12" />
      <circle fill="#454B54" cx="27" cy="14" r="2" />
      <circle fill="#454B54" cx="37" cy="14" r="2" />
      <path
        fill="#454B54"
        d="M32,22c-2.209,0-4,1.791-4,4h8C36,23.791,34.209,22,32,22z"
      />
    </g>
  </svg>
);

function AboutUs() {
  return (
    <ChakraProvider>
      <Box className='text-white'>
        <hr className='w-28 mx-auto border-2 border-white' />
        <h1 className='text-4xl font-bold pt-5 text-center'>
          About us
        </h1>
        <Grid  className='pt-10 pb-10 pr-10'>
        
            <Text fontSize="lg" className='text-gray-400 pl-20 pr-20'>
              Empower Your Organization with Future-Ready Technology Solutions 
              In today's rapidly evolving technological landscape, preparing for the future goes beyond mere adaptation—it requires a proactive approach to harnessing the power of innovation. At Blizzard LLC, we understand that securing your critical assets isn't just a task; it's woven into everything we do.
              Whether it's optimizing IT networking, leveraging the scalability of cloud solutions, or fortifying cybersecurity measures, our holistic approach ensures that every aspect of your digital infrastructure is future-proofed. Rather than being hindered by security concerns, we view them as opportunities to drive progress.
              By integrating cutting-edge technologies seamlessly across your organization, we empower you to navigate the complexities of the digital realm with confidence. Our solutions aren't just about safeguarding your present—they're about scaling digital trust and confidence, allowing you to innovate and thrive in a rapidly changing landscape.
            </Text>

        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default AboutUs;