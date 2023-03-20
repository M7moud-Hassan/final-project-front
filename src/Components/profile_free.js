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

}
export default ProfileFreeLancer;