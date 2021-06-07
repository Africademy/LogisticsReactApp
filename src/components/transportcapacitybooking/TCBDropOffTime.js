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
import {useDispatch,useSelector} from 'react-redux'
import {DropOffTimeAction} from "../../actions/TCBActions"; 
import moment from "moment";
import Moment from "moment";

function TCBDropOffTime({ setenableNext,setopenCargo }) {

	const dispatch = useDispatch()

	const PickUpTimeData = useSelector((state)=>state.tvbDta.PickUpTime)

	console.log(PickUpTimeData,"inside DP")

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
		
	};
	const validationSchema = yup.object({
		dropOffStartTime: yup.string().required(),
		dropOffEndTime: yup.string().required(),
		// EventpickupStartTime: yup.string().required(),
		// EventpickupEndTime: yup.string().required(),
	});

	const yesterday = moment().subtract(0, 'days');
	const yesterday1 = Moment(yesterday._d).format("YYYY-MM-DDTHH:MM")
	// console.log(plannedDropData, "plannedDropData");

	return (
		<CCardBody>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				validateOnChange
				onSubmit={(value) => {
					console.log(value);
					dispatch(DropOffTimeAction(value))
					setenableNext(true);
					setopenCargo(true)
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
									isRequired="true"
									min = { yesterday1}
								/>
							</CCol>
							<CCol md="6">
								<FormicControl
									label="Ends at"
									control="input"
									type="datetime-local"
									id="pickupEndTime"
									name="dropOffEndTime"
									isRequired="true"
									min = { formik.values.dropOffStartTime}
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

export default TCBDropOffTime;
