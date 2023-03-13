// import logo from './logo.svg';
// import Login from "./Components/Login";
import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import RegisterFreelancer  from './components/index/reagister';
import Home from "./Components/index/Home";
import Footer from "./Components/index/Footer";
import Login from "./Components/index/Login";
import Nxsignup from "./Components/index/Nxsignup";
class App extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return (
                <BrowserRouter>
                    {/* <Header/>            */}
                        <Routes>
                            <Route path='/login' element={<Login/>}/>
                            {/* <Route path='/register' element={<RegisterFreelancer/>}/> */}
                            <Route path='/home' element={<Home/>}/>
                            <Route path='/Nxsignup' element={<Nxsignup/>}/>
                            {/* <Route path='/*' element={<Error/>}/> */}
                        </Routes>
                    <Footer/> 
                </BrowserRouter>
            )
        }
    }

export default App;