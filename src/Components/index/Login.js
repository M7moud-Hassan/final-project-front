import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Footer from "../Profile/freelancer/Footer";
import NavBarIndex from "./navbar_index";

function Login() {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMess] = useState('');
    const [typeErro, SetTypeError] = useState('');


    let loginCheck = (e) => {
        SetTypeError('')
        setMess('')

        e.preventDefault();
        axios.post('http://localhost:8000/auth/login/', { email: email, password: password, })
            .then((res) => {
                console.log(res.data.ress);
                if (res.data.ress == 'ok') {
                    localStorage.setItem("uid", res.data.id);
                    localStorage.setItem("userName", res.data.name);
                    localStorage.setItem("type", res.data.type);
                    if(res.data.type=='free'){
                    window.location = '/home_freelancer'
                    }else if(res.data.type=='user')
                    {
                        window.location = '/clientprofile'
                    }
                } else if (res.data.ress == 'not active') {
                    SetTypeError('alert alert-danger')
                    setMess('user not active')
                    // self.setMess('user not active')
                    //mesg error
                } else if (res.data.ress == 'password worng') {
                    SetTypeError('alert alert-danger')
                    setMess('password or email is  wrong')
                } else if (res.data.ress == 'not complete') {
                    localStorage.setItem("id", res.data.id);
                     axios.get("http://127.0.0.1:8000/auth/get_skills/").then(sskills=>{
                        localStorage.setItem('skills',JSON.stringify(sskills.data))
                     })
            
                    axios.get("http://127.0.0.1:8000/auth/get_Services/").then(services=>{
                        localStorage.setItem('services',JSON.stringify(services.data))
                       
                        window.location = '/addDetails'
                    })
                  
                }else if(res.data.ress=="not found"){
                    SetTypeError('alert alert-danger')
                    setMess('this email not register')
                }
            })
            .catch((err) => { console.log(err) });
    }
    console.log(msg);
    var type= localStorage.getItem("type");
    if(type=='free'){
    window.location = '/home_freelancer/'
    }else if(type=='user')
    {
        window.location = '/clientprofile'
    }else{
    return (
        <div>
          <NavBarIndex/>
          <div>

          <div className="text-center">
                <div className={typeErro}>
                    {msg}
                </div></div>
            <div className="container">
                <section className="vh-100 gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-9 col-xl-7">
                                <div className="card shadow-2-strong card-registration my-5">
                                    <div className="card-body p-4 p-md-5">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Login</h3>
                                        <div className="my-3">

                                            <form className="needs-validation" novalidate onSubmit={loginCheck}>

                                                <div className="row">
                                                <div className="col-md-12 mb-4">
                                                <div className="form-outline position-relative">
                                                        <input type="email" class="form-control" id="validationCustom03"  placeholder="Email (forexample@example.com)"
                                                          pattern="+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                                                          className="form-control  rounded-pill" 
                                                          value={email}
                                                          onChange={(e)=> setEmail(e.target.value)}
                                                        required/>
                                                        <div class="invalid-feedback">
                                                        Email is required

                                                        </div>
                                                    </div>
                                                    </div>
                                                    
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-outline position-relative">
                                                            <input type="password" name="password" id="password"
                                                                placeholder="Password(8 or more characters)"
                                                                //  pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}" required
                                                                value={password}
                                                                className="form-control  rounded-pill" 
                                                                onChange={(e)=> setPassword(e.target.value)} required/>
                                                            <div className="invalid-feedback" id="password-feedback">
                                                                Password must be at least 8 characters long and contain at least one letter and one digit
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
                                                <NavLink className="btn btn-primary btn-block rounded-pill w-100" to={'/rest_password'}>Forget Password</NavLink>
                                            </div>
                                            <div className="container d-flex hrContain mt-4">
                                                <div className="like-hr"></div>
                                                <p>or</p>
                                                <div className="like-hr"></div>
                                            </div>
                                            <div>
                                                <NavLink className="btn btn-light btn-block rounded-pill w-100 border border-success" to={"/choose_account"}>Sign Up</NavLink>
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
         <div style={
            {
                height:"50px"
            }
         }></div>
          <Footer/>
        
        </div>
    )
                    }

}
export default Login;

