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
import { isArray } from 'lodash';
// import {useSelector} from 'react-redux'


function TransportcapacitybookingView() {
  // const data = useSelector((state)=> state.tvbDta)
  const [TcbData,setTcbData] = useState('')
  let { id } = useParams();


  const [localData, setlocalData] = useState(JSON.parse(localStorage.getItem('state')));

 
  
  // 605db31ecfc2c6c738963b4e   
  console.log( (TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.declaredValueForCustoms.Measurementtype),"Measurementtype111")
  const declaredValueForCustoms =localData&& localData.tvbDta.amounttypesCodes.filter((item)=> item._id === (TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.declaredValueForCustoms.Measurementtype) )
  // const totalPackageQuantity = 'localData.tvbDta.amounttypesCodes.filter((item)=> item._id === "605db31ecfc2c6c738963b4e" )'
  const totalItemQuantity = localData&& localData.tvbDta.quantitytypesCodes.filter((item)=> item._id === (TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalItemQuantity.Measurementtype) )
  const totalGrossVolume = localData&& localData.tvbDta.measurementtypesCodes.filter((item)=> item._id === (TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossVolume.Measurementtype) )
  const totalGrossWeight =localData&& localData.tvbDta.measurementtypesCodes.filter((item)=> item._id === (TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossWeight.Measurementtype) )
  

  const totalPackageQuantity = localData&& localData.tvbDta.amounttypesCodes.filter((item)=> item._id === (TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalPackageQuantity.Measurementtype) )

 
 
  console.log(totalGrossVolume,"totalGrossWeight")

  
  //   // const declaredValueForCustoms = ''
  // const totalPackageQuantity = ''
  // const totalItemQuantity = ''
  // const totalGrossVolume = ''
  // const totalGrossWeight =''


   //declaredData[0].codeListVersion
   
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
      <div style={{textAlign:"end" ,fontSize:"1.2rem",fontWeight:"bold",position:"relative",left:"4rem"}}>Order Id: &nbsp;{TcbData&& TcbData.data.bookingId}</div>
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
                                     
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.utcOffset} />
  
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>City</CLabel>
                                  
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.cityCode} />
                             
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
                                  
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.provinceCode} />
                             
                                   
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
                                  
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.longitude} />
                             
                                   
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
                                    
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact && TcbData.data.plannedPickUp.Logisticlocation.contact.contactTypeCode.Name} />
                              
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Person Name</CLabel>
                                   
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact && TcbData.data.plannedPickUp.Logisticlocation.contact.personName} />
                                 
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Department Name</CLabel>
                                    
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact && TcbData.data.plannedPickUp.Logisticlocation.contact.departmentName} />
                             
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Job Title</CLabel>
                                    
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact && TcbData.data.plannedPickUp.Logisticlocation.contact.jobTitle} />
                             
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Responsibility</CLabel>
                                   
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact && TcbData.data.plannedPickUp.Logisticlocation.contact.responsibility.Name} />
                             
                                              </CCol>
                                              <CCol md="12">
                                                  <div className="card-title mt-3">
                                                      Communication Channel
                                                  </div>
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Communication Channel Code</CLabel>
                                    
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact && TcbData.data.plannedPickUp.Logisticlocation.contact.communicationChannelCode.Name} />
                       
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Communication Value</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact && TcbData.data.plannedPickUp.Logisticlocation.contact.communicationValue} />
                             
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Communication Channel Name</CLabel>
                                    <CInput value={TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact && TcbData.data.plannedPickUp.Logisticlocation.contact.communicationChannelName} />
                             
                                               
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

                            <CCol md="6" style={{fontSize:"1.2rem"}}>
                              <CLabel>Start at:&nbsp;</CLabel>
                              {` ${TcbData &&  Moment(TcbData.data.plannedPickUp.LogisticEventPeriod.beginDate ).format("DD-MM-YYYY")} : ${TcbData && TcbData.data.plannedPickUp.LogisticEventPeriod.beginTime} `}
                            
                             
                            </CCol>
                            <CCol md="6" style={{fontSize:"1.2rem"}}>
                            <CLabel>Ends at:&nbsp;</CLabel>
                            {`${TcbData &&  Moment(TcbData.data.plannedPickUp.LogisticEventPeriod.endDate ).format("DD-MM-YYYY")} : ${TcbData && TcbData.data.plannedPickUp.LogisticEventPeriod.endTime}`}
                          
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
                                     
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.utcOffset} />
  
                                  </CCol>
                                  <CCol md="4">
                                    
                                  <CLabel>City</CLabel>
                                  
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.cityCode} />
                             
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
                                  
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.provinceCode} />
                             
                                   
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
                                  
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.longitude} />
                             
                                   
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
                                    
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact && TcbData.data.plannedDropOff.Logisticlocation.contact.contactTypeCode.Name} />
                              
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Person Name</CLabel>
                                   
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact && TcbData.data.plannedDropOff.Logisticlocation.contact.personName} />
                                 
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Department Name</CLabel>
                                    
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact && TcbData.data.plannedDropOff.Logisticlocation.contact.departmentName} />
                             
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Job Title</CLabel>
                                    
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact && TcbData.data.plannedDropOff.Logisticlocation.contact.jobTitle} />
                             
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Responsibility</CLabel>
                                   
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact && TcbData.data.plannedDropOff.Logisticlocation.contact.responsibility.Name} />
                             
                                              </CCol>
                                              <CCol md="12">
                                                  <div className="card-title mt-3">
                                                      Communication Channel
                                                  </div>
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Communication Channel Code</CLabel>
                                    
                                    <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact && TcbData.data.plannedDropOff.Logisticlocation.contact.communicationChannelCode.Name} />
                       
                                              </CCol>
                                              <CCol md="4">
                                                
                                        <CLabel>Communication Value</CLabel>
                                             {TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact ?(<CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact && TcbData.data.plannedDropOff.Logisticlocation.contact.communicationValue} />):<CInput disabled="true"></CInput>}
  
                                              </CCol>
                                              <CCol md="4">
                                                
                                    <CLabel>Communication Channel Name</CLabel>
                                    {TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact ?(
                                      <CInput value={TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact && TcbData.data.plannedDropOff.Logisticlocation.contact.communicationChannelName} />
                                    ):<CInput disabled="true"></CInput>}
                                    
                             
                                               
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
                                {/* //PickupTime DD-MM-YYYY 
      pickupStartTime: "2012-05-12T10:56",
      pickupEndTime: "2012-05-12T10:56",
      //Dropoff Time
      dropOffStartTime: "2012-05-12T10:56",
      dropOffEndTime: "2012-05-12T10:56", 
      
        pickupStartDate: data.PickUpTime && Moment(data.PickUpTime.pickupStartTime).format("YYYY-MM-DD"),
            pickupStartTime:data.PickUpTime && Moment(data.PickUpTime.pickupStartTime).format("hh:mm"),
            pickupEndDate: data.PickUpTime && Moment(data.PickUpTime.pickupEndTime).format("YYYY-MM-DD"),
            pickupEndTime: data.PickUpTime &&  Moment(data.PickUpTime.pickupEndTime).format("hh:mm")

      */}


                               
                                <CCol md="6" style={{fontSize:"1.2rem"}}>
                              <CLabel>Starts at:&nbsp;</CLabel>
                                {/* <CInput type="datetime-local" value={`${TcbData &&  Moment(TcbData.data.plannedDropOff.LogisticEventPeriod.beginDate ).format("YYYY-MM-DD")}T${TcbData && TcbData.data.plannedDropOff.LogisticEventPeriod.beginTime}`}/> */}
                               {`${TcbData &&  Moment(TcbData.data.plannedDropOff.LogisticEventPeriod.beginDate ).format("DD-MM-YYYY ")}: ${TcbData && TcbData.data.plannedDropOff.LogisticEventPeriod.beginTime}`}
                             
                              </CCol>
                              <CCol md="6" style={{fontSize:"1.2rem"}}>
                              <CLabel>Ends at:&nbsp;</CLabel>
                              {/* <CInput type="datetime-local" value={`${TcbData &&  Moment(TcbData.data.plannedDropOff.LogisticEventPeriod.endDate ).format("YYYY-MM-DD")}T${TcbData && TcbData.data.plannedDropOff.LogisticEventPeriod.endTime}`}/> */}
                              {`${ TcbData &&  Moment(TcbData.data.plannedDropOff.LogisticEventPeriod.endDate ).format("YYYY-MM-DD")}: ${TcbData && TcbData.data.plannedDropOff.LogisticEventPeriod.endTime}`}
                            
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
                                 {/* <CInput value={ totalGrossVolume && totalGrossVolume[0].codeListVersion} /> */}
                          </CInputGroup>
                          
                        </CCol>
                        <CCol md="6" style={{marginTop:"0.5rem"}}>
                        <CLabel>Total Gross Weight : &nbsp;</CLabel>

                            <CInputGroup  style={{marginTop:"-0.5rem"}}>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalGrossWeight.Value} />
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalGrossWeight.Measurementtype} />
                                    {/* <CInput value={totalGrossWeight && totalGrossWeight[0].codeListVersion} /> */}
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
                                   
                                    {isArray(declaredValueForCustoms) && (declaredValueForCustoms[0] && <CInput value={declaredValueForCustoms[0].codeListVersion} />)}
                                  
                                    

                                 
                             
                             
                            </CInputGroup>
                          
                        </CCol>
                        <CCol md="6" style={{marginTop:"0.5rem"}}>
                        <CLabel>Total Package Quantity: &nbsp;</CLabel>

                          <CInputGroup  style={{marginTop:"-0.5rem"}}>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalPackageQuantity.Value} />
                                    {/* <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalPackageQuantity.Measurementtype} /> */}
                                    {/* totalPackageQuantity */}
                                    {isArray(totalPackageQuantity) && (totalPackageQuantity[0] && <CInput value={totalPackageQuantity[0].codeListVersion} />)}
                            
                            </CInputGroup>
                         
                        </CCol>
                        <CCol md="6" style={{marginTop:"0.5rem"}}>
                        <CLabel>Total Item Quantity: &nbsp;</CLabel>
                          
                          <CInputGroup  style={{marginTop:"-0.5rem"}}>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalItemQuantity.Value} />
                                    {/* <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalItemQuantity.Measurementtype} /> */}
                                    
                                    {/* <CInput value={ totalItemQuantity && totalItemQuantity[0].codeListVersion}/> */}
                                    
                                    {isArray(totalItemQuantity) && (totalItemQuantity[0] && <CInput value={totalItemQuantity[0].codeListVersion} />)}
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
                                    {/* <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossWeight.Measurementtype} /> */}
                                    {isArray(totalGrossWeight) && (totalGrossWeight[0] && <CInput value={totalGrossWeight[0].codeListVersion} />)}
                            </CInputGroup>
                          
                        </CCol>
                        <CCol md="6" style={{marginTop:"0.5rem"}}>
                        <CLabel>Total Gross Volume: &nbsp;</CLabel>

                          <CInputGroup  style={{marginTop:"-0.5rem"}}>
                                    <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossVolume.Value} />
                                    {/* <CInput value={TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossVolume.Measurementtype} /> */}
                                    {isArray(totalGrossVolume) && (totalGrossVolume[0] && <CInput value={totalGrossVolume[0].codeListVersion} />)}
                                    {/* {isArray(declaredValueForCustoms) && (declaredValueForCustoms[0] && <CInput value={declaredValueForCustoms[0].codeListVersion} />)} */}
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
