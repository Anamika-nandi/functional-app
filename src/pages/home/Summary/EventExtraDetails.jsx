import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const EventExtraDetails = () => {
  const eventDetails = [
    {
      name: "Event Type",
      value: "Tournament",
    },
    {
      name: "Game limit type",
      value: "Pot limit",
    },
    {
      name: "Currency",
      value: "Real money",
    },
    {
      name: "Game type",
      value: "Texas Holdem",
    },
    {
      name: "Buy in",
      value: "$100.00",
    },
    {
      name: "Admin fee",
      value: "$310.00",
    },
    {
      name: "Player starting chips",
      value: "1000",
    },
    {
      name: "Blind levels",
      value: "10 minutes",
    },
  ];

  return (
    <Stack flex="3">
      <Stack mt="16">
        {eventDetails.map((detail) => (
          <React.Fragment key={detail.name}>
            <Divider borderColor="gray.500" my="2" />
            <Box>
              <Heading as="h4" fontSize="xl">
                {detail.name}
              </Heading>
              <Text color="gray.700">{detail.value}</Text>
            </Box>
          </React.Fragment>
        ))}
      </Stack>

      <VStack mt="8">
        <HStack>
          <Button>Edit</Button>
          <Button>Print</Button>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default EventExtraDetails;
