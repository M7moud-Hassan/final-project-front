import ClientProfile from "./Profile/client_profile/client_profile";
import ClientSettings1 from "./Profile/client_profile/client_settings1";
import Footer from "./Profile/freelancer/Footer";
import NavBar from "./Profile/freelancer/navbar";
import Profile from "./Profile/freelancer/profile"

let ProfileClient = () => {

    return <div>
            <NavBar/>
            <ClientProfile/>
            <Footer/>

    </div>
}
export default ProfileClient;