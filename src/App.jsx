import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Clients from "./pages/home/Clients";
import Testimonials from "./pages/home/Testimonials";
// import Faq from "./pages/home/Faq";
// import FooterIcon from "./pages/home/FooterIcon";
// import Footer from "./pages/home/Footer";
import Nav from "./pages/home/Nav";
import { theme } from "./theme";
import FeatureSection from "./pages/home/FeatureSection";
import FaqSection from "./pages/home/FaqSection";
function App() {
  return (
    <Box>
      <ChakraProvider theme={theme}>
        <Nav />
        {/* 
        <Home /> */}
        <Clients />
        <FeatureSection />
        <Testimonials />
        <FaqSection />
        {/* <FooterIcon /> */}
        {/* <Footer /> */}
      </ChakraProvider>
    </Box>
  );
}

export default App;
