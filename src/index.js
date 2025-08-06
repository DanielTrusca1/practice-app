import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// React Router DOM
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ModalProvider } from "./contexts/ContextModal";
import { NavigationProvider } from "./contexts/ContextNavigation";

// Import UI components
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import EditForm from "./components/EditForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Root layout with Nav + content wrapper
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "users",
        element: <Users />,
        children: [{ path: ":username", element: <EditForm /> }],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <NavigationProvider>
        <RouterProvider router={router}></RouterProvider>
      </NavigationProvider>
    </ModalProvider>
  </React.StrictMode>
);
