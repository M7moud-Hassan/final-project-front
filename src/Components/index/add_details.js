import React, { Component } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

class AddDetails extends Component {
  constructor() {

    super();
    this.state = {
      i: 0,
      jobtitle: ""
    }
  }
  saveData() {
    if (this.state.i == 0) {
      // svae joptitle
      axios
        .post("http://127.0.0.1:8000/auth/jobTitle/", {
          "id": 1,
          "jobtitle": this.state.jobtitle
        })
    }
    this.setState({ i: this.state.i++ })
  }

  render() {
    return (
      <div className='bgColor'>

        <nav className="navbar navbar-expand-lg bg-body-tertiary ">

          <div className='container-fluid'>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <img id='logo' className='ms-5' src='\images\upwork.png' />
            <div className="collapse navbar-collapse" id="navbarScroll">
              <div className='d-flex'>
                <ul className='mt-3'>
                  <li className="nav-item dropdown dropFont">
                    <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Empty slot
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
                <ul className='mt-3'>
                  <li className="nav-item dropdown dropFont">
                    <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Empty slot
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
                <ul className='mt-3'>
                  <li className="nav-item dropdown dropFont">
                    <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Empty slot
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='w-100' >
                <form className="d-flex">
                  <div className="input-group ms-5 w-100">
                    <div className="search_box d-flex w-50">
                      <input className="form-control me-2 w-100 " type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>

                    <button className="btn btn-primary border-0 rounded ms-3" type="submit">Sign Up</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </nav>

        <div className='detailsContainer container'>
          <div className='secondContainer '>
            <section className="mysection container pt-5">
              <h1 className="text-success fontEditsHalf">Get now,add a title to tell the world whate you do</h1>

              <label className="text-success" for="joptitle">your professional role</label>
              <input type="email" className="form-control mt-3" id="jobtitle" />
            </section>
            <section className="mysection container">
              <h1 className="text-success fontEditsHalf mt-3">if you have relevant work  experience ,add it here</h1>
              <div className='row'>
                <div id="openExper" className="experience col-3">

                </div>
                <div id="cxcontent" className="row col-9">

                </div>
              </div>
              <input type='checkbox' onchange='onchangeCheckedNone(this.checked);' />
              <label className="messageCheckbox" for="is_work">not have experiences</label>
            </section>


            <section className="mysection container">
              <h1 className="text-success fontEditsHalf mt-3">if you have relevant Educations ,add it here</h1>
              <div className='row'>
                <div id="openEducat" className="experience col-3">

                </div>
                <div id="edcontent" className="row col-9">

                </div>
              </div>
              <input type='checkbox' onchange='onchangeCheckedNone(this.checked);' />
              <label className="messageCheckbox " for="is_work">not have Educations</label>
            </section>

            <section className="mysection container">
              <h1 className="text-success fontEditsHalf mt-3">if you have relevant SKills ,add it here</h1>
              <div className="row d-flex justify-content-center mt-100">
                <div className="col-md-6">
                  <select id="choices-multiple-remove-button" className='form-select' placeholder="Select upto 5 tags" multiple>
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
            <section className="mysection container">
              <div className="container">
                <h2 className='fontEditsHalf mt-3 text-success'>The word about your self</h2>
                <form action="/action_page.php">
                  <div className="mb-3 mt-3">
                    <label for="comment">your overview:</label>
                    <textarea className="form-control" rows="5" id="comment" name="text"></textarea>
                  </div>
                </form>
              </div>
            </section>

            <section className="mysection container">
              <h1 className="text-success fontEditsHalf mt-3">if you have relevant Services ,add it here</h1>
              <div className="row d-flex justify-content-center mt-100">
                <div className="col-md-6">

                  <select className='form-select' placeholder="Select upto 5 tags" aria-label="multiple select example" multiple>
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
            <div className="position-absolute bottom-0 text-center w-100 " >
              <div className="w-100" id="svg_wrap"></div>
              <div className="container">
                <div className="button" id="prev">&larr; Previous</div>
                <div className="button" id="next" onchange={
                  () => {
                    console.log("send data");
                    this.saveData()
                  }
                }>Next &rarr;</div>

                <input className="button" id="submit" type="submit" value="Save Data" />
              </div>
            </div>




            <div id="logIn" className="dialog container">
              <div className=" formx form-content animate">
                <div className="mb-3 mt-3">
                  <label for="email" className="form-label">Title:</label>
                  <input type="email" className="form-control" id="title" placeholder="Enter Title" name="Title" />
                </div>
                <div className="mb-3 mt-3">
                  <label for="email" className="form-label">company:</label>
                  <input type="email" className="form-control" id="company" placeholder="Enter company" name="company" />
                </div>
                <div className="mb-3 mt-3">
                  <label for="email" className="form-label">location:</label>
                  <input type="email" className="form-control" id="location" placeholder="Enter location" name="location" />
                </div>
                <div className="form-check">
                  <input id='checkbox_iswork' className='messageCheckbox' type='checkbox' />
                  <label className="messageCheckbox" for="is_work">
                    is current work in company
                  </label>
                </div>
                <div className="container row">
                  <div className="col-md-6">
                    <label for="start_date">Start</label>
                    <input id="start_date" className="form-control" type="date" />
                  </div>
                  <div className="col-md-6">
                    <label for="end_date">End</label>
                    <input id="end_date" className="form-control" type="date" />
                  </div>
                </div>
                <div className="mb-3">
                  <label for="description" className="form-label">Example textarea</label>
                  <textarea className="form-control" id="description" rows="3"></textarea>
                </div>
                <button className="btn btn-primary w-100" id="addExpirence">Submit</button>
              </div>
            </div>


            <div id="education" className="dialog container">
              <div className=" formx form-content animate">
                <div className="mb-3 mt-3">
                  <label for="school" className="form-label">school:</label>
                  <input type="text" className="form-control" id="school" placeholder="Enter school" name="school" />
                </div>
                <div className="mb-3 mt-3">
                  <label for="degree" className="form-label">degree:</label>
                  <input type="text" className="form-control" id="degree" placeholder="Enter degree" name="degree" />
                </div>
                <div className="mb-3 mt-3">
                  <label for="study" className="form-label">study:</label>
                  <input type="text" className="form-control" id="study" placeholder="Enter study" name="study" />
                </div>

                <div className="container row">
                  <div className="col-md-6">
                    <label for="from year">from year</label>
                    <input type="number" id="from_year" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label for="to year">to year</label>
                    <input type="number" id="to_year" className="form-control" />
                  </div>
                </div>
                <div className="mb-3">
                  <label for="description" className="form-label">Example textarea</label>
                  <textarea className="form-control" id="description2" rows="3"></textarea>
                </div>
                <button className="btn btn-primary w-100" id='addEducation'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default AddDetails;