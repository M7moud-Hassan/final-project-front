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
      error: null
    };
  }

  componentDidMount() {
    const id = 1; 
    axios.post(`http://127.0.0.1:8000/profile/get_details_free/`,
            {
                "id": id
            })
      .then(response => {
        this.setState({ data: response.data, isLoading: false });
      })
      .catch(error => {
        this.setState({ error: error, isLoading: false });
      });
  }



  render() {
    const { data, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return( 
      <div>
         <NavBar url='http://127.0.0.1:8000/profile/clientDetails/'
        openMenu={()=>{
            
        }}/>
        <section class="py-5 container-border my-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <img src={data.image ? ("data:image/*;base64," + data.image) : ("./images/default.png")} alt="Freelancer Profile Picture"
                        class="img-fluid rounded-circle mb-3"/>
                    <h4 class="mb-3">{data.name}</h4>
                    <p class="lead mb-4">{data.jobtitle}</p>
                    <ul class="list-unstyled">
                        <li><strong>Location:</strong> {data.address}</li>
                        <li><strong>Availability:</strong> Full-time</li>
                        
                        <li><strong>Phone number:</strong> {data.phone}</li>
                    </ul>
                </div>
                <div class="col-md-8">
                    <h2 class="mb-4">About Me</h2>
                    <p class="lead mb-4">{data.overView} </p>
                        <hr/>
                    <h2 class="mb-4">Skills</h2>
                    <div class="row mb-4">
                        <div class=" d-flex">
                          {data.skills.map((skill,index) => (
                            <h5 key={index} class="m-1"><span class="badge rounded-pill text-bg-primary">{skill}</span> </h5>

                          ))}
                            


                        </div>
                        
                       
                       
                    </div>
                    <hr/>
                    <h2 class="mb-4">Portfolio</h2>
                    <div class="row mb-4">
                       {data.portfilos.map((portfilo ,index)=>(
                            <div key={index} class="col-md-4 cv_portfilio" >
                            <div class="card shadow-sm m-1">
                              <img src={"data:image/*;base64," + portfilo.image} alt="Card image cap" style={{ width: '180px',height:'120px' }} class="card-img-top" />
                              <div class="card-body">
                                  <h5 class="card-title">{portfilo.title}</h5>
                                  <p class="card-text">{portfilo.description}</p>
                                  <button type="button" class="btn btn-success rounded-pill" data-bs-toggle="modal" data-bs-target="#portfolioModal">
                                    View Project
                                  </button>
                              </div>
                          </div>
                          </div>

                       ))}
                       
                     
                    </div>
                    <hr/>
                    <div class="row">
                        <div class=" mb-4">
                          <h3 class="mb-3">Education</h3>
                          {data.educations.map((education ,index) =>(
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
                        <hr/>
                        <div class="">
                          <h3 class="mb-3">Certifications</h3>
                          {data.certifications.map((certification ,index)=>(
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

    </section>

  
<div class="modal fade" id="portfolioModal" tabindex="-1" aria-labelledby="portfolioModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="portfolioModalLabel">Project title</h5>
    
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div id="portfolioCarousel" class="carousel slide" data-bs-ride="carousel">

          <ol class="carousel-indicators">
            <li data-bs-target="#portfolioCarousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#portfolioCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#portfolioCarousel" data-bs-slide-to="2"></li>
          </ol>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://via.placeholder.com/500x250" class="d-block w-100" alt="Project Image 1"/>
            </div>
            <div class="carousel-item">
              <img src="https://via.placeholder.com/500x250" class="d-block w-100" alt="Project Image 2"/>
            </div>
            <div class="carousel-item">
              <img src="https://via.placeholder.com/500x250" class="d-block w-100" alt="Project Image 3"/>
            </div>
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

        <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis pharetra lorem, eget varius arcu. Praesent ac lectus vel enim aliquam facilisis. Sed vel sodales massa, eget fringilla velit. Ut vel nulla eu urna venenatis lacinia. In hac habitasse platea dictumst.</p>
        <p class="text-muted">Make in:2020-4-23</p>

        <a href="#" class="btn btn-primary rounded-pill">Visit Website</a>
      </div>
    </div>
  </div>
</div>
   
      


        <Footer/>
      </div>
    

        )
      }
    }
    export default Cv_free;

