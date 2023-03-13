import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/home';
import Login from './Components/index/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div> 
  )
}

export default App;