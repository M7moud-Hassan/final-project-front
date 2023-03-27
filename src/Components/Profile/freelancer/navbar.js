import React, { Component } from 'react';
import axios from 'axios';
import Error from '../../index/error';

class NavBar extends Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      data: false,
      loading: true,
      error: null,
      notifications:[],
      socket:null,
      down:false,
     

  }}
  calNotification=()=>{
    let x=0
   this.state.notifications.forEach(element => {
      if(element.status=="unread"){
        x+=1
      }
    });
    return x
  }


  
   

 toggleNotifi=()=>{
  if(localStorage.getItem("type")=="user"){
    axios.post('http://127.0.0.1:8000/home/makeNotificationClientRead/',{
      id:localStorage.getItem("uid")
    }).then(res=>{
      this.setState({notifications:res.data})
    })
  }else{
    axios.post('http://127.0.0.1:8000/home/makeNotificationFreetRead/',{
      id:localStorage.getItem("uid")
    }).then(res=>{
      this.setState({notifications:res.data})
    })
  }
 
  var box  = document.getElementById('box');

	if (this.state.down) {
		box.style.height  = '0px';
		box.style.opacity = 0;
		
    this.setState({down:false})
	}else {
    
		box.style.height  = '510px';
		box.style.opacity = 1;
    this.setState({down:true})
		
	}
}
   handleData = (data) => {
  //  const message = JSON.parse(data);
  //  this.setState({notifications: [...this.state.notifications, message]})
  };
  componentDidMount() {
    axios.post(this.props.url,
        {
            "id": localStorage.getItem('uid')
        })
        .then(response => {
            this.setState({ data: response.data, loading: false });
        })
        .catch(error => {
            this.setState({ error: error.message, loading: false });
        });
        const newSocket = new WebSocket(localStorage.getItem("type")=="user"?'ws://127.0.0.1:8000/ws/notifications/':'ws://127.0.0.1:8000/ws/notificationsfree/');
        newSocket.onopen = () => {
          console.log('WebSocket connected Navbar');
          this.setState({socket:newSocket})
          
      };
      if(localStorage.getItem("type")=="user"){
      axios.post('http://127.0.0.1:8000/home/getnotificationsClient/',
      {
        id:localStorage.getItem("uid")
      }).then(res=>{
        this.setState({notifications:res.data})
        newSocket.onmessage = (event) => {
     
          const message = JSON.parse(event.data);
          var obj=JSON.parse(message.data.value);
          if(obj.user_revoker==localStorage.getItem("uid")){
            this.setState({notifications:[...this.state.notifications,obj]})
          }
          //setReceivedMessage(message);
        
      };
      newSocket.onclose = () => {
        console.log('WebSocket closed');
        this.setState({socket:null})
      };
      })
      
      
  }else if(localStorage.getItem("type")=="free"){
    axios.post('http://127.0.0.1:8000/home/getnotificationsFree/',
      {
        id:localStorage.getItem("uid")
      }).then(res=>{
        this.setState({notifications:res.data})
        newSocket.onmessage = (event) => {
     
          const message = JSON.parse(event.data);
          var obj=JSON.parse(message.data.value);
          if(obj.user_revoker==localStorage.getItem("uid")){
            this.setState({notifications:[...this.state.notifications,obj]})
          }
          //setReceivedMessage(message);
        
      };
      newSocket.onclose = () => {
        console.log('WebSocket closed');
        this.setState({socket:null})
      };
      })
  }
}


  

  render() {

    var { data, loading, error } = this.state;

    if (loading) {
        return (<div id="demo-content">
            <div id="loader-wrapper">
                <div id="loader">

                </div>
            </div>

        </div>)
    }

    if (error) {
        return <Error />
    }
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm ">

          <div className='container-fluid'>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <img id='logo' className='ms-5' src='\images\upwork.png' />
            <div class="collapse navbar-collapse" id="navbarScroll">
              <div className='d-flex'>
                <ul className='mt-3'>
                  <li className="nav-item dropdown dropFont">
                    <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Empty slot
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
                <ul className='mt-3'>
                  <li className="nav-item dropdown dropFont">
                    <a className="nav-link text-dark" href="#">
                      Message
                    </a>
                   
                  </li>
                </ul>
                <ul className='mt-3'>
                  <li className="nav-item dropdown dropFont">
                    <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Jobs
                    </a>
                    {localStorage.getItem("type")!="user"?(
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a href='#' className="dropdown-item" onClick={
                          (e)=>{
                            e.preventDefault()
                            window.location='/job_proposals'
                          }
                        }>Proposals</a>
                        <a className="dropdown-item" href="#"  onClick={
                          (e)=>{
                            e.preventDefault()
                            window.location='/JobS_Hire'
                          }
                        }>Hires</a>
                      </div>
                        ):(
                          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                     
                      <a className="dropdown-item" href="#" onClick={
                        (e)=>{
                          e.preventDefault()
                          window.location='/jobs_hire_client'
                        }
                      }>Hire</a>
                      <a className="dropdown-item" href="#" onClick={
                        (e)=>{
                          e.preventDefault()
                          window.location='/jobs_finish_client'
                          
                        }
                      }>Finished jobs</a>
                      
                    </div>
                        )}
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                     
                      <a className="dropdown-item" href="#">Proposals</a>
                      <a className="dropdown-item" href="#">Hires</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='w-100' >
                <form className="d-flex">
                  <div className="input-group ms-5 w-100 d-flex justify-content-between">
                    <div className="search_box d-flex w-50 mt-2" style={{ height: '40px' }}>
                      <input className="form-control me-2 w-100  " type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success " type="submit">Search</button>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                      <i class="fa-solid fa-question btn btn-lg" style={{ width: '80px' }}></i>
                      <div class="notification-container" onClick={this.toggleNotifi}>
                        <i class="fa-solid fa-bell btn btn-lg" style={{ width: '80px' }}></i>
                        { this.calNotification()?( <span class="notification-badge">{
                          this.calNotification()
                       }</span>):(<div></div>)}
                       
                      </div>
                      <img src={this.state.data.image?("data:image/*;base64," + this.state.data.image):("./images/default.png")} alt="User" className="rounded-circle btn border-0 ms-4" style={{ width: '70px' }} onClick={
                        ()=>{
                          this.props.openMenu()
                        }
                      }/>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
          <div class="notifi-box" id="box">
			<h2>Notifications <span>{this.state.notifications.length}</span></h2>
			{this.state.notifications.reverse().map(ele=>{
        return (
          <div class="alert">
  <span class="closebtn" onClick={
    (el)=>{
      if(localStorage.getItem("type")=="user"){
        el.target.parentElement.style.display='none';
        axios.post('http://127.0.0.1:8000/home/deletNotificationClient/',{
          id:ele.id,
          userid:localStorage.getItem("uid")
        }).then(res=>{
         // this.setState({notifications:res.data})
        })
      }else{
        el.target.parentElement.style.display='none';
        axios.post('http://127.0.0.1:8000/home/deletNotificationFree/',{
          id:ele.id,
          userid:localStorage.getItem("uid")
        }).then(res=>{
         // this.setState({notifications:res.data})
        })
      }
    }
  }>&times;</span> 
  <strong>{ele.type_of_notification}</strong> 
</div>
        )
      })}

		</div>
        </nav>


      </div>

    )
  }
}

export default NavBar;
