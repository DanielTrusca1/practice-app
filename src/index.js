import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// React Router DOM
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { ModalProvider } from "./contexts/ContextModal";
import { NavigationProvider } from "./contexts/ContextNavigation";

// Import UI components
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import EditForm from "./components/EditForm";

import { Route } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="users" element={<Users />}>
        <Route path=":username" element={<EditForm />} />
      </Route>
    </Route>
  )
);

/*
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
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavigationProvider>
      <ModalProvider>
        <RouterProvider router={router}></RouterProvider>
      </ModalProvider>
    </NavigationProvider>
  </React.StrictMode>
);
