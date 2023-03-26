import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Navbar from "./components/navbar"
import Skills from "./components/skills"
import Contact from "./components/contact"
import Project from "./components/project"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import About from "./components/about"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home/>} exact path="/"></Route>
          <Route element={<About/>} exact path="/About"></Route>
          <Route element={<Skills/>} exact path="/Skills"></Route>
          <Route element={<Contact/>} exact path="/Contact"></Route>
          <Route element={<Project/>} exact path="/Projects"></Route>
        </Routes>
    
      
      </Router>
      
    </div>
  );
}

export default App;
