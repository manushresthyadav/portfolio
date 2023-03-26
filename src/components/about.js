import Navbar from "./navbar"
import Me from "../assets/myimg.png"

import { useState } from "react"

export default function useAbout(){

const [Curr,changeCurr] = useState(false);

return (<>
<Navbar/>
    <div className="about_container">
<div className="flex hue">

<div className="about_image">
    <img src={Me}></img>
</div>

<div className="about_content">
    <div className="text-4xl flex gap-4 font-bold two">About <div className="reddish">Me</div></div>
    <div className="text-2xl">Frontend Developer! </div>
    <div>Hi there! My name is Manushresth Yadav and I am currently a 2nd year student studying Information Technology at MAIT. I am a driven and hard-working individual who is passionate about Developing. I am constantly seeking new challenges and opportunities to grow and develop my skills.

Outside of academics, I am involved in several extracurricular activities on campus, including CSI. These experiences have allowed me to meet new people and develop leadership and teamwork skills. In my free time, I enjoy Gaming and watching Anime, and I also enjoy exploring the local community and trying new things.

After graduation, I hope to become a professional Developer. I am excited to see where my education and experiences will take me and am eager to contribute to the world in a meaningful way.</div>

{   Curr && <div className="about_knowmore">
    No wonder you wanted to know more Stalker! Lmao Chill out. 
    I have solved about 350+ problem in DSA and am proficient with C and C++ languages. I am trying to improve my Javascript constantly by making new projects with ReactJs and Firebase , learning Backend by starting with NodeJs so that i can fully know webDev and become a Full Stack Developer. 
</div>}

<div className="about_btn">

{Curr &&  <button onClick={()=>{
    changeCurr((prev)=>{
        return !prev;
    })
}}>Read Less</button>}
{!Curr && <button onClick={()=>{
    changeCurr((prev)=>{
        return !prev;
    })
}}>Read More</button>}
     
  
</div>



</div>



</div>

    </div>
    </>
)


}