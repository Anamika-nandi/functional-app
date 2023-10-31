import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Testimonials() {
  const testimonialsText = [
    {
      id: 1,
      icon: "",
      header: "Praesent eget",
      text: "Proin vel metus eu eros maximus vestibulum. Praesent eget risus in sapien venenatis dapibus vel non eros.",
    },
    {
      id: 2,
      icon: "",
      header: "Praesent eget",
      text: "Proin vel metus eu eros maximus vestibulum. Praesent eget risus in sapien venenatis dapibus vel non eros.",
    },
    {
      id: 3,
      icon: "",
      header: "Praesent eget",
      text: "Proin vel metus eu eros maximus vestibulum. Praesent eget risus in sapien venenatis dapibus vel non eros.",
    },
    {
      id: 4,
      icon: "",
      header: "Praesent eget",
      text: "Proin vel metus eu eros maximus vestibulum. Praesent eget risus in sapien venenatis dapibus vel non eros.",
    },
    {
      id: 5,
      icon: "",
      header: "Praesent eget",
      text: "Proin vel metus eu eros maximus vestibulum. Praesent eget risus in sapien venenatis dapibus vel non eros.",
    },
  ];
  return (
    <Container mt="12" maxW="container.xl">
      <Text fontWeight="medium" fontSize="3xl" textAlign="center">
        Testimonials
      </Text>
      <HStack mt="4" justify="center" w="full">
        <Box overflow="hidden" overflowX="auto" overscrollX="hidden">
          <Flex
            gap={{
              base: 4,
              md: 8,
            }}
          >
            {testimonialsText.map((text) => (
              <VStack
                key={text.id}
                bg="#09AEAF"
                borderRadius="2xl"
                minW={{
                  base: "320px",
                  md: "390px",
                }}
                p="8"
                alignItems="flex-start"
              >
                <HStack>
                  <Image src="/images/testimonial-icon.svg" h="8" w="8" />
                  <Text fontSize="2xl" fontWeight="semibold" color="white">
                    {text.header}
                  </Text>
                </HStack>
                <Text textAlign="start" fontSize="base" color="white">
                  {text.text}
                </Text>
              </VStack>
            ))}
          </Flex>
        </Box>
      </HStack>
    </Container>
  );
}
