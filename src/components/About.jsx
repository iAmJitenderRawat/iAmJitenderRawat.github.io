import { Heading, Text } from "@chakra-ui/react";
import React from "react";

export const About = () => {
  return (
    <div className="p-15" id="about">
      <h2>
        <Heading as={"h2"} fontSize={"4xl"} className="center ptb-10">
          About Me
        </Heading>
      </h2>
      <Text
        fontSize={{ xl: "4xl", lg: "3xl", md: "2xl", sm: "xl", base: "lg" }}
        color={"red.400"}
        // bg={"whiteAlpha.900"}
        className={"br about card"}
      >
        Hello, I'm Jitender Rawat. I am a React Developer living in Mohali,
        Punjab. I love creating a react app by leveraging AI and react tools. I
        have one year of industry exposure.
      </Text>
    </div>
  );
};
