import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


function Home() {
   return (
      <div className="wrapper">
         {/* <div className="header">
               <div className="leftheader">
                    <img className="logoheader" src={Logo}  alt ="logo" />
                    <h1>Cargo Flo</h1>
               </div>
               <img className="rightheader" src="" alt="prifile" />
           </div> */}
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-12">
                  <div class="carousel slide" id="carousel-81724">
                     <ol class="carousel-indicators">
                        <li data-slide-to="0" data-target="#carousel-81724" class="active">
                        </li>
                        <li data-slide-to="1" data-target="#carousel-81724">
                        </li>
                        <li data-slide-to="2" data-target="#carousel-81724">
                        </li>
                     </ol>
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <img class="d-block w-100" alt="Carousel Bootstrap First" src="https://www.layoutit.com/img/sports-q-c-1600-500-1.jpg" />
                           <div class="carousel-caption">
                              <h4>
                                 First Thumbnail label
							</h4>
                              <p>
                                 Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <img class="d-block w-100" alt="Carousel Bootstrap Second" src="https://www.layoutit.com/img/sports-q-c-1600-500-2.jpg" />
                           <div class="carousel-caption">
                              <h4>
                                 Second Thumbnail label
							</h4>
                              <p>
                                 Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <img class="d-block w-100" alt="Carousel Bootstrap Third" src="https://www.layoutit.com/img/sports-q-c-1600-500-3.jpg" />
                           <div class="carousel-caption">
                              <h4>
                                 Third Thumbnail label
							</h4>
                              <p>
                                 Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
                           </div>
                        </div>
                     </div> <a class="carousel-control-prev" href="#carousel-81724" data-slide="prev"><span class="carousel-control-prev-icon"></span> <span class="sr-only">Previous</span></a> <a class="carousel-control-next" href="#carousel-81724" data-slide="next"><span class="carousel-control-next-icon"></span> <span class="sr-only">Next</span></a>
                  </div>
               </div>
            </div>
            <div class="row buttons">
               <div class="col-md-4 buttons__btn1">
                  < Link to="/transportcapacitybooking">
                     <button type="button" class="btn btn-lg btn-link">New Booking</button>
                  </Link>
               </div>
               <div class="col-md-4 buttons__btn2">
                  < Link to="/">
                     <button type="button" class="btn btn-lg btn-link">View Booking</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home