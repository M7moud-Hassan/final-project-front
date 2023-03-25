import React, { Component } from 'react';
import '../../css/proposel.css';
import NavBar from '../../Profile/freelancer/navbar';




class Proposal extends Component {
    constructor() {
        super()
        this.state = {

        }


    }
    render() {

        return (
            <div>
                 <NavBar/> 

                <div class="container my-4 ">
        <div class="row abskill ">
            <div class=" abskill d-flex justify-content-center">
                <h3 className='abskill'>
                    Submit a Proposal
                </h3>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            
            <div class=" col-md-9 px-2">
                    <form action="" method="post" novalidate>

                        <div class="container-border my-2">

                            <h5>Job details</h5>
                            <div class=" my-5">
                                <h5>Needed: Coder who can make screenrecords for my course (HTML / CSS / JAVASCRIPT /
                                    PYTHON)</h5>
                                <h6><span class="badge bg-secondary rounded-pill ">Front-End Development</span></h6>
                                <span class="text-muted small px-2">Posted Mar 22, 2023</span>
                            </div>


                            <div>
                                <h6>hi there,</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in sapien sed mauris
                                    placerat tristique. Integer aliquam ex ac ipsum fringilla lobortis. Ut eu nunc bibendum,
                                    interdum neque non, sodales quam. Nullam consectetur nisl nec orci tristique, ut
                                    venenatis
                                    nulla iaculis. Sed faucibus aliquam tellus ut convallis.</p>
                            </div>

                            <div>
                                <a class="text-success" href="#">View job posting</a>
                            </div>

                            <hr/>
                            <div class="row">
                                <div class="abskill">
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



                        </div>

                        <div class="container-border my-2">
                            <h5>Terms</h5>
                            <div class="container mt-3">
                                <div class="row">
                                    <div class="abskill">
                                        <h6>
                                            What is the rate you'd like to bid for this job?
                                        </h6>

                                    </div>


                                </div>
                                <div class="row">
                                    <div class="container col-md-8">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p class="text-muted small">Your profile rate: $20.00/hr</p>

                                            </div>
                                            <div class="col-md-6">
                                                <p class="text-muted small">Client’s budget: $10.00 - $10.00/hr</p>

                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p class="small">Hourly Rate</p>
                                                <p class="text-muted small">Total amount the client will see on your
                                                    proposal</p>

                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-group">
                                                  <input class="form-control" type="number" name="" id="" placeholder="0.00"/>
                                                  <div class="input-group-append">
                                                    <span class="input-group-text">$</span>
                                                  </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p class="small">You'll receive</p>
                                                <p class="text-muted small">The estimated amount you'll receive after
                                                    service fees</p>

                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-group">
                                                  <input class="form-control" type="number" name="" id="" placeholder="0.00"/>
                                                  <div class="input-group-append">
                                                    <span class="input-group-text">$</span>
                                                  </div>
                                                </div>
                                            </div>
                                        </div>




                                    </div>
                                    <div class="col-md-4 text-center">
                                        <div>
                                            <img src="dolar.png" class="img-fluid rounded-top" alt=""/>
                                            <p class="text-muted small">Includes Upwork Hourly Protection.</p>

                                        </div>


                                    </div>

                                </div>



                            </div>

                        </div>

                        <div class="container-border my-2">
                            <h5>Additional details</h5>
                            <div class="container mt-3">
                                <div class="row">
                                    <div class="mb-3">
                                        <label for="cover_leter" class="form-label">Cover Letter</label>
                                        <textarea class="form-control" name="cover_leter" id="cover_leter"
                                            rows="3"></textarea>
                                    </div>
                                    <hr />
                                    <div class="mb-3">
                                        <label for="file" class="form-label">Choose file</label>
                                        <input type="file" class="form-control" name="file" id="file"
                                            placeholder="upload project files" aria-describedby="fileHelpId"/>
                                        <div id="fileHelpId" class="form-text my-3">
                                            You may attach up to files under the size of 25 MB each. Include work samples or
                                            other documents
                                            to support your application. Do not attach your résumé — your Upwork profile is
                                            automatically forwarded
                                            to the client with your proposal.
                                        </div>
                                    </div>


                                </div>





                            </div>

                        </div>
                        <div class="container p-2">
                            <div class="row">
                                <div class="col-md-3">
                                    <button type="submit" class="btn btn-success form-control rounded-pill m-2">Send</button>
    
    
                                </div>
                                <div class="col-md-3">
                                    <button type="submit" class="btn btn-outline-danger form-control rounded-pill m-2">Cancel</button>
    
    
                                </div>

                            </div>
                           

                        </div>
                    </form>


            </div>
           

        </div>


    </div>
            </div>
           
        )
    }


}
export default Proposal;