import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import '../css/load.css'
let TestToken =()=>
    {
       
        const {uid, token,type} = useParams();
        useEffect(async()=>{ 
           if(type=='free')
           {
            var result=  await  axios
                .post("http://127.0.0.1:8000/auth/rest_password_check/", {
            "uid":uid,
            "token":token
        });
        if(result.data.id){
            localStorage.setItem("uid_ser",result.data.id)
            localStorage.setItem("type_ser",type)
           window.location='/rest_password_verfy'
        }
           }else{
            var result=  await  axios
                .post("http://127.0.0.1:8000/auth/rest_password_view_user/", {
            "uid":uid,
            "token":token
        }).then(result=>{
            if(result.data.id){
                localStorage.setItem("uid_ser",result.data.id)
                localStorage.setItem("type_ser",type)
               window.location='/rest_password_verfy'
            }
        });
       
           }
      
        },[]);
        
     let rendercontent = ()=>{
        var typee= localStorage.getItem("type");
        if(typee=='free'){
        window.location = '/home_freelancer'
        }else if(typee=='client')
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
export default TestToken;

