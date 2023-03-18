const ClientSettings1 = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-4">
                    <div>
                        <ol className="ordered" >
                           <a href="#" ><li><h2>My info</h2></li></a>
                           <a href="#" ><li><h2>Billing & Payments</h2></li></a>
                        </ol>
                    </div>
                </div>
                <div className="col-8 ">
                    <div className="container mt-3 settingBody">
                        <h3 className="mt-3">Account </h3>
                        <img className="settingImage mt-5 mb-5" src="./images/default.png" />
                        <hr className="w-100"/>
                        <h3>User name Here <span className="text-muted">client</span></h3>
                        <h3>Email Here </h3>
                    </div>
                </div>
                <div className="col-4"></div>
                <div className="col-8 mt-5">
                    <div className="container mt-3 settingBody ">
                        <h3 className="mt-3">Company Details </h3>
                        <img className="settingImage mt-5 mb-5" src="./images/buildefault.png" />
                        <hr className="w-100" />
                        <h3>User name Here </h3>
                    </div>
                </div>
                <div className="col-4"></div>
                <div className="col-8 mt-5">
                    <div className="container mt-3 settingBody ">
                        <h3 className="mt-3">Company Contacts </h3>

                        <h5 className="mt-3">Owner</h5>
                        <h6>User name Here </h6>
                        <hr className="w-100" />
                        <h5>Phone</h5>
                        <h6>User phone Here </h6>
                        <hr className="w-100" />
                        <h5>Time zone </h5>
                        <h6>User phone Here </h6>
                        <hr className="w-100" />
                        <h5>Address </h5>
                        <h6>User address Here </h6>

                    </div>
                </div>
                <div className="col-4"></div>
                <div className="col-8 mt-5 mb-5">
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