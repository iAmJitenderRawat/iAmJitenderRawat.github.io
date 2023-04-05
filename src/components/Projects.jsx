import { ViewIcon } from "@chakra-ui/icons";
import { Grid, Heading, Box, Image, GridItem, Text, Flex, Button, Divider, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

export const Projects = () => {
  const bg = useColorModeValue("gray.800", "white");
  const color = useColorModeValue("white", "black");
      useEffect(() => {
        AOS.init({
          // offset:500,
          duration:6000,
        });
      }, []);
  return (
    <Box px={{ md: "15%", sm: "10%", base: 5 }} id="projects">
      <Heading className="center ptb-10">Project Section</Heading>
      <Grid templateColumns={"repeat(1, 1fr)"} gap={12}>
        <GridItem className="card" data-aos={"fade-left"}>
          <Box>
            <Image src="../Images/roll-the-dice.png" alt="calculator" />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Roll The Dice
          </Heading>
          <Text className="silver">
            It was my first basic fun application. In this, three dices are
            rolled and outcome could be Player 1 Wins, Player 2 Wins and Draw.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
          </Grid>
          <Box>
            <Divider m={"20px 0"} />
            <Flex justify={"space-around"}>
              <a
                href="https://github.com/masai-course/jitender_fw20_0153/tree/master/unit-3/sprint-1/day-1/assignments"
                target="_blank"
              >
                <Button
                  leftIcon={<BsGithub />}
                  variant={"outline"}
                  colorScheme={color}
                >
                  Link
                </Button>
              </a>
              <a href="https://funny-puppy-d713bb.netlify.app/" target="_blank">
                <Button leftIcon={<ViewIcon />} bg={bg} color={color}>
                  Live
                </Button>
              </a>
            </Flex>
          </Box>
        </GridItem>
        <GridItem className="card" data-aos="fade-right">
          <Box>
            <Image
              className="project"
              src="../Images/calculator.png"
              alt="calculator"
            />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Calculator
          </Heading>
          <Text className="silver">
            It was my first basic working calculator application. It could
            perform basic Addition, Substraction, Multiplication and Division
            functions.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
          </Grid>
          <Box>
            <Divider m={"20px 0"} />
            <Flex justify={"space-around"}>
              <a
                href="https://github.com/masai-course/jitender_fw20_0153/tree/master/unit-2/sprint-3/day-2/we"
                target="_blank"
              >
                <Button
                  leftIcon={<BsGithub />}
                  variant={"outline"}
                  colorScheme={color}
                >
                  Link
                </Button>
              </a>
              <a
                href="https://cerulean-kitten-5d9415.netlify.app/"
                target="_blank"
              >
                <Button leftIcon={<ViewIcon />} bg={bg} color={color}>
                  Live
                </Button>
              </a>
            </Flex>
          </Box>
        </GridItem>
        <GridItem className="card" data-aos={"fade-left"}>
          <Box>
            <Image
              className="project"
              src="../Images/movie-app.png"
              alt="calculator"
            />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Movie App
          </Heading>
          <Text className="silver">
            It was a basic movie application which provide us movie details. I
            used debouncing for getting recommended movies names to reduce api
            calls.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
          </Grid>
          <Box>
            <Divider m={"20px 0"} />
            <Flex justify={"space-around"}>
              <a
                href="https://github.com/masai-course/jitender_fw20_0153/tree/master/unit-3/sprint-2/day-2/assignments/MOVIE%20APP%20II"
                target="_blank"
              >
                <Button
                  leftIcon={<BsGithub />}
                  variant={"outline"}
                  colorScheme={color}
                >
                  Link
                </Button>
              </a>
              <a
                href="https://chimerical-douhua-d9c37c.netlify.app/"
                target="_blank"
              >
                <Button leftIcon={<ViewIcon />} bg={bg} color={color}>
                  Live
                </Button>
              </a>
            </Flex>
          </Box>
        </GridItem>
        <GridItem
          className="card"
          data-aos={"fade-right"}
        >
          <Box>
            <Image
              className="project"
              src="../Images/todo-app.png"
              alt="todo-app"
            />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Todo App
          </Heading>
          <Text className="silver">
            It was a basic todo application which provide us our todo list with
            its priority. I used local storage to save todo list so that it will
            be there, even if we reload the page.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
          </Grid>
          <Box>
            <Divider m={"20px 0"} />
            <Flex justify={"space-around"}>
              <a
                href="https://github.com/masai-course/jitender_fw20_0153/tree/master/unit-2/sprint-4/day-1/we/Todo"
                target="_blank"
              >
                <Button
                  leftIcon={<BsGithub />}
                  variant={"outline"}
                  colorScheme={color}
                >
                  Link
                </Button>
              </a>
              <a
                href="https://sensational-sable-25fda4.netlify.app/"
                target="_blank"
              >
                <Button leftIcon={<ViewIcon />} bg={bg} color={color}>
                  Live
                </Button>
              </a>
            </Flex>
          </Box>
        </GridItem>
        <GridItem className="card" data-aos={"fade-left"}>
          <Box>
            <Image
              className="project"
              src="../Images/weather.png"
              alt="weather"
            />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Weather App
          </Heading>
          <Text className="silver">
            It was a basic weather application which provide us weather details,
            7 day forcast and map. I also used geo-location. I used Open Weather
            api.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
          </Grid>
          <Box>
            <Divider m={"20px 0"} />
            <Flex justify={"space-around"}>
              <a
                href="https://github.com/masai-course/jitender_fw20_0153/tree/master/unit-3/sprint-2/day-3/assignments/Weather-III"
                target="_blank"
              >
                <Button
                  leftIcon={<BsGithub />}
                  variant={"outline"}
                  colorScheme={color}
                >
                  Link
                </Button>
              </a>
              <a
                href="https://beautiful-selkie-422973.netlify.app/"
                target="_blank"
              >
                <Button leftIcon={<ViewIcon />} bg={bg} color={color}>
                  Live
                </Button>
              </a>
            </Flex>
          </Box>
        </GridItem>
        <GridItem
          className="card"
          data-aos={"fade-right"}
        >
          <Box>
            <Image
              className="project"
              src="../Images/bellavita-organic.png"
              alt="Bella Vita Organic"
            />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Bella Vita Organic
          </Heading>
          <Text className="silver">
            It is a clone of bella vita organic. It is a E-commerce website
            which deals with natural beauty products. Its my first collaborative
            project. It is created by four members.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
          </Grid>
          <Box>
            <Divider m={"20px 0"} />
            <Flex justify={"space-around"}>
              <a
                href="https://github.com/masai-course/jitender_fw20_0153/tree/master/unit-3/sprint-4/optional"
                target="_blank"
              >
                <Button
                  leftIcon={<BsGithub />}
                  variant={"outline"}
                  colorScheme={color}
                >
                  Link
                </Button>
              </a>
              <a
                href="https://inspiring-cat-83a10a.netlify.app/"
                target="_blank"
              >
                <Button leftIcon={<ViewIcon />} bg={bg} color={color}>
                  Live
                </Button>
              </a>
            </Flex>
          </Box>
        </GridItem>
        <GridItem className="card" data-aos={"fade-left"}>
          <Box>
            <Image
              className="project"
              src="../Images/get-now.png"
              alt="getnow"
            />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Getnow
          </Heading>
          <Text className="silver">
            It is a very basic e-commerce app that deals with daily items,
            electronic items, beauty items, lifestyle, home decor, health
            equipment, etc.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
            <GridItem>React</GridItem>
            <GridItem>Chakra UI</GridItem>
          </Grid>
          <Box>
            <Divider m={"20px 0"} />
            <Flex justify={"space-around"}>
              <a
                href="https://github.com/iAmJitenderRawat/perpetual-wilderness-2782"
                target="_blank"
              >
                <Button
                  leftIcon={<BsGithub />}
                  variant={"outline"}
                  colorScheme={color}
                >
                  Link
                </Button>
              </a>
              <a href="https://getnow-sand.vercel.app/" target="_blank">
                <Button leftIcon={<ViewIcon />} bg={bg} color={color}>
                  Live
                </Button>
              </a>
            </Flex>
          </Box>
        </GridItem>
        <GridItem
          className="card"
          data-aos={"fade-right"}
        >
          <Box>
            <Image
              className="project"
              src="../Images/js-store.png"
              alt="JS-Store"
            />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            JS-Store
          </Heading>
          <Text className="silver">
            JS-Store is a responsive single page e-commerce website which deals
            with lifestyle, electronic, groceries and home-decoration products.
            In this website, I have used fake store api to get categories and
            products according to its category, So that, It is easy to browse
            the product.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
            <GridItem>React</GridItem>
            <GridItem>React-Toolkit</GridItem>
            <GridItem>Chakra UI</GridItem>
          </Grid>
          <Box>
            <Divider m={"20px 0"} />
            <Flex justify={"space-around"}>
              <a
                href="https://github.com/iAmJitenderRawat/JS-Store"
                target="_blank"
              >
                <Button
                  leftIcon={<BsGithub />}
                  variant={"outline"}
                  colorScheme={color}
                >
                  Link
                </Button>
              </a>
              <a href="https://js-store-kohl.vercel.app/" target="_blank">
                <Button leftIcon={<ViewIcon />} bg={bg} color={color}>
                  Live
                </Button>
              </a>
            </Flex>
          </Box>
        </GridItem>
        <GridItem className="card" data-aos={"fade-left"}>
          <Box>
            <Image
              className="project"
              src="../Images/my-store.png"
              alt="My-Store"
            />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            My-Store
          </Heading>
          <Text className="silver">
            My-Store is a single page e-commerce website which deals with
            lifestyle, electronic, groceries and home-decoration products. In
            this website, I have used fake store api to get categories and
            products according to its category, So that, It is easy to browse
            the product.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
            <GridItem>React</GridItem>
            <GridItem>React-Toolkit</GridItem>
            <GridItem>Chakra UI</GridItem>
          </Grid>
          <Box>
            <Divider m={"20px 0"} />
            <Flex justify={"space-around"}>
              <a
                href="https://github.com/iAmJitenderRawat/MyStore"
                target="_blank"
              >
                <Button
                  leftIcon={<BsGithub />}
                  variant={"outline"}
                  colorScheme={color}
                >
                  Link
                </Button>
              </a>
              <a href="https://my-store-phi-rust.vercel.app/" target="_blank">
                <Button leftIcon={<ViewIcon />} bg={bg} color={color}>
                  Live
                </Button>
              </a>
            </Flex>
          </Box>
        </GridItem>
        <GridItem
          className="card"
          data-aos={"fade-right"}
        >
          <Box>
            <Image
              className="project"
              src="../Images/keeper.png"
              alt="Keeper"
            />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Keeper
          </Heading>
          <Text className="silver">
            It is a note making app which is used to make notes of our daily
            tasks. It is created by me.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
            <GridItem>MongoDB</GridItem>
            <GridItem>Mongoose</GridItem>
            <GridItem>React</GridItem>
            <GridItem>Express</GridItem>
            <GridItem>Node</GridItem>
            <GridItem>Chakra UI</GridItem>
          </Grid>
          <Box>
            <Divider m={"20px 0"} />
            <Flex justify={"space-around"}>
              <a
                href="https://github.com/iAmJitenderRawat/React-Keeper"
                target="_blank"
              >
                <Button
                  leftIcon={<BsGithub />}
                  variant={"outline"}
                  colorScheme={color}
                >
                  Link
                </Button>
              </a>
              <a href="https://react-keeper-one.vercel.app/" target="_blank">
                <Button leftIcon={<ViewIcon />} bg={bg} color={color}>
                  Live
                </Button>
              </a>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
