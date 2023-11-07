import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  useTab,
  useMultiStyleConfig,
  Button,
  Box,
  VStack,
  Icon,
  Grid,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
const PokerTabs = () => {
  const CustomTab = React.forwardRef((props, ref) => {
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps["aria-selected"];

    const styles = useMultiStyleConfig("Tabs", tabProps);

    return (
      <VStack spacing="1">
        <Grid placeItems="center" boxSize="6">
          {isSelected ? <Icon as={AiFillCaretDown} boxSize="6" /> : <Box />}
        </Grid>
        <Button
          color={isSelected ? "black" : ""}
          fontWeight="bold"
          bg={isSelected ? "red" : ""}
          sx={{
            "&:hover": {
              bg: "red",
              color: "black",
            },
            "& > p": {
              color: isSelected ? "white" : "",
            },
          }}
          borderBottomColor={isSelected ? "red" : ""}
          __css={styles.tab}
          {...tabProps}
        >
          {tabProps.children}
        </Button>
      </VStack>
    );
  });

  const tabs = [
    {
      name: "1",
      component: <></>,
    },
    {
      name: "2",
      component: <></>,
    },
    {
      name: "3",
      component: <></>,
    },
    {
      name: "4",
      component: <></>,
    },
    {
      name: "5",
      component: <></>,
    },
  ];

  return (
    <Tabs>
      <Flex justify="end">
        <TabList>
          {tabs.map((tab) => (
            <CustomTab key={tab.name}>
              <Text>{tab.name}</Text>
            </CustomTab>
          ))}
        </TabList>
      </Flex>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default PokerTabs;
