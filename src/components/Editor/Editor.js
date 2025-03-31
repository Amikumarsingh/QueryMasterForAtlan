// Importing React and hooks for managing state and side effects
import React, { useEffect, useState } from "react";

// Importing AceEditor for SQL query editing
import AceEditor from "react-ace";

// Importing AceEditor modes and extensions for SQL syntax highlighting and tools
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-min-noconflict/ext-language_tools";

// Importing Chakra UI components for layout
import { HStack } from "@chakra-ui/react";

// Importing AceEditor themes for customization
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/theme-clouds";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-solarized_light";

// Importing custom components for editor controls
import EditorTopControls from "./EditorLeftControls";
import EditorBottomControls from "./EditorInsideBottomControls";
import EditorLeftControls from "./EditorLeftControls";

// Editor component for writing and managing SQL queries
const Editor = ({
  query, // Current query
  setQuery, // Function to update the query
  runQuery, // Function to execute the query
  usePredefinedQuery, // Function to use predefined queries
  history, // Query history
  setHistory, // Function to update query history
  value, // Current value in the editor
  setValue, // Function to update the editor value
  setSubmittedQuery, // Function to set the submitted query
  isFullScreen, // Full-screen mode state
  setIsFullScreen, // Function to toggle full-screen mode
}) => {
  // State to manage the current theme of the editor
  const [theme, setTheme] = useState("sqlserver");

  // State to manage the width of the editor
  const [width, setWidth] = useState("70%");

  // State to manage the maximum number of lines in the editor
  const [maxLines, setMaxLines] = useState(10);

  // Effect to adjust editor dimensions based on full-screen mode
  useEffect(() => {
    setMaxLines(isFullScreen ? 20 : 20);
    setWidth(isFullScreen ? "100%" : "90%");
  }, [isFullScreen]);

  // Function to handle changes in the editor value
  const onChange = (newValue) => {
    setValue(newValue);
    setQuery(newValue);
  };

  // Effect to synchronize the editor value with the query
  useEffect(() => {
    setValue(query);
  }, [query, setValue]);

  // Function to submit the query and update the history
  const SubmitQuery = () => {
    runQuery();
    if (history.length === 0 || history[history.length - 1] !== value) {
      setHistory((prevHistory) => [value, ...prevHistory]);
    }
  };

  // Function to handle invalid query submissions
  const errorQuery = () => {
    alert("Enter a valid Query");
  };

  // Function to clear the editor and reset the query
  const ClearQuery = () => {
    setValue("");
    setSubmittedQuery("");
    setQuery("");
  };

  return (
    // Horizontal stack for organizing the editor and its controls
    <HStack
      w={{ base: "100%", md: width, lg: width }}
      alignItems="stretch"
    >
      {/* Left controls for managing queries and editor settings */}
      <EditorLeftControls
        SubmitQuery={value ? SubmitQuery : errorQuery} // Submit or show error
        ClearQuery={ClearQuery} // Clear the editor
        usePredefinedQuery={usePredefinedQuery} // Use predefined queries
        setValue={setValue} // Update editor value
        setTheme={setTheme} // Change editor theme
        isFullScreen={isFullScreen} // Full-screen mode state
        setIsFullScreen={setIsFullScreen} // Toggle full-screen mode
        value={value} // Current editor value
        errorQuery={errorQuery} // Handle invalid queries
      />

      {/* AceEditor for writing SQL queries */}
      <AceEditor
        mode="mysql" // SQL syntax highlighting
        id="editor"
        aria-label="editor"
        name="editor"
        theme={theme} // Current theme
        width="100%"
        fontSize={20}
        showPrintMargin={false}
        showGutter
        minLines={15}
        placeholder="Write SQL query..." // Placeholder text
        editorProps={{ $blockScrolling: true }}
        value={value} // Current editor value
        onChange={onChange} // Handle changes in the editor
        showLineNumbers
        style={{
          height: "100%", // Match height with controls
        }}
      />
    </HStack>
  );
};

// Exporting the Editor component for use in other parts of the application
export default Editor;
