import {
  Heading,
  HStack,
  Image,
  VStack,
  ListItem,
  List,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Typewriter from "typewriter-effect";
import html from "../../public/Images/html.svg";
import css from "../../public/Images/css.svg";
import javascript from "../../public/Images/javascript.svg";
import react from "../../public/Images/react.svg";
import npm from "../../public/Images/npm.svg";
import redux from "../../public/Images/redux.svg";
import git from "../../public/Images/git.svg";

export const Home = () => {
  const smallImages = [html, css, javascript, react, redux, npm, git];
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1); // Adjust rotation speed here
    }, 50); // Adjust interval for smoother/faster rotation

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  const calculatePosition = (index) => {
    const numImages = smallImages.length;
    const angle = (index / numImages) * 360 + rotation; // Add rotation offset
    const radius = containerRef.current?.offsetWidth / 2; // Adjust radius as needed
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);
    return { x, y };
  };
  return (
    <Flex
      id="home"
      p={"80px 0"}
      gap={5}
      justify={"space-around"}
      flexDir={{ lg: "row", md: "column", sm: "column", base: "column" }}
    >
      <VStack m={5}>
        <Box w={"400px"} h={"400px"} position={"relative"} ref={containerRef}>
          <Image
            src={"https://avatars.githubusercontent.com/u/107478598?v=4"}
            borderRadius={"50%"}
            loading={"lazy"}
            alt="Jitender-React Developer"
            w="100%"
            h="100%"
            objectFit="cover"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)" // Center the big image
            zIndex={1} // Place big image above small ones
          />
          {smallImages.map((smallImage, index) => {
            const { x, y } = calculatePosition(index);
            return (
              <Image
                key={index}
                src={smallImage}
                alt={smallImage}
                w="50px" // Adjust small image size
                h="50px"
                loading={"lazy"}
                borderRadius="50%"
                objectFit="fill"
                position="absolute"
                top={`calc(50% + ${y}px)`} // Position vertically
                left={`calc(50% + ${x}px)`} // Position horizontally
                transform="translate(-50%, -50%)" // Center small images
                zIndex={2} // Ensure they are above the big image
              />
            );
          })}
        </Box>
      </VStack>
      <VStack
        align={{
          lg: "flex-start",
          md: "center",
          sm: "center",
          base: "center",
        }}
        m={5}
      >
        <h1>
          <Heading
            as="h1"
            fontSize={{
              "2xl": "7xl",
              xl: "6xl",
              lg: "5xl",
              md: "4xl",
              sm: "3xl",
              base: "2xl",
            }}
          >
            Hi, I'm
            <Text
              bgGradient="linear(to-r, purple.200, blue.500)"
              bgClip="text"
              display={"inline"}
            >
              {" "}
              Jitender
            </Text>
            <div className="hand">👋</div>
          </Heading>
        </h1>
        <Heading as="h2" size="lg">
          I'm a
          <Typewriter
            options={{
              strings: [
                "Frontend Developer.",
                "React Developer.",
                "Backend Developer.",
                "MERN Developer.",
              ],
              wrapperClassName: "Typewriter__wrapper",
              autoStart: true,
              loop: true,
            }}
          />
        </Heading>
        <List spacing={3} p={"0 20px"}>
          <ListItem>🌏 Based in India</ListItem>
          <ListItem>👀 I'm looking for a job.</ListItem>
          <ListItem>
            📖 I'm currently learning more about backend development.
          </ListItem>
          <ListItem>☕ Fueled by Coffee</ListItem>
          <ListItem>📧 Jitenderrawat39@gmail.com</ListItem>
        </List>
        <HStack p={"30px 0"} gap={4}>
          <a href="https://github.com/iAmJitenderRawat" target="_blank">
            <BsGithub size={"50px"} className="link" />
          </a>
          <a
            href="https://www.aedin.com/in/jitender-b38491217/"
            target="_blank"
          >
            <BsLinkedin size={"50px"} className="link" />
          </a>
          <a
            href="https://www.hackerrank.com/jitenderrawat39?hr_r=1"
            target="_blank"
          >
            <FaHackerrank size={"50px"} className="link" />
          </a>
          <a href="https://leetcode.com/jitenderrawat39/" target="_blank">
            <SiLeetcode size={"50px"} className="link" />
          </a>
        </HStack>
      </VStack>
    </Flex>
  );
};
