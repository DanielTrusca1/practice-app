import "./App.css";

import { useCallback, useState } from "react";
import { useBlocker } from "react-router";

// React Router
import { Outlet } from "react-router-dom";
import Modal from "./components/Modal";

import Nav from "./components/Nav";

function App() {
  const [isFormDirty, setIsFormDirty] = useState("");

  const shouldBlock = useCallback(
    ({ currentLocation, nextLocation }) =>
      isFormDirty && currentLocation.pathname !== nextLocation.pathname,
    [isFormDirty]
  );

  const blocker = useBlocker(shouldBlock);

  const props = { isFormDirty, setIsFormDirty };

  return (
    <div className="App">
      <Nav />

      <div className="content">
        <Outlet context={props} />
      </div>
      <Modal blocker={blocker}/>
    </div>
  );
}

export default App;
