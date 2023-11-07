import {
  Box,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
  //   Link as CLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/brand.svg";
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
    <Container maxW="full" px="0">
      <Flex justify="space-between" px="4">
        <Box>
          <Logo />
        </Box>

        <Stack spacing="3" mb="8" align="end">
          <HStack
            bg="green.800"
            borderBottomRadius="2xl"
            color="white"
            px="4"
            fontSize="sm"
            py="3"
            pr="24"
            fontWeight="bold"
          >
            <Text> Players Online:3177</Text>
            <Text>Caribbean Stud ($5) $55,472.31</Text>
          </HStack>

          <Box>
            <Text fontSize="sm">
              Thu 28th Jan 2024 14:30:15 PokerCity.com Time
            </Text>
          </Box>
        </Stack>
      </Flex>

      <HStack px="6" py="4" color="white" bg="black" justify="space-between">
        <Text fontWeight="bold">Firstname Lastname</Text>

        <HStack>
          {url.map((item) => (
            <Link key={item.link} to={item.link}>
              {item.name}
            </Link>
          ))}
        </HStack>
      </HStack>
    </Container>
  );
};

export default Header;
