import React from "react";
import "../style/page.css";
import { ChakraProvider,Grid, GridItem ,Image} from "@chakra-ui/react";
function Solutions() {
  return (
    <>
       <ChakraProvider>
      <Grid
        h="100vh"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        {/* Large item spanning the entire width with an image */}
        <GridItem colSpan={4} bg="tomato">
          <Image src="https://via.placeholder.com/1500x500" alt="Large Image" objectFit="cover" w="100%" h="100%" />
        </GridItem>

        {/* Four equal square items with images */}
        <GridItem colSpan={1} rowSpan={1} bg="papayawhip">
          <Image src="https://via.placeholder.com/300" alt="Image 1" objectFit="cover" w="100%" h="100%" />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1} bg="papayawhip">
          <Image src="https://via.placeholder.com/300" alt="Image 2" objectFit="cover" w="100%" h="100%" />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1} bg="papayawhip">
          <Image src="https://via.placeholder.com/300" alt="Image 3" objectFit="cover" w="100%" h="100%" />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1} bg="papayawhip">
        <Image src="https://via.placeholder.com/300" alt="Image 4" objectFit="cover" w="100%" h="100%" />
        </GridItem>
      </Grid>
    </ChakraProvider>
    </>
  );
}

export default Solutions;

