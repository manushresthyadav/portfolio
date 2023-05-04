
import "../components/styles.css"
import Gif from "../assets/req.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub , faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import About from "./about";
import Skills from "./skills";
import Contact from "./contact";
import Project from "./project";
import Navbar from "../components/navbar"
import { useRef, useState,useref } from "react";
import { useContext } from "react";
// import { MyContext } from "./Context";

import { createContext } from "react";

export const MyContext = createContext();
export const ContextProviderFunction = ({children})=>{

    const home = useRef(null);
    const about = useRef(null);
    const skills = useRef(null);
    const project = useRef(null);
    const contact = useRef(null);

    return (
        <MyContext.Provider value={{home,about,skills,project,contact}}>{children}</MyContext.Provider>
    )
}

const scrollToSection = (elmnt) => {
    console.log('aya');
    console.log(elmnt);
    // return;
    window.scrollTo({
      top: elmnt.current.offsetTop,
      behavior: "smooth",
    });
  };

export default function useHome(){

    const [animate,changeAnimate]= useState("A FrontEnd Devloper ...");
    const {home,about,skills,project,contact} = useContext(MyContext);
    return (
        <>
        <Navbar/>
<div className='home_container flex' ref={home}>
<div className='flex flex-col paddingcontrol'>



<div className='text-left grayish mb-2'>WELCOME TO MYFOLIO</div>
<div className='text-left  one'><div className=' one flex gap-4'>Hi, I am <div className='xx font-bold mb-2'>Manu Shresth</div></div> 

<div class="wrapper">
    <div class="static-txt">I'm a</div>
    <ul class="dynamic-txts">
      <li><span>Developer</span></li>
      <li><span>Problem Solver</span></li>
      <li><span>Gamer</span></li>
      <li><span>Trader</span></li>
    </ul>
  </div>

</div>
<div className='home_content  mt-2 '>As a Frontend Developer I am resposible for creating the visual elements and user experience of websites and applications. Currently learning Nodejs,   Understanding how the backend works can help me create more efficient and effective frontend code, as well as give me a better understanding of how the application as a whole fits together.</div>

<div className="flex-col">
<div className="home_icons">
<a href="https://www.secure.instagram.com/shresth_manuuu/"><FontAwesomeIcon icon={faInstagram} size="2x" style={{color: "inherit",}} /></a>
<a href="https://github.com/manushresthyadav"><FontAwesomeIcon icon={faGithub} size="2x" style={{color: "#eb1d36",}} /></a>
<a href="https://twitter.com/ManushresthY"><FontAwesomeIcon icon={faTwitter} size="2x" style={{color: "#eb1d36",}} /></a>
<a href="https://www.linkedin.com/in/manu-yadav-b44889208/"><FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{color: "inherit",}}/></a>
</div>


<div  onClick={()=>{
    scrollToSection(project)
}} className="scroll_container" >
    <span>View Work</span>
    
    <FontAwesomeIcon icon={faArrowDown} bounce style={{color: "#eb1d36",}} />
</div>
</div>



</div>

<div className='home_image'>
    <img src={Gif}></img>
</div>



</div>



<div ref={about}><About/></div>
<div ref={skills}><Skills/></div>

<div ref={project}><Project/></div>
<div ref={contact}><Contact/></div>



</>
    );

}

