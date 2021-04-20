import {
	CButton,
	CCardBody,
	CCol,
	CRow,
} from "@coreui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import FormicControl from "../../utils/CoreUI/FormicControl";
import * as yup from "yup";
import Alert from "../../utils/Alert/Alert";
import {useDispatch} from 'react-redux'
import {ServiceDetailsAction} from "../../actions/TCBActions";

// import { getTransportservicecategorycodes } from '../../services/transportservicecategorycodeService';
// import { getTransportserviceconditiontypecodes } from '../../services/transportserviceconditiontypecodeService';
// import { getTransportservicelevelcodes } from '../../services/transportservicelevelcodeService';

function TCBOrderDetails({ setenableNext,optionServiceLevel,ServiceConditionTypeCodes,ServiceCategoryCodes }) {
	const [showAlert, setshowAlert] = useState(false);
  const dispatch = useDispatch()



	const initialValues = {
		servicecategory: "",
		serviceConditionType: "",
		serviceLevel: "",
	};
	const dropDownOtions = [
		
		{ key: "option1", value: "option1" },
		{ key: "option2", value: "option2" },
		{ key: "option3", value: "option3" },
	];
	const validationSchema = yup.object({
		servicecategory: yup.string().required(),
		serviceConditionType: yup.string().required(),
		serviceLevel: yup.string().required(),
	});

	return (
		<CCardBody>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values) => {
					console.log(values);
					setenableNext(true);
          dispatch(ServiceDetailsAction(values))
          
				}}
			>
				{(formik) => (
				
					<Form>
						
						<div className="AlertInOrder">
							{showAlert && (
								<Alert bgcolor="bgSuccess">
									{" "}
									Successfully Submited The Order Details! Please Go Head
									Planned Details{" "}
								</Alert>
							)}
						</div>

						<CRow className="justify-content-center">
							<CCol md="4">
								<FormicControl
									placeholder="Service category"
									control="select"
									// control="selectOptional"
									label="Service category"
									id="Servicecategory"
									name="servicecategory"
									typeOfOption = "ServiceCategory"
									options={ServiceCategoryCodes}
									// options={dropDownOtions}
									isRequired="true"
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									placeholder="Service Condition Type"
									control="select"
									// control="selectOptional"

									label="ServiceConditionType"
									id="ServiceConditionType"
									name="serviceConditionType"
									typeOfOption = "ServiceCondition"
									options={ServiceConditionTypeCodes}
									// options={dropDownOtions}
									isRequired="true"
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									placeholder="Service Level"
									control="select"
									// control="selectOptional"
									label="Service Level"
									id="ServiceLevel"
									name="serviceLevel"
									typeOfOption = "ServiceLevel"
									isRequired="true"
									options={optionServiceLevel}
									// options={dropDownOtions}
								/>
							</CCol>
						</CRow>
						<CButton
							type="submit"
							className="next-btn"
							color="primary"
							style={{ margin: "1rem" }}
							disabled={!formik.dirty && formik.errors}
							// && !formik.isValid
							// console.log(formik.isValid,"valid")
						>
							Next
						</CButton>
					</Form>
				)}
			</Formik>
		</CCardBody>
	);
}

export default TCBOrderDetails;

///take later
