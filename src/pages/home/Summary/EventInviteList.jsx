import { Box, Grid, Heading, Stack, Text, WrapItem } from "@chakra-ui/react";

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
      <Grid
        gap="4"
        templateColumns={{
          base: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        placeItems="center"
        placeContent="center"
        maxW={{
          base: "260px",
        }}
      >
        {inviteList.map((invite, i) => (
          <WrapItem key={i}>
            <Stack>
              <Box boxSize="80px" bg="gray.100" />
              <Box>
                <Text fontSize="sm">{invite.firstName}</Text>
                <Text fontSize="sm" mt="-1">
                  {invite.lastName}
                </Text>
              </Box>
            </Stack>
          </WrapItem>
        ))}
      </Grid>
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
