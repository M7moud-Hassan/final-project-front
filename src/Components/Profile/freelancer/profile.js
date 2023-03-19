import React, { Component } from 'react';


import '../../css/profile.css';
import NavBar from './navbar';
import Footer from './Footer';
import axios from 'axios';
import Error from '../../index/error';
import '../../css/models.css';
import '../../js/models.js';


class Profile extends Component {
    constructor() {
        super();
        this.state = {
            data: false,
            loading: true,
            error: null,
            jobtitle2: '',
            overview: '',
            // education
            school: '',
            degree: '',
            study: '',
            from_year: '',
            to_year: '',
            edu_description: '',
            error_number:'',
            error_number_to:'',
            error_tag:'',
            error_tag_to:'',

        }

    }


    componentDidMount() {
        axios.post(`http://127.0.0.1:8000/profile/get_details_free/`,
            {
                "id": localStorage.getItem('uid')
            })
            .then(response => {
                this.setState({ data: response.data, loading: false });

                this.setState({ jobtitle2: this.state.data.jobtitle })

            })
            .catch(error => {
                this.setState({ error: error.message, loading: false });
            });
    }

    render() {

        var { data, loading, error } = this.state;

        if (loading) {
            return (<div id="demo-content">
                <div id="loader-wrapper">
                    <div id="loader">

                    </div>
                </div>

            </div>)
        }

        if (error) {
            return <Error />
        }
        return (
            <div>


                <div>
                    <NavBar />

                    <div className="container-border my-4">
                        <div className="container my-5">
                            <div className="row">

                                <div className="col-md-3">
                                    <img src={"data:image/*;base64," + this.state.data.image} className="img-fluid rounded-circle mb-3"
                                        alt="Profile Picture" />

                                </div>
                                <div className="col-md-9">
                                    <h4>{this.state.data.name}</h4>

                                    <p className="text-muted">{this.state.data.address}</p>
                                    <p>{this.state.data.jobtitle} &nbsp;&nbsp;&nbsp;
                                        <button type="button" className="btn btn-outline-primary btn-sm rounded-pill me-2" onClick={
                                            () => {

                                                this.setState({ jobtitle2: this.state.data.jobtitle })
                                                document.getElementById('id01').style.display = 'block'
                                            }
                                        }><i
                                            className="fa-solid fa-pen"></i></button>

                                    </p>
                                    <div id="id01" class="mamodal rounded">

                                        <form class="mamodal-content maanimate rounded">
                                            <div class="maimgcontainer">
                                                <span class="close" onClick={
                                                    () => {

                                                        document.getElementById('id01').style.display = 'none'
                                                    }
                                                }>&times;</span>

                                            </div>

                                            <div class="container myconatiner pt-4">
                                                <h3 class="text-left ml-4">Edit your title </h3>
                                                <div class="container mycontainer">
                                                    <h4>Your title</h4>
                                                    <p>Enter a single sentence description of your professional skills/experience (e.g. Expert Web Designer with Ajax experience) </p>
                                                </div>

                                                <input type="text" value={this.state.jobtitle2} onChange={
                                                    (e) => {
                                                        this.setState({ jobtitle2: e.target.value });
                                                    }
                                                } class="form-control" placeholder="Enter Username" name="uname" required />
                                            </div>

                                            <div class="container myconatiner rounded mt-4">
                                                <button type="button" onclick="document.getElementById('id01').style.display='none'" class="macancelbtnC btn btn-link" onClick={
                                                    () => {
                                                        document.getElementById('id01').style.display = 'none'
                                                    }
                                                }>Cancel</button>
                                                <button type="button" onclick="document.getElementById('id01').style.display='none'" class="macancelbtn" onClick={
                                                    () => {
                                                        this.setState(prevState => {

                                                            const { data } = prevState;
                                                            data.jobtitle = this.state.jobtitle2;
                                                            return { data };
                                                        },
                                                            () => {

                                                                axios.post("http://127.0.0.1:8000/auth/jobTitle/", {
                                                                    id: localStorage.getItem("uid"),
                                                                    jobtitle: this.state.data.jobtitle
                                                                }).then(respons => {
                                                                    document.getElementById('id01').style.display = 'none'
                                                                })

                                                            })
                                                    }
                                                }>Save</button>

                                            </div>
                                        </form>
                                    </div>

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
                                                        className="btn btn-outline-success btn-sm rounded-pill me-2" onClick={
                                                            () => {
                                                               
                                                                document.getElementById('id11').style.display = 'block'
                                                            }
                                                        }><i
                                                            className="fa-solid fa-plus"></i></button>
                                                </div>
                                            </div>
                                            <ul className="list-unstyled">
                                                {this.state.data.educations.map((education, index) => (
                                                    <div className='container-border my-1 d-flex justify-content-between'>

                                                        <div>
                                                            <li key={index}>
                                                                <h5>{education.school}</h5>
                                                                <p>{education.from_year}</p>
                                                            </li>
                                                        </div>
                                                        <div>
                                                            <button type="button" className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                                                className="fa-solid fa-pen"></i></button>
                                                            <button type="button" className="btn btn-outline-danger rounded-pill btn-sm"><i
                                                                className="fa-solid fa-trash-can"></i></button>
                                                        </div>
                                                    </div>

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
                                                <button type="button" className="btn btn-outline-primary rounded-pill btn-sm me-2 " onClick={
                                                    () => {
                                                        this.setState({ overview: this.state.data.overView })
                                                        document.getElementById('id02').style.display = 'block'
                                                    }
                                                }><i
                                                    className="fa-solid fa-pen"></i></button>
                                            </div>
                                        </div>


                                        <div>
                                            <p>
                                                {this.state.data.overView}
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
                                                    {this.state.data.portfilos.map((portfilo, index) => (
                                                        <div key={index} className="col-md-4">
                                                            <div className="card">
                                                                <img className="card-img-top" src={"data:image/*;base64," + portfilo.image} alt="Card image cap" style={{ width: '150px' }} />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{portfilo.title}</h5>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    ))}

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    <div id='History_work'>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h2 className="mb-0">History work</h2>
                                            <div>
                                                <button type="button" className="btn btn-outline-primary rounded-pill btn-sm me-2 "><i
                                                    className="fa-solid fa-pen"></i></button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className=" ">
                                                <div className="row d-flex justify-content-around ">
                                                    {this.state.data.history_work.map((history_work1, index) => (
                                                        <div key={index} className="col-md-4">
                                                            <div className="card">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{history_work1.location}</h5>
                                                                </div>
                                                                <div className="card-body">
                                                                    <p className="card-title">{history_work1.date}</p>
                                                                </div>
                                                                <div className="card-body">
                                                                    <p className="card-title">{history_work1.cost}</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    ))}

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
                                            <div className="col-md-12">
                                                <ul className="list-inline">
                                                    {this.state.data.skills.map((skill, index) => (
                                                        <li className='list-inline-item' key={index}>
                                                            <span class="badge rounded-pill bg-primary fs-6">{skill}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <hr />
                                    <div className="row">


                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h2 className="mb-0">My Services</h2>
                                            <div>
                                                <button type="button" className="btn btn-outline-success btn-sm rounded-pill me-2"><i
                                                    className="fa-solid fa-plus"></i></button>
                                                <button type="button" className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                                    className="fa-solid fa-pen"></i></button>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <ul className="list-inline">
                                                    {this.state.data.services.map((service, index) => (
                                                        <li className='list-inline-item' key={index}>
                                                            <span class="badge rounded-pill bg-primary fs-6">{service}</span>
                                                        </li>
                                                    ))}
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
                                            {this.state.data.experiecnces.map((experiecnce, index) => (
                                                <li key={index}>

                                                    <div className="position-relative container-border my-4">

                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <h3 className="mb-3">{experiecnce.title}</h3>
                                                            <div>
                                                                <button type="button"
                                                                    className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                                                        className="fa-solid fa-pen"></i></button>
                                                                <button type="button" className="btn btn-outline-danger rounded-pill btn-sm"><i
                                                                    className="fa-solid fa-trash-can"></i></button>
                                                            </div>
                                                        </div>
                                                        <p assName="text-muted">{experiecnce.company}</p>
                                                        <p>{experiecnce.description}</p>
                                                    </div>
                                                </li>

                                            )

                                            )}


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
                        {this.state.data.certifications.map((certification, index) => (
                            <div key={index} className="position-relative container-border my-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="mb-3">{certification.provider}</h5>
                                        <p className="mb-3">{certification.certification_type.name}</p>

                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                            className="fa-solid fa-pen"></i></button>
                                        <button type="button" className="btn btn-outline-danger rounded-pill btn-sm"><i
                                            className="fa-solid fa-trash-can"></i></button>
                                    </div>
                                </div>
                                <p className="mb-0">{certification.description}</p>
                            </div>

                        ))}



                    </div>

                    <div className="container-border my-4 p-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="mb-0">My Empolument History</h2>
                            <div>

                                <button type="button" className="btn btn-outline-success btn-sm rounded-pill"><i
                                    className="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                        {this.state.data.empolumentHistory.map((empolumentHistory1, index) => (
                            <div key={index} className="position-relative container-border my-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h4 className="mb-3">{empolumentHistory1.title}</h4>
                                        <p className="mb-3">{empolumentHistory1.location}</p>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                            className="fa-solid fa-pen"></i></button>
                                        <button type="button" className="btn btn-outline-danger rounded-pill btn-sm"><i
                                            className="fa-solid fa-trash-can"></i></button>
                                    </div>
                                </div>
                                <p className="mb-0">{empolumentHistory1.description}</p>
                            </div>

                        ))}






                    </div>




                </div>
                <Footer />
                <div id="id02" class="mamodal rounded">

                    <form class="mamodal-content maanimate rounded">
                        <div class="maimgcontainer">
                            <span onClick={
                                () => {
                                    document.getElementById('id02').style.display = 'none'
                                }
                            } class="close" title="Close Modal">&times;</span>
                        </div>

                        <div class="container myconatiner">
                            <h3 class="text-left ml-4">Overview </h3>
                            <div class="container mycontainer pt-4">
                                <p>Use this space to show clients you have the skills and experience they're looking for. </p>
                                <ul>
                                    <li>Describe your strengths and skills</li>
                                    <li>Highlight projects, accomplishments and education</li>
                                    <li>Keep it short and make sure it's error-free</li>
                                </ul>
                            </div>

                            <textarea className='w-100' type="text" placeholder="Enter Username" name="uname" required rows="5" onChange={
                                (e) => {

                                    this.setState({ overview: e.target.value })

                                }
                            } value={this.state.overview
                            }>
                            </textarea>
                        </div>

                        <div class="container myconatiner rounded">
                            <button type="button" onclick="document.getElementById('id02').style.display='none'" class="macancelbtnC btn btn-link" onClick={
                                () => {
                                    document.getElementById('id02').style.display = 'none'
                                }
                            }>Cancel</button>
                            <button type="button" onclick="document.getElementById('id02').style.display='none'" class="macancelbtn" onClick={() => {
                                this.setState(prevState => {

                                    const { data } = prevState;
                                    data.overView = this.state.overview;
                                    return { data };
                                },
                                    () => {

                                        axios.post("http://127.0.0.1:8000/auth/save_overview/", {
                                            id: localStorage.getItem("uid"),
                                            overview: this.state.data.overView
                                        }).then(respons => {
                                            document.getElementById('id02').style.display = 'none'
                                        })

                                    })

                            }
                            }>Save</button>

                        </div>
                    </form>
                </div>
                <div id="id11" class="mamodal rounded" >
                    <form id="education" class="needs-validation dialog" onSubmit={

                        (event) => {
                            event.preventDefault()
                            if (!this.state.error_tag_to) {

                                this.add_educations()
                            }
                        }

                    } novalidate>
                        <div className=" formx form-content animate">
                            <div className="mb-3 mt-3">
                                <label htmlFor="school" className="form-label">school:</label>
                                <input type="text" value={this.state.school} className="form-control" id="school" placeholder="Enter school" name="school" onChange={(e) => {
                                    this.setState({ school: e.target.value })
                                }} required />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="degree" className="form-label">degree:</label>
                                <input type="text" value={this.state.degree} className="form-control" id="degree" placeholder="Enter degree" name="degree" onChange={(e) => {
                                    this.setState({ degree: e.target.value })
                                }} required />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="study" className="form-label">study:</label>
                                <input type="text" value={this.state.study} className="form-control" id="study" placeholder="Enter study" name="study" onChange={(e) => {
                                    this.setState({ study: e.target.value })
                                }} required />
                            </div>

                            <div className="container row">
                                <div className="col-6">
                                    <label htmlFor="from year">from year</label>
                                    <input type="number" min="1990" max="2023" pattern='[0-9]{4}' onBlur={
                                        (e) => {
                                            if (e.target.value < 1990 && e.target.value > 2023) {
                                                this.setState({
                                                    error_number: "not valid year",
                                                    error_tag: "is-invalid"
                                                })

                                            } else {
                                                this.setState({
                                                    error_number: "",
                                                    error_tag: ""
                                                })
                                            }
                                        }
                                    } value={this.state.from_year} id="from_year" className={"form-control " + this.state.error_tag} onChange={(e) => {
                                        this.setState({ from_year: e.target.value })
                                    }} required />
                                    <div className='text-danger'>
                                        {this.state.error_number}
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="to year">to year</label>
                                    <input type="number" min="1990" max="2023" onBlur={
                                        (e) => {
                                            if (e.target.value < 1990 && e.target.value > 2023) {
                                                this.setState({ error_number_to: "not valid year" })
                                                this.setState({ error_tag_to: "is-invalid" })
                                            } else {
                                                if (!this.state.from_year) {
                                                    this.setState({ error_number_to: "input from year first" })
                                                    this.setState({ error_tag_to: "is-invalid" })
                                                } else if (e.target.value < this.state.from_year) {
                                                    this.setState({ error_number_to: "invalid year" })
                                                    this.setState({ error_tag_to: "is-invalid" })
                                                } else {
                                                    this.setState({
                                                        error_number_to: "",
                                                        error_tag_to: ""
                                                    })
                                                }
                                            }
                                        }
                                    } pattern='[0-9]{4}' value={this.state.to_year} id="to_year" className={"form-control " + this.state.error_tag_to} onChange={(e) => {
                                        this.setState({ to_year: e.target.value })
                                    }} required />
                                    <div className='text-danger'>
                                        {this.state.error_number_to}
                                    </div>
                                </div>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Example textarea</label>
                                <textarea value={this.state.edu_description} className="form-control" id="description2" rows="3" onChange={(e) => {
                                    this.setState({ edu_description: e.target.value })
                                }} required></textarea>
                            </div>

                            <button class="btn btn-success w-100" id='addEducation' type='submit'
                            onClick={() => {
                                this.setState(prevState => {

                                   

                                    const { data } = prevState;
                                    data.educations.push({

                                        school:this.state.school,
                                        degree:this.state.degree,
                                        study:this.state.study,
                                        from_year:this.state.from_year,
                                        to_year:this.state.to_year,
                                        edu_description:this.state.edu_description,
                                       

                                    })
                                    return { data };
                                },
                                    () => {
                                       

                                        axios.post("http://127.0.0.1:8000/auth/save_education/", {
                                            id: localStorage.getItem("uid"),
                                            school: this.state.data.overView,
                                            degree: this.state.data.degree,
                                            study: this.state.data.study,
                                            from_year: this.state.data.from_year,
                                            to_year: this.state.data.to_year,
                                            edu_description:this.state.edu_description,
                                            
                                        }).then(respons => {
                                            document.getElementById('id11').style.display = 'none'
                                        })

                                    })

                            }
                            }
                            >Submit</button>
                        </div>
                    </form>


                </div>
            </div>
        )
    }
}

export default Profile;