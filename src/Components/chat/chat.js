
import axios from 'axios';
import React, { Component } from 'react';
import '../css/chat.css'
import Footer from '../Profile/freelancer/Footer';
import NavBar from '../Profile/freelancer/navbar';


class Chat extends Component {
    constructor() {
        super()
        this.state={
            socket: null,
            person:[]
           
        }
    }
    componentDidMount(){
        console.log("id",localStorage.getItem("uid"))
        axios.post(localStorage.getItem("type")=="user"?'http://localhost:8000/chat/getMessagesChatsClient/':'http://localhost:8000/chat/getMessagesChatsFree/',{
            id:localStorage.getItem("uid")
        })
        .then(res=>{
            console.log(res.data);
            this.setState({person:res.data})
        }).catch(error=>console.log(error))
       /* const newSocket = new WebSocket('ws://127.0.0.1:8000/ws/' + localStorage.getItem("type") +localStorage.getItem("uid")+ '/');
        newSocket.onopen = () => {
          console.log('WebSocket connected');
          this.setState({socket:newSocket})

          
      };
      
    newSocket.onclose = () => {
      console.log('WebSocket closed');
      this.setState({socket:null})
    };*/
    }
    render(){
        return (
        <div>
            <NavBar/>
        <div class="container mt-4">
        <div class="row clearfix">
            <div class="col-lg-12">
                <div class="card chat-app">
                    <div id="plist" class="people-list">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"
                                style={
                                    {
                                        width:"100%",
                                        height:"100%"
                                    }
                                }
                                ><i class="fa fa-search"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Search..."/>
                        </div>
                        <ul class="list-unstyled chat-list mt-2 mb-0">
                            {this.state.person.map(ele=>{
                                return (
                                    <li class="clearfix">
                                    <img src={localStorage.getItem("uid")=="user"?"http://localhost:8000"+ele.image:"http://localhost:8000"+ele.user_image} alt="avatar"/>
                                    <div class="about">
                                        <div class="name">{localStorage.getItem("uid")=="user"?ele.fname+" "+ele.lname:ele.first_name+" "+ele.last_name}</div>
                                        {ele.is_online?(<div class="status"> <i class="fa fa-circle online"></i> online </div>):(<div class="status"> <i class="fa fa-circle offline"></i> offline</div> )}                                           
                                    </div>
                                </li>
                                );
                            })}   
                        </ul>
                    </div>
                    <div class="chat">
                        <div class="chat-header clearfix">
                            <div class="row">
                                <div class="col-lg-6">
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"/>
                                    </a>
                                    <div class="chat-about">
                                        <h6 class="m-b-0">Aiden Chavez</h6>
                                        <small>Last seen: 2 hours ago</small>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div class="chat-history">
                            <ul class="m-b-0">
                                <li class="clearfix">
                                    <div class="message-data text-right" style={
                                        {
                                            textAlign:"right"
                                        }
                                    }>
                                        <span class="message-data-time">10:10 AM, Today</span>
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"/>
                                    </div>
                                    <div class="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                                </li>
                                <li class="clearfix">
                                    <div class="message-data">
                                        <span class="message-data-time">10:12 AM, Today</span>
                                    </div>
                                    <div class="message my-message">Are we meeting today?</div>                                    
                                </li>                               
                                <li class="clearfix">
                                    <div class="message-data">
                                        <span class="message-data-time">10:15 AM, Today</span>
                                    </div>
                                    <div class="message my-message">Project has been already finished and I have results to show you.</div>
                                </li>
                            </ul>
                        </div>
                        <div class="chat-message clearfix">
                            <div class="input-group mb-0">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" style={
                                        {
                                            height:"100%",
                                            width:"100%"
                                        }
                                    }><i class="fa fa-send"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Enter text here..."/>                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
        </div>
        )
    }
}

export default Chat;