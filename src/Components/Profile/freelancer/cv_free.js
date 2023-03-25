import React, { Component } from 'react';
import NavBar from './navbar';
import Footer from './Footer';


class Cv_free extends Component {
  constructor() {
    super();

  }

  render() {

    return( 
      <div>

        <NavBar/>

        <section class="py-5 container-border my-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <img src="me.png" alt="Freelancer Profile Picture"
                        class="img-fluid rounded-circle mb-3"/>
                    <h4 class="mb-3">Mahmoud Abuelhasaan</h4>
                    <p class="lead mb-4">Web Developer</p>
                    <ul class="list-unstyled">
                        <li><strong>Location:</strong> San Francisco, CA</li>
                        <li><strong>Availability:</strong> Full-time</li>
                        <li><strong>Hourly Rate:</strong> $75/hr</li>
                        <li><strong>Phone number:</strong> 01120314278</li>
                    </ul>
                </div>
                <div class="col-md-8">
                    <h2 class="mb-4">About Me</h2>
                    <p class="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere lacus eu
                        quam interdum, a blandit ex molestie. Integer nec est vel augue aliquet elementum. Sed non ante
                        non massa faucibus vestibulum sed sit amet dui. Nam porttitor, nunc eget faucibus commodo, metus
                        nisl convallis ipsum, sit amet consequat velit velit nec nisl. </p>
                        <hr/>
                    <h2 class="mb-4">Skills</h2>
                    <div class="row mb-4">
                        <div class="col d-flex">
                            <h5 class="m-1"><span class="badge rounded-pill text-bg-primary">New!</span> </h5>
                            <h5 class="m-1"><span class="badge rounded-pill text-bg-primary">New!</span> </h5>
                            <h5 class="m-1"><span class="badge rounded-pill text-bg-primary">New!</span> </h5>

                            <h5 class="m-1"><span class="badge rounded-pill text-bg-primary">New!</span> </h5>

                            <h5 class="m-1"><span class="badge rounded-pill text-bg-primary">New!</span> </h5>

                            <h5 class="m-1"><span class="badge rounded-pill text-bg-primary">New!</span> </h5>




                        </div>
                        
                       
                       
                    </div>
                    <hr/>
                    <h2 class="mb-4">Portfolio</h2>
                    <div class="row mb-4">
                        <div class="col-md-4">
                          <div class="card shadow-sm m-1">
                            <img src="https://via.placeholder.com/500x250" class="card-img-top" alt="Project Image"/>
                            <div class="card-body">
                                <h5 class="card-title">Project 1</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button type="button" class="btn btn-success rounded-pill" data-bs-toggle="modal" data-bs-target="#portfolioModal">
                                  View Project
                                </button>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-4">
                          <div class="card shadow-sm m-1">
                            <img src="https://via.placeholder.com/500x250" class="card-img-top" alt="Project Image"/>
                            <div class="card-body">
                                <h5 class="card-title">Project 1</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button type="button" class="btn btn-success rounded-pill" data-bs-toggle="modal" data-bs-target="#portfolioModal">
                                  View Project
                                </button>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-4">
                          <div class="card shadow-sm m-1">
                            <img src="https://via.placeholder.com/500x250" class="card-img-top" alt="Project Image"/>
                            <div class="card-body">
                                <h5 class="card-title">Project 1</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button type="button" class="btn btn-success rounded-pill" data-bs-toggle="modal" data-bs-target="#portfolioModal">
                                  View Project
                                </button>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card shadow-sm m-1">
                                <img src="https://via.placeholder.com/500x250" class="card-img-top" alt="Project Image"/>
                                <div class="card-body">
                                    <h5 class="card-title">Project 1</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <button type="button" class="btn btn-success rounded-pill" data-bs-toggle="modal" data-bs-target="#portfolioModal">
                                      View Project
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                          <div class="card shadow-sm m-1">
                            <img src="https://via.placeholder.com/500x250" class="card-img-top" alt="Project Image"/>
                            <div class="card-body">
                                <h5 class="card-title">Project 1</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button type="button" class="btn btn-success rounded-pill" data-bs-toggle="modal" data-bs-target="#portfolioModal">
                                  View Project
                                </button>
                            </div>
                        </div>
                        </div>
                     
                    </div>
                    <hr/>
                    <div class="row">
                        <div class=" mb-4">
                          <h3 class="mb-3">Education</h3>
                          <div class="d-flex">
                            <div class="me-3">
                              <span class="display-4 text-primary"><i class="bi bi-award"></i></span>
                            </div>
                            <div>
                              <h5>Bachelor's Degree in Computer Science</h5>
                              <p class="text-muted">XYZ University</p>
                              <p class="text-muted">Graduated in May 2014</p>
                            </div>
                          </div>
                          <div class="d-flex">
                            <div class="me-3">
                              <span class="display-4 text-primary"><i class="bi bi-award"></i></span>
                            </div>
                            <div>
                              <h5>Master's Degree in Software Engineering</h5>
                              <p class="text-muted">ABC University</p>
                              <p class="text-muted">Graduated in May 2016</p>
                            </div>
                          </div>
                        </div>
                        <hr/>
                        <div class="">
                          <h3 class="mb-3">Certifications</h3>
                          <div class="d-flex mb-4">
                            <div class="me-3">
                              <span class="display-4 text-primary"><i class="bi bi-award"></i></span>
                            </div>
                            <div>
                              <h5>Certification in React Native</h5>
                              <p class="text-muted">Issued by Udemy</p>
                              <p class="text-muted">Completed in November 2020</p>
                            </div>
                          </div>
                          <div class="d-flex mb-4">
                            <div class="me-3">
                              <span class="display-4 text-primary"><i class="bi bi-award"></i></span>
                            </div>
                            <div>
                              <h5>Certification in Web Development</h5>
                              <p class="text-muted">Issued by Coursera</p>
                              <p class="text-muted">Completed in May 2019</p>
                            </div>
                          </div>
                        </div>
                      </div>

                    
                </div>
            </div>
        </div>

    </section>

  
<div class="modal fade" id="portfolioModal" tabindex="-1" aria-labelledby="portfolioModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="portfolioModalLabel">Project title</h5>
    
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div id="portfolioCarousel" class="carousel slide" data-bs-ride="carousel">

          <ol class="carousel-indicators">
            <li data-bs-target="#portfolioCarousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#portfolioCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#portfolioCarousel" data-bs-slide-to="2"></li>
          </ol>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://via.placeholder.com/500x250" class="d-block w-100" alt="Project Image 1"/>
            </div>
            <div class="carousel-item">
              <img src="https://via.placeholder.com/500x250" class="d-block w-100" alt="Project Image 2"/>
            </div>
            <div class="carousel-item">
              <img src="https://via.placeholder.com/500x250" class="d-block w-100" alt="Project Image 3"/>
            </div>
          </div>

          <a class="carousel-control-prev" href="#portfolioCarousel" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a class="carousel-control-next" href="#portfolioCarousel" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>

        <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis pharetra lorem, eget varius arcu. Praesent ac lectus vel enim aliquam facilisis. Sed vel sodales massa, eget fringilla velit. Ut vel nulla eu urna venenatis lacinia. In hac habitasse platea dictumst.</p>
        <p class="text-muted">Make in:2020-4-23</p>

        <a href="#" class="btn btn-primary rounded-pill">Visit Website</a>
      </div>
    </div>
  </div>
</div>
   
      


        <Footer/>
      </div>
    

        )
      }
    }
    export default Cv_free;

