import React, { Component } from 'react';
import "../../css/Home_free.css"
import "../../js/home_free.js"



class Home_free extends Component {
  constructor() {
    super();
    this.state = {
      

  }}
 


  

  render() {
    <div>

<div class="container my-4">
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
                              
                                    <div class=" d-flex" style="padding-left: 0;">
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
                        <img src="me.png" class="card-img-top rounded-pill mx-auto" style="width: 100px;" alt="..."/>
                        <div class="card-body ">
                            <a href="#" class="text-center text-success">Mahmoud A.</a>
                            <p class="card-text">full stack</p>
                        </div>
                        <hr/>
                        <div class="px-2">
                            <a href="#" class="text-center text-success">Profile Completeness:</a>
                            <div class="progress my-4">
                                <div class="progress-bar  bg-success" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
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
    



  
  }
}

export default Home_free;
