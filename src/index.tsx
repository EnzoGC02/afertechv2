import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { loadConfig } from "./config";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

loadConfig()
  .then((config) => {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App config={config} />
      </React.StrictMode>
    );
  })
  .catch((error) => {
    console.error("Error loading config:", error);
  });
