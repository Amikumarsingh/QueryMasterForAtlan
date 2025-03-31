// Importing React for building the component
import React from "react";

// Importing Chakra UI components for layout and styling
import { Box, VStack, Button, Input } from "@chakra-ui/react";

// Importing the QueriesDrawer component for predefined query selection
import QueriesDrawer from "../Queries/QueriesDrawer";

// Importing icons for buttons
import { AiFillCaretRight, AiOutlineBars } from "react-icons/ai";
import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";

// Component for rendering bottom controls in the editor
const EditorBottomControls = ({
  SubmitQuery, // Function to execute the query
  ClearQuery, // Function to clear the query
  usePredefinedQuery, // Function to use predefined queries
  setValue, // Function to update the editor value
}) => {
  // Reference for the file input element
  const fileInput = React.useRef();

  // Function to trigger the file input click event
  const handleFileInputClick = () => {
    fileInput.current.click();
  };

  return (
    // Vertical stack for organizing the controls
    <VStack
      w={"100%"} // Full width for the container
      spacing={4} // Add spacing between elements
      alignItems="center" // Center align all items
    >
      {/* Queries Drawer for selecting predefined queries */}
      <Box width={"100%"} textAlign="center">
        <QueriesDrawer
          usePredefinedQuery={usePredefinedQuery}
          displayText={true}
          setValue={setValue}
          w={{ base: "100%", md: "auto" }}
        />
      </Box>

      {/* Import Button for uploading files */}
      <Box w={"100%"} textAlign="center">
        <Input hidden id="import" name="import" type="file" ref={fileInput} />
        <Button
          aria-label="Import"
          leftIcon={<BsFillFileEarmarkArrowUpFill fontSize="1.5rem" />} // Icon for the button
          color="rgb(34 37 211)" // Text color
          bg="white" // Background color
          _hover={{ bg: "rgb(129 230 217)" }} // Hover effect
          variant="solid" // Solid button style
          onClick={handleFileInputClick} // Trigger file input click
          borderRadius="md" // Rounded corners
          m={0} // No margin
          w={"80%"} // Button width
          justifyContent="start" // Align content to the left
          textAlign="left" // Align text to the left
          border="2px solid rgb(34 37 211)" // Border styling
        >
          Import
        </Button>
      </Box>

      {/* Run Query Button */}
      <Button
        aria-label="Run Query"
        leftIcon={<AiFillCaretRight fontSize="1.5rem" />} // Icon for the button
        color="rgb(34 37 211)" // Text color
        bg="white" // Background color
        _hover={{ bg: "rgb(129 230 217)" }} // Hover effect
        variant="solid" // Solid button style
        onClick={SubmitQuery} // Trigger query execution
        borderRadius="md" // Rounded corners
        m={0} // No margin
        w={"80%"} // Button width
        justifyContent="start" // Align content to the left
        textAlign="left" // Align text to the left
        border="2px solid rgb(34 37 211)" // Border styling
      >
        Run Query
      </Button>

      {/* Clear Button */}
      <Button
        aria-label="Clear"
        leftIcon={<AiOutlineBars fontSize="1.5rem" />} // Icon for the button
        color="rgb(34 37 211)" // Text color
        bg="white" // Background color
        _hover={{ bg: "rgb(129 230 217)" }} // Hover effect
        variant="solid" // Solid button style
        onClick={ClearQuery} // Trigger query clearing
        borderRadius="md" // Rounded corners
        m={0} // No margin
        w={"80%"} // Button width
        justifyContent="start" // Align content to the left
        textAlign="left" // Align text to the left
        border="2px solid rgb(34 37 211)" // Border styling
      >
        Clear
      </Button>
    </VStack>
  );
};

// Exporting the EditorBottomControls component for use in other parts of the application
export default EditorBottomControls;