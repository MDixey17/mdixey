import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PortfolioWebsite } from "./PortfolioWebsite";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PortfolioWebsite />
  </React.StrictMode>
);
