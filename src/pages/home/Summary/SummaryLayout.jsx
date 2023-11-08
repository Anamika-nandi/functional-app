import { Container, Flex, Stack } from "@chakra-ui/react";
import EventDetails from "./EventDetails";
import EventExtraDetails from "./EventExtraDetails";
import EventInviteList from "./EventInviteList";

const SummaryLayout = () => {
  return (
    <>
      <EventDetails />

      <Flex
        gap="16"
        flexDir={{
          base: "column",
          md: "row",
        }}
      >
        <EventExtraDetails />
        <EventInviteList />
      </Flex>
    </>
  );
};

export default SummaryLayout;
