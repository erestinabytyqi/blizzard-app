import React from 'react'
import { ChakraProvider, Grid, GridItem, Image, Box, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react';

function OurTechnologies() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = React.useState('');

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    onOpen();
  };

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
        <GridItem colSpan={1} bg="tomato" display="flex" justifyContent="center" alignItems="center">
          <Image 
            src="https://via.placeholder.com/100" 
            alt="Cisco 1" 
            cursor="pointer"
            onClick={() => handleImageClick("https://via.placeholder.com/100")}
          />
        </GridItem>
        <GridItem colSpan={1} bg="papayawhip" display="flex" justifyContent="center" alignItems="center">
          <Image 
            src="https://via.placeholder.com/100" 
            alt="Cisco 2" 
            cursor="pointer"
            onClick={() => handleImageClick("https://via.placeholder.com/100")}
          />
        </GridItem>
        <GridItem colSpan={1} bg="lightblue" display="flex" justifyContent="center" alignItems="center">
          <Image 
            src="https://via.placeholder.com/100" 
            alt="Cisco 3" 
            cursor="pointer"
            onClick={() => handleImageClick("https://via.placeholder.com/100")}
          />
        </GridItem>
        <GridItem colSpan={1} bg="lightgreen" display="flex" justifyContent="center" alignItems="center">
          <Image 
            src="https://via.placeholder.com/100" 
            alt="Cisco 4" 
            cursor="pointer"
            onClick={() => handleImageClick("https://via.placeholder.com/100")}
          />
        </GridItem>
        <GridItem colSpan={1} bg="lightcoral" display="flex" justifyContent="center" alignItems="center">
          <Image 
            src="https://via.placeholder.com/100" 
            alt="Cisco 5" 
            cursor="pointer"
            onClick={() => handleImageClick("https://via.placeholder.com/100")}
          />
        </GridItem>
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Selected Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={selectedImage} alt="Selected Image" objectFit="cover" w="100%" h="100%" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
        </div>
  )
}

export default OurTechnologies