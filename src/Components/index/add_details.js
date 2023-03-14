import React, { Component } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

class AddDetails extends Component{
  
    constructor(){
      super();
      this.expierces='['
      this.state={
        i:0,  
        no_expiernce:false,
        title:'',
        company:'',
        location:'',
        is_work:false,
        start_date:'',
        end_date:'',
        description:'',
      }
    }
    add_experiences(){
           this.expierces+='{"title":"'+this.state.title+'",'+'"company":"'+this.state.company+'",'+'"location":"'+this.state.location+'","is_work":'+this.state.is_work+',"start_date":"'+this.state.start_date+'","end_date":"'+this.state.end_date+'","description":"'+this.state.description+'","id":1},';
    }
   saveData(){
    console.log(this.state.i);
      if(this.state.i==1){
        if(!this.state.no_expiernce){
         var data=this.expierces.substring(0,this.expierces.length-1);
         data+=']';


         //send data to api
          console.log(data);
          axios.post("dkdjf",data)
        }
      }
      this.setState({i:this.state.i+1})
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
      <div class="collapse navbar-collapse" id="navbarNav">
       
        <div class="navbar-nav ms-auto">
          <div class="text-center">
            Here to hire talent? 
            <a href="#" class="text-center text-success mt-3"> Join as a Client</a>
          </div>
      </div>
      

      </div>
    </div>
  </nav>
  
  <div>
   <section class="mysection">
    <h1 class="text-success">Get now,add a title to tell the world whate you do</h1>

    <label class="text-success" for="joptitle">your professional role</label>
    <input type="email" class="form-control" id="jobtitle"/>
   </section>
   <section class="mysection">
    <h1 class="text-success">if you have relevant work  experience ,add it here</h1>
    <div className='row'>
    <div id="openExper" class="experience col-3">
    
      </div>
    <div id="cxcontent" class="row col-9">
      
    </div>
    </div>
    <input  type='checkbox' onClick={
      ()=>{
        this.setState({
          no_expiernce:!this.state.no_expiernce
        });
      }
    }/>
        <label class="messageCheckbox" for="is_work">not have experiences</label>
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
        <label class="messageCheckbox" for="is_work">not have Educations</label>
   </section>

   <section class="mysection">
    <h1 class="text-success">if you have relevant SKills ,add it here</h1>
    <div class="row d-flex justify-content-center mt-100">
      <div class="col-md-6"> <select id="choices-multiple-remove-button" placeholder="Select upto 5 tags" multiple>
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
   <section class="mysection">
    <div class="container">
      <h2>The word about your self</h2>
      <form action="/action_page.php">
        <div class="mb-3 mt-3">
          <label for="comment">your overview:</label>
          <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
        </div>
      </form>
    </div>
   </section>

   <section class="mysection">
    <h1 class="text-success">if you have relevant Services ,add it here</h1>
    <div class="row d-flex justify-content-center mt-100">
      <div class="col-md-6"> 
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
   <div class="button" id="next" onClick={
    ()=>{
      this.saveData()
    }
   }>Next &rarr;</div>
   
   <input class="button" id="submit" type="submit" value="Save Data"/>
   </div>
   </div>
  </div>
 
 
 
  <div id="logIn" class="dialog">   
    <div class=" formx form-content animate">
      <div class="mb-3 mt-3">
        <label for="email" class="form-label">Title:</label>
        <input type='text' class="form-control" id="title" placeholder="Enter Title" name="Title"onChange={(e)=>{
                        this.setState({title:e.target.value})
                    }}/>
      </div>
      <div class="mb-3 mt-3">
        <label for="email" class="form-label">company:</label>
        <input type="email" class="form-control" id="company" placeholder="Enter company" name="company"onChange={(e)=>{
                        this.setState({company:e.target.value})
                    }}/>
      </div>
      <div class="mb-3 mt-3">
        <label for="email" class="form-label">location:</label>
        <input type="email" class="form-control" id="location" placeholder="Enter location" name="location"
       onChange={(e)=>{
        this.setState({location:e.target.value})
    }}/>
      </div>
      <div class="form-check">
        <input id='checkbox_iswork' class='messageCheckbox' type='checkbox' onClick={
          ()=>{
            this.setState({
             is_work:!this.state.is_work
            })
          }
        }/>
        <label class="messageCheckbox" for="is_work">
          is current work in company
        </label>
      </div>
      <div class="container row">
       <div class="col-6">
        <label for="start_date">Start</label>
        <input id="start_date" class="form-control" type="date"   onChange={(e)=>{
        this.setState({start_date:e.target.value})
    }} />
       </div>
       <div class="col-6">
        <label for="end_date">End</label>
        <input id="end_date" class="form-control" type="date"  
         onChange={(e)=>{
          this.setState({end_date:e.target.value})
      }}/>
       </div>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Example textarea</label>
        <textarea class="form-control" id="description" rows="3"   onChange={(e)=>{
        this.setState({description:e.target.value})
    }}></textarea>
      </div>
      <button class="btn btn-primary w-100" id="addExpirence"  onClick={
        ()=>{
          this.add_experiences()
        }
      }>Submit</button>
    </div>
  </div>


  <div id="education" class="dialog">   
    <div class=" formx form-content animate">
      <div class="mb-3 mt-3">
        <label for="school" class="form-label">school:</label>
        <input type="text" class="form-control" id="school" placeholder="Enter school" name="school"/>
      </div>
      <div class="mb-3 mt-3">
        <label for="degree" class="form-label">degree:</label>
        <input type="text" class="form-control" id="degree" placeholder="Enter degree" name="degree"/>
      </div>
      <div class="mb-3 mt-3">
        <label for="study" class="form-label">study:</label>
        <input type="text" class="form-control" id="study" placeholder="Enter study" name="study"/>
      </div>
     
      <div class="container row">
       <div class="col-6">
        <label for="from year">from year</label>
        <input type="number" id="from_year" class="form-control"  />
       </div>
       <div class="col-6">
        <label for="to year">to year</label>
        <input type="number" id="to_year" class="form-control" />
       </div>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Example textarea</label>
        <textarea class="form-control" id="description2" rows="3"></textarea>
      </div>
      <button class="btn btn-primary w-100"  id='addEducation'>Submit</button>
    </div>
  </div>
            </div>
        )
    }
}
export default AddDetails;