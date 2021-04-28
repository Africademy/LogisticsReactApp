import { CButton, CCard, CCardBody, CCardHeader, CCol, CCollapse, CFormGroup, CFormText, CInput, CLabel, CLink, CRow } from '@coreui/react'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import FormicControl from '../../utils/CoreUI/FormicControl'
import * as yup from 'yup';
import Alert from '../../utils/Alert/Alert';

import {useDispatch} from 'react-redux'
import {DropOffLocationAction} from "../../actions/TCBActions"; 
import { getIdentifiertypes } from '../../services/identifiertypeService';
import { getDescription200types } from '../../services/description200typeService';
import { getCurrencyofpartycodes } from '../../services/currencyofpartycodeService';
import { getLanguageofthepartycodes } from '../../services/languageofthepartycodeService';
import { getCountrycodes } from '../../services/countrycodeService';
import { getContacttypecodes } from '../../services/contacttypecodeService';
import { getDescription70types } from '../../services/description70typeService';
import { getCommunicationchannels } from '../../services/communicationchannelService';
import { getEntityidentificationtypes } from '../../services/entityidentificationtypeService';
import { getCommunicationchannelcodes } from '../../services/communicationchannelcodeService';

function TCBDropOffLocation({setenableNext,setopenDropTime}) {

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

    // console.log(AdditionalLocationIdentification,"AdditionalLocationIdentification")
	// console.log(SublocationIdentification,"SublocationIdentification")
	// console.log(LocationSpecificInstructions,"LocationSpecificInstructions")
    // console.log(CurrencyOfParty,"CurrencyOfParty")
    // console.log(LanguageOftheParty,"LanguageOftheParty")
    // console.log(Country,"Country")
    // console.log(ContactType,"ContactType")
    // console.log(Resposibilities,"Resposibilities")
    // console.log(commmunicationChannel,"commmunicationChannel")

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
	

   

   

    // const [showAlert,setshowAlert] = useState(false)
    
    // const [collapseContactDetails,setcollapseContactDetails] = useState(false)
    // const [collapseAddLocation,setcollapseAddLocation] = useState(false)

    const dropDownOtions = [
        
        {key:'option1' ,value: 'option1'},
        {key:'option2' ,value: 'option2'},
        {key:'option3' ,value: 'option3'}
      ]

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
            onSubmit={(values)=> {
              console.log(values)
              dispatch(DropOffLocationAction(values))
              setenableNext(true)
							setopenDropTime(true)
          }}
        >
          { 
            formik =>(
                <Form>
						 <div className="AlertInOrder">
								 {/* {showAlert && (<Alert bgcolor="bgSuccess"> Successfully Submited The Order Details! Please Go Head Planned Details </Alert>)} */}
						 </div>
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
										 />
								 </CCol>
								 <CCol md="4">
										 <FormicControl
												 control="input"
												 placeholder="Enter here..."
												 label="State"
												 id="State"
												 name="state"
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
												 control="select"
												 label="Currency Of Party"
												 id="CurrencyOfParty"
												 name="currencyOfParty"
												 options={CurrencyOfParty}
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
																		 // options={dropDownOtions}
																		//  isRequired="true"
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
 
					    
             )
          }
          
        </Formik>
        </CCardBody>
        
        
      
      
    )
}

export default TCBDropOffLocation

///take later

