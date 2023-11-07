import { Flex, Stack } from "@chakra-ui/react";
import EventDetails from "./EventDetails";
import EventExtraDetails from "./EventExtraDetails";
import EventInviteList from "./EventInviteList";

const SummaryLayout = () => {
  return (
    <Stack>
      <EventDetails />

      <Flex gap="16">
        <EventExtraDetails />
        <EventInviteList />
      </Flex>
    </Stack>
  );
};

export default SummaryLayout;
