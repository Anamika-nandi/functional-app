import { Box, Flex, HStack, Img, Stack, VStack } from "@chakra-ui/react";
import React from "react";

export default function FooterIcon() {
  const footerIcon = [
    { id: 1, icon: "/images/footer-icon1.svg" },
    { id: 2, icon: "/images/footer-icon2.svg" },
    { id: 3, icon: "/images/footer-icon3.svg" },
    { id: 4, icon: "/images/footer-icon4.svg" },
    { id: 5, icon: "/images/footer-icon5.svg" },
    { id: 6, icon: "/images/footer-icon6.svg" },
  ];
  return (
    <HStack w="full" justify="center" mt="12" gap="4" bg="#09AEAF14" py="7">
      {footerIcon.map((icons) => (
        <Img src={icons.icon} key={icons.id} w="10" h="10" />
      ))}
    </HStack>
  );
}
