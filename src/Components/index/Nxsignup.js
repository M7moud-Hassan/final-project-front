import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import Footer from "../Profile/freelancer/Footer";
let Nxsignup = () => {
   
    var useraccount = 0
    var type= localStorage.getItem("type");
    if(type=='free'){
    window.location = '/home_freelancer'
    }else if(type=='client')
    {
        window.location = '/clientprofile'
    }else{
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                <NavLink to={'/'}><img className='logos' src='./images/upwork.png' /> </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <div className="navbar-nav ms-auto">
                            {/* <div className="text-center">
                                Here to hire talent?
                                <NavLink to={'/registerUser'} className="text-center text-success mt-3"> Join as a Client</NavLink>
                            </div> */}
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container ">
                <div className="row" id="empety"></div>
                <div className="row justify-content-md-center rowinthree w-md-75 " id="main">
                    <h1 className="text-dark">Join as a client or freelancer</h1>
                    <div className="row justify-content-md-center">
                        <div className="col-ml-8">
                            <form method="post" id="form">
                                <section className="btn-group mb-3" id="inputsection">
                                    <div className="row justify-content-md-center ">
                                        <div className="col-md-5 mt-md-1 mt-3 me-md-3 border ChooseParent">

                                            <label className="Labels mt-3 ms-3 " for="gfg1">

                                                <input type="radio" name="btnradio" className="Labels" id="gfg1" onClick={
                                                    () => {
                                                        useraccount = 1
                                                    }
                                                } />
                                                
                                                <span className="Checks"></span>
                                            </label>
                                            <div className="mt-5 FixedFontWeight container pb-3" >I'm a client, hiring for a project</div>

                                        </div>

                                        <div className="col-md-5 ms-md-3 mt-md-1 mt-3 border ChooseParent">

                                            <label className="Labels mt-3 ms-3" for="gfg3">
                                                <input type="radio" name="btnradio" className="btn-check" id="gfg3" onClick={
                                                    () => {
                                                        useraccount = 2
                                                    }
                                                } />
                                                <span className="Checks"></span>
                                            </label>
                                            <div className="mt-5 FixedFontWeight container pb-3" >I'm a Freelancer, Looking for work</div>
                                        </div>
                                    </div>

                                </section>
                                <button type="button" className="btn btn-secondary mt-5 w-100 rounded-pill" onClick={
                                    () => {
                                        if (useraccount == 1) {
                                            window.location = '/registeruser'
                                        } else if (useraccount == 2) {
                                            window.location = '/registration_freelancer'
                                        }
                                    }
                                }>Creat Account</button>
                                <span>Already have an account?</span><span className="text-success"><a onClick={
                                    () => {
                                        window.location = '/login/'
                                    }
                                }> Log In</a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
                            }
}
export default Nxsignup;