import React, { Component, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
// import { useEffect } from 'react';
import '../../../index.css'
import Error from '../../index/error';
import NavBar from '../freelancer/navbar';


const ClientProfile = () => {

    const [id, setId] = useState('');
    const [data, setData] = useState('');
    const setting = useRef('');
    const [isMenu, setIsMenu] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('uid'))
        {
          if(localStorage.getItem('type')=='user'){
            setting.current.focus();
          }
      }
       
      }, []);
    
    function settingS() {
        setIsMenu(true)
        const DoM = setting.current;
            DoM.style.display = 'block'
      }
    function XsettingS() {
        setIsMenu(false)
        const DoM = setting.current;
            DoM.style.display = 'none'
      }
    useEffect(() => {
        axios.post(`http://127.0.0.1:8000/profile/clientDetails/`, { id: localStorage.getItem('uid') })
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, [id]);
    if(localStorage.getItem('uid'))
    {
      if(localStorage.getItem('type')=='user'){
      
      

    return (
        <div>
             <NavBar 
            url='http://127.0.0.1:8000/profile/clientDetails/'

            openMenu={isMenu?(XsettingS):(settingS)}
            />
            <div className='row'>
            <div className=' col-sm-3 buttonSetting text-center' ref={setting}>
                <img className='littleSymbolImage' src={data.image?("data:image/*;base64," +data.image):("./images/default.png")} />
                <h4 className='mt-3'>{data.name}</h4>
                <hr />
                <NavLink to={'/clientsettings'}><h5>Settings</h5></NavLink>
                <NavLink onClick={
                    ()=>{
                        localStorage.clear()
                        window.location="/"
                    }
                }><h5 className='pb-4'>Logout</h5></NavLink>
            </div></div>
            <div className='container'>
                <div className='mt-md-5 mt-xs-3 mt-1'>
                    <h1 className='text-dark'>Hi , {data.name} </h1>
                    <h3 className='text-dark'>Your workspace</h3>
                </div>

                {/* section 1 */}
                <div className='mt-5'>
                    <div className='row'>
                        <div className='col-md-3 col-sm-6 col-12 mt-3'>

                            <div className='profileCards container pCards1'>
                                <div className='mt-3 p-3'>
                                    <h3>Guided tour</h3>
                                </div>
                                <div className='w-75 p-3'>
                                    Use your workspace to manage dragt hob postsm action items, and comleted work.
                                </div>
                            </div>

                        </div>
                        <div className='col-md-3 col-sm-6 col-12 mt-3'>

                            <div className='profileCards container pCards2'>

                                <div className='w-75 p-3 mt-3 pCardsTwo'>
                                    <i class="fa-solid fa-circle-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 col-12 mt-3'>

                            <div className='profileCards container pCards2'>
                                <div className='mt-3 p-3'>
                                    <h4>Pay with confidence</h4>
                                </div>
                                <div className='w-75 p-3'>
                                    Talent look for clients with cerified biling methods , there's no cost until you hire; you'll only be charged once you approve completed work.
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 col-12 mt-3'>

                            <div className='profileCards container pCards2'>
                                <div className='mt-3'>
                                    <h4 className='p-3'>Stay safe on Upwork</h4>
                                </div>
                                <div className='w-75 p-3'>
                                    we are doing our best to keep you safe , and it's important you learn how to indenity  and report suspicious activity
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section 2 */}
                <div className='mt-md-5 mt-xs-3 mt-1'>
                    <h1 className='text-dark'>Complete these steps to stand out and hire fast </h1>
                </div>
                <div className='mt-5'>
                    <div className='row mb-5'>
                        <div className='col-md-4 col-sm-6 col-12 mt-3'>

                            <div className='profileCards2 container pCards1 text-dark '>
                                <div className='mt-3 p-3'>
                                    <h4>require to hire </h4>
                                </div>
                                <div className='w-75 p-3'>
                                    <a className='text-success' href='#'>Add a billing method.</a>
                                    There's no cost until you hire
                                </div>
                            </div>

                        </div>
                        <div className='col-md-4 col-12 mt-3'>
                            <div className='profileCards2 container pCards2 text-dark' >
                                <div className='mt-3 p-3'><h4>require to hire </h4></div>
                                <div className=' ps-3 mt-3 h4 text-secondary'>
                                    You verified your Email address
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Section 3 */}
                <div className='mt-md-5 mt-xs-3 mt-1'>
                    <h1 className='text-dark'>Complete these steps to stand out and hire fast </h1>
                </div>
                <div className='mt-5 mb-5'>
                    <div className='row'>
                        <div className='col-md-3 col-sm-6 col-12 mt-3'>

                            <div className='profileCards3 container pCards3 '>
                                <div className='mt-3 p-3'>
                                    <h3>Guided tour</h3>
                                </div>
                                <div className='w-75 p-3'>
                                    Book a consultation with an expert to review your project's budget, timeline , and scope one-on-one
                                </div>
                                <button className='rounded-pill btn btn-success text-center mt-5'>
                                    Learn more
                                </button>
                            </div>

                        </div>
                        <div className='col-md-3 col-sm-6 col-12 mt-3'>

                            <div className='profileCards3 container pCards2 text-center'>
                                <div className='mt-3 p-3'>
                                    <h4 className='text-dark'>Development & IT</h4>
                                </div>
                                <img className='w-75' src='..\..\images\Develope.avif' />
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 col-12 mt-3'>

                            <div className='profileCards3 container pCards2 text-center'>
                                <div className='mt-3'>
                                    <h4 className='p-3 text-dark'>Marketing</h4>
                                </div>
                                <img className='w-75' src='./images/marketing.png' />
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 col-12 mt-3 text-center'>

                            <div className='profileCards3 container pCards2'>
                                <div className='mt-3 text-dark'>
                                    <h4 className='p-3'>Design</h4>
                                </div>
                                <img className='w-75' src='./images/Design.avif' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* section 4 */}
                <div className='profileCards3 container pCards4 text-dark'>
                    <div className='mt-3 p-3'>
                        <h3>Get Started</h3>
                    </div>
                    <div className='w-75 p-3 h2'>
                        Get started and connect with talent to get work done
                    </div>
                    <button className='rounded-pill btn btn-success text-center mt-5 ms-5'>
                        go to article
                    </button>
                </div>
                {/* section 5 */}
                <div className='mt-md-5 mt-xs-3 mt-1'>
                    <h1 className='text-dark'>Complete these steps to stand out and hire fast </h1>
                </div>
                <div className='mt-5'>
                    <div className='row mb-5'>
                        <div className='col-md-4 col-12 mt-3'>
                            <div className='profileCards2 container pCards2 text-dark' >
                                <div className='mt-3 p-3'><h4 className='text-secondary'>Payments </h4></div>
                                <div className=' ps-3 mt-1 h4 text-dark'>
                                    Everything you need to know about payments
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 col-12 mt-3'>
                            <div className='profileCards2 container pCards2 text-dark' >
                                <div className='mt-3 p-3'><h4 className='text-secondary'>Payments </h4></div>
                                <div className=' ps-3 mt-1 h4 text-dark'>
                                    How to seat up your prefered billing method
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-12 mt-3'>
                            <div className='profileCards2 container pCards2 text-dark' >
                                <div className='mt-3 p-3'><h4 className='text-secondary'>Trust and Safety </h4></div>
                                <div className=' ps-3 mt-1 h4 text-dark'>
                                    Keep yourself and others safe on upwork
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
else{
    window.location='/profile_free'
}
}else{
window.location='/error'
}
}


export default ClientProfile;