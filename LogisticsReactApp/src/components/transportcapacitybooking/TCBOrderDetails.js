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

function TCBOrderDetails({ setenableNext }) {
	const [showAlert, setshowAlert] = useState(false);
  const dispatch = useDispatch()

	// useEffect(()=>{
	//     //cargo
	//   populatetransportServiceCategoryCodes()
	//   populatetransportServiceConditionTypeCodes()
	//   populatetransportServiceLevelCodes()

	// },[])

	/// Transport 12

	// const [transportServiceCategoryCodes,settransportServiceCategoryCodes] = useState([])
	// const [transportServiceConditionTypeCodes,settransportServiceConditionTypeCodes] = useState([])
	// const [transportServiceLevelCodes,settransportServiceLevelCodes] = useState([])

	// const  populatetransportServiceCategoryCodes= async () =>{
	//   const { data: transportServiceCategoryCodes } = await getTransportservicecategorycodes();
	//   // this.setState({ transportServiceCategoryCodes: transportServiceCategoryCodes });
	//   settransportServiceCategoryCodes([...transportServiceCategoryCodes])
	//   }

	//   const populatetransportServiceConditionTypeCodes = async () => {
	//   const { data: transportServiceConditionTypeCodes } = await getTransportserviceconditiontypecodes();
	//   // this.setState({ transportServiceConditionTypeCodes: transportServiceConditionTypeCodes });
	//   settransportServiceConditionTypeCodes([...transportServiceConditionTypeCodes])
	//   }

	//   const populatetransportServiceLevelCodes = async () => {
	//   const { data: transportServiceLevelCodes } = await getTransportservicelevelcodes();
	//   // this.setState({ transportServiceLevelCodes: transportServiceLevelCodes });
	//   settransportServiceLevelCodes([...transportServiceLevelCodes])
	//   }

	const initialValues = {
		servicecategory: "",
		serviceConditionType: "",
		serviceLevel: "",
	};
	const dropDownOtions = [
		{ key: "select value", value: "" },
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
				// validationSchema={validationSchema}
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
									label="Service category"
									id="Servicecategory"
									name="servicecategory"
									options={dropDownOtions}
									isRequired="true"
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									placeholder="Service Condition Type"
									control="select"
									label="ServiceConditionType"
									id="ServiceConditionType"
									name="serviceConditionType"
									options={dropDownOtions}
									isRequired="true"
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									placeholder="Service Level"
									control="select"
									label="Service Level"
									id="ServiceLevel"
									name="serviceLevel"
									options={dropDownOtions}
								/>
							</CCol>
						</CRow>
						<CButton
							type="submit"
							className="next-btn"
							color="primary"
							style={{ margin: "1rem" }}
							// disabled={!formik.dirty && formik.errors}
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
