import React, { Component } from 'react';

import axios from 'axios';
import '../js/jquery.js'
import '../css/add_details.css'
// import '../js/add_details.js'


class AddDetails extends Component {
  constructor() {
    super();
  
    this.expierces = '['
    this.educations = '['

    this.state = {
      // jobtitle
      optionsSkills: JSON.parse(localStorage.getItem('skills')),
      optionsServices:
      JSON.parse(localStorage.getItem('services')),
      i: 0,
      jobtitle: '',
      // expierces
      no_expiernce: false,
      title: '',
      company: '',
      location: '',
      is_work: false,
      start_date: '',
      end_date: '',
      description: '',
      // education
      no_education: false,
      school: '',
      degree: '',
      study: '',
      from_year: '',
      to_year: '',
      edu_description: '',
      overview:'',
      // adress
      street_address:'',
      city:'',
      state:'',
      postal_code:'',
      yourSkills:[],
      yourServices:[],
     

    }
    this.handleJopTitleChange = this.handleJopTitleChange.bind(this);
   this.saveData = this.saveData.bind(this);
  }


  

   mySkill= ({optionsSkills})=>{
      
    return optionsSkills.map((element)=>
        
   {
     return ( <option value={element.id}>{element.name}</option>)
   }
        
     )
    
   
 }

 myServces=({optionsServices})=>{
      
  return optionsServices.map((element)=>
      
 {
   return ( <option value={element.id}>{element.name}</option>)
 }
      
   )
  
 
}

  add_experiences() {
  
    this.expierces += '{"title":"' + this.state.title + '",' + '"company":"' + this.state.company + '",' + '"location":"' + this.state.location + '","is_current_work_in_company":' + this.state.is_work + ',"start_date":"' + this.state.start_date + '","end_date":"' + this.state.end_date + '","description":"' + this.state.description + '","relate_id":'+  localStorage.getItem("id")+'},';
  }

  add_educations() {
    this.educations += '{"school":"' + this.state.school + '",' + '"degree":"' + this.state.degree + '",' + '"study":"' + this.state.study + '","from_year":' + this.state.from_year + ',"to_year":"' + this.state.to_year + '","description":"' + this.state.edu_description + '","freelancer_register_id":'+  localStorage.getItem("id")+'},';
  }

  
  handleJopTitleChange(event) {
    this.setState({ jobtitle: event.target.value });
  }

  


  saveData() {
    if(this.state.city!='' && this.state.postal_code!='' && this.state.state!=''&&this.state.street_address!=''){
    console.log(this.state.jobtitle);
    var data = this.expierces.substring(0, this.expierces.length - 1);
    data += ']';
    console.log("expirences",data);
    var data2 = this.educations.substring(0, this.educations.length - 1);
    data2 += ']';
    console.log("education",data2);


    axios
        .post("http://127.0.0.1:8000/auth/jobTitle/", {
          id:   localStorage.getItem("id"),
          jobtitle: this.state.jobtitle
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log('error add jobtitle');
        });
  
      axios
            .post("http://127.0.0.1:8000/auth/addExperience/",
              data
            )
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log('error add expirences');
            });
      
