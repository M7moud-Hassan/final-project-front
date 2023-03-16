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
                    <img id='logo' className='ms-5' src='\images\upwork.png' />
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
                                <div className='mt-3 p-3' >
                                <h3>Guided tour</h3>

                                </div>
                                <div className='w-75 p-3'>
                                    Use your workspace to manage dragt hob postsm action items, and comleted work.
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

            </div>
        </div>

    )
}


export default ClientProfile;
