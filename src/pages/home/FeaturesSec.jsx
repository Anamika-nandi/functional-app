import { HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

export default function FeaturesSec() {
  const featuresText = [
    {
      id: 1,
      icon: "/images/feature-icon1.svg",
      header: "Ut venenatis lorem",
      text: "Erratas are so 2005. We correct defective content, if any, in real time",
    },
    {
      id: 2,
      icon: "/images/feature-icon2.svg",
      header: "Ut mattis erat",
      text: "Excel-compatible tabular data, simply copy and paste any tables and they will seamlessly be formatted for the Excel sheet",
    },
  ];
  const usText = [
    { id: 1, text: "Ut mattis erat sodales, cursus urna in," },
    { id: 2, text: "Commodo tortor. Donec ultrices nibh" },
    { id: 3, text: "Proin mattis justo leo, sed rhoncus turpis" },
    { id: 4, text: "Donec turpis nunc, varius vitae viverra id," },
    { id: 5, text: " Aliquam rutrum ornare fermentum." },
  ];
  return (
    <HStack mt="12" spacing="6">
      <VStack flex="1">
        <Heading fontWeight="medium" fontSize="3xl">
          Features
        </Heading>
        <HStack
          bg="#09AEAF0D"
          p="8"
          align="flex-start"
          borderRadius="3xl"
          mt="4"
          h="280px"
        >
          {featuresText.map((text) => (
            <VStack key={text.id} flex="1">
              <Image src={text.icon} w="16" h="16" />
              <Text fontWeight="bold" fontSize="xl">
                {text.header}
              </Text>
              <Text fontSize="md" color="#9F9F9F">
                {text.text}
              </Text>
            </VStack>
          ))}
        </HStack>
      </VStack>
      <VStack flex="1">
        <Heading fontWeight="medium" fontSize="3xl">
          Why us?
        </Heading>
        <VStack
          bg="#09AEAF"
          py="8"
          px="14"
          align="flex-start"
          borderRadius="3xl"
          mt="4"
          w="full"
          h="280px"
          justifyContent="center"
        >
          {usText.map((text) => (
            <HStack key={text.id} alignItems="flex-start">
              <Image src="./images/us-icon.svg" w="6" h="6" />
              <Text fontSize="xl" color="white" pl="1.5">
                {text.text}
              </Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </HStack>
  );
}
