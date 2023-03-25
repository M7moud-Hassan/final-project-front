import axios from 'axios';
import React, { Component } from 'react';
import '../../css/job_details.css'



class Job_details extends Component {
    constructor() {
        super()
        this.state = {
            data:'',
            id:0,
            is_applay:false
        }


    }
    calday(create_at){
        var a = new Date(create_at)
        var b = new Date()
        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
          }
          
          function convertMsToTime(milliseconds) {
            let seconds = Math.floor(milliseconds / 1000);
            let minutes = Math.floor(seconds / 60);
            let hours = Math.floor(minutes / 60);
          
            seconds = seconds % 60;
            minutes = minutes % 60;
          
            // 👇️ If you don't want to roll hours over, e.g. 24 to 00
            // 👇️ comment (or remove) the line below
            // commenting next line gets you `24:00:00` instead of `00:00:00`
            // or `36:15:31` instead of `12:15:31`, etc.
            hours = hours % 24;
          
            return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
              seconds,
            )}`;
          }
          return convertMsToTime(b-a)
    }
    componentDidMount(){
        const studentId = window.location.href.split('/')[4]
        this.setState({id:studentId})
        axios.post('http://localhost:8000/home/jobDetails/',{
            id:studentId
        }).then(res=>{
            res.data.proposals.forEach(element => {
                if(element.id==localStorage.getItem("uid")){
                    this.setState({is_applay:true})
                }
            });
            
            this.setState({data:res.data})
        })
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
                           
                            <div class=" mt-5">
                                <h5><a href="#" class="text-center text-success">{this.state.data.title}</a></h5>

                                <p class="text-muted">
                                    post at {
                                      this.calday(this.state.data.create_at) 
                                        
                                        
                                    }

                                    </p>


                            </div>
                            <hr />
                            <div class="row">
                                <div class="row my-3 text-center">


                                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                                        <div class="carousel-indicators">
                                            {
                                                this.state.data?(this.state.data.images.map((ele,ind)=>{
                                                    if(ind==0){
                                                        return(
                                                            <button type="button" data-bs-target="#carouselExampleIndicators"
                                                            data-bs-slide-to={ind} class="active" aria-current="true"
                                                            aria-label="Slide 1"></button>
                                                        )
                                                    }else{
                                                        return(
                                                            <button type="button" data-bs-target="#carouselExampleIndicators"
                                                            data-bs-slide-to={ind} aria-current="true"
                                                            aria-label="Slide 1"></button>
                                                        )
                                                    }
                                                })):(<div></div>)
                                            }
                                        
                                        </div>
                                        <div class="carousel-inner">
                                            {
                                                this.state.data?(this.state.data.images.map((ele,ind)=>{
                                                    if(ind==0){
                                                        return (
                                                            <div class="carousel-item active">
                                                <img src={"http://localhost:8000"+ele} class="d-block w-100 image_slid" alt="..." />
                                            </div>
                                                        )
                                                    }else{
                                                        return (
                                                            <div class="carousel-item">
                                                <img src={"http://localhost:8000"+ele} class="d-block w-100 image_slid" alt="..." />
                                            </div>
                                                        )
                                                    }
                                                })):(<div></div>)
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
                            <div class=" d-flex justify-content-around">
                                <div class="">
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
                                        {this.state.data?(this.state.data.skills.map(ele=>{
 return <span class="badge bg-secondary rounded-pill">{ele}</span>

                                        })):(<div></div>)}
                                                                         </div>

                                </div>


                            </div>
                            <hr />
                            <div class="row">
                                <div class="col"  className='abskill'>
                                    <h6>Activity on this job</h6>
                                    <div>
                                        <p class="text-muted small">Proposals: {this.state.data?(this.state.data.proposals.length):(<div></div>)}</p>
                                       
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
                                            ()=>{
                                                window.location='proposal/'+this.state.id
                                            }
                                        } disabled={this.state.is_applay} >Apply Now</button>


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