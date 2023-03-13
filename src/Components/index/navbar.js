import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';



class NavBar extends Component{
    constructor(){
      super();


    }

    render(){
        return(
            <div>
                <nav class="navbar sticky-top navbar-expand-lg navbar-light navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">project logo</a>
          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content"></button>
            <span class="navbar-toggler-icon"></span>
       
          <a class="navbar-brand" href="#">project logo</a>
          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
            <div class="hamburger-toggle">
              <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </button>
          <div class="collapse navbar-collapse" id="navbar-content">
            <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Find Work</a>
                <ul class="dropdown-menu shadow">
                  <li><a class="dropdown-item" href="#">Gallery</a></li>
                  <li><a class="dropdown-item" href="blog.html">Blog</a></li>
                  <li class="dropstart">
                    <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Submenu Left</a>
                    <ul class="dropdown-menu shadow">
                      <li><a class="dropdown-item" href=""> Third level 1</a></li>
                      <li><a class="dropdown-item" href=""> Third level 2</a></li>
                      <li><a class="dropdown-item" href=""> Third level 3</a></li>
                      <li><a class="dropdown-item" href=""> Third level 4</a></li>
                      <li><a class="dropdown-item" href=""> Third level 5</a></li>
                    </ul>
                  </li>
                  <li class="dropend">
                    <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside">Submenu Right</a>
                    <ul class="dropdown-menu shadow">
                      <li><a class="dropdown-item" href=""> Second level 1</a></li>
                      <li><a class="dropdown-item" href=""> Second level 2</a></li>
                      <li><a class="dropdown-item" href=""> Second level 3</a></li>
                      <li class="dropend">
                        <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Let's go deeper!</a>
                        <ul class="dropdown-menu dropdown-submenu shadow">
                          <li><a class="dropdown-item" href=""> Third level 1</a></li>
                          <li><a class="dropdown-item" href=""> Third level 2</a></li>
                          <li><a class="dropdown-item" href=""> Third level 3</a></li>
                          <li><a class="dropdown-item" href=""> Third level 4</a></li>
                          <li><a class="dropdown-item" href=""> Third level 5</a></li>
                        </ul>
                      </li>
                      <li><a class="dropdown-item" href=""> Third level 5</a></li>
                    </ul>
                  </li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
             
              <li class="nav-item dropdown dropdown-mega position-static">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Why us?</a>
                <div class="dropdown-menu shadow">
                  <div class="mega-content px-4">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-12 col-sm-4 col-md-3 py-4">
                          <h5>Title</h5>
                          <div class="list-group">
                            <a class="list-group-item" href="#">Mega Menu Link</a>
                            <a class="list-group-item" href="#">Mega Menu Link</a>
                            <a class="list-group-item" href="#">Mega Menu Link</a>
                          </div>
                        </div>
                        <div class="col-12 col-sm-4 col-md-3 py-4">
                          <h5>Card Title</h5>
                          <div class="card">

                      {/* <img src="img/banner-image.jpg" class="img-fluid" alt="image"/> */}
                      <div class="card-body">
                        <p class="card-text">Description goes here...</p>
                      </div>
                    </div>
                        </div>
                        <div class="col-12 col-sm-4 col-md-3 py-4">
                          <h5>Title</h5>
                            <p>Description goes here...</p>
                        </div>
                        <div class="col-12 col-sm-12 col-md-3 py-4">
                          <h5>Title</h5>
                          <div class="list-group">
                            <a class="list-group-item" href="#">Menu Link</a>
                            <a class="list-group-item" href="#">Menu Link</a>
                            <a class="list-group-item" href="#">Menu Link</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Enterprise</a>
              </li>

             
            </ul>
            <form class="d-flex ms-auto">
                <div class="input-group">
                    
                    <div class="wrapper ">
                        <div class="search_box">
                            <div class="dropdown">
                                <div class="default_option">All</div>  
                                <ul>
                                  <li>All</li>
                                  <li>Recent</li>
                                  <li>Popular</li>
                                </ul>
                            </div>
                            <div class="search_field">
                              <input type="text" class="input" placeholder="Search"/>
                              <i class="fas fa-search"></i>
                          </div>
                        </div>
                    </div>

                    <NavLink className={'btn border-0 rounded'} to={"/login"}>Log In</NavLink>
                    <button class="btn btn-primary border-0 rounded" type="submit">Sign Up</button>
                </div>
            </form>
          </div>
          
        </div>
      </nav>

      <div class="subnav">
        <ul>
          <li><a href="#">first</a></li>
          <li><a href="#">sec</a></li>
          <li><a href="#">Third</a></li>
          <li><a href="#">fourth</a></li>
          <li><a href="#">fifth</a></li>
        </ul>
      </div>
      
            </div>
        )
    }
}
export default NavBar;
