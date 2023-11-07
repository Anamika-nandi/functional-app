import { Box, Grid, Heading } from "@chakra-ui/react";

const SummaryHeader = () => {
  return (
    <Box
      p="4"
      bg="red"
      borderRadius="2xl"
      color="white"
      w="full"
      pos="relative"
      my="8"
      mb="20"
    >
      <Grid
        placeItems="center"
        borderRadius="full"
        boxSize="40"
        top="-65%"
        boxShadow="0px 2px 10px rgba(0,0,0,0.2)"
        pos="absolute"
        bg="gray"
      >
        <Heading fontSize="4xl">ONE</Heading>
      </Grid>

      <Heading fontSize="3xl" pl="48">
        Summary
      </Heading>
    </Box>
  );
};

export default SummaryHeader;
