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
} from "@chakra-ui/react";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
const PokerTabs = () => {
  const CustomTab = React.forwardRef((props, ref) => {
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps["aria-selected"];

    const styles = useMultiStyleConfig("Tabs", tabProps);

    return (
      <VStack spacing="0">
        <Grid placeItems="center" boxSize="6">
          {" "}
          {isSelected ? <Icon as={AiFillCaretDown} boxSize="6" /> : <Box />}
        </Grid>
        <Button __css={styles.tab} {...tabProps}>
          {tabProps.children}
        </Button>
      </VStack>
    );
  });

  return (
    <Tabs>
      <TabList>
        <CustomTab>1</CustomTab>
        <CustomTab>2</CustomTab>
        <CustomTab>3</CustomTab>
      </TabList>

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
