import ClientProfile from "./Profile/client_profile/client_profile";
import Footer from "./Profile/freelancer/Footer";
import NavBar from "./Profile/freelancer/navbar";

let ProfileClient = () => {
    if(localStorage.getItem('uid'))
    {
      if(localStorage.getItem('type')=='user'){
    return <div>
            <NavBar/>
            <ClientProfile/>
            <Footer/>

    </div>
    }
    else{
      window.location='/error'
    }
    }else{
    window.location='/error'
    }
    
}
export default ProfileClient;