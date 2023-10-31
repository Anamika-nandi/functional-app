import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function Footer() {
  const footerText = [
    {
      id: 1,
      header: "Useful Content",
      text1: "Blog articles ",
      text2: " Recommendations",
      text3: "Tools & tips",
    },
    {
      id: 2,
      header: "Company updates",
      text1: "Event Schedules ",
      text2: "Product Launches",
      text3: "Announcement",
    },
    {
      id: 3,
      header: "Offers",
      text1: "Newsletter Signup  ",
      text2: "Coupons",
      text3: "Free stuffs",
    },
  ];
  return (
    <Box bg="#2B2B2B" pt="8" pb="14">
      <VStack>
        <Image src="./images/footer-logo.svg" bg="#2B2B2B" />
      </VStack>
      <HStack justify="center" gap="14" pt="4">
        {footerText.map((text) => (
          <VStack key={text.id} color="white">
            <Text fontSize="xl" fontWeight="semibold">
              {text.header}
            </Text>
            <Text fontSize="md">{text.text1}</Text>
            <Text fontSize="md">{text.text2}</Text>
            <Text fontSize="md">{text.text3}</Text>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
}
