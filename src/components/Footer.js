import React from 'react';
import { Box, Flex, Text, Link, Icon } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="" color="white" p={5} height="200px">
      <Flex justify="space-between" align="center" height="100%">
        <Box flex="1" textAlign="left">
          <Text fontSize="24px" fontWeight="bold">Blizzard Solutions, LLC. </Text>
        </Box>
        <Box textAlign="center" flex="1">
          <Flex align="center" justify="left" mb={2}>
            <EmailIcon mr={2} />
            <Link href="mailto:info@blizzardllc.com" color="#bbb">info@blizzardllc.com</Link>
          </Flex>
          <Flex align="center" justify="left" mb={2}>
            <PhoneIcon mr={2} />
            <Link href="tel:6468443202" color="#bbb">(646) 844-3202</Link>
          </Flex>
          <Flex align="center" justify="left">
            <Icon as={FaMapMarkerAlt} mr={2} />
            <Text>355 Food Center Drive - Suite C104, Bronx, NY 10474</Text>
          </Flex>
        </Box>
        <Box flex="1" textAlign="right" justify="justify">
          <Text>
            This is a paragraph on the far right side. You can add any information here, such as a company slogan, mission statement, or any other relevant text.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;