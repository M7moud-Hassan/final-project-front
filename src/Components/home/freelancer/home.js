import React, { Component } from 'react';
import '../../css/hme_free.css'
import { NavLink } from 'react-router-dom';
import NavBar from '../../Profile/freelancer/navbar';
import axios from 'axios';
import Error from '../../index/error';




class HomeFreeLancer extends Component {
  constructor() {
    super();
    this.state = {
       
        data:[],
        socket:null,
       
    }

  }
  cal_Date(create_at){
    var postDate = new Date(create_at);

var currentDate = new Date();

var timeDiff = postDate.getTime() - currentDate.getTime();


var secondsDiff = Math.floor(timeDiff / 1000);
var minutesDiff = Math.floor(secondsDiff / 60);
var hoursDiff = Math.floor(minutesDiff / 60);


var daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
hoursDiff = hoursDiff % 24;
minutesDiff = minutesDiff % 60;
secondsDiff = secondsDiff % 60;

var res=""
if(daysDiff){
    res+=daysDiff+"d "
}
if(hoursDiff){
    res+=hoursDiff+"h "
}
if(minutesDiff){
    res+=minutesDiff+"m "
}
if(secondsDiff){
    res+=secondsDiff+"s"
}
return res;

  }
  componentDidMount(){
    const newSocket = new WebSocket('ws://127.0.0.1:8000/ws/notifications/');
        newSocket.onopen = () => {
          console.log('WebSocket connected');
          this.setState({socket:newSocket})
          
      };
      
    newSocket.onclose = () => {
      console.log('WebSocket closed');
      this.setState({socket:null})
    };
    axios.post('http://127.0.0.1:8000/home/detalis_free_home/',{
        id:localStorage.getItem("uid")
    }).then(response=>{
      //  console.log(response.dat);
        this.setState({data:response.data})
    })
  }

  render(){
    if(localStorage.getItem('uid')){
        var type= localStorage.getItem("type");
    if(type=='user')
    {
       return (<Error/>)
    }else{
    return (
        <div> <NavBar/>
         
         <div class="container my-4" onClick={
                (e)=>{
                  
                   
                  
                   
                }
            }>
            
        <div class="row">
            <div class=" col-md-9  px-2 ">
                <div class="row container-border my-2 ">
                    <h5 id="today_date">{this.state.data.date_now}</h5>
                    <h4>Welcome {this.state.data.fname}</h4>

                </div>
                <div class="row my-3">
                    <form class="form-inline" onSubmit={
                        (e)=>{
                            e.preventDefault()
                            var value=document.getElementById('search_id').value
                            if (value)
                            {
                                window.location='/search/'+value
                            }
                        }
                    }>
                        <div class="input-group">
                            <input type="text" class="form-control" id='search_id' placeholder="Search for jobs..."/>
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
                            {element.Proposals.includes(Number(localStorage.getItem("uid")))?(<i className='fa fa-bookmark'></i>):(<div></div>)}
                               
                                <div class="container">
                            <div class="row my-3">
                                <div class="col-md-6">
                                    <NavLink onClick={
                                    ()=>{
                                        window.location='job_details/'+element.id
                                    }
                                } class="text-center text-success">{element.title}</NavLink>
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
                                              console.log(element.likeId);
                                            axios.post('http://127.0.0.1:8000/home/removelike_job/',{
                                                id:localStorage.getItem('uid'),
                                                job_id:element.id,
                                                like_id:element.likeId
                                            }).then(response=>{
                                               if(response.data=='ok'){

                                                //islike=false
                                                axios.post('http://127.0.0.1:8000/home/dislike_job/',{
                                                    id:localStorage.getItem('uid'),
                                                    job_id:element.id,
                                                  
                                                }).then(response=>{
                                                    if(response.data.res=='ok'){
                                                        this.state.socket.send(JSON.stringify(
                                                            {
                                                                "type": "websocket.send",
                                                                "data": {
                                                                    type:"websocket.send",
                                                                    sender:localStorage.getItem("uid"),
                                                                    recieve:element.client_id,
                                                                    payload:"add dislike on your job "+element.title
                                                                  }
                                                            }))
                                                       // isDislike=true
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
                                                        this.state.socket.send(JSON.stringify(
                                                            {
                                                                "type": "websocket.send",
                                                                "data": {
                                                                    type:"websocket.send",
                                                                    sender:localStorage.getItem("uid"),
                                                                    recieve:element.client_id,
                                                                    payload:"add dislike on your job "+element.title
                                                                  }
                                                            }))
                                                       // isDislike=true
                                                        element.likeId=response.data.id
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
                                               // console.log(element.likeId);
                                                axios.post('http://127.0.0.1:8000/home/removelike_job/',{
                                                    id:localStorage.getItem('uid'),
                                                    job_id:element.id,
                                                    like_id:element.likeId
                                                }).then(response=>{
                                                   // console.log(response.data);
                                                    document.getElementById("like"+element.id).style.color="white"
                                                })
                                               
                                            }else{
                                                //
                                                if(document.getElementById("dislike"+element.id).style.color=='red'){
                                                   // console.log(element.likeId);
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
                                                      //  console.log("send notifications");
                                                      
                                                      this.state.socket.send(JSON.stringify(
                                                        {
                                                            "type": "websocket.send",
                                                            "data": {
                                                                type:"websocket.send",
                                                                sender:localStorage.getItem("uid"),
                                                                recieve:element.client_id,
                                                                payload:"add like on your job "+element.title
                                                              }
                                                        }))
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
                                                            this.state.socket.send(JSON.stringify(
                                                                {
                                                                    "type": "websocket.send",
                                                                    "data": {
                                                                        type:"websocket.send",
                                                                        sender:localStorage.getItem("uid"),
                                                                        recieve:element.client_id,
                                                                        payload:"add like on your job "+element.title
                                                                      }
                                                                }))
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
                                <p class="text-muted small">Fixed-price - Intermediate - Est. Budget: ${element.cost} - Posted {this.cal_Date(element.create_at)} ago</p>


                            </div>

                            <div >
                                  <div id={"carouselExampleIndicators"+element.id} class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
  {element.images.map((ele,index)=>{
    if(index==0)
    {
        return( <button type="button" data-bs-target={"#carouselExampleIndicators"+element.id} data-bs-slide-to={index} class="active" aria-current="true" aria-label="Slide 1"></button>)
    }else{
        return (<button type="button" data-bs-target={"#carouselExampleIndicators"+element.id} data-bs-slide-to={index} aria-label="Slide 2"></button>)
    }
                        })}  </div>
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
                                }}else{
                                    return <Error/>
                                }
  }
}
export default HomeFreeLancer;