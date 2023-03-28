import axios from 'axios';
import React, { Component } from 'react';
import '../../css/proposel.css';
import NavBar from '../../Profile/freelancer/navbar';




class Proposal extends Component {
    constructor() {
        super()
        this.state = {
            data:'',
            costJob:0,
            id:0,
            images:[],
            cover:'',
            socket:null,
        }


    }
    componentDidMount(){
        window.addEventListener('beforeunload',function(){
            if(localStorage.getItem("type")=="user"){
              axios.post('http://localhost:8000/chat/de_active_client/',{
                id:localStorage.getItem("uid")
              }).then(res=>{
               
              })
            }else{
              axios.post('http://localhost:8000/chat/de_active_Free/',{
                id:localStorage.getItem("uid")
              })
            }
            return false;
          })
        const newSocket = new WebSocket('ws://127.0.0.1:8000/ws/notifications/');
        newSocket.onopen = () => {
          console.log('WebSocket connected');
          this.setState({socket:newSocket})
          
      };
      
    newSocket.onclose = () => {
      console.log('WebSocket closed');
      this.setState({socket:null})
    };
        var arr=window.location.href.split('/')
        const studentId = arr[arr.length-1]
        console.log(studentId);
        this.setState({id:studentId})
        axios.post('http://localhost:8000/home/jobDetails/',{
            id:studentId
        }).then(res=>{
            console.log(res.data);
            this.setState({costJob:res.data.cost})
            this.setState({data:res.data})
        })
    }
    cal_Date(create_at) {
        const timestamp = create_at;
        const date = new Date(timestamp);
        const now = new Date();
        now.setHours(now.getHours() + 2);
        const diffMs = now.getTime() - date.getTime();
        const diffSeconds = Math.floor(diffMs / 1000);
        const diffMinutes = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);
        
        let diffString = '';
        
        if (diffDays > 0) {
          diffString += `${diffDays} day${diffDays > 1 ? 's' : ''} `;
        }
        if (diffHours > 0) {
          diffString += `${diffHours % 24} hour${diffHours % 24 > 1 ? 's' : ''} `;
        }
        if (diffMinutes > 0) {
          diffString += `${diffMinutes % 60} minute${diffMinutes % 60 > 1 ? 's' : ''} `;
        }
        if (diffSeconds > 0) {
          diffString += `${diffSeconds % 60} second${diffSeconds % 60 > 1 ? 's' : ''} `;
        }
        
        if (diffString === '') {
          diffString = 'just now';
        } 
        
