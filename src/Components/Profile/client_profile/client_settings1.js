
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom"
import axios from "axios";

const ClientSettings1 = () => {

    const [id, setId] = useState('');
    const [data, setData] = useState('');
    const [phonez, setPhone] = useState('');
    const [fnamez, setFname] = useState('');
    const [lnamez, setLname] = useState('');
    const [streetz, setStreet] = useState('');
    const [cityz, setCity] = useState('');
    const [statez, setState] = useState('');
    const [postal_codez, setPostal_code] = useState('');
    const contactSection = useRef('');


    useEffect(() => {
        axios.post(`http://127.0.0.1:8000/profile/clientDetails/`, { id: localStorage.getItem('uid') })
            .then(res => {
                setData(res.data);
                console.log(res.data);
                setPhone(res.data.phone);
                setFname(res.data.fname);
                setLname(res.data.lname);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, [id]);
    useEffect(() => {
        contactSection.current.focus();
    }, []);
    useEffect(() => {
        axios.post(`http://localhost:8000/profile/secondaryDetails/`, {
            id: localStorage.getItem('uid'),
            street: streetz,
            city: cityz,
            state: statez,
            postal_code: postal_codez
        }).then(res => {
            // res.data.street = streetz
            setData(res.data);
            setStreet(res.data.street);
            setCity(res.data.city);
            setState(res.data.state);
            setPostal_code(res.data.postal_code);
        })

    })

    function contactS() {
        const DoM = contactSection.current;
        DoM.style.display = 'block'
    }
    function XcontactS() {
        const DoM = contactSection.current;
        DoM.style.display = 'none'
    }

    return (
        <div className="container">
            <div className="contactModal container w-75" ref={contactSection}>
                <div className=" container ">
                    <form >
                        <div class="row">
                            <div className="row mt-5">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline position-relative">
                                        <input type="text" id="firstName" placeholder="First Name" required
                                            className="form-control  rounded-pill" name="fname" value={fnamez}
                                            onChange={
                                                (e) => {
                                                    setLname(e.target.value)
                                                }
                                            } />
                                        <div className="invalid-feedback text-center">
                                            First name is required
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="form-outline position-relative">
                                        <input type="text" id="lastName" placeholder="Last Name" required
                                            className="form-control  rounded-pill ms-md-3" name="lname" value={lnamez}
                                            onChange={
                                                (e) => {
                                                    setLname(e.target.value)
                                                }
                                            } />
                                        <div className="invalid-feedback text-center">
                                            Last name is required
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-group position-relative mb-4">
                                    <input type="text" className="form-control rounded-pill" placeholder="Phone number" id="phone"
                                        name="phone" pattern="01[0125][0-9]{8}" value={phonez}
                                        onChange={
                                            (e) => {
                                                setPhone(e.target.value)
                                            }
                                        }
                                        required ></input>
                                    <div className="invalid-feedback text-center">
                                        Please enter your Egyption phone like "01*********"
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline position-relative">
                                        <input type="text" id="firstName" placeholder="Street" required
                                            className="form-control  rounded-pill" name="street" value={streetz}
                                            onChange={
                                                (e) => {
                                                    setStreet(e.target.value)
                                                }
                                            } />
                                        <div className="invalid-feedback text-center">
                                            Street is required
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="form-outline position-relative">
                                        <input type="text" id="lastName" placeholder="City" required
                                            className="form-control  rounded-pill ms-md-3" name="city" value={cityz}
                                            onChange={
                                                (e) => {
                                                    setCity(e.target.value)
                                                }
                                            } />
                                        <div className="invalid-feedback text-center">
                                            City is required
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline position-relative">
                                        <input type="text" id="firstName" placeholder="State" required
                                            className="form-control  rounded-pill" name="state" value={statez}
                                            onChange={
                                                (e) => {
                                                    setState(e.target.value)
                                                }
                                            } />
                                        <div className="invalid-feedback text-center">
                                            State is required
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="form-outline position-relative">
                                        <input type="text" id="lastName" placeholder="postal_code" required
                                            className="form-control  rounded-pill ms-md-3" name="postal_code" value={postal_codez}
                                            onChange={
                                                (e) => {
                                                    setPostal_code(e.target.value)
                                                }
                                            } />
                                        <div className="invalid-feedback text-center">
                                            Postal Code is required
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Update" className="btn btn-success" />
                        <button className="btn btn-light text-success ms-5" onClick={XcontactS} > Retun </button>
                    </form>
                </div>
            </div>
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
                        <h2 className="fontAwsomeSetting"><button className="btn btn-success" onClick={contactS}><i class="fa-regular fa-pen-to-square " ></i></button></h2>
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


        </div>
    )
}
export default ClientSettings1