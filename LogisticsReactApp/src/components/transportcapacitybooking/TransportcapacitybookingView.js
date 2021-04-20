/* eslint-disable no-lone-blocks */
import { CButton, CCard, CCardBody, CCardHeader, CCol, CCollapse, CContainer, CInput, CInputGroup, CLabel, CRow } from '@coreui/react';
import {} from "./transportcapacitybookingForm.css";

import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'

import { AiOutlineCheck, AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
import { useParams } from 'react-router'

import FormicControl from '../../utils/CoreUI/FormicControl';
import { getTransportcapacitybooking } from '../../services/transportcapacitybookingService';
import Moment from "moment";
// import {useSelector} from 'react-redux'


function TransportcapacitybookingView() {
  // const data = useSelector((state)=> state.tvbDta)
  const [TcbData,setTcbData] = useState('')
  let { id } = useParams();

  // useEffect(()=>{
  //   console.log("effect runnning")
  //   const localData = localStorage.getItem('state')
  //   // console.log(localData)
  //   setTcbData(JSON.parse(localData))
  //   getDataFromTcB()
  // },[])

  // const getDataFromTcB = async ()=>{

  //    const getData = await getTransportcapacitybooking(id)
  //    console.log(getData,"getTransportcapacitybooking")
  // }

  // console.log(id,"id")




   
  // const initialValues = {
  //   servicecategory: TcbData && TcbData.tvbDta.ServiceDetailsData.servicecategory,
  //   serviceConditionType:TcbData && TcbData.tvbDta.ServiceDetailsData.serviceConditionType,
  //   serviceLevel:TcbData && TcbData.tvbDta.ServiceDetailsData.serviceLevel

  
    
  // };

  
 useEffect(()=>{
  console.log("effect runnning")
  getDataFromTcB()
},[])
  useEffect(()=>{

  },[TcbData])
const getDataFromTcB = async ()=>{

   const getData = await getTransportcapacitybooking(id)
   console.log(getData,"getTransportcapacitybooking")
   setTcbData(getData)
}

console.log(TcbData,"TcbData")
console.log((TcbData && TcbData.data.transportServiceCategoryCode.Name),"TcbData")



  const [ServiceDetails,setServiceDetails] = useState(false)
  const [PickUpLocation,setPickUpLocation] = useState(false)
  const [pickUPTime,setpickUPTime] = useState(false)
  const [DropOffLocation,setDropOffLocation] = useState(false)
  const [DropOffTime,setDropOffTime] = useState(false)
  const [collapseSpecialRequirements,setcollapseSpecialRequirements] =useState(false)
   //Order Details

  // const dropDownOtions = [
  
  //   { key: "option1", value: "option1" },
  //   { key: "option2", value: "option2" },
  //   { key: "option3", value: "option3" },
  // ];



 

  return (
    <div>
      <div style={{textAlign:"end" ,fontSize:"1.2rem",fontWeight:"bold",position:"relative",left:"4rem"}}>Order Id: &nbsp;{id}</div>
       {/* Original form */}


       <div className="transportcapacitybooking">
        <div className="py-5">
               {/* <div className="AlertInTCB">
                </div> */}
          
          <CContainer>
        
            {/*1111111111  Service Details */}
            <CCard >
              <CCardHeader
                  className={ `card-toggle-header Ccard ${ServiceDetails ? "cardheader": ""}` }
                  onClick={() => {
                    setServiceDetails(!ServiceDetails)
                  
                  }}
                  >
                    <div className="cardFlex">
                      <div className="cardFlex__header">
                      <span className="cardFlex__header__Icon"> <AiOutlineCheck /></span>
                        <h6>Service Details</h6>
                      </div>
                       
                       {ServiceDetails ?  <AiOutlineDown />: <AiOutlineRight />}

                    </div>
                 
                 
                 
                  </CCardHeader>
              
                <CCollapse  show={true}>
                  {/* <div className="collapse"> */}
                  <CCardBody>
                    <Formik
                     
                    >
                      {(formik) => (
                      
                        <Form>
                          
                          <div className="AlertInOrder">
                            
                          </div>

                          <CRow className="justify-content-center">
                            <CCol md="4"> 
                              <CLabel>Service category</CLabel>
                              <CInput value={TcbData && TcbData.data.transportServiceCategoryCode.Name} />
                            </CCol>
                            <CCol md="4">
                              <CLabel>Service Condition Type</CLabel>
                              <CInput value={TcbData && TcbData.data.transportServiceConditionTypeCode.Name} />
                              
                            </CCol>
                            <CCol md="4">
                               <CLabel>Service Level</CLabel>
                              <CInput value={TcbData && TcbData.data.transportServiceLevelCode.Name} />
                             
                            
                            </CCol>
                          </CRow>
                        
                        </Form>
                      )}
                    </Formik>
              </CCardBody>
	
                  {/* </div> */}
              </CCollapse>
            </CCard>
            {/* 222222222222 PickUp Location */}
              <CCard >
              <CCardHeader
                  className={ `card-toggle-header Ccard ${PickUpLocation ? "cardheader": ""}` }
                  onClick={() => {
                    
                    {setPickUpLocation(!PickUpLocation) }
                    { setServiceDetails(false)}
                      
                  
                  }}
                  >
                    <div className="cardFlex">
                      <div className="cardFlex__header">
                      <span className="cardFlex__header__Icon"> <AiOutlineCheck /></span>
                        <h6>Pickup Location</h6>
                      </div>
                       
                       {  PickUpLocation ?  <AiOutlineDown />: <AiOutlineRight />}

                    </div>
                  </CCardHeader>

                { (
                  <CCollapse  show={true}>
                  
                  <CCardBody>
                     <Formik
                       
                        >
                          {(formik) => (
                              <Form>
                              <div className="AlertInOrder">
                                  {/* {showAlert && (<Alert bgcolor="bgSuccess"> Successfully Submited The Order Details! Please Go Head Planned Details </Alert>)} */}
                              </div>
                              <CRow className="justify-content-center">
                                  <CCol md="4">
                                  <CLabel>Additional Location Identification</CLabel>
                                  <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.additionalLocationIdentification.Name} />
                             
                                  </CCol>
                                  <CCol md="4">
                                  <CLabel>Sublocation Identification</CLabel>
                                  <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.sublocationIdentification} />
                             
                                    
                                  </CCol>
                                  <CCol md="4">
                                  <CLabel>Location Name</CLabel>
                                  <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.locationName} />
                             
                                  
                                  </CCol>
                                  <CCol md="4">
                                    <CLabel>ALocation Specific Instructions</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.locationSpecificInstructions.Name} />
                             
                            
                                  </CCol>
                                  <CCol md="4">
                                    
                                  < CLabel>UTC Offset</CLabel>
                                     <CInput disabled/>
                                    {/* <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.UtcOffSet} /> */}
  
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>City</CLabel>
                                  <CInput disabled/>
                                    {/* <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.City} /> */}
                             
                                  </CCol>

                                  <CCol md="4">
                                    
                                  <CLabel>Country</CLabel>
                                    <CInput value={TcbData &&  TcbData.data.plannedPickUp.Logisticlocation.countryCode.Name} />
                             
                                      
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Cross Street</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.crossStreet} />
                             
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Currency Of Party</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.currencyOfParty.Name} />
                             
                                    
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Language Of the Party</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.languageOfTheParty.Name} />
                             
                                     
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Name</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.name} />
                             
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Post Box Number</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.pOBoxNumber} />
                             
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Postal Code</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.postalCode} />
                             
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Province</CLabel>
                                  <CInput disabled/>
                                    {/* <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.province} /> */}
                             
                                   
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>State</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.state} />
                             
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Street Address One</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.streetAddressOne} />
                             
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Street Address Two</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.streetAddressTwo} />
                             
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Street Address Three</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.streetAddressThree} />
                             
                                  </CCol>
                              </CRow>

                              <div className="card-title mt-3">Geological Coordinates</div>

                              {/* Loop the below CRow for new product */}
                              <CRow className="justify-content-center">
                                  <CCol md="4">
                                    
                                  <CLabel>Latitude</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.latitude} />
                             
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Longitude</CLabel>
                                  <CInput disabled/>
                                    {/* <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.longitude} /> */}
                             
                                   
                                  </CCol>
                                  <CCol md="4"></CCol>
                                  <div>
                                   
                                      <CCol md="12">
                                          <div className="card-title mt-3"> Contact Details</div>
                                      </CCol>

                                      <CCardBody>
                                     

                                          <CRow>
                                              <CCol md="4">
                                                
                                    <CLabel>Contact Type</CLabel>
                                    <CInput disabled/>
                                    {/* <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact} /> */}
                              
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Person Name</CLabel>
                                    <CInput  disabled/>
                                    {/* <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.personeName} /> */}
                                 
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Department Name</CLabel>
                                    <CInput disabled />
                                    {/* <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.depormentName} /> */}
                             
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Job Title</CLabel>
                                    <CInput disabled/>
                                    {/* <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.jobTitle} /> */}
                             
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Responsibility</CLabel>
                                    <CInput  disabled/>
                                    {/* <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.responsibility.Name} /> */}
                             
                                              </CCol>
                                              <CCol md="12">
                                                  <div className="card-title mt-3">
                                                      Communication Channel
                                                  </div>
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Communication Channel Code</CLabel>
                                    <CInput disabled />
                                    {/* <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.communicationChannelCode.Name} /> */}
                       
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Communication Value</CLabel>
                                    <CInput disabled />
                                    {/* <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.communicationValue} /> */}
                             
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Communication Channel Name</CLabel>
                                    <CInput disabled />
                                    {/* <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.communicationChannelName} /> */}
                             
                                               
                                              </CCol>
                                          </CRow>

                                          {/* closeContact */}
                                      </CCardBody>
                                  </div>
                              </CRow>

                             
                          </Form>
                  
                            
                            )}
                    </Formik>
                 </CCardBody>

           
                 </CCollapse>
                )}
            </CCard>

             {/*333333 Pick Up Time */}

             <CCard>
                <CCardHeader
                  className={ `card-toggle-header ${pickUPTime ? "cardheader": ""}` }
                  onClick={() => {
                    { setpickUPTime(!pickUPTime)}
                    { setPickUpLocation(false) }
                    
                    
                   // eslint-disable-next-line no-lone-blocks
                  //  { setcollapseOrderDetails(false)} 
                  }}
                >
                
                   <div className="cardFlex">
                       
                       <div className="cardFlex__header">
                       <span className="cardFlex__header__Icon"> <AiOutlineCheck /></span>
                        <h6>Pickup Time</h6>
                      </div>
                       { pickUPTime ?  <AiOutlineDown />: <AiOutlineRight />}

                    </div>
                    </CCardHeader>
                    {(
                      <CCollapse show={true}>
                        {/* <TCBPickUpTime setenableNext={setenableNextPp} /> */}
                        <CCardBody>
                    <Formik
                    
                    >
                      {(formik) => (
                        <Form>
                          <CRow className="justify-content-center">
                            <CCol md="12">
                              <div className="card-title mt-3">Time Band</div>
                            </CCol>

                            <CCol md="6">
                              {/* <CLabel>Start </CLabel> */}
                             {/* { TcbData &&  Moment(TcbData.data.plannedPickUp.LogisticEventPeriod.endDate ).format("hh:mm")} */}
                             {/* <CCol md="3"> </CCol>
                             <CCol md="3"> </CCol> */}
                             Start Date: <CInput value= { TcbData &&  Moment(TcbData.data.plannedPickUp.LogisticEventPeriod.beginDate ).format("DD-MM-YYYY")} />
                             Start Time :<CInput value= { TcbData &&  Moment(TcbData.data.plannedPickUp.LogisticEventPeriod.beginDate ).format(" hh:mm")} />
                            
                             
                            </CCol>
                            <CCol md="6">
                            {/* <CLabel>Ends at</CLabel> */}
                            End Date:<CInput value={ TcbData &&  Moment(TcbData.data.plannedPickUp.LogisticEventPeriod.endDate ).format("DD-MM-YYYY")}/>
                            End Time:<CInput value={ TcbData &&  Moment(TcbData.data.plannedPickUp.LogisticEventPeriod.endDate ).format(" hh:mm")}/>
                            </CCol>
                        
                          </CRow>

                        
                        </Form>
                      )}
                    </Formik>
                  </CCardBody>

                      
                      </CCollapse>
                )}
              </CCard>
              
               {/* 44444 DropOff Location */}
               <CCard >
              <CCardHeader
                  className={ `card-toggle-header Ccard ${DropOffLocation ? "cardheader": ""}` }
                  onClick={() => {
                    {setDropOffLocation(!DropOffLocation) }
                    {setpickUPTime(false)}
                    
                  
                  }}
                  >
                    <div className="cardFlex">
                      <div className="cardFlex__header">
                      <span className="cardFlex__header__Icon"> <AiOutlineCheck /></span>
                        <h6>Drop-Off Location</h6>
                      </div>
                       
                       {DropOffLocation ?  <AiOutlineDown />: <AiOutlineRight />}

                    </div>
                 
                 
                 
                  </CCardHeader>
              
                <CCollapse  show={true}>
                <CCardBody>
                     <Formik
                       
                        >
                          {(formik) => (
                              <Form>
                              <div className="AlertInOrder">
                                  {/* {showAlert && (<Alert bgcolor="bgSuccess"> Successfully Submited The Order Details! Please Go Head Planned Details </Alert>)} */}
                              </div>
                              <CRow className="justify-content-center">
                                  <CCol md="4">
                                  <CLabel>Additional Location Identification</CLabel>
                                  <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.additionalLocationIdentification.Name} />
                             
                                  </CCol>
                                  <CCol md="4">
                                  <CLabel>Sublocation Identification</CLabel>
                                  <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.sublocationIdentification} />
                             
                                    
                                  </CCol>
                                  <CCol md="4">
                                  <CLabel>Location Name</CLabel>
                                  <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.locationName} />
                             
                                  
                                  </CCol>
                                  <CCol md="4">
                                    <CLabel>ALocation Specific Instructions</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.locationSpecificInstructions.Name} />
                             
                            
                                  </CCol>
                                  <CCol md="4">
                                    
                                  < CLabel>UTC Offset</CLabel>
                                     <CInput disabled/>
                                    {/* <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.UtcOffSet} /> */}
  
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>City</CLabel>
                                  <CInput disabled/>
                                    {/* <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.City} /> */}
                             
                                  </CCol>

                                  <CCol md="4">
                                    
                                  <CLabel>Country</CLabel>
                                    <CInput value={TcbData &&  TcbData.data.plannedDropOff.Logisticlocation.countryCode.Name} />
                             
                                      
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Cross Street</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.crossStreet} />
                             
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Currency Of Party</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.currencyOfParty.Name} />
                             
                                    
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Language Of the Party</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.languageOfTheParty.Name} />
                             
                                     
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Name</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.name} />
                             
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Post Box Number</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.pOBoxNumber} />
                             
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Postal Code</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.postalCode} />
                             
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Province</CLabel>
                                  <CInput disabled/>
                                    {/* <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.province} /> */}
                             
                                   
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>State</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.state} />
                             
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Street Address One</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.streetAddressOne} />
                             
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Street Address Two</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.streetAddressTwo} />
                             
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Street Address Three</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.streetAddressThree} />
                             
                                  </CCol>
                              </CRow>

                              <div className="card-title mt-3">Geological Coordinates</div>

                              {/* Loop the below CRow for new product */}
                              <CRow className="justify-content-center">
                                  <CCol md="4">
                                    
                                  <CLabel>Latitude</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.latitude} />
                             
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>Longitude</CLabel>
                                  <CInput disabled/>
                                    {/* <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.longitude} /> */}
                             
                                   
                                  </CCol>
                                  <CCol md="4"></CCol>
                                  <div>
                                   
                                      <CCol md="12">
                                          <div className="card-title mt-3"> Contact Details</div>
                                      </CCol>

                                      <CCardBody>
                                     

                                          <CRow>
                                              <CCol md="4">
                                                
                                    <CLabel>Contact Type</CLabel>
                                    <CInput disabled/>
                                    {/* <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact} /> */}
                              
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Person Name</CLabel>
                                    <CInput  disabled/>
                                    {/* <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.personeName} /> */}
                                 
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Department Name</CLabel>
                                    <CInput disabled />
                                    {/* <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.depormentName} /> */}
                             
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Job Title</CLabel>
                                    <CInput disabled/>
                                    {/* <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.jobTitle} /> */}
                             
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Responsibility</CLabel>
                                    <CInput  disabled/>
                                    {/* <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.responsibility.Name} /> */}
                             
                                              </CCol>
                                              <CCol md="12">
                                                  <div className="card-title mt-3">
                                                      Communication Channel
                                                  </div>
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Communication Channel Code</CLabel>
                                    <CInput disabled />
                                    {/* <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.communicationChannelCode.Name} /> */}
                       
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Communication Value</CLabel>
                                    <CInput disabled />
                                    {/* <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.communicationValue} /> */}
                             
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Communication Channel Name</CLabel>
                                    <CInput disabled />
                                    {/* <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.communicationChannelName} /> */}
                             
                                               
                                              </CCol>
                                          </CRow>

                                          {/* closeContact */}
                                      </CCardBody>
                                  </div>
                              </CRow>

                             
                          </Form>
                  
                            
                            )}
                    </Formik>
                 </CCardBody>

           
             
              </CCollapse>
            </CCard>

              
              {/* 555555  DropOff Time */}
              <CCard>
                <CCardHeader
                className={ `card-toggle-header ${ DropOffTime ? "cardheader": ""}` }
                onClick={() => {
                  { setDropOffTime(!DropOffTime) }
                  {  setDropOffLocation(false) }
                 
                 
                }}
                >
               
                   <div className="cardFlex">
                       
                       <div className="cardFlex__header">
                       <span className="cardFlex__header__Icon"> <AiOutlineCheck /></span>
                        <h6> Drop-Off Time</h6>
                      </div>
                       { DropOffTime ?  <AiOutlineDown />: <AiOutlineRight />}

                    </div>
                </CCardHeader>
                  {(
                     <CCollapse show={true}>
                     {/* <TCBPlannedDropOff setenableNext={setenableNextPd} /> */}
                     {/* <TCBDropOffTime  setenableNext={setTabenableCG}/> */}
                     <CCardBody>
                        <Formik
                         
                        >
                          {(formik) => (
                            <Form>
                              <CRow className="justify-content-center">
                                <CCol md="12">
                                  <div className="card-title mt-3">Time Band</div>
                                </CCol>

                               
                                <CCol md="6">



                              {/* <CLabel>Starts at</CLabel> */}
                              Start Date:<CInput value= { TcbData &&  Moment(TcbData.data.plannedDropOff.LogisticEventPeriod.beginDate ).format("DD-MM-YYYY ")} />
                              Start Time:<CInput value= { TcbData &&  Moment(TcbData.data.plannedDropOff.LogisticEventPeriod.beginDate ).format("hh:mm")} />
                             
                            
                             
                            </CCol>
                            <CCol md="6">
                            {/* <CLabel>Ends at</CLabel> */}
                            End Date: <CInput value= { TcbData &&  Moment(TcbData.data.plannedDropOff.LogisticEventPeriod.endDate ).format("DD-MM-YYYY ")} />
                            End Time: <CInput value= { TcbData &&  Moment(TcbData.data.plannedDropOff.LogisticEventPeriod.endDate ).format("hh:mm")} />
                             
                            </CCol>
                        
                              </CRow>

                              
                            </Form>
                          )}
                        </Formik>
                      </CCardBody>

     
                  </CCollapse>
                  )}
              </CCard>
              
              {/*6666666  CargoCharacterstic */}
              <CCard>
                    <CCardHeader
                        className={ `card-toggle-header  ${ collapseSpecialRequirements ? "cardheader": ""}` }
                        onClick={() => {
                          { setcollapseSpecialRequirements(!collapseSpecialRequirements);}
                          {  setDropOffTime(false);}
                         
                     
                      }} 
                    >
                     
                      <div className="cardFlex">
                     
                       <div className="cardFlex__header">
                       <span className="cardFlex__header__Icon"> <AiOutlineCheck /></span>
                        <h6>  Space Requirements</h6>
                      </div>
                       { collapseSpecialRequirements ?  <AiOutlineDown />: <AiOutlineRight />}

                    </div>
                    </CCardHeader>
                          { (
                            <CCollapse show={true}>
                            {/* <CargoCharacteristicsForm  setenableNext={setTabenableSp}/> */}
                                <CCardBody>
                                 <Formik 
                                 
                                >
                       { formik => (
                    
                    <Form onSubmit={formik.handleSubmit} >
                         
                      <div className="card-title my-2">Cargo Characteristics</div>
                      <CRow>
                        <CCol md="6">
                                    <CLabel>Cargo Type</CLabel>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.cargoTypeCode.Name} />
                             
                           
                            {/* <FormicControl readOnly = "true"  control='select'  label='Cargo Type' id='cargoTypeCode' name='cargoType' options={dropDownOtions }  /> */}
                        </CCol>
                        <CCol md="6">
                                 <CLabel>Harmonized System</CLabel>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.harmonizedSystemCode.Name} />
                         {/* <FormicControl readOnly = "true"  control='select'  label='Harmonized System' id='harmonizedSystemCode' name='harmonizedSystemCode' options={dropDownOtions }  /> */}
                          
                        </CCol>
                        <CCol md="6">
                                    <CLabel>Cargo Type Description</CLabel>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.cargoTypeDescription.Name} />
                             
                            {/* <FormicControl readOnly = "true" control='select'  label='Cargo Type Description' id='cargoTypeDescription' name='cargoTypeDescription' options={dropDownOtions } /> */}
                        
                        </CCol>
                        <CCol md="3">
                                    <CLabel>Country Of Origin</CLabel>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.countryOfOriginCode.Name} />
                             
                          
                        
                           {/* <FormicControl readOnly = "true" control='select'  label='Country Of Origin' id='countryOfOriginCode' name='countryOfOriginCode' options={dropDownOtions } /> */}
                        </CCol>
                        <CCol md="3">
                        <CLabel>Final Destination Country</CLabel>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.finalDestinationCountry.Name} />
                             
                        
                           {/* <FormicControl readOnly = "true" control='select'  label='Final Destination Country' id='finalDestinationCountry' name='finalDestinationCountry' options={dropDownOtions } /> */}
                        </CCol>

                        <CCol md="6" style={{marginTop:"0.5rem"}}>

                          <CLabel>Total Gross Volume : &nbsp;</CLabel>
                          <CInputGroup style={{marginTop:"-0.5rem"}} >
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalGrossVolume.Value} />
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalGrossVolume.Measurementtype} />                         
                          </CInputGroup>
                          
                        </CCol>
                        <CCol md="6" style={{marginTop:"0.5rem"}}>
                        <CLabel>Total Gross Weight : &nbsp;</CLabel>

                            <CInputGroup  style={{marginTop:"-0.5rem"}}>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalGrossWeight.Value} />
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalGrossWeight.Measurementtype} />
 
                            </CInputGroup>
                          </CCol>

                          <CCol md="6" style={{marginTop:"0.5rem"}}>
                             <CLabel>Total Transport Net Weight: &nbsp;</CLabel>
                         
                              <CInputGroup  style={{marginTop:"-0.5rem"}}>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalTransportNetWeight.Value} />
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalTransportNetWeight.Measurementtype} />
                             
                              <div className="VolumeCodes">
                             
                                
                              </div>
                            </CInputGroup>
                        </CCol>
                        <CCol md="6" style={{marginTop:"0.5rem"}}>
                              <CLabel>Total Chargeable Weight: &nbsp;</CLabel>
                              <CInputGroup  style={{marginTop:"-0.5rem"}}>
                           
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalChargeableWeight.Value} />
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalChargeableWeight.Measurementtype} />
                             
                             
                            </CInputGroup>
                         
                            
                        </CCol>
                        <CCol md="6" style={{marginTop:"0.5rem"}}>
                            <CLabel>Declared Weight For Customs: &nbsp;</CLabel>

                            <CInputGroup  style={{marginTop:"-0.5rem"}}>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.declaredWeightForCustoms.Value} />
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.declaredWeightForCustoms.Measurementtype} />
                             
                           
                            </CInputGroup>
                          
                        </CCol>
                     
                        <CCol md="6" style={{marginTop:"0.5rem"}}>
                             <CLabel>Total Loading Length: &nbsp;</CLabel>
                        
                             <CInputGroup  style={{marginTop:"-0.5rem"}}>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalLoadingLength.Value} />
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalLoadingLength.Measurementtype} />
                             
                              
                            </CInputGroup>
                        
                        </CCol>
                        <CCol md="6" style={{marginTop:"0.5rem"}}>
                        <CLabel>Associated Invoice Amount: &nbsp;</CLabel>

                          <CInputGroup  style={{marginTop:"-0.5rem"}}>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.associatedInvoiceAmount.Value} />
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.associatedInvoiceAmount.Measurementtype} />
                             
                            </CInputGroup>
                          
                        </CCol>
                        <CCol md="6" style={{marginTop:"0.5rem"}}>
                        <CLabel>Declared Value For Customs: &nbsp;</CLabel>

                          <CInputGroup  style={{marginTop:"-0.5rem"}}>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.declaredValueForCustoms.Value} />
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.declaredValueForCustoms.Measurementtype} />
                             
                             
                            </CInputGroup>
                          
                        </CCol>
                        <CCol md="6" style={{marginTop:"0.5rem"}}>
                        <CLabel>Total Package Quantity: &nbsp;</CLabel>

                          <CInputGroup  style={{marginTop:"-0.5rem"}}>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalPackageQuantity.Value} />
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalPackageQuantity.Measurementtype} />
                             
                            
                            </CInputGroup>
                         
                        </CCol>
                        <CCol md="6" style={{marginTop:"0.5rem"}}>
                        <CLabel>Total Item Quantity: &nbsp;</CLabel>
                          
                          <CInputGroup  style={{marginTop:"-0.5rem"}}>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalItemQuantity.Value} />
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalItemQuantity.Measurementtype} />
                            
                            </CInputGroup>
                          
                        </CCol>
                      </CRow>

                      <div className="card-title my-2">Package Total</div>
                    
                      <CRow>
                      <CCol md="6" style={{marginTop:"0.5rem"}}>
                      <CLabel>TPackage Type: &nbsp;</CLabel>

                          <CInputGroup  style={{marginTop:"-0.5rem"}}>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.packageTypeCode.Name} />
                                    {/* <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.} /> */}
                            
                            </CInputGroup>
                          
                        </CCol>
                        <CCol md="6" style={{marginTop:"0.5rem"}}>
                        <CLabel>Total Package Quantity: &nbsp;</CLabel>

                          <CInputGroup  style={{marginTop:"-0.5rem"}}>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalPackageQuantity} />
                                    {/* <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.} /> */}
                            
                            </CInputGroup>
                          
                        </CCol>
                        <CCol md="6" style={{marginTop:"0.5rem"}}>
                        <CLabel>Total Gross Weight: &nbsp;</CLabel>

                          <CInputGroup  style={{marginTop:"-0.5rem"}}>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossWeight.Value} />
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossWeight.Measurementtype} />
                            
                            </CInputGroup>
                          
                        </CCol>
                        <CCol md="6" style={{marginTop:"0.5rem"}}>
                        <CLabel>Total Gross Volume: &nbsp;</CLabel>

                          <CInputGroup  style={{marginTop:"-0.5rem"}}>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossVolume.Value} />
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossVolume.Measurementtype} />
                            
                            </CInputGroup>
                          
                        </CCol>
                    
                      </CRow>
                  

                   
                 


                    
                    </Form>
                  )}
              </Formik>

                         </CCardBody>
      
                         </CCollapse>
                          )}
                  
                  </CCard>


              {/* Form Ends here */}
           
        
          </CContainer>
        </div>
      </div>
  
    </div>
  )
}

export default TransportcapacitybookingView
