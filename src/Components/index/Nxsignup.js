let Nxsignup = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <div class="container">
                    <a class="navbar-brand" href="#"><img src="images/upwork.svg" alt="Logo" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
        
        <div class="container ">
            <div class="row" id="empety"></div>
                <div class="row justify-content-md-center rowinthree " id="main">
                    <h1>Join as a client or freelancer</h1>
                    <div class="row justify-content-md-center">
                        <div class="col-ml-8">
                            <form method="post" id="form">
                                <section class="btn-group" id="inputsection">
                                    <input type="radio" name="btnradio" className="btn-check " id="gfg1"/>
                                    <label class="btn btn-outline-success" for="gfg1">
                                        I’m a client, hiring for a project
                                    </label>
                                    <div class="br"></div>
                                    <input type="radio" name="btnradio" class="btn-check" id="gfg3"/>
                                    <label className="btn btn-outline-success" for="gfg3">
                                        I’m a freelancer, looking for work
                                    </label>
                                    <div class="br"></div>
                                </section>
                                <button type="button" class="btn btn-success">Create Account</button>
                                <p className="mt-3">Already have an account?<a href=""> Log In</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Nxsignup;