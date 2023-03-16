import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  constructor() {
    super();


  }

  render() {
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
                  <div className="input-group ms-5 w-100 d-flex justify-content-between">
                    <div className="search_box d-flex w-50 mt-2" style={{ height: '40px'}}>
                      <input className="form-control me-2 w-100  " type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success " type="submit">Search</button>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                    <i class="fa-solid fa-question btn btn-lg" style={{ width: '80px'}}></i>
                    <i class="fa-solid fa-bell btn btn-lg" style={{ width: '80px'}}></i>
                    <img src="\images\me.png" alt="User" className="rounded-circle btn border-0 ms-4" style={{ width: '70px'}} />


                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </nav>


      </div>

    )
  }
}

export default NavBar;