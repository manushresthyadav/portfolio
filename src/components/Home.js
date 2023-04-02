
import "../components/styles.css"
import Gif from "../assets/req.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub , faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import Navbar from "../components/navbar"
import { useState } from "react";

export default function useHome(){

    const [animate,changeAnimate]= useState("A FrontEnd Devloper ...")

    return (
        <>
        <Navbar/>
<div className='home_container flex'>
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
M
</div>
<div className='home_content  mt-2 '>As a Frontend Developer I am resposible for creating the visual elements and user experience of websites and applications. Currently learning Nodejs,   Understanding how the backend works can help me create more efficient and effective frontend code, as well as give me a better understanding of how the application as a whole fits together.</div>

<div className="home_icons">

<a href="https://www.secure.instagram.com/shresth_manuuu/"><FontAwesomeIcon icon={faInstagram} size="4x" style={{color: "#eb1d36",}} /></a>
<a href="https://github.com/manushresthyadav"><FontAwesomeIcon icon={faGithub} size="4x" style={{color: "#eb1d36",}} /></a>
<a href="https://twitter.com/ManushresthY"><FontAwesomeIcon icon={faTwitter} size="4x" style={{color: "#eb1d36",}} /></a>
<a href="https://www.linkedin.com/in/manu-yadav-b44889208/"><FontAwesomeIcon icon={faLinkedinIn} size="4x" style={{color: "#eb1d36",}}/></a>

</div>

<div className="home_resume">
    <a href="https://drive.google.com/file/d/1fJJcptNJ3xljvnYV9oB0qnjd9LZJtNkz/view?usp=sharing"><btn className="resume_btn">Download Resume</btn></a>

</div>

</div>

<div className='home_image'>
    <img src={Gif}></img>
</div>
</div>
</>
    );

}