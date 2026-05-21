import React from 'react';
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);

/**
 * ReactDOM - React library used to connect React with the browser DOM.
 * createRoot() - This HTML element is where your React app should live.
 * entrypoint - This is the DOM element where React App will be mounted.
 * . (dot operator) - Access something inside an object.
 * render() - Show this UI on the screen.
 * React - Main Library
 * createElement - This creates a React Element manually.
 */
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));