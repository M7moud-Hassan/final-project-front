
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import axios from "axios";

const ClientSettings1 = () => {
    const [id, setId] = useState('');
    const [data, setData] = useState('');
    const [phonez, setPhone] = useState('');


    const CheckPhone = (e) => {
        const Phone = e.target.value;
        console.log(Phone)
        const phonePattern = /^01[0125][0-9]{8}$/.test(Phone);
        if (phonePattern) {
          setPhone(Phone);}
          else{
            console(Phone)
          }
        
      };
    useEffect(() => {
        axios.post(`http://127.0.0.1:8000/profile/clientDetails/`, { id: localStorage.getItem('uid') })
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, [id]);


    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-4">
                    <div>
                        <ol className="ordered" >
                            <NavLink to={'/'}><li><h2>My info</h2></li></NavLink>
                            <NavLink to={'/'}><li><h2>Billing & Payments</h2></li></NavLink>
                        </ol>
                    </div>
                </div>
                <div className="col-sm-8 ">
                    <div className="container mt-3 settingBody">
                        <h3 className="mt-3">Account </h3>
                        <img className="settingImage mt-5 mb-5" src="./images/default.png" />
                        <hr className="w-100" />
                        <h3>{data.name} -<span className="text-muted"> client</span></h3>
                        <h3>{data.email}</h3>
                    </div>
                </div>

                <div className="col-sm-4"></div>
                <div className="col-sm-8 mt-5">
                    <div className="container mt-3 settingBody ">
                        <h3 className="mt-3">Contacts</h3>
                        <h2 className="fontAwsomeSetting"><i class="fa-regular fa-pen-to-square"></i></h2>
                        <h5 className="mt-3">Owner</h5>
                        <h6>{data.name}</h6>
                        <hr className="w-100" />
                        <h5>Phone</h5>
                        <h6>{data.phone}</h6>

                        <hr className="w-100" />
                        <h5>Address </h5>
                        <h6>User address Here </h6>

                    </div>
                </div>
                <div className="col-sm-4"></div>
                <div className="col-sm-8 mt-5 mb-5">
                    <div className="container mt-3 settingBody ">
                        <h3 className="mt-3">This is a client Account </h3>
                        <div className="mt-3">
                            <button className="btn btn-success rounded-pill">Create new Account</button>
                            <span className="ms-3 me-3"> or </span>
                            <button className="btn btn-light text-success rounded-pill">Close Account</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="contactModal container">
                <div>
                    <form>
                        <div class="row">
                            <div class="col-sm-6">
                                <input type="text" class="form-control" placeholder="First name" name="fname" aria-label="First name"/>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" placeholder="Last name" name="lname"  aria-label="Last name"/>
                            </div>
                            <div class="col-12">
                                <input type="text" class="form-control" placeholder="Phone number" name="phone" value={setPhone} 
                                onChange={CheckPhone}/>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" placeholder="Last name" name="street" aria-label="Last name"/>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" placeholder="Last name" name="city" aria-label="Last name"/>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" placeholder="Last name" name="state" aria-label="Last name"/>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" placeholder="Last name" name="postal_code" aria-label="Last name"/>
                            </div>
                        </div>
                        <input type="submit" value="Update"/>
                    </form>
                </div>
            </div>


        </div>
    )
}
export default ClientSettings1