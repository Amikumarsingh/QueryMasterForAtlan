// Importing Chakra UI components for layout and styling
import {
  Text,
  HStack,
  VStack,
  Select,
  IconButton,
  Spacer,
  Flex,
} from "@chakra-ui/react";

// Importing React for building the component
import React from "react";

// Importing icons for full-screen toggle and history
import { BsArrowsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";

// Importing the EditorInsideBottomControls component for additional controls
import EditorInsideBottomControls from "./EditorInsideBottomControls";

// Component for rendering the left-side controls of the editor
function EditorLeftControls({
  setTheme, // Function to update the editor theme
  isFullScreen, // State to track full-screen mode
  setIsFullScreen, // Function to toggle full-screen mode
  SubmitQuery, // Function to execute the query
  ClearQuery, // Function to clear the query
  usePredefinedQuery, // Function to use predefined queries
  setValue, // Function to update the editor value
  value, // Current value in the editor
  errorQuery, // Function to handle invalid queries
}) {
  // List of available themes for the editor
  const themes = [
    "sqlserver",
    "ambiance",
    "chaos",
    "chrome",
    "clouds",
    "cobalt",
    "github",
    "monokai",
    "solarized_dark",
    "solarized_light",
    "terminal",
    "tomorrow",
    "xcode",
  ];

  // Function to toggle full-screen mode
  const handleFullScreenToggle = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    // Vertical stack for organizing the left-side controls
    <VStack
      w={"20%"} // Set width to 20%
      justifyContent={"space-between"} // Space out elements vertically
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} // Add shadow for depth
      bgColor={"whiteAlpha.500"} // Semi-transparent white background
      height={"100%"} // Full height
    >
      {/* Top section for theme selection and additional controls */}
      <VStack w={"100%"}>
        {/* Label for the theme dropdown */}
        <Text fontWeight={"bold"} color="rgb(34 37 211)">
          THEME
        </Text>

        {/* Dropdown for selecting the editor theme */}
        <Flex w="100%" justifyContent="center" alignItems="center">
          <Select
            aria-label="Theme options" // Accessibility label
            onChange={(e) => {
              setTheme(e.currentTarget.value); // Update the selected theme
            }}
            w="80%" // Set dropdown width
            textAlign="center" // Center align text
            bg="white" // White background
            color="rgb(34 37 211)" // Text color
            border="2px solid rgb(34 37 211)" // Border styling
            borderRadius="md" // Rounded corners
            _hover={{ borderColor: "rgb(129 230 217)" }} // Hover effect
            _focus={{
              borderColor: "rgb(129 230 217)",
              boxShadow: "0 0 0 2px rgb(129 230 217)",
            }} // Focus styles
            boxShadow="md" // Add shadow for depth
            fontWeight="bold" // Bold text
            fontSize="sm" // Adjust font size
          >
            <option defaultValue="sqlserver" disabled>
              Select
            </option>
            {themes.map((items, key) => (
              <option key={key} value={items}>
                {items}
              </option>
            ))}
          </Select>
        </Flex>

        {/* Bottom controls for query management */}
        <EditorInsideBottomControls
          SubmitQuery={value ? SubmitQuery : errorQuery} // Execute or show error
          ClearQuery={ClearQuery} // Clear the query
          usePredefinedQuery={usePredefinedQuery} // Use predefined queries
          setValue={setValue} // Update the editor value
        />
      </VStack>

      {/* Bottom section for full-screen toggle and history */}
      <Flex w="100px">
        {isFullScreen && (
          <IconButton
            aria-label="History" // Accessibility label
            icon={<FaHistory />} // History icon
            onClick={handleFullScreenToggle} // Toggle full-screen mode
          />
        )}
      </Flex>
    </VStack>
  );
}

// Exporting the EditorLeftControls component for use in other parts of the application
export default EditorLeftControls;
