// Importing core React libraries and dependencies
import React from "react";
import ReactDOM from "react-dom/client";

// Importing global styles
import "./index.css";

// Importing the main application component
import App from "./App";

// Importing Chakra UI for styling and theming
import { ChakraProvider } from "@chakra-ui/react";

// Importing Vercel Analytics for tracking app performance
import { Analytics } from "@vercel/analytics/react";

// Creating the root element for rendering the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the application within React's StrictMode for highlighting potential issues
root.render(
  <React.StrictMode>
    {/* Wrapping the app with ChakraProvider for consistent styling */}
    <ChakraProvider>
      {/* Main application component */}
      <App />
      {/* Analytics component for tracking user interactions */}
      <Analytics />
    </ChakraProvider>
  </React.StrictMode>
);

// Optional: Add performance monitoring to measure app performance
// You can pass a function to log results (e.g., reportWebVitals(console.log))
// or send the data to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