    axios.post("http://127.0.0.1:8000/auth/save_education/",
              data2

            )
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log('error add aducations');
            });

            axios
            .post("http://127.0.0.1:8000/auth/save_overview/", {
              id:   localStorage.getItem("id"),
              overview: this.state.overview
            })
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log('error add overview');
            });
        
      axios
            .post("http://127.0.0.1:8000/auth/addAdress/", {
              id:   localStorage.getItem("id"),
              street_address:this.state.street_address,
              city:this.state.city,
              state:this.state.state,
              postal_code:this.state.postal_code
            })
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log('error add address');
            });

      
      
      axios
          .post("http://127.0.0.1:8000/auth/addSkills/", {
            id:   localStorage.getItem("id"),
            skills:this.state.yourSkills
            })
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log('error add addSkills');
            });

      
            axios
            .post("http://127.0.0.1:8000/auth/addService/", {
              id:   localStorage.getItem("id"),
              services:this.state.yourServices
              })
              .then((response) => {
               window.location='/login/'
              })
              .catch((error) => {
                console.log(error);
              });
            }
  }


  render() {
    if(  localStorage.getItem("id")==undefined){
      return <div>
        Eroor
      </div>
    }
    return (
      <div>


        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container">
            <a class="navbar-brand" href="#"><img src="" alt="Logo" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">

              <div className="navbar-nav ms-auto">
                <div className="text-center">
                  Here to hire talent?
                  <a href="#" className="text-center text-success mt-3"> Join as a Client</a>
                </div>
              </div>


            </div>
          </div>
        </nav>

        <div>

          <section className="mysection">
            <h1 className="text-success">Get now,add a title to tell the world whate you do</h1>

            <label className="text-success" htmlFor="joptitle">your professional role</label>
            <input type="text" className="form-control" id="joptitle" value={this.state.jobtitle} onChange={this.handleJopTitleChange} />
          </section>

          <section class="mysection">
            <h1 class="text-success">if you have relevant work  experience ,add it here</h1>
            <div className='row'>
              <div id="openExper" class="experience col-3">

              </div>
              <div id="cxcontent" class="row col-9">

              </div>
            </div>
            <input type='checkbox' id='skipExpirences' onClick={
              () => {
                this.setState({
                  no_expiernce: !this.state.no_expiernce
                });
              }
            } />
            <label className="messageCheckbox" htmlFor="is_work">not have experiences</label>
          </section>



          <section class="mysection">
            <h1 class="text-success">if you have relevant Educations ,add it here</h1>
            <div className='row'>
              <div id="openEducat" class="experience col-3">

              </div>
              <div id="edcontent" class="row col-9">

              </div>
            </div>
            <input type='checkbox' id='skipeducations' onClick={
              () => {
                this.setState({
                  no_education: !this.state.no_education
                });
              }
            } />
            <label className="messageCheckbox" htmlFor="is_work">not have Educations</label>
          </section>

          <section className="mysection">
            <h1 className="text-success">if you have relevant SKills ,add it here</h1>
            <div className="row d-flex justify-content-center mt-100">
            <div class="col-md-6"> <select id="choices-multiple-remove-button" placeholder="Select upto 5 tags"  onChange={
              (e)=>{
                var list=[]
                for(var i=0;i<e.target.children.length;i++){
                  list.push(e.target.children[i].value)
                }
                
                this.setState({yourSkills:list})
              
              }
            } multiple>
           {
            this.mySkill(this.state)
           }
        </select> </div>
            </div>
          </section>


          <section className="mysection">
            <div className="container">
              <h2>The word about your self</h2>
              <form action="/action_page.php">
                <div className="mb-3 mt-3">
                  <label htmlFor="comment">your overview:</label>
                  <textarea className="form-control" rows="5"  id="overview" name="text" onChange={(e) => {
                this.setState({ overview: e.target.value })
              }}></textarea>
                </div>
              </form>
            </div>
          </section>

          <section className="mysection">
            <h1 className="text-success">if you have relevant Services ,add it here</h1>
            <div className="row d-flex justify-content-center mt-100">
              <div className="col-md-6">
                <select id="choices-multiple-remove-button" placeholder="Select upto 5 tags" onChange={
              (e)=>{
                var list=[]
                for(var i=0;i<e.target.children.length;i++){
                  list.push(e.target.children[i].value)
                }
                
                this.setState({yourServices:list})
              
              }
            } multiple>
                {
                  this.myServces(this.state)
                }
                </select>
              </div>
            </div>
          </section>
          <section>
            <div class="container">
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Enter street address" name="street_address" onChange={(e) => {
                this.setState({ street_address: e.target.value })
              }} />
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="Enter city" name="city"  onChange={(e) =>{
                    this.setState({city:e.target.value})
                  }} />
                </div>
              </div>
              <div class="row mt-4">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Enter state" name="state"  onChange={(e) =>{
                    this.setState({state:e.target.value})
                  }} />
                </div>
                <div class="col">
                  <input type="password" class="form-control" placeholder="Enter postal code" name="postal_code"  onChange={(e) =>{
                    this.setState({postal_code:e.target.value})
                  }}/>
                </div>
              </div>
            </div>
          </section>

          <div class="position-absolute bottom-0 text-center w-100" >
            <div class="w-100" id="svg_wrap"></div>
            <div class="container">
              <div class="button" id="prev">&larr; Previous</div>
              <div class="button" id="next" >Next &rarr;</div>
              <input class="button" id="submit" type="submit" value="Save Data" onClick={this.saveData}/>
            </div>
          </div>
        </div>



        <div id="logIn" className="dialog">
          <div className=" formx form-content animate">
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">Title:</label>
              <input type="email" className="form-control" id="title" placeholder="Enter Title" name="Title" onChange={(e) => {
                this.setState({ title: e.target.value })
              }} />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">company:</label>
              <input type="email" className="form-control" id="company" placeholder="Enter company" name="company" onChange={(e) => {
                this.setState({ company: e.target.value })
              }} />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">location:</label>
              <input type="email" className="form-control" id="location" placeholder="Enter location" name="location" onChange={(e) => {
                this.setState({ location: e.target.value })
              }} />
            </div>

            <div class="form-check">
              <input id='checkbox_iswork' class='messageCheckbox' type='checkbox' onClick={
                () => {
                  this.setState({
                    is_work: !this.state.is_work
                  })
                }
              } />
              <label class="messageCheckbox" for="is_work">
                is current work in company
              </label>
            </div>
            <div className="container row">
              <div className="col-6">
                <label htmlFor="start_date">Start</label>
                <input id="start_date" className="form-control" type="date" onChange={(e) => {
                  this.setState({ start_date: e.target.value })
                }} />
              </div>
              <div className="col-6">
                <label htmlFor="end_date">End</label>
                <input id="end_date" className="form-control" type="date" onChange={(e) => {
                  this.setState({ end_date: e.target.value })
                }} />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Example textarea</label>
              <textarea className="form-control" id="description" rows="3" onChange={(e) => {
                this.setState({ description: e.target.value })
              }}></textarea>
            </div>

            <button class="btn btn-primary w-100" id="addExpirence" onClick={
              () => {
                this.add_experiences()
              }
            }>Submit</button>
          </div>
        </div>


        <div id="education" className="dialog">
          <div className=" formx form-content animate">
            <div className="mb-3 mt-3">
              <label htmlFor="school" className="form-label">school:</label>
              <input type="text" className="form-control" id="school" placeholder="Enter school" name="school" onChange={(e) => {
                this.setState({ school: e.target.value })
              }} />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="degree" className="form-label">degree:</label>
              <input type="text" className="form-control" id="degree" placeholder="Enter degree" name="degree" onChange={(e) => {
                this.setState({ degree: e.target.value })
              }} />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="study" className="form-label">study:</label>
              <input type="text" className="form-control" id="study" placeholder="Enter study" name="study" onChange={(e) => {
                this.setState({ study: e.target.value })
              }} />
            </div>

            <div className="container row">
              <div className="col-6">
                <label htmlFor="from year">from year</label>
                <input type="number" id="from_year" className="form-control" onChange={(e) => {
                  this.setState({ from_year: e.target.value })
                }} />
              </div>
              <div className="col-6">
                <label htmlFor="to year">to year</label>
                <input type="number" id="to_year" className="form-control" onChange={(e) => {
                  this.setState({ to_year: e.target.value })
                }} />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Example textarea</label>
              <textarea className="form-control" id="description2" rows="3" onChange={(e) => {
                this.setState({ edu_description: e.target.value })
              }}></textarea>
            </div>

            <button class="btn btn-primary w-100" id='addEducation' onClick={
              () => {
                this.add_educations()
              }
            }>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}
export default AddDetails;