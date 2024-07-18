import React from 'react'
import { ChakraProvider,Grid, GridItem } from "@chakra-ui/react";
import AboutUsCardComponent from './cardcomponents/AboutUsCardComponent';
function AboutUs() {
  return (
    <>
    <div className='text-white justify-end '>
      <hr className='w-28 mx-auto border-2 border-white'/>
        <h1 className='text-4xl font-bold pt-5 text-center  '>
            About us
        </h1>
        <p className='pt-10 pb-10 text-xl text-gray-400 text-right pr-10'>
            Security and collaboration elevate our it infrastracture,both physical and<br/>
            virtual,unified by a raliable network-the cornerstone of your digital transformation.<br/>
            Security and collaboration elevate our it infrastracture,both physical and<br/>
            virtual,unified by a raliable network-the cornerstone of your digital transformation.
        </p>
    </div>
    <br/>
    </>
  )
}

export default AboutUs