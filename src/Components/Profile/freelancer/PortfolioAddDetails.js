import { useEffect, useState, useRef } from "react";
import { NavLink ,useParams} from "react-router-dom"
import axios from "axios";
import Footer from "./Footer";
import NavBar from "./navbar";

const PortfolioAddDetails = () => {
    const {title,date_time}=useParams();
    const [linkVideo,SetLinkVideo]=useState('');
    const [description,setDescription]=useState('');
    const [images,setImages] =useState([]);
    const [id,setId]=useState()

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
        if(localStorage.getItem("portfilo"))
        {
            var p=JSON.parse(localStorage.getItem("portfilo"));
           
            SetLinkVideo(p.linkvideo)
            setDescription(p.description)
            setId(p.id)

        }
       
      }, []);
    return (
      <div>
        <NavBar/>
          <div className="container row mt-5">
            <div className="col-sm-4 ">
                <div>
                    <ol className="ordered" >
                        <NavLink ><li><h2 style={
                            {
                                color:"gray"
                            }
                        }>Add Project</h2></li></NavLink>
                        <NavLink ><li><h2 style={
                            {
                                color:"blue"
                            }
                        }>Add Details</h2></li></NavLink>
                    </ol>
                </div>
            </div>
            <div className="col-sm-8 ">
                <form className=" needs-validation" novalidate onSubmit={
                (e)=>{
                    e.preventDefault()
                    if(localStorage.getItem("portfilo"))
                    {
                        axios.post('http://127.0.0.1:8000/profile/delPortFilo/',{
                            id:id
                        }).then(response=>{
                            axios.post('http://localhost:8000/profile/add_portfilo/',{
                    id:localStorage.getItem("uid"),
                    title:title,
                    date_time:date_time,
                    linkVide:linkVideo,
                    description:description,
                    "images":images
                 },
                 {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                      }
                 }).then(response=>{
                    if(response.data=='ok'){
                        localStorage.removeItem("portfilo")
                      window.location='/profile_free'
                    }
                 })
                        })
                    }else{
                 axios.post('http://localhost:8000/profile/add_portfilo/',{
                    id:localStorage.getItem("uid"),
                    title:title,
                    date_time:date_time,
                    linkVide:linkVideo,
                    description:description,
                    "images":images
                 },
                 {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                      }
                 }).then(response=>{
                    if(response.data=='ok'){
                      window.location='/profile_free'
                    }
                 })
                }
            }
            } >
                <div className="container mt-3 settingBody ">
                    <div className="ms-4 me-4">
                        <h3 className="mt-3"> AddDetails </h3>
                        <h5 className="text-start mt-5">add images for portfilo</h5>
                        <input type="file" className="form-control w-100 rounded-pill "  onChange={
                            (e)=>{
                              setImages(e.target.files)
                            }
                        } multiple required/>

                        <h5 className="text-start mt-5">Add Video <span className="text-muted h6"> -Optional</span></h5>
                        <input type="text"  className="form-control w-100 rounded-pill " placeholder="put your link here" value={linkVideo} onChange={
                            (e)=>{
                                SetLinkVideo(e.target.value);
                            }
                        }/>
                        {/* <p className="text-start mt-4">Images (.jpg, .gif, .png, up to 10 MB, no more than 4000 px in any dimension)</p>
                        <p className="text-start mt-3">   Videos (.mp4, .mov, .webm, .ogm, ogv, up to 100 MB, 2 maximum, More than 60 seconds)</p> 
                        <p className="text-start mt-3">    Audio (.mp3, .wav, up to 10 MB, 20 maximum)</p>
                        <p className="text-start mt-3">    Document (.pdf, up to 10 MB)</p> */}
                        
                        <h5 className="text-start mt-4">Project Description</h5>
                        <textarea className="form-control w-100 " rows="5" placeholder="Descripe what you did on the project" value={description} onChange={
                            (e)=>{
                                setDescription(e.target.value)
                            }
                        }required/>

                        <div className="mt-3">
                            <button type="button" className="me-3 rounded-pill btn text-success border-success" onClick={
                                ()=>{
                                    localStorage.removeItem("portfilo")
                                    window.location='/profile_free'
                                    
                                }
                            }>cancel</button>
                            <button type="submit" className="ms-3 rounded-pill btn btn-success">save data </button>
                        </div>
                    </div>
                </div>
                </form>
            </div>

        </div>
        <Footer/>
      </div>

    )
}
export default PortfolioAddDetails;