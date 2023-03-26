import Navbar from "../components/navbar"
import "./styles.css"
import Cplus from "../assets/c++.png"
import C from "../assets/c.png"
import Css from "../assets/css.png"
import tailwind from "../assets/tailwind.png"
import nodejs from "../assets/nodejs.png"
import boot from "../assets/boot.png"
import reactjs from "../assets/reactjs.jpg"
import js from "../assets/js.jpg"
import fire from "../assets/firebase.png"
import figma from "../assets/figma.png"


export default function skills(){


    return (
        <>
        <Navbar/>
        <div className="skills_container">
<div className="skills_heading flex  font-bold">My <div className="reddish ml-2">Tech Stack!</div></div>
{/* <div className="skills_line"></div> */}

<div className="skills_stack ">

<div className="flex flex-col skills_language shadow-gray-400 shadow-md "><img src={Cplus}></img><div>C++</div></div>

<div className="flex flex-col skills_language shadow-red-400 shadow-md "> <img src={C}></img>C</div>
<div className="flex flex-col skills_language shadow-gray-400 shadow-md "> <img src={Css}></img>CSS</div>
<div className="flex flex-col skills_language shadow-blue-400 shadow-md "> <img src={tailwind}></img>TAILWIND</div>
<div className="flex flex-col skills_language shadow-gray-400 shadow-md "> <img src={nodejs}></img>NODE jS</div>
<div className="flex flex-col skills_language shadow-blue-400 shadow-md "> <img src={boot}></img>BOOTSTRAP</div>
<div className="flex flex-col skills_language shadow-gray-400 shadow-md "> <img src={figma} width='144px' height='144px'></img>FIGMA</div>
<div className="flex flex-col skills_language shadow-gray-400 shadow-md "> <img src={Cplus}></img>C++</div>
<div className="flex flex-col skills_language shadow-red-400 shadow-md "> <img src={reactjs} width='144px' height='144px'></img>REACT JS</div>
<div className="flex flex-col skills_language shadow-gray-400 shadow-md "> <img src={js} width='144px' height='144px'></img>JS</div>

<div className="flex flex-col skills_language shadow-blue-400 shadow-md "> <img src={fire}></img>FIREBASE</div>






</div>
        </div>
        </>
    )

}