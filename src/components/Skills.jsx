import { Grid, GridItem, Heading, Image } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css"

export const Skills = () => {
  useEffect(()=>{
    AOS.init({
      offset:200,
      duration:5000,
    })
  },[])
  return (
    <div className="center p-15" id="skills">
      <Heading className="ptb-10">My Technical Skills</Heading>
      <Grid
        templateColumns={{
          xl: "repeat(4, 1fr)",
          lg: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        gap={12}
      >
        <GridItem className="skills" data-aos="fade-left">
          <Image src="../Images/html.svg" />
          HTML
        </GridItem>
        <GridItem
          className="skills"
          data-aos="fade-right"
        >
          <Image src="../Images/css.svg" />
          CSS
        </GridItem>
        <GridItem className="skills" data-aos="fade-left">
          <Image src="../Images/javascript.svg" />
          JAVASCRIPT
        </GridItem>
        <GridItem
          className="skills"
          data-aos="fade-right"
        >
          <Image src="../Images/npm.svg" />
          NPM
        </GridItem>
        <GridItem className="skills" data-aos="fade-left">
          <Image src="../Images/redux.svg" />
          REDUX-TOOLKIT
        </GridItem>
        <GridItem
          className="skills"
          data-aos="fade-right"
        >
          <Image src="../Images/git.svg" />
          GIT
        </GridItem>
        <GridItem className="skills" data-aos="fade-left">
          <Image src="../Images/algorithm.png" />
          DSA
        </GridItem>
        <GridItem
          className="skills"
          data-aos="fade-right"
        >
          <Image src="../Images/chakra.png" />
          CHAKRA-UI
        </GridItem>
        <GridItem className="skills" data-aos="fade-left">
          <Image src="../Images/mongodb.svg" />
          MONGODB
        </GridItem>
        <GridItem
          className="skills"
          data-aos="fade-right"
        >
          <Image src="../Images/express.svg" />
          EXPRESS
        </GridItem>
        <GridItem className="skills" data-aos="fade-left">
          <Image src="../Images/react.svg" />
          REACT
        </GridItem>
        <GridItem
          className="skills"
          data-aos="fade-right"
        >
          <Image src="../Images/nodejs.svg" />
          NODEJS
        </GridItem>
      </Grid>
    </div>
  );
}
