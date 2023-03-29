import React, { Component } from 'react';
import Footer from './Footer';
import '../../css/cv_free.css';
import NavBar from './navbar';
import axios from 'axios';

class JobS_Proposal extends Component {
    constructor() {
        super();
        this.state = {
            jobs: []
        }

    }
    componentDidMount() {
        window.addEventListener('beforeunload',function(){
            if(localStorage.getItem("type")=="user"){
              axios.post('http://localhost:8000/chat/de_active_client/',{
                id:localStorage.getItem("uid")
              }).then(res=>{
               
              })
            }else{
              axios.post('http://localhost:8000/chat/de_active_Free/',{
                id:localStorage.getItem("uid")
              })
            }
            return false;
          })
        axios.post('http://127.0.0.1:8000/home/get_jobs_proposals/', {
            id: localStorage.getItem("uid")
        }).then(res => {

            this.setState({ jobs: res.data })
        })
    }
    render() {
        return (
        <div className=''> 
            <NavBar url='http://127.0.0.1:8000/profile/get_details_free/'
                openMenu={() => {
                    window.location = '/'
                }} />

            <div className='row mb-5 container p-4' style={
                {
                    cursor:"pointer"
                }
            }>
                {this.state.jobs.map(job => (
                    <div className='col-md-4 mt-3'>
                        <div className='profileCards2 container pCards2 text-dark' >

                            <div className=' ps-3 mt-1 h4 text-muted'>
                                {job.description}
                            </div>

                            <div class="row my-3 text-center">
                                <div id={"carouselExampleIndicators" + job.id} className="carousel  " data-bs-ride="true">
                                    <div class="carousel-indicators">
                                        {job.images.map((imgs, index) => {
                                            if (index == 0) {
                                                return <button type="button" data-bs-target={"#carouselExampleIndicators" + job.id} data-bs-slide-to={index} class="active" aria-current="true" aria-label="Slide 1"></button>
                                            } else {
                                                return <button type="button" data-bs-target={"#carouselExampleIndicators" + job.id} data-bs-slide-to={index} aria-label="Slide 2"></button>
                                            }
                                        })}

                                    </div>
                                    <div class="carousel-inner "
                                        onClick={
                                            () => {
                                                if (job.id.length == 0) {
                                                    console.log("no data")
                                                } else {
                                                    window.location = "job_details/" + job.id
                                                    console.log(job.id)
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
            <Footer/>
        </div>
        )
    }
}
export default JobS_Proposal;