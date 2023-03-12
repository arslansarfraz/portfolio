import {Heading, Link, Stack, Text} from "@chakra-ui/react";
import React from "react";

export default function Contact() {
  return (
    <div>
      <Stack py={{base: 10, md: 20}}>
        <Stack flex={1} spacing={{base: 5, md: 10}} position={"relative"}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{base: "2xl", sm: "3xl", lg: "4xl"}}
          >
            <Text as={"span"}>Send me an </Text>
            <Text
              as={Link}
              href={"mailto: arslansarfraz114@gmail.com"}
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
              Email
            </Text>
          </Heading>
        </Stack>
      </Stack>
    </div>
  );
}
