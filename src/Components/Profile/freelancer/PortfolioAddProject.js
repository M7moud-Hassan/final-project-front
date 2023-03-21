import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom"
import axios from "axios";

const PortfolioProject = () => {
    const [title,SetTitle]=useState('')
    const [date_time,setDateime]=useState('0000-00-00')

    return (
        <div className="container row mt-5">
            <div className="col-sm-4 ">
            <div>
                    <ol className="ordered" >
                        <NavLink ><li><h2 style={
                            {
                                color:"blue"
                            }
                        }>Add Project</h2></li></NavLink>
                        <NavLink ><li><h2 style={
                            {
                                color:"gray"
                            }
                        }>Add Details</h2></li></NavLink>
                    </ol>
                </div>
            </div>
            
            <div className="col-sm-8 ">
            <form className=" needs-validation" novalidate onSubmit={
                (e)=>{
                    e.preventDefault()
                    window.location='/PortfolioAddDetails/'+title+'/'+date_time
                }
            } >
                <div className="container mt-3 settingBody ">
                    <div className="ms-4 me-4">
                        <h3 className="mt-3">ِAdd portfolio project </h3>

                        <h6 className="text-start mt-5">Project Tite</h6>
                        <input className="form-control w-100 " value={title} onChange={
                            (e)=>{
                                SetTitle(e.target.value)
                            }
                        } required/>
                        <h6 className="text-start mt-4">Related Upwork Job<span className="text-muted"> (optinal)</span></h6>
                        <input type="date" className="form-control w-100 "  value={date_time} onChange={
                            (e)=>{
                                setDateime(e.target.value)
                            }
                        }/>
                        <div className="mt-3">
                            <button className="me-3 rounded-pill btn text-success border-success" onClick={
                                ()=>{
                                    window.location='/profile_free'
                                }
                            }>Cancel </button>
                            <button type="submit" className="ms-3 rounded-pill btn btn-success">Go to Select Template </button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
           



        </div>

    )
}
export default PortfolioProject;