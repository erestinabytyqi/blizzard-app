import React from 'react'
import { Box, Text,ChakraProvider,Grid, GridItem  } from "@chakra-ui/react"

function OurTechnologies() {
  return (
    <div className='text-white'>
        <h1>
        Our Technologies
        <Box p={8}>
      <Text fontSize="xl">Hello World</Text>
    </Box>
        </h1>
        <p>
            Security and collaboration elevate our it infrastrcutre, both physical and virtual
            ,unified by a reliabel network -the cornerstone of your digital
            transformation.
        </p>
        <ChakraProvider>
      <Grid
        h="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1} bg="tomato" />
        <GridItem colSpan={1} bg="papayawhip" />
        <GridItem colSpan={1} bg="papayawhip" />
        <GridItem colSpan={1} bg="papayawhip" />
        <GridItem colSpan={1} bg="papayawhip" />
      
      </Grid>
    </ChakraProvider>
        </div>
  )
}

export default OurTechnologies