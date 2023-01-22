import { Grid, GridItem, Heading, Image } from '@chakra-ui/react';
import React from 'react'

export const Skills = () => {
  return (
    <div className="center p-15" id="skills">
      <Heading className="ptb-10">My Technical Skills</Heading>
      <Grid
        templateColumns={{
          xl: "repeat(4, 1fr)",
          lg: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
        }}
        gap={12}
      >
        <GridItem className="skills">
          <Image src="../Images/html.svg" />
          HTML
        </GridItem>
        <GridItem className="skills">
          <Image src="../Images/css.svg" />
          CSS
        </GridItem>
        <GridItem className="skills">
          <Image src="../Images/javascript.svg" />
          JAVASCRIPT
        </GridItem>
        <GridItem className="skills">
          <Image src="../Images/npm.svg" />
          NPM
        </GridItem>
        <GridItem className="skills">
          <Image src="../Images/redux.svg" />
          REDUX-TOOLKIT
        </GridItem>
        <GridItem className="skills">
          <Image src="../Images/git.svg" />
          GIT
        </GridItem>
        <GridItem className="skills">
          <Image src="../Images/algorithm.png" />
          DSA
        </GridItem>
        <GridItem className="skills">
          <Image src="../Images/chakra.png" />
          CHAKRA-UI
        </GridItem>
        <GridItem className="skills">
          <Image src="../Images/mongodb.svg" />
          MONGODB
        </GridItem>
        <GridItem className="skills">
          <Image src="../Images/express.svg" />
          EXPRESS
        </GridItem>
        <GridItem className="skills">
          <Image src="../Images/react.svg" />
          REACT
        </GridItem>
        <GridItem className="skills">
          <Image src="../Images/nodejs.svg" />
          NODEJS
        </GridItem>
      </Grid>
    </div>
  );
}
