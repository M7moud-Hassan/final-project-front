import React, { Component } from 'react';
import '../../css/job_details.css'



class Job_details extends Component {
    constructor() {
        super()
        this.state = {

        }


    }
    render() {

        return (
            <div>

                <div class="container my-5">
                    <div class="row m-3">
                        <h3>
                            Job details
                        </h3>

                    </div>
                    <div class="row ">
                        <div class="col-md-8">
                            <h5>Odoo developer SAML CONNECTOR</h5>
                            <div class=" mt-5">
                                <h5><a href="#" class="text-center text-success">Python Developer</a></h5>

                                <p class="text-muted">Posted 2 days ago</p>


                            </div>
                            <hr />
                            <div class="row">
                                <div class="row my-3 text-center">


                                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                                        <div class="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to="0" class="active" aria-current="true"
                                                aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src="1.jpg" class="d-block w-100 image_slid" alt="..." />
                                            </div>
                                            <div class="carousel-item">
                                                <img src="2.PNG" class="d-block w-100" alt="..." />
                                            </div>
                                            <div class="carousel-item">
                                                <img src="3.jpg" class="d-block w-100" alt="..." />
                                            </div>
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in sapien sed mauris
                                    placerat tristique. Integer aliquam ex ac ipsum fringilla lobortis. Ut eu nunc bibendum,
                                    interdum neque non, sodales quam. Nullam consectetur nisl nec orci tristique, ut venenatis
                                    nulla iaculis. Sed faucibus aliquam tellus ut convallis.</p>


                            </div>
                            <hr />
                            <div class=" d-flex justify-content-around">
                                <div class="">
                                    <h6>
                                        100$
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
                            <div class="row">
                                <div class="col">
                                    <h6>
                                        Skills and Expertise
                                    </h6>
                                    <div>
                                        <span class="badge bg-secondary rounded-pill">skill 1</span>
                                        <span class="badge bg-secondary rounded-pill">skill 1</span>
                                        <span class="badge bg-secondary rounded-pill">skill 1</span>
                                        <span class="badge bg-secondary rounded-pill">skill 1</span>
                                    </div>

                                </div>


                            </div>
                            <hr />
                            <div class="row">
                                <div class="col">
                                    <h6>Activity on this job</h6>
                                    <div>
                                        <p class="text-muted small">Proposals: Less than 5</p>
                                        <p class="text-muted small">Last viewed by client: 10 hours ago</p>

                                        <p class="text-muted small">Interviewing: 2</p>

                                        <p class="text-muted small">Invites sent: 0</p>

                                        <p class="text-muted small">Unanswered invites: 0</p>

                                    </div>

                                </div>

                            </div>



                        </div>
                        <div class="col-md-4 border">
                            <div class="card">
                                <div class="card-body ">
                                    <div class="d-grid gap-2 mb-3">
                                        <button type="button" class="btn btn-success rounded-pill">Apply Now</button>


                                    </div>


                                    <h6 class="card-subtitle mb-2 text-muted">Send a proposal for: 6 Connects</h6>
                                    <p class="card-text text-muted">Available Connects: 70</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }


}
export default Job_details;