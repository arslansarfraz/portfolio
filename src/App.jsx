import {Box, Container, useToast} from "@chakra-ui/react";
import Navbar from "./components/layout/Navbar";
import {Canvas} from "./Canvas";
import ColorPalette from "./components/layout/ColorPalette";
import Header from "./components/layout/Header";
import {useEffect, useState} from "react";
import PortfolioList from "./components/layout/portfolio/PortfolioList";
import Contact from "./components/layout/Contact";
import Copyright from "./components/layout/Copyright";
import {motion} from "framer-motion";
function App() {
  return (
    <div>
      <Container maxW='1300px'>
        <Navbar />
        <Header />
        <PortfolioList />
        <Contact />
        <Copyright />
      </Container>
      <Canvas />
      <ColorPalette />
    </div>
  );
}

export default App;
