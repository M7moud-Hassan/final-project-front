import axios from 'axios';
import React, { Component, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Footer from '../Profile/freelancer/Footer';
import NavBarIndex from './navbar_index';

let Type_new_password = () => {
 
  let [password,setPassword]=useState('')
  let sendData=()=>{
    console.log(password);
    console.log(localStorage.getItem("uid_ser"));
    if(password!=''){   
        axios.post('http://localhost:8000/auth/set_password/',
        {id:  localStorage.getItem("uid_ser"),password: password,type: localStorage.getItem("type_ser")}) 
        .then ((res)=> {
          if(res.data=='ok'){
            localStorage.clear()
            window.location='/login'
          }
        }).catch((error)=>console.log(error))
      
    }
  }
  if(!localStorage.getItem("uid_ser"))
  {
    window.location="/Error"
  }else{
  var type= localStorage.getItem("type");
  if(type=='free'){
  window.location = '/home_freelancer'
  }else if(type=='client')
  {
      window.location = '/clientprofile'
  }else{
  return (
    <div>
              <NavBarIndex/>
     
      <div className="container ">

        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7">
                <div className="card shadow-2-strong card-registration my-5">
                  <div className="card-body p-4 p-md-5 shadowBorder">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Enter your new password </h3>
                    <div className="my-3 ">

                      <form className="needs-validation" onSubmit={
                            (event)=>{
                              console.log("gkgkgkkgkg");
                              event.preventDefault()
                              sendData()
                            }
                          } novalidate>

                        <div className="row">
                          <div className="col-md-12 mb-4">
                            <div className="form-outline position-relative">
                              <input type="password" name="password" id="password"
                                placeholder="Password(8 or more characters)"
                                pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}" required
                                // value={password}
                                className="form-control  rounded-pill"
                              onChange={(e)=> setPassword(e.target.value)}
                              />
                              <div className="invalid-feedback" id="password-feedback">
                                Password must be at least 8 characters long and contain at least one letter and one digit
                              </div>
                              <div className="invalid-feedback" id="password-required-feedback">
                                Please enter a password
                              </div>
                              <input type="password" name="confirm_password" id="confirm_password"
                                placeholder="Passwords must be matched"
                                pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}" required
                                // value={password}
                                className="form-control  rounded-pill mt-4"
                              
                              />
                              <div className="invalid-feedback">
                                not match
                              </div>
                              
                            </div>
                          </div>
                        </div>



                        <div>
                          <input className="btn btn-success btn-block rounded-pill  w-100" type="submit"   value="Update Password" />
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
                        }}
}

export default Type_new_password;