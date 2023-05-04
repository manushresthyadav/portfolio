import Navbar from "./navbar"
import "./styles.css"

import star_banner from "../assets/starbucks_banner.jpg"
import filmpire from "../assets/filmpire_banner.jpg"
import todo from "../assets/updated_todo.jpg"
import ecom from "../assets/ecom_banner.jpg"
import gpt from "../assets/openai_banner.jpg"
import blog from "../assets/req_blog.png"
import chat from "../assets/req_chat.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons"
export default function project (){

const data = [{img:chat,con:"Chat",demo:"https://whatsapp-manu-h2xq.onrender.com/",code:"https://github.com/manushresthyadav/Mern-Chat-App",content:'A chat app created with MERN stack. Every logged in user can have their own contacts and can chat with them.'}

,{img:blog,con:"Blog",demo:"https://blog-manu.onrender.com/",code:"https://github.com/manushresthyadav/Mern-Blog-Website",
content:'A blog website that allows users to create , update and delete their blogs which is displayed to every other user in the website. Made with MERN stack.'}


,{img:star_banner,con:"Starbucks",demo:"https://manu-starbucks.vercel.app/",code:"https://github.com/manushresthyadav/StarbucksClone",content:'A frontend Starbucks Clone. Consists of each and every tab of starbucks. Be it menu,rewards etc. Made with Firebase and React'}

,{img:gpt,con:"Gpt-3 OpenAI",demo:"http://gpt-3-ai-manu.vercel.app",code:"https://github.com/manushresthyadav/Gpt3-openAI-Clone",content:'A GPT-3 openAI website made with the help of React and Firebase. Made with the help of the ui/ux design of the website.'}

,{img:ecom,con:"E-Commerce",demo:"https://ecommerce-manu.vercel.app/",code:"https://github.com/manushresthyadav/Ecommerce-",content: 'An E-commerce website made during the initial stages of my development journey. Made with the help of HTML CSS and JAVASCRIPT.'}

,{img:filmpire,con:"Netflix Clone",demo:"https://filmpire-clone.vercel.app/",code:"https://github.com/manushresthyadav/Filmpire-Clone", content: 'A Filmpire/Netflix based website that displays the details of movies as per categories. Made with React (Learnt calling Api from this Project)'}]

const xx = data.map((elm)=>{
    return <div className="flex flex-col x mx-auto my-4">
       
    <div className="flex flex-col" >
    <img src={elm.img} className='project_image  hover:opacity-30'  ></img>
    <div className="project__content mt-4 ">
        {elm.content}
    </div>
    <div className="hover_btns">
        <button><a href={elm.demo}> <FontAwesomeIcon icon={faLink} beatFade style={{color: "#cfd2cf",}} /> </a></button>
        <button><a href={elm.code}><FontAwesomeIcon icon={faCode} beatFade style={{color: "#eb1d36",}} /></a></button>
    </div>
    </div>
   
    </div>
})

return (
    <>
    {/* <Navbar/> */}
    <div className="project_container">

<div className="text-4xl font-bold flex mx-auto my-4">My <div className="reddish ml-2">Projects!</div></div>

<div className="projects_content">

{xx}

</div>
    </div>
    </>
)

}