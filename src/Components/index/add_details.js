import React, { Component } from 'react';
import axios from 'axios';



class AddDetails extends Component{
  constructor(){
    super();
    this.state={
      i:0,
      jobtitle:""
    }
    this.handleJopTitleChange = this.handleJopTitleChange.bind(this);
  }
  handleJopTitleChange(event) {
    this.setState({ jobtitle: event.target.value });
  }


  saveData(){
    if(this.state.i==0){
      
     axios
      .post("http://127.0.0.1:8000/auth/jobTitle/", {
          "id":1,
          "jobtitle":this.state.jobtitle
      })
      this.state.i += 1;
    }
  }

    render(){
        return(
            <div>
                

  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="" alt="Logo"/></a>
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
    <input type="text" className="form-control" id="joptitle" value={this.state.jobtitle} onChange={this.handleJopTitleChange}/>
   </section>

   <section class="mysection">
    <h1 class="text-success">if you have relevant work  experience ,add it here</h1>
    <div className='row'>
    <div id="openExper" class="experience col-3">
    
      </div>
    <div id="cxcontent" class="row col-9">
      
    </div>
    </div>
    <input  type='checkbox' onchange='onchangeCheckedNone(this.checked);'/>
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
    <input  type='checkbox' onchange='onchangeCheckedNone(this.checked);'/>
        <label className="messageCheckbox" htmlFor="is_work">not have Educations</label>
   </section>

   <section className="mysection">
    <h1 className="text-success">if you have relevant SKills ,add it here</h1>
    <div className="row d-flex justify-content-center mt-100">
      <div className="col-md-6"> <select id="choices-multiple-remove-button" placeholder="Select upto 5 tags" multiple>
              <option value="HTML">HTML</option>
              <option value="Jquery">Jquery</option>
              <option value="CSS">CSS</option>
              <option value="Bootstrap 3">Bootstrap 3</option>
              <option value="Bootstrap 4">Bootstrap 4</option>
              <option value="Java">Java</option>
              <option value="Javascript">Javascript</option>
              <option value="Angular">Angular</option>
              <option value="Python">Python</option>
              <option value="Hybris">Hybris</option>
              <option value="SQL">SQL</option>
              <option value="NOSQL">NOSQL</option>
              <option value="NodeJS">NodeJS</option>
          </select> </div>
  </div>
   </section>


   <section className="mysection">
    <div className="container">
      <h2>The word about your self</h2>
      <form action="/action_page.php">
        <div className="mb-3 mt-3">
          <label htmlFor="comment">your overview:</label>
          <textarea className="form-control" rows="5" id="comment" name="text"></textarea>
        </div>
      </form>
    </div>
   </section>

   <section className="mysection">
    <h1 className="text-success">if you have relevant Services ,add it here</h1>
    <div className="row d-flex justify-content-center mt-100">
      <div className="col-md-6"> 
        <select id="choices-multiple-remove-button" placeholder="Select upto 5 tags" multiple>      
        <option value="HTML">HTML</option>
              <option value="Jquery">Jquery</option>
              <option value="CSS">CSS</option>
              <option value="Bootstrap 3">Bootstrap 3</option>
              <option value="Bootstrap 4">Bootstrap 4</option>
              <option value="Java">Java</option>
              <option value="Javascript">Javascript</option>
              <option value="Angular">Angular</option>
              <option value="Python">Python</option>
              <option value="Hybris">Hybris</option>
              <option value="SQL">SQL</option>
              <option value="NOSQL">NOSQL</option>
              <option value="NodeJS">NodeJS</option>
          </select>
         </div>
  </div>
   </section>

   <div class="position-absolute bottom-0 text-center w-100" >
    <div  class="w-100" id="svg_wrap"></div>
   <div class="container">
    <div class="button" id="prev">&larr; Previous</div>
   <div class="button" id="next" onClick={this.saveData}>Next &rarr;</div>
   <input class="button" id="submit" type="submit" value="Save Data"/>
   </div>
   </div>
  </div>
 
 
 
  <div id="logIn" className="dialog">   
    <div className=" formx form-content animate">
      <div className="mb-3 mt-3">
        <label htmlFor="email" className="form-label">Title:</label>
        <input type="email" className="form-control" id="title" placeholder="Enter Title" name="Title"/>
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="email" className="form-label">company:</label>
        <input type="email" className="form-control" id="company" placeholder="Enter company" name="company"/>
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="email" className="form-label">location:</label>
        <input type="email" className="form-control" id="location" placeholder="Enter location" name="location"/>
      </div>

      <div class="form-check">
        <input id='checkbox_iswork' class='messageCheckbox' type='checkbox'/>
        <label class="messageCheckbox" for="is_work">
          is current work in company
        </label>
      </div>
      <div className="container row">
       <div className="col-6">
        <label htmlFor="start_date">Start</label>
        <input id="start_date" className="form-control" type="date" />
       </div>
       <div className="col-6">
        <label htmlFor="end_date">End</label>
        <input id="end_date" className="form-control" type="date" />
       </div>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Example textarea</label>
        <textarea className="form-control" id="description" rows="3"></textarea>
      </div>

      <button class="btn btn-primary w-100" id="addExpirence">Submit</button>
    </div>
  </div>


  <div id="education" className="dialog">   
    <div className=" formx form-content animate">
      <div className="mb-3 mt-3">
        <label htmlFor="school" className="form-label">school:</label>
        <input type="text" className="form-control" id="school" placeholder="Enter school" name="school"/>
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="degree" className="form-label">degree:</label>
        <input type="text" className="form-control" id="degree" placeholder="Enter degree" name="degree"/>
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="study" className="form-label">study:</label>
        <input type="text" className="form-control" id="study" placeholder="Enter study" name="study"/>
      </div>
     
      <div className="container row">
       <div className="col-6">
        <label htmlFor="from year">from year</label>
        <input type="number" id="from_year" className="form-control"  />
       </div>
       <div className="col-6">
        <label htmlFor="to year">to year</label>
        <input type="number" id="to_year" className="form-control" />
       </div>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Example textarea</label>
        <textarea className="form-control" id="description2" rows="3"></textarea>
      </div>

      <button class="btn btn-primary w-100"  id='addEducation'>Submit</button>
    </div>
  </div>
            </div>
        )
    }
}
export default AddDetails;