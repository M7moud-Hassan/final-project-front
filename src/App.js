
import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
// import  RegisterFreelancer  from './components/index/reagister'
// import logo from './logo.svg';

import Home from "./Components/Home";

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
                            {/* <Route path='/*' element={<Error/>}/> */}
                        </Routes>
                    {/* <Footer/>  */}
                </BrowserRouter>
            )
        }
    }

export default App;