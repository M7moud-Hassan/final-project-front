import React, { Component } from 'react';
import '../../css/cv_free.css';

import axios from 'axios';
import NavBar from '../../Profile/freelancer/navbar';
import Footer from '../../index/Footer';


class JobS_Hire_Client extends Component {
    constructor() {
        super();
        this.state = {
            hirs: [],

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
        axios.post('http://127.0.0.1:8000/home/get_jobs_hire_client/', {
            id: localStorage.getItem("uid")
        }).then(res => {

            this.setState({ hirs: res.data })
        })
    }
    removeItemOnce(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }
    render() {
        return (<div>
            <NavBar />
            <div className='row mb-5'>
                {this.state.hirs.map(hire => (
                    <div className='col-md-4 mt-3'>
                        <div className='profileCards2 container pCards2 text-dark' >

                            <div className=' ps-3 mt-1 h4 text-muted'>
                                {hire.job.description}
                            </div>

                            <div class="row my-3 text-center">
                                <div id={"carouselExampleIndicators" + hire.job.id} className="carousel  " data-bs-ride="true">
                                    <div class="carousel-indicators">
                                        {hire.job.images.map((imgs, index) => {
                                            if (index == 0) {
                                                return <button type="button" data-bs-target={"#carouselExampleIndicators" + hire.job.id} data-bs-slide-to={index} class="active" aria-current="true" aria-label="Slide 1"></button>
                                            } else {
                                                return <button type="button" data-bs-target={"#carouselExampleIndicators" + hire.job.id} data-bs-slide-to={index} aria-label="Slide 2"></button>
                                            }
                                        })}

                                    </div>
                                    <div class="carousel-inner "
                                        onClick={
                                            () => {
                                                /*axios.post('http://127.0.0.1:8000/home/job_hire_de/',
                                                 {
                                                     id:localStorage.getItem("uid"),
                                                     id_job:job.id
                                                 }).then(res=>{
                                                     console.log({hire:res.data});
                                                     this.setState({hire:res.data})
                                                     this.setState({job:job})
                                                     document.getElementById('id0p1').style.display = 'block'
                                                     //console.log(res.data);
                                                 })*/
                                            }
                                        }
                                    >
                                        {hire.job.images.map((imgs, index) => {
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

                                    <button class="carousel-control-prev" type="button" data-bs-target={"#carouselExampleIndicators" + hire.job.id} data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target={"#carouselExampleIndicators" + hire.job.id} data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>
                            <div class="chip w-100">
                                <img src={"http://localhost:8000" + hire.free.user_image} alt="Person" width="96" height="96" />
                                {hire.free.first_name}  {hire.free.last_name}
                            </div>
                        </div>

                    </div>
                ))}

            </div>
            <Footer />
        </div>)
    }
}
export default JobS_Hire_Client;