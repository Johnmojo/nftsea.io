import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./assets/style/index.css";

// Entry point for the client-side React app.
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
