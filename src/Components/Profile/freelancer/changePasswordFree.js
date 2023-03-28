import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
const ChangePasswordFree = () => {

    const paymentSection = useRef('');
    const [passwordz, setPassword] = useState('');
    const [newPasswordz, setNewPassword] = useState('');
    useEffect(() => {
        window.addEventListener('beforeunload',function(){
            if(localStorage.getItem("type")=="user"){
              axios.post('http://localhost:8000/chat/de_active_client/',{
                id:localStorage.getItem("uid")
              }).then(res=>{
               
              })
            }else{
              axios.post('http://localhost:8000/chat/de_active_Free/',{
                id:localStorage.getItem("uid")
              })
            }
            return false;
          })
        paymentSection.current.focus();
    }, []);
    function contactS() {
        const DoM = paymentSection.current;
        DoM.style.display = 'block'
    }
    function XcontactS() {
        const DoM = paymentSection.current;
        DoM.style.display = 'none'
    }



    return (
        <div className="container text-center">
            <div className="container m-auto ChangePasswordModal border border-success animate" ref={paymentSection}>
                <div className=" container mt-3">
                    <form className="text-center w-75 m-auto" onSubmit={
                        (e) => {
                            e.preventDefault()
                            axios.post(`http://localhost:8000/profile/changePasswordFree/`, {
                                id: localStorage.getItem('uid'),
                                password: passwordz,
                                newPassword: newPasswordz

                            }).then(res => {
                                console.log(res.data);
                                XcontactS()
                            })
                        }
                    }>
                        <h3 className="text-start">Change Password</h3>
                        <div className="ms-3 mt-3">
                            <div className="row text-start">
                                <div className="col-md-12 mt-3">
                                    <label for="fname" className=""><i className="fa fa-user"></i>Old password</label>
                                    <input type="password" className="form-control mt-3" id="fname" name="password" placeholder="Old Password"
                                        value={passwordz}
                                        onChange={
                                            (e) => {
                                                setPassword(e.target.value)
                                            }}
                                    />
                                </div>
                            </div>

                            <div className="row text-start ">
                                <div className="col-md-6  mt-3">
                                    <label for="cname">New Password</label>
                                    <input type="password" id="cname" name="newPassword" className="form-control mt-3" placeholder="New Password"
                                        value={newPasswordz}
                                        onChange={
                                            (e) => {
                                                setNewPassword(e.target.value)
                                            }}
                                    />
                                </div>
                                <div className="col-md-6  mt-3">
                                    <label for="ccnum">Confirm new password</label>
                                    <input type="password" id="ccnum" name="cardnumber" className="form-control mt-3" placeholder="Confirm new password" />
                                </div>
                            </div>


                            <input type="submit" value="Update Password" className="btn btn-success mb-3 mt-3" />
                            <button className="btn btn-light text-success ms-5 border border-success"
                                onClick={XcontactS}
                            >Return</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-4 text-start">
                    <h2>Settings</h2>
                    <div>
                        <ol className="ordered" >
                            <NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'Black' })} to={'/Freelancersettings'}><li><h3>My info</h3></li></NavLink>
                            <NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'Black' })} to={'/FreePayment'}><li><h3>Billing & Payments</h3></li></NavLink>
                            <NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'Black' })} to={'/changeFreePassword'}><li><h3>Password & Security</h3></li></NavLink>
                            <NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'Black' })} to={'/profile_free'}><li><h3>Return to profile page </h3></li></NavLink>
                        </ol>
                    </div>
                </div>
                <div className="col-md-8 ">
                    <h2 className="text-start">Change password</h2>
                    <div className="container mt-3 settingBody">
                        <h3 className="mt-3 ">Authentication options</h3>

                        <button type="file" className="btn btn-outline-success btn-sm rounded-pill me-2 paymentSetting"
                            onClick={contactS}
                        >
                            Change Password
                        </button>
                        <h4 className="text-start ms-3 mt-3">Password</h4>
                        <h5 className="text-start ms-3 mt-3">Password has been set</h5>
                        <p className=" text-start ms-3 me-3">Choose a strong, unique password that’s at least 8 characters long.</p>

                    </div>
                </div>
            </div>
        </div>

    )

}

export default ChangePasswordFree;