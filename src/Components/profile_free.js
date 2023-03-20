import { BrowserRouter, Route, Routes } from "react-router-dom";
import FreeSettings from "./Profile/freelancer/FreelancerSettings";
import FreeSettings1 from "./Profile/freelancer/FreelancerSettings";
import PaymentFreeLancer from "./Profile/freelancer/PaymentFree";
import PortfolioAddDetails from "./Profile/freelancer/PortfolioAddDetails";
import PortfolioAddProject from "./Profile/freelancer/PortfolioAddProject";
import Profile from "./Profile/freelancer/profile"

let ProfileFreeLancer = () => {

    if(localStorage.getItem('uid')!=undefined)
    {
      if(localStorage.getItem('type')=='free'){
        return <Profile/>
    }
    else{
        window.location='/error'
    }
    }else{
    window.location='/error'
    }  

    //     }
    //     else {
    //         window.location = '/clientprofile'
    //     }
    // } else {
    //     window.location = '/error'
    // }
    // return <FreeSettings/>
    return <PaymentFreeLancer/>
}
export default ProfileFreeLancer;