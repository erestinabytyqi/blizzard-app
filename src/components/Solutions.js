import React from "react";
import "../style/page.css";
import { motion } from "framer-motion";
import cloudsecurity from '../images/cloudsecurity.jpeg';
import microsoft356 from '../images/microsoft365development.jpeg';
import managedit from '../images/managedit.jpeg';
import networkitsecurity from '../images/networkitsecurity.avif';
import cybersecurity from '../images/cybersecurity.avif';
import { ChakraProvider, Grid, GridItem, Image, Box, Text } from "@chakra-ui/react";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

function Solutions() {
  return (
    <ChakraProvider>
      <Grid
        templateRows={{ base: "repeat(5, auto)", md: "repeat(3, 1fr)" }}
        templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
        gap={4}
      >
        {/* Large item with a fixed height spanning the entire width with an image */}
        <GridItem colSpan={{ base: 1, md: 4 }} bg="tomato" position="relative" h="300px">
          <MotionImage
            src={networkitsecurity}
            alt="Large Image"
            objectFit="cover"
            w="100%"
            h="100%"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <MotionBox
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.5)"
            color="white"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Text fontSize="2xl">Network IT Security
              <br />
              <span className="text-sm text-gray-400 p-1">
                Implementing advanced network security measures to safeguard your organization's data and assets from unauthorized access and cyber attacks.
              </span>
            </Text>
          </MotionBox>
        </GridItem>

        {/* Four equal square items with images */}
        <GridItem colSpan={1} rowSpan={1} bg="papayawhip" position="relative">
          <MotionImage
            src={cloudsecurity}
            alt="Image 1"
            objectFit="cover"
            w="100%"
            h="100%"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <MotionBox
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.5)"
            color="white"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Text fontSize="xl">Cloud Security
              <br />
              <span className="text-sm text-gray-400 p-1">
                Ensuring the security and compliance of your cloud infrastructure with robust security protocols and solutions.
              </span>
            </Text>
          </MotionBox>
        </GridItem>

        <GridItem colSpan={1} rowSpan={1} bg="papayawhip" position="relative">
          <MotionImage
            src={microsoft356}
            alt="Image 2"
            objectFit="cover"
            w="100%"
            h="100%"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <MotionBox
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.5)"
            color="white"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Text fontSize="xl">Microsoft 365 Development
              <br />
              <span className="text-sm text-gray-400 p-1">
                Leveraging Microsoft 365 tools and platforms to enhance collaboration, productivity, and data security.
              </span>
            </Text>
          </MotionBox>
        </GridItem>

        <GridItem colSpan={1} rowSpan={1} bg="papayawhip" position="relative">
          <MotionImage
            src={cybersecurity}
            alt="Image 3"
            objectFit="cover"
            w="100%"
            h="100%"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <MotionBox
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.5)"
            color="white"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Text fontSize="xl">Cybersecurity
              <br />
              <span className="text-sm text-gray-400 p-1">
                Protecting your organization against cyber threats with advanced security measures and proactive monitoring.
              </span>
            </Text>
          </MotionBox>
        </GridItem>

        <GridItem colSpan={1} rowSpan={1} bg="papayawhip" position="relative">
          <MotionImage
            src={managedit}
            alt="Image 4"
            objectFit="cover"
            w="100%"
            h="100%"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <MotionBox
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.5)"
            color="white"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Text fontSize="xl">Managed IT Services
              <br />
              <span className="text-sm text-gray-400 p-1">
                Providing comprehensive IT management and support to optimize your organization's performance and efficiency.
              </span>
            </Text>
          </MotionBox>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default Solutions;