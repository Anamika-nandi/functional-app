import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: '"IBM Plex Sans", sans-serif',
    body: '"IBM Plex Sans", sans-serif',
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: "#09AEAF",
          color: "white",
          border: "1px solid",
          borderRadius: "xl",
          _hover: {
            bg: "white",
            color: "#09AEAF",
            border: "1px solid #09AEAF",
          },
        },

        outline: {
          borderRadius: "xl",
          bg: "white",
          color: "#09AEAF",
          border: "1px solid #09AEAF",
          _hover: {
            bg: "#09AEAF",
            color: "white",
          },
        },
      },
    },
  },
});
