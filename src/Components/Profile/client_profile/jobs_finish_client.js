import React, { Component } from 'react';
import '../../css/cv_free.css';

import axios from 'axios';
import NavBar from '../../Profile/freelancer/navbar';
import Footer from '../../index/Footer';

class JobS_Finish_Client extends Component {
    constructor() {
        super();
        this.state = {
            hirs: [],
            hire: '',
            emp: '',
            socket: null,

        }

    }
    componentDidMount() {
        const newSocket = new WebSocket('ws://127.0.0.1:8000/ws/notificationsfree/');
        newSocket.onopen = () => {
            console.log('WebSocket connected');
            this.setState({ socket: newSocket })

        };

        newSocket.onclose = () => {
            console.log('WebSocket closed');
            this.setState({ socket: null })
        };
        axios.post('http://127.0.0.1:8000/home/get_jobs_finish_client/', {
            id: localStorage.getItem("uid")
        }).then(res => {

            this.setState({ hirs: res.data })
        })
    }
    removeItemOnce(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }
    render() {
        return (<div>
            <NavBar />
            <div className='row mb-5'>
                {this.state.hirs.map(hire => (
                    <div className='col-md-4 mt-3'>
                        <div className='profileCards2 container pCards2 text-dark' >

                            <div className=' ps-3 mt-1 h4 text-muted'>
                                {hire.job.title}
                            </div>

                            <div class="row my-3 text-center">
                                <div id={"carouselExampleIndicators" + hire.job.id} className="carousel  " data-bs-ride="true">
                                    <div class="carousel-indicators">
                                        {hire.job.images.map((imgs, index) => {
                                            if (index == 0) {
                                                return <button type="button" data-bs-target={"#carouselExampleIndicators" + hire.job.id} data-bs-slide-to={index} class="active" aria-current="true" aria-label="Slide 1"></button>
                                            } else {
                                                return <button type="button" data-bs-target={"#carouselExampleIndicators" + hire.job.id} data-bs-slide-to={index} aria-label="Slide 2"></button>
                                            }
                                        })}

                                    </div>
                                    <div class="carousel-inner "
                                        onClick={
                                            () => {
                                                this.setState({ emp: hire.free })
                                                this.setState({ hire: hire })
                                                document.getElementById('id0p11').style.display = 'block'

                                            }
                                        }
                                    >
                                        {hire.job.images.map((imgs, index) => {
                                            if (index == 0) {
                                                return (<div class="carousel-item active">
                                                    <img src={"http://localhost:8000" + imgs.image} className="d-block w-100 haimage slide BorderRadiusClass" alt="..." />
                                                </div>)
                                            } else {
                                                return (<div class="carousel-item">
                                                    <img src={"http://localhost:8000" + imgs.image} className="d-block w-100 haimage slide BorderRadiusClass " alt="..." />
                                                </div>)
                                            }
                                        })}
                                    </div>

                                    <button class="carousel-control-prev" type="button" data-bs-target={"#carouselExampleIndicators" + hire.job.id} data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target={"#carouselExampleIndicators" + hire.job.id} data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>
                            <div class="chip w-100">
                                <img src={"http://localhost:8000" + hire.free.user_image} alt="Person" width="96" height="96" />
                                {hire.free.first_name}  {hire.free.last_name}
                            </div>
                        </div>

                    </div>
                ))}

            </div>

            <div id="id0p11" class="mamodal rounded">




                <div class="card text-center mb-5 mamodal-content maanimate rounded">
                    <div class="maimgcontainer">
                        <span class="close" onClick={
                            () => {

                                document.getElementById('id0p11').style.display = 'none'
                            }
                        }>&times;</span>

                    </div>
                    <div class="pacircle-image">
                        <img src={"http://localhost:8000" + this.state.emp.user_image} width="50" />
                    </div>


                    <span class="name mb-1 fw-500">{this.state.emp.first_name} {this.state.emp.last_name}</span>
                    <small class="text-black-50">{this.state.emp.job_title}</small>


                    <form onSubmit={
                        (e) => {
                            e.preventDefault()
                            var review = document.getElementById("review").value;
                            var rates = document.getElementsByName('rating')
                            var num = 0
                            console.log(rates);
                            rates.forEach(element => {
                                if (element.checked) {
                                    num = element.value
                                }

                            });
                            axios.post('http://localhost:8000/home/addReview/', {
                                id: this.state.emp.id,
                                review: review,
                                rate: num,
                                job_id: this.state.hire.id,
                                client: localStorage.getItem("uid")
                            }).then(res => {
                                if (res.data == 'ok') {
                                    this.state.socket.send(JSON.stringify(
                                        {
                                            "type": "websocket.send",
                                            "data": {
                                                type: "websocket.send",
                                                sender: localStorage.getItem("uid"),
                                                recieve: this.state.emp.id,
                                                payload: "rate your " + num + " stars"
                                            }
                                        }))
                                    document.getElementById("review").value = "";
                                    document.getElementById('id0p11').style.display = 'none'
                                    this.setState({ hirs: this.removeItemOnce(this.state.hirs, this.state.hire) })
                                }
                            })
                        }
                    }>

                        <div class="location mt-4">

                            <textarea className='w-100' rows={5} placeholder='type review' id='review' required>
                            </textarea>
                        </div>


                        <div class="rate bg-success py-3 text-white mt-3">

                            <h6 class="mb-0">Rate your Freelancer</h6>

                            <div class="rating"> <input type="radio" name="rating" value="5" id="5" />
                                <label for="5">☆</label> <input type="radio" name="rating" value="4" id="4" />
                                <label for="4">☆</label> <input type="radio" name="rating" value="3" id="3" />
                                <label for="3">☆</label> <input type="radio" name="rating" value="2" id="2" />
                                <label for="2">☆</label> <input type="radio" name="rating" value="1" id="1" />
                                <label for="1">☆</label>
                            </div>


                            <div class="buttons px-4 mt-0">

                                <button class="btn btn-warning btn-block rating-submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Footer/>
        </div>)
    }
}
export default JobS_Finish_Client;