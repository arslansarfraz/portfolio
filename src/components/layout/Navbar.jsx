import {
  Box,
  Flex,
  Button,
  Link,
  Stack,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import {GoMarkGithub} from "react-icons/go";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

export default function Navbar() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <>
      <Box px={4} zIndex={-1}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Heading as='h1' size='md' noOfLines={1}>
              Arslan Sarfraz {}
              <span style={{color: "#DD6B20"}}>.</span>
            </Heading>
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode} size='sm'>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Link href='https://github.com/arslansarfraz' isExternal={true}>
                <Button
                  variant={"solid"}
                  color='#5A6065'
                  size={"sm"}
                  mr={4}
                  leftIcon={<GoMarkGithub />}
                >
                  Github
                </Button>
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
