let Login = () => {
    return (
        <div className="container">
            <section className="vh-100 gradient-custom">
                <div class="container py-5 h-100">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col-12 col-lg-9 col-xl-7">
                            <div class="card shadow-2-strong card-registration my-5">
                                <div class="card-body p-4 p-md-5">
                                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Login</h3>
                                    <div class="my-3">

                                        <form class="needs-validation" novalidate>

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

                                            <div>
                                                <input class="btn btn-success btn-block rounded-pill  w-100" type="submit" value="Submit" />
                                            </div>

                                        </form>
                                        <div className="container d-flex hrContain mt-4">
                                            <div className="like-hr"></div>
                                            <p>or</p>
                                            <div className="like-hr"></div>
                                        </div>
                                        <div>
                                            <button class="btn btn-primary btn-block rounded-pill w-100">Countinue with Google</button>
                                        </div>
                                        <div className="container d-flex hrContain mt-4">
                                            <div className="like-hr"></div>
                                            <p>or</p>
                                            <div className="like-hr"></div>
                                        </div>
                                        <div>
                                            <button class="btn btn-light btn-block rounded-pill w-100 border border-success">Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Login;

