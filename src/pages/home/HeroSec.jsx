import {
  Box,
  HStack,
  Text,
  Button,
  VStack,
  Stack,
  Image,
} from "@chakra-ui/react";
import { url } from "inspector";
import React from "react";

export default function HeroSec() {
  return (
    <HStack mt="12">
      <Stack
        flex="1"
        pl="12"
        backgroundImage="url('/images/hero-bg.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Text
          fontWeight="semibold"
          fontSize="6xl"
          maxW="702px"
          lineHeight="1.1"
        >
          Practice from an
          <Text as="span" color="#09AEAF" px="1">
            infinite pool
          </Text>
          of actuarial questions
        </Text>
        <Text color="#8C8C8C" fontSize="md" pt="3">
          We found out that the lambda calculus and actuarial science education
          marry very well. Discover the quality and breadth of calculation
          questions we can automatically generate for you as a result
        </Text>
        <Button maxW="200px" h="12" mt="3">
          Let's Get Started
        </Button>
      </Stack>
      <Stack flex="1">
        <Image src="/images/hero-sec.png" h="400px" w="400px" />
      </Stack>
    </HStack>
  );
}
