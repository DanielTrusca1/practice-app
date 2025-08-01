import './App.css';

// React Router
import { Routes, Route } from 'react-router-dom';

// Import UI components
import Home from './components/Home'
import About from "./components/About"
import Users from "./components/Users"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
