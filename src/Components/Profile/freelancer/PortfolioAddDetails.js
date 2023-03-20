import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom"
import axios from "axios";

const PortfolioAddDetails = () => {

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
                        <h3 className="mt-3"> AddDetails </h3>

                        <h5 className="text-start mt-5">Add Video</h5>
                        <input type="text" className="form-control w-100 rounded-pill " />
                        <p className="text-start mt-4">Images (.jpg, .gif, .png, up to 10 MB, no more than 4000 px in any dimension)</p>
                        <p className="text-start mt-3">   Videos (.mp4, .mov, .webm, .ogm, ogv, up to 100 MB, 2 maximum, More than 60 seconds)</p> 
                        <p className="text-start mt-3">    Audio (.mp3, .wav, up to 10 MB, 20 maximum)</p>
                        <p className="text-start mt-3">    Document (.pdf, up to 10 MB)</p>
                        
                        <h5 className="text-start mt-4">Project Description</h5>
                        <textarea className="form-control w-100 " rows="5" placeholder="Descripe what you did on the project"/>

                        <div className="mt-3">
                            <button className="me-3 rounded-pill btn text-success border-success" >Cancel </button>
                            <button className="ms-3 rounded-pill btn btn-success">Go to Preview </button>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}
export default PortfolioAddDetails;