import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import { ChakraProvider, theme } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
