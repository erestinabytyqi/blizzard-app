import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const [state, handleSubmit] = useForm("mqazbber");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  if (state.succeeded) {
    return <Box textAlign="center" mt={10}><Text fontSize="lg">Thanks for submitting!</Text></Box>;
  }

  return (
    <ChakraProvider>
      <Box maxW={{ base: "90%", md: "50%" }} mx="auto" mt={10} p={6}>
        <Box textAlign="left" mb={6}>
          <Heading as="h1" size="lg" mb={2}>
            Contact Us
          </Heading>
          <Text fontSize="md" color="gray.600">
            We'd love to hear from you! Please fill out the form below to get in
            touch.
          </Text>
        </Box>
        <VStack
          spacing={4}
          as="form"
          onSubmit={handleSubmit}
        >
          <HStack
            spacing={4}
            width="full"
            flexDirection={{ base: "column", md: "row" }}
          >
            <FormControl id="firstName" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="lastName" isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </FormControl>
          </HStack>
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel>Your Message</FormLabel>
            <Textarea
              name="message"
              placeholder="Your Message"
              rows={7}
              value={formData.message}
              onChange={handleChange}
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </FormControl>
          <Button bg="black" color="white" size="lg" type="submit" width="full" disabled={state.submitting}>
            Submit
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default ContactUs;