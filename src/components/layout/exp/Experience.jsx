import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import {ExpData} from "./ExpData";

export default function Experience() {
  return (
    <Stack direction={["column", "row"]} spacing={4}>
      {ExpData.map((value, index) => (
        <Card maxW='lg' key={index}>
          <CardHeader pb={0}>
            <Flex spacing='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Box>
                  <Heading size='sm'>{value.company}</Heading>
                  <Text fontSize='sm' color='mutedText'>
                    {value.jobtitle}
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text as='p' mt={1} fontSize='sm' color='mutedText' fontWeight={400}>
              {value.desc}
            </Text>
          </CardBody>
          <CardFooter pt={0}>
            <HStack
              spacing={3}
              w='100%'
              overflowX='auto'
              sx={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "&::-webkit-scrollbar": {display: "none"},
              }}
            >
              {value.iconNames.map((icons, iconIndex) => (
                <Tag
                  size='sm'
                  variant='subtle'
                  colorScheme='gray'
                  key={iconIndex}
                  flexShrink={0}
                >
                  <TagLeftIcon boxSize='12px' as={icons} />
                  <TagLabel>{value.label[iconIndex]}</TagLabel>
                </Tag>
              ))}
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </Stack>
  );
}
