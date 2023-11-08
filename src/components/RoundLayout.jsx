import { Box, Container } from "@chakra-ui/react";

const RoundLayout = ({ children }) => {
  return (
    <Container maxW="container.xl" px="0">
      <Box
        p={{
          base: 4,
          md: 8,
        }}
        boxShadow="-2px -4px 5px rgba(0,0,0,0.2)"
        mt="16"
        borderTopRadius="36px"
        minH="80dvh"
      >
        {children}
      </Box>
    </Container>
  );
};

export default RoundLayout;
