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


 <form>
      <h1>Password Validation</h1>
 <label for="password">Password</label>
   <input type="password" id="password" placeholder="Your Password"/>

 <label for="cnfrm-password">Confirm Password</label>
  <input type="password" id="cnfrm-password" placeholder="Confirm password"/>
        <p id="message"></p>
        <input type="button" onclick="checkPassword()" value="SUBMIT"/>
 </form>
            </div>
        )
    }
}