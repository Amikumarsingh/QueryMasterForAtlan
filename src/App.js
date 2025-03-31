// Importing React to create the main application component
import React from "react";

// Importing the layout for the main content of the application
import FrontLayout from "./pages/FrontLayout";

// Importing the footer component for the application
import Footer from "./components/Footer/Footer";

// Importing Chakra UI's Box component for layout and styling
import { Box } from "@chakra-ui/react";

// Main application component
function App() {
  return (
    // Wrapping the application content in a Box with a semi-transparent black background
    <Box bgColor={"blackAlpha.500"}>
      {/* Rendering the main layout of the application */}
      <FrontLayout />
      {/* Rendering the footer at the bottom of the application */}
      <Footer />
    </Box>
  );
}

// Exporting the App component as the default export
export default App;