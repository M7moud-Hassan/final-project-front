import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


let ClientProfile = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">

                <div className='container-fluid'>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink to={'/'}><img className='logos' src='./images/upwork.png' /> </NavLink>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <div className='d-flex'>
                            <ul className='mt-3'>
                                <li className="nav-item dropdown dropFont">
                                    <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Empty slot
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                            <ul className='mt-3'>
                                <li className="nav-item dropdown dropFont">
                                    <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Empty slot
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                            <ul className='mt-3'>
                                <li className="nav-item dropdown dropFont">
                                    <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Empty slot
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='w-100' >
                            <form className="d-flex">
                                <div className="input-group ms-5 w-100">
                                    <div className="search_box d-flex w-50">
                                        <input className="form-control me-2 w-100 " type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </div>
                                    <NavLink className={'btn border-0 rounded ms-5'} to={"/login"}>Log In</NavLink>
                                    <NavLink className="btn btn-primary border-0 rounded" to={"/choose_account"}>Sign Up</NavLink>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='container'>
                <div className='mt-md-5 mt-xs-3 mt-1'>
                    <h1 className='text-dark'>Hi , User </h1>
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
                                <img className='w-75' src='./images/Develope.avif'/>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 col-12 mt-3'>

                            <div className='profileCards3 container pCards2 text-center'>
                                <div className='mt-3'>
                                    <h4 className='p-3 text-dark'>Marketing</h4>
                                </div>
                                <img className='w-75' src='./images/marketing.png'/>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 col-12 mt-3 text-center'>

                            <div className='profileCards3 container pCards2'>
                                <div className='mt-3 text-dark'>
                                    <h4 className='p-3'>Design</h4>
                                </div>
                                <img className='w-75' src='./images/Design.avif'/>
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


export default ClientProfile;
