import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <GridContainer /> */}
    {/* <FlexR2 /> */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
