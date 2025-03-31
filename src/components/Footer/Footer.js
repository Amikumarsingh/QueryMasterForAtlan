// Importing Chakra UI components for layout and styling
import { Link, Text, Button, Stack } from "@chakra-ui/react";

// Importing icons for social media links
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

// Importing React for building the component
import React from "react";

// Footer component to display application credits and social links
function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    // Stack container for organizing footer content
    <Stack
      direction={["column", "row"]} // Responsive layout: column for small screens, row for larger screens
      bgColor={"white"} // Background color of the footer
      textAlign="center" // Center-align text
      py={2} // Padding on the y-axis
      color="rgb(34 37 211)" // Text color
      justify={"center"} // Center-align content
    >
      {/* Text displaying the application name and creator */}
      <Text fontSize="16">
        Query Master | Created with ❤️ by{" "}
        <Button
          as={"a"} // Render the button as a link
          href="https://www.linkedin.com/in/amit-kumar/" // Replace with the LinkedIn profile URL
          target="_blank" // Open the link in a new tab
          rightIcon={<FaLinkedin />} // Add LinkedIn icon to the button
          color={"black"} // Button text color
          fontWeight={"bold"} // Bold text
          variant="link" // Button style as a link
        >
          Amit Kumar
        </Button>
      </Text>

      {/* Text displaying copyright information */}
      <Text>| Copyright © {currentYear}</Text>
    </Stack>
  );
}

// Exporting the Footer component for use in other parts of the application
export default Footer;
