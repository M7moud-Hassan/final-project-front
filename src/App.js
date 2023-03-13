
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/home_page';
import ActivateFreeLancer from './Components/index/activate';
import AddDetails from './Components/index/add_details';
import Login from './Components/index/Login';
import RegisterFreelancer from './Components/index/registerFreelancer';


function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/activate_freelancer/:uid/:token' element={<ActivateFreeLancer/>}/>
      <Route path='/addDetails/:uid/:token' element={<AddDetails/>}/>
      <Route path='/registration_fresslancer' element={<RegisterFreelancer/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App;