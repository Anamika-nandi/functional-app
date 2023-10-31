import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
const Nav = () => {
  const { isOpen, onToggle } = useDisclosure();

  const links = [
    {
      name: "Home",
      url: "#",
      isActive: true,
    },
    {
      name: "FAQ",
      url: "#",
    },
    {
      name: "Testimonials",
      url: "#",
    },
    {
      name: "Blog",
      url: "#",
    },
  ];

  return (
    <Box bg="#FBFBFB" boxShadow="md">
      <Container
        maxW="container.xl"
        display={{
          base: "none",
          md: "block",
        }}
      >
        <HStack h="72px" justify="space-between">
          <Link href="/">
            <Image boxSize="16" src="/images/logo.png" />
          </Link>
          <HStack spacing="4">
            <HStack spacing="4">
              {links.map((link) => (
                <Link
                  fontSize="lg"
                  fontWeight="medium"
                  color={link.isActive ? "#09AEAF" : "black"}
                  key={link.name}
                  href={link.url}
                >
                  {link.name}
                </Link>
              ))}
            </HStack>

            <HStack>
              <Button>Signup</Button>
              <Button variant="outline">Login</Button>
            </HStack>
          </HStack>
        </HStack>
      </Container>
      <Container
        maxW="container.xl"
        display={{
          base: "block",
          md: "none",
        }}
      >
        <HStack h="64px" justify="space-between">
          <Link href="/">
            <Image boxSize="12" src="/images/logo.png" />
          </Link>

          <IconButton color="white">
            <Icon
              onClick={onToggle}
              fontSize="2xl"
              as={!isOpen ? FaBars : AiOutlineClose}
            />
          </IconButton>
        </HStack>

        {isOpen && (
          <Stack spacing="4" py="4">
            <Stack spacing="4">
              {links.map((link) => (
                <Link
                  fontSize="lg"
                  fontWeight="medium"
                  color={link.isActive ? "#09AEAF" : "black"}
                  key={link.name}
                  href={link.url}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>

            <HStack>
              <Button>Signup</Button>
              <Button variant="outline">Login</Button>
            </HStack>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default Nav;
