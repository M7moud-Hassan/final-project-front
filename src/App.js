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
import ActivateFreeLancer from './Components/index/activate';
import AddDetails from './Components/index/add_details';
import Login from './Components/index/Login';


function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/activate_freelancer/:uid/:token' element={<ActivateFreeLancer/>}/>
      <Route path='/addDetails' element={<AddDetails/>}/>
      </Routes>
      </BrowserRouter>
// >>>>>>> 5541ff5b871329ebbda812027027c6dbb20b3d73
  )
}

export default App;