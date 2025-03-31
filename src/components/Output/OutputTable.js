// Importing Chakra UI components for creating and styling the table
import {
  Td,
  Th,
  Tr,
  Box,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Text,
} from "@chakra-ui/react";

// Importing React for building the component
import React from "react";

// Component to display query results in a tabular format
const OutputTable = ({ data }) => {
  // Extracting the column headers from the first row of data
  const headerItems = Object.keys(data[0]);

  return (
    <>
      {data.length > 0 ? (
        // Display the table if data is available
        <Box px={4} width={"100%"}>
          <Box overflowY="auto" overflowX="auto" maxH="50vh" maxW="100%">
            <Table variant="striped">
              {/* Caption for the table */}
              <TableCaption>Resulting Query Table</TableCaption>

              {/* Table header with column names */}
              <Thead
                position="sticky"
                top={0}
                zIndex="docked"
                bgColor="rgb(34, 37, 211)"
              >
                <Tr>
                  {headerItems.map((item, key) => (
                    <Th fontWeight="extrabold" color="white" key={key}>
                      {item}
                    </Th>
                  ))}
                </Tr>
              </Thead>

              {/* Table body with data rows */}
              <Tbody height={"50vh"} overflowY={"scroll"}>
                {data.map((bodyitem, key) => (
                  <Tr key={key}>
                    {headerItems.map((i, key) => {
                      return <Td key={key}>{bodyitem[i]}</Td>;
                    })}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      ) : (
        // Message displayed when no data is available
        <Text>Write a query to see tabular results</Text>
      )}
    </>
  );
};

// Exporting the OutputTable component for use in other parts of the application
export default OutputTable;
