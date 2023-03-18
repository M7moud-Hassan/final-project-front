import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import '../css/load.css'

let ActivateUser =()=>
    {
        
       const {uid, token} = useParams();
        useEffect(async()=>{
            console.log(uid);
            console.log(token);
        var result=  await  axios
        .post("http://localhost:8000/auth/activate_user_email/", {
            "uid":uid,
            "token":token
        });
        var data= result.data;
        if(data=='ok'){
         window.location="/login/"
        }
        },[]);
        
     let rendercontent = ()=>{
        var type= localStorage.getItem("type");
        if(type=='free'){
        window.location = '/profile_free/'
        }else if(type=='client')
        {
            window.location = '/clientprofile/'
        }else{
     return (<div id="demo-content">
     <div id="loader-wrapper">
         <div id="loader"></div>
     </div>

 </div>)}}

        return (
           <div>
{rendercontent()}
           </div>
        )
    }
export default ActivateUser;