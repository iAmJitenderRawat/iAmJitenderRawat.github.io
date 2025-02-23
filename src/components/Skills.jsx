import { Grid, GridItem, Heading, Image } from '@chakra-ui/react';
import React from 'react'

export const Skills = () => {

  return (
    <div className="center p-15" id="skills">
      <Heading as={"h2"} className="ptb-10">
        <h2>My Technical Skills</h2>
      </Heading>
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
          <Image w={20} src="../Images/html.svg" alt="html5" loading={"lazy"} />
          HTML
        </GridItem>
        <GridItem className="skills" data-aos="fade-right">
          <Image w={20} src="../Images/css.svg" alt="css3" loading={"lazy"} />
          CSS
        </GridItem>
        <GridItem className="skills" data-aos="fade-left">
          <Image
            w={20}
            src="../Images/javascript.svg"
            alt="javaScript"
            loading={"lazy"}
          />
          JAVASCRIPT
        </GridItem>
        <GridItem className="skills" data-aos="fade-right">
          <Image w={20} src="../Images/npm.svg" alt="npm" loading={"lazy"} />
          NPM
        </GridItem>
        <GridItem className="skills" data-aos="fade-left">
          <Image
            w={20}
            src="../Images/redux.svg"
            alt="redux"
            loading={"lazy"}
          />
          REDUX-TOOLKIT
        </GridItem>
        <GridItem className="skills" data-aos="fade-right">
          <Image w={20} src="../Images/git.svg" alt="git" loading={"lazy"} />
          GIT
        </GridItem>
        <GridItem className="skills" data-aos="fade-left">
          <Image
            w={20}
            src="../Images/algorithm.png"
            alt="dsa"
            loading={"lazy"}
          />
          DSA
        </GridItem>
        <GridItem className="skills" data-aos="fade-right">
          <Image
            w={20}
            src="../Images/chakra.png"
            alt="Chakra-UI"
            loading={"lazy"}
          />
          CHAKRA-UI
        </GridItem>
        <GridItem className="skills" data-aos="fade-left">
          <Image
            w={20}
            src="../Images/mongodb.svg"
            alt="mongoDB"
            loading={"lazy"}
          />
          MONGODB
        </GridItem>
        <GridItem className="skills" data-aos="fade-right">
          <Image
            w={20}
            src="../Images/express.svg"
            alt="express"
            loading={"lazy"}
          />
          EXPRESS
        </GridItem>
        <GridItem className="skills" data-aos="fade-left">
          <Image
            w={20}
            src="../Images/react.svg"
            alt="React"
            loading={"lazy"}
          />
          REACT
        </GridItem>
        <GridItem className="skills" data-aos="fade-right">
          <Image
            w={20}
            src="../Images/nodejs.svg"
            alt="node"
            loading={"lazy"}
          />
          NODEJS
        </GridItem>
      </Grid>
    </div>
  );
}
