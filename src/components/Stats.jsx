import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import AOS from 'aos';
import "aos/dist/aos.css"

export const Stats = () => {
useEffect(()=>{
  AOS.init({
    // offset:400,
    duration:5000,
  });
},[])
  return (
    <div className="p-15" id="stats">
      <Heading className="center ptb-10">GitHub Stats</Heading>
      <Flex flexDir={"column"}>
        <Image
          data-aos="fade-left"
          className="stats"
          w={{ md: "80%", sm: "95%", base: "98%" }}
          src="https://github-readme-stats.vercel.app/api?username=iamjitenderrawat&show_icons=true&locale=en"
          alt="iamjitenderrawat"
        />
        <Image
          data-aos="fade-right"
          className="stats"
          w={{ md: "80%", sm: "95%", base: "98%" }}
          src="https://github-readme-streak-stats.herokuapp.com/?user=iamjitenderrawat&"
          alt="iamjitenderrawat"
        />
        <Image
          data-aos="fade-left"
          className="stats"
          w={{ md: "80%", sm: "95%", base: "98%" }}
          src="https://github-readme-stats.vercel.app/api/top-langs?username=iamjitenderrawat&show_icons=true&locale=en&layout=compact"
          alt="iamjitenderrawat"
        />
        <Box
          className="stats"
          w={{ md: "80%", sm: "95%", base: "98%" }}
          data-aos="fade-right"
        >
          <GitHubCalendar
            username="iAmJitenderRawat"
            blockMargin={4}
            blockSize={12}
            fontSize={12}
            style={{
              padding: "25px 0",
              width:"100%"
            }}
          >
            <ReactTooltip delayShow={20} html />
          </GitHubCalendar>
        </Box>
      </Flex>
    </div>
  );
}

