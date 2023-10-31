import {
  Box,
  HStack,
  Text,
  Button,
  Stack,
  Image,
  Container,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container maxW="container.xl">
      <HStack
        mt="12"
        justify="space-between"
        flexDir={{
          base: "column-reverse",
          md: "row",
        }}
        mb="8"
      >
        <Stack
          flex="1"
          backgroundImage="url('/images/hero-bg.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          maxW="600px"
        >
          <Text
            fontWeight="semibold"
            fontSize={{
              base: "3xl",
              md: "4xl",
              lg: "5xl",
            }}
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
            We found out that the lambda calculus and actuarial science
            education marry very well. Discover the quality and breadth of
            calculation questions we can automatically generate for you as a
            result
          </Text>
          <Button
            maxW={{
              base: "full",
              md: "200px",
            }}
            h="12"
            mt="3"
          >
            Let's Get Started
          </Button>
        </Stack>
        <Box>
          <Image
            src="/images/hero-sec.png"
            boxSize={{
              base: "300px",
              md: "400px",
            }}
          />
        </Box>
      </HStack>
    </Container>
  );
}
