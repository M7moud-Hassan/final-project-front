import React, { Component } from 'react';
import Footer from '../index/Footer';
import NavBar from '../index/navbar';
import '../css/profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




class Profile extends Component{
    constructor(){
      super();


    }

    render(){
       return( 
       <div>
            <NavBar/>
            <div>
                
    <div class="container-border my-4">
        <div class="container my-5">
            <div class="row">

                <div class="col-md-3">
                    <img src="https://via.placeholder.com/150" class="img-fluid rounded-circle mb-3"
                        alt="Profile Picture"/>
                        
                </div>
                <div class="col-md-9">
                    <h4>John Doe</h4>
                    <h6 class="text"></h6>
                    <p class="text-muted">sohag,girga</p>
                    <p>Front end developer</p>

                </div>


            </div>
            <hr/>

            <div class="row">
                <div class="col-md-3 px-2">

                    <div class="row">
                        <div class="col-md-12">
                            <div class="d-flex justify-content-between align-items-center">
                                <h4 class="mb-3">Languges</h4>
                                <div>
                                    <button type="button"
                                        class="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                            class="fa-solid fa-pen"></i></button>
                                           
                                </div>
                            </div>
                            <ul>
                                <li>English - Proficient</li>
                                <li>Spanish - Intermediate</li>
                                <li>French - Basic</li>
                            </ul>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="d-flex justify-content-between align-items-center">
                                <h4 class="mb-3">Educations</h4>
                                <div>
                                    <button type="button"
                                        class="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                            class="fa-solid fa-pen"></i></button>                                </div>
                            </div>
                            <ul class="list-unstyled">
                                <li>
                                    <h6>Education 1</h6>
                                    <p class="text-muted">2018-2022</p>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div class="col-md-9 px-2">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2 class="mb-0">About Me</h2>
                        <div>
                            <button type="button" class="btn btn-outline-primary rounded-pill btn-sm me-2 "><i
                                    class="fa-solid fa-pen"></i></button>
                        </div>
                    </div>


                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis felis vitae augue finibus
                        luctus. Fusce nec tortor sed nisl aliquam blandit. Nulla lobortis leo nunc, sit amet vulputate
                        ipsum viverra sed. Fusce sollicitudin velit at lectus bibendum commodo. Fusce tempor tellus eu
                        vestibulum commodo. Proin vel elit elit.</p>
                    <hr/>

                    <div class="d-flex justify-content-between align-items-center">
                        <h2 class="mb-0">My Skills</h2>
                        <div>
                            <button type="button" class="btn btn-outline-success btn-sm rounded-pill me-2"><i
                                    class="fa-solid fa-plus"></i></button>
                            <button type="button" class="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                    class="fa-solid fa-pen"></i></button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <ul class="list-unstyled">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul class="list-unstyled">
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <div class="d-flex justify-content-between align-items-center">
                            <h2>My Work Experience</h2>
                            <div>
                                <button type="button" class="btn btn-outline-primary rounded-pill btn-sm me-2 "><i
                                        class="fa-solid fa-pen"></i></button>
                            </div>

                        </div>
                        <ul class="list-unstyled">
                            <li>
                                <div class="position-relative container-border my-4">

                                    <div class="d-flex justify-content-between align-items-center">
                                        <h4 class="mb-3">Title</h4>
                                        <div>
                                            <button type="button"
                                                class="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                                    class="fa-solid fa-pen"></i></button>
                                            <button type="button" class="btn btn-outline-danger rounded-pill btn-sm"><i
                                                    class="fa-solid fa-trash-can"></i></button>
                                        </div>
                                    </div>
                                    <p class="text-muted">ABC Company</p>
                                    <p>Developed and maintained the company's website using HTML, CSS, and JavaScript.
                                        Worked on
                                        improving website performance and user experience.</p>
                                </div>
                            </li>
                            <hr/>
                            <li>
                                <div class="position-relative container-border my-4">

                                    <div class="d-flex justify-content-between align-items-center">
                                        <h4 class="mb-3">Title</h4>
                                        <div>
                                            <button type="button"
                                                class="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                                    class="fa-solid fa-pen"></i></button>
                                            <button type="button" class="btn btn-outline-danger rounded-pill btn-sm"><i
                                                    class="fa-solid fa-trash-can"></i></button>
                                        </div>
                                    </div>
                                    <p class="text-muted">ABC Company</p>
                                    <p>Developed and maintained the company's website using HTML, CSS, and JavaScript.
                                        Worked on
                                        improving website performance and user experience.</p>
                                </div>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    </div>

    <div class="container-border my-4 p-4">
        <div class="d-flex justify-content-between align-items-center">
            <h2 class="mb-0">About Me</h2>
            <div>

                <button type="button" class="btn btn-outline-success btn-sm rounded-pill"><i
                        class="fa-solid fa-plus"></i></button>
            </div>
        </div>
        <hr/>

        <hr/>
        <div class="position-relative container-border my-4">
            <div class="d-flex justify-content-between align-items-center">
                <h4 class="mb-3">Title</h4>
                <div>
                    <button type="button" class="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                            class="fa-solid fa-pen"></i></button>
                    <button type="button" class="btn btn-outline-danger rounded-pill btn-sm"><i
                            class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis felis vitae augue finibus
                luctus. Fusce nec
                tortor sed nisl aliquam blandit. Nulla lobortis leo nunc, sit amet vulputate ipsum viverra sed. Fusce
                sollicitudin
                velit at lectus bibendum commodo. Fusce tempor tellus eu vestibulum commodo. Proin vel elit elit.</p>
        </div>
        <hr/>
        <div class="position-relative container-border my-4">
            <div class="d-flex justify-content-between align-items-center">
                <h4 class="mb-3">Title</h4>
                <div>
                    <button type="button" class="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                            class="fa-solid fa-pen"></i></button>
                    <button type="button" class="btn btn-outline-danger rounded-pill btn-sm"><i
                            class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis felis vitae augue finibus
                luctus. Fusce nec
                tortor sed nisl aliquam blandit. Nulla lobortis leo nunc, sit amet vulputate ipsum viverra sed. Fusce
                sollicitudin
                velit at lectus bibendum commodo. Fusce tempor tellus eu vestibulum commodo. Proin vel elit elit.</p>
        </div>
    </div>


            </div>
            <Footer/>
        </div>
       )
    }
}

export default Profile;