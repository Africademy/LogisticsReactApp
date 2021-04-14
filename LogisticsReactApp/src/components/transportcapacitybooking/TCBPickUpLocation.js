import {
	CButton,
	CCardBody,
	CCol,
	CRow,
} from "@coreui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import FormicControl from "../../utils/CoreUI/FormicControl";
import * as yup from "yup";
import Alert from "../../utils/Alert/Alert";

import {useDispatch} from 'react-redux'
import {PickUpLocationAction} from "../../actions/TCBActions";

function TCBPickUpLocation({ setenableNext }) {

	const dispatch = useDispatch()
	// const [showAlert,setshowAlert] = useState(false)

	// const [collapseContactDetails,setcollapseContactDetails] = useState(false)
	// const [collapseAddLocation,setcollapseAddLocation] = useState(false)

	const dropDownOtions = [
		{ key: "select value", value: "" },
		{ key: "option1", value: "option1" },
		{ key: "option2", value: "option2" },
		{ key: "option3", value: "option3" },
	];

	const initialValues = {
		AdditionalLocationIdentification: "",
		SublocationIdentification: "",
		LocationName: "",
		LocationSpecificInstructions: "",
		UTCOffset: "",
		CityName: "",
		Country: "",
		CrossStreet: "",
		CurrencyOfParty: "",
		LaunguageOftheParty: "",
		Name: "",
		PostBoxNumber: "",
		PostalCode: "",
		Province: "",
		State: "",
		StreetAddressOne: "",
		StreetAddressTwo: "",
		StreetAddressThree: "",
		Latitude: "",
		Longitutue: "",

		ContactType: "",
		PersoneName: "",
		DepormentName: "",
		JobTitle: "",
		Responsibility: "",
		CommunicationChannelCode: "",
		CommunicationValue: "",
		CommunicationChannelName: "",
	};

	const validationSchema = yup.object({
		AdditionalLocationIdentification: yup.string().required(),
		SublocationIdentification: yup.string().required(),
		LocationName: yup.string().required(),
		LocationSpecificInstructions: yup.string().required(),
		UTCOffset: yup.string().required(),
		CityName: yup.string().required(),
		Country: yup.string().required(),
		CrossStreet: yup.string(),
		CurrencyOfParty: yup.string(),
		LaunguageOftheParty: yup.string(),
		Name: yup.string().required(),
		PostBoxNumber: yup.number().required(),
		PostalCode: yup.number().required(),
		Province: yup.string().required(),
		State: yup.string().required(),
		StreetAddressOne: yup.string().required(),
		StreetAddressTwo: yup.string(),
		StreetAddressThree: yup.string(),
		Latitude: yup.number(),
		Longitutue: yup.number(),

		ContactType: yup.string().required(),
		PersoneName: yup.string().required(),
		DepormentName: yup.string(),
		JobTitle: yup.string(),
		Responsibility: yup.string().required(),
		CommunicationChannelCode: yup.string().required(),
		CommunicationValue: yup.string().required(),
		CommunicationChannelName: yup.string(),
	});

	return (
		<CCardBody>
			<Formik
				initialValues={initialValues}
				// validationSchema={validationSchema}
				onSubmit={(values) => {
					console.log(values);
					setenableNext(true);
					dispatch(PickUpLocationAction(values))
				}}
			>
				{(formik) => (
					<Form>
						<div className="AlertInOrder">
							{/* {showAlert && (<Alert bgcolor="bgSuccess"> Successfully Submited The Order Details! Please Go Head Planned Details </Alert>)} */}
						</div>
						<CRow className="justify-content-center">
							<CCol md="4">
								<FormicControl
									control="select"
									label="Additional Location Identification"
									id="AdditionalLocationIdentification"
									name="AdditionalLocationIdentification"
									options={dropDownOtions}
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									control="select"
									label="Sublocation Identification"
									id="SublocationIdentification"
									name="SublocationIdentification"
									options={dropDownOtions}
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									control="input"
									placeholder="Enter here..."
									label="Location Name"
									id="LocationName"
									name="LocationName"
									options={dropDownOtions}
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									control="select"
									label="Location Specific Instructions"
									id="LocationSpecificInstructions"
									name="LocationSpecificInstructions"
									options={dropDownOtions}
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									control="input"
									placeholder="Enter here..."
									label="UTC Offset"
									id="UTCOffset"
									name="UTCOffset"
									options={dropDownOtions}
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									control="input"
									placeholder="Enter here..."
									label="City"
									id="CityName"
									name="CityName"
									options={dropDownOtions}
								/>
							</CCol>

							<CCol md="4">
								<FormicControl
									control="select"
									label="Country"
									id="Country"
									name="Country"
									options={dropDownOtions}
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									control="input"
									placeholder="Enter here..."
									label="Cross Street"
									id="CrossStreet"
									name="CrossStreet"
									options={dropDownOtions}
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									control="select"
									label="Currency Of Party"
									id="CurrencyOfParty"
									name="CurrencyOfParty"
									options={dropDownOtions}
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									control="select"
									label=" Language Of the Party"
									id="LaunguageOftheParty"
									name="LaunguageOftheParty"
									options={dropDownOtions}
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									control="input"
									placeholder="Enter here..."
									label=" Name"
									id="Name"
									name="Name"
									options={dropDownOtions}
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									control="input"
									placeholder="Enter here..."
									label=" Post Box Number"
									id="PostBoxNumber"
									name="PostBoxNumber"
									options={dropDownOtions}
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									control="input"
									placeholder="Enter here..."
									label="Postal Code"
									id="PostalCode"
									name="PostalCode"
									options={dropDownOtions}
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									control="input"
									placeholder="Enter here..."
									label="Province"
									id="Province"
									name="Province"
									options={dropDownOtions}
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									control="input"
									placeholder="Enter here..."
									label="State"
									id="State"
									name="State"
									options={dropDownOtions}
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									control="input"
									placeholder="Enter here..."
									label=" Street Address One"
									id="StreetAddressOne"
									name="StreetAddressOne"
									options={dropDownOtions}
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									control="input"
									placeholder="Enter here..."
									label="  Street Address Two"
									id="StreetAddressTwo"
									name="StreetAddressTwo"
									options={dropDownOtions}
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									control="input"
									placeholder="Enter here..."
									label="  Street Address Three"
									id="StreetAddressThree"
									name="StreetAddressThree"
									options={dropDownOtions}
								/>
							</CCol>
						</CRow>

						<div className="card-title mt-3">Geological Coordinates</div>

						{/* Loop the below CRow for new product */}
						<CRow className="justify-content-center">
							<CCol md="4">
								<FormicControl
									control="input"
									type="number"
									placeholder="Enter here..."
									label="Latitude"
									id="Latitude"
									name="Latitude"
									options={dropDownOtions}
								/>
							</CCol>
							<CCol md="4">
								<FormicControl
									control="input"
									type="number"
									placeholder="Enter here..."
									label="Longitude"
									id="Longitutue"
									name="Longitutue"
									options={dropDownOtions}
								/>
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
											<FormicControl
												control="select"
												label="Contact Type"
												id="ContactType"
												name="ContactType"
												options={dropDownOtions}
											/>
										</CCol>
										<CCol md="4">
											<FormicControl
												control="input"
												placeholder="Enter here..."
												label="Person Name"
												id="PersoneName"
												name="PersoneName"
												options={dropDownOtions}
											/>
										</CCol>
										<CCol md="4">
											<FormicControl
												control="input"
												placeholder="Enter here..."
												label="Department Name"
												id="DepormentName"
												name="DepormentName"
												options={dropDownOtions}
											/>
										</CCol>
										<CCol md="4">
											<FormicControl
												control="input"
												placeholder="Enter here..."
												label="Job Title"
												id="JobTitle"
												name="JobTitle"
												options={dropDownOtions}
											/>
										</CCol>
										<CCol md="4">
											<FormicControl
												control="select"
												placeholder="Enter here..."
												label="Responsibility"
												id="Responsibility"
												name="Responsibility"
												options={dropDownOtions}
											/>
										</CCol>
										<CCol md="12">
											<div className="card-title mt-3">
												Communication Channel
											</div>
										</CCol>
										<CCol md="4">
											<FormicControl
												control="select"
												placeholder="Enter here..."
												label=" Communication Channel Code"
												id="CommunicationChannelCode"
												name="CommunicationChannelCode"
												options={dropDownOtions}
											/>
										</CCol>
										<CCol md="4">
											<FormicControl
												control="input"
												placeholder="Enter here..."
												label="Communication Value"
												id="CommunicationValue"
												name="CommunicationValue"
												options={dropDownOtions}
											/>
										</CCol>
										<CCol md="4">
											<FormicControl
												control="input"
												placeholder="Enter here..."
												label="Communication Channel Name"
												id="CommunicationChannelName"
												name="CommunicationChannelName"
												options={dropDownOtions}
											/>
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
							style={{ margin: "1rem" }}
							disabled={!formik.dirty && formik.isValid}
						>
							Next
						</CButton>
					</Form>
				)}
			</Formik>
		</CCardBody>
	);
}

export default TCBPickUpLocation;

///take later
