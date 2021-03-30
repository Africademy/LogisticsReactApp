import React, { useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
  //   getTransportcapacitybooking,
//   getTransportcapacitybookings,
} from "../services/transportcapacitybookingService";

var bookings = [
  {
    name: "DHL",
  },
  {
    name: "APL",
  },
  {
    name: "FedEx",
  },
];
function Home() {
  //   useEffect(() => {
  //     getTransportcapacitybookings()
  //       .then((d) => {
  //         bookings = d;
  //         console.log(bookings);
  //   bookings = [
  //     {
  //       name: "DHL",
  //     },
  //     {
  //       name: "APL",
  //     },
  //     {
  //       name: "APL",
  //     },
  //   ];
  //       })
  //       .catch((error) => console.log(error));
  //   });

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
                <li
                  data-slide-to="0"
                  data-target="#carousel-81724"
                  class="active"
                ></li>
                <li data-slide-to="1" data-target="#carousel-81724"></li>
                <li data-slide-to="2" data-target="#carousel-81724"></li>
              </ol>
              <div class="carousel-inner rounded">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    alt="Carousel Bootstrap First"
                    src="https://www.layoutit.com/img/sports-q-c-1600-500-1.jpg"
                  />
                  <div class="carousel-caption">
                    <h4>First Thumbnail label</h4>
                    <p>
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    alt="Carousel Bootstrap Second"
                    src="https://www.layoutit.com/img/sports-q-c-1600-500-2.jpg"
                  />
                  <div class="carousel-caption">
                    <h4>Second Thumbnail label</h4>
                    <p>
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    alt="Carousel Bootstrap Third"
                    src="https://www.layoutit.com/img/sports-q-c-1600-500-3.jpg"
                  />
                  <div class="carousel-caption">
                    <h4>Third Thumbnail label</h4>
                    <p>
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                    </p>
                  </div>
                </div>
              </div>{" "}
              <a
                class="carousel-control-prev"
                href="#carousel-81724"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon"></span>{" "}
                <span class="sr-only">Previous</span>
              </a>{" "}
              <a
                class="carousel-control-next"
                href="#carousel-81724"
                data-slide="next"
              >
                <span class="carousel-control-next-icon"></span>{" "}
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

        <div className="card my-2">
          <div className="card-body">
            <div class="row buttons">
              <div class="col-md-5 buttons__btn">
                <Link to="/transportcapacitybooking">
                  <button type="button" class="btn btn-lg btn-link text-info">
                    New Booking
                  </button>
                </Link>
              </div>
              <div class="col-md-5 buttons__btn">
                <Link to="/">
                  <button type="button" class="btn btn-lg btn-link text-info">
                    View Booking
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card my-2">
          <div className="card-body">
            <div className="search-booking-details">
              <form className="row">
                <div class="form-group col-5">
                  <div class="input-group">
                    <input
                      id="bookingid"
                      name="bookingid"
                      placeholder="Booking Id"
                      type="text"
                      required="required"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group col-3">
                  <div class="input-group">
                    <input
                      id="fromdate"
                      name="fromdate"
                      placeholder="From"
                      type="date"
                      required="required"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group col-3">
                  <div class="input-group">
                    <input
                      id="todate"
                      name="todate"
                      placeholder="To"
                      type="date"
                      required="required"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group col-1 text-right">
                  <button name="submit" type="submit" class="btn btn-primary">
                    Go
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="bookings-list">
          {/* <label htmlFor="list-group">List</label>
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
              Cras justo odio
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Dapibus ac facilisis in
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Morbi leo risus
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Porta ac consectetur ac
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Vestibulum at eros
            </a>
          </div> */}
          <div className="table-responsive">
            <table class="table table-bordered table-hover rounded">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "30%" }}>
                    Title 1
                  </th>
                  <th scope="col" style={{ width: "25%" }}>
                    Title 2
                  </th>
                  <th scope="col" style={{ width: "25%" }}>
                    Title 3
                  </th>
                  <th scope="col" style={{ width: "20%" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, i) => (
                  <tr key={i}>
                    <th scope="row">{i}</th>
                    <td>{b.name}</td>
                    <td>{b.name}</td>
                    <td>
                      <div class="action-buttons text-center">
                        <a href="#" className="btn btn-secondary btn-sm mx-1">
                          Edit
                        </a>
                        <a href="#" className="btn btn-primary btn-sm mx-1">
                          View
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
