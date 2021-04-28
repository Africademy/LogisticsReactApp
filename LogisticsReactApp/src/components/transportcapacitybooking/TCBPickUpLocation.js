import {
	CButton,
	CCardBody,
	CCol,
	CInput,
	CModal,
	CRow,
} from "@coreui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import FormicControl from "../../utils/CoreUI/FormicControl";
import * as yup from "yup";


import {useDispatch} from 'react-redux'
import {PickUpLocationAction} from "../../actions/TCBActions";
import { getIdentifiertypes } from "../../services/identifiertypeService";
import { getCurrencyofpartycodes } from "../../services/currencyofpartycodeService";
import { getLanguageofthepartycodes } from "../../services/languageofthepartycodeService";
import { getCountrycodes } from "../../services/countrycodeService";
import { getContacttypecodes } from "../../services/contacttypecodeService";
import { getDescription70types } from "../../services/description70typeService";
import { getCommunicationchannels } from "../../services/communicationchannelService";
import { getDescription200types } from "../../services/description200typeService";
import { getEntityidentificationtypes } from "../../services/entityidentificationtypeService";
import { getCommunicationchannelcodes } from "../../services/communicationchannelcodeService";

function TCBPickUpLocation({ setenableNext,setopenPickTime }) {
// AdditionalLocationIdentification ---  getIdentifiertypes() cc
// LocationSpecificInstructions: ----   getDescription200types() cc
// CurrencyOfParty ---  getCurrencyofpartycodes() cc

// LanguageOftheParty ---  getLanguageofthepartycodes() cc
// Country --- getCountrycodes() cc

// ContactType ----- getContacttypecodes() cc
// Resposibilities ----  getDescription70types() cc
// commmunicationChannel ---   getCommunicationchannels()  cc

	const dispatch = useDispatch()

	const [AdditionalLocationIdentification,setAdditionalLocationIdentification]= useState([])
	const [SublocationIdentification,setSublocationIdentification]= useState([])
	const [LocationSpecificInstructions,setLocationSpecificInstructions]= useState([])
	const [CurrencyOfParty,setCurrencyOfParty]= useState([])
	const [LanguageOftheParty,setLanguageOftheParty]= useState([])

	// SublocationIdentification

	const [Country,setCountry]= useState([])

	const [ContactType,setContactType]= useState([])
	const [Resposibilities,setResposibilities]= useState([])
	const [commmunicationChannel,setcommmunicationChannel]= useState([])
	// const [countryState,setcountryState] = useState('')

	// console.log(countryState,"country")
	const [Selectedcountry,setSelectedcountry]=useState(false)


 useEffect(()=>{
	populateAdditionalLocationIdentificationCodes();
	populateSublocationIdentificationCodes()
	populateLocationSpecificInstructionsCodes()
	populateCurrencyOfPartyCodes ()
	populateLanguageOfthePartyCodes()
	populateCountryCodes()
	populateContactTypeCodes()
	populateResposibilitiesCodes()
	populatecommmunicationChannelCodes()


 },[])
   
		const populateAdditionalLocationIdentificationCodes = async () =>{
			const { data: Identifiertypes } = await getIdentifiertypes();
			setAdditionalLocationIdentification(Identifiertypes)
		}
		const populateLocationSpecificInstructionsCodes = async () =>{
			const { data: transportServiceLevelCodes } = await getDescription200types();
			setLocationSpecificInstructions(transportServiceLevelCodes)
		}
		const populateCurrencyOfPartyCodes = async () =>{
			const { data: transportServiceLevelCodes } = await getCurrencyofpartycodes();
			setCurrencyOfParty(transportServiceLevelCodes)
		}
		const populateLanguageOfthePartyCodes = async () =>{
			const { data: transportServiceLevelCodes } = await getLanguageofthepartycodes();
			setLanguageOftheParty(transportServiceLevelCodes)
		}
		const populateCountryCodes = async () =>{
			const { data: transportServiceLevelCodes } = await getCountrycodes();
			setCountry(transportServiceLevelCodes)
		}
		const populateContactTypeCodes = async () =>{
			const { data: transportServiceLevelCodes } = await getContacttypecodes();
			setContactType(transportServiceLevelCodes)
		}
		const populateResposibilitiesCodes = async () =>{
			const { data: transportServiceLevelCodes } = await getDescription70types();
			setResposibilities(transportServiceLevelCodes)
		}
		const populatecommmunicationChannelCodes = async () =>{
			const { data: transportServiceLevelCodes } = await getCommunicationchannels();
			setcommmunicationChannel(transportServiceLevelCodes)
		}
		const populateSublocationIdentificationCodes = async () =>{
			const { data: transportServiceLevelCodes } = await getEntityidentificationtypes();
			setSublocationIdentification(transportServiceLevelCodes)
		}
	

  // console.log(AdditionalLocationIdentification,"111111")
	// console.log(LocationSpecificInstructions,"22222")
	// console.log(CurrencyOfParty,"333333")

	const dropDownOtions = [

		{ key: "option1", value: "option1" },
		{ key: "option2", value: "option2" },
		{ key: "option3", value: "option3" },
	];
 
	

	const initialValues ={
    // additionalLocationIdentification:"",
    sublocationIdentification:"",
    locationName:"",
    // locationSpecificInstructions:"",
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
    // responsibility:"",
    communicationChannelCode:"",
    communicationValue:"",
    communicationChannelName:"",
		UNLocation:''
}



  const validationSchema = yup.object({
    
   
    // additionalLocationIdentification:yup.string().required(),
    sublocationIdentification:yup.string().required(),
    locationName:yup.string().required(),
    // locationSpecificInstructions:yup.string().required(),
    uTCOffset:yup.number().required(),
    cityName:yup.string().required(),
    country:yup.string().required(),
    crossStreet:yup.string(),
    currencyOfParty:yup.string().required(),
    launguageOftheParty:yup.string().required(),
    name:yup.string(),
    postBoxNumber:yup.number(),
    postalCode:yup.number().required(),
    province:yup.string().required(),
    state:yup.string().required(),
    streetAddressOne:yup.string().required(),
    streetAddressTwo:yup.string(),
    streetAddressThree:yup.string(),
    latitude:yup.number().required(),
    longitutue:yup.number().required(),


    contactType:yup.string().required(),
    personeName:yup.string().required(),
    depormentName:yup.string(),
    jobTitle:yup.string(),
    // responsibility:yup.string().required(),
    communicationChannelCode:yup.string().required(),
    communicationValue:yup.string(),
    communicationChannelName:yup.string(),
})

  
	return (
		<CCardBody>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				validateOnChange
				onSubmit={(values) => {
					console.log(values);
					setenableNext(true);
					setopenPickTime(true)
					dispatch(PickUpLocationAction(values))
				}}
			>
				{(formik) => {
					console.log( "UNLocation",formik.values.UNLocation)
					const [s1,setS1]=useState('')
					const [toggle,settoggle] = useState(true)
					useEffect(()=>{
					  // handleChangeS1()
						console.log("fecth data here")
					},[s1])
					const handleChangeS1 =(e)=>{											
						e.preventDefault()
						formik.values.locationName = s1
						formik.values.sublocationIdentification = s1
						settoggle(true)
					}
					const handleToggle =()=>{
						settoggle(true)
					}
					  if(s1 === 2){
							formik.values.uTCOffset = "UTC+5.5"
						}
					console.log(s1,"s1 value here")
					// if( formik.values.country === "6066bb76f225027765a0a67d" ){
					// 	formik.values.uTCOffset = "UTC+5.5"
					// 	  console.log("success")
					// 		// UTC+5.5   UTC+5.75  
					// 		// setSelectedcountry(true)
					// 		// formik.values.state = "andra"
					// 		// dropDownOtions
					// }
					// if(formik.values.country === "6066bb7bf225027765a0a67e"){
					// 	formik.values.uTCOffset = s1
					// }
				  return (
					   <Form>
						 <div className="AlertInOrder">
								 {/* {showAlert && (<Alert bgcolor="bgSuccess"> Successfully Submited The Order Details! Please Go Head Planned Details </Alert>)} */}
						 </div>
						    {/* <CRow >
									<CCol style={{border:"2px solid grey",borderRadius:"5px",padding:"1rem",display:"flex",alignItems:'center'}}  md="12">
										<CInput 
										type="text"
										 placeholder="UN Location" 
										 id="UNLocation"
										 name="UNLocation"
										 value={s1}
										 onChange={formik.handleChange=(e)=>{setS1(e.target.value)}}
										 />
										<CButton style={{}}  className="btn btn-primary ml-2" onClick={handleChangeS1}>Find</CButton>
										<CButton style={{}}  className="btn btn-primary ml-2" onClick={handleToggle} >AddNew</CButton>
									</CCol>
								  
								</CRow>  */}
									{toggle && <div>
										<CRow className="justify-content-center">
								 {/* <CCol md="4">
										 <FormicControl
												 control="selectOptionalidentificationScheme"
												 label="Additional Location Identification"
												 id="AdditionalLocationIdentification"
												 name="additionalLocationIdentification"
												 typeOfOption = "AdditionalLocationIdentification"
												 isRequired="true"
												 options={AdditionalLocationIdentification}
										 />
								 </CCol> */}
							  
								

								
								 <CCol md="4">
										 <FormicControl
												 control="input"
												 label="Sublocation Identification"
												 id="SublocationIdentification"
												 name="sublocationIdentification"
												 isRequired="true"
												 options={dropDownOtions}
										 />
								 </CCol>
								 <CCol md="4">
										 <FormicControl
												 control="input"
												 placeholder="Enter here..."
												 label="Location Name"
												 id="LocationName"
												 name="locationName"
												 isRequired="true"
												 
										 />
								 </CCol>
								 {/* <CCol md="4">
										 <FormicControl
												 control="select"
												 label="Location Specific Instructions"
												 id="LocationSpecificInstructions"
												 name="locationSpecificInstructions"
												 options={LocationSpecificInstructions}
												 isRequired="true"
										 />
								 </CCol> */}
								 <CCol md="4">
										 <FormicControl
												 control="input"
												 placeholder="Enter here..."
												 label="UTC Offset"
												 id="UTCOffset"
												 name="uTCOffset"
												 isRequired="true"
												 // options={dropDownOtions}
										 />
								 </CCol>
								 <CCol md="4">
										 <FormicControl
												 control="input"
												 placeholder="Enter here..."
												 label=" Name"
												 id="Name"
												 name="name"
												 // options={dropDownOtions}
										 />
								 </CCol>
								 <CCol md="4">
										 <FormicControl
												 control="input"
												 placeholder="Enter here..."
												 label="Postal Code"
												 id="PostalCode"
												 name="postalCode"
												 isRequired="true"
												 // options={dropDownOtions}
										 />
								 </CCol>
								 <CCol md="4">
										 <FormicControl
												 control="select"
												 label="Country"
												 id="Country"
												 name="country"
												 options={Country}
												 isRequired="true"
												 value={formik.values.country}
												 onChange={formik.handleChange}
										 />
								 </CCol>
								 <CCol md="4">
										 <FormicControl
												 control="input"
												 placeholder="Enter here..."
												 label="State"
												 id="State"
												 name="state"
												 isRequired="true"
												 // options={dropDownOtions}
										 />
								 </CCol>
								 <CCol md="4">
										 <FormicControl
												 control="input"
												 placeholder="Enter here..."
												 label="City"
												 id="CityName"
												 name="cityName"
												 isRequired="true"
												 options={dropDownOtions}
										 />
								 </CCol>

							
								 <CCol md="4">
										 <FormicControl
												 control="input"
												 placeholder="Enter here..."
												 label="Cross Street"
												 id="CrossStreet"
												 name="crossStreet"
												 // options={dropDownOtions}
										 />
								 </CCol>
								 <CCol md="4">
										 <FormicControl
												 control= {Selectedcountry?"selectOptional" : "select"}
												 label="Currency Of Party"
												 id="CurrencyOfParty"
												 name="currencyOfParty"
												 options={Selectedcountry?dropDownOtions : CurrencyOfParty}
												 isRequired="true"
										 />
								 </CCol>
								 <CCol md="4">
										 <FormicControl
												 control="select"
												 label=" Language Of the Party"
												 id="LaunguageOftheParty"
												 name="launguageOftheParty"
												 options={LanguageOftheParty}
												 isRequired="true"
										 />
								 </CCol>
								
								 <CCol md="4">
										 <FormicControl
												 control="input"
												 placeholder="Enter here..."
												 label=" Post Box Number"
												 id="PostBoxNumber"
												 name="postBoxNumber"
												//  isRequired="true"
												 // options={dropDownOtions}
										 />
								 </CCol>
								
								 <CCol md="4">
										 <FormicControl
												 control="input"
												 placeholder="Enter here..."
												 label="Province"
												 id="Province"
												 name="province"
												 isRequired="true"
												 // options={dropDownOtions}
										 />
								 </CCol>
								
								 <CCol md="4">
										 <FormicControl
												 control="input"
												 placeholder="Enter here..."
												 label=" Street Address One"
												 id="StreetAddressOne"
												 name="streetAddressOne"
												 isRequired="true"
												 // options={dropDownOtions}
										 />
								 </CCol>
								 <CCol md="4">
										 <FormicControl
												 control="input"
												 placeholder="Enter here..."
												 label="  Street Address Two"
												 id="StreetAddressTwo"
												 name="streetAddressTwo"
												 // options={dropDownOtions}
										 />
								 </CCol>
								
						 </CRow>
						
		
						 <CRow>
						 <CCol md="4">
										 <FormicControl
												 control="input"
												 placeholder="Enter here..."
												 label="  Street Address Three"
												 id="StreetAddressThree"
												 name="streetAddressThree"
												 // options={dropDownOtions}
										 />
								 </CCol>
						 </CRow>
 
						
									</div>
								}
								{/* toggle */}
			
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
												 name="latitude"
												 isRequired="true"
												 // options={dropDownOtions}
										 />
								 </CCol>
								 <CCol md="4">
										 <FormicControl
												 control="input"
												 type="number"
												 placeholder="Enter here..."
												 label="Longitude"
												 id="Longitutue"
												 name="longitutue"
												 isRequired="true"
												 // options={dropDownOtions}
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
																		 name="contactType"
																		 options={ContactType}
																		 isRequired="true"
																 />
														 </CCol>
														 <CCol md="4">
																 <FormicControl
																		 control="input"
																		 placeholder="Enter here..."
																		 label="Person Name"
																		 id="PersoneName"
																		 name="personeName"
																		 isRequired="true"
																		 // options={dropDownOtions}
																 />
														 </CCol>
														 <CCol md="4">
																 <FormicControl
																		 control="input"
																		 placeholder="Enter here..."
																		 label="Department Name"
																		 id="DepormentName"
																		 name="depormentName"
																		 // options={dropDownOtions}
																 />
														 </CCol>
														 <CCol md="4">
																 <FormicControl
																		 control="input"
																		 placeholder="Enter here..."
																		 label="Job Title"
																		 id="JobTitle"
																		 name="jobTitle"
																		 // options={dropDownOtions}
																 />
														 </CCol>
														 {/* <CCol md="4">
																 <FormicControl
																		 control="select"
																		 placeholder="Enter here..."
																		 label="Responsibility"
																		 id="Responsibility"
																		 name="responsibility"
																		 options={Resposibilities}
																		 isRequired="true"
																 />
														 </CCol> */}
														 <CCol md="12">
																 <div className="card-title mt-3">
																		 Communication Channel
																 </div>
														 </CCol>
														 <CCol md="4">
																 <FormicControl
																		 control="selectOptionalcommunicationChannel"
																		 placeholder="Enter here..."
																		 label=" Communication Channel Code"
																		 id="CommunicationChannelCode"
																		 name="communicationChannelCode"
																		 options={commmunicationChannel}
																		 isRequired="true"
																 />
														 </CCol>
														 <CCol md="4">
																 <FormicControl
																		 control="input"
																		 placeholder="Enter here..."
																		 label="Communication Value"
																		 id="CommunicationValue"
																		 name="communicationValue"
																		//  isRequired="true"
																		 // options={dropDownOtions}
																 />
														 </CCol>
														 <CCol md="4">
																 <FormicControl
																		 control="input"
																		 placeholder="Enter here..."
																		 label="Communication Channel Name"
																		 id="CommunicationChannelName"
																		 name="communicationChannelName"
																		 // options={dropDownOtions}
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
								 disabled={!formik.dirty && formik.errors}
						 >
								 Next
						 </CButton>
				 </Form>
 			
					)}}
			</Formik>
		</CCardBody>
	);
}

export default TCBPickUpLocation;

///take later
