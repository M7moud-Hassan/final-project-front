import React, { Component } from 'react';
import '../../css/hme_free.css'
import { NavLink } from 'react-router-dom';
import NavBar from '../../Profile/freelancer/navbar';
import './windows'
import axios from 'axios';
import Error from '../../index/error';




class HomeFreeLancer extends Component {
  constructor() {
    super();
    this.state = {
        isMenu: false,
        data:[],
    }

  }
  componentDidMount(){
    axios.post('http://127.0.0.1:8000/home/detalis_free_home/',{
        id:localStorage.getItem("uid")
    }).then(response=>{
        console.log(response.dat);
        this.setState({data:response.data})
    })
  }
  settingS=() =>{
    this.setState({isMenu:true})
    const DoM = document.getElementById("setting")
    DoM.style.display = 'block'
}
XsettingS=()=> {
    this.setState({isMenu:false})
    const DoM = document.getElementById("setting")
    DoM.style.display = 'none'
}
  render(){
    if(localStorage.getItem('uid')){
    return (
        <div> <NavBar url='http://127.0.0.1:8000/profile/get_details_free/'
        openMenu={this.state.isMenu?(this.XsettingS):(this.settingS)}/>
         <div className='row'>
                        <div className=' col-sm-3 buttonSetting text-center' id='setting' >
                            <img className='littleSymbolImage' src={"http://localhost:8000"+this.state.data.image} />
                            <h4 className='mt-3'>{this.state.data.fname+" "+this.state.data.lname}</h4>
                            <hr />
                            <NavLink to={'/Freelancersettings'}><h5>Settings</h5></NavLink>
                            <NavLink onClick={
                                () => {
                                    localStorage.clear()
                                    window.location = "/"
                                }
                            }><h5 className='pb-4'>Logout</h5></NavLink>
                        </div></div>
         <div class="container my-4" onClick={
                (e)=>{
                  
                   
                    this.XsettingS()
                   
                }
            }>
            
        <div class="row">
            <div class=" col-md-9  px-2 ">
                <div class="row container-border my-2 ">
                    <h5 id="today_date">{this.state.data.date_now}</h5>
                    <h4>Welcome {this.state.data.fname}</h4>

                </div>
                <div class="row my-3">
                    <form class="form-inline">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search for jobs..."/>
                            <div class="input-group-append">
                                <button type="submit" class="btn btn-success"><i
                                        class="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                    </form>

                </div>
                <div class="container-border my-2 ">
                    <div>
                        <h5>Jobs you might like</h5>
                        <hr/>
                        {this.state.data.jobs?(this.state.data.jobs.map(element=>
                        {

                            var a = new Date(element.create_at)
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
                              var islike=false
                              var isDislike=false
                              element.likeId=0
                              
                              element.likes.forEach(ele => {
                                if(ele.id_free==localStorage.getItem("uid"))
                                {
                                    islike=true
                                    element.likeId=ele.id
                                    return;
                                }
                             });

                             element.dislikes.forEach(ele => {
                                if(ele.id_free==localStorage.getItem("uid"))
                                {
                                    isDislike=true
                                    element.likeId=ele.id
                                    return;
                                }
                             });
                                
                            
                            return(
                            <div>
                                <div class="container" >
                            <div class="row my-3">
                                <div class="col-md-6">
                                    <a href="#" class="text-center text-success">{element.title}</a>
                                </div>
                                <div class="col-md-6 text-end">


                                    <a name=""  class="btn btn-primary rounded-pill btn-sm" onClick={
                                        ()=> {
                                            
                                            if(document.getElementById("dislike"+element.id).style.color=='red'){
                                                axios.post('http://127.0.0.1:8000/home/removeDislike_job/',{
                                                id:localStorage.getItem('uid'),
                                                job_id:element.id,
                                                like_id:element.likeId
                                            }).then(response=>{
                                                document.getElementById("dislike"+element.id).style.color="white"
                                            })
                                        }else{
                                            
                                            if(document.getElementById("like"+element.id).style.color=='red'){
                                              
                                            axios.post('http://127.0.0.1:8000/home/removelike_job/',{
                                                id:localStorage.getItem('uid'),
                                                job_id:element.id,
                                                like_id:element.likeId
                                            }).then(response=>{
                                               if(response.data=='ok'){
                                                islike=false
                                                axios.post('http://127.0.0.1:8000/home/dislike_job/',{
                                                    id:localStorage.getItem('uid'),
                                                    job_id:element.id,
                                                  
                                                }).then(response=>{
                                                    if(response.data.res=='ok'){
                                                        isDislike=true
                                                        element.likeId=response.data.id
                                                        document.getElementById("like"+element.id).style.color="white"
                                                        document.getElementById("dislike"+element.id).style.color="red"
    
                                                    }
                                                                                                   }) 
                                               }
                                            }) 
                                        }else{
                                            axios.post('http://127.0.0.1:8000/home/dislike_job/',{
                                                    id:localStorage.getItem('uid'),
                                                    job_id:element.id,
                                                  
                                                }).then(response=>{
                                                    if(response.data.res='ok'){
                                                        isDislike=true
                                                        element.likeId=element.id
                                                        document.getElementById("dislike"+element.id).style.color="red"
    
                                                    }
                                                                                                   }) 
                                        }
                                        }
                                    }
                                }
                                        role="button"><i class="fa-solid fa-thumbs-down" id={"dislike"+element.id} style={
                                            {
                                                color:isDislike?"red":"white"
                                            }
                                        }></i></a>
                                    <a name="" id="" class="btn btn-success rounded-pill btn-sm" onClick={
                                        ()=>{
                                         
                                            if(document.getElementById("like"+element.id).style.color=='red'){
                                                console.log(element.likeId);
                                                axios.post('http://127.0.0.1:8000/home/removelike_job/',{
                                                    id:localStorage.getItem('uid'),
                                                    job_id:element.id,
                                                    like_id:element.likeId
                                                }).then(response=>{
                                                    console.log(response.data);
                                                    document.getElementById("like"+element.id).style.color="white"
                                                })
                                               
                                            }else{
                                                //
                                                if(document.getElementById("dislike"+element.id).style.color=='red'){
        
                                                axios.post('http://127.0.0.1:8000/home/removeDislike_job/',{
                                                    id:localStorage.getItem('uid'),
                                                    job_id:element.id,
                                                    like_id:element.likeId
                                                }).then(response=>{
                                                  
                                                   if(response.data=='ok'){
                                                    isDislike=false
                                                
                                                    axios.post('http://127.0.0.1:8000/home/like_job/',{
                                                        id:localStorage.getItem('uid'),
                                                        job_id:element.id,
                                                      
                                                    }).then(response=>{
                                                      
                                                       if(response.data.res=='ok'){
                                                        
                                                        islike=true
                                                        element.likeId=response.data.id
                                                        document.getElementById("like"+element.id).style.color="red"
                                                        document.getElementById("dislike"+element.id).style.color="white"

                                                       }                                                    }) 
                                                   }
                                                }) 
                                            }else{
                                                axios.post('http://127.0.0.1:8000/home/like_job/',{
                                                        id:localStorage.getItem('uid'),
                                                        job_id:element.id,
                                                      
                                                    }).then(response=>{
                                                        if(response.data.res=='ok'){
                                                            islike=true
                                                            element.likeId=response.data.id
                                                        document.getElementById("like"+element.id).style.color="red"

                                                        }
                                                                                                            }) 
                                            }
                                            }
                                        }
                                    }
                                        role="button"><i class="fa-solid fa-heart" id={"like"+element.id} style={
                                            {
                                                color:islike?"red":"white"
                                            }
                                        }></i></a>


                                </div>

                            </div>

                            <div class="row my-3">
                                <p class="text-muted small">Fixed-price - Intermediate - Est. Budget: ${element.cost} - Posted {convertMsToTime(b-a)} ago</p>


                            </div>

                            <div class="row my-3 text-center">
                                  <div id={"carouselExampleIndicators"+element.id} class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target={"#carouselExampleIndicators"+element.id} data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target={"#carouselExampleIndicators"+element.id} data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target={"#carouselExampleIndicators"+element.id} data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    {element.images.map((ele,index)=>{
        if(index==0)
        {
            return ( <div class="carousel-item active">
            <img src={"http://localhost:8000"+ele.image} class="d-block w-100 haimage" alt="..." />
          </div>)
        }else{
            return ( <div class="carousel-item">
            <img src={"http://localhost:8000"+ele.image} class="d-block w-100 haimage" alt="..." />
          </div>)
        }
    })}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target={"#carouselExampleIndicators"+element.id} data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target={"#carouselExampleIndicators"+element.id} data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                            </div>
                            <div class="row my-3">
                                <p>{element.description}</p>


                            </div>
                            <div class=" mb-1">

                                {element.skills.map(ele=>(
                                     <span class="badge bg-secondary rounded-pill">{ele.name}</span>
                                ))}
                             

                            </div>
                            <div class="row my-3">
                                <p class="text-muted">Proposals:{element.Proposals.length}</p>

                            </div>
                           {element.is_pyment?( <div class="row">
                              
                              <div class=" d-flex" style={{
                                  "paddingLeft": 0
                              }}>
                                  <div>
                                      <p class="text-muted px-2"><i class="fa-solid fa-check"></i> payment verifid
                                      </p>
                                  </div>
                                  <div>
                                      <i class="fa-solid fa-star"></i>
                                      <i class="fa-solid fa-star"></i>
                                      <i class="fa-solid fa-star"></i>
                                      <i class="fa-solid fa-star"></i>
                                      <i class="fa-solid fa-star"></i>
                                  </div>
                                  <div class="mx-3">

                                      <div>
                                          <i class="fa-solid fa-location-dot"></i>
                                          <span class="">Egypt</span>
                                      </div>

                                  </div>

                              </div>






                         

                      </div>):(<div></div>)}



                        </div>
                        <hr/>
                            </div>
                        )})):(<div></div>)}

                    </div>

                </div>

            </div>

            <div class=" col-md-3 px-2">
                <div class="container-border my-2">
                    <div class="card text-center">
                        <img src={"http://localhost:8000"+this.state.data.image} class="card-img-top rounded-pill mx-auto w-100" alt="..."/>
                        <div class="card-body ">
                            <NavLink to={'/profile_free'} class="text-center text-success">{this.state.data.fname} {this.state.data.lname}</NavLink>
                            <p class="card-text">{this.state.data.jobtitle}</p>
                        </div>
                        <hr/>
                        <div class="px-2">
                            <a href="#" class="text-center text-success">Profile Completeness:</a>
                            <div class="progress my-4">
                                <div class={"progress-bar  bg-success w-"+this.state.data.completeness+""} role="progressbar" aria-valuenow={this.state.data.completeness} aria-valuemin="0" aria-valuemax="100">{this.state.data.completeness}%</div>
                              </div>
                         
                        </div>
                        
                    </div>
                    <hr/>
                   



                </div>

                <div class="container-border my-2">
                    <div class="card text-center">
                        <div class="card-body ">
                            <div class="my-3">
                                <h5>Project Catalog</h5>
                                <a href="#" class="text-center text-success">My Project Dashboard</a>
                            </div>
                            <div class="my-3 ">
                                <a href="#" class="text-center text-success small">Create a Catalog project for</a>
                                <p class="small">clients to purchase instantly</p>

                            </div>

                        </div>
                    </div>



                </div>



            </div>

        </div>


    </div>
    </div>
  )
                                }else{
                                    return <Error/>
                                }
  }
}
export default HomeFreeLancer;