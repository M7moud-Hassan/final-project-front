import React, { Component } from 'react';


import '../../css/profile.css';
import NavBar from './navbar';
import Footer from './Footer';
import axios from 'axios';
import Error from '../../index/error';
import '../../css/models.css'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import MonthPickerInput from 'react-month-picker-input'
import 'react-month-picker-input/dist/react-month-picker-input.css';
import './windows'
class Profile extends Component {

    constructor() {
        super();
        const animatedComponents = makeAnimated();

        this.state = {
           
            data: false,
            loading: true,
            error: null,
            jobtitle2: '',
            overview: '',
            optionsSkills: [],
            defaultSkills: [],
            typeErro: '',
            msg: '',
            optionsServices: [],
            defaultServices: [],
            typeErroServices: '',
            msgServices: '',
            title: '',
            company: '',
            location: '',
            is_work: false,
            start_date: '',
            end_date: '',
            description: '',
            start_date_error: '',
            start_date_error_: '',
            error_end: '',
            end_date_error: '',
            id_exp_update: '',
            school: '',
            degree: '',
            study: '',
            from_year: '',
            to_year: '',
            edu_description: '',
            error_number: '',
            error_number_to: '',
            error_tag: '',
            error_tag_to: '',
            cr_error_tag_to: '',
            cr_start_date: '',
            cr_end_date: '',
            cr_description: '',
            cr_start_date_error: '',
            cr_start_date_error_: '',
            cr_error_end: '',
            cr_end_date_error: '',
            provider: '',
            certification_ID: '',
            certification_UR: '',
            id_type: 0,
            optionCertification: [],
            selectYear: 0,
            selectMonth: 0,
            rate_num:0,
            num_review:0,
            reviews:[]
           
        }

    }


   
   

    removeItemOnce(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }

