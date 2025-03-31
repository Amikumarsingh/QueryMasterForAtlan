# Atlan Assignment Submision
![alt text](/images/image-1.png)

# React QueryMaster

## Overview

This is a React-based application that allows users to write, execute, and manage SQL queries. It features a user-friendly interface with an editor, query history, and output display.

## Features

- Write and execute SQL queries.
- Themes for Sql editor
- View the history of executed queries.
- Toggle between light and dark modes.
- Responsive design for mobile and desktop.
- Lazy loading for performance optimization.
- Query Response time using vital
- Predefined Queries
- Searched queries are Stacked and shown in Query history
- Queries report export in JSON
- Queries report export in CSV
- Rows affected shown after query run
- Clearing  Queries option is also availbale
- Queries can be imported as well
- Responsive

---

## Live Demo

[Click here to view the live demo](https://67eacf7f6b77ac007b1836aa--querymasterforatlan.netlify.app)

---

## Technologies Used

- **React**: Frontend framework.
- **Chakra UI**: UI framework for styling and layout.
- **React Icons**: For icons used in the application.

---

## Architecture Diagram

The architecture of the application is as follows:
![alt text](/images/image.png)

---

## ER Diagram

The ER diagram represents the relationships between the entities in the application:
![alt text](/images/ER_Diagram.png)

### **Entities**

- **Query**
  - Attributes: `queryText`, `submittedQuery`, `history`
- **User Interaction**
  - Attributes: `isFullScreen`, `isNightMode`
- **Output**
  - Attributes: `loading`, `results`

### **Relationships**

- A **Query** is submitted by the user and stored in the **history**.
- The **Output** is generated based on the **submittedQuery**.



---

## Explanation Document

### **React Application Explanation**

This React application is designed to allow users to write, execute, and manage SQL queries. Below is a detailed explanation of its components and functionality:

### **Landing Page**

- The main entry point of the application.
- Integrates the Navbar, Editor, QueryHistory, and OutputDisplay components.

### **Components**

- **Navbar**: Allows users to toggle between light and dark modes. Provides options to select predefined queries.
- **Editor**: A text editor for writing SQL queries. Includes features like query submission and clearing.
- **QueryHistory**: Displays a list of previously executed queries. Allows users to reselect and reuse queries.
- **OutputDisplay**: Displays the results of the executed query. Lazy-loaded to improve performance.
- **QueriesDrawer**: Provides a drawer interface for selecting predefined queries.

### **State Management**

React's `useState` is used to manage the application's state, such as:

- `query`: The current query being edited.
- `history`: The list of previously executed queries.
- `isFullScreen`: Toggles full-screen mode for the editor.
- `isNightMode`: Toggles between light and dark modes.

### **Lazy Loading**

- The `OutputDisplay` component is lazy-loaded using React's `Suspense` to optimize performance by loading it only when needed.

### **Responsive Design**

- Chakra UI is used to ensure the application is responsive and works seamlessly on both mobile and desktop devices.

---

### **Project Structure**

```plaintext
src/
├── components/
│   ├── Editor/
│   │   ├── Editor.js
│   │   ├── EditorInsideBottomControls.js
│   ├── Navbar/
│   │   ├── Navbar.js
│   ├── Queries/
│   │   ├── QueryHistory.js
│   │   ├── QueriesDrawer.js
│   ├── Output/
│   │   ├── OutputDisplay.js
├── pages/
│   ├── LandingPage.js
```

### **Setup Instructions**

1. **Navigate to the project directory:**
   ```sh
   cd project-directory
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm start
   ```

### **Future Enhancements**

- Add backend integration for executing queries.
- Implement user authentication.
- Add More support for exporting query results in different format.


### **Screenshots**
Before
![alt text](/images/image-2.png)

After
![alt text](/images/image-3.png)
![alt text](/images/image-4.png)
![alt text](/images/image-5.png)

Live Demo
Check out the live demo of the application here:
QueryMaster Live Demo















