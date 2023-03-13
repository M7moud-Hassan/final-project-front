import React, { Component } from 'react';


class RegisterFreelancer extends Component{
    constructor(){
      super();


    }

    render(){
        return(
            <div>

  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="logo/upwork.svg" alt="Logo"></img></a>
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
  
 
  <div className="container">

    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration my-5" id='register_form_card'>
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Sign up to find work you love</h3>

                <div className="my-3">
                  <div>
                    <button className="btn border border-secondary btn-block rounded-pill m-3  w-100"><i className="fa-brands fa-apple"></i> Countinue with Apple</button>
  
                  </div>
                  <div>
                    <button className="btn btn-primary btn-block rounded-pill m-3 w-100">Countinue with Google</button>


                  </div>
                </div>
                <hr></hr>
                <form method='post' className="needs-validation" noValidate>
                 

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline position-relative">
                        <input type="text" id="firstName" placeholder="First Name" required
                          className="form-control  rounded-pill" />
                        <div className="invalid-feedback">
                          First name is required
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <div className="form-outline position-relative">
                        <input type="text" id="lastName" placeholder="Last Name" required
                          className="form-control  rounded-pill" />
                        <div className="invalid-feedback">
                          Last name is required
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <div className="form-outline position-relative">
                        <input type="email" id="email" placeholder="Email (forexample@example.com)" required
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                          className="form-control  rounded-pill" />
                        <div className="invalid-feedback"
                             id="email-feedback">
                             Email is required
                          
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <div className="form-outline position-relative">
                        <input type="password" name="password" id="password"
                          placeholder="Password(8 or more characters)" pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}" required
                          className="form-control  rounded-pill" />
                          <div className="invalid-feedback" id="password-feedback">
                            Password must be at least 8 characters long and contain at least one letter and one digit
                          </div>
                          <div className="invalid-feedback" id="password-required-feedback">
                            Please enter a password
                          </div>
                      </div>
                    </div>
                  </div>

                  

                  <div className="form-group">
                    <div className="input-group position-relative">
                      <input type="text" className="form-control rounded-pill" placeholder="Phone number" id="phone"
                        name="phone" pattern="01[0-2]{1}[0-9]{8}" required></input>
                        <div className="invalid-feedback">
                          Please enter your Egyption phone like "01*********"
                        </div>

                    </div>
                  </div>

                  <div className="form-check mt-2">
                    <input className="form-check-input" type="checkbox" id="send_emails" name="send_emails"></input>
                    <label className="form-check-label" htmlFor="send_emails">
                      Send me helpful emails to find rewarding work and job leads
                    </label>
                  </div>

                  <div className=" row form-check mt-2">
                    <div className="col-md-12 mb-4">
                      <div className="form-outline position-relative">
                    <input className="form-check-input" type="checkbox" id="agree_terms" name="agree_terms" required></input>
                    <label className="form-check-label" htmlFor="agree_terms">
                      Yes, I understand and agree to the Upwork Terms of Service, including the <a href="#" className="text-success">User
                        Agreement</a> and <a href="#" className="text-success">Privacy Policy</a>
                    </label>
                    <div className="invalid-feedback text-danger" id="email-feedback">
                      Please accept the Upwork Terms of Service before continuing
                    </div>
                  </div>
                   </div>
                  </div>


                  <div className="mt-4 pt-2">
                    <input className="btn btn-success btn-block rounded-pill m-3 w-100" type="submit" value="Submit" />
                  </div>

                  <div className="text-center">
                    Already have an account?
                    <a href="#" className="text-center text-success mt-3"> Login</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
                


            </div>


        )
    }




}
export default RegisterFreelancer;