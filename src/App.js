
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
import Search from './Components/home/freelancer/search';
import Cv_free from './Components/Profile/freelancer/cv_free';

import About from './Components/AboutUpwork';
import Help from './Components/HelpUpWork';

import JobS_Proposal from './Components/Profile/freelancer/job_proposals';
import JobS_Hire from './Components/home/freelancer/jobs_hire';
import JobS_Hire_Client from './Components/Profile/client_profile/jobs_hires_client';
import JobS_Finish_Client from './Components/Profile/client_profile/jobs_finish_client';
import Chat from './Components/chat/chat';
import NavBarIndex from './Components/index/navbar_index';







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
      <Route path='/job_details/:id' element={<Job_details/>}/>
      <Route path='/job_details/proposal/:id' element={<Proposal/>}/>
      <Route path='/search/:param1' element={<Search/>}/>
      <Route path='/cv_free/:title/:job/:cost/:id' element={<Cv_free/>}/>
      <Route path='/search/job_details/:id' element={<Job_details/>}/>
      <Route path='/search/job_details/proposal/:id' element={<Proposal/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Help' element={<Help/>}/>

      <Route path='/job_proposals' element={<JobS_Proposal/>}/>
      <Route path='/JobS_Hire' element={<JobS_Hire/>}/>
      <Route path='/jobs_hire_client/' element={<JobS_Hire_Client/>}/>
      <Route path='/jobs_finish_client/' element={<JobS_Finish_Client/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/chat/:id' element={<Chat/>}/>
      <Route path='/nav' element={<NavBarIndex/>}/>
      <Route path='*' element={<Error/>} />
      </Routes>
      </BrowserRouter>
  )
}


export default App;