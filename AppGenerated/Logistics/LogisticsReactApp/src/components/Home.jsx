import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-md-12">
            <div className="carousel slide" id="carousel-81724">
              <ol className="carousel-indicators">
                <li
                  data-slide-to="0"
                  data-target="#carousel-81724"
                  className="active"
                ></li>
                <li data-slide-to="1" data-target="#carousel-81724"></li>
                <li data-slide-to="2" data-target="#carousel-81724"></li>
              </ol>
              <div className="carousel-inner rounded">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    alt="Carousel Bootstrap First"
                    src="https://www.layoutit.com/img/sports-q-c-1600-500-1.jpg"
                  />
                  <div className="carousel-caption">
                    <h4>First Thumbnail label</h4>
                    <p>
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    alt="Carousel Bootstrap Second"
                    src="https://www.layoutit.com/img/sports-q-c-1600-500-2.jpg"
                  />
                  <div className="carousel-caption">
                    <h4>Second Thumbnail label</h4>
                    <p>
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    alt="Carousel Bootstrap Third"
                    src="https://www.layoutit.com/img/sports-q-c-1600-500-3.jpg"
                  />
                  <div className="carousel-caption">
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
                className="carousel-control-prev"
                href="#carousel-81724"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>{" "}
                <span className="sr-only">Previous</span>
              </a>{" "}
              <a
                className="carousel-control-next"
                href="#carousel-81724"
                data-slide="next"
              >
                <span className="carousel-control-next-icon"></span>{" "}
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

        <div className="card shadow-sm my-2">
          <div className="card-body">
            <div className="row buttons">
              <div className="col-md-5 buttons__btn">
                <Link to="/transportcapacitybooking">
                  <button
                    type="button"
                    className="btn btn-lg btn-link text-info"
                  >
                    New Booking
                  </button>
                </Link>
              </div>
              <div className="col-md-5 buttons__btn">
                <Link to="/transportcapacitybookings">
                  <button
                    type="button"
                    className="btn btn-lg btn-link text-info"
                  >
                    View Booking
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
