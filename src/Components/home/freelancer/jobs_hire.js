import React, { Component } from 'react';
import '../../css/cv_free.css';

import axios from 'axios';
import NavBar from '../../Profile/freelancer/navbar';

class JobS_Hire extends Component {
  constructor() {
    super();
    this.state={
        jobs:[],
        hire:'',
        job:''
    }

  }
  componentDidMount(){
    axios.post('http://127.0.0.1:8000/home/jobs_hire/',{
        id:localStorage.getItem("uid")
    }).then(res=>{
       
        this.setState({jobs:res.data})
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
        <NavBar url='http://127.0.0.1:8000/profile/get_details_free/'
        openMenu={()=>{
            window.location='/'
        }}/>
          <div className='row mb-5'>
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
                                                             return   <button type="button" data-bs-target={"#carouselExampleIndicators" + job.id} data-bs-slide-to={index} class="active" aria-current="true" aria-label="Slide 1"></button>
                                                            }else{
                                                              return  <button type="button" data-bs-target={"#carouselExampleIndicators" + job.id} data-bs-slide-to={index} aria-label="Slide 2"></button>
                                                            }
                                                    })}
                                                        
                                                    </div>
                                                    <div class="carousel-inner "
                                                        onClick={
                                                            () => {
                                                                axios.post('http://127.0.0.1:8000/home/job_hire_de/',
                                                                {
                                                                    id:localStorage.getItem("uid"),
                                                                    id_job:job.id
                                                                }).then(res=>{
                                                                    console.log({hire:res.data});
                                                                    this.setState({hire:res.data})
                                                                    this.setState({job:job})
                                                                    document.getElementById('id0p1').style.display = 'block'
                                                                    //console.log(res.data);
                                                                })
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
        <h3 class="text-left ml-4">Change hires</h3>
       <div class="input-group mb-3">
  <span class="input-group-text">Cost</span>
  <input type="text" class="form-control" value={this.state.hire.cost} readOnly/>
</div>
<h3>Client</h3>
{this.state.hire?(<div class="chip w-100">
  <img src={"http://localhost:8000"+this.state.hire.client.image} alt="Person" width="96" height="96"/>
  {this.state.hire.client.fname} {this.state.hire.client.lname}
</div> ):(<div></div>)}
<div class="btn-group w-100 p-4">
  <button className='w-50'>Chat</button>
  {this.state.hire.is_finish?(<div></div>):(<button className='w-50'onClick={
    ()=>{
        axios.post('http://localhost:8000/home/finish_job/',{
            id:this.state.hire.id
        }).then(res=>{
            if(res.data=='ok'){
                document.getElementById('id0p1').style.display = 'none'
            }
        })
    }
  } >Finish Job</button>)}
</div>
                            
    </div>
</div>
</div>
    </div>)
  }
}
export default JobS_Hire;