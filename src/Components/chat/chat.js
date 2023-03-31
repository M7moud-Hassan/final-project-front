
import axios from 'axios';
import React, { Component } from 'react';
import '../css/chat.css'
import Footer from '../Profile/freelancer/Footer';
import NavBar from '../Profile/freelancer/navbar';


class Chat extends Component {
    constructor() {
        super()
        this.state = {
            socket: null,
            person: [],
            select_id: 0,
            p_select: '',
            messages: '',
            num_reads: [],
            id_p: 0


        }
    }

    componentDidMount() {
        const newSocket3 = new WebSocket(localStorage.getItem("type") == "user" ? 'ws://127.0.0.1:8000/ws/notifications/' : 'ws://127.0.0.1:8000/ws/notificationsfree/');
        newSocket3.onopen=()=>{
            console.log("connect 3");
        }
        newSocket3.onmessage=(event)=>{
            const message = JSON.parse(event.data);
            var obj = JSON.parse(message.data.value);
           
            if(obj.uid){
              
                this.setState(prevState => {
                    const { person } = prevState;
                    
                    person.forEach((element,ind)=> {
                        if (element.id == obj.uid) {
                          element.is_online=obj.is_online
                        }
                    });
                  

                    return { person };
                },
                    () => {

                    })
            }
            
        }

        var arr = window.location.href.split('/')
        const studentId = arr[arr.length - 1]
        if (!isNaN(studentId)) {
            this.setState({ id_p: studentId })
        }
        window.addEventListener('beforeunload', function () {
            if (localStorage.getItem("type") == "user") {
                axios.post('http://localhost:8000/chat/de_active_client/', {
                    id: localStorage.getItem("uid")
                }).then(res => {

                })
            } else {
                axios.post('http://localhost:8000/chat/de_active_Free/', {
                    id: localStorage.getItem("uid")
                })
            }
            return false;
        })
        axios.post(localStorage.getItem("type") == "user" ? 'http://localhost:8000/chat/getMessagesChatsClient/' : 'http://localhost:8000/chat/getMessagesChatsFree/', {
            id: localStorage.getItem("uid")
        })
            .then(res => {
                if (res.data.sne.length > 0) {
                    var ind = 0
                    if (this.state.id_p != 0) {
                        res.data.sne.forEach((ele, index) => {
                            if (ele.id == this.state.id_p) {
                                ind = index
                                this.setState({ select_id: index })
                            }
                        })
                    }
                    axios.post(localStorage.getItem("type") == "user" ? 'http://localhost:8000/chat/getMessagesClent/' : 'http://localhost:8000/chat/getMessagesFree/', localStorage.getItem("type") == "user" ? {
                        client: localStorage.getItem("uid"),
                        free: res.data.sne[ind].id
                    } : {
                        client: res.data.sne[ind].id,
                        free: localStorage.getItem("uid")
                    })
                        .then(res => {

                            this.setState({ messages: res.data })

                        }).catch(error => console.log(error))

                }
                if (res.data.sne.length > 0) {
                    this.setState({ p_select: res.data.sne[ind] })
                    this.connectSocket(res.data.sne[ind].id)
                }
                this.setState({ person: res.data.sne })
                this.setState({ num_reads: res.data.msg_read })


            }).catch(error => console.log(error))


        const newSocket = new WebSocket(localStorage.getItem("type") == "free" ? ("ws://127.0.0.1:8000/ws_free/free" + localStorage.getItem("uid") + "/") : ("ws://127.0.0.1:8000/ws_client/user" + localStorage.getItem("uid") + "/"));
        newSocket.onopen = () => {

        };

        newSocket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            var msg = JSON.parse(message.data.value);
            if (msg[1] == this.state.p_select.id) {
                this.setState({ messages: [...this.state.messages, msg[0]] })
            } else {
                this.setState(prevState => {
                    const { num_reads } = prevState;
                    num_reads.forEach(element => {
                        if (element.id == msg[1]) {
                            element.num += 1
                        }
                    });

                    return { num_reads };
                },
                    () => {

                    })
            }

        };
        newSocket.onclose = () => {

        };

    }

    connectSocket(p) {
        if (this.state.socket) {
            this.state.socket.close()
        }
        this.setState(prevState => {
            const { num_reads } = prevState;
            num_reads.forEach(element => {
                if (element.id == p) {
                    element.num = 0
                }
            });

            return { num_reads };
        },
            () => {

            })
        const newSocket = new WebSocket(localStorage.getItem("type") == "free" ? ("ws://127.0.0.1:8000/ws_free/free" + p + "/") : ("ws://127.0.0.1:8000/ws_client/user" + p + "/"));
        newSocket.onopen = () => {
            console.log('WebSocket connected');
            this.setState({ socket: newSocket })
        };

        newSocket.onclose = () => {
            console.log('WebSocket closed');
            this.setState({ socket: null })
        };
        axios.post(localStorage.getItem("type") == "user" ? 'http://localhost:8000/chat/getMessagesClent/' : 'http://localhost:8000/chat/getMessagesFree/', localStorage.getItem("type") == "user" ? {
            client: localStorage.getItem("uid"),
            free: p
        } : {
            client: p,
            free: localStorage.getItem("uid")
        })
            .then(res => {
                this.setState({ messages: res.data })

            }).catch(error => {
                this.setState({ messages: [] })
            })

    }
    getNumReads(id) {
        var num = 0
        this.state.num_reads.forEach((ele, index) => {
            if (ele.id == id) {
                if (this.state.select_id != index) {
                    num = ele.num
                }
            }
        })
        return num
    }
    render() {


        window.onload = function () {
            var myDiv = document.getElementById("chat_id");

            myDiv.scrollTop = myDiv.scrollHeight - myDiv.clientHeight;
        }


        return (
            <div>
                <NavBar />
                <div class="container mt-4">
                    <div class="row clearfix">
                        <div class="col-lg-12">
                            <div class="card chat-app" id="chat_id">
                                <div id="plist" class="people-list">

                                    <ul class="list-unstyled chat-list mt-2 mb-0">
                                        {this.state.person.map((ele, ind) => {
                                            return (
                                                <li class={this.state.select_id == ind ? "clearfix active" : "clearfix"} onClick={
                                                    () => {
                                                        this.setState({ select_id: ind })
                                                        this.setState({ p_select: this.state.person[ind] })
                                                        this.connectSocket(this.state.person[ind].id)
                                                    }
                                                }>

                                                    <img src={localStorage.getItem("type") == "free" ? "http://localhost:8000" + ele.image : "http://localhost:8000" + ele.user_image} alt="avatar" />
                                                    <div class="about">
                                                        {this.getNumReads(ele.id) ? (<span class="notification-badge" style={
                                                            {
                                                                top: "0 !important"
                                                            }
                                                        }>{
                                                                this.getNumReads(ele.id)
                                                            }</span>) : (<div></div>)}
                                                        <div class="name">{localStorage.getItem("type") == "free" ? ele.fname + " " + ele.lname : ele.first_name + " " + ele.last_name} </div>
                                                        {ele.is_online ? (<div class="status"> <img  style={{
                                                            margin:"5px",
                                                            width:"10px",
                                                            height:"10px"
                                                        }} src="\images\online.jpg" alt="not found" /> online </div>) : (<div class="status">
                                                        <img  style={{
                                                             margin:"5px",
                                                            width:"10px",
                                                            height:"10px"
                                                        }} src="\images\offline.png" alt="not found"/>   offline</div>)}
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div class="chat">
                                    <div class="chat-header clearfix">
                                        <div class="row">
                                            {this.state.p_select ? this.state.p_select.is_online ? (
                                                <div class="col-lg-6">
                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                                        <img src={this.state.p_select ? (localStorage.getItem("type") == "free" ? "http://localhost:8000" + this.state.p_select.image : "http://localhost:8000" + this.state.p_select.user_image) : ""} alt="avatar" />
                                                    </a>
                                                    <div class="chat-about">
                                                        <h6 class="m-b-0">{this.state.p_select ? (localStorage.getItem("type") == "free" ? this.state.p_select.fname + " " + this.state.p_select.lname : this.state.p_select.first_name + " " + this.state.p_select.last_name) : ""}</h6>
                                                        {<div class="status"> <img  style={{
                                                            margin:"7px",
                                                            width:"10px",
                                                            height:"10px"
                                                        }} src="\images\online.jpg" alt="not found" /> online </div>}
                                                    </div>
                                                </div>
                                            ) : (
                                                <div class="col-lg-6">
                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                                        <img src={this.state.p_select ? (localStorage.getItem("type") == "free" ? "http://localhost:8000" + this.state.p_select.image : "http://localhost:8000" + this.state.p_select.user_image) : ""} alt="avatar" />
                                                    </a>
                                                    <div class="chat-about">
                                                        <h6 class="m-b-0">{this.state.p_select ? (localStorage.getItem("type") == "free" ? this.state.p_select.fname + " " + this.state.p_select.lname : this.state.p_select.first_name + " " + this.state.p_select.last_name) : ""}</h6>
                                                        {<div class="status"> <img  style={{
                                                            margin:"7px",
                                                            width:"10px",
                                                            height:"10px"
                                                        }} src="\images\offline.png" alt="not found" /> offline</div>}
                                                    </div>
                                                </div>
                                            ) : (<div></div>)}


                                        </div>
                                    </div>
                                    <div class="chat-history">
                                        <ul class="m-b-0">

                                            {this.state.messages ? (
                                                this.state.messages.map(ele => {
                                                    const timestamp = ele.create_at;
                                                    const date = new Date(timestamp);

                                                    const options = { year: 'numeric', month: 'short', day: 'numeric' };
                                                    const dateString = date.toLocaleDateString('en-US', options);

                                                    const timeString = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                                                    const formattedTime = `${dateString} at ${timeString}`;


                                                    if (localStorage.getItem("type") == "user" && ele.client || localStorage.getItem("type") == "free" && ele.free) {
                                                        return (
                                                            <li class="clearfix">
                                                                <div class="message-data">
                                                                    <span class="message-data-time">{formattedTime}</span>
                                                                </div>
                                                                <div class="message my-message">{ele.message}</div>
                                                            </li>
                                                        )
                                                    } else {

                                                        return (
                                                            <li class="clearfix">
                                                                <div class="message-data text-right" style={
                                                                    {
                                                                        textAlign: "right"
                                                                    }
                                                                }>
                                                                    <span class="message-data-time">{formattedTime}</span>
                                                                    <img src={this.state.p_select ? (localStorage.getItem("type") == "free" ? "http://localhost:8000" + this.state.p_select.image : "http://localhost:8000" + this.state.p_select.user_image) : ""} alt="avatar" />
                                                                </div>
                                                                <div class="message other-message float-right">{ele.message}</div>
                                                            </li>
                                                        )
                                                    }
                                                })
                                            ) : (
                                                <div></div>
                                            )}



                                        </ul>
                                    </div>
                                    <form onSubmit={
                                        (e) => {
                                            e.preventDefault()
                                            var mes = document.getElementById("mes").value
                                            if (localStorage.getItem("type") == "user") {
                                                this.state.socket.send(JSON.stringify({
                                                    "free": this.state.p_select.id,
                                                    "client": localStorage.getItem("uid"),
                                                    "message": mes,
                                                    "room": "free" + this.state.p_select.id
                                                }))
                                            } else {
                                                this.state.socket.send(JSON.stringify({
                                                    "free": localStorage.getItem("uid"),
                                                    "client": this.state.p_select.id,
                                                    "message": mes,
                                                    "room": "user" + this.state.p_select.id
                                                }))
                                            }
                                            const now = new Date();
                                            const isoString = now.toISOString();


                                            this.setState({
                                                messages: [...this.state.messages, {
                                                    "client": localStorage.getItem("type") == "user",
                                                    "free": localStorage.getItem("type") == "free",
                                                    "message": mes,
                                                    "create_at": isoString,
                                                }]
                                            })
                                            var mes = document.getElementById("mes").value = ""

                                        }

                                    }>
                                        <div class="chat-message clearfix">
                                            <div class="input-group mb-0">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" style={
                                                        {
                                                            height: "100%",
                                                            width: "100%"
                                                        }
                                                    }><i class="fa fa-send"></i></span>
                                                </div>
                                                <input id='mes' type="text" class="form-control" placeholder="Enter text here..." />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Chat;