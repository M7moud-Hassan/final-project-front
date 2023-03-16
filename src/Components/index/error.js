import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


let Error = () => {
    return (
        <div>
            <nav className='container '>
                <img className='logos' src='./images/upwork.png' /> 
            </nav>
            <div className='container-fluid border-bottom border-success'></div>
            
            <div className='container errorContainer'>
                <img src='./images/Error.png'/>
                <div className='mt-5 text-success h1' >Looking for something?</div>
                <p className='mt-5'>We can’t find this page, but we can help you find new opportunities. Here are some places to start:</p>
                
                <NavLink to={'/'}><button className='rounded-pill btn btn-success btn-lg mt-3'>Visit Homepage</button></NavLink>
                <p className='mt-5 text-success'>Get help and support</p>
                <p className='mt-5'>2023 Upwork® Global Inc.</p>
            </div>
        </div>
    )
}
export default Error;