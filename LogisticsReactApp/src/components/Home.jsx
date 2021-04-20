import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CCarousel,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCarouselCaption,
  CCarouselControl,
} from "@coreui/react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      activeIndex: 0,
      slides: [
        {
          src: "https://www.layoutit.com/img/sports-q-c-1600-500-2.jpg",
          description:
            " Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
          heading: "First Thumbnail label",
        },
        {
          src: "https://www.layoutit.com/img/sports-q-c-1600-500-3.jpg",
          description:
            " Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
          heading: "Second Thumbnail label",
        },
        {
          src: "https://www.layoutit.com/img/sports-q-c-1600-500-1.jpg",
          description:
            " Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
          heading: "Three Thumbnail label",
        },
      ],
    };
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container-fluid">
          <CRow>
            <CCol sm={12}>
              <CCarousel animate activeIndex={this.state.activeIndex}>
                <CCarouselIndicators />
                <CCarouselInner className="rounded-top rounded-bottom">
                  {this.state.slides.map((slide) => (
                    <CCarouselItem>
                      <img
                        className="d-block w-100"
                        src={slide.src}
                        alt={slide.heading}
                      />
                      <CCarouselCaption>
                        <h3>{slide.heading}</h3>
                        <p>{slide.description}</p>
                      </CCarouselCaption>
                    </CCarouselItem>
                  ))}
                </CCarouselInner>
                <CCarouselControl direction="prev" />
                <CCarouselControl direction="next" />
              </CCarousel>
            </CCol>
          </CRow>

          <CCard className="shadow-sm my-2">
            <CCardBody>
              <CRow className="buttons">
                <CCol md="5" className="buttons__btn">
                  <Link to="/transportcapacitybookings/newui">
                    <CButton
                      type="button"
                      className="btn btn-lg btn-link text-info"
                    >
                      New Booking
                    </CButton>
                  </Link>
                </CCol>
                <CCol md="5" className="buttons__btn">
                  <Link to="/transportcapacitybookings">
                    <CButton
                      type="button"
                      className="btn btn-lg btn-link text-info"
                    >
                      View Booking
                    </CButton>
                  </Link>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </div>
      </div>
    );
  }
}

export default Home;
