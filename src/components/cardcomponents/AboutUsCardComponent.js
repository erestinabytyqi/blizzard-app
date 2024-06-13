import React from "react";
import {
  GridItem,
  Grid,
  Button,
  ChakraProvider,
  Image,
  Box,
} from "@chakra-ui/react";
function AboutUsCardComponent() {
  return (
    <ChakraProvider className="mt-5"> 
    <Grid
      h='200px'
      templateRows='repeat(1, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
      className="flex"
    >
      <GridItem colSpan={3}>
        <Box display="flex" flexDirection="column" justifyContent="center" h="100%">
          <h1 className="text-4xl font-bold text-white pl-4">
            Heading
          </h1>
          <p className="text-lg text-gray-400 ml-4 mt-2 w-4/5">
          Empower Your Organization with Future-Ready Technology Solutions 
In today's rapidly evolving technological landscape, preparing for the future goes beyond mere adaptation—it requires a proactive approach to harnessing the power of innovation. At Blizzard LLC, we understand that securing your critical assets isn't just a task; it's woven into everything we do. 
Whether it's optimizing IT networking, leveraging the scalability of cloud solutions, or fortifying cybersecurity measures, our holistic approach ensures that every aspect of your digital infrastructure is future-proofed. Rather than being hindered by security concerns, we view them as opportunities to drive progress. 
By integrating cutting-edge technologies seamlessly across your organization, we empower you to navigate the complexities of the digital realm with confidence. Our solutions aren't just about safeguarding your present—they're about scaling digital trust and confidence, allowing you to innovate and thrive in a rapidly changing landscape. </p>
          {/* <Button ml={4} mt={4}>
            More
          </Button> */}
        </Box>
      </GridItem>
      <GridItem colSpan={2}>
        <Image 
          src="https://via.placeholder.com/300" 
          alt="Image 4" 
          objectFit="cover" 
          w="100%" 
          h="100%" 
        />
      </GridItem>
    </Grid>
  </ChakraProvider>
  );
}

export default AboutUsCardComponent;
