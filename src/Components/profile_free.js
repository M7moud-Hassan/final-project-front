import { BrowserRouter, Route, Routes } from "react-router-dom";
import FreeSettings from "./Profile/freelancer/FreelancerSettings";
import FreeSettings1 from "./Profile/freelancer/FreelancerSettings";
import PortfolioAddDetails from "./Profile/freelancer/PortfolioAddDetails";
import PortfolioAddProject from "./Profile/freelancer/PortfolioAddProject";
import Profile from "./Profile/freelancer/profile"

let ProfileFreeLancer = () => {

    // if (localStorage.getItem('uid')) {
    //     if (localStorage.getItem('type') == 'free') {
    //         return <Profile />
    //         // return <FreeSettings/>

    //     }
    //     else {
    //         window.location = '/clientprofile'
    //     }
    // } else {
    //     window.location = '/error'
    // }
    return <FreeSettings/>
}
export default ProfileFreeLancer;