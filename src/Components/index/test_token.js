import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
// import { ReactSession } from 'react-client-session';
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
           window.location='/rest_password_verfy/'+result.data.id+'/'+type
        }
           }else{
            var result=  await  axios
                .post("http://127.0.0.1:8000/auth/rest_password_view_user/", {
            "uid":uid,
            "token":token
        });
        if(result.data.id){
           window.location='/rest_password_verfy/'+result.data.id+'/'+type
        }
           }
      
        },[]);
        
     let rendercontent = ()=>{
     return (<div id="demo-content">
     <div id="loader-wrapper">
         <div id="loader"></div>
     </div>

 </div>)}

        return (
           <div>
{rendercontent()}
           </div>
        )
    }
export default TestToken;

