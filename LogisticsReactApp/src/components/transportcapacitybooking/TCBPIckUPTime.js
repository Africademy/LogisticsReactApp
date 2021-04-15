import { CButton, CCard, CCardBody, CCardHeader, CCol, CCollapse, CFormGroup, CFormText, CInput, CInputGroup, CInputGroupAppend, CInputGroupPrepend, CInputGroupText, CLabel, CModal, CModalBody, CModalFooter, CModalHeader, CRow } from '@coreui/react';
import React, { useState } from 'react'
import { Form, Formik } from "formik";
import * as yup from 'yup';
import FormicControl from '../../utils/CoreUI/FormicControl';
import {} from "./transportcapacitybookingForm.css";

import {useDispatch} from 'react-redux'
import {PickUpTimeAction} from "../../actions/TCBActions"; 

function TCBPIckUPTime({setenableNext}) {

    const dispatch = useDispatch()
    
    const [toggleModle,setToggleModal] = useState(false)
    const [plannedPickData,setplannedPickData] = useState(null)

    


    // const changeValues = ()=>{
    //     var d = new Date(formateTime && formateTime.pickupStartTime)
       
    //     console.log(d.getTime(),"TimeValue")
    //     console.log(`{${d.getFullYear()}-${d.getMonth()}-${d.getDate()}}`,"DateValue")

    // }

    const dropDownOtions = [
        {key:'select value' ,value: ''},
        {key:'option1' ,value: 'option1'},
        {key:'option2' ,value: 'option2'},
        {key:'option3' ,value: 'option3'}
      ]
    const initialValues = {
        
        pickupStartTime:'',
        pickupEndTime:'',
        // EventpickupStartTime:'',
        // EventpickupEndTime:'',


    }
    const validationSchema = yup.object({
       
        pickupStartTime: yup.string().required(),
        pickupEndTime: yup.string().required(),
        // EventpickupStartTime: yup.string().required(),
        // EventpickupEndTime: yup.string().required(),


     
    })
  
    return (
  
            <CCardBody> 
                 <Formik
                    initialValues= {initialValues}
                    validationSchema= {validationSchema}

                    onSubmit={value => {
                        console.log(value)
                        dispatch(PickUpTimeAction(value))
                    setenableNext(true)       
            }
            }
            >
                {
                    formik =>(
                        <Form>
                                <CRow className="justify-content-center">
                                  
                                    <CCol md="12">
                                        <div className="card-title mt-3">Time Band</div>
                                    </CCol>

                                    <CCol md="6">
                                        
                                        <FormicControl label="Starts at"  control='input' type="datetime-local"   id='pickupStartTime' name='pickupStartTime' />
                                    </CCol>
                                    <CCol md="6">
                                        
                                        <FormicControl label="Ends at"  control='input' type="datetime-local"   id='pickupEndTime' name='pickupEndTime' />
                                    </CCol>
{/* 
                                    <CCol md="12">
                                        <div className="card-title mt-3">Event Time</div>
                                    </CCol>

                                    <CCol md="6">
                                        
                                        <FormicControl label="Start time"  control='input' type="time"   id='EventpickupStartTime' name='EventpickupStartTime' />
                                        
                                    </CCol>
                                    <CCol md="6">
                                      
                                            <FormicControl label="End time"  control='input' type="time"   id='EventpickupEndTime' name='EventpickupEndTime' />
                                    </CCol> */}

                                    
                                </CRow>
                        
                                <div className="col-md continue-block">
                                <CButton
                                type="submit"
                                className="next-btn"
                                color="primary"
                                style={{margin:"1rem"}}
                                disabled={!formik.dirty && formik.errors}
                                >
                                Next
                                </CButton>
                               
                            </div>
                        </Form>
                    )
                }
            </Formik>
            </CCardBody>

         )
}

export default TCBPIckUPTime



//  {/* <CCol md="12 mt-3">
//                                     <CCard className={collapseAddLocation ? "" : "border-0"}>
//                                         <CCollapse show={collapseAddLocation}>
//                                     <CCardBody>
//                                         <CLabel
//                                         className="collapseAddLocation-hide-btn"
//                                         onClick={() => {
//                                             setcollapseAddLocation(!collapseAddLocation)
                                        
//                                         }}
//                                         >
//                                         <span>
//                                             <i class="cil-x-circle"></i>
//                                         </span>
//                                         </CLabel>
//                                    </CCardBody>

//                                         </CCollapse>
//                                    </CCard>
//                                    </CCol> */}


//                                      {/* pickupLocationModal */}

//                                         {/* <CModalFooter>
//                                             <CButton color="primary">Add</CButton>
//                                             <CButton
//                                             color="secondary"
//                                             onClick={() => {
//                                                 setToggleModal(false)
//                                             }}
//                                             >
//                                             Cancel
//                                             </CButton>
//                                         </CModalFooter> */}
//                                         {/* </CModal>  */}


                                        
//                                         {/* onClick={() => { */}
//                                         {/* // setToggleModal(true)
//                                         // }}
//                                         // className="btn btn-info mr-1"
//                                         // >
//                                         // Add Pickup Location
//                                         // </CButton> */}


                                        
// {/*                                         
//                                         // size="xl"
//                                         // closeOnBackdrop="false"
//                                         // show={toggleModle}
//                                         // onClose={() => {
//                                         //     setToggleModal(false)
//                                         // }} */}







//    {/* 
                                   
//                                         >
//                                         <CModalHeader className="card-title mb-0">
//                                             Add Pickup Location
//                                         </CModalHeader>
//                                             // {/* <h1>Code Here</h1> */}
//                                         {/* </CRow> */}
//                                         // <CRow className="justify-content-center">
//                                         // <CCol md="12" > 
                                  













                                //         {/* <CInputGroup  className="findLocation">
                                //     <CInputGroupPrepend>
                                //     <CInputGroupText className={"bg-info text-white"}>
                                //         <i class="cil-location-pin"></i>
                                //     </CInputGroupText>
                                //     </CInputGroupPrepend>
                                //     <CInput
                                //     type="text"
                                //     id="unlocation"
                                //     name="unlocation"
                                //     placeholder="UN Location"
                                //     />
                                //     <CInputGroupAppend>
                                //     <CInputGroupText
                                //         className={"bg-info text-white"}
                                //         type="button"
                                //         name="find"
                                //     >
                                //         Find
                                //     </CInputGroupText>
                                //     </CInputGroupAppend>
                                //     <CInputGroupAppend>
                                //     <CInputGroupText
                                //         className={"bg-dark text-white"}
                                //         name="Add"
                                //         type="button"
                                //         onClick={() => {
                                    
                                //         setcollapseAddLocation(true)
                                //         }}
                                //     >
                                //         Add New
                                //     </CInputGroupText>
                                //     </CInputGroupAppend>
                                //   </CInputGroup>
                                //   </CCol> */}