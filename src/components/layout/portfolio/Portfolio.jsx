import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Tag,
  HStack,
  Button,
} from "@chakra-ui/react";
import {RiCodeView} from "react-icons/ri";
import {AiFillEye} from "react-icons/ai";
const BlogTags = props => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map(tag => {
        return (
          <Tag size={"sm"} variant='solid' colorScheme='orange' key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const Portfolio = ({
  websiteName,
  webisteLink,
  imageSrc,
  websiteDesc,
  tag,
  itemPostion,
  githubLink,
}) => {
  return (
    <Box
      gap='40px'
      className='portfolioItem'
      display={"flex"}
      mt={{lg: "200px", sm: "100px"}}
      flexDir={{lg: itemPostion, md: itemPostion, sm: "column"}}
    >
      <Box display='flex' flex='1' boxShadow={"2xl"} rounded={"md"}>
        <Link
          textDecoration='none'
          _hover={{textDecoration: "none"}}
          href={webisteLink}
        >
          <Image
            borderRadius='md'
            transform='scale(1.0)'
            src={imageSrc}
            alt='my-portfolio'
            objectFit='contain'
            transition='0.3s ease-in-out'
            _hover={{
              transform: "scale(1.01)",
            }}
          />
        </Link>
      </Box>

      <Box
        display='flex'
        flex='1'
        flexDirection='column'
        justifyContent='center'
        marginTop={{base: "3", sm: "0"}}
      >
        <Heading
          mt={5}
          marginBottom='2'
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{base: "2xl", sm: "3xl", lg: "4xl"}}
        >
          <Link textDecoration='none' _hover={{textDecoration: "none"}}>
            {websiteName} <span style={{color: "#DD6B20"}}>.</span>
          </Link>
        </Heading>
        <BlogTags tags={tag} />
        <Text as='p' mt={5} fontSize='sm' color='#5A6065' fontWeight={400}>
          {websiteDesc}
        </Text>
        <Box mt={5}>
          <Link href={githubLink} isExternal={true}>
            <Button
              variant={"solid"}
              color='#5A6065'
              size={"sm"}
              mr={4}
              leftIcon={<RiCodeView />}
            >
              Code
            </Button>
          </Link>
          <Link href={webisteLink} isExternal={true} mt={5}>
            <Button
              variant={"solid"}
              color='#5A6065'
              size={"sm"}
              mr={4}
              leftIcon={<AiFillEye />}
            >
              Take a Look
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
