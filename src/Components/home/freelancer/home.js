import React, { Component } from 'react';
import '../../js/hme_free'
import '../../css/hme_free.css'
import { NavLink } from 'react-router-dom';
import NavBar from '../../Profile/freelancer/navbar';
import './windows'




class HomeFreeLancer extends Component {
  constructor() {
    super();
    this.state = {
        isMenu: false,
    }
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
    return (
        <div> <NavBar url='http://127.0.0.1:8000/profile/get_details_free/'
        openMenu={this.state.isMenu?(this.XsettingS):(this.settingS)}/>
         <div className='row'>
                        <div className=' col-sm-3 buttonSetting text-center' id='setting' >
                            <img className='littleSymbolImage' src='../../images/person.png' />
                            <h4 className='mt-3'>mahmoud hassan</h4>
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
                    <h5 id="today_date"></h5>
                    <h4>Welcome Mahmoud</h4>

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
                        <div class="container" id="">
                            <div class="row my-3">
                                <div class="col-md-6">
                                    <a href="#" class="text-center text-success">python developer</a>


                                </div>
                                <div class="col-md-6 text-end">


                                    <a name="" id="" class="btn btn-primary rounded-pill btn-sm" href="#"
                                        role="button"><i class="fa-solid fa-thumbs-down"></i></a>
                                    <a name="" id="" class="btn btn-success rounded-pill btn-sm" href="#"
                                        role="button"><i class="fa-solid fa-heart"></i></a>


                                </div>

                            </div>

                            <div class="row my-3">
                                <p class="text-muted small">Fixed-price - Intermediate - Est. Budget: $10 - Posted 34
                                    minutes ago</p>


                            </div>

                            <div class="row my-3 text-center">
                                  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/11.jpg" class="d-block w-100 haimage" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./images/11.jpg" class="d-block w-100 haimage" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./images/11.jpg" class="d-block w-100 haimage" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                            </div>
                            <div class="row my-3">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sequi aliquam vitae,
                                    illum delectus iusto eveniet adipisci tempore cum magn
                                    i praesentium et possimus, deserunt reprehenderit unde eius dolorem in quisquam?</p>


                            </div>
                            <div class=" mb-1">

                                <span class="badge bg-secondary rounded-pill">skill 1</span>
                                <span class="badge bg-secondary rounded-pill">skill 2</span>
                                <span class="badge bg-secondary rounded-pill">skill 3</span>
                                <span class="badge bg-secondary rounded-pill">skill 4</span>
                                <span class="badge bg-secondary rounded-pill">skill 1</span>
                                <span class="badge bg-secondary rounded-pill">skill 2</span>
                                <span class="badge bg-secondary rounded-pill">skill 3</span>
                                <span class="badge bg-secondary rounded-pill">skill 4</span>

                            </div>
                            <div class="row my-3">
                                <p class="text-muted">Proposals:less than 3</p>

                            </div>
                            <div class="row">
                              
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






                               

                            </div>



                        </div>

                    </div>

                </div>

            </div>

            <div class=" col-md-3 px-2">
                <div class="container-border my-2">
                    <div class="card text-center">
                        <img src="../../images/person.png" class="card-img-top rounded-pill mx-auto w-100" alt="..."/>
                        <div class="card-body ">
                            <NavLink to={'/profile_free'} class="text-center text-success">Mahmoud A.</NavLink>
                            <p class="card-text">full stack</p>
                        </div>
                        <hr/>
                        <div class="px-2">
                            <a href="#" class="text-center text-success">Profile Completeness:</a>
                            <div class="progress my-4">
                                <div class="progress-bar  bg-success w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
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
  }
}
export default HomeFreeLancer;