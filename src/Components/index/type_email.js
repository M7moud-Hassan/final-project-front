import React, { Component } from 'react';
import axios from "axios";

class TypeEmail extends Component{
    constructor(){
      super();
      
    }
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
          <a class="navbar-brand" href="#"><img src="images/upwork.svg" alt="Logo"/></a>
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

    <div class="container">
      <h1>Email Validation</h1>
        <label for="email-id">Email Id</label><br/>
        <input type="email" placeholder="  Email Id or Phone" id="email-id" oninput="checker()"/>
        <div id="icon">

        </div>
        <p id="error-msg">Please Enter A Valid Email Id</p>
    </div>
            </div>
        )
    }
}
export default TypeEmail;