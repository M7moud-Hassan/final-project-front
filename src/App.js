// <<<<<<< HEAD
import  Navbar  from './Components/index/navbar'
import { BrowserRouter } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <Navbar/>
//     </div> 
// // =======
//   )}
import { Route, Routes } from 'react-router-dom';
import Home from './Components/home_page';
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
      <Route path='/addDetails/:uid/:token' element={<AddDetails/>}/>
      <Route path='/registration_freelancer' element={<RegisterFreelancer/>}/>
      <Route path='/choose_account' element={<Nxsignup/>}/>
      <Route path='/registeruser' element={<RegisterUser/>}/>
      <Route path='/type_email' element={<TypeEmail/>}/>
      <Route path='/type_new_password' element={<Type_new_password/>}/>
      </Routes>
      </BrowserRouter>
// >>>>>>> 5541ff5b871329ebbda812027027c6dbb20b3d73
  )
}

export default App;