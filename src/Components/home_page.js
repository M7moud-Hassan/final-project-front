import React, { Component } from 'react';
import Footer from './index/Footer';
import NavBar from './index/navbar';
import Part1Home from './index/part1_home';
import Part2Home from './index/part2Home';

class Home extends Component{
    constructor(){
      super();


    }

    render(){
       return( <div>
            <NavBar/>
            <Part1Home/>
            <Part2Home/>
            <Footer/>
        </div>
       )
    }
}

export default Home;