// Entry point — mounts the React app into the DOM

/**
 * main.jsx
 * Vite entry point. Mounts the React app into the #root div in index.html.
 * StrictMode is enabled — it intentionally double-invokes some functions in
 * development to help catch side effects. This is expected behavior, not a bug.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);