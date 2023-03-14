
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/home_page';
import ActivateFreeLancer from './Components/index/activate';
import AddDetails from './Components/index/add_details';
import Login from './Components/index/Login';
import Nxsignup from './Components/index/Nxsignup';
import RegisterFreelancer from './Components/index/registerFreelancer';
import TypeEmail from './Components/index/type_email';
import Type_new_password from './Components/index/type_new_password';
import RegisterUser from './Components/index/registerUser';

function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/activate_freelancer/:uid/:token' element={<ActivateFreeLancer/>}/>
      <Route path='/addDetails/:uid/:token' element={<AddDetails/>}/>
      <Route path='/registration_freelancer' element={<RegisterFreelancer/>}/>
      <Route path='/choose_account' element={<Nxsignup/>}/>
      <Route path='/registeruser' element={<RegisterUser/>}/>
      <Route path='/type_email' element={<TypeEmail/>}/>
      <Route path='/type_new_password' element={<Type_new_password/>}/>

      </Routes>
      </BrowserRouter>
  )
}

export default App;