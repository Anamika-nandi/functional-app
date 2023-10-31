import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

import { AddIcon, CloseIcon } from "@chakra-ui/icons";

export default function Faq() {
  const faqText = [
    {
      id: 1,
      header: "Where can I watch?",
      text: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.",
    },
    {
      id: 2,
      header: "Where can I watch?",
      text: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.",
    },
    {
      id: 3,
      header: "Where can I watch?",
      text: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.",
    },
    {
      id: 4,
      header: "Where can I watch?",
      text: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.",
    },
    {
      id: 5,
      header: "Where can I watch?",
      text: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.",
    },
  ];
  return (
    <Box>
      <Accordion>
        {faqText.map((text) => (
          <AccordionItem
            key={text.id}
            borderTop="none"
            borderBottom="1px solid"
            borderBottomColor="#09AEAF"
            bg="transparent"
          >
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="xl"
                    py="3"
                  >
                    {text.header}
                  </Box>
                  {isExpanded ? (
                    <CloseIcon fontSize="xs" />
                  ) : (
                    <AddIcon fontSize="xs" />
                  )}
                </AccordionButton>

                <AccordionPanel
                  py="8"
                  color="#3C3C43D9"
                  fontSize="md"
                  textAlign="start"
                  pr={{
                    base: 0,
                    md: 24,
                  }}
                >
                  {text.text}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}
