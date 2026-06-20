import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  semanticTokens: {
    colors: {
      // Muted body text: dark gray on light mode, light gray on dark mode.
      mutedText: {
        default: "#5A6065",
        _dark: "gray.400",
      },
    },
  },
});

export default theme;
