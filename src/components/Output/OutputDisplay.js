// Importing React and hooks for managing state and side effects
import React, { useEffect, useState } from "react";

// Importing the OutputTable component to display query results
import OutputTable from "./OutputTable";

// Importing Chakra UI components for layout, styling, and notifications
import {
  Button,
  Heading,
  Spacer,
  Spinner,
  Text,
  VStack,
  Stack,
  useToast,
  Flex,
} from "@chakra-ui/react";

// Importing predefined queries and their data
import { queryMap } from "../../assets/data/queries";

// Importing CSV download functionality and icons
import CsvDownload from "react-json-to-csv";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";

const OutputDisplay = ({ submittedQuery, loading, setLoading }) => {
  // State to store query results
  const [results, setResults] = useState([]);

  // State to store the filename for exporting data
  const [filename, setFilename] = useState("");

  // State to track the time taken to execute the query
  const [queryTime, setQueryTime] = useState();

  // State to track the number of rows affected by the query
  const [rowsAffected, setRowsAffected] = useState(0);

  // Toast notification for user feedback
  const toast = useToast();

  // Effect to handle query execution and result fetching
  useEffect(() => {
    // Measure query execution time
    let startTime = performance.now();
    selectResults();
    setLoading(false);
    let endTime = performance.now();
    setQueryTime((endTime - startTime).toFixed(2) + " ms");

    // Show a success notification when a query is executed
    if (submittedQuery !== "") {
      toast({
        title: "Query Executed",
        description: "Your query has been processed successfully.",
        status: "success",
        duration: 2000,
        isClosable: true,
        colorScheme: "blue",
      });
    }
    // eslint-disable-next-line
  }, [submittedQuery]);

  // Function to fetch results based on the submitted query
  const selectResults = () => {
    if (submittedQuery === "") {
      setResults([]);
      setRowsAffected(0);
      return;
    }

    // Find the query in the predefined query map
    const queryIndex = queryMap.findIndex((o) => o.query === submittedQuery);
    if (queryIndex === -1) {
      setResults([]);
      setRowsAffected(0);
    } else {
      const queryData = queryMap[queryIndex].data;
      setResults(queryData);
      setFilename(queryMap[queryIndex].tableQuery);
      setRowsAffected(queryData.length);
    }
  };

  // Function to export query results as a JSON file
  function exportToJSON() {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(results, null, 2)], {
      type: "application/json",
    });
    element.href = URL.createObjectURL(file);
    element.download = `${filename}.json`;
    document.body.appendChild(element);
    element.click();
  }

  // Show a loading spinner while the query is being processed
  if (loading) {
    return <Spinner thickness="4px" size="xl" />;
  }

  return (
    <>
      {results.length > 0 ? (
        <>
          {/* Header section with query details and export options */}
          <Stack
            direction={["column", "column", "row"]}
            w={"100%"}
            px={4}
            justifyContent={"space-between"}
          >
            <Heading
              textAlign="center"
              fontSize={"3xl"}
              fontFamily="'Roboto', sans-serif"
            >
              Query Output
            </Heading>
            <Spacer />

            <Flex
              justify={"center"}
              align={"center"}
              direction={["column-reverse", "row"]}
            >
              {/* Display the number of rows affected */}
              <Button
                colorScheme="green"
                mr={2}
                borderRadius="none"
                cursor={"initial"}
                size={["sm", "md"]}
              >
                Rows Affected: {rowsAffected}
              </Button>

              {/* Display the time taken to execute the query */}
              <Button
                colorScheme="yellow"
                mr={2}
                cursor={"initial"}
                borderRadius="none"
                size={["sm", "md"]}
              >
                Query took: {queryTime}
              </Button>

              {/* Export options for CSV and JSON */}
              <Flex justify={"space-between"} py={[2, 0]}>
                <CsvDownload data={results} filename={`${filename}.csv`}>
                  <Button
                    leftIcon={<BsFillFileEarmarkArrowDownFill />}
                    colorScheme="blue"
                    size={["sm", "md"]}
                    borderRadius="none"
                  >
                    Export CSV
                  </Button>
                </CsvDownload>
                <Button
                  ml={2}
                  onClick={exportToJSON}
                  leftIcon={<BsFillFileEarmarkArrowDownFill />}
                  bg="rgb(206, 49, 152)"
                  size={["sm", "md"]}
                  borderRadius="none"
                >
                  Export JSON
                </Button>
              </Flex>
            </Flex>
          </Stack>

          {/* Display the query results in a table */}
          <OutputTable data={results} />
        </>
      ) : (
        // Message displayed when no query results are available
        <VStack justifyContent="center" p={4}>
          <Heading as="h1" fontSize="xl" mt={4}>
            Nothing to show at the moment
          </Heading>
          <Text>Run a query first to see the results</Text>
        </VStack>
      )}
    </>
  );
};

// Exporting the OutputDisplay component for use in other parts of the application
export default OutputDisplay;
