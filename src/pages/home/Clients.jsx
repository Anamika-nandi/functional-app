import {
  Box,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";

export default function Clients() {
  const clientLogo = [
    { logo: "/images/client1.svg" },
    { logo: "/images/client2.svg" },
    { logo: "/images/client3.svg" },
    { logo: "/images/client4.svg" },
    { logo: "/images/client5.svg" },
    { logo: "/images/client6.svg" },
  ];
  return (
    <Container
      maxW="container.xl"
      px={{
        base: "0",
        md: "4",
      }}
    >
      <Box mt="6">
        <Stack
          bg="#09AEAF0F"
          mx="auto"
          w="full"
          gap="2"
          py="8"
          borderRadius={{
            base: "none",
            md: "2xl",
          }}
        >
          <Heading
            fontWeight="medium"
            w="full"
            textAlign="center"
            fontSize="3xl"
          >
            Our Clients
          </Heading>
          <HStack justify="center" flexWrap="wrap">
            {clientLogo.map((logos, index) => (
              <Image
                key={index}
                src={logos.logo}
                h="20"
                w={{
                  base: "120px",
                  md: "140px",
                  lg: "160px",
                }}
                opacity="0.6"
              />
            ))}
          </HStack>
        </Stack>
      </Box>
    </Container>
  );
}
