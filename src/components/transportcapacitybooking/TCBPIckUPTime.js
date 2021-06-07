import {
	CButton,
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CCollapse,
	CFormGroup,
	CFormText,
	CInput,
	CInputGroup,
	CInputGroupAppend,
	CInputGroupPrepend,
	CInputGroupText,
	CLabel,
	CModal,
	CModalBody,
	CModalFooter,
	CModalHeader,
	CRow,
} from "@coreui/react";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import FormicControl from "../../utils/CoreUI/FormicControl";
import {} from "./transportcapacitybookingForm.css";
import Moment from "moment";

import { useDispatch } from "react-redux";
import { PickUpTimeAction } from "../../actions/TCBActions";
import moment from "moment";

function TCBPIckUPTime({ setenableNext,setopenDropOffUp }) {


	// disable past dates
			const yesterday = moment().subtract(0, 'days');
			const yesterday1 = Moment(yesterday._d).format("YYYY-MM-DDTHH:MM")
			// const yesterday = new Date(today.setDate(today.getDate() - 1))
			console.log(yesterday1,"yesterday")
	


	const dispatch = useDispatch();

	const [toggleModle, setToggleModal] = useState(false);
	const [plannedPickData, setplannedPickData] = useState(null);

	// const changeValues = ()=>{
	//     var d = new Date(formateTime && formateTime.pickupStartTime)

	//     console.log(d.getTime(),"TimeValue")
	//     console.log(`{${d.getFullYear()}-${d.getMonth()}-${d.getDate()}}`,"DateValue")

	// }

	const initialValues = {
		pickupStartTime: "",
		pickupEndTime: "",
		// EventpickupStartTime:'',
		// EventpickupEndTime:'',
	};
	const validationSchema = yup.object({
		pickupStartTime: yup.string().required(),
		pickupEndTime: yup.string().required(),
		// EventpickupStartTime: yup.string().required(),
		// EventpickupEndTime: yup.string().required(),
	});


    const getDates =(value)=>{
        const dateObj1 = Moment(value.pickupStartTime).format("DD-MM-YYYY")
        const time = Moment(value.pickupStartTime).format(" hh:mm:ss")
    
        console.log(dateObj1,time,"date and time")

    }

   
	return (
		<CCardBody>
			<Formik
				initialValues={initialValues}
				validationSchema= {validationSchema}
				validateOnChange
				onSubmit={(value) => {
					console.log(value);
                    getDates(value)
					dispatch(PickUpTimeAction(value));
					setenableNext(true);
					setopenDropOffUp(true)
				}}
			>
				{(formik) => (
					<Form>
						<CRow className="justify-content-center">
							<CCol md="12">
								<div className="card-title mt-3">Time Band</div>
							</CCol>

							<CCol md="6">
								<FormicControl
									label="Starts at"
									control="input"
									min={yesterday1}
									type="datetime-local"
									id="pickupStartTime"
									name="pickupStartTime"
									isRequired="true"
									
									
								/>
								{/* <DatePicker /> */}
							</CCol>
							<CCol md="6">
								<FormicControl
									label="Ends at"
									control="input"
									type="datetime-local"
									id="pickupEndTime"
									name="pickupEndTime"
									min={formik.values.pickupStartTime}
									isRequired="true"
								/>
							</CCol>
					
						</CRow>

						<div className="col-md continue-block">
							<CButton
								type="submit"
								className="next-btn"
								color="primary"
								style={{ margin: "1rem" }}
								disabled={!formik.dirty && formik.errors}
							>
								Next
							</CButton>
						</div>
					</Form>
				)}
			</Formik>
		</CCardBody>
	);
}

export default TCBPIckUPTime;

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
