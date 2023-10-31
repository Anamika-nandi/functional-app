import { Container, Flex, Heading, Stack } from "@chakra-ui/react";
import Faq from "./Faq";

const FaqSection = () => {
  return (
    <Container mt="12" maxW="container.xl">
      <Heading fontWeight="medium" fontSize="3xl" textAlign="center">
        Frequently Asked Questions
      </Heading>
      <Flex
        justify="start"
        mt="6"
        gap="12"
        flexDir={{
          base: "column",
          lg: "row",
        }}
      >
        <Stack flex="1">
          <Faq />
        </Stack>
        <Stack flex="1">
          <Faq />
        </Stack>
      </Flex>
    </Container>
  );
};

export default FaqSection;
