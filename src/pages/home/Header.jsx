import { Box, Container, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  const url = [
    {
      link: "/bugs",
      name: "Report  Bugs",
    },
    {
      link: "/account",
      name: "My Account",
    },
    {
      link: "/logout",
      name: "Logout",
    },
  ];

  return (
    <Container maxW="container.xl">
      <Flex justify="space-between">
        <Box>Logo</Box>

        <Stack spacing="8">
          <HStack bg="green.800" borderBottomRadius="2xl">
            <Text> Players Online:3177</Text>
            <Text>Caribbean Stud ($5) $55,472.31</Text>
          </HStack>

          <Box>
            <Text>Thu 28th Jan 2024 14:30:15 PokerCity.com Time</Text>
          </Box>
        </Stack>
      </Flex>

      <HStack px="4" py="2" color="white" bg="black">
        <Text>Firstname Lastname</Text>

        <HStack>
          {url.map((item) => (
            <Link key={item.link} to={item.link}>
              <Text>{item.name}</Text>
            </Link>
          ))}
        </HStack>
      </HStack>
    </Container>
  );
};

export default Header;
