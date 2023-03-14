import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import AddDetails from './add_details';
import { useParams } from 'react-router-dom'
import axios from "axios";

let ActivateFreeLancer =()=>
    {
        const {uid, token} = useParams();
        let [userId, userName]=useState({});
        useEffect(()=>{
        var result=    axios
        .post("http://127.0.0.1:8000/auth/activate_freelancer/", {
            "uid":uid,
            "token":token
        })
        result.then((value)=>{
          console.log("skjjdcjdjjdfcdndjnc");
        })
        },[])
        return (
            <div className="">
                {uid}
                {token}
            </div>
        )
    }
export default ActivateFreeLancer;