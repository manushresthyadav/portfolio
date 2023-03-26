import Navbar from "./navbar"
import "./styles.css"

import star_banner from "../assets/starbucks_banner.jpg"
import filmpire from "../assets/filmpire_banner.jpg"
import todo from "../assets/todo.jpg"
import ecom from "../assets/ecom_banner.jpg"
import gpt from "../assets/openai_banner.jpg"

export default function project (){

const data = [{img:star_banner,con:"Starbucks",demo:"https://manu-starbucks.vercel.app/",code:"https://github.com/manushresthyadav/StarbucksClone"},{img:gpt,con:"Gpt-3 OpenAI",demo:"http://gpt-3-ai-manu.vercel.app",code:"https://github.com/manushresthyadav/Gpt3-Clone"},{img:ecom,con:"E-Commerce",demo:"https://ecommerce-manu.vercel.app/",code:"https://github.com/manushresthyadav/Ecommerce-"},{img:filmpire,con:"Netflix Clone",demo:"https://filmpire-clone.vercel.app/",code:"https://github.com/manushresthyadav/Filmpire-Clone"},{img:todo,con:"Todo App",demo:"https://todo-app-manu.vercel.app/",code:"https://github.com/manushresthyadav/todo-app-"},]

const xx = data.map((elm)=>{
    return <div className="flex flex-col x mx-auto my-4">
       
    <div className="flex flex-col" >
    <img src={elm.img} className='project_image  hover:opacity-30'  ></img>
    <div className="hover_btns">
        <button><a href={elm.demo}>Demo</a></button>
        <button><a href={elm.code}>Code</a></button>
    </div>
    </div>
   
    </div>
})

return (
    <>
    <Navbar/>
    <div className="project_container">

<div className="text-4xl font-bold flex mx-auto my-4">My <div className="reddish ml-2">Projects!</div></div>

<div className="projects_content">

{xx}

</div>
    </div>
    </>
)

}