import React from "react";
import Portfolio from "./Portfolio";
import {portfolioContent} from "./PortfolioData";
import {Container} from "@chakra-ui/react";

export default function PortfolioList() {
  return (
    <Container maxW={"7xl"} mt={"200px"}>
      {portfolioContent.map((value, index) => (
        <Portfolio
          key={index}
          websiteName={value.name}
          webisteLink={value.link}
          imageSrc={value.imageSrc}
          websiteDesc={value.desc}
          tag={value.tag}
          itemPostion={value.itemPostion}
          githubLink={value.github}
        />
      ))}
    </Container>
  );
}
