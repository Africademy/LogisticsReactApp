import { CButton, CCard, CCardBody, CCardHeader, CCol, CCollapse, CFormGroup, CFormText, CInput, CLabel, CLink, CRow } from '@coreui/react'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import FormicControl from '../../utils/CoreUI/FormicControl'
import * as yup from 'yup';
import Alert from '../../utils/Alert/Alert';

import {useDispatch} from 'react-redux'
import {DropOffLocationAction} from "../../actions/TCBActions"; 

function TCBDropOffLocation({setenableNext}) {

    const dispatch = useDispatch()
   

    // const [showAlert,setshowAlert] = useState(false)
    
    // const [collapseContactDetails,setcollapseContactDetails] = useState(false)
    // const [collapseAddLocation,setcollapseAddLocation] = useState(false)

    const dropDownOtions = [
        {key:'select value' ,value: ''},
        {key:'option1' ,value: 'option1'},
        {key:'option2' ,value: 'option2'},
        {key:'option3' ,value: 'option3'}
      ]

const initialValues ={
    additionalLocationIdentification:"",
    sublocationIdentification:"",
    locationName:"",
    locationSpecificInstructions:"",
    uTCOffset:"",
    cityName:"",
    country:"",
    crossStreet:"",
    currencyOfParty:"",
    launguageOftheParty:"",
    name:"",
    postBoxNumber:"",
    postalCode:"",
    province:"",
    state:"",
    streetAddressOne:"",
    streetAddressTwo:"",
    streetAddressThree:"",
    latitude:"",
    longitutue:"",

    contactType:"",
    personeName:"",
    depormentName:"",
    jobTitle:"",
    responsibility:"",
    communicationChannelCode:"",
    communicationValue:"",
    communicationChannelName:"",
}

  const validationSchema = yup.object({
    
   
    additionalLocationIdentification:yup.string().required(),
    sublocationIdentification:yup.string().required(),
    locationName:yup.string().required(),
    locationSpecificInstructions:yup.string().required(),
    uTCOffset:yup.string().required(),
    cityName:yup.string().required(),
    country:yup.string().required(),
    crossStreet:yup.string(),
    currencyOfParty:yup.string(),
    launguageOftheParty:yup.string(),
    name:yup.string().required(),
    postBoxNumber:yup.number().required(),
    postalCode:yup.number().required(),
    province:yup.string().required(),
    state:yup.string().required(),
    streetAddressOne:yup.string().required(),
    streetAddressTwo:yup.string(),
    streetAddressThree:yup.string(),
    latitude:yup.number(),
    longitutue:yup.number(),


    contactType:yup.string().required(),
    personeName:yup.string().required(),
    depormentName:yup.string(),
    jobTitle:yup.string(),
    responsibility:yup.string().required(),
    communicationChannelCode:yup.string().required(),
    communicationValue:yup.string().required(),
    communicationChannelName:yup.string(),
})

    return (
        <CCardBody>
           <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={(values)=> {
              console.log(values)
              dispatch(DropOffLocationAction(values))
              setenableNext(true)
          }}
        >
          { 
            formik =>(
                
              <Form>
                  <div className="AlertInOrder">
                      {/* {showAlert && (<Alert bgcolor="bgSuccess"> Successfully Submited The Order Details! Please Go Head Planned Details </Alert>)} */}
                  </div>
                     <CRow className="justify-content-center">
                                        <CCol md="4">
                                            
                                            <FormicControl control='select' label="Additional Location Identification"  id='AdditionalLocationIdentification' name='additionalLocationIdentification' options={dropDownOtions} />
                                        </CCol>
                                        <CCol md="4">
                                            
                                            <FormicControl control='select' label="Sublocation Identification"  id='SublocationIdentification' name='sublocationIdentification' options={dropDownOtions} />
                                        </CCol>
                                        <CCol md="4">
                                            
                                            <FormicControl control='input' placeholder="Enter here..." label="Location Name"  id='LocationName' name='locationName' options={dropDownOtions} />
                                        </CCol>
                                        <CCol md="4">
                                            
                                            <FormicControl control='select' label="Location Specific Instructions"  id='LocationSpecificInstructions' name='locationSpecificInstructions' options={dropDownOtions} />
                                        </CCol>
                                        <CCol md="4">
                                            
                                            <FormicControl control='input' placeholder="Enter here..." label="UTC Offset"  id='UTCOffset' name='uTCOffset' options={dropDownOtions} />
                                        </CCol>
                                        <CCol md="4">
                                            
                                            <FormicControl control='input' placeholder="Enter here..." label="City"  id='CityName' name='cityName' options={dropDownOtions} />
                                        </CCol>

                                        <CCol md="4">
                                            
                                            <FormicControl control='select'  label="Country"  id='Country' name='country' options={dropDownOtions} />
                                        </CCol>
                                        <CCol md="4">
                                            
                                                <FormicControl control='input' placeholder="Enter here..."  label="Cross Street"  id='CrossStreet' name='crossStreet' options={dropDownOtions} />
                                        </CCol>
                                        <CCol md="4">
                                            
                                                <FormicControl control='select'  label="Currency Of Party"  id='CurrencyOfParty' name='currencyOfParty' options={dropDownOtions} />
                                        </CCol>
                                        <CCol md="4">
                                            
                                            <FormicControl control='select'  label=" Language Of the Party"  id='LaunguageOftheParty' name='launguageOftheParty' options={dropDownOtions} />
                                        </CCol>
                                        <CCol md="4">
                                            
                                            <FormicControl control='input' placeholder="Enter here..."  label=" Name"  id='Name' name='name' options={dropDownOtions} />
                                        </CCol>
                                        <CCol md="4">
                                            
                                            <FormicControl control='input' placeholder="Enter here..."  label=" Post Box Number"  id='PostBoxNumber' name='postBoxNumber' options={dropDownOtions} />
                                        </CCol>
                                        <CCol md="4">
                                            
                                            <FormicControl control='input' placeholder="Enter here..."  label="Postal Code"  id='PostalCode' name='postalCode' options={dropDownOtions} />
                                        </CCol>
                                        <CCol md="4">
                                            
                                                <FormicControl control='input' placeholder="Enter here..."  label="Province"  id='Province' name='province' options={dropDownOtions} />
                                        </CCol>
                                        <CCol md="4">
                                            
                                            <FormicControl control='input' placeholder="Enter here..."  label="State"  id='State' name='state' options={dropDownOtions} />
                                        </CCol>
                                        <CCol md="4">
                                            
                                                <FormicControl control='input' placeholder="Enter here..."  label=" Street Address One"  id='StreetAddressOne' name='streetAddressOne' options={dropDownOtions} />
                                    
                                        </CCol>
                                        <CCol md="4">
                                            
                                            <FormicControl control='input' placeholder="Enter here..."  label="  Street Address Two"  id='StreetAddressTwo' name='streetAddressTwo' options={dropDownOtions} />
                                    
                                        </CCol>
                                        <CCol md="4">
                                            
                                            <FormicControl control='input' placeholder="Enter here..."  label="  Street Address Three"  id='StreetAddressThree' name='streetAddressThree' options={dropDownOtions} />
                                    
                                        </CCol>
                                        </CRow>

                                          <div className="card-title mt-3">Geological Coordinates</div>

                                        {/* Loop the below CRow for new product */}
                                        <CRow className="justify-content-center">
                                        <CCol md="4">
                                            
                                            <FormicControl control='input' type="number" placeholder="Enter here..."  label="Latitude"  id='Latitude' name='latitude' options={dropDownOtions} />
                                        </CCol>
                                        <CCol md="4">
                                            
                                                <FormicControl control='input' type="number" placeholder="Enter here..."  label="Longitude"  id='Longitutue' name='longitutue' options={dropDownOtions} />
                                    
                                        </CCol>
                                        <CCol md="4"></CCol>
                                        <div>
                                        {/* <CCardHeader
                                        className="card-toggle-header border-top border-bottom-0"
                                        onClick={() => {
                                            setcollapseContactDetails(!collapseContactDetails)
                                        }}
                                        >
                                       
                                        </CCardHeader> */}
                                         <CCol md="12">
                                            <div className="card-title mt-3"> Contact Details</div>
                                        </CCol>
                                       
                                        <CCardBody>
                                            {/* <PickupContactForm
                                            {...this.props}
                                            data={this.state}
                                            ></PickupContactForm> */}


                                   <CRow>
                                        <CCol md="4">
                                        
                                            <FormicControl control='select'   label="Contact Type"  id='ContactType' name='contactType' options={dropDownOtions} />
                                        </CCol>
                                        <CCol md="4">
                                        
                                        <FormicControl control='input'  placeholder="Enter here..."  label="Person Name"  id='PersoneName' name='personeName' options={dropDownOtions} />
                                    
                                        </CCol>
                                        <CCol md="4">
                                        
                                        <FormicControl control='input'  placeholder="Enter here..."   label="Department Name"  id='DepormentName' name='depormentName' options={dropDownOtions} />
                                    
                                        </CCol>
                                        <CCol md="4">
                                    
                                        <FormicControl control='input'  placeholder="Enter here..."  label="Job Title"  id='JobTitle' name='jobTitle' options={dropDownOtions} />
                                    
                                        </CCol>
                                        <CCol md="4">
                                        
                                            <FormicControl control='select'  placeholder="Enter here..."  label="Responsibility"  id='Responsibility' name='responsibility' options={dropDownOtions} />
                                    
                                        </CCol>
                                        <CCol md="12">
                                            <div className="card-title mt-3">Communication Channel</div>
                                        </CCol>
                                        <CCol md="4">
                                        
                                        <FormicControl control='select'  placeholder="Enter here..."   label=" Communication Channel Code"  id='CommunicationChannelCode' name='communicationChannelCode' options={dropDownOtions} />
                                    
                                        </CCol>
                                        <CCol md="4">
                                        
                                        <FormicControl control='input'  placeholder="Enter here..."   label="Communication Value"  id='CommunicationValue' name='communicationValue' options={dropDownOtions} />
                                    
                                        </CCol>
                                        <CCol md="4">
                                        
                                            <FormicControl control='input'  placeholder="Enter here..."   label="Communication Channel Name"  id='CommunicationChannelName' name='communicationChannelName' options={dropDownOtions} />
                                    
                                        </CCol>
                                     </CRow>
                        




                                            {/* closeContact */}
                                        </CCardBody>
                                       
                            </div>
                     
                     </CRow>
                                 

                 
                 <CButton
                                type="submit"
                                className="next-btn"
                                color="primary"
                                style={{margin:"1rem"}}
                                // disabled={!formik.dirty && formik.errors}
                                >
                                Next
                                </CButton>
                             
              </Form>
            )
          }
          
        </Formik>
        </CCardBody>
        
        
      
      
    )
}

export default TCBDropOffLocation

///take later

