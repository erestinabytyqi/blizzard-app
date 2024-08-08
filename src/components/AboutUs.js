import React from 'react';
import { ChakraProvider, Grid, Box, Text } from "@chakra-ui/react";

function AboutUs() {
  return (
    <ChakraProvider>
      <Box color="white" textAlign="center" px={{ base: '4', md: '10', lg: '20' }}>
        <hr className='w-28 mx-auto border-2 border-white' />
        <Text as="h1" fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" pt="5">
          About us
        </Text>
        <Grid pt="10" pb="10" pr={{ base: '4', md: '10', lg: '20' }} pl={{ base: '4', md: '10', lg: '20' }}>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.400">
          In a tech world that never stops evolving, you need more than adaptation—you need innovation. At Blizzard LLC, securing your assets is not just a task; it's our mission. From optimizing IT networks and scaling cloud solutions to boosting cybersecurity, we future-proof your digital infrastructure. We turn security challenges into progress opportunities, seamlessly integrating cutting-edge technology so you can confidently navigate and thrive in a fast-changing landscape
          </Text>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default AboutUs;