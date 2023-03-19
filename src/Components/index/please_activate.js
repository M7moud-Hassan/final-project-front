import { useParams } from "react-router-dom"

import { NavLink } from "react-router-dom"

let Check_email = () => {
  
    let {email}=useParams()
    var type= localStorage.getItem("type");
  if(type=='free'){
  window.location = '/profile_free'
  }else if(type=='client')
  {
      window.location = '/clientprofile'
  }else{
    return (
        <div>

      <div className="container ">
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7">
                <div className="card shadow-2-strong card-registration my-5">
                  <div className="card-body p-4 p-md-5 shadowBorder">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Please Check and confirm your Email  {email}</h3>
                    <div className="my-3 ">

                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    )

  }
}
export default Check_email