    calRate(ine){
        var arr=[]
        for (let index = 0; index < 5; index++) {
          if(index<ine){
            arr.push(1)
          }else{
            arr.push(0)
          }
        }
        return arr;
      }
    componentDidMount() {
        
        axios.post(`http://127.0.0.1:8000/profile/get_details_free/`,
            {
                "id": localStorage.getItem('uid')
            })
            .then(response => {
                this.setState({num_review:response.data.numReview})
                this.setState({rate_num:response.data.rate})
                this.setState({ data: response.data, loading: false });
                this.setState({reviews:response.data.reviews})
                this.setState({ jobtitle2: this.state.data.jobtitle })

                axios.get("http://127.0.0.1:8000/auth/get_skills/").then(response => {
                    var optionslist = []
                    var defaultList = []

                    response.data.forEach(element => {
                        optionslist.push({ value: element.id, label: element.name })
                        if (this.state.data.skills.includes(element.name)) {
                            defaultList.push({ value: element.id, label: element.name })
                        }
                    });
                    this.setState({ optionsSkills: optionslist })
                    this.setState({ defaultSkills: defaultList })
                    console.log("default", defaultList);

                })
                    .catch(error => {
                        console.log(error);
                    });
                axios.get('http://127.0.0.1:8000/auth/get_Services/').then(response => {
                    var optionslist = []
                    var defaultList = []

                    response.data.forEach(element => {
                        optionslist.push({ value: element.id, label: element.name })
                        if (this.state.data.services.includes(element.name)) {
                            defaultList.push({ value: element.id, label: element.name })
                        }
                    });
                    this.setState({ optionsServices: optionslist })
                    this.setState({ defaultServices: defaultList })

                })
                    .catch(error => {
                        console.log(error);
                    });

            })
            .catch(error => {
                this.setState({ error: error.message, loading: false });
            });

        axios.get("http://127.0.0.1:8000/profile/getalltypesCertifications/").then(response => {
            var optionslist = []


            response.data.forEach(element => {
                optionslist.push({ value: element.id, label: element.name })

            });
            this.setState({ optionCertification: optionslist })

        })
            .catch(error => {
                console.log(error);
            });


    }
    addEmpolymentHistory() {

        var history = {
            "title": this.state.title,
            "company": this.state.company,
            "location": this.state.location,
            "is_current_work": this.state.is_work,
            "period_from_month": this.state.start_date,
            "period_to_month": this.state.end_date,
            "description": this.state.description,
            "id": localStorage.getItem("uid")
        };


        axios.post("http://127.0.0.1:8000/profile/add_history_employment/",
            history
        ).then(response => {
            this.setState(prevState => {
                const { data } = prevState;
                data.empolumentHistory.push(response.data);

                return { data };
            },
                () => {
                    this.setState({
                        title: '',
                        company: '',
                        location: '',
                        is_work: false,
                        start_date: '',
                        end_date: '',
                        start_date_error: '',
                        error: '',
                        description: ''
                    })
                })
        })


    }
    update_experiences() {
        if (this.state.title && this.state.company && this.state.location && this.state.description && this.state.start_date && this.state.end_date) {

            var expierces = {
                "title": this.state.title,
                "company": this.state.company,
                "location": this.state.location,
                "is_current_work_in_company": this.state.is_work,
                "start_date": this.state.start_date,
                "end_date": this.state.end_date,
                "description": this.state.description,
                "id": this.state.id_exp_update.id,
                "relate_id": localStorage.getItem("uid")
            };
            axios.post("http://127.0.0.1:8000/profile/delete_experience/", {
                exp_id: this.state.id_exp_update.id,
                id: localStorage.getItem("uid")
            }).then(respons => {
                this.setState(prevState => {
                    const { data } = prevState;
                    data.experiecnces = this.removeItemOnce(data.experiecnces, this.state.id_exp_update)
                    return { data };
                },
                    () => {
                        this.setState({ id_exp_update: '' })
                        this.setState({
                            title: '',
                            company: '',
                            location: '',
                            is_work: false,
                            start_date: '',
                            end_date: '',
                            start_date_error: '',
                            error: '',
                            description: ''
                        })

                    })
                axios.post("http://127.0.0.1:8000/auth/addExperience/", [expierces]).then(respons => {
                    this.setState(prevState => {
                        const { data } = prevState;
                        data.experiecnces.push(respons.data);
                        return { data };
                    },
                        () => {

                        })
                })
            })
        }
    }
    add_Certificate() {

        var certification = {
            "provider": this.state.provider,
            "description": this.state.cr_description,
            "certification_ID": this.state.certification_ID,
            "issuse_date": this.state.cr_start_date,
            "expiration_date": this.state.cr_end_date,
            "certification_UR": this.state.certification_UR,
            "type_certificate": this.state.id_type,
            "id": localStorage.getItem("uid")
        };

        axios.post("http://127.0.0.1:8000/profile/add_certification/", certification).then(respons => {
            this.setState(prevState => {
                const { data } = prevState;
                data.certifications.push(respons.data);
                return { data };
            },
                () => {
                    document.getElementById('id07').style.display = 'none'
                })
        })


        this.setState({
            provider: '',
            cr_description: '',
            certification_ID: '',
            cr_start_date: '',
            cr_end_date: '',
            certification_UR: '',
            id_type: 0,

        })
    }
    add_educations() {
        if (this.state.edu_description && this.state.school && this.state.degree && this.state.study && this.state.from_year && this.state.to_year) {
            var educations =
            {
                "school":
                    this.state.school,
                "degree": this.state.degree,
                "study": this.state.study,
                "from_year": this.state.from_year
                , "to_year": this.state.to_year,
                "description": this.state.edu_description,
                "freelancer_register_id": localStorage.getItem("uid")
            };

            axios.post("http://127.0.0.1:8000/auth/save_education/", [educations]).then(respons => {
                console.log(respons.data);
                this.setState(prevState => {
                    const { data } = prevState;
                    data.educations.push(respons.data);
                    return { data };
                },
                    () => {
                        document.getElementById('id06').style.display = 'none'
                    })
            })

            this.setState({
                school: '',
                degree: '',
                study: '',
                from_year: '',
                to_year: '',
                edu_description: '',

            })
        }
    }
    add_experiences() {
        if (this.state.title && this.state.company && this.state.location && this.state.description && this.state.start_date && this.state.end_date) {
            var expierces = {
                "title": this.state.title,
                "company": this.state.company,
                "location": this.state.location,
                "is_current_work_in_company": this.state.is_work,
                "start_date": this.state.start_date,
                "end_date": this.state.end_date,
                "description": this.state.description,
                "relate_id": localStorage.getItem("uid")
            };


            axios.post("http://127.0.0.1:8000/auth/addExperience/", [expierces]).then(respons => {
                console.log(respons.data);
                this.setState(prevState => {
                    const { data } = prevState;
                    data.experiecnces.push(respons.data);
                    return { data };
                },
                    () => {

                    })
            })



            this.setState({
                title: '',
                company: '',
                location: '',
                is_work: false,
                start_date: '',
                end_date: '',
                start_date_error: '',
                error: '',
                description: ''
            })
        }
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
                    <NavBar/>
                    
                    <div className="container-border my-4"  style={
                        {
                            maxWidth:"90%"
                        }
                    }>
                        <div className="container  my-5">
                            <div className="row container">

                                <div className="col-lg-4 col-md-6">
                                    <img src={"data:image/*;base64," + this.state.data.image} className=" rounded-circle mb-3 profileFreePic"
                                        alt="Profile Picture" />

                                </div>
                                <div className="col-lg-8 col-md-6">
                                    <h4>{this.state.data.name}</h4>

                                    <p className="text-muted">{this.state.data.address}</p>
                                    <p>{this.state.data.jobtitle} &nbsp;&nbsp;&nbsp;
                                        <button type="button" className="btn btn-outline-success btn-sm rounded-pill me-2" onClick={
                                            () => {

                                                this.setState({ jobtitle2: this.state.data.jobtitle })
                                                document.getElementById('id01').style.display = 'block'
                                            }
                                        }><i
                                            className="fa-solid fa-pen"></i></button>

                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
            <div class="ratings">
              {this.calRate(this.state.rate_num)?(this.calRate(this.state.rate_num).map(ele=>{
                if(ele==1){
                  return <i class="fa fa-star rating-color"></i>
                }else{
                  return  <i class="fa fa-star"></i>
                }
              })):(<div></div>)}
            </div>
            <h5 class="review-count">{this.state.num_review} Reviews</h5>
        </div>
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
                                                <button type="button" onclick="document.getElementById('id01').style.display='none'" class="macancelbtnC btn btn btn-light text-success border border-success mb-5 mt-3 me-3" onClick={
                                                    () => {
                                                        document.getElementById('id01').style.display = 'none'
                                                    }
                                                }>Cancel</button>
                                                <button type="button" onclick="document.getElementById('id01').style.display='none'" class="macancelbtn btn btn-success text-light  mb-5 mt-3 me-3" onClick={
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
                                <div className="col-md-5 px-2">


                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h4 className="mb-3">Educations</h4>
                                                <div >
                                                    <button type="button"
                                                        className="btn btn-outline-success btn-sm rounded-pill me-2" onClick={
                                                            () => {
                                                                document.getElementById('id06').style.display = 'block'
                                                            }
                                                        }><i className="fa-solid fa-plus"></i></button>
                                                </div>
                                            </div>
                                            <ul className="list-unstyled ">
                                                {this.state.data.educations.map((education, index) => (
                                                    <div className='container-border2 my-1 text-center'>
                                                        <li className='mt-3' key={index} >
                                                            <button type="button" className="btn btn-outline-danger rounded-pill btn-sm educateFree" onClick={
                                                                () => {
                                                                    axios.post('http://127.0.0.1:8000/profile/delEducation/', {
                                                                        id: education.id
                                                                    }).then(response => {
                                                                        this.setState(prevState => {
                                                                            const { data } = prevState;
                                                                            data.educations = this.removeItemOnce(data.educations, education)
                                                                            console.log(response.data);
                                                                            return { data };
                                                                        },
                                                                            () => {

                                                                            })
                                                                    })
                                                                }
                                                            }><i
                                                                className="fa-solid fa-trash-can"></i></button>
                                                            <h5>{education.school}</h5>
                                                            <p>{education.from_year}</p>

                                                        </li>

                                                    </div>

                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-7 px-2">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4 className="mb-0">About Me</h4>
                                            <div>
                                                <button type="button" className="btn btn-outline-success rounded-pill btn-sm me-2 " onClick={
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
                                            <h4 className="mb-0">Portflio</h4>
                                            <div>
                                                <button type="button" className="btn btn-outline-success rounded-pill btn-sm me-2 " onClick={
                                                    () => {
                                                        localStorage.removeItem("portflio")
                                                        window.location = '/addPortFilo'
                                                    }
                                                }><i
                                                    className="fa-solid fa-pen"></i></button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="">
                                                {this.state.data.portfilos.map((portfilo, index) => (
                                                    <div key={index} className="">

                                                        <div className="card col-12 mt-3">
                                                            <div className='profilePortfolioBtns'>
                                                                <button type="button" className="btn btn-outline-success btn-sm rounded-pill me-2" onClick={
                                                                    () => {
                                                                        localStorage.setItem("portfilo", JSON.stringify(portfilo))
                                                                        window.location = '/addPortFilo'
                                                                    }
                                                                }><i
                                                                    className="fa-solid fa-pen"></i></button>
                                                                <button type="button" className="btn btn-outline-danger rounded-pill btn-sm" onClick={
                                                                    () => {
                                                                        axios.post('http://127.0.0.1:8000/profile/delPortFilo/', {
                                                                            id: portfilo.id
                                                                        }).then(response => {
                                                                            this.setState(prevState => {
                                                                                const { data } = prevState;
                                                                                data.portfilos = this.removeItemOnce(data.portfilos, portfilo)
                                                                                return { data };
                                                                            },
                                                                                () => {

                                                                                })
                                                                        })
                                                                    }
                                                                }><i
                                                                    className="fa-solid fa-trash-can"></i></button>
                                                            </div>
                                                            <div className='ms-4 text-center'>
                                                                <img className="card-img-top" src={"data:image/*;base64," + portfilo.image} alt="Card image cap" style={{ width: '150px' }} />

                                                                <div className="card-body">
                                                                    <h5 className="card-title">{portfilo.title}</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                ))}

                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    <div id='History_work'>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4 className="mb-0">History work</h4>

                                        </div>
                                        <div>
                                            <div className=" ">
                                                <div className="row d-flex ">
                                                    {this.state.data.history_work.map((history_work1, index) => (
                                                        <div key={index} className="col-md-6">
                                                            <div className="card ms-1 me-1 mt-3">
                                                                <div className="text-center mt-3">
                                                                    <h5 className="">{history_work1.location}</h5>
                                                                </div>
                                                                <div className="ms-3">
                                                                    <p className="">{history_work1.date}</p>
                                                                </div>
                                                                <div className="ms-3">
                                                                    <p className="">{history_work1.cost}</p>
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
                                            <h4 className=" mb-3">My Skills</h4>
                                            <div>

                                                <button type="button" className="btn btn-outline-success btn-sm rounded-pill me-2" onClick={
                                                    () => {

                                                        document.getElementById('id03').style.display = 'block'
                                                    }
                                                }><i
                                                    className="fa-solid fa-pen"></i></button>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <ul className="list-inline">
                                                    {this.state.data.skills.map((skill, index) => (
                                                        <li className='list-inline-item' key={index}>
                                                            <span class="badge rounded-pill bg-success fs-6  m-1">{skill}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <hr />
                                    <div className="row">


                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h4 className="mb-0 mb-3">My Services</h4>
                                            <div>

                                                <button type="button" className="btn btn-outline-success btn-sm rounded-pill me-2" onClick={
                                                    () => {

                                                        document.getElementById('id04').style.display = 'block'
                                                    }
                                                }><i
                                                    className="fa-solid fa-pen"></i></button>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <ul className="list-inline">
                                                    {this.state.data.services.map((service, index) => (
                                                        <li className='list-inline-item' key={index}>
                                                            <span class="badge rounded-pill bg-success fs-6  m-1">{service}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <hr />
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4>My Work Experience</h4>
                                            <div>
                                                <button id="con" type="button" className="btn btn-outline-success rounded-pill btn-sm me-2 " onClick={
                                                    () => {
                                                        this.setState({
                                                            title: '',
                                                            company: '',
                                                            location: '',
                                                            is_work: false,
                                                            start_date: '',
                                                            end_date: '',
                                                            start_date_error: '',
                                                            error: '',
                                                            description: ''
                                                        })
                                                        document.getElementById('id05').style.display = 'block'
                                                    }
                                                }><i className="fa-solid fa-plus"></i></button>
                                            </div>

                                        </div>
                                        <ul className="list-unstyled">
                                            {this.state.data.experiecnces.map((experiecnce, index) => (
                                                <li className="" key={index}>

                                                    <div className="position-relative container-border2 text-center my-4">

                                                        <div className=" mt-3">
                                                            <h3 className="mb-34 mt-3">{experiecnce.title}</h3>
                                                            <div className='profileWorkExpBtns'>
                                                                <button type="button"
                                                                    className="btn btn-outline-success btn-sm rounded-pill me-2" onClick={
                                                                        () => {
                                                                            axios.post('http://127.0.0.1:8000/profile/getExperience/', {
                                                                                id: experiecnce.id
                                                                            }).then(response => {

                                                                                console.log(response.data.exp.title)
                                                                                this.setState({
                                                                                    title: response.data.exp.title,
                                                                                    company: response.data.exp.company,
                                                                                    location: response.data.exp.location,
                                                                                    is_work: response.data.exp.is_current_work_in_company,
                                                                                    start_date: response.data.exp.start_date,
                                                                                    end_date: response.data.exp.end_date,
                                                                                    description: response.data.exp.description,
                                                                                    id_exp_update: experiecnce
                                                                                })
                                                                                document.getElementById('id05').style.display = 'block'
                                                                            })
                                                                        }
                                                                    }><i
                                                                        className="fa-solid fa-pen" ></i></button>
                                                                <button type="button" className="btn btn-outline-danger rounded-pill btn-sm" onClick={
                                                                    () => {
                                                                        axios.post('http://127.0.0.1:8000/profile/delete_experience/', {
                                                                            exp_id: experiecnce.id,
                                                                            id: localStorage.getItem("uid")
                                                                        }).then(response => {

                                                                            this.setState(prevState => {
                                                                                const { data } = prevState;
                                                                                data.experiecnces = this.removeItemOnce(data.experiecnces, experiecnce)
                                                                                return { data };
                                                                            },
                                                                                () => {

                                                                                })

                                                                        })
                                                                    }
                                                                }><i
                                                                    className="fa-solid fa-trash-can" ></i></button>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-start ms-3">{experiecnce.company}</p>
                                                        <p className="text-muted text-start ms-3">{experiecnce.description}</p>
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

                    <div className="container-border my-4 p-4 row">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="mb-0">Certifications</h4>
                            <div>

                                <button type="button" className="btn btn-outline-success btn-sm rounded-pill" onClick={
                                    () => {

                                        document.getElementById('id07').style.display = 'block'
                                    }
                                }><i
                                    className="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                        {this.state.data.certifications.map((certification, index) => (
                            <div key={index} className="col-md-6 mt-2  ">
                                <div className="m-2 CertificateSectionFree ">

                                    <h5 className="mb-3 ms-3 mt-3 text-center">{certification.provider}</h5>
                                    <div className=' ms-3 mt-3'>
                                        <button type="button" className="btn btn-outline-danger rounded-pill btn-sm Employement" onClick={
                                            () => {
                                                axios.post('http://127.0.0.1:8000/profile/delcertificate/', {
                                                    id: certification.id
                                                }).then(response => {
                                                    this.setState(prevState => {
                                                        const { data } = prevState;
                                                        data.certifications = this.removeItemOnce(data.certifications, certification)
                                                        return { data };
                                                    },
                                                        () => {

                                                        })
                                                })
                                            }
                                        }><i
                                            className="fa-solid fa-trash-can"></i></button>
                                    </div>
                                    <p className="ms-3">{certification.certification_type.name}</p>
                                    <p className="ms-3 mt-3">{certification.description}</p>
                                </div>

                            </div>

                        ))}






                    </div>

                    <div className="container-border my-4 p-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="mb-0">My Employment History</h4>
                            <div>

                                <button type="button" className="btn btn-outline-success btn-sm rounded-pill" onClick={
                                    () => {
                                        this.setState({
                                            title: '',
                                            company: '',
                                            location: '',
                                            is_work: false,
                                            start_date: '',
                                            end_date: '',
                                            start_date_error: '',
                                            error: '',
                                            description: ''
                                        })
                                        document.getElementById('id08').style.display = 'block'
                                    }
                                }><i
                                    className="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                        {this.state.data.empolumentHistory.map((empolumentHistory1, index) => (
                            <div key={index} className="col-md-6 mt-2">
                                <div className="m-2 CertificateSectionFree">

                                    <div>
                                        <h4 className="mb-3 ms-3 mt-3 text-center">{empolumentHistory1.title}</h4>
                                        <div className=' ms-3 mt-3'>
                                        <button type="button" className="btn btn-outline-danger rounded-pill btn-sm Employement" onClick={
                                            () => {
                                                axios.post('http://127.0.0.1:8000/profile/delHistoryEmpl/', {
                                                    id: empolumentHistory1.id
                                                }).then(response => {
                                                    this.setState(prevState => {
                                                        const { data } = prevState;
                                                        data.empolumentHistory = this.removeItemOnce(data.empolumentHistory, empolumentHistory1)
                                                        return { data };
                                                    },
                                                        () => {

                                                        })
                                                })
                                            }
                                        }><i
                                            className="fa-solid fa-trash-can"></i></button>
                                            </div>
                                    </div>
                                    <p className="ms-3 ">{empolumentHistory1.location}</p>
                                    <p className="ms-3 mt-3">{empolumentHistory1.description}</p>
                                </div>

                            </div>

                        ))}




<hr/>
          <h3>Reviews</h3>
          {this.state.reviews.map(ele=>{
            return (
              <div>
                 <div>
          <div class="ratings">
              {this.calRate(ele.rate)?(this.calRate(ele.rate).map(ele=>{
                if(ele==1){
                  return <i class="fa fa-star rating-color"></i>
                }else{
                  return  <i class="fa fa-star"></i>
                }
              })):(<div></div>)}
            </div>
            <p>{ele.review}</p>
</div>
<br/>
              </div>
            )
          })}

                    
                    </div>




                </div>
                <Footer />
                <div id="id02" class="mamodal rounded">

                    <form class="mamodal-content maanimate rounded p-3">
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

                            <textarea className='w-100 form-control' type="text" placeholder="Enter Username" name="uname" required rows="5" onChange={
                                (e) => {

                                    this.setState({ overview: e.target.value })

                                }
                            } value={this.state.overview
                            }>
                            </textarea>
                        </div>

                        <div class="container myconatiner rounded">
                            <button type="button" onclick="document.getElementById('id02').style.display='none'" class="macancelbtnC btn btn-light text-success border border-success mb-5 mt-3 me-3" onClick={
                                () => {
                                    document.getElementById('id02').style.display = 'none'
                                }
                            }>Cancel</button>
                            <button type="button" onclick="document.getElementById('id02').style.display='none'" class="macancelbtn btn btn-success text-light  mb-5 mt-3" onClick={() => {
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
                <div id="id03" class="mamodal rounded  ">

                    <form class="mamodal-content maanimate rounded" onSubmit={
                        (e) => {
                            e.preventDefault()
                        }
                    }>
                        <div class="maimgcontainer">
                            <span onClick={
                                () => {
                                    document.getElementById('id03').style.display = 'none'
                                }
                            } class="close" title="Close Modal">&times;</span>

                        </div>

                        <div class="container myconatiner pt-4">
                            <h3 class="text-left ml-4">Edit your skills </h3>
                            <div class="container myconatiner">
                                <h4>Add skills</h4>
                                <p>Add skills you want to add </p>
                            </div>
                            {this.state.defaultSkills.length > 0 ? (
                                <Select
                                    closeMenuOnSelect={false}
                                    components={this.animatedComponents}
                                    defaultValue={this.state.defaultSkills}
                                    isMulti
                                    name="colors"
                                    options={this.state.optionsSkills}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange={
                                        (e) => {
                                            this.setState({ defaultSkills: e })
                                        }
                                    }
                                />
                            ) : (<div></div>)
                            }

                        </div>

                        <div class="container myconatiner rounded mt-4">
                            <div className="text-center">
                                <div className={this.state.typeErro}>
                                    {this.state.msg}
                                </div></div>
                            <button type="button" onClick={
                                () => {
                                    document.getElementById('id03').style.display = 'none'
                                }
                            } className="macancelbtnC btn btn-light text-success border border-success mb-5 mt-3 me-3">Cancel</button>
                            <button type="button" className="macancelbtn btn btn-success text-light mb-5 mt-3 me-3" onClick={
                                () => {
                                    if (this.state.defaultSkills.length > 4) {
                                        this.setState(prevState => {
                                            this.setState({ typeErro: '' })
                                            this.setState({ msg: '' })
                                            const { data } = prevState;
                                            var list = []
                                            this.state.defaultSkills.forEach(element => {
                                                list.push(element.label)

                                            })
                                            data.skills = list;
                                            return { data };
                                        },
                                            () => {

                                                axios.post('http://127.0.0.1:8000/profile/updateSkills/', {
                                                    id: localStorage.getItem("uid"),
                                                    skills: this.state.defaultSkills
                                                }).then(response => {
                                                    document.getElementById('id03').style.display = 'none'
                                                })

                                            })

                                    } else {
                                        this.setState({ typeErro: 'alert alert-danger' })
                                        this.setState({ msg: 'select at least 5' })
                                    }
                                }
                            }>Save</button>

                        </div>
                    </form>
                </div>

                <div id="id04" class="mamodal rounded  ">

                    <form class="mamodal-content maanimate rounded" onSubmit={
                        (e) => {
                            e.preventDefault()
                        }
                    }>
                        <div class="maimgcontainer">
                            <span onClick={
                                () => {
                                    document.getElementById('id04').style.display = 'none'
                                }
                            } class="close" title="Close Modal">&times;</span>

                        </div>

                        <div class="container myconatiner pt-4">
                            <h3 class="text-left ml-4">Edit your title </h3>
                            <div class="container myconatiner">
                                <h4>Your title</h4>
                                <p>Enter a single sentence description of your professional skills/experience (e.g. Expert Web Designer with Ajax experience) </p>
                            </div>
                            {this.state.defaultServices.length > 0 ? (
                                <Select
                                    closeMenuOnSelect={false}
                                    components={this.animatedComponents}
                                    defaultValue={this.state.defaultServices}
                                    isMulti
                                    name="colors"
                                    options={this.state.optionsServices}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange={
                                        (e) => {
                                            this.setState({ defaultServices: e })
                                        }
                                    }
                                />
                            ) : (<div></div>)
                            }

                        </div>

                        <div class="container myconatiner rounded mt-4">
                            <div className="text-center">
                                <div className={this.state.typeErroServices}>
                                    {this.state.msgServices}
                                </div></div>
                            <button type="button" onClick={
                                () => {
                                    document.getElementById('id03').style.display = 'none'
                                }
                            } class="macancelbtnC btn btn btn-light text-success border border-success mb-5 mt-3 me-3">Cancel</button>
                            <button type="button" class="macancelbtn btn btn-success text-light  mb-5 mt-3 me-3" onClick={
                                () => {
                                    if (this.state.defaultServices.length > 4) {
                                        this.setState(prevState => {
                                            this.setState({ typeErroServices: '' })
                                            this.setState({ msgServices: '' })
                                            const { data } = prevState;
                                            var list = []
                                            this.state.defaultServices.forEach(element => {
                                                list.push(element.label)

                                            })
                                            data.services = list;
                                            return { data };
                                        },
                                            () => {

                                                axios.post('http://127.0.0.1:8000/profile/updateservices/', {
                                                    id: localStorage.getItem("uid"),
                                                    services: this.state.defaultServices
                                                }).then(response => {
                                                    document.getElementById('id04').style.display = 'none'
                                                })

                                            })

                                    } else {
                                        this.setState({ typeErroServices: 'alert alert-danger' })
                                        this.setState({ msgServices: 'select at least 5' })
                                    }
                                }
                            }>Save</button>

                        </div>
                    </form>
                </div>

                <form id="id05" class="needs-validation mamodal" onSubmit={

                    (event) => {
                        event.preventDefault()
                        if (!this.state.error_end && !this.state.start_date_error) {
                            if (this.state.id_exp_update) {
                                this.update_experiences()
                                document.getElementById('id05').style.display = 'none'
                            } else {
                                this.add_experiences()
                                document.getElementById('id05').style.display = 'none'
                            }
                        }
                    }

                } novalidate>

                    <div className=" formx form-content animate p-5">
                        <div class="maimgcontainer">
                            <span class="close" onClick={
                                () => {

                                    document.getElementById('id05').style.display = 'none'
                                }
                            }>&times;</span>

                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Title:</label>
                            <input type="text" value={this.state.title} className="form-control" id="title" placeholder="Enter Title" name="Title" onChange={(e) => {
                                this.setState({ title: e.target.value })
                            }} required />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">company:</label>
                            <input type="text" value={this.state.company} className="form-control" id="company" placeholder="Enter company" name="company" onChange={(e) => {
                                this.setState({ company: e.target.value })
                            }} required />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">location:</label>
                            <input type="text" value={this.state.location} className="form-control" id="location" placeholder="Enter location" name="location" onChange={(e) => {
                                this.setState({ location: e.target.value })
                            }} required />
                        </div>

                        <div class="form-check p-5">
                            <input id='checkbox_iswork' value={this.state.is_work} class='messageCheckbox' type='checkbox' onClick={
                                () => {
                                    this.setState({
                                        is_work: !this.state.is_work
                                    })
                                }
                            } />
                            <label class="messageCheckbox" for="is_work">
                                is current work in company
                            </label>
                        </div>
                        <div className="container row">
                            <div className="col-6">
                                <label htmlFor="start_date">Start</label>
                                <input id="start_date" value={this.state.start_date} className={"form-control " + this.state.start_date_error_} type="date" onChange={(e) => {
                                    var today = new Date();
                                    var mydate = new Date(e.target.value + " 0:00:00");


                                    if (today > mydate) {
                                        this.setState({ start_date: e.target.value })
                                        this.setState({ start_date_error: '' })
                                        this.setState({ start_date_error_: '' })
                                    }
                                    else {
                                        this.setState({ start_date_error: "invalid data start" })

                                        this.setState({ start_date_error_: 'is-invalid' })
                                    }

                                }} required />
                                <div className='text-danger'>
                                    {this.state.start_date_error}
                                </div>
                            </div>
                            <div className="col-6">
                                <label htmlFor="end_date">End</label>
                                <input id="end_date" value={this.state.end_date} className={"form-control " + this.state.error_end} type="date" onChange={(e) => {
                                    var today = new Date(this.state.start_date + " 0:00:00");
                                    var mydate = new Date(e.target.value + " 0:00:00");

                                    if (this.state.start_date) {
                                        if (today > mydate) {
                                            this.setState({ end_date_error: "invalid end date" })
                                            this.setState({ error_end: 'is-invalid' })
                                        }
                                        else {


                                            this.setState({ end_date: e.target.value })
                                            this.setState({ end_date_error: '' })
                                            this.setState({ error_end: '' })
                                        }
                                    }
                                    else {
                                        this.setState({ end_date_error: "enter start date first" })
                                        this.setState({ error_end: 'is-invalid' })
                                    }

                                }} required />
                                <div className='text-danger'>
                                    {this.state.end_date_error}
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Example textarea</label>
                            <textarea className="form-control" value={this.state.description} id="description" rows="3" onChange={(e) => {
                                this.setState({ description: e.target.value })
                            }} required></textarea>

                        </div>

                        <button class="btn btn-success w-100" type='submit' >Submit</button>
                    </div>
                </form>


                <form id="id06" class="needs-validation dialog" onSubmit={

                    (event) => {
                        event.preventDefault()
                        if (!this.state.error_tag_to) {

                            this.add_educations()
                        }
                    }

                } novalidate>
                    <div className=" formx form-content animate p-5">
                        <div class="maimgcontainer">
                            <span class="close" onClick={
                                () => {

                                    document.getElementById('id06').style.display = 'none'
                                }
                            }>&times;</span>

                        </div>
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

                        <button class="btn btn-success w-100" id='addEducation' type='submit'>Submit</button>
                    </div>
                </form>


                <form id="id07" class="needs-validation dialog" onSubmit={

                    (event) => {
                        event.preventDefault()
                        if (!this.state.cr_error_tag_to && this.state.id_type) {
                            this.add_Certificate()
                        }
                    }

                } novalidate>
                    <div className=" formx form-content animate p-5">
                        <div class="maimgcontainer">
                            <span class="close" onClick={
                                () => {

                                    document.getElementById('id07').style.display = 'none'
                                }
                            }>&times;</span>

                        </div>
                        <br />
                        <br />
                        <div>
                            <h6>Certificate Type</h6>
                            <Select
                                options={this.state.optionCertification}
                                onChange={
                                    (e) => {
                                        this.setState({ id_type: e.value })
                                    }
                                }
                                required />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="school" className="form-label">school:</label>
                            <input type="text" value={this.state.provider} className="form-control" id="school" placeholder="Enter provider" name="school" onChange={(e) => {
                                this.setState({ provider: e.target.value })
                            }} required />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="degree" className="form-label">certification_ID:</label>
                            <input type="text" value={this.state.certification_ID} className="form-control" id="degree" placeholder="Enter degree" name="degree" onChange={(e) => {
                                this.setState({ certification_ID: e.target.value })
                            }} required />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="study" className="form-label">certification_UR:</label>
                            <input type="text" value={this.state.certification_UR} className="form-control" id="study" placeholder="Enter study" name="study" onChange={(e) => {
                                this.setState({ certification_UR: e.target.value })
                            }} required />
                        </div>

                        <div className="container row">
                            <div className="col-6">
                                <label htmlFor="start_date">Start</label>
                                <input id="start_date" value={this.state.cr_start_date} className={"form-control " + this.state.cr_start_date_error_} type="date" onChange={(e) => {
                                    var today = new Date();
                                    var mydate = new Date(e.target.value + " 0:00:00");


                                    if (today > mydate) {
                                        this.setState({ cr_start_date: e.target.value })
                                        this.setState({ cr_start_date_error: '' })
                                        this.setState({ cr_start_date_error_: '' })
                                    }
                                    else {
                                        this.setState({ cr_start_date_error: "invalid data start" })

                                        this.setState({ cr_start_date_error_: 'is-invalid' })
                                    }

                                }} required />
                                <div className='text-danger'>
                                    {this.state.cr_start_date_error}
                                </div>
                            </div>
                            <div className="col-6">
                                <label htmlFor="end_date">End</label>
                                <input id="end_date" value={this.state.cr_end_date} className={"form-control " + this.state.cr_error_end} type="date" onChange={(e) => {
                                    var today = new Date(this.state.cr_start_date + " 0:00:00");
                                    var mydate = new Date(e.target.value + " 0:00:00");

                                    if (this.state.cr_start_date) {
                                        if (today > mydate) {
                                            this.setState({ cr_end_date_error: "invalid end date" })
                                            this.setState({ cr_error_end: 'is-invalid' })
                                        }
                                        else {


                                            this.setState({ cr_end_date: e.target.value })
                                            this.setState({ cr_end_date_error: '' })
                                            this.setState({ cr_error_end: '' })
                                        }
                                    }
                                    else {
                                        this.setState({ cr_end_date_error: "enter start date first" })
                                        this.setState({ cr_error_end: 'is-invalid' })
                                    }

                                }} required />
                                <div className='text-danger'>
                                    {this.state.cr_end_date_error}
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Example textarea</label>
                            <textarea value={this.state.cr_description} className="form-control" id="description2" rows="3" onChange={(e) => {
                                this.setState({ cr_description: e.target.value })
                            }} required></textarea>
                        </div>

                        <button class="btn btn-success w-100" id='addEducation' type='submit'>Submit</button>
                    </div>
                </form>


                <form id="id08" class="needs-validation mamodal" onSubmit={

                    (event) => {
                        event.preventDefault()
                        if (!this.state.end_date_error && this.state.start_date && this.state.end_date) {

                            this.addEmpolymentHistory()
                            document.getElementById('id08').style.display = 'none'


                        } else {
                            if (!this.state.start_date) {
                                this.setState({ start_date_error: "this is required" })
                            } else if (!this.state.end_date) {
                                this.setState({ end_date_error: "this is required" })
                            }
                        }
                    }

                } novalidate>

                    <div className=" formx form-content animate p-5">
                        <div class="maimgcontainer">
                            <span class="close" onClick={
                                () => {

                                    document.getElementById('id08').style.display = 'none'
                                }
                            }>&times;</span>

                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Title:</label>
                            <input type="text" value={this.state.title} className="form-control" id="title" placeholder="Enter Title" name="Title" onChange={(e) => {
                                this.setState({ title: e.target.value })
                            }} required />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">company:</label>
                            <input type="text" value={this.state.company} className="form-control" id="company" placeholder="Enter company" name="company" onChange={(e) => {
                                this.setState({ company: e.target.value })
                            }} required />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">location:</label>
                            <input type="text" value={this.state.location} className="form-control" id="location" placeholder="Enter location" name="location" onChange={(e) => {
                                this.setState({ location: e.target.value })
                            }} required />
                        </div>

                        <div class="form-check">
                            <input id='checkbox_iswork' value={this.state.is_work} class='messageCheckbox' type='checkbox' onClick={
                                () => {
                                    this.setState({
                                        is_work: !this.state.is_work
                                    })
                                }
                            } />
                            <label class="messageCheckbox" for="is_work">
                                is current work in company
                            </label>
                        </div>
                        <div className="container row">
                            <div className="col-6">
                                <label htmlFor="start_date">Start</label>
                                <MonthPickerInput
                                    minDate={[0, 1990]}
                                    maxDate={[11, 2023]}

                                    className={"form-control"}
                                    onChange={(maskedValue, selectedYear, selectedMonth) => {
                                        this.setState({ start_date: maskedValue })
                                        this.setState({ selectYear: selectedYear })
                                        this.setState({ selectedMonth: selectedMonth })
                                        this.setState({ end_date_error: '' })
                                        this.setState({ start_date_error: '' })

                                    }}
                                    required />
                                <div className='text-danger'>
                                    {this.state.start_date_error}
                                </div>
                            </div>
                            <div className="col-6">
                                <label htmlFor="end_date">End</label>
                                <MonthPickerInput
                                    minDate={[this.state.selectMonth, this.state.selectYear]}
                                    maxDate={[11, 2023]}
                                    className={"form-control"}
                                    onChange={(maskedValue, selectedYear, selectedMonth) => {
                                        if (this.state.start_date) {
                                            this.setState({ end_date: maskedValue })
                                            this.setState({ end_date_error: '' })
                                        } else {
                                            this.setState({ end_date_error: "select start date" })
                                        }
                                    }}
                                    required />
                                <div className='text-danger'>
                                    {this.state.end_date_error}
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Example textarea</label>
                            <textarea className="form-control" value={this.state.description} id="description" rows="3" onChange={(e) => {
                                this.setState({ description: e.target.value })
                            }} required></textarea>

                        </div>

                        <button class="btn btn-success w-100" type='submit' >Submit</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default Profile;