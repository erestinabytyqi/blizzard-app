import React from "react";
import "../style/page.css";
import { ChakraProvider,Grid, GridItem } from "@chakra-ui/react";
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
        {/* Large item spanning the entire width */}
        <GridItem colSpan={4} bg="tomato" />

        {/* Four equal square items */}
        <GridItem colSpan={1} rowSpan={1} bg="papayawhip" />
        <GridItem colSpan={1} rowSpan={1} bg="papayawhip" />
        <GridItem colSpan={1} rowSpan={1} bg="papayawhip" />
        <GridItem colSpan={1} rowSpan={1} bg="papayawhip" />
      </Grid>
    </ChakraProvider>
    </>
  );
}

export default Solutions;

