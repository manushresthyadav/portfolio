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

import JavaNew from "../assets/java__new.jpeg"
export default function skills(){


    return (
        <>
        {/* <Navbar/> */}
        <div className="skills_container">
<div className="skills_heading flex  font-bold">My <div className="reddish ml-2">Tech Stack!</div></div>
{/* <div className="skills_line"></div> */}

<div className="skills_stack ">

<div className="flex flex-col  "><img src={Cplus}></img><div></div></div>

<div className="flex flex-col skills_language  "> <img src={C}></img></div>
<div className="flex flex-col  "> <img src={Css}></img></div>
<div className="flex flex-col  "> <img src={tailwind}></img></div>
<div className="flex flex-col  "> <img src={nodejs}></img></div>
<div className="flex flex-col  "> <img src={boot}></img></div>
<div className="flex flex-col  "> <img src={figma} width='144px' height='144px'></img></div>
<div className="flex flex-col  "> <img src={reactjs} width='144px' height='144px'></img></div>
<div className="flex flex-col  "> <img src={JavaNew} width='144px' height='144px'></img></div>
<div className="flex flex-col  "> <img src='https://tse1.mm.bing.net/th?id=OIP.l_5RrXvfEAXihZJw0ynvcQHaIk&pid=Api&P=0' width='144px' height='144px'></img></div>
{/* <div className="flex flex-col  "> <img src='https://tse2.mm.bing.net/th?id=OIP.mbGqG9oLZIhHr4KoESQtIAHaJ4&pid=Api&P=0' width='144px' height='144px'></img></div> */}

<div className="flex flex-col  "> <img src={fire}></img></div>






</div>
        </div>
        </>
    )

}