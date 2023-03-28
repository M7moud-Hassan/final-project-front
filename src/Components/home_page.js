import React, { Component } from 'react';
import NavBar from './index/navbar_index';
import Part1Home from './index/part1_home';
import Part2Home from './index/part2Home';
import Footer from './Profile/freelancer/Footer';

class Home extends Component{
    constructor(){
      super();
    
    }

    render(){
      var type= localStorage.getItem("type");
      if(type=='free'){
      window.location = '/home_freelancer'
      }else if(type=='user')
      {
          window.location = '/clientprofile'
      }else{
       return( <div>
            <NavBar/>
            <Part1Home/>
            <Part2Home/>
            <Footer/>
        </div>
       )
      }
    }
}

export default Home;