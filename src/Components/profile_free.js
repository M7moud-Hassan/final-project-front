import Profile from "./Profile/freelancer/profile"

let ProfileFreeLancer = () => {

    if(localStorage.getItem('uid'))
    {
      if(localStorage.getItem('type')=='free'){
        return <Profile/>
    }
    else{
        window.location='/clientprofile'
    }
    }else{
    window.location='/error'
    }
   

}
export default ProfileFreeLancer;