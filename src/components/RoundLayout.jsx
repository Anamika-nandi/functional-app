import { Box } from "@chakra-ui/react";

const RoundLayout = ({ children }) => {
  return (
    <Box
      p="8"
      boxShadow="-2px -4px 5px rgba(0,0,0,0.2)"
      mt="16"
      borderTopRadius="36px"
      minH="80dvh"
    >
      {children}
    </Box>
  );
};

export default RoundLayout;
