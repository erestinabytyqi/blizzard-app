import React from "react";
import "../style/page.css";
import { Grid, GridItem } from "@chakra-ui/react";
function Solutions() {
  return (
    <>
      <Grid
        h="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={3} bg="tomato" />
        <GridItem colSpan={2}  bg="papayawhip" />
        <GridItem colSpan={2}  bg="papayawhip" />
      </Grid>
    </>
  );
}

export default Solutions;

