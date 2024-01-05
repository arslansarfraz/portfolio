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
import {ExpData} from "./expData";

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
                  <Text fontSize='sm' color='#5A6065'>
                    {value.jobtitle}
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text as='p' mt={1} fontSize='sm' color='#5A6065' fontWeight={400}>
              {value.desc}
            </Text>
          </CardBody>
          <CardFooter
            justify='space-between'
            flexWrap='wrap'
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Stack direction={["column", "row"]} spacing={4}>
              {value.iconNames.map((icons, iconIndex) => (
                <Tag
                  size='sm'
                  variant='subtle'
                  colorScheme='gray'
                  key={iconIndex}
                >
                  <TagLeftIcon boxSize='12px' as={icons} />
                  <TagLabel>{value.label[iconIndex]}</TagLabel>
                </Tag>
              ))}
            </Stack>
          </CardFooter>
        </Card>
      ))}
    </Stack>
  );
}
