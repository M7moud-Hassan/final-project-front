import React, { Component } from 'react';
import axios from 'axios';
import '../css/add_details.css'
import '../js/add_details.js'
import { NavLink } from 'react-router-dom';
import Footer from '../Profile/freelancer/Footer';


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
      fieldthis:'',
      start_date_error:'',
      error:'',
      currentFile:process.env.PUBLIC_URL+ "/images/person.png",
      image:'',
      error_number:'',
      error_number_to:'',
      error_tag:'',
      error_tag_to:''

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
  if(this.state.title&&this.state.company&&this.state.location&&this.state.description&&this.state.start_date&&this.state.end_date){
    this.expierces += '{"title":"' + this.state.title + '",' + '"company":"' + this.state.company + '",' + '"location":"' + this.state.location + '","is_current_work_in_company":' + this.state.is_work + ',"start_date":"' + this.state.start_date + '","end_date":"' + this.state.end_date + '","description":"' + this.state.description + '","relate_id":'+  localStorage.getItem("id")+'},';
    this.setState({
      title:'',
      company:'',
      location:'',
      is_work:false,
      start_date:'',
      end_date:'',
      start_date_error:'',
      error:'',
      description:''
    })
  }
}

  add_educations() {
    if(this.state.edu_description&&this.state.school&&this.state.degree&&this.state.study&&this.state.from_year&&this.state.to_year){
    this.educations += '{"school":"' + this.state.school + '",' + '"degree":"' + this.state.degree + '",' + '"study":"' + this.state.study + '","from_year":' + this.state.from_year + ',"to_year":"' + this.state.to_year + '","description":"' + this.state.edu_description + '","freelancer_register_id":'+  localStorage.getItem("id")+'},';

  this.setState({
    school:'',
    degree:'',
    study:'',
    from_year:'',
    to_year:'',
    edu_description:'',
   
  })
}
  }

  
  handleJopTitleChange(event) {
    this.setState({ jobtitle: event.target.value });
  }

  


  async saveData() {
    if(this.state.city!='' && this.state.postal_code!='' && this.state.state!=''&&this.state.street_address!='' &&this.state.image){
    console.log(this.state.jobtitle);
    var data = this.expierces.substring(0, this.expierces.length - 1);
    data += ']';
    console.log("expirences",data);
    var data2 = this.educations.substring(0, this.educations.length - 1);
    data2 += ']';
    console.log("education",data2);

    await axios
        .post("http://127.0.0.1:8000/auth/jobTitle/", {
          id:   localStorage.getItem("id"),
          jobtitle: this.state.jobtitle
        });
        /*.then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log('error add jobtitle');
        });*/
        if(!this.state.no_expiernce){
     await axios
            .post("http://127.0.0.1:8000/auth/addExperience/",
              data
            );
           /* .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log('error add expirences');
            });*/
          }
      if(!this.state.no_education){
  await  axios.post("http://127.0.0.1:8000/auth/save_education/",
              data2

            )
           /* .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log('error add aducations');
            });*/
          }

           await axios
            .post("http://127.0.0.1:8000/auth/save_overview/", {
              id:   localStorage.getItem("id"),
              overview: this.state.overview
            })
            /*
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log('error add overview');
            });*/
       // console.log("images",this.state.image);
  
   /*         .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log('error add address');
            });
            */
    await  axios
          .post("http://127.0.0.1:8000/auth/addSkills/", {
            id:   localStorage.getItem("id"),
            skills:this.state.yourSkills
            })
         /*   .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log('error add addSkills');
            });*/

      
        await  axios
            .post("http://127.0.0.1:8000/auth/addService/", {
              id:   localStorage.getItem("id"),
              services:this.state.yourServices
              });

              await axios
              .post("http://127.0.0.1:8000/auth/addAdress/", {
                id:   localStorage.getItem("id"),
                street_address:this.state.street_address,
                city:this.state.city,
                state:this.state.state,
                postal_code:this.state.postal_code,
                image:this.state.image
              },{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  });
                localStorage.clear()
                window.location='/login'
             /* .then((response) => {
                localStorage.clear()
                
               window.location='/login/'
              })
              .catch((error) => {
                console.log(error);
              });*/
            }
  }


  render() {
    const mystyle={
      width: '50%',
      height: '100%',
      margin: 'auto',
      backgroundImage:`url(${this.state.currentFile})`,
      backgroundPosition: 'center', /* Center the image */
      backgroundRepeat: 'no-repeat', /* Do not repeat the image */
      backgroundSize: 'contain',
    }
    if(localStorage.getItem("id")==undefined){
     window.location="/Error"
    }
    var type= localStorage.getItem("type");
        if(type=='free'){
        window.location = '/home_freelancer'
        }else if(type=='client')
        {
            window.location = '/clientprofile'
        }else{
    return (
      <div>


        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container">
            <a class="navbar-brand" href="#"><img src="\images\inLogo.png" alt="Logo" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">

              <div className="navbar-nav ms-auto">
                <div className="text-center">
                your sign up as freelance
                </div>
              </div>


            </div>
          </div>
        </nav>

        <div>

          <section className="mysection">
            <h3 className="text-success">Get now,add a title to tell the world whate you do</h3>

            <div className='container row'>
              <div className='col-4'>
              <label className="text-success" htmlFor="joptitle">your professional role</label>
            <input type="text" className="form-control" id="joptitle" value={this.state.jobtitle} onChange={this.handleJopTitleChange} />
           
              </div>
            </div>
          </section>

          <section class="mysection">
            <h3 class="text-success">if you have relevant work  experience ,add it here</h3>
            <div className='row'>
              <div id="openExper" class="experience col-2">

              </div>
              <div id="cxcontent" class="row col-10">

              </div>
            </div>
            <br/>
            <input type='checkbox' className="form-check-input" id='skipExpirences' onClick={
              () => {
                this.setState({
                  no_expiernce: !this.state.no_expiernce
                });
              }
            } />
            <label  class="messageCheckbox form-check-label"  htmlFor="is_work">not have experiences</label>
          </section>



          <section class="mysection">
            <h3 class="text-success">if you have relevant Educations ,add it here</h3>
            <div className='row'>
              <div id="openEducat" class="experience col-2">

              </div>
              <div id="edcontent" class="row col-10">

              </div>
            </div>
            <br/>
            <input type='checkbox' className="form-check-input" id='skipeducations' onClick={
              () => {
                this.setState({
                  no_education: !this.state.no_education
                });
              }
            } />
           <label  class="messageCheckbox form-check-label"  htmlFor="is_work">not have Educations</label>
          </section>

          <section className="mysection">
            <h3 className="text-success">if you have relevant SKills ,add it here</h3>
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
            <h3 class="text-success">The word about your self</h3>
              <form class="row g-3 needs-validation" novalidate>
                <div className="mb-3 mt-3">
                  <label htmlFor="comment">your overview:</label>
                  <textarea className="form-control" rows="5"  id="overview" name="text" onChange={(e) => {
                this.setState({ overview: e.target.value })
              }}required></textarea>
                </div>
              </form>
            </div>
          </section>

          <section className="mysection">
            <h3 className="text-success">if you have relevant Services ,add it here</h3>
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

          <section className="mysection">
          <h3  className="text-success">add your address details</h3>
          <div className="row d-flex justify-content-center mt-60">
        
          <div className='col-1'>
           </div>
            <div className='col-4'>
            <div style={mystyle}></div>
<div class="input-group mt-2 w-80">
    <input type="file" class="form-control btn btn-primary w-80 " style={
     {
      width:'80%'
     }
    } onChange={
      (e)=>{
        var file = e.target.files[0]
        
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
     
        this.setState({currentFile:reader.result,
        image:file});
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    }
        
      }
    }/>
</div>
            </div>
            <div className='col-6'>
            <div class="container">
           
              <div class="row">
                <div class="col-5">
                  <input id="asd1" type="text" class="form-control" placeholder="Enter street address" name="street_address" onChange={(e) => {
                this.setState({ street_address: e.target.value })
              }} required />
                </div>
                <div className='col-2'></div>
                <div class="col-5">
                  <input id='asd2' type="text" class="form-control" placeholder="Enter city" name="city"  onChange={(e) =>{
                    this.setState({city:e.target.value})
                  }} required/>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-5">
                  <input id='asd3' type="text" class="form-control" placeholder="Enter state" name="state"  onChange={(e) =>{
                    this.setState({state:e.target.value})
                  }} required />
                </div>
                <div className='col-2'></div>
                <div class="col-5 ml-4">
                  <input id='asd4' type="text" class="form-control" placeholder="Enter postal code" name="postal_code"  onChange={(e) =>{
                    this.setState({postal_code:e.target.value})
                  }}  required/>
                </div>
              </div>
             
            </div>
          
            </div>
          
            <div className='col-1'>
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



      
        <form id="logIn" class="needs-validation dialog"  onSubmit={
         
            (event) => {
              event.preventDefault()
              this.add_experiences()
            }
          
        }novalidate>
        <div className=" formx form-content animate">
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">Title:</label>
              <input type="text" value={this.state.title} className="form-control" id="title" placeholder="Enter Title" name="Title" onChange={(e) => {
                this.setState({ title: e.target.value })
              }} required/>
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">company:</label>
              <input type="text"  value={this.state.company} className="form-control" id="company" placeholder="Enter company" name="company" onChange={(e) => {
                this.setState({ company: e.target.value })
              }} required/>
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">location:</label>
              <input type="text" value={this.state.location} className="form-control" id="location" placeholder="Enter location" name="location" onChange={(e) => {
                this.setState({ location: e.target.value })
              }} required/>
            </div>

            <div class="form-check">
              <input id='checkbox_iswork' value={this.state.is_work} class='messageCheckbox' type='checkbox' onClick={
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
                <input id="start_date" value={this.state.start_date} className={"form-control "+this.state.error} type="date" onChange={(e) => {
               var today = new Date();              
               var mydate=new Date(e.target.value+" 0:00:00");
               
                 
                 if(today>mydate)
                 {
                    this.setState({start_date:e.target.value})
                    this.setState({start_date_error:''})
                    this.setState({error:''})
                 }
                 else
                 {
                  this.setState({start_date_error:"invalid data start"})
                  
                  this.setState({error:'is-invalid'})
                 }
                
                }} required/>
                <div className='text-danger'>
                 {this.state.start_date_error}
                </div>
              </div>
              <div className="col-6">
                <label htmlFor="end_date">End</label>
                <input id="end_date" value={this.state.end_date} className={"form-control "+this.state.error_end} type="date" onChange={(e) => {
                  var today = new Date(this.state.start_date+" 0:00:00");              
                  var mydate=new Date(e.target.value+" 0:00:00");
                  
                    if(this.state.start_date){
                    if(today>mydate)
                    {
                      this.setState({end_date_error:"invalid end date"})
                      this.setState({error_end:'is-invalid'})
                    }
                    else
                    {
                   

                     this.setState({end_date:e.target.value})
                     this.setState({end_date_error:''})
                     this.setState({error_end:''})
                    }}
                    else{
                      this.setState({end_date_error:"enter start date first"})
                      this.setState({error_end:'is-invalid'})
                    }
                   
                   }} required/>
                     <div className='text-danger'>
                 {this.state.end_date_error}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Example textarea</label>
              <textarea className="form-control" value={this.state.description} id="description" rows="3" onChange={(e) => {
                this.setState({ description: e.target.value })
              }}required></textarea>
      
            </div>

            <button class="btn btn-success w-100" id="addExpirence" type='submit' >Submit</button>
          </div>
        </form>
       


       

        <form id="education"  class="needs-validation dialog"  onSubmit={
         
         (event) => {
          event.preventDefault()
          if(!this.state.error_tag_to){
           
            this.add_educations()
          }
         }
       
     }novalidate>
          <div className=" formx form-content animate">
            <div className="mb-3 mt-3">
              <label htmlFor="school" className="form-label">school:</label>
              <input type="text" value={this.state.school} className="form-control" id="school" placeholder="Enter school" name="school" onChange={(e) => {
                this.setState({ school: e.target.value })
              }} required/>
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="degree" className="form-label">degree:</label>
              <input type="text" value={this.state.degree} className="form-control" id="degree" placeholder="Enter degree" name="degree" onChange={(e) => {
                this.setState({ degree: e.target.value })
              }} required/>
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="study" className="form-label">study:</label>
              <input type="text" value={this.state.study} className="form-control" id="study" placeholder="Enter study" name="study" onChange={(e) => {
                this.setState({ study: e.target.value })
              }} required/>
            </div>

            <div className="container row">
              <div className="col-6">
                <label htmlFor="from year">from year</label>
                <input type="number" min="1990" max="2023" pattern='[0-9]{4}' onBlur={
                  (e)=>{
                    if(e.target.value<1990&&e.target.value>2023){
                      this.setState({error_number:"not valid year",
                    error_tag:"is-invalid"})
                    
                    }else{
                      this.setState({error_number:"",
                      error_tag:""})
                    }
                  }
                } value={this.state.from_year} id="from_year" className={"form-control "+this.state.error_tag } onChange={(e) => {
                  this.setState({ from_year: e.target.value })
                }}required />
                 <div className='text-danger'>
                  {this.state.error_number}
                </div>
              </div>
              <div className="col-6">
                <label htmlFor="to year">to year</label>
                <input type="number"  min="1990" max="2023" onBlur={
                  (e)=>{
                    if(e.target.value<1990&&e.target.value>2023){
                      this.setState({error_number_to:"not valid year"})
                      this.setState({ error_tag_to:"is-invalid"})
                    }else{
                     if(!this.state.from_year)
                     {
                      this.setState({error_number_to:"input from year first"})
                      this.setState({ error_tag_to:"is-invalid"})
                     }else if (e.target.value<this.state.from_year)
                     {
                      this.setState({error_number_to:"invalid year"})
                      this.setState({ error_tag_to:"is-invalid"})
                     }else{
                      this.setState({error_number_to:"",
                      error_tag_to:""})
                     }
                    }
                  }
                } pattern='[0-9]{4}' value={this.state.to_year} id="to_year" className={"form-control "+this.state.error_tag_to} onChange={(e) => {
                  this.setState({ to_year: e.target.value })
                }} required/>
                <div className='text-danger'>
                  {this.state.error_number_to}
                </div>
              </div>

            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Example textarea</label>
              <textarea value={this.state.edu_description} className="form-control" id="description2" rows="3" onChange={(e) => {
                this.setState({ edu_description: e.target.value })
              }}required></textarea>
            </div>

            <button class="btn btn-success w-100" id='addEducation' type='submit'>Submit</button>
          </div>
          </form>
       
      </div>
    )
            }
  }
}
export default AddDetails;