import "./App.css";

// React Router
import { Routes, Route } from "react-router-dom";

// Import UI components
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Nav />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:username" element={<Users/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
