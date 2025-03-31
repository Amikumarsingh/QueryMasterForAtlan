// Importing React and Chakra UI components for creating the drawer and layout
import React from "react";
import {
  Button,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  Text,
  AccordionPanel,
  Icon,
  HStack,
} from "@chakra-ui/react";

// Importing icons for visual elements
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";

// Importing predefined queries from a data file
import { queryMap } from "../../assets/data/queries";

// Component to display a drawer with predefined queries
const QueriesDrawer = ({ usePredefinedQuery, displayText, setValue }) => {
  // Chakra UI hook to manage the drawer's open/close state
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(); // Reference for the button that triggers the drawer

  // Function to handle clicking on a predefined query
  const Queryonclick = (value) => {
    usePredefinedQuery(value); // Set the selected query
  };

  return (
    <>
      {/* Button to open the drawer */}
      <Button
        aria-label="Available Tables"
        leftIcon={<AiOutlineBars fontSize="1.5rem" />} // Icon for the button
        ref={btnRef}
        color={displayText ? "rgb(34 37 211)" : "white"} // Text color based on displayText
        bg={displayText ? "white" : "rgb(34 37 211)"} // Background color based on displayText
        _hover={{ bg: "rgb(129 230 217)" }} // Hover effect
        variant="solid"
        onClick={onOpen}
        m={0}
        w={displayText ? "80%" : "auto"}
        justifyContent="start"
        textAlign="left"
        border={displayText ? "2px solid rgb(34 37 211)" : "0px"} // Conditional border
        borderRadius={displayText ? "md" : "none"} // Conditional border radius
      >
        {displayText ? "Avl Tables" : ""}
      </Button>

      {/* Drawer component to display available queries */}
      <Drawer
        isOpen={isOpen}
        placement="left" // Drawer opens from the left
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="rgb(34 37 211)">
          <DrawerCloseButton />
          <DrawerHeader color={"white"}>Available Queries</DrawerHeader>

          <DrawerBody>
            {/* Stack to organize the content inside the drawer */}
            <Stack direction="column" spacing={4}>
              {/* Accordion to display query categories */}
              <Accordion allowToggle color={"white"}>
                {queryMap.map((items, key) => (
                  <AccordionItem py={2} border="none" key={key}>
                    <h2>
                      {/* Accordion button for each query category */}
                      <AccordionButton
                        onClick={() => {
                          Queryonclick(items.query); // Handle query selection
                        }}
                        bgColor={"rgb(243 77 119)"}
                      >
                        <HStack justifyContent={"space-between"} w={"100%"}>
                          <Icon as={BsFillArrowRightCircleFill} />
                          <Text fontWeight="bold">{items.tableQuery}</Text>
                          <AccordionIcon />
                        </HStack>
                      </AccordionButton>
                    </h2>
                    {/* Displaying fields for each query */}
                    {items.tableFields.map((tablefieldData, key) => (
                      <AccordionPanel
                        key={key}
                        bgColor={"blackAlpha.300"}
                        fontWeight="bold"
                        pb={2}
                        cursor={"pointer"}
                        _hover={{ bg: "blackAlpha.100" }}
                        onClick={() => {
                          // Set the query with the selected field
                          setValue(
                            "select " +
                              tablefieldData +
                              " from " +
                              items.tableQuery
                          );
                          onClose(); // Close the drawer after selection
                        }}
                      >
                        {tablefieldData}
                      </AccordionPanel>
                    ))}
                  </AccordionItem>
                ))}
              </Accordion>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

// Exporting the QueriesDrawer component for use in other parts of the application
export default QueriesDrawer;