      return diffString; 
        

    }
    render() {

        return (
            <div>
                 <NavBar/>

                <div class="container my-4 ">
        <div class="row abskill ">
            <div class=" abskill d-flex justify-content-center">
                <h3 className='abskill'>
                    Submit a Proposal
                </h3>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            
            <div class=" col-md-9 px-2">
                    <form action="" method="post" novalidate onSubmit={
                        (e)=>{
                            e.preventDefault()
                            axios.post('http://localhost:8000/home/add_applay/',{
                                                id:localStorage.getItem("uid"),
                                                id_job:this.state.id,
                                                cost_re:this.state.costJob,
                                                cost_comp:this.state.costJob-( this.state.costJob*25/100),
                                                images:this.state.images,
                                                cover:this.state.cover

                                            },{
                                                headers: {
                                                  'Content-Type': 'multipart/form-data'
                                                }}).then(res=>{
                                               if(res.data=='ok'){
                                               console.log(this.state.data.client_id);
                                                this.state.socket.send(JSON.stringify(
                                                    {
                                                        "type": "websocket.send",
                                                        "data": {
                                                            type:"websocket.send",
                                                            sender:localStorage.getItem("uid"),
                                                            recieve:this.state.data.client_id,
                                                            payload:" applay on your job "+this.state.data.title
                                                          }
                                                    }))
                                                window.location='/'
                                               }
                                            })
                        }
                    }>

                        <div class="container-border my-2">

                            <h5>Job details</h5>
                            <div class=" my-5">
                                <h5>{this.state.data.title}</h5>
                        
                                <span class="text-muted small px-2">Posted {this.cal_Date(this.state.data.create_at)}</span>
                            </div>


                            <div>
                                <h6>hi there,</h6>
                                <p>{this.state.data.description}</p>
                            </div>

                            

                            <hr/>
                            <div class="row">
                                <div class="abskill">
                                    <h6>
                                        Skills and Expertise
                                    </h6>
                                    <div>
                                        {this.state.data?(this.state.data.skills.map(ele=>{
 return <span class="badge bg-secondary rounded-pill">{ele}</span>

                                        })):(<div></div>)}
                                                                         </div>

                                </div>


                            </div>



                        </div>

                        <div class="container-border my-2">
                            <h5>Terms</h5>
                            <div class="container mt-3">
                                <div class="row">
                                    <div class="abskill">
                                        <h6>
                                            What is the rate you'd like to bid for this job?
                                        </h6>

                                    </div>


                                </div>
                                <div class="row">
                                    <div class="container col-md-8">
                                        <div class="row">
                                            
                                            <div class="col-md-6">
                                                <p class="text-muted small">Client’s budget: ${this.state.data.cost}</p>

                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p class="small">your cost</p>
                                                <p class="text-muted small">Total amount the client will see on your
                                                    proposal</p>

                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-group">
                                                  <input class="form-control" type="number" value={this.state.costJob} name="" id="" onChange={
                                                    (e)=>{
                                                        this.setState({costJob:e.target.value})
                                                    }
                                                  } placeholder="0.00" required/>
                                                  <div class="input-group-append">
                                                    <span class="input-group-text">$</span>
                                                  </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p class="small">You'll receive</p>
                                                <p class="text-muted small">The estimated amount you'll receive after
                                                    service fees</p>

                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-group">
                                                  <input class="form-control" type="number" value={
                                                   (this.state.costJob-( this.state.costJob*25/100))
                                                  } name="" id="" placeholder="0.00" readOnly/>
                                                  <div class="input-group-append">
                                                    <span class="input-group-text">$</span>
                                                  </div>
                                                </div>
                                            </div>
                                        </div>




                                    </div>
                                    <div class="col-md-4 text-center">
                                        <div>
                                            <img src="dolar.png" class="img-fluid rounded-top" alt=""/>
                                           

                                        </div>


                                    </div>

                                </div>



                            </div>

                        </div>

                        <div class="container-border my-2">
                            <h5>Additional details</h5>
                            <div class="container mt-3">
                                <div class="row">
                                    <div class="mb-3">
                                        <label for="cover_leter" class="form-label">Cover Letter</label>
                                        <textarea class="form-control" onChange={
                                            (e)=>{
                                                this.setState({cover:e.target.value})
                                            }
                                        } name="cover_leter" id="cover_leter"
                                            rows="3" required></textarea>
                                    </div>
                                    <hr />
                                    <div class="mb-3">
                                        <label for="file" class="form-label">Choose file</label>
                                        <input type="file" onChange={
                                            (e)=>{
                                                this.setState({images:e.target.files})
                                            }
                                        } class="form-control" name="file" id="file"
                                            placeholder="upload project files" aria-describedby="fileHelpId" multiple required/>
                                        <div id="fileHelpId" class="form-text my-3">
                                            You may attach up to files under the size of 25 MB each. Include work samples or
                                            other documents
                                            to support your application. Do not attach your résumé — your Upwork profile is
                                            automatically forwarded
                                            to the client with your proposal.
                                        </div>
                                    </div>


                                </div>





                            </div>

                        </div>
                        <div class="container p-2">
                            <div class="row">
                                <div class="col-md-3">
                                    <button type="submit" class="btn btn-success form-control rounded-pill m-2" onClick={
                                        ()=>{
                                            
                                        }
                                    }>Send</button>
    
    
                                </div>
                                <div class="col-md-3">
                                    <button type="submit" class="btn btn-outline-danger form-control rounded-pill m-2" onClick={
                                        ()=>{
                                            window.location='/'
                                        }
                                    }>Cancel</button>
    
    
                                </div>

                            </div>
                           

                        </div>
                    </form>


            </div>
           

        </div>


    </div>
            </div>
           
        )
    }


}
export default Proposal;