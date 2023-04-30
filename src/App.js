import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Navbar from "./components/navbar"
import Skills from "./components/skills"
import Contact from "./components/contact"
import Project from "./components/project"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import About from "./components/about";
import {ContextProviderFunction} from './components/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={
          <ContextProviderFunction><Home/></ContextProviderFunction>
          } exact path="/"></Route>
        </Routes>
    
      
      </Router>
      
    </div>
  );
}

export default App;


