import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import axios from "axios";
import '../css/load.css'
let ActivateFreeLancer =()=>
    {

       
       const {uid, token} = useParams();
        useEffect(async()=>{ 
        var result=  await  axios
        .post("http://127.0.0.1:8000/auth/activate_free/", {
            "uid":uid,
            "token":token
        });
        var sskills= await  axios.get("http://127.0.0.1:8000/auth/get_skills/");
        localStorage.setItem('skills',JSON.stringify(sskills.data))

        var services= await  axios.get("http://127.0.0.1:8000/auth/get_Services/");
        localStorage.setItem('services',JSON.stringify(services.data))
        var data= result.data;
        console.log("data",data);
        if(data.res=='ok'){
            localStorage.setItem("id",data.id)

         window.location="/addDetails"
        }
      
        },[]);
        
     let rendercontent = ()=>{

        var type= localStorage.getItem("type");
        if(type=='free'){
        window.location = '/profile_free'
        }else if(type=='client')
        {
            window.location = '/clientprofile'
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
export default ActivateFreeLancer;

