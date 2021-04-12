import { CButton, CCard, CCardBody, CCardHeader, CCol, CCollapse, CFormGroup, CFormText, CInput, CInputGroup, CInputGroupAppend, CInputGroupPrepend, CInputGroupText, CLabel, CModal, CModalBody, CModalFooter, CModalHeader, CRow } from '@coreui/react';
import React, { useState } from 'react'
import { Form, Formik } from "formik";
import * as yup from 'yup';
import FormicControl from '../../utils/CoreUI/FormicControl';


function TCBPlannedPickUp() {

    // const [collapseSpecialRequirements,setcollapseSpecialRequirements] =useState(false)
    const [toggleModle,setToggleModal] = useState(false)
    const [plannedPickData,setplannedPickData] = useState(null)


    const [collapseContactDetails,setcollapseContactDetails] = useState(false)
    const [collapseAddLocation,setcollapseAddLocation] = useState(false)
    const [pickupLocationModal,setpickupLocationModal] = useState(false)

    const dropDownOtions = [
        {key:'select value' ,value: ''},
        {key:'option1' ,value: 'option1'},
        {key:'option2' ,value: 'option2'},
        {key:'option3' ,value: 'option3'}
      ]
    const initialValues = {
        Servicecategory:'',
        ServiceConditionType:'',
        ServiceLevel:'',
        pickupStartTime:'',
        pickupEndTime:'',
        EventpickupStartTime:'',
        EventpickupEndTime:'',



        AdditionalLocationIdentification:"",
        SublocationIdentification:"",
        LocationName:"",
        LocationSpecificInstructions:"",
        UTCOffset:"",
        CityName:"",
        Country:"",
        CrossStreet:"",
        CurrencyOfParty:"",
        LaunguageOftheParty:"",
        Name:"",
        PostBoxNumber:"",
        PostalCode:"",
        Province:"",
        State:"",
        StreetAddressOne:"",
        StreetAddressTwo:"",
        StreetAddressThree:"",
        Latitude:'',
        Longitutue:"",


        ContactType:"",
        PersoneName:"",
        DepormentName:"",
        JobTitle:"",
        Responsibility:"",
        CommunicationChannelCode:"",
        CommunicationValue:"",
        CommunicationChannelName:"",

    }
    const validationSchema = yup.object({
        Servicecategory: yup.string().required(),
        ServiceConditionType: yup.string().required(),
        ServiceLevel: yup.string().required(),
        pickupStartTime: yup.string().required(),
        pickupEndTime: yup.string().required(),
        EventpickupStartTime: yup.string().required(),
        EventpickupEndTime: yup.string().required(),
    })

    console.log(plannedPickData,"plannedPickData")
  
    return (
        <CCard>
        <CCardHeader
          className="card-toggle-header"
          onClick={() => {
            setpickupLocationModal(!pickupLocationModal)
          }}
        >
          Planned Pickup Details
        </CCardHeader>
        <CCollapse show={pickupLocationModal}>
          <CCardBody> 
              <Formik
              initialValues= {initialValues}
              validationSchema= {validationSchema}
              validateOnBlur={false}
              validateOnChange={false}
              onSubmit={value => setplannedPickData(value)}
              >
                  {
                      formik =>(
                          <Form>
                                   <CRow className="justify-content-center">
                                        <CCol md="4">
                                            
                                           <FormicControl  placeholder="Service category" control='select' label='Service category' id='Servicecategory' name='Servicecategory' options={dropDownOtions}  />

                                        </CCol>
                                        <CCol md="4">
                                          
                                              <FormicControl  placeholder="Service Condition Type" control='select' label='ServiceConditionType' id='ServiceConditionType' name='ServiceConditionType' options={dropDownOtions}  />
                                        </CCol>
                                        <CCol md="4">
                                          
                                             <FormicControl  placeholder="Service Level" control='select' label='Service Level' id='ServiceLevel' name='ServiceLevel' options={dropDownOtions}  />
                                        </CCol>

                                        <CCol md="12">
                                            <CButton
                                            onClick={() => {
                                            setToggleModal(true)
                                            }}
                                            className="btn btn-info mr-1"
                                            >
                                            Add Pickup Location
                                            </CButton>


                                            {/*      //////////////////Modal */}
                                            <CModal
                                            size="xl"
                                            closeOnBackdrop="false"
                                            show={toggleModle}
                                            onClose={() => {
                                                setToggleModal(false)
                                            }}
                                            >
                                            <CModalHeader className="card-title mb-0">
                                                Add Pickup Location
                                            </CModalHeader>
                                                {/* <h1>Code Here</h1> */}
                                            
                                                <CRow className="justify-content-center">
                                    <CCol md="12">
                                    <CInputGroup>
                                        <CInputGroupPrepend>
                                        <CInputGroupText className={"bg-info text-white"}>
                                            <i class="cil-location-pin"></i>
                                        </CInputGroupText>
                                        </CInputGroupPrepend>
                                        <CInput
                                        type="text"
                                        id="unlocation"
                                        name="unlocation"
                                        placeholder="UN Location"
                                        />
                                        <CInputGroupAppend>
                                        <CInputGroupText
                                            className={"bg-info text-white"}
                                            type="button"
                                            name="find"
                                        >
                                            Find
                                        </CInputGroupText>
                                        </CInputGroupAppend>
                                        <CInputGroupAppend>
                                        <CInputGroupText
                                            className={"bg-dark text-white"}
                                            name="Add"
                                            type="button"
                                            onClick={() => {
                                        
                                            setcollapseAddLocation(true)
                                            }}
                                        >
                                            Add New
                                        </CInputGroupText>
                                        </CInputGroupAppend>
                                    </CInputGroup>
                                    </CCol>

                                    <CCol md="12 mt-3">
                                    <CCard className={collapseAddLocation ? "" : "border-0"}>
                                        <CCollapse show={collapseAddLocation}>
                                        <CCardBody>
                                            <CLabel
                                            className="collapseAddLocation-hide-btn"
                                            onClick={() => {
                                                setcollapseAddLocation(!collapseAddLocation)
                                            
                                            }}
                                            >
                                            <span>
                                                <i class="cil-x-circle"></i>
                                            </span>
                                            </CLabel>
                                            <CRow className="justify-content-center">
                                            <CCol md="4">
                                              
                                                <FormicControl control='select' label="Additional Location Identification"  id='AdditionalLocationIdentification' name='AdditionalLocationIdentification' options={dropDownOtions} />
                                            </CCol>
                                            <CCol md="4">
                                                
                                                 <FormicControl control='select' label="Sublocation Identification"  id='SublocationIdentification' name='SublocationIdentification' options={dropDownOtions} />
                                            </CCol>
                                            <CCol md="4">
                                               
                                                <FormicControl control='input' placeholder="Enter here..." label="Location Name"  id='LocationName' name='LocationName' options={dropDownOtions} />
                                            </CCol>
                                            <CCol md="4">
                                               
                                                <FormicControl control='select' label="Location Specific Instructions"  id='LocationSpecificInstructions' name='LocationSpecificInstructions' options={dropDownOtions} />
                                            </CCol>
                                            <CCol md="4">
                                              
                                                 <FormicControl control='input' placeholder="Enter here..." label="UTC Offset"  id='UTCOffset' name='UTCOffset' options={dropDownOtions} />
                                            </CCol>
                                            <CCol md="4">
                                               
                                                <FormicControl control='input' placeholder="Enter here..." label="City"  id='CityName' name='CityName' options={dropDownOtions} />
                                            </CCol>

                                            <CCol md="4">
                                               
                                                 <FormicControl control='select'  label="Country"  id='Country' name='Country' options={dropDownOtions} />
                                            </CCol>
                                            <CCol md="4">
                                               
                                                  <FormicControl control='input' placeholder="Enter here..."  label="Cross Street"  id='CrossStreet' name='CrossStreet' options={dropDownOtions} />
                                            </CCol>
                                            <CCol md="4">
                                                
                                                  <FormicControl control='select'  label="Currency Of Party"  id='CurrencyOfParty' name='CurrencyOfParty' options={dropDownOtions} />
                                            </CCol>
                                            <CCol md="4">
                                               
                                                 <FormicControl control='select'  label=" Language Of the Party"  id='LaunguageOftheParty' name='LaunguageOftheParty' options={dropDownOtions} />
                                            </CCol>
                                            <CCol md="4">
                                               
                                                 <FormicControl control='input' placeholder="Enter here..."  label=" Name"  id='Name' name='Name' options={dropDownOtions} />
                                            </CCol>
                                            <CCol md="4">
                                               
                                                <FormicControl control='input' placeholder="Enter here..."  label=" Post Box Number"  id='PostBoxNumber' name='PostBoxNumber' options={dropDownOtions} />
                                            </CCol>
                                            <CCol md="4">
                                               
                                                 <FormicControl control='input' placeholder="Enter here..."  label="Postal Code"  id='PostalCode' name='PostalCode' options={dropDownOtions} />
                                            </CCol>
                                            <CCol md="4">
                                              
                                                  <FormicControl control='input' placeholder="Enter here..."  label="Province"  id='Province' name='Province' options={dropDownOtions} />
                                            </CCol>
                                            <CCol md="4">
                                               
                                                 <FormicControl control='input' placeholder="Enter here..."  label="State"  id='State' name='State' options={dropDownOtions} />
                                            </CCol>
                                            <CCol md="4">
                                                
                                                   <FormicControl control='input' placeholder="Enter here..."  label=" Street Address One"  id='StreetAddressOne' name='StreetAddressOne' options={dropDownOtions} />
                                       
                                            </CCol>
                                            <CCol md="4">
                                               
                                                 <FormicControl control='input' placeholder="Enter here..."  label="  Street Address Two"  id='StreetAddressTwo' name='StreetAddressTwo' options={dropDownOtions} />
                                       
                                            </CCol>
                                            <CCol md="4">
                                               
                                                 <FormicControl control='input' placeholder="Enter here..."  label="  Street Address Three"  id='StreetAddressThree' name='StreetAddressThree' options={dropDownOtions} />
                                       
                                            </CCol>
                                            </CRow>

                                            <div className="card-title mt-3">Geological Coordinates</div>

                                            {/* Loop the below CRow for new product */}
                                            <CRow className="justify-content-center">
                                            <CCol md="4">
                                               
                                                <FormicControl control='input' type="number" placeholder="Enter here..."  label="Latitude"  id='Latitude' name='Latitude' options={dropDownOtions} />
                                            </CCol>
                                            <CCol md="4">
                                               
                                                  <FormicControl control='input' type="number" placeholder="Enter here..."  label="Longitude"  id='Longitutue' name='Longitutue' options={dropDownOtions} />
                                        
                                            </CCol>
                                            <CCol md="4"></CCol>
                                            </CRow>
                                        </CCardBody>

                                        <div>
                                            <CCardHeader
                                            className="card-toggle-header border-top border-bottom-0"
                                            onClick={() => {
                                                setcollapseContactDetails(!collapseContactDetails)
                                            }}
                                            >
                                            Contact Details
                                            </CCardHeader>
                                            <CCollapse show={collapseContactDetails}>
                                            <CCardBody>
                                                {/* <PickupContactForm
                                                {...this.props}
                                                data={this.state}
                                                ></PickupContactForm> */}


                                         <CRow>
                                    <CCol md="4">
                                   
                                      <FormicControl control='select'   label="Contact Type"  id='ContactType' name='ContactType' options={dropDownOtions} />
                                    </CCol>
                                    <CCol md="4">
                                   
                                     <FormicControl control='input'  placeholder="Enter here..."  label="Person Name"  id='PersoneName' name='PersoneName' options={dropDownOtions} />
                               
                                    </CCol>
                                    <CCol md="4">
                                   
                                   <FormicControl control='input'  placeholder="Enter here..."   label="Department Name"  id='DepormentName' name='DepormentName' options={dropDownOtions} />
                               
                                     </CCol>
                                    <CCol md="4">
                                 
                                     <FormicControl control='input'  placeholder="Enter here..."  label="Job Title"  id='JobTitle' name='JobTitle' options={dropDownOtions} />
                               
                                    </CCol>
                                    <CCol md="4">
                                   
                                      <FormicControl control='select'  placeholder="Enter here..."  label="Responsibility"  id='Responsibility' name='Responsibility' options={dropDownOtions} />
                               
                                    </CCol>
                                    <CCol md="12">
                                    <div className="card-title mt-3">Communication Channel</div>
                                    </CCol>
                                    <CCol md="4">
                                   
                                     <FormicControl control='select'  placeholder="Enter here..."   label=" Communication Channel Code"  id='CommunicationChannelCode' name='CommunicationChannelCode' options={dropDownOtions} />
                               
                                    </CCol>
                                    <CCol md="4">
                                   
                                     <FormicControl control='input'  placeholder="Enter here..."   label="Communication Value"  id='CommunicationValue' name='CommunicationValue' options={dropDownOtions} />
                               
                                    </CCol>
                                    <CCol md="4">
                                  
                                      <FormicControl control='input'  placeholder="Enter here..."   label="Communication Channel Name"  id='CommunicationChannelName' name='CommunicationChannelName' options={dropDownOtions} />
                               
                                    </CCol>
                                </CRow>
                            




                                                {/* closeContact */}
                                            </CCardBody>
                                            </CCollapse>
                                        </div>
                                        </CCollapse>
                                    </CCard>
                                    </CCol>
                                </CRow>
                                
                                {/* pickupLocationModal */}

                                            {/* <CModalFooter>
                                                <CButton color="primary">Add</CButton>
                                                <CButton
                                                color="secondary"
                                                onClick={() => {
                                                    setToggleModal(false)
                                                }}
                                                >
                                                Cancel
                                                </CButton>
                                            </CModalFooter> */}
                                            </CModal>


                                            {/* //////////////////////CloseModal */}




                                        </CCol>

                                        <CCol md="12">
                                            <div className="card-title mt-3">Time Band</div>
                                        </CCol>

                                        <CCol md="6">
                                            
                                             <FormicControl label="Starts at"  control='input' type="datetime-local"   id='pickupStartTime' name='pickupStartTime' />
                                        </CCol>
                                        <CCol md="6">
                                           
                                            <FormicControl label="Ends at"  control='input' type="datetime-local"   id='pickupEndTime' name='pickupEndTime' />
                                        </CCol>

                                        <CCol md="12">
                                            <div className="card-title mt-3">Event Time</div>
                                        </CCol>

                                        <CCol md="6">
                                          
                                             <FormicControl label="Start time"  control='input' type="datetime-local"   id='EventpickupStartTime' name='EventpickupStartTime' />
                                            
                                        </CCol>
                                        <CCol md="6">
                                            {/* <CFormGroup>
                                            <CLabel htmlFor="nf-pickupEndTime">End time</CLabel>
                                            <CInput
                                                type="time"
                                                id="nf-pickupEndTime"
                                                name="nf-pickupEndTime"
                                            />
                                            <CFormText className="help-block error">
                                                show errors in here
                                            </CFormText>
                                            </CFormGroup> */}
                                              <FormicControl label="End time"  control='input' type="datetime-local"   id='EventpickupEndTime' name='EventpickupEndTime' />
                                        </CCol>

                                      
                                    </CRow>
                            
                                    <div className="col-md continue-block">
                                    <CButton
                                    type="submit"
                                    className="next-btn"
                                    color="primary"
                                    style={{margin:"1rem"}}
                                    disabled={!formik.dirty && formik.isValid }
                                    >
                                    Next
                                    </CButton>
                                </div>
                          </Form>
                      )
                  }
              </Formik>
            </CCardBody>
        </CCollapse>
      </CCard>
    )
}

export default TCBPlannedPickUp
