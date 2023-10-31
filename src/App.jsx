import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Clients from "./pages/home/Clients";
import Testimonials from "./pages/home/Testimonials";
import Nav from "./pages/home/Nav";
import { theme } from "./theme";
import Hero from "./pages/home/Hero";
import FeatureSection from "./pages/home/FeatureSection";
import FaqSection from "./pages/home/FaqSection";
import Footer from "./pages/home/Footer";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Hero />
      <Clients />
      <FeatureSection />
      <Testimonials />
      <FaqSection />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
