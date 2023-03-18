import React, { Component } from 'react';


import '../../css/profile.css';
import NavBar from './navbar';
import Footer from './Footer';
import axios from 'axios';









class Profile extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            loading: true,
            error: null

        }

    }


    componentDidMount() {
        axios.get('https://api.example.com/data')
            .then(response => {
                this.setState({ data: response.data, loading: false });
            })
            .catch(error => {
                this.setState({ error: error.message, loading: false });
            });
    }

    render() {

        const { data, loading, error } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>{error}</p>;
        }
        return (
            <div>

                <div>
                    <NavBar />

                    <div className="container-border my-4">
                        <div className="container my-5">
                            <div className="row">

                                <div className="col-md-3">
                                    <img src="\images\me.png" className="img-fluid rounded-circle mb-3"
                                        alt="Profile Picture" />

                                </div>
                                <div className="col-md-9">
                                    <h4>{this.state.data.name}</h4>

                                    <p className="text-muted">{data.adress}</p>
                                    <p>{this.state.data.jobtitle}</p>

                                </div>


                            </div>
                            <hr />

                            <div className="row">
                                <div className="col-md-3 px-2">


                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h4 className="mb-3">Educations</h4>
                                                <div>
                                                    <button type="button"
                                                        className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                                            className="fa-solid fa-pen"></i></button>                                </div>
                                            </div>
                                            <ul className="list-unstyled">
                                                {this.state.data.educations.map((education, index) => (
                                                    <li key={index}>
                                                        <p>{education.school}</p>
                                                        <p>{education.degreer}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-9 px-2">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h2 className="mb-0">About Me</h2>
                                            <div>
                                                <button type="button" className="btn btn-outline-primary rounded-pill btn-sm me-2 "><i
                                                    className="fa-solid fa-pen"></i></button>
                                            </div>
                                        </div>


                                        <div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis felis vitae augue finibus
                                                luctus. Fusce nec tortor sed nisl aliquam blandit. Nulla lobortis leo nunc, sit amet vulputate
                                                ipsum viverra sed. Fusce sollicitudin velit at lectus bibendum commodo. Fusce tempor tellus eu
                                                vestibulum commodo. Proin vel elit elit.
                                            </p>


                                        </div>
                                    </div>

                                    <hr />


                                    <div id='portflio'>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h2 className="mb-0">Portflio</h2>
                                            <div>
                                                <button type="button" className="btn btn-outline-primary rounded-pill btn-sm me-2 "><i
                                                    className="fa-solid fa-pen"></i></button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className=" ">
                                                <div className="row d-flex justify-content-around ">
                                                    <div className="col-md-4">
                                                        <div className="card">
                                                            <img className="card-img-top" src="\images\me.png" alt="Card image cap" style={{ width: '150px' }} />
                                                            <div className="card-body">
                                                                <h5 className="card-title">Card Title 1</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="card">
                                                            <img className="card-img-top" src="\images\me.png" alt="Card image cap" style={{ width: '150px' }} />
                                                            <div className="card-body">
                                                                <h5 className="card-title">Card Title 3</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="card">
                                                            <img className="card-img-top" src="\images\me.png" alt="Card image cap" style={{ width: '150px' }} />
                                                            <div className="card-body">
                                                                <h5 className="card-title">Card Title 3</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="row">


                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h2 className="mb-0">My Skills</h2>
                                            <div>
                                                <button type="button" className="btn btn-outline-success btn-sm rounded-pill me-2"><i
                                                    className="fa-solid fa-plus"></i></button>
                                                <button type="button" className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                                    className="fa-solid fa-pen"></i></button>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul className="list-unstyled">
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>JavaScript</li>
                                                    <li>React</li>
                                                    <li>Node.js</li>
                                                    <li>Bootstrap</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <hr />
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h2>My Work Experience</h2>
                                            <div>
                                                <button type="button" className="btn btn-outline-primary rounded-pill btn-sm me-2 "><i
                                                    className="fa-solid fa-pen"></i></button>
                                            </div>

                                        </div>
                                        <ul className="list-unstyled">
                                            <li>
                                                <div className="position-relative container-border my-4">

                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <h4 className="mb-3">Title</h4>
                                                        <div>
                                                            <button type="button"
                                                                className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                                                    className="fa-solid fa-pen"></i></button>
                                                            <button type="button" className="btn btn-outline-danger rounded-pill btn-sm"><i
                                                                className="fa-solid fa-trash-can"></i></button>
                                                        </div>
                                                    </div>
                                                    <p className="text-muted">ABC Company</p>
                                                    <p>Developed and maintained the company's website using HTML, CSS, and JavaScript.
                                                        Worked on
                                                        improving website performance and user experience.</p>
                                                </div>
                                            </li>
                                            <hr />
                                            <li>
                                                <div className="position-relative container-border my-4">

                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <h4 className="mb-3">Title</h4>
                                                        <div>
                                                            <button type="button"
                                                                className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                                                    className="fa-solid fa-pen"></i></button>
                                                            <button type="button" className="btn btn-outline-danger rounded-pill btn-sm"><i
                                                                className="fa-solid fa-trash-can"></i></button>
                                                        </div>
                                                    </div>
                                                    <p className="text-muted">ABC Company</p>
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

                    <div className="container-border my-4 p-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="mb-0">Certifications</h2>
                            <div>

                                <button type="button" className="btn btn-outline-success btn-sm rounded-pill"><i
                                    className="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                        <hr />

                        <hr />
                        <div className="position-relative container-border my-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="mb-3">Title</h4>
                                <div>
                                    <button type="button" className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                        className="fa-solid fa-pen"></i></button>
                                    <button type="button" className="btn btn-outline-danger rounded-pill btn-sm"><i
                                        className="fa-solid fa-trash-can"></i></button>
                                </div>
                            </div>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis felis vitae augue finibus
                            </p>
                        </div>
                        <hr />
                        <div className="position-relative container-border my-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="mb-3">Title</h4>
                                <div>
                                    <button type="button" className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                        className="fa-solid fa-pen"></i></button>
                                    <button type="button" className="btn btn-outline-danger rounded-pill btn-sm"><i
                                        className="fa-solid fa-trash-can"></i></button>
                                </div>
                            </div>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis felis vitae augue finibus
                            </p>
                        </div>
                    </div>
                    <div className="container-border my-4 p-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="mb-0">Employment history</h2>
                            <div>

                                <button type="button" className="btn btn-outline-success btn-sm rounded-pill"><i
                                    className="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                        <hr />

                        <hr />
                        <div className="position-relative container-border my-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="mb-3">Title</h4>
                                <div>
                                    <button type="button" className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                        className="fa-solid fa-pen"></i></button>
                                    <button type="button" className="btn btn-outline-danger rounded-pill btn-sm"><i
                                        className="fa-solid fa-trash-can"></i></button>
                                </div>
                            </div>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis felis vitae augue finibus
                            </p>
                        </div>
                        <hr />
                        <div className="position-relative container-border my-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="mb-3">Title</h4>
                                <div>
                                    <button type="button" className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                        className="fa-solid fa-pen"></i></button>
                                    <button type="button" className="btn btn-outline-danger rounded-pill btn-sm"><i
                                        className="fa-solid fa-trash-can"></i></button>
                                </div>
                            </div>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis felis vitae augue finibus
                            </p>
                        </div>
                    </div>


                </div>
                <Footer />
            </div>
        )
    }
}

export default Profile;