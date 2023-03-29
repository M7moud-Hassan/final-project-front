import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useState } from 'react';
import '../../../index.css'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const ClientProfile = () => {

    const [id, setId] = useState('');
    const [data, setData] = useState('');
    const setting = useRef('');
    const jobSection = useRef('');
    const JTitle = useRef('')
    const [isMenu, setIsMenu] = useState(false);
    const [emp, setEmp] = useState('');

    const [titlez, setTitle] = useState('');
    const [costz, setCost] = useState('');
    const [descriptionz, setDescription] = useState('');
    const [is_pymentz, setIs_pyment] = useState('');
    const [imagesz, setImages] = useState('');
    const animatedComponents = makeAnimated();
    const [optionsSkills, setOptionsSkills] = useState([]);
    const [selectionSkills, SetSelectionSkills] = useState([]);
    const [select_error, setselect_error] = useState('')
    const [jobs, setJobs] = useState([]);
    const [jobsDetails, setJobsDetails] = useState([]);
    const [applay, setApplay] = useState('');
    const [socket, setSocket] = useState(null);
    const [is_chat, setIsCaht] = useState(false)


    useEffect(() => {
        const newSocket = new WebSocket('ws://127.0.0.1:8000/ws/notificationsfree/');
        newSocket.onopen = () => {
            console.log('WebSocket connected');
            setSocket(newSocket)

        };

        newSocket.onclose = () => {
            console.log('WebSocket closed');
            setSocket(socket)
        };
        axios.post(`http://localhost:8000/home/latestJobs/`, { client_id: localStorage.getItem('uid') })
            .then(res => {
                setJobs(res.data);
                console.log(res.data)
                console.log(jobs)
                console.log(res.data.images)
            })
            .catch(err => {
                console.log(err.message);
            });
    }, []);


    let cal_Date = (create_at) => {
        const timestamp = create_at;
        const date = new Date(timestamp);
        const now = new Date();
        now.setHours(now.getHours() + 2);
        const diffMs = now.getTime() - date.getTime();
        const diffSeconds = Math.floor(diffMs / 1000);
        const diffMinutes = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        let diffString = '';

        if (diffDays > 0) {
            diffString += `${diffDays} day${diffDays > 1 ? 's' : ''} `;
        }
        if (diffHours > 0) {
            diffString += `${diffHours % 24} hour${diffHours % 24 > 1 ? 's' : ''} `;
        }
        if (diffMinutes > 0) {
            diffString += `${diffMinutes % 60} minute${diffMinutes % 60 > 1 ? 's' : ''} `;
        }
        if (diffSeconds > 0) {
            diffString += `${diffSeconds % 60} second${diffSeconds % 60 > 1 ? 's' : ''} `;
        }

        if (diffString === '') {
            diffString = 'just now';
        }

        return diffString;


    }
    useEffect(() => {
        if (localStorage.getItem('uid')) {
            if (localStorage.getItem('type') == 'user') {
                // setting.current.focus();
            }
        }
        axios.get("http://127.0.0.1:8000/auth/get_skills/").then(response => {
            var optionslist = []

            response.data.forEach(element => {
                optionslist.push({ value: element.id, label: element.name })

            });
            setOptionsSkills(optionslist)
        })

    }, []);

    useEffect(() => {
        jobSection.current.focus();
    }, []);

    function contactS() {
        const DoM = jobSection.current;
        DoM.style.display = 'block'
    }
    function XcontactS() {
        const DoM = jobSection.current;
        DoM.style.display = 'none'
    }




    function JTitleOP() {
        setIsMenu(true)
        const DoM = JTitle.current;
        DoM.style.display = 'block'
    }




    useEffect(() => {
        window.addEventListener('beforeunload', function () {
            if (localStorage.getItem("type") == "user") {
                axios.post('http://localhost:8000/chat/de_active_client/', {
                    id: localStorage.getItem("uid")
                }).then(res => {

                })
            } else {
                axios.post('http://localhost:8000/chat/de_active_Free/', {
                    id: localStorage.getItem("uid")
                })
            }
            return false;
        })
        axios.post(`http://127.0.0.1:8000/profile/clientDetails/`, { id: localStorage.getItem('uid') })
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, [id]);
    if (localStorage.getItem('uid')) {
        if (localStorage.getItem('type') == 'user') {

            return (
                <div>
                    <div className='container' onClick={
                        () => {
                            // document.getElementById("setting").style.display = 'none'
                        }
                    }>
                        <div className='mt-md-5 mt-xs-3 mt-1'>
                            <h1 className='text-dark'>Hi , {data.name} </h1>
                            <h3 className='text-dark'>Your workspace</h3>
                        </div>

                        {/* Add job */}
                        <div className="container w-75 jobModal  ms-5 border border-success " ref={jobSection}>
                            <div className=" container mt-3">
                                <form className="text-center " onSubmit={
                                    (e) => {
                                        e.preventDefault()
                                        if (selectionSkills.length == 0) {
                                            setselect_error("select skills")
                                        } else {
                                            axios.post(`http://localhost:8000/home/JobClient/`, {
                                                title: titlez,
                                                cost: costz,
                                                description: descriptionz,
                                                is_pyment: data.is_payments,
                                                images: imagesz,
                                                client_id: localStorage.getItem('uid'),
                                                skills: selectionSkills,
                                            }, {
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'multipart/form-data'
                                                }
                                            }).then(res => {

                                                setTitle('')
                                                setCost('')
                                                setDescription('')
                                                SetSelectionSkills([])
                                                setImages([])
                                                setselect_error('')
                                                XcontactS()
                                                window.location = '/'

                                            })
                                        }
                                    }
                                }>
                                    <h3>Add Job</h3>
                                    <div className="row text-start m-auto">
                                        <div className="col-md-6 mt-3 ">
                                            <label for="fname" className="">Job Title</label>
                                            <input type="text" className="form-control" id="fname" name="title" placeholder="Job Title"
                                                value={titlez}
                                                onChange={
                                                    (e) => {
                                                        setTitle(e.target.value)
                                                    }}
                                                required />
                                        </div>
                                        <div className="col-md-6 mt-3">
                                            <label for="cost"> Job Cost</label>
                                            <input type="number" id="cost" name="cost" className="form-control" placeholder="Job Cost"
                                                value={costz}
                                                onChange={
                                                    (e) => {
                                                        setCost(e.target.value)
                                                    }}
                                                required />
                                        </div>
                                    </div>
                                    <div className="row text-start">
                                        <div className="mt-3">
                                            <label for="description">Job Description </label>
                                            <textarea type="text" id="description" name="description" className="form-control" rows={8} placeholder="Job Description"
                                                value={descriptionz}
                                                onChange={
                                                    (e) => {
                                                        setDescription(e.target.value)
                                                    }}
                                                required />
                                        </div>
                                        <div className='mt-2'></div>
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            isMulti
                                            options={optionsSkills}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                            onChange={
                                                (e) => {
                                                    setselect_error('')
                                                    var m = []
                                                    e.forEach(element => {
                                                        m.push(element.value)
                                                    });
                                                    SetSelectionSkills(m)

                                                    // this.setState({ defaultSkills: e })
                                                }
                                            }
                                            required />
                                        <div className='text-danger'>
                                            {select_error}
                                        </div>
                                    </div>

                                    <div className="row text-start ">
                                        <div className="col-md-6 mt-3">
                                            <label for="images">Job Images</label>
                                            <input type="file" id="images" name="images" className="form-control" placeholder="Choose your images" multiple
                                                onChange={
                                                    (e) => {

                                                        setImages(e.target.files)
                                                    }}
                                                required />
                                        </div>
                                    </div>

                                    <input type="submit" value="Add Job" className="btn btn-success mb-3 mt-3" />
                                    <button className="btn btn-light text-success ms-5"
                                        onClick={XcontactS}
                                    >Return</button>
                                </form>
                            </div>
                        </div>

                        {/* Job Details Section   */}
                        <div className='JobDetails m-auto text-center w-md-75 mt-5 animate ' id="JobDetails" ref={JTitle}>
                            <div className=" p-4" >
                                <div class="maimgcontainer">
                                    <span class="close" onClick={
                                        () => {

                                            document.getElementById('JobDetails').style.display = 'none'
                                        }
                                    }>&times;</span>

                                </div>
                                {
                                    <div class="row ">
                                        <div class="">

                                            <div class=" mt-5">
                                                <h5><a href="#" class="text-center text-success">{jobsDetails.title}</a></h5>

                                                <p class="text-muted">
                                                    post at {
                                                        cal_Date(jobsDetails.create_at)


                                                    }

                                                </p>


                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="row my-3 text-center">


                                                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                                                        <div class="carousel-indicators">
                                                            {
                                                                jobsDetails.images ? (jobsDetails.images.map((ele, ind) => {
                                                                    if (ind == 0) {
                                                                        return (
                                                                            <button type="button" data-bs-target="#carouselExampleIndicators"
                                                                                data-bs-slide-to={ind} class="active" aria-current="true"
                                                                                aria-label="Slide 1"></button>
                                                                        )
                                                                    } else {
                                                                        return (
                                                                            <button type="button" data-bs-target="#carouselExampleIndicators"
                                                                                data-bs-slide-to={ind} aria-current="true"
                                                                                aria-label="Slide 1"></button>
                                                                        )
                                                                    }
                                                                })) : (<div></div>)
                                                            }

                                                        </div>
                                                        <div class="carousel-inner">
                                                            {
                                                                jobsDetails.images ? (jobsDetails.images.map((ele, ind) => {
                                                                    if (ind == 0) {
                                                                        return (
                                                                            <div class="carousel-item active">
                                                                                <img src={"http://localhost:8000" + ele} class="d-block w-100 image_slid" alt="..." />
                                                                            </div>
                                                                        )
                                                                    } else {
                                                                        return (
                                                                            <div class="carousel-item">
                                                                                <img src={"http://localhost:8000" + ele} class="d-block w-100 image_slid" alt="..." />
                                                                            </div>
                                                                        )
                                                                    }
                                                                })) : (<div></div>)
                                                            }

                                                        </div>
                                                        <button class="carousel-control-prev" type="button"
                                                            data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Previous</span>
                                                        </button>
                                                        <button class="carousel-control-next" type="button"
                                                            data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Next</span>
                                                        </button>
                                                    </div>


                                                </div>
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <div className='ms-3 me-3 likesBorder '>
                                                            <span className='me-2'><i class="fa fa-thumbs-up" aria-hidden="true"></i></span><span>number of likes</span><span className='ms-2'>{jobsDetails.numlikes}</span>
                                                        </div>
                                                    </div >
                                                    <div className='col-6'>
                                                        <div className='ms-3 me-3 likesBorder'>
                                                        <span className='me-2'><i class="fa-solid fa-thumbs-down"></i></span><span>number of Dislikes</span><span className='ms-2'>{jobsDetails.numDislike}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <hr />
                                            <div>
                                                <p>{jobsDetails.description}</p>


                                            </div>
                                            <hr />
                                            <div class=" d-flex justify-content-around">
                                                <div class="">
                                                    <h6>
                                                        {jobsDetails.cost}$
                                                    </h6>
                                                    <p class="text-muted">
                                                        Fixed-price

                                                    </p>

                                                </div>
                                                <div class="">
                                                    <h6>
                                                        Intermediate

                                                    </h6>
                                                    <p class="text-muted w10">
                                                        I am looking for a mix of experience and value
                                                    </p>


                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row" >
                                                <div class="col" className='abskill'>
                                                    <h6>
                                                        Skills and Expertience
                                                    </h6>
                                                    <div>
                                                        {jobsDetails.skills ? (jobsDetails.skills.map(ele => {
                                                            return <span class="badge bg-secondary rounded-pill m-1">{ele}</span>

                                                        })) : (<div></div>)}
                                                    </div>

                                                </div>


                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col" style={
                                                    {
                                                        textAlign: 'left'
                                                    }
                                                } className='abskill'>
                                                    <h6>Activity on this job</h6>
                                                    <div className='row mt-2 ' >
                                                        {jobsDetails.proposals ? jobsDetails.proposals.map(ele => {
                                                            return (<div class="chip col-md-4 col-6-sm  ms-3 me-2" style={
                                                                {
                                                                    cursor: "pointer"
                                                                }
                                                            } onClick={() => {

                                                                axios.post('http://localhost:8000/home/job_cover/', {
                                                                    id: ele.id,
                                                                    id_job: id
                                                                }).then(res => {
                                                                    setEmp(ele);
                                                                    setApplay(res.data)
                                                                    axios.post('http://localhost:8000/chat/checkChatBegin/', {
                                                                        client: localStorage.getItem("uid"),
                                                                        free: ele.id
                                                                    }).then(res => {

                                                                        setIsCaht(res.data)
                                                                        document.getElementById('id0p2').style.display = 'block'
                                                                    })

                                                                })
                                                                //window.location.href = 'http://localhost:3000/cv_free';
                                                            }}>
                                                                <img src={"http://localhost:8000" + ele.image} alt="Person" width="96" height="96" />
                                                                {ele.name}
                                                            </div>)

                                                        }) : (<div></div>)}



                                                    </div>

                                                </div>

                                            </div>



                                        </div>

                                    </div>

                                }

                            </div>
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

                                        <div className='text-center pCardsTwo'>
                                            <button className='btn btn-success btn-bg  rounded-pill'
                                                onClick={contactS}
                                            >
                                                <i className="fa-duotone fa-plus h3"></i>
                                            </button>
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
                                            <h4 className='p-3'>Stay safe on Allwork</h4>
                                        </div>
                                        <div className='w-75 p-3'>
                                            we are doing our best to keep you safe , and it's important you learn how to indenity  and report suspicious activity
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* section 2 */}


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
                                            <h4 className='text-dark'>Productivity</h4>
                                        </div>
                                        <img className='w-75' src='..\..\images\productivity.png' />
                                    </div>
                                </div>
                                <div className='col-md-3 col-sm-6 col-12 mt-3'>

                                    <div className='profileCards3 container pCards2 text-center'>
                                        <div className='mt-3'>
                                            <h4 className='p-3 text-dark'>Efficiency</h4>
                                        </div>
                                        <img className='w-75' src='./images/Efficiency.png' />
                                    </div>
                                </div>
                                <div className='col-md-3 col-sm-6 col-12 mt-3 text-center'>

                                    <div className='profileCards3 container pCards2'>
                                        <div className='mt-3 text-dark'>
                                            <h4 className='p-3'>Honesty</h4>
                                        </div>
                                        <img className='w-75' src='./images/honesty.png' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* section 4 */}
                        <div className='profileCards3 container pCards4 text-dark'>
                            <div className='mt-3 p-3'>
                                <h3>History Work</h3>
                            </div>
                            <div id='History_work'>
                                <div className="d-flex justify-content-between align-items-center mb-3">


                                </div>
                                <div>
                                    <div className=" ">
                                        <div className="row d-flex ">
                                            {data.history_work ? (data.history_work.map((history_work1, index) => (
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

                                            ))) : (<div></div>)}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* section 5 */}
                        <div className='mt-md-5 mt-xs-3 mt-1'>
                            <h1 className='text-dark'>Latest Jobs</h1>
                        </div>
                        <div className='mt-5'>

                            <div className='row mb-5'>
                                {jobs.map(job => (
                                    <div className='col-md-4 mt-3'>
                                        <div className='profileCards2 container pCards2 text-dark' >
                                            <div className='mt-3 p-3'><h3 className='text-center'>{job.title} </h3></div>

                                            <div class="row my-3 text-center">
                                                <div id={"carouselExampleIndicators" + job.id} className="carousel  " data-bs-ride="true">
                                                    <div class="carousel-indicators">
                                                        {job.images.map((imgs, index) => {
                                                            if (index == 0) {
                                                                return <button type="button" data-bs-target={"#carouselExampleIndicators" + job.id} data-bs-slide-to={index} class="active" aria-current="true" aria-label="Slide 1"></button>
                                                            } else {
                                                                return <button type="button" data-bs-target={"#carouselExampleIndicators" + job.id} data-bs-slide-to={index} aria-label="Slide 2"></button>
                                                            }
                                                        })
                                                        }



                                                    </div>
                                                    <div class="carousel-inner " style={
                                                        {
                                                            cursor: "pointer"
                                                        }
                                                    }
                                                        onClick={
                                                            () => {
                                                                if (job.id.length == 0) {
                                                                    console.log("no data")
                                                                } else {
                                                                    axios.post(`http://localhost:8000/home/jobDetails/`, { id: job.id })
                                                                        .then(res => {
                                                                            setJobsDetails(res.data);
                                                                            setId(job.id)
                                                                            console.log(job.id)
                                                                            console.log(jobsDetails)

                                                                            JTitleOP()
                                                                        })
                                                                        .catch(err => {
                                                                            console.log(err.message);
                                                                        })

                                                                }
                                                            }
                                                        }
                                                    >
                                                        {job.images.map((imgs, index) => {
                                                            if (index == 0) {
                                                                return (<div class="carousel-item active">
                                                                    <img src={"http://localhost:8000" + imgs.image} className="d-block w-100 haimage slide BorderRadiusClass" alt="..." />
                                                                </div>)
                                                            } else {
                                                                return (<div class="carousel-item">
                                                                    <img src={"http://localhost:8000" + imgs.image} className="d-block w-100 haimage slide BorderRadiusClass " alt="..." />
                                                                </div>)
                                                            }
                                                        })}
                                                    </div>

                                                    <button class="carousel-control-prev" type="button" data-bs-target={"#carouselExampleIndicators" + job.id} data-bs-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Previous</span>
                                                    </button>
                                                    <button class="carousel-control-next" type="button" data-bs-target={"#carouselExampleIndicators" + job.id} data-bs-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>

                        {/* Test Section */}

                    </div>
                    <div id="id0p2" class="mamodal rounded">

                        <div class="mamodal-content maanimate rounded">
                            <div class="maimgcontainer">
                                <span class="close" onClick={
                                    () => {

                                        document.getElementById('id0p2').style.display = 'none'
                                    }
                                }>&times;</span>

                            </div>

                            <div class="container myconatiner pt-4">
                                <h3 class="text-left ml-4">Cover</h3>
                                <p>{applay.cover}</p>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Cost</span>
                                    <input type="text" class="form-control" value={applay.cost_re} readOnly />
                                </div>
                                <div id={"carouselExampleIndicators" + applay.id} class="carousel slide" data-bs-ride="true">
                                    <div class="carousel-indicators">
                                        {
                                            applay.images ? (applay.images.map((ele, ind) => {
                                                if (ind == 0) {
                                                    return (
                                                        <button type="button" data-bs-target={"#carouselExampleIndicators" + applay.id}
                                                            data-bs-slide-to={ind} class="active" aria-current="true"
                                                            aria-label="Slide 1"></button>
                                                    )
                                                } else {
                                                    return (
                                                        <button type="button" data-bs-target={"#carouselExampleIndicators" + applay.id}
                                                            data-bs-slide-to={ind} aria-current="true"
                                                            aria-label="Slide 1"></button>
                                                    )
                                                }
                                            })) : (<div></div>)
                                        }

                                    </div>
                                    <div class="carousel-inner">
                                        {
                                            applay.images ? (applay.images.map((ele, ind) => {
                                                if (ind == 0) {
                                                    return (
                                                        <div class="carousel-item active">
                                                            <img src={"http://localhost:8000" + ele.image} class="d-block w-100 image_slid" alt="..." />
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div class="carousel-item">
                                                            <img src={"http://localhost:8000" + ele.image} class="d-block w-100 image_slid" alt="..." />
                                                        </div>
                                                    )
                                                }
                                            })) : (<div></div>)
                                        }

                                    </div>
                                    <button class="carousel-control-prev" type="button"
                                        data-bs-target={"#carouselExampleIndicators" + applay.id} data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button"
                                        data-bs-target={"#carouselExampleIndicators" + applay.id} data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <br />
                                <div style={
                                    {
                                        cursor: "pointer"
                                    }
                                } class="chip w-100" onClick={() => {

                                    window.location.href = 'http://localhost:3000/cv_free/' + jobsDetails.title + "/" + applay.id + "/" + applay.cost_re + "/" + emp.id;
                                }}>
                                    <img src={"http://localhost:8000" + emp.image} alt="Person" width="96" height="96" />
                                    {emp.name}
                                </div>
                                <div class="btn-group w-100 p-4">
                                    <button className='w-50 btn btn-success' onClick={
                                        () => {
                                            const newSocket = new WebSocket("ws://127.0.0.1:8000/ws_client/user" + localStorage.getItem("uid") + "/");
                                            newSocket.onopen = () => {
                                                if (!is_chat) {
                                                    newSocket.send(JSON.stringify({
                                                        "free": emp.id,
                                                        "client": localStorage.getItem("uid"),
                                                        "message": 'client open with you interview',
                                                        "room": "free" + emp.id
                                                    }))
                                                    window.location = "/chat/" + emp.id

                                                }
                                                window.location = "/chat/" + emp.id

                                            };


                                        }
                                    }>Chat</button>
                                    {is_chat ? <button className='w-50 btn btn-success' onClick={
                                        () => {
                                            axios.post('http://localhost:8000/home/hire/', {
                                                user: localStorage.getItem("uid"),
                                                free: emp.id,
                                                job: applay.id,
                                                cost: applay.cost_re,
                                            }).then(res => {
                                                if (res.data == 'ok') {
                                                    socket.send(JSON.stringify(
                                                        {
                                                            "type": "websocket.send",
                                                            "data": {
                                                                type: "websocket.send",
                                                                sender: localStorage.getItem("uid"),
                                                                recieve: emp.id,
                                                                payload: "hire you to job " + jobsDetails.title
                                                            }
                                                        }))
                                                    window.location = '/'
                                                }
                                            })
                                        }
                                    } >Hire</button> : (<div></div>)}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id="id0pp1" class="mamodal rounded">

                        <div class="mamodal-content maanimate rounded">
                            <div class="maimgcontainer">
                                <span class="close" onClick={
                                    () => {

                                        document.getElementById('id0pp1').style.display = 'none'
                                    }
                                }>&times;</span>

                            </div>

                            <div class="container myconatiner pt-4">

                                <div class="btn-group w-100 p-4">
                                    <button className='w-50'>Chat</button>
                                    <button className='w-50' onClick={
                                        () => {

                                        }
                                    } >Hire</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div >

            )
        }
        else {
            window.location = '/error'
        }
    } else {
        window.location = '/error'
    }
}


export default ClientProfile;
