import {motion} from "framer-motion";
import devImg from "../../assets/men1.png";
import boring from "../../assets/boring.png";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue,
  Tag,
} from "@chakra-ui/react";
export default function Header() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{base: 8, md: 10}}
        py={{base: 10, md: 20}}
        direction={{base: "column", md: "row"}}
      >
        <Stack flex={1} spacing={{base: 5, md: 10}} position={"relative"}>
          <Image
            alt={"Hero Image"}
            align={"center"}
            w={"40px"}
            h={"auto"}
            src={boring}
            pos={"absolute"}
            left={"-40px"}
            bottom={"5%"}
          />
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{base: "2xl", sm: "3xl", lg: "4xl"}}
          >
            <Text as={"span"}>HEY! I'm a </Text>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "20%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#DD6B20",
                zIndex: -1,
              }}
            >
              Full Stack
            </Text>
            <br />
            <Text as={"span"}>Developer | AI Engineer.</Text>
          </Heading>

          <Stack
            spacing={{base: 4, sm: 6}}
            direction={{base: "column", sm: "row"}}
          >
            <Text as={"span"} width={"100%"} color='mutedText'>
              My name is Arslan, a developer with 5+ years of experience
              building software that's both smart and reliable. I design and
              build Agentic AI and RAG systems using <Tag>LangChain</Tag>,{" "}
              <Tag>LangGraph</Tag>, and vector stores, and craft full-stack
              platforms with <Tag>React.js</Tag> and <Tag>Node.js</Tag>. I'm
              passionate about connecting AI with real-world applications.
            </Text>
          </Stack>
        </Stack>
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
        >
          <Flex
            flex={1}
            w={"full"}
            justify={"center"}
            align={"center"}
            pr={{base: "10px", sm: "10px", lg: "70px"}}
          >
            <Box
              position={"relative"}
              rounded={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"500px"}
                h={"100%"}
                src={devImg}
              />
            </Box>
          </Flex>
        </motion.div>
      </Stack>
    </Container>
  );
}
