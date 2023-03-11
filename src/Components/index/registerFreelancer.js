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
  
 
  <div class="container">

    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12 col-lg-9 col-xl-7">
            <div class="card shadow-2-strong card-registration my-5" id='register_form_card'>
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Sign up to find work you love</h3>

                <div class="my-3">
                  <div>
                    <button class="btn border border-secondary btn-block rounded-pill m-3  w-100"><i class="fa-brands fa-apple"></i> Countinue with Apple</button>
  
                  </div>
                  <div>
                    <button class="btn btn-primary btn-block rounded-pill m-3 w-100">Countinue with Google</button>


                  </div>
                </div>
                <hr></hr>
                <form method='post' class="needs-validation" novalidate>
                 

                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline position-relative">
                        <input type="text" id="firstName" placeholder="First Name" required
                          class="form-control  rounded-pill" />
                        <div class="invalid-feedback">
                          First name is required
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 mb-4">
                      <div class="form-outline position-relative">
                        <input type="text" id="lastName" placeholder="Last Name" required
                          class="form-control  rounded-pill" />
                        <div class="invalid-feedback">
                          Last name is required
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12 mb-4">
                      <div class="form-outline position-relative">
                        <input type="email" id="email" placeholder="Email (forexample@example.com)" required
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                          class="form-control  rounded-pill" />
                        <div class="invalid-feedback"
                             id="email-feedback">
                             Email is required
                          
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12 mb-4">
                      <div class="form-outline position-relative">
                        <input type="password" name="password" id="password"
                          placeholder="Password(8 or more characters)" pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}" required
                          class="form-control  rounded-pill" />
                          <div class="invalid-feedback" id="password-feedback">
                            Password must be at least 8 characters long and contain at least one letter and one digit
                          </div>
                          <div class="invalid-feedback" id="password-required-feedback">
                            Please enter a password
                          </div>
                      </div>
                    </div>
                  </div>

                  

                  <div class="form-group">
                    <div class="input-group position-relative">
                      <input type="text" class="form-control rounded-pill" placeholder="Phone number" id="phone"
                        name="phone" pattern="01[0-2]{1}[0-9]{8}" required></input>
                        <div class="invalid-feedback">
                          Please enter your Egyption phone like "01*********"
                        </div>

                    </div>
                  </div>

                  <div class="form-check mt-2">
                    <input class="form-check-input" type="checkbox" id="send_emails" name="send_emails"></input>
                    <label class="form-check-label" for="send_emails">
                      Send me helpful emails to find rewarding work and job leads
                    </label>
                  </div>

                  <div class=" row form-check mt-2">
                    <div class="col-md-12 mb-4">
                      <div class="form-outline position-relative">
                    <input class="form-check-input" type="checkbox" id="agree_terms" name="agree_terms" required></input>
                    <label class="form-check-label" for="agree_terms">
                      Yes, I understand and agree to the Upwork Terms of Service, including the <a href="#" class="text-success">User
                        Agreement</a> and <a href="#" class="text-success">Privacy Policy</a>
                    </label>
                    <div class="invalid-feedback text-danger" id="email-feedback">
                      Please accept the Upwork Terms of Service before continuing
                    </div>
                  </div>
                   </div>
                  </div>


                  <div class="mt-4 pt-2">
                    <input class="btn btn-success btn-block rounded-pill m-3 w-100" type="submit" value="Submit" />
                  </div>

                  <div class="text-center">
                    Already have an account?
                    <a href="#" class="text-center text-success mt-3"> Login</a>
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