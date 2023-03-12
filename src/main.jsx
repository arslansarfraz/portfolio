import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {ChakraProvider} from "@chakra-ui/react";
import {CanvasProvider} from "./CanvasContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <CanvasProvider>
        <App />
      </CanvasProvider>
    </ChakraProvider>
  </React.StrictMode>
);
