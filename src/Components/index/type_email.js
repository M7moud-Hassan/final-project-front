import React, { Component, useState } from 'react';
import axios from "axios";
import Footer from '../Profile/freelancer/Footer';

let TypeEmail = () => {
 
  let [email,setEmail]=useState('')
  const [msg,setMess]=useState('');
  const [typeErro,SetTypeError]=useState('');
let check_email=()=>{
 if(email!=''){
  axios.post('http://localhost:8000/auth/email_reset_password/',
  {email:email}) 
  .then ((res)=> {
    if(res.data=='ok'){
      window.location='/please_activate/'+email
    }else{
      SetTypeError('alert alert-danger')
      setMess('Email not coorect')
    }
  }).catch((error)=>console.log(error))
 }
}
var type= localStorage.getItem("type");
if(type=='free'){
window.location = '/home_freelancer'
}else if(type=='client')
{
    window.location = '/clientprofile'
}else{
    return (
      <div>
         
        <div className="container ">
        <div class={typeErro}>
              {msg}
              </div>
          <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                  <div className="card shadow-2-strong card-registration my-5">
                    <div className="card-body p-4 p-md-5 shadowBorder">
                      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Re enter your E-mail</h3>
                      <div className="my-3 ">

                        <form className="needs-validation" onSubmit={
                          (event)=>{
                            event.preventDefault()
                            check_email()
                          }
                        } novalidate>

                          <div className="row">
                            <div className="col-md-12 mb-4">
                              <div className="form-outline position-relative">
                                <input type="email" id="email" placeholder="Email (forexample@example.com)"
                                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                                  className="form-control  rounded-pill"
                                  // value={email}
                                  onChange={(e) => setEmail(e.target.value)} 
                                   required/>
                                <div className="invalid-feedback text-center"
                             id="email-feedback text-center">
                             Email is required
                          
                        </div>
                              </div>
                            </div>
                          </div>



                          <div>
                            <input className="btn btn-success btn-block rounded-pill  w-100"  type="submit" value="Reset"/>
                          </div>

                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
        <Footer/>
      </div>

    )
                      }
  }

export default TypeEmail;