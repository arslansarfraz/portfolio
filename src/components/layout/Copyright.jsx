import {Link, Text} from "@chakra-ui/react";

export default function Copyright() {
  return (
    <Text py={"50px"} mt={5} fontSize='sm' color='#5A6065' fontWeight={400}>
      Go ahead, and make it your own!{" "}
      <Text
        as={Link}
        href={"https://github.com/arslansarfraz/portfolio/"}
        position={"relative"}
        isExternal
      >
        github
      </Text>
    </Text>
  );
}
