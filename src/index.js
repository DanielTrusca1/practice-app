import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// React Router
import { BrowserRouter } from "react-router-dom";

import { ModalProvider } from "./contexts/ContextModal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <App />
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
