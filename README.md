Task Tracker
Task Tracker is a simple yet elegant web application built with React that allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks. The app uses local storage for data persistence and simulates API calls with JSONPlaceholder. It features a modern, professional UI styled with Tailwind CSS.


Technologies Used
React: JavaScript library for building the user interface.
JavaScript (ES6+): Core programming language for logic and functionality.
Tailwind CSS: Utility-first CSS framework for styling.
JSONPlaceholder: Free fake API for testing and prototyping.
localStorage: Browser API for local data persistence.

Components and Functions
App.js
State:
tasks: Array of task objects ({ id, name }).
editingTask: Currently editing task object or null.
Functions:
handleSubmit(name): Adds a new task or updates an existing one. Uses fetch to simulate API calls to JSONPlaceholder.
handleDelete(id): Deletes a task by ID and updates state.
handleEdit(task): Sets the task to be edited.
useEffect: Loads tasks from localStorage on mount and saves tasks to localStorage on update.
PersonForm.js
State:
name: Input value for task name.
Functions:
handleSubmit(e): Handles form submission, calls onSubmit from props.
useEffect: Syncs input value with editingTask.
PersonList.js
Displays a list of tasks or a "No tasks" message.
PersonItem.js
Renders a single task with edit (✏️) and delete (🗑️) buttons.

Framework
React: A JavaScript library for building user interfaces. This project uses functional components with hooks (useState, useEffect) for state management and side effects.
Compilation Process
Development:
The app is created using create-react-app, which sets up a development environment with Webpack and Babel.
Run npm start to start the development server. This:
Compiles JSX and JavaScript into browser-readable code.
Bundles assets and applies Tailwind CSS styles.
Launches a live-reloading server at http://localhost:3000.
Production:
Run npm run build to create an optimized production build:
Minifies JavaScript and CSS.
Generates static assets in the build/ folder.
These files can be served with any static file server (e.g., serve -s build).
Tailwind CSS
Tailwind CSS is a utility-first CSS framework used to style this application. Instead of writing custom CSS, Tailwind provides pre-defined classes that you apply directly in your HTML/JSX to style elements.



Installation
Clone or Create the Project:
bash

Collapse

Wrap

Copy
npx create-react-app task-tracker
cd task-tracker
Replace Files:
Copy the provided src/, public/, and package.json files into your project.
Install Dependencies:
bash

Collapse

Wrap

Copy
npm install
Add Tailwind CSS:
Included via CDN in public/index.html for simplicity. For production, consider installing it via npm:
bash

Collapse

Wrap

Copy
npm install -D tailwindcss
npx tailwindcss init
Usage
Run the App:
bash

Collapse

Wrap

Copy
npm start
Opens at http://localhost:3000.
Interact:
Add a task by typing in the input and clicking "Add".
Edit a task by clicking the pencil icon (✏️), updating the text, and clicking "Update".
Delete a task by clicking the dustbin icon (🗑️).
Tasks persist across page reloads via localStorage.
License
This project is open-source and available under the MIT License.