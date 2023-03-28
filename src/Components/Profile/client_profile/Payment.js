import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios
    from "axios";
import NavBar from "../freelancer/navbar";
import Footer from "../freelancer/Footer";
const PaymentUser = () => {

    const [client_id, setId] = useState('');
    const [data, setData] = useState('');
    const [nameOnTheCardz, setNameOnTheCard] = useState('');
    const [emailz, setEmail] = useState('');
    const [Expire_yearz, setExpire_year] = useState('');
    const [streetz, setStreet] = useState('');
    const [cityz, setCity] = useState('');
    const [statez, setState] = useState('');
    const [Credit_numberz, setCredit_number] = useState('');
    const [CVVz, setCVV] = useState('');
    const [Expire_monthz, setExpire_month] = useState('');
    const [Zip_codez, setZip_code] = useState('');
    const [cards, setCards] = useState([]);
    const paymentSection = useRef('');


    useEffect(() => {
        axios.post(`http://127.0.0.1:8000/profile/clientPaymentCards/`, { client_id: localStorage.getItem('uid') })
            .then(res => {
                if(res.data!='not found'){
                    setCards(res.data);
                    console.log(res.data);
                }
               
            })
            .catch(err => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
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
        <div>
            <NavBar/>
        <div className="container">
            <div className="container w-75 paymentModal  ms-5 border border-success " ref={paymentSection}>
                <div className=" container mt-3">
                    <form className="text-center " onSubmit={
                        (e) => {
                            e.preventDefault()
                            axios.post(`http://127.0.0.1:8000/profile/payment/`, {
                                street: streetz,
                                city: cityz,
                                state: statez,
                                Zip_code: Zip_codez,
                                nameOnTheCard: nameOnTheCardz,
                                Expire_month: Expire_monthz,
                                CVV: CVVz,
                                email: emailz,
                                Expire_year: Expire_yearz,
                                Credit_number: Credit_numberz,
                                client_id: localStorage.getItem('uid')
                            }).then(res => {

                                console.log(res.data);
                                XcontactS()

                            })
                        }

                    }>
                        <h3>Billing Address</h3>

                        <div className="row text-start">
                            <div className="col-md-6 mt-3 ">
                                <label for="fname" className=""><i className="fa fa-user"></i>Full Name</label>
                                <input type="text" className="form-control" id="fname" name="nameOnTheCard" required placeholder="Name Exactly on the Card"
                                    value={nameOnTheCardz}
                                    onChange={
                                        (e) => {
                                            setNameOnTheCard(e.target.value)
                                        }}
                                />
                            </div>
                            <div className="col-md-6 mt-3">
                                <label for="email"><i className="fa fa-envelope"></i> Email</label>
                                <input type="text" id="email" name="email" required className="form-control" placeholder="john@example.com"
                                    value={emailz}
                                    onChange={
                                        (e) => {
                                            setEmail(e.target.value)
                                        }}
                                />
                            </div>
                        </div>
                        <div className="row text-start">
                            <div className="col-md-4 mt-3">
                                <label for="city"><i className="fa fa-institution"></i> City</label>
                                <input type="text" id="city" name="city" required className="form-control" placeholder="Just Enter your city"
                                    value={cityz}
                                    onChange={
                                        (e) => {
                                            setCity(e.target.value)
                                        }}
                                />
                            </div>
                            <div className="col-md-4 mt-3">
                                <label for="state">State</label>
                                <input type="text" id="state" name="state" required className="form-control" placeholder=" Your state on card "
                                    value={statez}
                                    onChange={
                                        (e) => {
                                            setState(e.target.value)
                                        }}
                                />
                            </div>
                            <div className="col-md-4 mt-3">
                                <label for="zip">Zip</label>
                                <input type="text" id="Zip_code" name="Zip_code" required pattern="[0-9]{5}" className="form-control" placeholder="10001"
                                    value={Zip_codez}
                                    onChange={
                                        (e) => {
                                            setZip_code(e.target.value)
                                        }}
                                />
                            </div>
                        </div>

                        <div className="row text-start ">
                            <div className="col-md-6 mt-3">
                                <label for="cname">Street</label>
                                <input type="text" id="cname" name="street" required className="form-control" placeholder="22st iTi Street"
                                    value={streetz}
                                    onChange={
                                        (e) => {
                                            setStreet(e.target.value)
                                        }}
                                />
                            </div>
                            <div className="col-md-6 mt-3">
                                <label for="ccnum">Credit card number</label>
                                <input type="text" id="ccnum" name="Credit_number" required pattern="[0-9]{16}"  className="form-control" placeholder="1111-2222-3333-4444"
                                    value={Credit_numberz}
                                    onChange={
                                        (e) => {
                                            setCredit_number(e.target.value)
                                        }}
                                />
                            </div>
                        </div>
                        <div className="row mb-3 text-start">
                            <div className="col-md-4 mt-3">
                                <label for="expmonth">Exp Month</label>
                                <input type="number" id="expmonth" name="Expire_month" required className="form-control" min="1" max="12" placeholder="use month number"
                                    value={Expire_monthz}
                                    onChange={
                                        (e) => {
                                            setExpire_month(e.target.value)
                                        }}
                                />
                            </div>
                            <div className="col-md-4 mt-3">
                                <label for="expyear">Exp Year</label>
                                <input type="number" id="expyear" name="Expire_year" required min="2000" max="2030" className="form-control" placeholder="for exapmle 2024"
                                    value={Expire_yearz}
                                    onChange={
                                        (e) => {
                                            setExpire_year(e.target.value)
                                        }}

                                />
                            </div>

                            <div className="col-md-4 mt-3 ">
                                <label for="cvv">CVV</label>
                                <input type="text" id="cvv" name="CVV" className="form-control" required pattern="[0-9]{3}" placeholder="xxx"
                                    value={CVVz}
                                    onChange={
                                        (e) => {
                                            setCVV(e.target.value)
                                        }}
                                />
                            </div>
                        </div>

                        <input type="submit" value="Continue to checkout" required className="btn btn-success mb-3 mt-3" />
                        <button className="btn btn-light text-success ms-5"
                            onClick={XcontactS}
                        >Return</button>
                    </form>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-4">
                    <h2>Settings</h2>
                    <div>
                        <ol className="ordered" >
                            <NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'Black' })} to={'/clientsettings'}><li><h3>My info</h3></li></NavLink>
                            <NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'Black' })} to={'/ClientPayment'}><li><h3>Billing & Payments</h3></li></NavLink>
                            <NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'Black' })} to={'/changeUserPassword'}><li><h3>Password & Security</h3></li></NavLink>
                            <NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'Black' })} to={'/clientprofile'}><li><h3>Return to client page</h3></li></NavLink>
                        </ol>
                    </div>
                </div>
                <div className="col-md-8 mb-5">
                    <h2>Billing & Method</h2>
                    <div className="container mt-3 settingBody">
                        <h3 className="mt-3 ">Billing Method </h3>

                        <button type="file" className="btn btn-outline-success btn-sm rounded-pill me-2 paymentSetting"
                            onClick={contactS}
                        >
                            Add a New Biling Method
                        </button>

                        <p className=" text-start ms-3 me-3">Your billing method will charged only when your available balance from Upwork earnings is not sufficient to pay for your monthly membership and/or Connects.</p>
                        <div className=" container text-start mt-3 ">
                            {cards?(cards.map(card => (
                                <div className="PaymentContainer p-4" key={card.id}>
                                    <h6 className="text-dark">Card Number : <span className="text-muted"> {card.id}</span></h6>
                                    <h6 className="text-dark">Name on the card : <span className="text-muted">{card.nameOnTheCard}</span></h6>
                                    <h6 className="text-dark">Credit card number : <span className="text-muted">{card.Credit_number}</span></h6>
                                    <h6 className="text-dark">Expiration date : <span className="text-muted">{card.Expire_month}</span> / <span className="text-muted">{card.Expire_year}</span></h6>
                                    <h6 className="text-dark">CVV : <span className="text-muted">{card.CVV}</span></h6>
                                    <h6 className="text-dark">Email : <span className="text-muted">{card.email}</span></h6>
                                    <h6 className="text-dark">City : <span className="text-muted">{card.city}</span></h6>
                                    <h6 className="text-dark">State : <span className="text-muted">{card.state}</span></h6>
                                    <h6 className="text-dark">Zip code : <span className="text-muted">{card.Zip_code}</span></h6>
                                </div>
                            ))):(<div></div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>

    )

}

export default PaymentUser;