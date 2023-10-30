import { useState } from "react";
import "./App.css";
import {
  Box,
  ChakraProvider,
  HStack,
  Heading,
  Stack,
  theme,
} from "@chakra-ui/react";
import Clients from "./pages/home/Clients";
import FeaturesSec from "./pages/home/FeaturesSec";
import Testimonials from "./pages/home/Testimonials";
import Faq from "./pages/home/Faq";
import FooterIcon from "./pages/home/FooterIcon";
import Footer from "./pages/home/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <ChakraProvider theme={theme}>
        {/* <Nav />
        <Home /> */}
        <Clients />
        <FeaturesSec />
        <Testimonials />
        <Box mt="12">
          <Heading fontWeight="medium" fontSize="3xl">
            Frequently Asked Questions
          </Heading>
          <HStack mt="6" spacing="12">
            <Stack flex="1">
              <Faq />
            </Stack>
            <Stack flex="1">
              <Faq />
            </Stack>
          </HStack>
        </Box>
        <FooterIcon />
        <Footer />
      </ChakraProvider>
    </Box>
  );
}

export default App;
