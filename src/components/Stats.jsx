import { Box, Center, Flex, Grid, Heading, Image, VStack } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

export const Stats = () => {
  const currentYear = new Date().getFullYear();
  const cal={
    width: "500px",

  }
  return (
    <div className="p-15" id="stats">
      <Heading className="center ptb-10">GitHub Stats</Heading>
      <VStack>
        <Image
          className="stats"
          src="https://github-readme-stats.vercel.app/api?username=iamjitenderrawat&show_icons=true&locale=en"
          alt="iamjitenderrawat"
        />
        <Image
          className="stats"
          src="https://github-readme-streak-stats.herokuapp.com/?user=iamjitenderrawat&"
          alt="iamjitenderrawat"
        />
        <Image
          className="stats"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=iamjitenderrawat&show_icons=true&locale=en&layout=compact"
          alt="iamjitenderrawat"
        />
        <GitHubCalendar
          username="iAmJitenderRawat"
          // year={currentYear}
          blockMargin={4}
          blockSize={12}
          fontSize={14}
          style={{
            className:"stats",
            padding:"25px 0"
          }}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
      </VStack>
    </div>
  );
}

