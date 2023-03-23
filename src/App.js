
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/home_page';
import AddDetails from './Components/index/add_details';
import Login from './Components/index/Login';
import Nxsignup from './Components/index/Nxsignup';
import RegisterFreelancer from './Components/index/registerFreelancer';
import TypeEmail from './Components/index/type_email';
import Type_new_password from './Components/index/type_new_password';
import RegisterUser from './Components/index/registerUser';
import ActivateUser from './Components/index/activate_user';
import ActivateFreeLancer from './Components/index/activate';
import TestToken from './Components/index/test_token';
import Check_email from './Components/index/please_activate';

import './Components/js/jquery'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import ProfileFreeLancer from './Components/profile_free';
// import ClientProfile from './Components/Profile/client_profile/client_profile';
import Error from './Components/index/error';
import ProfileClient from './Components/profile_client';
import ClientSettings1 from './Components/Profile/client_profile/client_settings1';
import PortfolioProject from './Components/Profile/freelancer/PortfolioAddProject';
import PortfolioAddDetails from './Components/Profile/freelancer/PortfolioAddDetails';
import FreeSettings from './Components/Profile/freelancer/FreelancerSettings';
import PaymentUser from './Components/Profile/client_profile/Payment';
import ChangePassword from './Components/Profile/client_profile/changePassword';
import ChangePasswordFree from './Components/Profile/freelancer/changePasswordFree';
import PaymentFreeLancer from './Components/Profile/freelancer/PaymentFree';
import HomeFreeLancer from './Components/home/freelancer/home';
import Job_details from './Components/home/freelancer/job_details';
import Proposal from './Components/home/freelancer/Proposal';






function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/addDetails' element={<AddDetails/>}/>
      <Route path='/registration_freelancer' element={<RegisterFreelancer/>}/>
      <Route path='/choose_account' element={<Nxsignup/>}/>
      <Route path='/registeruser' element={<RegisterUser/>}/>
      <Route path='/please_activate/:email' element={<Check_email/>}/>
      <Route path='/activate_user/:uid/:token' element={<ActivateUser/>}/>
      <Route path='/activate_free/:uid/:token' element={<ActivateFreeLancer/>}/>
      <Route path='/rest_password' element={<TypeEmail/>}/>
      <Route path='/rest_password_verfy' element={<Type_new_password/>}/>
      <Route path='/test_token/:uid/:token/:type' element={<TestToken/>}/>
      <Route path='/clientprofile' element={<ProfileClient/>}/>
      <Route path="/profile_free" element={<ProfileFreeLancer/>}/>
      <Route path='/clientsettings' element={<ClientSettings1/>}/>
      <Route path='/Freelancersettings' element={<FreeSettings/>}/>
      <Route path='/addPortFilo' element={<PortfolioProject/>}/>
      <Route path='/PortfolioAddDetails/:title/:date_time' element={<PortfolioAddDetails/>}/>
      <Route path='/ClientPayment' element={<PaymentUser/>}/>
      <Route path='/FreePayment' element={<PaymentFreeLancer/>}/>
      <Route path='/changeUserPassword' element={<ChangePassword/>}/>
      <Route path='/changeFreePassword'element={<ChangePasswordFree/>}/>
      <Route path='/home_freelancer' element={<HomeFreeLancer/>}/>
      <Route path='/job_details' element={<Job_details/>}/>
      <Route path='/proposal' element={<Proposal/>}/>


      <Route path='*' element={<Error/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App;