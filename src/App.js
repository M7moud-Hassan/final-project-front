import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div> 
  )
}

export default App;
