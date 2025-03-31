// Importing React for building the component
import React from "react";

// Importing Chakra UI components for layout, styling, and color mode management
import { HStack, Heading, IconButton, useColorMode } from "@chakra-ui/react";

// Importing icons for visual elements
import { BsGithub } from "react-icons/bs";
import { FaSun, FaMoon, FaSignOutAlt } from "react-icons/fa";

// Importing the QueriesDrawer component for predefined query selection
import QueriesDrawer from "../Queries/QueriesDrawer";

// Navbar component for application navigation and theme toggling
function Navbar({ usePredefinedQuery, setValue, toggleNightMode }) {
  // Chakra UI's color mode hook for toggling between light and dark themes
  const { colorMode, toggleColorMode } = useColorMode();

  // Function to handle toggling both Chakra UI's color mode and custom night mode
  const handleToggle = () => {
    toggleColorMode(); // Toggle Chakra UI's color mode
    toggleNightMode((prev) => !prev); // Toggle custom night mode state
  };

  return (
    // Horizontal stack for organizing navbar elements
    <HStack
      bgColor={colorMode === "light" ? "white" : "gray.800"} // Background color based on theme
      width="100%"
      p={4}
      justifyContent="space-between"
    >
      {/* Drawer for selecting predefined queries */}
      <QueriesDrawer
        usePredefinedQuery={usePredefinedQuery}
        displayText={false}
        setValue={setValue}
      />

      {/* Application title */}
      <Heading
        fontFamily="'Boldonse', system-ui"
        color={colorMode === "light" ? "rgb(34, 37, 211)" : "white"} // Text color based on theme
      >
        Query Master
      </Heading>

      {/* Right-aligned buttons for theme toggle and logout */}
      <HStack spacing={4}>
        {/* Button to toggle between light and dark modes */}
        <IconButton
          aria-label="Toggle Dark/Light mode"
          icon={
            colorMode === "light" ? (
              <FaMoon fontSize="1.5rem" />
            ) : (
              <FaSun fontSize="1.5rem" />
            )
          } // Icon changes based on the current theme
          bg="rgb(34 37 211)" // Blue background
          color="white" // White icon color
          _hover={{ bg: "rgb(129 230 217)" }} // Hover effect with lighter blue
          borderRadius="none" // No border radius
          onClick={handleToggle}
        />

        {/* Button for logout functionality */}
        <IconButton
          aria-label="Logout"
          icon={<FaSignOutAlt fontSize="1.5rem" />} // Logout icon
          bg="rgb(34 37 211)" // Blue background
          color="white" // White icon color
          _hover={{ bg: "rgb(129 230 217)" }} // Hover effect with lighter blue
          borderRadius="none" // No border radius
          onClick={() => alert("Logout clicked!")} // Placeholder logout functionality
        />
      </HStack>
    </HStack>
  );
}

// Exporting the Navbar component for use in other parts of the application
export default Navbar;
