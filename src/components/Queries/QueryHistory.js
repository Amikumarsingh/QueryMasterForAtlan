// Importing Chakra UI components for layout and styling
import {
  ListItem,
  ListIcon,
  List,
  Box,
  Heading,
  HStack,
  IconButton,
  Flex,
} from "@chakra-ui/react";

// Importing icons for visual representation
import { BsCodeSquare } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

// Component to display and manage the history of executed queries
function QueryHistory({ history, setQuery, setValue, setHistory }) {
  // Function to handle clicking on a query in the history
  const onClickHistory = (value) => {
    // If the query contains '*', set it as the current query
    if (value.includes("*")) setQuery(value);
    // Update the editor value with the selected query
    setValue(value);
  };

  // Function to remove a specific query from the history
  const handleRemoveHistory = (e, historyItem) => {
    e.stopPropagation(); // Prevent triggering the parent click event
    setHistory((prevHistory) =>
      prevHistory.filter((history) => history !== historyItem)
    );
  };

  return (
    // Container for the query history section
    <Box
      w={["100%", "20%"]}
      bgColor={"whiteAlpha.500"}
      p={2}
      minH={"20vh"}
      overflowY="auto"
      textAlign={"center"}
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
    >
      {/* Header section with title and clear history button */}
      <HStack justifyContent={"space-between"}>
        <Heading fontSize={"2xl"} m={2}>
          Queries History
        </Heading>
        <IconButton
          icon={<MdDelete />}
          aria-label="Delete"
          visibility={history.length === 0 ? "hidden" : "visible"}
          onClick={() => setHistory([])} // Clear all history
        ></IconButton>
      </HStack>

      {/* Display the list of queries or a placeholder message */}
      {history.length > 0 ? (
        <List spacing={3} p={2}>
          {history.map((item, id) => (
            <ListItem
              bgColor={"teal.200"}
              p={3}
              borderRadius={"5px"}
              onClick={() => onClickHistory(item)} // Handle query selection
              key={`${item}---${id}`}
              cursor={"pointer"}
              _hover={{ bg: "teal.500" }}
            >
              <Flex align="center" justify="space-between">
                {/* Icon and query text */}
                <ListIcon as={BsCodeSquare} />
                {item}
                {/* Button to delete a specific query */}
                <IconButton
                  icon={<MdDelete />}
                  aria-label="Delete"
                  onClick={(e) => handleRemoveHistory(e, item)}
                ></IconButton>
              </Flex>
            </ListItem>
          ))}
        </List>
      ) : (
        // Message displayed when no queries are in the history
        "Execute a query first"
      )}
    </Box>
  );
}

// Exporting the QueryHistory component for use in other parts of the application
export default QueryHistory;
