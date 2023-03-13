let Login = () => {
    return (
        <div> <nav class="navbar navbar-expand-lg navbar-light bg-white">
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

        <div className="container">
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration my-5">
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Login</h3>
                                    <div className="my-3">

                                        <form className="needs-validation" novalidate>

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

                                            <div>
                                                <input className="btn btn-success btn-block rounded-pill  w-100" type="submit" value="Submit" />
                                            </div>

                                        </form>
                                        <div className="container d-flex hrContain mt-4">   
                                            <div className="like-hr"></div>
                                            <p>or</p>
                                            <div className="like-hr"></div>
                                        </div>
                                        <div>
                                            <button className="btn btn-primary btn-block rounded-pill w-100">Countinue with Google</button>
                                        </div>
                                        <div className="container d-flex hrContain mt-4">
                                            <div className="like-hr"></div>
                                            <p>or</p>
                                            <div className="like-hr"></div>
                                        </div>
                                        <div>
                                            <button className="btn btn-light btn-block rounded-pill w-100 border border-success">Sign Up</button>
                                        </div>
                                    </div>
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
export default Login;

