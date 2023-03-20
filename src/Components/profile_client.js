import ClientProfile from "./Profile/client_profile/client_profile";
import ClientSettings1 from "./Profile/client_profile/client_settings1";
import Footer from "./Profile/freelancer/Footer";
import NavBar from "./Profile/freelancer/navbar";
import Profile from "./Profile/freelancer/profile"

let ProfileClient = () => {
    if(localStorage.getItem('uid'))
    {
      if(localStorage.getItem('type')=='user'){
    return <div>
            <ClientProfile/>
            <Footer/>

    </div>
    }
    else{
        window.location='/profile_free'
    }
    }else{
    window.location='/error'
    }
    
}
export default ProfileClient;