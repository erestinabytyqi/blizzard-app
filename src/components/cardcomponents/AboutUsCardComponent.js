import React from "react";
import {
  GridItem,
  Grid,
  Button,
  Image,
} from "@chakra-ui/react";
function AboutUsCardComponent() {
  return (
  
  <>
<Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
  className="flex"
>
  <GridItem colSpan={3}>
    <h1 className="text-4xl pt-5 font-bold text-white pl-4">
      Heading
    </h1>
    <p className="text-lg pt-5 text-gray-400">
      Another Subheading maybe its related to the image on the left or the button below
    </p>
    <Button>
      More
    </Button>
  </GridItem>
  <GridItem colSpan={2}/>
      <div>
      <Image src="https://via.placeholder.com/300" alt="Image 4" objectFit="cover" />
      </div>
</Grid>
  </>
  );
}

export default AboutUsCardComponent;
