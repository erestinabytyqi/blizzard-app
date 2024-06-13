import React from "react";
import { ChakraProvider, Box, FormControl, FormLabel, Input, Textarea, Button, VStack, HStack, Heading, Text } from '@chakra-ui/react';

function ContactUs() {
  return (
    <ChakraProvider>
    <Box maxW="50%" mx="auto" mt={10} p={6}>
      <Box textAlign="left" mb={6}>
        <Heading as="h1" size="lg" mb={2}>
          Contact Us
        </Heading>
        <Text fontSize="md" color="gray.600">
          We'd love to hear from you! Please fill out the form below to get in touch.
        </Text>
      </Box>
      <VStack spacing={4}>
        <HStack spacing={4} width="full">
          <FormControl id="first-name" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="First Name" />
          </FormControl>
          <FormControl id="last-name" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Last Name" />
          </FormControl>
        </HStack>
        <FormControl id="email" isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input type="email" placeholder="Email Address" />
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>Your Message</FormLabel>
          <Textarea placeholder="Your Message" rows={7} />
        </FormControl>
        <Button bg="black" color="white" size="lg" type="submit" width="full">
          Submit
        </Button>
      </VStack>
    </Box>
  </ChakraProvider>
  );
}

export default ContactUs;
