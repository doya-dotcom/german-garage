import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Add basename */}
    <BrowserRouter basename="/german-garage">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
