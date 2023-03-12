import React, { Component } from 'react';
import NavBar from './index/navbar';
import Part1Home from './index/part1_home';


class Home extends Component{
    constructor(){
      super();


    }

    render(){
        return(
            <div>
                <NavBar/>
                <Part1Home/>
            </div>
        )
    }
}
export default Home;