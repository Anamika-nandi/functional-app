import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Clients from "./pages/home/Clients";
import Testimonials from "./pages/home/Testimonials";
import Nav from "./pages/home/Nav";
import { theme } from "./theme";
import HeroSec from "./pages/home/HeroSec";
import FeatureSection from "./pages/home/FeatureSection";
import FaqSection from "./pages/home/FaqSection";
import Footer from "./pages/home/Footer";
function App() {
  return (
    <Box>
      <ChakraProvider theme={theme}>
        <Nav />
        {/* 
        <Home /> */}
        <HeroSec />
        <Clients />
        <FeatureSection />
        <Testimonials />
        <FaqSection />
        <Footer />
      </ChakraProvider>
    </Box>
  );
}

export default App;
