import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/styles/index.css";

// Entry point for the client-side React app
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
