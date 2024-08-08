import React, { useState } from "react";
import { ChakraProvider, Box, FormControl, FormLabel, Input, Textarea, Button, VStack, HStack, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send', formData);
      alert('Message sent successfully');
    } catch (error) {
      alert('Failed to send message');
    }
  };

  return (
    <ChakraProvider>
      <Box maxW={{ base: "90%", md: "50%" }} mx="auto" mt={10} p={6}>
        <Box textAlign="left" mb={6}>
          <Heading as="h1" size="lg" mb={2}>
            Contact Us
          </Heading>
          <Text fontSize="md" color="gray.600">
            We'd love to hear from you! Please fill out the form below to get in touch.
          </Text>
        </Box>
        <VStack spacing={4} as="form" onSubmit={handleSubmit}>
          <HStack spacing={4} width="full" flexDirection={{ base: "column", md: "row" }}>
            <FormControl id="firstName" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="First Name" value={formData.firstName} onChange={handleChange} />
            </FormControl>
            <FormControl id="lastName" isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
            </FormControl>
          </HStack>
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel>Your Message</FormLabel>
            <Textarea placeholder="Your Message" rows={7} value={formData.message} onChange={handleChange} />
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