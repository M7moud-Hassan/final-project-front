import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
const PaymentUser = () => {

    const paymentSection = useRef('');
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
        <div className="container">
            <div className="container w-75 paymentModal  ms-5 border border-success " ref={paymentSection}>
                <div className=" container mt-3">
                    <form className="text-center ">
                            <h3>Billing Address</h3>

                                <div className="row text-start">
                                    <div className="col-md-6 mt-3 ">
                                        <label for="fname" className=""><i className="fa fa-user"></i> Full Name</label>
                                        <input type="text" className="form-control" id="fname" name="firstname" placeholder="John M. Doe" />
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <label for="email"><i className="fa fa-envelope"></i> Email</label>
                                        <input type="text" id="email" name="email" className="form-control" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="mt-3 text-start">
                                    <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                    <input type="text" id="adr" name="address" className="form-control" placeholder="542 W. 15th Street" />
                                </div>

                                <div className="row text-start">
                                    <div className="col-md-4 mt-3">
                                        <label for="city"><i className="fa fa-institution"></i> City</label>
                                        <input type="text" id="city" name="city" className="form-control" placeholder="New York" />
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label for="state">State</label>
                                        <input type="text" id="state" name="state" className="form-control" placeholder="NY" />
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label for="zip">Zip</label>
                                        <input type="text" id="zip" name="zip" className="form-control" placeholder="10001" />
                                    </div>
                                </div>


                            <div className="row text-start ">
                                <div className="col-md-6 mt-3">
                                    <label for="cname">Name on Card</label>
                                    <input type="text" id="cname" name="cardname" className="form-control" placeholder="John More Doe" />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label for="ccnum">Credit card number</label>
                                    <input type="text" id="ccnum" name="cardnumber" className="form-control" placeholder="1111-2222-3333-4444" />
                                </div>
                            </div>
                            <div className="row mb-3 text-start">
                                <div className="col-md-4 mt-3">
                                    <label for="expmonth">Exp Month</label>
                                    <input type="text" id="expmonth" name="expmonth" className="form-control" placeholder="September" />
                                </div>
                                <div className="col-md-4 mt-3">
                                    <label for="expyear">Exp Year</label>
                                    <input type="text" id="expyear" name="expyear" className="form-control" placeholder="2018" />
                                </div>

                                <div className="col-md-4 mt-3 ">
                                    <label for="cvv">CVV</label>
                                    <input type="text" id="cvv" name="cvv" className="form-control" placeholder="352" />
                                </div>
                            </div>

                        <input type="submit" value="Continue to checkout" className="btn btn-success mb-3 mt-3" />
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
                            <NavLink to={'/'}><li><h2>My info</h2></li></NavLink>
                            <NavLink to={'/'}><li><h2>Billing & Payments</h2></li></NavLink>
                            <NavLink to={'/'}><li><h2>Change Password</h2></li></NavLink>
                        </ol>
                    </div>
                </div>
                <div className="col-md-8 ">
                    <h2>Billing & Method</h2>
                    <div className="container mt-3 settingBody">
                        <h3 className="mt-3 ">Billing Method </h3>

                        <button type="file" className="btn btn-outline-success btn-sm rounded-pill me-2 paymentSetting"
                         onClick={contactS}
                         >
                            Add a New Biling Method
                        </button>
                        <h6 className="text-start ms-3 mt-3">You have not set up any billing methods yet.</h6>
                        <p className=" text-start ms-3 me-3">Your billing method will charged only when your available balance from Upwork earnings is not sufficient to pay for your monthly membership and/or Connects.</p>

                    </div>
                </div>
            </div>
        </div>

    )

}

export default PaymentUser;