
import "./styles.css"
import {Link,Routes,Route} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { MyContext } from "./Home"
import { useContext } from "react";
import { useRef } from "react";
export default function useNavbar(){
  // const ref = useRef(null)
  const [display, changeDisplay] = useState(false);
  const {home,about,project,skills,contact} = useContext(MyContext);
function handleClick(){
 
  changeDisplay(true);


}

const scrollToSection = (elmnt) => {
  console.log(elmnt);
  // return;
  window.scrollTo({
    top: elmnt.current.offsetTop,
    behavior: "smooth",
  });
};
function handleCross(){
changeDisplay(false);    
}

    return(


<>

<div className='nav_container flex justify-between'>
<div className='flex'>

<div className='four'>MANUSHRESTH</div>
</div>

<div className="handle__navbar">
<ul className=' list-none  handle__navbar__list' onClick={handleCross}>
    <Link onClick={()=>{scrollToSection(home)}} >
    <li>Home</li>
    </Link>
   <Link onClick={()=>{scrollToSection(about)}} > <li>About</li></Link>
   <Link onClick={()=>{scrollToSection(skills)}} >  <li>Skills</li></Link>
   <Link onClick={()=>{scrollToSection(project)}}> <li>Projects</li></Link>
   <Link onClick={()=>{scrollToSection(contact)}} >  <li>Contact</li></Link>
   
   
   
   
</ul>
</div>

{!display && <div className="navbar_burger" onClick={handleClick}><FontAwesomeIcon icon={faBars} /></div>}

{display && 

<div className="burger__container">

<div className="navbar_cross" onClick={handleCross}> <FontAwesomeIcon icon={faXmark} /></div>

<ul className=' list-none  three' onClick={handleCross}>
    <Link onClick={()=>{scrollToSection(home)}} >
    <li>Home</li>
    </Link>
   <Link onClick={()=>{scrollToSection(about)}} > <li>About</li></Link>
   <Link onClick={()=>{scrollToSection(skills)}} >  <li>Skills</li></Link>
   <Link onClick={()=>{scrollToSection(project)}} > <li>Projects</li></Link>
   <Link onClick={()=>{scrollToSection(contact)}} >  <li>Contact</li></Link>
   
   
   
   
</ul>



</div>
}



</div>
<div className='line'></div>
</>
    );


}



// const list =  document.getElementsByClassName("three")[0];
// list.style.display='block'
// list.classList.add("updated_three")

// const cross= document.getElementsByClassName("navbar_cross")[0];
// cross.style.display='block';

// const burger = document.getElementsByClassName("navbar_burger")[0];
// burger.style.display='none';

// const four = document.getElementsByClassName("four")[0];
// four.style.display='none';

// const line = document.getElementsByClassName("line")[0];
// line.style.display='none';

// const home_container = document.getElementsByClassName("home_container")[0];
// if(home_container!=undefined)
// home_container.style.marginTop='142px';



// const list =  document.getElementsByClassName("three")[0];
//     list.style.display='none'
//     list.classList.remove("updated_three")
  
//     const cross= document.getElementsByClassName("navbar_cross")[0];
//   cross.style.display='none';
  
//   const burger = document.getElementsByClassName("navbar_burger")[0];
//   burger.style.display='block';
  
//   const four = document.getElementsByClassName("four")[0];
//   four.style.display='block';

//   const line = document.getElementsByClassName("line")[0];
//   line.style.display='block';

//   const home_container = document.getElementsByClassName("home_container")[0];
//   if(home_container!=undefined)
// home_container.style.marginTop='30px';