import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom"
import axios from "axios";

const PortfolioProject = () => {

    return (
        <div className="container row mt-5">
            <div className="col-sm-4 ">
                <div>
                    <ol className="ordered" >
                        <NavLink to={'/'}><li><h2>Add Project</h2></li></NavLink>
                        <NavLink to={'/'}><li><h2>Add Details</h2></li></NavLink>
                    </ol>
                </div>
            </div>
            <div className="col-sm-8 ">
                <div className="container mt-3 settingBody ">
                    <div className="ms-4 me-4">
                        <h3 className="mt-3">ِAdd portfolio project </h3>

                        <h6 className="text-start mt-5">Project Tite</h6>
                        <input className="form-control w-100 " />
                        <h6 className="text-start mt-4">Related Specilized Profile</h6>
                        <input className="form-control w-100 " />
                        <h6 className="text-start mt-4">Related Upwork Job<span className="text-muted"> (optinal)</span></h6>
                        <p>Once you've completed contracts on Upwork, you'll be able to link your work.</p>
                        <h6 className="text-start mt-4">Related Upwork Job<span className="text-muted"> (optinal)</span></h6>
                        <input type="date" className="form-control w-100 " />
                        <div className="mt-3">
                            <button className="me-3 rounded-pill btn text-success border-success">Cancel </button>
                            <button className="ms-3 rounded-pill btn btn-success">Go to Select Template </button>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}
export default PortfolioProject;