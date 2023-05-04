import Navbar from "./navbar"
import Me from "../assets/mine3.webp"
import Abt from "../assets/abt_me.png"
import { useState } from "react"

export default function useAbout(){

const [Curr,changeCurr] = useState(false);

return (<>
{/* <Navbar/> */}
    <div className="about_container">
<div className="flex hue">

<div className="about_image">
    <img src={Me}></img>
</div>

<div className="about_content">
   
   
   
    <div className="about__main">
    <div className=" flex contain__image"> <div className="text-3xl flex gap-4 font-bold two">About <div className="reddish">Me</div></div> <div className="supporting__image"><img src={Abt}></img></div> </div>
<div>Manushresth</div>
<div className="redclr">Full Stack Developer</div>
<div>India, Gurgaon</div>
<div>Age: 19</div>
<div> Full Stack Devloper, experienced professionally in developing Web Applications. I have solved about 350+ problem in DSA and am proficient with C and C++ languages. </div>

    </div>
    <div className="home_resume">
    <a href="https://drive.google.com/file/d/1fJJcptNJ3xljvnYV9oB0qnjd9LZJtNkz/view?usp=sharing"><btn className="resume_btn">Download Resume</btn></a>

</div>


{/* <div className="about_btn">

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
     
  
</div> */}



</div>



</div>

    </div>
    </>
)


}