import logo from './logo.svg';
import './App.css';
import  RegisterFreelancer  from './components/index/reagister'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
   <RegisterFreelancer/>
    </BrowserRouter>
</div>
  );
}

export default App;
