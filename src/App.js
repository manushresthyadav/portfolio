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
import { useEffect, useState } from 'react';
function App() {

const [state,changeState] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      changeState(true);
    },3000)
  },[])

const myHtml = '';
  return (<>
  {state && <div className="App">
      <Router>
        <Routes>
          <Route element={
          <ContextProviderFunction><Home/></ContextProviderFunction>
          } exact path="/"></Route>
        </Routes>
    
      
      </Router>
      
    </div>}
    {!state && <div className='loader__screen' ><img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/725eef121244331.60c1c7928b5dd.gif'></img></div>}
    </>
  );
}

export default App;


