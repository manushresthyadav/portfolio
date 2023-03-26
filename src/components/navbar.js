
import "./styles.css"
import {Link,Routes,Route} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function navbar(){


function handleClick(){
  const list =  document.getElementsByClassName("three")[0];
  list.style.display='block'
  list.classList.add("updated_three")

  const cross= document.getElementsByClassName("navbar_cross")[0];
cross.style.display='block';

const burger = document.getElementsByClassName("navbar_burger")[0];
burger.style.display='none';

const four = document.getElementsByClassName("four")[0];
four.style.display='none';

const line = document.getElementsByClassName("line")[0];
line.style.display='none';

const home_container = document.getElementsByClassName("home_container")[0];
if(home_container!=undefined)
home_container.style.marginTop='142px';

}

function handleCross(){
    const list =  document.getElementsByClassName("three")[0];
    list.style.display='none'
    list.classList.remove("updated_three")
  
    const cross= document.getElementsByClassName("navbar_cross")[0];
  cross.style.display='none';
  
  const burger = document.getElementsByClassName("navbar_burger")[0];
  burger.style.display='block';
  
  const four = document.getElementsByClassName("four")[0];
  four.style.display='block';

  const line = document.getElementsByClassName("line")[0];
  line.style.display='block';

  const home_container = document.getElementsByClassName("home_container")[0];
  if(home_container!=undefined)
home_container.style.marginTop='30px';
}

    return(


<>

<div className='nav_container flex justify-between'>
<div className='flex'>

<div className='four'>MANUSHRESTH</div>
</div>
<div className="navbar_burger" onClick={handleClick}><FontAwesomeIcon icon={faBars} /></div>
<div className="navbar_cross" onClick={handleCross}> <FontAwesomeIcon icon={faXmark} /></div>

<ul className=' list-none  three' onClick={handleCross}>
    <Link to="/">
    <li>Home</li>
    </Link>
   <Link to="/About"> <li>About</li></Link>
   <Link to="/Skills">  <li>Skills</li></Link>
   <Link to="/Projects"> <li>Projects</li></Link>
   <Link to="/Contact">  <li>Contact</li></Link>
   
  
   
   
</ul>



</div>
<div className='line'></div>
</>
    );


}