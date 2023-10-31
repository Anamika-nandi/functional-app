import { Box, HStack, Text, Button, VStack } from "@chakra-ui/react";
import React from "react";

export default function HeroSec() {
  return (
    <HStack>
      <HStack flex="1">
        <Text>Practice from an infinite pool of actuarial questions</Text>
        <Text>
          We found out that the lambda calculus and actuarial science education
          marry very well. Discover the quality and breadth of calculation
          questions we can automatically generate for you as a result
        </Text>
        <Button>Let's Get Started</Button>
      </HStack>
      <HStack flex="1">
        <Text>Practice from an infinite pool of actuarial questions</Text>
        <Text>
          We found out that the lambda calculus and actuarial science education
          marry very well. Discover the quality and breadth of calculation
          questions we can automatically generate for you as a result
        </Text>
        <Button>Let's Get Started</Button>
      </HStack>
    </HStack>
  );
}
