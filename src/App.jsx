import "./App.css";

// React Router
import { Outlet } from "react-router-dom";
import Modal from "./components/Modal";

import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />

      <div className="content">
        <Outlet />
      </div>
      <Modal />
    </div>
  );
}

export default App;
