import "./App.css";

// React Router
import { Outlet } from "react-router-dom";

import Nav from "./components/Nav";

function App() {
  
  return (
    <div className="App">
      <Nav />

      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
