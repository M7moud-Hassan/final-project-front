import axios from 'axios';

let Check_email = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">

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
                        </div>
                        <div className='w-100' >
                            <form className="d-flex">
                                <div className="input-group ms-5 w-100">
                                    <div className="search_box d-flex w-50">
                                        <input className="form-control me-2 w-100 " type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </div>

                                    <button className="btn btn-primary border-0 rounded ms-3" type="submit">Sign Up</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container ">
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7">
                <div className="card shadow-2-strong card-registration my-5">
                  <div className="card-body p-4 p-md-5 shadowBorder">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Please Check and confirm your Email ...</h3>
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
export default Check_email




