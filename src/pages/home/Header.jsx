import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Stack,
  Text,
  useDisclosure,
  Link as CLink,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../../icons/Logo";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  const links = [
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
    <>
      <Container
        bg="white"
        maxW="full"
        px="0"
        display={{
          base: "none",
          md: "block",
        }}
        pos="sticky"
        top="0"
        zIndex="sticky"
      >
        <Flex justify="space-between" px="4">
          <Box>
            <Logo width="160px" height="80px" />
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
            {links.map((item) => (
              <Link key={item.link} to={item.link}>
                <CLink as="p" fontSize="lg" fontWeight="medium">
                  {item.name}
                </CLink>
              </Link>
            ))}
          </HStack>
        </HStack>
      </Container>
      <Box
        display={{
          base: "block",
          md: "none",
        }}
        pos="sticky"
        top="0"
        zIndex="sticky"
        bg="white"
      >
        <Stack spacing="3" mb="8" align="center">
          <HStack
            bg="green.800"
            borderBottomRadius="2xl"
            color="white"
            px="4"
            fontSize="sm"
            py="3"
            fontWeight="bold"
            boxShadow="sm"
          >
            <Text fontSize="xs"> Players Online:3177</Text>
            <Text fontSize="xs">Caribbean Stud ($5) $55,472.31</Text>
          </HStack>

          <Box>
            <Text fontSize="sm">
              Thu 28th Jan 2024 14:30:15 PokerCity.com Time
            </Text>
          </Box>
        </Stack>
        <HStack
          px="4"
          h="64px"
          justify="space-between"
          boxShadow={isOpen ? "none" : "md"}
          borderBottom={!isOpen ? "none" : "1px solid black"}
        >
          <Link href="/">
            <Box>
              <Logo width="100px" height="60px" />
            </Box>
          </Link>

          <IconButton
            color="white"
            bg="black"
            _hover={{
              bg: "black",
              color: "white",
            }}
          >
            <Icon
              onClick={onToggle}
              fontSize="2xl"
              as={!isOpen ? FaBars : AiOutlineClose}
            />
          </IconButton>
        </HStack>

        {isOpen && (
          <Stack spacing="4" py="4" px="4" boxShadow="md">
            <Flex gap="2">
              <Avatar />
              <Stack>
                <Text mb="-2">First Name</Text>
                <Text>Last Name</Text>
              </Stack>
            </Flex>

            <Divider />
            <Stack spacing="4">
              {links.map((link) => (
                <Link key={link.name} href={link.url}>
                  <CLink as="p" fontSize="md" fontWeight="medium">
                    {link.name}
                  </CLink>
                </Link>
              ))}
            </Stack>

            {/* <HStack>
              <Button>Signup</Button>
              <Button variant="outline">Login</Button>
            </HStack> */}
          </Stack>
        )}
      </Box>
    </>
  );
};

export default Header;
