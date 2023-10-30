import { Box, HStack, Heading, Image, Stack, VStack } from "@chakra-ui/react";
import React from "react";

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
    <Box mt="6">
      <Stack bg="#09AEAF0F" mx="auto" w="full" gap="2" p="8">
        <Heading fontWeight="medium" fontSize="3xl">
          Our Clients
        </Heading>
        <VStack>
          <HStack>
            {clientLogo.map((logos, index) => (
              <Image
                key={index}
                src={logos.logo}
                h="20"
                w="170px"
                opacity="0.6"
              />
            ))}
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
}
