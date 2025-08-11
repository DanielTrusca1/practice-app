import "./App.css";

import { useCallback, useState } from "react";
import { useBlocker } from "react-router";

// React Router
import { Outlet } from "react-router-dom";
import Modal from "./components/Modal";

import Nav from "./components/Nav";

function App() {
  const [isFormDirty, setIsFormDirty] = useState("");

  const shouldBlock = useCallback(({ currentLocation, nextLocation }) => {});

  const blocker = useBlocker(shouldBlock);

  return (
    <div className="App">
      <Nav />

      <div className="content">
        <Outlet props={{isFormDirty, setIsFormDirty}}/>
      </div>
      <Modal />
    </div>
  );
}

export default App;
