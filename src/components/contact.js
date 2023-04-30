import Navbar from "./navbar"
import "./styles.css"
import { useState } from "react"

import db from "../firebase/firestore"
import { getDocs, addDoc , collection } from "firebase/firestore"
export default function useContact(){

const [Data,changeData] = useState( {
    name:"",
    email:"",
    number:"",
    subject:"",
    message:"",
})

function handleSubmit(){
    console.log("lmao")

    const colref= collection(db,'contact');
    addDoc(colref,{
        name: Data.name,
        email:Data.email,
        number:Data.number,
        subject:Data.subject,
        message:Data.message,
    }).then((data)=>{
        console.log(data);
        console.log("data is added");
    }).catch((err)=>{
        console.log(err);
    })

    const form = document.getElementsByClassName("form")[0];
    form.reset();
}


return (
<>
{/* <Navbar/> */}
    <div className="contact_container">
<div className="flex gap-2 text-6xl font-bold contact_heading">Contact <div className="reddish">Me!</div></div>
<div className="contact_form">

<form className="form cursor-pointer">
    <div className="flex bg gap-2 five">
        <div className="flex relative">
        <label htmlFor="fn" className="form_label">Full Name</label>
        <input type={'text'}  name="fn" className="form_inputs" onChange={(event)=>{
            event.target.previousElementSibling.classList.add('effect_stay')
            changeData((prev)=>{
                return {...prev,name:event.target.value}
            })
        }}></input>
        </div>
        <div className="flex relative">
        <label htmlFor="email" className="form_label">Email Address</label>
        <input type={'text'}  className="form_inputs" name="email" onChange={(event)=>{
            event.target.previousElementSibling.classList.add('effect_stay')
            changeData((prev)=>{
                return {...prev,email:event.target.value}
            })
        }}></input>
        </div>
       
    </div>
    <div className="flex bg gap-2 five">
        <div className="flex relative">
        <label htmlFor="mn" className="form_label">Mobile Number</label>
        <input type={'number'}  className="form_inputs" name="mn" onChange={(event)=>{
            event.target.previousElementSibling.classList.add('effect_stay')
            changeData((prev)=>{
                return {...prev,number:event.target.value}
            })
        }}></input>
        </div>
 <div className="flex relative">
<label htmlFor="subject" className="form_label">Email Subject</label>
        <input type={'text'}  className="form_inputs" name="subject" onChange={(event)=>{
            event.target.previousElementSibling.classList.add('effect_stay')
            changeData((prev)=>{
                return {...prev,subject:event.target.value}
            })
        }}></input>
        </div>
    </div>
    <div className="pp">
        <textarea className="contact_textarea gg" placeholder="Your Message"  rows={'10'} onChange={(event)=>{
             changeData((prev)=>{
                return {...prev,message:event.target.value}
            })
        }}></textarea>
    </div>
</form>

<div className="contact_btn" onClick={handleSubmit}>
    <button>Send Message</button>
</div>

</div>
    </div>
    </>
)

}