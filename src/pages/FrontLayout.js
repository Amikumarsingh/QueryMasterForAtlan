// Importing React and necessary hooks for state management and lazy loading
import React, { useState, Suspense, lazy } from "react";

// Importing the Editor component for query input
import Editor from "../components/Editor/Editor";

// Importing Chakra UI components for layout and spacing
import { Stack, VStack, Spacer } from "@chakra-ui/react";

// Importing Navbar and QueryHistory components for navigation and query management
import Navbar from "../components/Navbar/Navbar";
import QueryHistory from "../components/Queries/QueryHistory";

// Lazy loading the OutputDisplay component to optimize performance
const OutputDisplay = lazy(() => import("../components/Output/OutputDisplay"));

const FrontLayout = () => {
  // State to manage the current query
  const [query, setQuery] = useState("select * from CUSTOMERS");

  // State to manage the value in the editor
  const [value, setValue] = useState(query);

  // State to store the query submitted for execution
  const [submittedQuery, setSubmittedQuery] = useState("");

  // State to maintain the history of executed queries
  const [history, setHistory] = useState([]);

  // State to manage the loading status of the output display
  const [loading, setLoading] = useState(true);

  // State to toggle between light and dark modes
  const [isNightMode, setIsNightMode] = useState(false);

  // State to toggle full-screen mode for the editor
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Function to set the query when a predefined query is selected
  const usePredefinedQuery = (value) => {
    setQuery(value);
  };

  // Function to toggle between light and dark modes
  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  // Function to execute the current query
  const runQuery = () => {
    setSubmittedQuery(query);
    setLoading(false);
  };

  return (
    // Main layout container with dynamic background color based on night mode
    <VStack
      bgColor={isNightMode ? "black" : "rgb(189 189 189)"}
      spacing={8}
      pb={12}
      minH={"100vh"}
    >
      {/* Navbar component for navigation and query selection */}
      <Navbar
        usePredefinedQuery={usePredefinedQuery}
        setValue={setValue}
        toggleNightMode={toggleNightMode}
      />

      {/* Main content area with editor and query history */}
      <Stack w={"100%"} justifyContent={"space-between"} px={4}>
        {!isFullScreen && (
          <Stack direction={["column", "row"]}>
            {/* Editor component for writing and managing queries */}
            <Editor
              query={query}
              setQuery={setQuery}
              runQuery={runQuery}
              usePredefinedQuery={usePredefinedQuery}
              history={history}
              setSubmittedQuery={setSubmittedQuery}
              setHistory={setHistory}
              value={value}
              setValue={setValue}
              isFullScreen={isFullScreen}
              setIsFullScreen={setIsFullScreen}
            />
            <Spacer />
            {/* QueryHistory component to display and manage query history */}
            <QueryHistory
              history={history}
              setHistory={setHistory}
              setQuery={setQuery}
              setValue={setValue}
              m={4}
            />
          </Stack>
        )}
        {isFullScreen && (
          // Full-screen mode for the editor
          <Editor
            query={query}
            setQuery={setQuery}
            runQuery={runQuery}
            usePredefinedQuery={usePredefinedQuery}
            history={history}
            setSubmittedQuery={setSubmittedQuery}
            setHistory={setHistory}
            value={value}
            setValue={setValue}
            isFullScreen={isFullScreen}
            setIsFullScreen={setIsFullScreen}
          />
        )}
      </Stack>

      {/* Suspense component to handle lazy loading of OutputDisplay */}
      <Suspense fallback={<div>Loading...</div>}>
        <OutputDisplay
          submittedQuery={submittedQuery}
          loading={loading}
          setLoading={setLoading}
        />
      </Suspense>
    </VStack>
  );
};

// Exporting the FrontLayout component as the default export
export default FrontLayout;
