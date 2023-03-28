import React, { Component } from 'react';
import Footer from './Footer';
import '../../css/cv_free.css';
import NavBar from './navbar';
import axios from 'axios';

class Cv_free extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
      error: null,
      port:'',
      free:0,
      job:0,
      cost:0,
      socket:null,
      title:'',
      is_chat:false,
    };
  }

  calRate(ine){
    var arr=[]
    for (let index = 0; index < 5; index++) {
      if(index<ine){
        arr.push(1)
      }else{
        arr.push(0)
      }
    }
    return arr;
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
    const newSocket = new WebSocket('ws://127.0.0.1:8000/ws/notificationsfree/');
        newSocket.onopen = () => {
          console.log('WebSocket connected');
          this.setState({socket:newSocket})
          
      };
      
    newSocket.onclose = () => {
      console.log('WebSocket closed');
      this.setState({socket:null})
    };
    var arr=window.location.href.split('/')
    const studentId = arr[arr.length-1]
    this.setState({free:studentId})
    this.setState({job: arr[arr.length-3]})
    this.setState({cost:arr[arr.length-2]})
    this.setState({title:arr[arr.length-4]})
    axios.post(`http://127.0.0.1:8000/profile/get_details_free/`,
      {

        "id": studentId
      })
      .then(response => {
        this.setState({ data: response.data, isLoading: false });
      })
      .catch(error => {
        this.setState({ error: error, isLoading: false });
      });

      axios.post('http://localhost:8000/chat/checkChatBegin/',{
        client:localStorage.getItem("uid"),
        free:this.state.free
      }).then(res=>{
        this.setState({is_chat:res.data})
      })
  }



  render() {
    const { data, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <NavBar/>
        <section class="py-5 container-border my-5">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <img src={data.image ? ("data:image/*;base64," + data.image) : ("./images/default.png")} alt="Freelancer Profile Picture"
                  class="img-fluid rounded-circle mb-3" />
                <h4 class="mb-3">{data.name}</h4>
                <p class="lead mb-4">{data.jobtitle}</p>
                <ul class="list-unstyled">
                  <li><strong>Location:</strong> {data.address}</li>
                  <li><strong>Availability:</strong> Full-time</li>

                 
                </ul>
              </div>
              <div class="col-md-8">
                <div className='row'>
                  <div className='col-md-6'>
                    <h2 class="mb-4">About Freelancer</h2>

                  </div>
                  <div className='col-md-6'>
                    <button type="button" class="btn btn-primary rounded-pill mx-1" onClick={
                      ()=>{
                        const newSocket = new WebSocket("ws://127.0.0.1:8000/ws_client/user"+localStorage.getItem("uid")+"/");
                        newSocket.onopen = () => {
                        if(!this.state.is_chat){
                          newSocket.send(JSON.stringify({
                            "free": this.state.free,
                            "client":localStorage.getItem("uid"),
                            "message":'client open with you interview',
                            "room":"free"+this.state.free
                          }))
                        }
                      };
                      
                    window.location="/chat/"+this.state.free
                      }
                    }>
                      Chat
                    </button>
                    {!this.state.is_chat?(<div></div>): <button type="button"  class="btn btn-success rounded-pill mx-1" onClick={
                      ()=>{
                        
                        axios.post('http://localhost:8000/home/hire/',{
                          user:localStorage.getItem("uid"),
                          free:this.state.free,
                          job:this.state.job,
                          cost:this.state.cost,
                        }).then(res=>{
                          if(res.data=='ok'){
                            this.state.socket.send(JSON.stringify(
                              {
                                  "type": "websocket.send",
                                  "data": {
                                      type:"websocket.send",
                                      sender:localStorage.getItem("uid"),
                                      recieve:this.state.free,
                                      payload:"hir you to  job "+this.state.title
                                    }
                              }))
                            window.location='/'
                          }
                        })
                      }
                    }>
                    Hire
                    </button>}


                  </div>

                </div>

                <p class="lead mb-4">{data.overView} </p>
                <div class="d-flex justify-content-between align-items-center">
            <div class="ratings">
              {this.calRate(this.state.data.rate)?(this.calRate(this.state.data.rate).map(ele=>{
                if(ele==1){
                  return <i class="fa fa-star rating-color"></i>
                }else{
                  return  <i class="fa fa-star"></i>
                }
              })):(<div></div>)}
            </div>
            <h5 class="review-count">{data.numReview} Reviews</h5>
        </div>
                <hr />
                <h2 class="mb-4">Skills</h2>
                <div class="row mb-4">
                  <div class=" d-flex">
                    {data.skills.map((skill, index) => (
                      <h5 key={index} class="m-1"><span class="badge rounded-pill text-bg-primary">{skill}</span> </h5>

                    ))}



                  </div>



                </div>
                <hr />
                <h2 class="mb-4">Portfolio</h2>
                <div class="row mb-4">
                  {data.portfilos.map((portfilo, index) => (
                    <div key={index} class="col-md-4 cv_portfilio" >
                      <div class="card shadow-sm m-1">
                        <img src={"data:image/*;base64," + portfilo.image} alt="Card image cap" style={{ width: '180px', height: '120px' }} class="card-img-top" />
                        <div class="card-body">
                          <h5 class="card-title">{portfilo.title}</h5>
                          <p class="card-text">{portfilo.description}</p>
                          
                          <button type="button" class="btn btn-success rounded-pill" onClick={
                            ()=>{
                             axios.post('http://localhost:8000/home/get_portfolio/',{
                              id:portfilo.id
                             }).then(res=>{
                             
                              this.setState({port:res.data});
                             })
                            }
                          } data-bs-toggle="modal" data-bs-target="#portfolioModal">
                            View Project
                          </button>
                        </div>
                      </div>
                    </div>

                  ))}


                </div>
                <hr />
                <div class="row">
                  <div class=" mb-4">
                    <h3 class="mb-3">Education</h3>
                    {data.educations.map((education, index) => (
                      <div key={index} class="d-flex">
                        <div class="me-3">
                          <span class="display-4 text-primary"><i class="bi bi-award"></i></span>
                        </div>
                        <div>
                          <h5>{education.school}</h5>
                          <p class="text-muted">{education.from_year}</p>

                        </div>
                      </div>

                    ))}


                  </div>
                  <hr />
                  <div class="">
                    <h3 class="mb-3">Certifications</h3>
                    {data.certifications.map((certification, index) => (
                      <div key={index} class="d-flex mb-4">
                        <div class="me-3">
                          <span class="display-4 text-primary"><i class="bi bi-award"></i></span>
                        </div>
                        <div>
                          <h5>{certification.provider}</h5>
                          <p class="text-muted">{certification.description}</p>

                        </div>
                      </div>

                    ))}


                  </div>
                </div>

              </div>
            </div>

          </div>
          <hr/>
          <h3>Reviews</h3>
          {this.state.data.reviews.map(ele=>{
            return (
              <div>
                                 <div class="chip">
  <img src={"http://localhost:8000"+ele.client.image} alt="Person" width="96" height="96"/>
  {ele.client.fname} {ele.client.lname}
</div> 
                 <div>
          <div class="ratings">
              {this.calRate(ele.rate)?(this.calRate(ele.rate).map(ele=>{
                if(ele==1){
                  return <i class="fa fa-star rating-color"></i>
                }else{
                  return  <i class="fa fa-star"></i>
                }
              })):(<div></div>)}
            </div>
            <p>{ele.review}</p>
</div>
<br/>
              </div>
            )
          })}
         
        </section>


        <div class="modal fade" id="portfolioModal" tabindex="-1" aria-labelledby="portfolioModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="portfolioModalLabel">{this.state.port.title}</h5>

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div id="portfolioCarousel" class="carousel slide" data-bs-ride="carousel">

                  <ol class="carousel-indicators">
                    {this.state.port?(this.state.port.images.map((ele,ind)=>{
                      if(ind==0){
                        return (  <li data-bs-target="#portfolioCarousel" data-bs-slide-to={ind} class="active"></li>)
                      }else{
                        return (<li data-bs-target="#portfolioCarousel" data-bs-slide-to={ind}></li>)
                      }
                    })):(<div></div>)}
                  
                    
          
                  </ol>

                  <div class="carousel-inner">
                  {this.state.port?(this.state.port.images.map((ele,ind)=>{
                      if(ind==0){
                        return (   <div class="carousel-item active">
                        <img src={"http://localhost:8000"+ele.image} class="d-block w-100" alt="Project Image 1" />
                      </div>)
                      }else{
                        return  (   <div class="carousel-item">
                        <img src={"http://localhost:8000"+ele.image} class="d-block w-100" alt="Project Image 1" />
                      </div>)
                      }
                    })):(<div></div>)}
                      
          
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
                <a href={this.state.port.linkVide}>See video</a>
                <p class="mt-3">{this.state.port.description}</p>
                <p class="text-muted">Make in:{this.state.port.date_time}</p>

              </div>
            </div>
          </div>
        </div>




        <Footer />
      </div>


    )
  }
}
export default Cv_free;

