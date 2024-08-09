import React from 'react';
import { Box, Flex, Text, Link, Icon } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box  color="white" p={5}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="center"
        align="center"
        height={{ base: 'auto', md: '200px' }}
        textAlign="center"
      >
        <Box flex="1" mb={{ base: 4, md: 0 }}>
          <Text fontSize="24px" fontWeight="bold">Blizzard Solutions, LLC. </Text>
        </Box>
        <Box textAlign="center" flex="1">
          <Flex direction="column" align="center" mb={2}>
            <EmailIcon mr={2} />
            <Link href="mailto:info@blizzardllc.com" color="#bbb">info@blizzardllc.com</Link>
          </Flex>
          <Flex direction="column" align="center" mb={2}>
            <PhoneIcon mr={2} />
            <Link href="tel:6468443202" color="#bbb">(646) 844-3202</Link>
          </Flex>
          <Flex direction="column" align="center">
            <Icon as={FaMapMarkerAlt} mr={2} />
            <Text>355 Food Center Drive - Suite C104, Bronx, NY 10474</Text>
          </Flex>
        </Box>
        <Box flex="1" mt={{ base: 4, md: 0 }} textAlign="center">
          <Text>


          Connecting Lives, Engineering Futures:<br/><b> Your Tech Companion</b>
         </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;