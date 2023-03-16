
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
import ActivateFreeLancer from './Components/index/activate';import TestToken from './Components/index/test_token';
import Check_email from './Components/index/please_activate';
import './Components/js/jquery'
import Profile from './Components/Profile/profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';



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
      <Route path='/type_email' element={<TypeEmail/>}/>
      <Route path='/type_new_password' element={<Type_new_password/>}/>
      <Route path='/activate_user/:uid/:token' element={<ActivateUser/>}/>
      <Route path='/activate_free/:uid/:token' element={<ActivateFreeLancer/>}/>
      <Route path='/rest_password' element={<TypeEmail/>}/>
      <Route path='/rest_password_verfy/:uid/:type' element={<Type_new_password/>}/>
      <Route path='/test_token/:uid/:token/:type' element={<TestToken/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App;