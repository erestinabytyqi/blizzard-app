import React from 'react';
import Solutions from './Solutions';
import { Box, Text } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

function OurSolutions() {
  return (
    <ChakraProvider>
      <Box className='text-white mt-40 px-5 md:px-20'>   
        <Text className='text-4xl mt-10 font-bold text-center'>Our Solutions</Text>
        <Text className='text-xl text-gray-400 text-center pt-5'>
          We deliver cutting-edge technology for networking and connectivity,<br/> 
          ensuring your peace of mind with unparalleled security and reliability
        </Text>
        <Box className='mt-10'>
          <Solutions />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default OurSolutions;