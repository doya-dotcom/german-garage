import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 👇 Add basename so routes work when hosted at /german-garage */}
    <BrowserRouter basename="/german-garage">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
