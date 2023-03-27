import axios from 'axios';
import React, { Component } from 'react';
import '../../css/job_details.css'
import Footer from '../../Profile/freelancer/Footer';
import NavBar from '../../Profile/freelancer/navbar';


class Job_details extends Component {
    constructor() {
        super()
        this.state = {
            data: '',
            id: 0,
            is_applay: false,
            cover: ''
        }


    }
    cal_Date(create_at) {
        var postDate = new Date(create_at);

        var currentDate = new Date();

        var timeDiff = postDate.getTime() - currentDate.getTime();


        var secondsDiff = Math.floor(timeDiff / 1000);
        var minutesDiff = Math.floor(secondsDiff / 60);
        var hoursDiff = Math.floor(minutesDiff / 60);


        var daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
        hoursDiff = hoursDiff % 24;
        minutesDiff = minutesDiff % 60;
        secondsDiff = secondsDiff % 60;

        var res = ""
        if (daysDiff) {
            res += daysDiff + "d "
        }
        if (hoursDiff) {
            res += hoursDiff + "h "
        }
        if (minutesDiff) {
            res += minutesDiff + "m "
        }
        if (secondsDiff) {
            res += secondsDiff + "s"
        }
        return res;

    }
    componentDidMount() {
        var arr = window.location.href.split('/')
        const studentId = arr[arr.length - 1]
        this.setState({ id: studentId })
        axios.post('http://localhost:8000/home/jobDetails/', {
            id: studentId
        }).then(res => {
            res.data.proposals.forEach(element => {
                if (element.id == localStorage.getItem("uid")) {
                    this.setState({ is_applay: true })
                }
            });

            this.setState({ data: res.data })
        })
    }
    render() {

        return (
            <div>
                <NavBar />
                <div class="container my-5">

                    <div class="row m-3">
                        <h3 className='fw-bold'>
                            Job details
                        </h3>

                    </div>
                    <div class="row ">
                        <div class="col-md-8">

                            <div class=" mt-5">
                                <h5><a href="#" class="btn btn-success rounded-pill px-4">{this.state.data.title}</a></h5>

                                <p class="text-muted">
                                    post at {
                                        this.cal_Date(this.state.data.create_at)


                                    }

                                </p>


                            </div>
                            <hr />
                            <div class="row">
                                <div class="row my-3 text-center">


                                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                                        <div class="carousel-indicators">
                                            {
                                                this.state.data ? (this.state.data.images.map((ele, ind) => {
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
                                                this.state.data ? (this.state.data.images.map((ele, ind) => {
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

                            </div>


                            <hr />
                            <div>
                                <p>{this.state.data.description}</p>


                            </div>
                            <hr />
                            <div class=" d-flex ">
                                <div class="w-50">
                                    <h6>
                                        {this.state.data.cost}$
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
                                        Skills and Expertise
                                    </h6>
                                    <div>
                                        {this.state.data ? (this.state.data.skills.map(ele => {
                                            return <span class="badge bg-secondary rounded-pill mx-1">{ele}</span>

                                        })) : (<div></div>)}
                                    </div>

                                </div>


                            </div>
                            <hr />
                            <div class="row">
                                <div class="col" className='abskill'>
                                    <h6>Activity on this job</h6>
                                    <div>
                                        <p class="text-muted small">Proposals: {this.state.data ? (this.state.data.proposals.length) : (<div></div>)}</p>

                                        <p class="text-muted small">Interviewing: 2</p>

                                    </div>

                                </div>

                            </div>



                        </div>
                        <div class="col-md-4 border">
                            <div class="card">
                                <div class="card-body ">
                                    <div class="d-grid gap-2 mb-3">
                                        <button type="button" class="btn btn-success rounded-pill" onClick={
                                            () => {
                                                window.location = 'proposal/' + this.state.id
                                            }
                                        } disabled={this.state.is_applay} >Apply Now</button>

                                        {this.state.is_applay ? (<button type="button" class="btn btn-success rounded-pill" onClick={
                                            () => {
                                                axios.post('http://127.0.0.1:8000/home/job_cover/', {
                                                    id: localStorage.getItem("uid"),
                                                    id_job: this.state.id
                                                }).then(res => {
                                                    console.log(res.data);
                                                    this.setState({ cover: res.data })
                                                    document.getElementById('id0p1').style.display = 'block'
                                                })

                                            }
                                        }>view cover</button>) : (<div></div>)}


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div id="id0p1" class="mamodal rounded">

                    <div class="mamodal-content maanimate rounded">
                        <div class="maimgcontainer">
                            <span class="close" onClick={
                                () => {

                                    document.getElementById('id0p1').style.display = 'none'
                                }
                            }>&times;</span>

                        </div>

                        <div class="container myconatiner pt-4">
                            <h3 class="text-left ml-4">your cover to {this.state.data.title}</h3>
                            <div class="container mycontainer">

                                <p>{this.state.cover.cover}</p>
                            </div>
                            <div id={"carouselExampleIndicators" + this.state.cover.id} class="carousel slide" data-bs-ride="true">
                                <div class="carousel-indicators">
                                    {
                                        this.state.cover ? (this.state.cover.images.map((ele, ind) => {
                                            if (ind == 0) {
                                                return (
                                                    <button type="button" id={"carouselExampleIndicators" + this.state.cover.id}
                                                        data-bs-slide-to={ind} class="active" aria-current="true"
                                                        aria-label="Slide 1"></button>
                                                )
                                            } else {
                                                return (
                                                    <button type="button" id={"carouselExampleIndicators" + this.state.cover.id}
                                                        data-bs-slide-to={ind} aria-current="true"
                                                        aria-label="Slide 1"></button>
                                                )
                                            }
                                        })) : (<div></div>)
                                    }

                                </div>
                                <div class="carousel-inner">
                                    {
                                        this.state.cover ? (this.state.cover.images.map((ele, ind) => {
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
                                    id={"carouselExampleIndicators" + this.state.cover.id} data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button"
                                    id={"carouselExampleIndicators" + this.state.cover.id} data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="input-group mb-3">
                                <div className='mt-4'></div>
                                <br />
                                <span class="input-group-text">Cost</span>
                                <input type="number" class="form-control" value={this.state.cover.cost_re} readOnly />
                                <input type="number" class="form-control" value={this.state.cover.cost_comp} readOnly />
                            </div>

                        </div>
                    </div>

                </div>

                <Footer />

            </div>
        )
    }


}
export default Job_details;