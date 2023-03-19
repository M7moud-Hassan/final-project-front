import React, { Component } from 'react';


import '../../css/profile.css';
import NavBar from './navbar';
import Footer from './Footer';
import axios from 'axios';
import Error from '../../index/error';
import '../../css/models.css'
import '../../js/models.js'

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            data: false,
            loading: true,
            error: null,
            jobtitle2:'',
            overview:'',

        }

    }


    componentDidMount() {
      
        axios.post(`http://127.0.0.1:8000/profile/get_details_free/`,
            {
                "id": localStorage.getItem("uid")
            })
            .then(response => {
                this.setState({ data: response.data, loading: false });
               
                this.setState({jobtitle2:this.state.data.jobtitle})
                
            })
            .catch(error => {
                this.setState({ error: error.message, loading: false });
            });
    }

    render() {

        var { data, loading, error } = this.state;

        if (loading) {
            return (<div id="demo-content">
            <div id="loader-wrapper">
                <div id="loader"></div>
            </div>
       
        </div>)
        }

        if (error) {
            return <Error/>
        }
        return (
            <div>


                <div>
                    <NavBar />

                    <div className="container-border my-4">
                        <div className="container my-5">
                            <div className="row">

                                <div className="col-md-3">
                                    <img src={"data:image/*;base64," + this.state.data.image} className="img-fluid rounded-circle mb-3"
                                        alt="Profile Picture" />

                                </div>
                                <div className="col-md-9">
                                    <h4>{this.state.data.name}</h4>

                                    <p className="text-muted">{this.state.data.address}</p>
                                    <p>{this.state.data.jobtitle} &nbsp;&nbsp;&nbsp;
                                    <button type="button" className="btn btn-outline-primary btn-sm rounded-pill me-2" onClick={
                                        ()=>{
                                          
                                            this.setState({jobtitle2:this.state.data.jobtitle})
                                            document.getElementById('id01').style.display='block'
                                        }
                                    }><i
                                                           className="fa-solid fa-pen"></i></button>
                                    </p>
                                    <div id="id01" class="mamodal rounded">
  
  <form class="mamodal-content maanimate rounded">
    <div class="maimgcontainer">
      <span class="close" onClick={
        ()=>{
           
            document.getElementById('id01').style.display='none'
        }
      }>&times;</span>
      
    </div> 
    
    <div class="container myconatiner pt-4">
        <h3 class="text-left ml-4">Edit your title </h3>
        <div class="container mycontainer">
            <h4>Your title</h4>
            <p>Enter a single sentence description of your professional skills/experience (e.g. Expert Web Designer with Ajax experience) </p>
        </div>
      
      <input type="text" value={this.state.jobtitle2} onChange={
        (e)=>{
            this.setState({jobtitle2:e.target.value});
        }
      } class="form-control" placeholder="Enter Username" name="uname" required/>        
    </div>

    <div class="container myconatiner rounded mt-4">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="macancelbtnC btn btn-link" onClick={
        ()=>{
            document.getElementById('id01').style.display='none'
        }
      }>Cancel</button>
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="macancelbtn" onClick={
        ()=>{
         this.setState(prevState => {
          
            const { data } = prevState;
                     data.jobtitle = this.state.jobtitle2;
                      return { data };
          },
                   () => {

                    axios.post("http://127.0.0.1:8000/auth/jobTitle/",{
                        id:localStorage.getItem("uid"),
                        jobtitle:this.state.data.jobtitle
                    }).then(respons=>{
                        document.getElementById('id01').style.display='none'
                    })
                  
          })
         
        }
      }>Save</button>
      
    </div>
  </form>
</div>

                                </div>


                            </div>
                            <hr />

                            <div className="row">
                                <div className="col-md-3 px-2">


                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h4 className="mb-3">Educations</h4>
                                                <div>
                                                    <button type="button"
                                                        className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                                            className="fa-solid fa-pen"></i></button>
                                                </div>
                                            </div>
                                            <ul className="list-unstyled">
                                                {this.state.data.educations.map((education, index) => (
                                                    <div className='container-border my-1'>
                                                        <li key={index}>
                                                            <h5>{education.school}</h5>
                                                            <p>{education.from_year}</p>
                                                        </li>
                                                    </div>

                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-9 px-2">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h2 className="mb-0">About Me</h2>
                                            <div>
                                                <button type="button" className="btn btn-outline-primary rounded-pill btn-sm me-2 " onClick={
                                                    ()=>{
                                                        this.setState({overview:this.state.data.overView})
                                                        document.getElementById('id02').style.display='block'
                                                    }
                                                }><i
                                                    className="fa-solid fa-pen"></i></button>
                                            </div>
                                        </div>


                                        <div>
                                            <p>
                                                {this.state.data.overView}
                                            </p>


                                        </div>
                                    </div>

                                    <hr />


                                    <div id='portflio'>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h2 className="mb-0">Portflio</h2>
                                            <div>
                                                <button type="button" className="btn btn-outline-primary rounded-pill btn-sm me-2 "><i
                                                    className="fa-solid fa-pen"></i></button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className=" ">
                                                <div className="row d-flex justify-content-around ">
                                                    <div className="col-md-4">
                                                        <div className="card">
                                                            <img className="card-img-top" src="\images\me.png" alt="Card image cap" style={{ width: '150px' }} />
                                                            <div className="card-body">
                                                                <h5 className="card-title">Card Title 1</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="card">
                                                            <img className="card-img-top" src="\images\me.png" alt="Card image cap" style={{ width: '150px' }} />
                                                            <div className="card-body">
                                                                <h5 className="card-title">Card Title 3</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="card">
                                                            <img className="card-img-top" src="\images\me.png" alt="Card image cap" style={{ width: '150px' }} />
                                                            <div className="card-body">
                                                                <h5 className="card-title">Card Title 3</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="row">


                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h2 className="mb-0">My Skills</h2>
                                            <div>
                                                <button type="button" className="btn btn-outline-success btn-sm rounded-pill me-2"><i
                                                    className="fa-solid fa-plus"></i></button>
                                                <button type="button" className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                                    className="fa-solid fa-pen"></i></button>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <ul className="list-inline">
                                                    {this.state.data.skills.map((skill, index) => (
                                                        <li className='list-inline-item' key={index}>
                                                            <span class="badge rounded-pill bg-primary fs-6">{skill}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <hr />
                                    <div className="row">


                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h2 className="mb-0">My Services</h2>
                                            <div>
                                                <button type="button" className="btn btn-outline-success btn-sm rounded-pill me-2"><i
                                                    className="fa-solid fa-plus"></i></button>
                                                <button type="button" className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                                    className="fa-solid fa-pen"></i></button>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <ul className="list-inline">
                                                    {this.state.data.services.map((service, index) => (
                                                        <li className='list-inline-item' key={index}>
                                                            <span class="badge rounded-pill bg-primary fs-6">{service}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <hr />
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h2>My Work Experience</h2>
                                            <div>
                                                <button type="button" className="btn btn-outline-primary rounded-pill btn-sm me-2 "><i
                                                    className="fa-solid fa-pen"></i></button>
                                            </div>

                                        </div>
                                        <ul className="list-unstyled">
                                            {this.state.data.experiecnces.map((experiecnce, index) => (
                                                <li key={index}>

                                                    <div className="position-relative container-border my-4">

                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <h3 className="mb-3">{experiecnce.title}</h3>
                                                            <div>
                                                                <button type="button"
                                                                    className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                                                        className="fa-solid fa-pen"></i></button>
                                                                <button type="button" className="btn btn-outline-danger rounded-pill btn-sm"><i
                                                                    className="fa-solid fa-trash-can"></i></button>
                                                            </div>
                                                        </div>
                                                        <h4 assName="text-muted">{experiecnce.company}</h4>
                                                        <p>{experiecnce.description}</p>
                                                    </div>
                                                </li>

                                            )

                                            )}


                                        </ul>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-border my-4 p-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="mb-0">Certifications</h2>
                            <div>

                                <button type="button" className="btn btn-outline-success btn-sm rounded-pill"><i
                                    className="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                        

                        
                        <div className="position-relative container-border my-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="mb-3">Title</h4>
                                <div>
                                    <button type="button" className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                        className="fa-solid fa-pen"></i></button>
                                    <button type="button" className="btn btn-outline-danger rounded-pill btn-sm"><i
                                        className="fa-solid fa-trash-can"></i></button>
                                </div>
                            </div>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis felis vitae augue finibus
                            </p>
                        </div>
                       
                        <div className="position-relative container-border my-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="mb-3">Title</h4>
                                <div>
                                    <button type="button" className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                        className="fa-solid fa-pen"></i></button>
                                    <button type="button" className="btn btn-outline-danger rounded-pill btn-sm"><i
                                        className="fa-solid fa-trash-can"></i></button>
                                </div>
                            </div>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis felis vitae augue finibus
                            </p>
                        </div>
                    </div>
                    <div className="container-border my-4 p-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="mb-0">Employment history</h2>
                            <div>

                                <button type="button" className="btn btn-outline-success btn-sm rounded-pill"><i
                                    className="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                     

                       
                        <div className="position-relative container-border my-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="mb-3">Title</h4>
                                <div>
                                    <button type="button" className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                        className="fa-solid fa-pen"></i></button>
                                    <button type="button" className="btn btn-outline-danger rounded-pill btn-sm"><i
                                        className="fa-solid fa-trash-can"></i></button>
                                </div>
                            </div>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis felis vitae augue finibus
                            </p>
                        </div>
                      
                        <div className="position-relative container-border my-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="mb-3">Title</h4>
                                <div>
                                    <button type="button" className="btn btn-outline-primary btn-sm rounded-pill me-2"><i
                                        className="fa-solid fa-pen"></i></button>
                                    <button type="button" className="btn btn-outline-danger rounded-pill btn-sm"><i
                                        className="fa-solid fa-trash-can"></i></button>
                                </div>
                            </div>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis felis vitae augue finibus
                            </p>
                        </div>
                    </div>


                </div>
                <Footer />
                <div id="id02" class="mamodal rounded">
  
  <form class="mamodal-content maanimate rounded">
    <div class="maimgcontainer">
      <span onClick={
        ()=>{
            document.getElementById('id02').style.display='none'
        }
      } class="close" title="Close Modal">&times;</span>
    </div>
    
    <div class="container myconatiner">
        <h3 class="text-left ml-4">Overview </h3>
        <div class="container mycontainer pt-4">
            <p>Use this space to show clients you have the skills and experience they're looking for. </p>
            <ul>
                <li>Describe your strengths and skills</li>
                <li>Highlight projects, accomplishments and education</li>
                <li>Keep it short and make sure it's error-free</li>
            </ul>
        </div>
      
      <textarea className='w-100'  type="text" placeholder="Enter Username" name="uname" required rows="5" onChange={
        (e)=>{
          
                    this.setState({overview:e.target.value})
                
        }
      } value={this.state.overview
      }>
        </textarea>      
    </div>

    <div class="container myconatiner rounded">
      <button type="button" onclick="document.getElementById('id02').style.display='none'" class="macancelbtnC btn btn-link" onClick={
        ()=>{
            document.getElementById('id02').style.display='none'
        }
      }>Cancel</button>
      <button type="button" onclick="document.getElementById('id02').style.display='none'" class="macancelbtn" onClick={ ()=>{
         this.setState(prevState => {
          
            const { data } = prevState;
                     data.overView = this.state.overview;
                      return { data };
          },
                   () => {

                    axios.post("http://127.0.0.1:8000/auth/save_overview/",{
                        id:localStorage.getItem("uid"),
                        overview:this.state.data.overView
                    }).then(respons=>{
                        document.getElementById('id02').style.display='none'
                    })
                  
          })
         
        }
      }>Save</button>
      
    </div>
  </form>
</div>
            </div>
        )
    }
}

export default Profile;