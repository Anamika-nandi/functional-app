import { Box, Flex, Grid, HStack, Heading, Text } from "@chakra-ui/react";

const EventDetails = () => {
  return (
    <Flex
      gap="16"
      flexDir={{
        base: "column",
        md: "row",
      }}
    >
      <Box flex="3">
        <Heading fontSize="2xl">Name of the event</Heading>
        <Text fontSize="sm" fontWeight="medium" color="gray.600">
          February 14, 2021 - February 14, 2021
        </Text>
        <Text fontSize="sm" fontWeight="medium" color="gray.600">
          123 any street , Winnigpeg MB R3T 5V5
        </Text>

        <Text mt="8" mb="8">
          Description of the event. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, quibusdam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, quibusdam. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, quibusdam. Lorem
          ipsum
        </Text>

        <HStack>
          <Box boxSize="90px" bg="gray.200" />

          <Box>
            <Text fontWeight="bold">Chris say:</Text>
            <Text>Hey everyone! Don&apos;t forget to bring snaks</Text>
          </Box>
        </HStack>
      </Box>
      <Box flex="1">
        <Grid placeItems="center" boxSize="full" bg="gray.200" minH="320px">
          <Text> Map Image</Text>
        </Grid>
      </Box>
    </Flex>
  );
};

export default EventDetails;
