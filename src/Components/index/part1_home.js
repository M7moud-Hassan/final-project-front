import { Component } from "react";

class Part1Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="container">
          <section className="mt-5 mb-5 shadow-sm">
            <div className="container">
              <div className="row">

                <div className="col-lg-5 mb-3 d-flex p-0 ">
                  <div className="card">
                    <img src=".\images\globe@1x.jpg" />

                  </div>
                </div>
                <div className="col-lg-7 mb-3 d-flex p-0">
                  <div className="card w-100">
                    <h2 className="mt-5 ms-5">Up your work game, it’s free.</h2>
                    <div className="card-body d-flex flex-column">
                      <i className="bi bi-receipt"></i>
                      <div className="card-title">
                        <div className="air3-icon md" data-v-a5b8af64="">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img">
                            <path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.981 13.7v3.287a2.997 2.997 0 01-2.997 2.997H5.998A2.997 2.997 0 013 16.986v-9.99A2.997 2.997 0 015.997 4h4.995m5.25 2.059l2.737 2.757">

                            </path>
                            <path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.99 15.358l-1.489.29a.999.999 0 01-.49 0 1.119 1.119 0 01-.42-.25 1 1 0 01-.249-.41.909.909 0 010-.489l.28-1.508c.085-.38.28-.728.56-1l7.362-7.362a1.85 1.85 0 01.649-.44c.247-.116.516-.18.79-.189.264.002.525.056.768.16.247.1.471.25.66.44a2 2 0 01.44.649 2.082 2.082 0 010 1.548 1.998 1.998 0 01-.44.65l-7.423 7.352c-.27.28-.618.474-.999.56z">
                            </path>
                          </svg>
                        </div>
                        No cost to join.
                      </div>
                      <p className="card-text mb-4 fixedSmallFont ms-4">Register and browse professionals, explore projects, or even book a consultation.</p>
                      <div className="card-title">
                        <div className="air3-icon md" data-v-a5b8af64="">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img">
                            <path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15 19l.3-.3c2.8-2.8 2.8-7.2 0-10C12.5 6 8 6 5.3 8.8L5 9l10 10z">

                            </path>
                            <path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 11.5l3.3-3.3c.4-.4.4-1 0-1.4l-3.1-3.1c-.4-.4-1-.4-1.4 0L12.5 7M10 14l-7 7">

                            </path>
                          </svg>
                        </div>
                        Post a job and hire top talent.</div>
                      <p className="card-text mb-4 fixedSmallFont ms-4">Finding talent doesn’t have to be a chore. Post a job or we can search for you!</p>
                      <div className="card-title">
                        <div className="air3-icon md" data-v-a5b8af64=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.015 16.114l-7.039 4.578a1.908 1.908 0 01-2.079 0l-7.039-4.578A1.908 1.908 0 013 14.512V4.907A1.907 1.907 0 014.907 3h14.059a1.908 1.908 0 011.907 1.907v9.605a1.908 1.908 0 01-.858 1.602z" clip-rule="evenodd"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.939 5.33l1.392 3.596 3.854.21-2.995 2.441.992 3.73-3.243-2.1-3.243 2.1 1.002-3.73-3.005-2.442 3.863-.21 1.383-3.595z" clip-rule="evenodd"></path></svg></div>
                        Work with the best—without breaking the bank.</div>
                      <p className="card-text mb-4 fixedSmallFont ms-4">Upwork makes it affordable to up your work and take advantage of low transaction rates.</p>
                      <div className="d-flex mt-5 ms-5">
                        <button className="btn btn-success btn-pill w-md-25 w-sm-50 rounded-pill">Sign Up for free</button>
                        <button className="btn btn-light border-success ms-md-3 w-md-25 w-sm-50 ms-3 rounded-pill btnFont">Learn how to hire</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
          <div className="browse-talent-categories mb-10">
            <br />
            <p>Browse talent by category  </p>
            <div className="text-muted">Looking for work?<a href="#" >Browse jobs</a> </div>
          </div>
        </div>

        <div className="container px-4 py-4">
          <div className="row text-center ">
            <div className="col mx-1 m-3 ms-3 slots col-lg-2 col-md-6 col-sm-12"> <div className="mt-2 ">Development&It</div>
              <span className="fa fa-star checked"></span><span className="text-muted fixedSmallFont ms-3 fixedSmallFont">4.85/5 </span><span className="ms-3 text-muted fixedSmallFont">1853skills</span>
            </div>
            <div className="col mx-1 m-3 ms-3  slots col-lg-3 col-md-5 col-sm-12"><div className="mt-2">Design & Creative</div>
              <span className="fa fa-star checked "></span><span className="text-muted fixedSmallFont">4.91/5 </span> <span className="ms-3 text-muted fixedSmallFont ">968skills</span>
            </div>
            <div className="col mx-1 m-3 ms-3  slots col-lg-3 col-md-6 col-sm-12"><div className="mt-2">Sales & Marketing</div>
              <span className="fa fa-star checked "></span><span className="text-muted fixedSmallFont">4.77/5 </span> <span className="ms-3 text-muted fixedSmallFont ">392skills</span>
            </div>
            <div className="col mx-1 m-3 ms-3  slots col-lg-3 col-md-5 col-sm-12"><div className="mt-2">Writing & Translation</div>
              <span className="fa fa-star checked "></span><span className="text-muted fixedSmallFont">4.92/5</span> <span className="ms-3 text-muted fixedSmallFont ">505skills</span>
            </div>
          </div>
          <div className="row text-center">
            <div className="col mx-1 m-3 ms-3  slots col-lg-3 col-md-6 col-sm-12"><div className="content mt-2"> Admin &Customer Support</div>
              <span className="fa fa-star checked "></span><span className="text-muted fixedSmallFont">4.77/5 </span> <span className="ms-3 text-muted fixedSmallFont ">508skills</span>
            </div>
            <div className="col mx-1 m-3 ms-3  slots col-lg-3 col-md-5 col-sm-12"> <div className="content mt-2">Finance & Accounting</div>
              <span className="fa fa-star checked "></span><span className="text-muted fixedSmallFont">4.79/5</span> <span className="ms-3 text-muted fixedSmallFont ">214skills</span>
            </div>
            <div className="col mx-1 m-3 ms-3  slots col-lg-3 col-md-6 col-sm-12"><div className="content mt-2">  Engineering & Architecture</div>
              <span className="fa fa-star checked "></span><span className="text-muted fixedSmallFont">4.85/5</span> <span className="ms-3 text-muted fixedSmallFont ">650skills</span>
            </div>
            <div className="col mx-1 m-3 ms-3  slots col-lg-2 col-md-5 col-sm-12"><div className="content mt-2">Legal</div>
              <span className="fa fa-star checked "></span><span className="text-muted fixedSmallFont">4.85/5</span> <span className="ms-3 text-muted fixedSmallFont ">133skills</span>
          </div>
        </div>
      </div>
      </div>
    )
  }

}

export default Part1Home;