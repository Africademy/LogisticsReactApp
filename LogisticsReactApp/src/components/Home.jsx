import React, { Component, useState ,useEffect } from "react";
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
import {useDispatch} from 'react-redux'
import { transportServiceCategoryCodesAction, transportServiceConditionTypeCodesAction, transportServiceLevelCodesAction } from "../actions/ServiceDetailActions";
import {
  AdditionalLocationIdentificationCodesAction,
  LocationSpecificInstructionsCodesAction,
  CurrencyOfPartyCodesAction,
  LanguageOfthePartyCodesAction,
  CountryCodesAction,
  ContactTypeCodesAction,
  ResposibilitiesCodesAction,
  commmunicationChannelCodesAction,
  SublocationIdentificationCodesAction

} from "../actions/TCBLocationAction"
import { amounttypesCodesAction, CargoTypeCodesAction, CargoTypeDescriptionCodesAction, CountryOfOriginCodesAction, FinalDestinationCountryCodesAction, HarmonizedSystemCodesAction, measurementtypesCodesAction, PackageTypeCodesAction, quantitytypesCodesAction, TotalpackagequantitysCodesAction } from "../actions/CargoTcbAction";
 

const Home = ()=> {

     const dispatch = useDispatch()

     useEffect(()=>{
      dispatch(transportServiceCategoryCodesAction())
      dispatch(transportServiceConditionTypeCodesAction())
      dispatch(transportServiceLevelCodesAction())
      dispatch(AdditionalLocationIdentificationCodesAction())
      dispatch(LocationSpecificInstructionsCodesAction())
      dispatch(CurrencyOfPartyCodesAction())
      dispatch(LanguageOfthePartyCodesAction())
      dispatch(CountryCodesAction())
      dispatch(ContactTypeCodesAction())
      dispatch(ResposibilitiesCodesAction())
      dispatch(commmunicationChannelCodesAction())
      dispatch(SublocationIdentificationCodesAction())
      //cargo
      dispatch(CargoTypeCodesAction())
      dispatch(HarmonizedSystemCodesAction())
      dispatch(CargoTypeDescriptionCodesAction())
      dispatch(CountryOfOriginCodesAction())
      dispatch(FinalDestinationCountryCodesAction())
      dispatch(measurementtypesCodesAction())
      dispatch(amounttypesCodesAction())
      dispatch(quantitytypesCodesAction())
      dispatch(PackageTypeCodesAction())
      dispatch(TotalpackagequantitysCodesAction())

     },[])


     const [state,setState] = useState({
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
 
      })


    return (
      <div className="wrapper">
        <div className="container-fluid">
          <CRow>
            <CCol sm={12}>
              <CCarousel animate activeIndex={state.activeIndex}>
                <CCarouselIndicators />
                <CCarouselInner className="rounded-top rounded-bottom">
                  {state.slides.map((slide) => (
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


export default Home;
