import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";

let ActivateFreeLancer =()=>
    {
       const {uid, token} = useParams();
        useEffect(async()=>{
            console.log(uid);
            console.log(token);
        var result=  await  axios
        .post("http://127.0.0.1:8000/auth/activate_free/", {
            "uid":uid,
            "token":token
        });
        var data= result.data;
        if(data=='ok'){
         window.location="/addDetails/"
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
export default ActivateFreeLancer;