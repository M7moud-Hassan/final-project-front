import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBarIndex extends Component {
  constructor() {
    super();


  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbarReducePadding ">

          <div className='container-fluid'>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink to={'/'}><img id='logo' className='ms-3' src='\images\inLogo.png' /></NavLink>
            <div class="collapse navbar-collapse" id="navbarScroll">
              <div className='d-flex'>
                <ul className='mt-3'>
                  <li className="nav-item dropdown dropFont">
                    <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Help & About Center
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink ">
                      <NavLink className="dropdown-item" style={({ isActive }) => ({ color: isActive ? 'green' : 'Black' })} to={'/Help'}><a>Help</a></NavLink>

                      <NavLink className="dropdown-item" style={({ isActive }) => ({ color: isActive ? 'green' : 'Black' })} to={'/About'}><a>About</a></NavLink>
                    </div>
                  </li>
                </ul>

              </div>
              <div className='w-100' >
                <form className="d-flex">
                  <div className="input-group ms-5 w-100">
                    <div className="search_box d-flex w-50">

                    </div>
                    <div className='w-50 text-end '>
                    <NavLink className={'btn border-0 rounded me-3'} to={"/login"}>Log In</NavLink>
                    <NavLink className="btn btn-success border-0 rounded me-5" to={"/choose_account"}>Sign Up</NavLink>
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

export default NavBarIndex;
