import { Box, Heading, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";

const EventInviteList = () => {
  const inviteList = [
    {
      picture: "/",
      firstName: "First Name",
      lastName: "Last Name",
    },
    {
      picture: "/",
      firstName: "First Name",
      lastName: "Last Name",
    },
    {
      picture: "/",
      firstName: "First Name",
      lastName: "Last Name",
    },
    {
      picture: "/",
      firstName: "First Name",
      lastName: "Last Name",
    },
    {
      picture: "/",
      firstName: "First Name",
      lastName: "Last Name",
    },
    {
      picture: "/",
      firstName: "First Name",
      lastName: "Last Name",
    },
    {
      picture: "/",
      firstName: "First Name",
      lastName: "Last Name",
    },
    {
      picture: "/",
      firstName: "First Name",
      lastName: "Last Name",
    },
    {
      picture: "/",
      firstName: "First Name",
      lastName: "Last Name",
    },
  ];

  const inviteMails = [
    {
      firstName: "First Name",
      lastName: "Last Name",
      email: "name@emailaddress.com",
    },
    {
      firstName: "First Name",
      lastName: "Last Name",
      email: "name@emailaddress.com",
    },
    {
      firstName: "First Name",
      lastName: "Last Name",
      email: "name@emailaddress.com",
    },
  ];

  return (
    <Box flex="1">
      <Heading my="8" fontSize="2xl">
        Invite List (9)
      </Heading>
      <Wrap gap="4" justify="space-between">
        {inviteList.map((invite, i) => (
          <WrapItem key={i}>
            <Stack>
              <Box boxSize="90px" bg="gray.100" />
              <Box>
                <Text fontSize="sm">{invite.firstName}</Text>
                <Text fontSize="sm" mt="-1">
                  {invite.lastName}
                </Text>
              </Box>
            </Stack>
          </WrapItem>
        ))}
      </Wrap>
      <Stack spacing="4" mt="8">
        {inviteMails.map((mail, i) => (
          <Stack key={i} spacing="0">
            <Text fontSize="sm">
              {mail.firstName} {mail.lastName}
            </Text>
            <Text fontSize="sm">{mail.email}</Text>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default EventInviteList;
