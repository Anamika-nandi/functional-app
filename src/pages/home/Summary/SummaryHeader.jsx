import { Box, Grid, Heading } from "@chakra-ui/react";

const SummaryHeader = () => {
  return (
    <Box
      px="4"
      py={{
        base: "2",
        md: "4",
      }}
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
        boxSize={{
          base: "20",
          md: "40",
        }}
        top={{
          base: "-30%",
          md: "-65%",
        }}
        boxShadow="0px 2px 10px rgba(0,0,0,0.2)"
        pos="absolute"
        bg="gray"
      >
        <Heading
          fontSize={{
            base: "xl",
            md: "3xl",
          }}
        >
          ONE
        </Heading>
      </Grid>

      <Heading
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        pl={{
          base: "24",
          md: "48",
        }}
      >
        Summary
      </Heading>
    </Box>
  );
};

export default SummaryHeader;
