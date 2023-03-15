
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/home_page';
import AddDetails from './Components/index/add_details';
import Login from './Components/index/Login';
import Nxsignup from './Components/index/Nxsignup';
import RegisterFreelancer from './Components/index/registerFreelancer';
import TypeEmail from './Components/index/type_email';
import Type_new_password from './Components/index/type_new_password';
import RegisterUser from './Components/index/registerUser';
import PleaseActivate from './Components/index/please_activate';
import ActivateUser from './Components/index/activate_user';
import ActivateFreeLancer from './Components/index/activate';

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
      <Route path='/please_activate/:email' element={<PleaseActivate/>}/>
      <Route path='/type_email' element={<TypeEmail/>}/>
      <Route path='/type_new_password' element={<Type_new_password/>}/>
      <Route path='/activate_user/:uid/:token' element={<ActivateUser/>}/>
      <Route path='/activate_free/:uid/:token' element={<ActivateFreeLancer/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App;