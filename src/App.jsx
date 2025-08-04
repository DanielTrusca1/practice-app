import "./App.css";

// React Router
import { Routes, Route } from "react-router-dom";

// Import UI components
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Modal from "./components/Modal";

import { useContext } from "react";
import { ModalContext } from "./contexts/ContextModal";

function App() {
  const { isModalActive } = useContext(ModalContext);

  return (
    <div className="App">
      <Nav />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:username" element={<Users />} />
        </Routes>
      </div>

      {isModalActive && (
        <div className="modal-background">
          <Modal />
        </div>
      )}
    </div>
  );
}

export default App;
