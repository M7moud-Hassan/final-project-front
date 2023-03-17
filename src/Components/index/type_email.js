import React, { Component, useState } from 'react';
import axios from "axios";

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
    return (
      <div>
         
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container">
            <a class="navbar-brand" href="#"><img src="images/upwork.svg" alt="Logo" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="navbar-nav ms-auto">
                <div class="text-center">
                  Here to hire talent?
                  <a href="#" class="text-center text-success mt-3"> Join as a Client</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

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
      </div>

    )
  }

export default TypeEmail;