import React from 'react'
import { ChakraProvider, Grid, GridItem, Image, Box, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import cisco from '../images/cisco.jpg'
function OurTechnologies() {
  

  return (
    <div className='text-white'>
        <h1  className='text-4xl pt-5 font-bold'>
        OUR TECHNOLOGIES

        </h1>
        <p className='pt-10 pb-10 text-xl text-gray-400'>
            Security and collaboration elevate our it infrastrcutre, both physical and <br/>
             virtual
            ,unified by a reliabel network -the cornerstone of your digital
            transformation.
        </p>
       <ChakraProvider>
      <Grid
        h="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1}  display="flex" justifyContent="center" alignItems="center">
          <Image 
            src={cisco}
            alt="Cisco 1" 
            cursor="pointer"

          />
        </GridItem>
        <GridItem colSpan={1}  display="flex" justifyContent="center" alignItems="center">
          <Image 
  src={cisco}
            alt="Cisco 2" 
            cursor="pointer"

          />
        </GridItem>
        <GridItem colSpan={1} display="flex" justifyContent="center" alignItems="center">
          <Image 
  src={cisco}
            alt="Cisco 3" 
            cursor="pointer"

          />
        </GridItem>
        <GridItem colSpan={1} display="flex" justifyContent="center" alignItems="center">
          <Image 
  src={cisco}
            alt="Cisco 4" 
            cursor="pointer"

          />
        </GridItem>
        <GridItem colSpan={1}  display="flex" justifyContent="center" alignItems="center">
          <Image 
src={cisco}
            alt="Cisco 5" 
            cursor="pointer"

          />
        </GridItem>
      </Grid>

     
    </ChakraProvider>
        </div>
  )
}

export default OurTechnologies