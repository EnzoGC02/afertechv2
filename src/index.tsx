import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { loadConfig } from "./config";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const initApp = async () => {
  let config;
  try {
    config = await loadConfig();
  } catch (error) {
    console.error("Error loading config, using defaults:", error);
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App config={config} />
    </React.StrictMode>
  );
};

initApp();
