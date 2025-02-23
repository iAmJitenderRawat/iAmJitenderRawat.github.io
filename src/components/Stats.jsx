import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Heading, Image, Button, Stack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


export const Stats = () => {
  const images = [
    "https://github-readme-stats.vercel.app/api?username=iamjitenderrawat&show_icons=true&locale=en",
    "https://github-readme-streak-stats.herokuapp.com/?user=iamjitenderrawat",
    "https://github-readme-stats.vercel.app/api/top-langs?username=iamjitenderrawat&show_icons=true&locale=en&layout=compact",
  ];
const [imageStack, setImageStack] = useState(images);

const handleNext = () => {
  setImageStack((prevStack) => [...prevStack.slice(1), prevStack[0]]);
};

const handlePrev = () => {
  setImageStack((prevStack) => [
    prevStack[prevStack.length - 1],
    ...prevStack.slice(0, -1),
  ]);
};
  return (
    <div id="stats">
      <Heading as={"h2"} className="center ptb-10">GitHub Stats</Heading>
      <Flex direction="column" align="center" justify="center">
        <Box position="relative" w="400px" h="400px">
          <AnimatePresence>
            {imageStack.map((img, idx) => (
              <motion.div
                key={img}
                initial={{
                  scale: 1 - idx * 0.1,
                  y: idx * 10,
                  opacity: idx === 0 ? 1 : 0.8,
                }}
                animate={{
                  scale: 1 - idx * 0.1,
                  y: idx * 10,
                  opacity: idx === 0 ? 1 : 0.8,
                }}
                exit={{ scale: 1 - idx * 0.1, y: idx * 10, opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "400px",
                  zIndex: imageStack.length - idx,
                }}
              >
                <Image
                  src={img}
                  alt={`Github Stat Slide ${idx + 1}`}
                  loading={"lazy"}
                  w="100%"
                  h="100%"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>
        <Flex mt={5} gap={4}>
          <Button
            leftIcon={<FaArrowLeft />}
            colorScheme="gray"
            onClick={handlePrev}
          >
            Previous
          </Button>
          <Button
            rightIcon={<FaArrowRight />}
            colorScheme="blue"
            onClick={handleNext}
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};
