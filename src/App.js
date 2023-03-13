
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/home_page';
import ActivateFreeLancer from './Components/index/activate';
import Login from './Components/index/Login';


function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/activate_freelancer/:uid/:token' element={<ActivateFreeLancer/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App;