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
import {useDispatch} from 'react-redux'
import {DropOffTimeAction} from "../../actions/TCBActions"; 

function TCBDropOffTime({ setenableNext }) {

	const dispatch = useDispatch()

	// const [collapseSpecialRequirements,setcollapseSpecialRequirements] =useState(false)
	const [toggleModle, setToggleModal] = useState(false);
	const [plannedDropData, setplannedDropData] = useState(null);

	const [collapseContactDetails, setcollapseContactDetails] = useState(false);
	const [collapseAddLocation, setcollapseAddLocation] = useState(false);

	const dropDownOtions = [
		{ key: "select value", value: "" },
		{ key: "option1", value: "option1" },
		{ key: "option2", value: "option2" },
		{ key: "option3", value: "option3" },
	];
	const initialValues = {
		dropOffStartTime: "",
		dropOffEndTime: "",
		// EventpickupStartTime:'',
		// EventpickupEndTime:'',
	};
	const validationSchema = yup.object({
		dropOffStartTime: yup.string().required(),
		dropOffEndTime: yup.string().required(),
		// EventpickupStartTime: yup.string().required(),
		// EventpickupEndTime: yup.string().required(),
	});

	console.log(plannedDropData, "plannedDropData");

	return (
		<CCardBody>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(value) => {
					console.log(value);
					dispatch(DropOffTimeAction(value))
					setenableNext(true);
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
									type="datetime-local"
									id="pickupStartTime"
									name="dropOffStartTime"
								/>
							</CCol>
							<CCol md="6">
								<FormicControl
									label="Ends at"
									control="input"
									type="datetime-local"
									id="pickupEndTime"
									name="dropOffEndTime"
								/>
							</CCol>
						</CRow>

						<div className="col-md continue-block">
							<CButton
								type="submit"
								className="next-btn"
								color="primary"
								style={{ margin: "1rem" }}
								// disabled={!formik.dirty && formik.errors}
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

export default TCBDropOffTime;
