import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

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
    <VStack mt="12" maxW="1920px">
      <Text fontWeight="medium" fontSize="3xl">
        Testimonials
      </Text>
      <HStack mt="4">
        <Box
          overflow="hidden"
          overflowX="auto"
          maxW="1200px"
          overscrollX="hidden"
        >
          <Grid grid templateColumns="repeat(7, 1fr)" gap="6">
            {testimonialsText.map((text) => (
              <VStack
                key={text.id}
                bg="#09AEAF"
                borderRadius="2xl"
                w="350px"
                p="8"
                alignItems="flex-start"
              >
                <HStack>
                  <Image src="./images/testimoni-icon.svg" h="8" w="8" />
                  <Text fontSize="2xl" fontWeight="semibold" color="white">
                    {text.header}
                  </Text>
                </HStack>
                <Text textAlign="start" fontSize="base" color="white">
                  {text.text}
                </Text>
              </VStack>
            ))}
          </Grid>
        </Box>
      </HStack>
    </VStack>
  );
}
