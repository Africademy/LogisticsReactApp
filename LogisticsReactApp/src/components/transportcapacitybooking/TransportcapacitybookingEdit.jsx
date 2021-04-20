/* eslint-disable no-lone-blocks */
import {
	CButton,
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CCollapse,
	CContainer,
	CInput,
  CInputGroup,
	CRow,
  CSelect,
} from "@coreui/react";
import {} from "./transportcapacitybookingForm.css";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineCheck, AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { useParams } from "react-router";
import Alert from "../../utils/Alert/Alert";
import FormicControl from "../../utils/CoreUI/FormicControl";
import CargoCharacteristicsForm from "./TCBCargoCharacteristicsform";
import TCBDropOffLocation from "./TCBDropOffLocation";
import TCBDropOffTime from "./TCBDropOffTime";
import TCBOrderDetails from "./TCBOrderDetails";
import TCBPickUpLocation from "./TCBPickUpLocation";
import TCBPIckUPTime from "./TCBPIckUPTime";
import { getTransportcapacitybooking } from "../../services/transportcapacitybookingService";
import { getTransportservicelevelcodes } from "../../services/transportservicelevelcodeService";
import { getTransportservicecategorycodes } from "../../services/transportservicecategorycodeService";
import { getTransportserviceconditiontypecodes } from "../../services/transportserviceconditiontypecodeService";
import {useSelector} from 'react-redux'

function TransportcapacitybookingEdit() {
	// const data = useSelector((state)=> state.tvbDta)
	const [TcbData, setTcbData] = useState("");
	const [FormValues, setFormValues] = useState(null);
  const [localData, setlocalData] = useState(JSON.parse(localStorage.getItem('state')));

//   const formreduxData =  useSelector((state)=> state.tvbDta)
// console.log(formreduxData,"Redux00000")
	//Order Details


	let { id } = useParams();

	useEffect(() => {
		console.log("effect runnning");
    // const localData = localStorage.getItem('state')
    // // console.log(JSON.parse(localData),"Edit123123")
    // setlocalData(JSON.parse(localData))
  
		getDataFromTcB();
     
	}, []);


  console.log(localData.tvbDta.transportServiceCategoryCodes,"Edit123123")
  useEffect(()=>{

  loadValuesFn()

  },[TcbData])

	const getDataFromTcB = async () => {
		const getData = await getTransportcapacitybooking(id);

		console.log(getData, "getTransportcapacitybooking");
		setTcbData(getData);
	};
  const loadValuesFn =()=>{
    setFormValues(newinitialValues)
    console.log(newinitialValues,"newinitialValues")

  }

	console.log(TcbData, "TcbData");



	const initialValuesServiceDetail = {
		servicecategory:"",
		serviceConditionType: "",
		serviceLevel: "",
  //  pickUpLoaction

      additionalLocationIdentification:"",
      sublocationIdentification:"",
      locationName:"",
      locationSpecificInstructions:"",
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
      responsibility:"",
      communicationChannelCode:"",
      communicationValue:"",
      communicationChannelName:"",

      //DropOff Location
      
    additionalLocationIdentificationDp:"",
    sublocationIdentificationDp:"",
    locationNameDp:"",
    locationSpecificInstructionsDp:"",
    uTCOffsetDp:"",
    cityNameDp:"",
    countryDp:"",
    crossStreetDp:"",
    currencyOfPartyDp:"",
    launguageOfthePartyDp:"",
    nameDp:"",
    postBoxNumberDp:"",
    postalCodeDp:"",
    provinceDp:"",
    stateDp:"",
    streetAddressOneDp:"",
    streetAddressTwoDp:"",
    streetAddressThreeDp:"",
    latitudeDp:"",
    longitutueDp:"",

    contactTypeDp:"",
    personeNameDp:"",
    depormentNameDp:"",
    jobTitleDp:"",
    responsibilityDp:"",
    communicationChannelCodeDp:"",
    communicationValueDp:"",
    communicationChannelNameDp:""





	};
  const initialValuesPickupL = {
    additionalLocationIdentification:TcbData && TcbData.data.plannedPickUp.Logisticlocation.additionalLocationIdentification.Name,
    sublocationIdentification:TcbData && TcbData.data.plannedPickUp.Logisticlocation.sublocationIdentification,
    // sublocationIdentification:'Anantapur',
    locationName:TcbData && TcbData.data.plannedPickUp.Logisticlocation.locationName,
    locationSpecificInstructions:TcbData && TcbData.data.plannedPickUp.Logisticlocation.locationSpecificInstructions.Name,
    uTCOffset:TcbData && TcbData.data.plannedPickUp.Logisticlocation.UtcOffSet,
    cityName:TcbData && TcbData.data.plannedPickUp.Logisticlocation.City,
    country:TcbData &&  TcbData.data.plannedPickUp.Logisticlocation.countryCode.Name,
    crossStreet:TcbData && TcbData.data.plannedPickUp.Logisticlocation.crossStreet,
    currencyOfParty:TcbData && TcbData.data.plannedPickUp.Logisticlocation.currencyOfParty.Name,
    launguageOftheParty:TcbData && TcbData.data.plannedPickUp.Logisticlocation.languageOfTheParty.Name,
    name:TcbData && TcbData.data.plannedPickUp.Logisticlocation.name,
    postBoxNumber:TcbData && TcbData.data.plannedPickUp.Logisticlocation.pOBoxNumber,
    postalCode:TcbData && TcbData.data.plannedPickUp.Logisticlocation.postalCode,
    province:TcbData && TcbData.data.plannedPickUp.Logisticlocation.province,
    state:TcbData && TcbData.data.plannedPickUp.Logisticlocation.state,
    streetAddressOne:TcbData && TcbData.data.plannedPickUp.Logisticlocation.streetAddressOne,
    streetAddressTwo:TcbData && TcbData.data.plannedPickUp.Logisticlocation.streetAddressTwo,
    streetAddressThree:TcbData && TcbData.data.plannedPickUp.Logisticlocation.streetAddressThree,
    latitude:TcbData && TcbData.data.plannedPickUp.Logisticlocation.latitude,
    longitutue:TcbData && TcbData.data.plannedPickUp.Logisticlocation.longitude,

    contactType:TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact,
    personeName:TcbData && TcbData.data.plannedPickUp.Logisticlocation.personeName,
    depormentName:TcbData && TcbData.data.plannedPickUp.Logisticlocation.depormentName,
    jobTitle:TcbData && TcbData.data.plannedPickUp.Logisticlocation.jobTitle,
    // responsibility:TcbData && TcbData.data.plannedPickUp.Logisticlocation.responsibility.Name,
    responsibility:'',
    // communicationChannelCode:TcbData && TcbData.data.plannedPickUp.Logisticlocation.communicationChannelCode.Name,
    communicationChannelCode:'',
    communicationValue:TcbData && TcbData.data.plannedPickUp.Logisticlocation.communicationValue,
    communicationChannelName:TcbData && TcbData.data.plannedPickUp.Logisticlocation.communicationChannelName
  }
  const initialValuesDropoffL = {
    additionalLocationIdentification:TcbData && TcbData.data.plannedDropOff.Logisticlocation.additionalLocationIdentification.Name,
    sublocationIdentification:TcbData && TcbData.data.plannedDropOff.Logisticlocation.sublocationIdentification,
    locationName:TcbData && TcbData.data.plannedDropOff.Logisticlocation.locationName,
    locationSpecificInstructions:TcbData && TcbData.data.plannedDropOff.Logisticlocation.locationSpecificInstructions.Name,
    uTCOffset:TcbData && TcbData.data.plannedDropOff.Logisticlocation.UtcOffSet,
    cityName:TcbData && TcbData.data.plannedDropOff.Logisticlocation.City,
    country:TcbData &&  TcbData.data.plannedDropOff.Logisticlocation.countryCode.Name,
    crossStreet:TcbData && TcbData.data.plannedDropOff.Logisticlocation.crossStreet,
    currencyOfParty:TcbData && TcbData.data.plannedDropOff.Logisticlocation.currencyOfParty.Name,
    launguageOftheParty:TcbData && TcbData.data.plannedDropOff.Logisticlocation.languageOfTheParty.Name,
    name:TcbData && TcbData.data.plannedDropOff.Logisticlocation.name,
    postBoxNumber:TcbData && TcbData.data.plannedDropOff.Logisticlocation.pOBoxNumber,
    postalCode:TcbData && TcbData.data.plannedDropOff.Logisticlocation.postalCode,
    province:TcbData && TcbData.data.plannedDropOff.Logisticlocation.province,
    state:TcbData && TcbData.data.plannedDropOff.Logisticlocation.state,
    streetAddressOne:TcbData && TcbData.data.plannedDropOff.Logisticlocation.streetAddressOne,
    streetAddressTwo:TcbData && TcbData.data.plannedDropOff.Logisticlocation.streetAddressTwo,
    streetAddressThree:TcbData && TcbData.data.plannedDropOff.Logisticlocation.streetAddressThree,
    latitude:TcbData && TcbData.data.plannedDropOff.Logisticlocation.latitude,
    longitutue:TcbData && TcbData.data.plannedDropOff.Logisticlocation.longitude,

    contactType:TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact,
    personeName:TcbData && TcbData.data.plannedDropOff.Logisticlocation.personeName,
    depormentName:TcbData && TcbData.data.plannedDropOff.Logisticlocation.depormentName,
    jobTitle:TcbData && TcbData.data.plannedDropOff.Logisticlocation.jobTitle,
    // responsibility:TcbData && TcbData.data.plannedDropOff.Logisticlocation.responsibility.Name,
    responsibility:'',
    // communicationChannelCode:TcbData && TcbData.data.plannedDropOff.Logisticlocation.communicationChannelCode.Name,
    communicationChannelCode:'',
    communicationValue:TcbData && TcbData.data.plannedDropOff.Logisticlocation.communicationValue,
    communicationChannelName:TcbData && TcbData.data.plannedDropOff.Logisticlocation.communicationChannelName
  }
  const initialValuesCargo = {
    cargoType :TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.cargoTypeCode.Name,
    harmonizedSystemCode: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.harmonizedSystemCode.Name, 
    cargoTypeDescription: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.cargoTypeDescription.Name, 
    countryOfOriginCode: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.countryOfOriginCode.Name, 
    finalDestinationCountry: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.finalDestinationCountry.Name,
    totalGrossVolume:TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalGrossVolume.Value,
    totalGrossVolumeCodes:TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalGrossVolume.Measurementtype,
    totalGrossWeight: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalGrossWeight.Value,
    totalGrossWeightCodes:TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalGrossWeight.Measurementtype,
    totalTransportNetWeight: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalTransportNetWeight.Value,
    totalTransportNetWeightCodes:TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalTransportNetWeight.Measurementtype,
    totalChargeableWeight: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalChargeableWeight.Value,
    totalChargeableWeightCodes: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalChargeableWeight.Measurementtype,
    declaredWeightForCustoms: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.declaredWeightForCustoms.Value, 
    declaredWeightForCustomsCodes: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.declaredWeightForCustoms.Measurementtype, 
    totalLoadingLength: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalLoadingLength.Value, 
    totalLoadingLengthCodes: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalLoadingLength.Measurementtype,
    associatedInvoiceAmount: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.associatedInvoiceAmount.Value,
    associatedInvoiceAmountCodes: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.associatedInvoiceAmount.Measurementtype,
    declaredValueForCustoms: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.declaredValueForCustoms.Value, 
    declaredValueForCustomsCodes:TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.declaredValueForCustoms.Measurementtype,
    totalPackageQuantity: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalPackageQuantity.Value,
    totalPackageQuantityCodes: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalPackageQuantity.Measurementtype,
    totalItemQuantity: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalItemQuantity.Value, 
    totalItemQuantityCodes: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalItemQuantity.Measurementtype, 
    packageTypeCode: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.packageTypeCode.Name,
    totalPackageQuantityPT:TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalPackageQuantity,
    totalGrossWeightPT:TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossWeight.Value,
    totalGrossWeightPTCodes:TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossWeight.Measurementtype,
    totalGrossVolumePT:TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossVolume.Value,
    totalGrossVolumePTCodes:TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossVolume.Measurementtype,  
  }
	const newinitialValues = {
		servicecategory: TcbData && TcbData.data.transportServiceCategoryCode.Name,
    // servicecategory:'option3',
		serviceConditionType:
			TcbData && TcbData.data.transportServiceConditionTypeCode.Name,
		serviceLevel: TcbData && TcbData.data.transportServiceLevelCode.Name,

    /// pickupLocation
    additionalLocationIdentification:TcbData && TcbData.data.plannedPickUp.Logisticlocation.additionalLocationIdentification.Name,
    sublocationIdentification:TcbData && TcbData.data.plannedPickUp.Logisticlocation.sublocationIdentification,
    // sublocationIdentification:'Anantapur',
    locationName:TcbData && TcbData.data.plannedPickUp.Logisticlocation.locationName,
    locationSpecificInstructions:TcbData && TcbData.data.plannedPickUp.Logisticlocation.locationSpecificInstructions.Name,
    uTCOffset:TcbData && TcbData.data.plannedPickUp.Logisticlocation.UtcOffSet,
    cityName:TcbData && TcbData.data.plannedPickUp.Logisticlocation.City,
    country:TcbData &&  TcbData.data.plannedPickUp.Logisticlocation.countryCode.Name,
    crossStreet:TcbData && TcbData.data.plannedPickUp.Logisticlocation.crossStreet,
    currencyOfParty:TcbData && TcbData.data.plannedPickUp.Logisticlocation.currencyOfParty.Name,
    launguageOftheParty:TcbData && TcbData.data.plannedPickUp.Logisticlocation.languageOfTheParty.Name,
    name:TcbData && TcbData.data.plannedPickUp.Logisticlocation.name,
    postBoxNumber:TcbData && TcbData.data.plannedPickUp.Logisticlocation.pOBoxNumber,
    postalCode:TcbData && TcbData.data.plannedPickUp.Logisticlocation.postalCode,
    province:TcbData && TcbData.data.plannedPickUp.Logisticlocation.province,
    state:TcbData && TcbData.data.plannedPickUp.Logisticlocation.state,
    streetAddressOne:TcbData && TcbData.data.plannedPickUp.Logisticlocation.streetAddressOne,
    streetAddressTwo:TcbData && TcbData.data.plannedPickUp.Logisticlocation.streetAddressTwo,
    streetAddressThree:TcbData && TcbData.data.plannedPickUp.Logisticlocation.streetAddressThree,
    latitude:TcbData && TcbData.data.plannedPickUp.Logisticlocation.latitude,
    longitutue:TcbData && TcbData.data.plannedPickUp.Logisticlocation.longitude,

    contactType:TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact,
    personeName:TcbData && TcbData.data.plannedPickUp.Logisticlocation.personeName,
    depormentName:TcbData && TcbData.data.plannedPickUp.Logisticlocation.depormentName,
    jobTitle:TcbData && TcbData.data.plannedPickUp.Logisticlocation.jobTitle,
    // responsibility:TcbData && TcbData.data.plannedPickUp.Logisticlocation.responsibility.Name,
    responsibility:'',
    // communicationChannelCode:TcbData && TcbData.data.plannedPickUp.Logisticlocation.communicationChannelCode.Name,
    communicationChannelCode:'',
    communicationValue:TcbData && TcbData.data.plannedPickUp.Logisticlocation.communicationValue,
    communicationChannelName:TcbData && TcbData.data.plannedPickUp.Logisticlocation.communicationChannelName,




          
      /// DropOffLocation
      additionalLocationIdentificationDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.additionalLocationIdentification.Name,
      sublocationIdentificationDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.sublocationIdentification,
      locationNameDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.locationName,
      locationSpecificInstructionsDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.locationSpecificInstructions.Name,
      uTCOffsetDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.UtcOffSet,
      cityNameDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.City,
      countryDp:TcbData &&  TcbData.data.plannedDropOff.Logisticlocation.countryCode.Name,
      crossStreetDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.crossStreet,
      currencyOfPartyDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.currencyOfParty.Name,
      launguageOfthePartyDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.languageOfTheParty.Name,
      nameDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.name,
      postBoxNumberDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.pOBoxNumber,
      postalCodeDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.postalCode,
      provinceDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.province,
      stateDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.state,
      streetAddressOneDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.streetAddressOne,
      streetAddressTwoDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.streetAddressTwo,
      streetAddressThreeDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.streetAddressThree,
      latitudeDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.latitude,
      longitutueDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.longitude,

      contactTypeDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact,
      personeNameDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.personeName,
      depormentNameDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.depormentName,
      jobTitleDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.jobTitle,
      // responsibilityDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.responsibility.Name,
      responsibilityDp:'',
      // communicationChannelCodeDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.communicationChannelCode.Name,
      communicationChannelCodeDp:'',
      communicationValueDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.communicationValue,
      communicationChannelNameDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.communicationChannelName

	};

	///  newForm State
	const [TabenablePL, setTabenablePL] = useState(false);
	const [TabenablePickTime, setTabenablePickTime] = useState(false);
	const [TabenableDl, setTabenableDl] = useState(false);
	const [TabenableDropTime, setTabenableDropTime] = useState(false);
	const [TabenableCG, setTabenableCG] = useState(false);
	const [TabenableSp, setTabenableSp] = useState(false);
	const [response, setresponse] = useState(null);
	const [Error, setError] = useState(null);
	const [navigate, setnavigate] = useState(false);
	const [ServiceDetails, setServiceDetails] = useState(false);
	const [PickUpLocation, setPickUpLocation] = useState(false);
	const [pickUPTime, setpickUPTime] = useState(false);
	const [DropOffLocation, setDropOffLocation] = useState(false);
	const [DropOffTime, setDropOffTime] = useState(false);

	//Order Details

	const dropDownOtions = [
	  { key: "option1", value: "option1" },
	  { key: "option2", value: "option2" },
	  { key: "option3", value: "option3" },
	];

	return (
		<div>
       <div style={{textAlign:"end" ,fontSize:"1.2rem",fontWeight:"bold",position:"relative",left:"4rem"}}>Order Id: &nbsp;{TcbData&& TcbData.data.bookingId}</div>
			{/* <div style={{textAlign:"end" ,fontSize:"1.2rem",fontWeight:"bold",position:"relative",left:"4rem"}}>Order Id: &nbsp;{id}</div> */}
			{/* <h3>{TcbData && TcbData.data.transportServiceCategoryCode.Name}</h3> */}

			{/* Original form */}

			<div className="transportcapacitybooking">
				<div className="py-5">
					{/* <div className="AlertInTCB">
                </div> */}

					<CContainer>
					
						<CCard>
						
							<CCollapse show={true}>
								<CCardBody>

									<Formik
										initialValues={FormValues || initialValuesServiceDetail} 
										enableReinitialize
										// validationSchema={validationSchema}
										onSubmit={(values) => {
											console.log(values,"initialValuesServiceDetail");
										}}
									>
										{(formik) => (


											<Form> 
                        	{/*1111111111  Service Details */}
                           	<CCard>
                               <CCardHeader
                                  className={`card-toggle-header Ccard ${
                                    true ? "cardheader" : ""
                                  }`}
                                
                                >
                                  <div className="cardFlex">
                                    <div className="cardFlex__header">
                                      <span className="cardFlex__header__Icon">
                                        {" "}
                                        <AiOutlineCheck />
                                      </span>
                                      <h6>Service Details</h6>
                                    </div>

                                    {true ? <AiOutlineDown /> : <AiOutlineRight />}
                                  </div>
                            </CCardHeader>
                                  <CCollapse show={true}>
                                   <CCardBody>
                                   <CRow className="justify-content-center">
													<CCol md="4">
													{/* selectedit */}
                          	<FormicControl
															placeholder="Service Condition Type"
															control="selectedit"
                              // control="selectOptional"
															label="servicecategory"
															id="servicecategory"
															name="servicecategory"
															typeOfOption="servicecategory"
															options={localData.tvbDta.transportServiceCategoryCodes}
                              // options={dropDownOtions}
														
														/>
                          
                          
													</CCol>
													<CCol md="4">
														<FormicControl
															placeholder="Service Condition Type"
                              control="selectedit"
															label="ServiceConditionType"
															id="ServiceConditionType"
															name="serviceConditionType"
															typeOfOption="ServiceCondition"
															options={localData.tvbDta.transportServiceConditionTypeCodes}
														
															// isRequired="true"
														/>
                           
													</CCol>
													<CCol md="4">
														<FormicControl
															placeholder="Service Level"
                              control="selectedit"
															label="Service Level"
															id="ServiceLevel"
															name="serviceLevel"
															typeOfOption="ServiceLevel"
															// isRequired="true"
															options={localData.tvbDta.transportServiceLevelCodes}
														
														/>
                           
													</CCol>
												</CRow>
                       

                                   </CCardBody>
                                    
                                  </CCollapse>
                            </CCard>
												

											
											  	  {/* 222222222222 PickUp Location */}
                            <CCard >
                              <CCardHeader
                                  className={ `card-toggle-header Ccard ${true ? "cardheader": ""}` }
                                
                                  >
                                    <div className="cardFlex">
                                      <div className="cardFlex__header">
                                      <span className="cardFlex__header__Icon"> <AiOutlineCheck /></span>
                                        <h6>Pickup Location</h6>
                                      </div>
                                      
                                      {  true ?  <AiOutlineDown />: <AiOutlineRight />}

                                    </div>
                                  </CCardHeader>
                                {(
                                  <CCollapse  show={true}>
                                    {/* <TCBPickUpLocation setenableNext={setTabenablePickTime}  /> */}
                                    <CCardBody>
                                            <CRow className="justify-content-center">
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="selectOptionalidentificationSchemeedit"
                                                        label="Additional Location Identification"
                                                        id="AdditionalLocationIdentification"
                                                        name="additionalLocationIdentification"
                                                        typeOfOption = "AdditionalLocationIdentification"
                                                        isRequired="true"
                                                        options={localData.tvbDta.AdditionalLocationIdentificationCodes}
                                                        // options={dropDownOtions}
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="input"
                                                        label="Sublocation Identification"
                                                        id="SublocationIdentification"
                                                        name="sublocationIdentification"
                                                        isRequired="true"
                                                        
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
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="selectedit"
                                                        label="Location Specific Instructions"
                                                        id="LocationSpecificInstructions"
                                                        name="locationSpecificInstructions"
                                                        // options={LocationSpecificInstructions}
                                                        options={localData.tvbDta.LocationSpecificInstructionsCodes}
                                                        isRequired="true"
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="input"
                                                        placeholder="Enter here..."
                                                        label="UTC Offset"
                                                        id="UTCOffset"
                                                        name="uTCOffset"
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
                                                    />
                                                </CCol>

                                                <CCol md="4">
                                                    <FormicControl
                                                        control="selectedit"
                                                        label="Country"
                                                        id="Country"
                                                        name="country"
                                                        // options={Country}
                                                        options={localData.tvbDta.CountryCodes}

                                                        isRequired="true"
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
                                                        control="selectedit"
                                                        label="Currency Of Party"
                                                        id="CurrencyOfParty"
                                                        name="currencyOfParty"
                                                        // options={CurrencyOfParty}
                                                        options={localData.tvbDta.CurrencyOfPartyCodes}

                                                        isRequired="true"
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="selectedit"
                                                        label=" Language Of the Party"
                                                        id="LaunguageOftheParty"
                                                        name="launguageOftheParty"
                                                        // options={LanguageOftheParty}
                                                        options={localData.tvbDta.LanguageOfthePartyCodes}

                                                        isRequired="true"
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
                                                        label=" Post Box Number"
                                                        id="PostBoxNumber"
                                                        name="postBoxNumber"
                                                        isRequired="true"
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
                                                        control="input"
                                                        placeholder="Enter here..."
                                                        label="Province"
                                                        id="Province"
                                                        name="province"
                                                        // options={dropDownOtions}
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
                                                        // options={dropDownOtions}
                                                    />
                                                </CCol>
                                                <CCol md="4"></CCol>
                                                <div>
                                                  
                                                    <CCol md="12">
                                                        <div className="card-title mt-3"> Contact Details</div>
                                                    </CCol>

                                                    <CCardBody>
                                                  

                                                        <CRow>
                                                            <CCol md="4">
                                                                <FormicControl
                                                                    control="selectedit"
                                                                    label="Contact Type"
                                                                    id="ContactType"
                                                                    name="contactType"
                                                                    // options={ContactType}
                                                                    options={localData.tvbDta.ContactTypeCodes}

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
                                                            <CCol md="4">
                                                                <FormicControl
                                                                    control="selectedit"
                                                                    placeholder="Enter here..."
                                                                    label="Responsibility"
                                                                    id="Responsibility"
                                                                    name="responsibility"
                                                                    // options={Resposibilities}
                                                                      options={localData.tvbDta.ResposibilitiesCodes}

                                                                    isRequired="true"
                                                                />
                                                            </CCol>
                                                            <CCol md="12">
                                                                <div className="card-title mt-3">
                                                                    Communication Channel
                                                                </div>
                                                            </CCol>
                                                            <CCol md="4">
                                                                <FormicControl
                                                                    control="selectOptionalcommunicationChanneledit"
                                                                    placeholder="Enter here..."
                                                                    label=" Communication Channel Code"
                                                                    id="CommunicationChannelCode"
                                                                    name="communicationChannelCode"
                                                                    // options={commmunicationChannel}
                                                                    options={localData.tvbDta.commmunicationChannelCodes}

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

                                    </CCardBody>

                          
                                </CCollapse>
                                )}
                            </CCard>
                             {/* 44444 DropOff Location */}

                             <CCard >
                              <CCardHeader
                                  className={ `card-toggle-header Ccard ${true ? "cardheader": ""}` }
                                
                                  >
                                    <div className="cardFlex">
                                      <div className="cardFlex__header">
                                      <span className="cardFlex__header__Icon"> <AiOutlineCheck /></span>
                                        <h6>Drop-Off Location</h6>
                                      </div>
                                      
                                      {  true ?  <AiOutlineDown />: <AiOutlineRight />}

                                    </div>
                                  </CCardHeader>
                                {(
                                  <CCollapse  show={true}>
                                    {/* <TCBPickUpLocation setenableNext={setTabenablePickTime}  /> */}
                                    <CCardBody>
                                            <CRow className="justify-content-center">
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="selectOptionalidentificationSchemeedit"
                                                        label="Additional Location Identification"
                                                        id="AdditionalLocationIdentification"
                                                        name="additionalLocationIdentificationDp"
                                                        typeOfOption = "AdditionalLocationIdentification"
                                                        isRequired="true"
                                                        options={localData.tvbDta.AdditionalLocationIdentificationCodes}
                                                        // options={dropDownOtions}
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="input"
                                                        label="Sublocation Identification"
                                                        id="SublocationIdentification"
                                                        name="sublocationIdentificationDp"
                                                        isRequired="true"
                                                        
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="input"
                                                        placeholder="Enter here..."
                                                        label="Location Name"
                                                        id="LocationName"
                                                        name="locationNameDp"
                                                        isRequired="true"
                                                        
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="selectedit"
                                                        label="Location Specific Instructions"
                                                        id="LocationSpecificInstructions"
                                                        name="locationSpecificInstructionsDp"
                                                        // options={LocationSpecificInstructions}
                                                        options={localData.tvbDta.LocationSpecificInstructionsCodes}
                                                        isRequired="true"
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="input"
                                                        placeholder="Enter here..."
                                                        label="UTC Offset"
                                                        id="UTCOffset"
                                                        name="uTCOffsetDp"
                                                        // options={dropDownOtions}
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="input"
                                                        placeholder="Enter here..."
                                                        label="City"
                                                        id="CityName"
                                                        name="cityNameDp"
                                                    />
                                                </CCol>

                                                <CCol md="4">
                                                    <FormicControl
                                                        control="selectedit"
                                                        label="Country"
                                                        id="Country"
                                                        name="countryDp"
                                                        // options={Country}
                                                        options={localData.tvbDta.CountryCodes}

                                                        isRequired="true"
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="input"
                                                        placeholder="Enter here..."
                                                        label="Cross Street"
                                                        id="CrossStreet"
                                                        name="crossStreetDp"
                                                        // options={dropDownOtions}
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="selectedit"
                                                        label="Currency Of Party"
                                                        id="CurrencyOfParty"
                                                        name="currencyOfPartyDp"
                                                        // options={CurrencyOfParty}
                                                        options={localData.tvbDta.CurrencyOfPartyCodes}

                                                        isRequired="true"
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="selectedit"
                                                        label=" Language Of the Party"
                                                        id="LaunguageOftheParty"
                                                        name="launguageOfthePartyDp"
                                                        // options={LanguageOftheParty}
                                                        options={localData.tvbDta.LanguageOfthePartyCodes}

                                                        isRequired="true"
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="input"
                                                        placeholder="Enter here..."
                                                        label=" Name"
                                                        id="Name"
                                                        name="nameDp"
                                                        // options={dropDownOtions}
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="input"
                                                        placeholder="Enter here..."
                                                        label=" Post Box Number"
                                                        id="PostBoxNumber"
                                                        name="postBoxNumberDp"
                                                        isRequired="true"
                                                        // options={dropDownOtions}
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="input"
                                                        placeholder="Enter here..."
                                                        label="Postal Code"
                                                        id="PostalCode"
                                                        name="postalCodeDp"
                                                        isRequired="true"
                                                        // options={dropDownOtions}
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="input"
                                                        placeholder="Enter here..."
                                                        label="Province"
                                                        id="Province"
                                                        name="provinceDp"
                                                        // options={dropDownOtions}
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="input"
                                                        placeholder="Enter here..."
                                                        label="State"
                                                        id="State"
                                                        name="stateDp"
                                                        // options={dropDownOtions}
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="input"
                                                        placeholder="Enter here..."
                                                        label=" Street Address One"
                                                        id="StreetAddressOne"
                                                        name="streetAddressOneDp"
                                                        isRequired="true"
                                                        // options={dropDownOtions}
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="input"
                                                        placeholder="Enter here..."
                                                        label="  Street Address Two"
                                                        id="StreetAddressTwoDp"
                                                        name="streetAddressTwoDp"
                                                        // options={dropDownOtions}
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="input"
                                                        placeholder="Enter here..."
                                                        label="  Street Address Three"
                                                        id="StreetAddressThreeDp"
                                                        name="streetAddressThreeDp"
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
                                                        id="LatitudeDp"
                                                        name="latitudeDp"
                                                        // options={dropDownOtions}
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="input"
                                                        type="number"
                                                        placeholder="Enter here..."
                                                        label="Longitude"
                                                        id="LongitutueDp"
                                                        name="longitutueDp"
                                                        // options={dropDownOtions}
                                                    />
                                                </CCol>
                                                <CCol md="4"></CCol>
                                                <div>
                                                  
                                                    <CCol md="12">
                                                        <div className="card-title mt-3"> Contact Details</div>
                                                    </CCol>

                                                    <CCardBody>
                                                  

                                                        <CRow>
                                                            <CCol md="4">
                                                                <FormicControl
                                                                    control="selectedit"
                                                                    label="Contact Type"
                                                                    id="ContactTypeDp"
                                                                    name="contactTypeDp"
                                                                    // options={ContactType}
                                                                    options={localData.tvbDta.ContactTypeCodes}

                                                                    isRequired="true"
                                                                />
                                                            </CCol>
                                                            <CCol md="4">
                                                                <FormicControl
                                                                    control="input"
                                                                    placeholder="Enter here..."
                                                                    label="Person Name"
                                                                    id="PersoneNameDp"
                                                                    name="personeNameDp"
                                                                    // options={dropDownOtions}
                                                                />
                                                            </CCol>
                                                            <CCol md="4">
                                                                <FormicControl
                                                                    control="input"
                                                                    placeholder="Enter here..."
                                                                    label="Department Name"
                                                                    id="DepormentNameDp"
                                                                    name="depormentNameDp"
                                                                    // options={dropDownOtions}
                                                                />
                                                            </CCol>
                                                            <CCol md="4">
                                                                <FormicControl
                                                                    control="input"
                                                                    placeholder="Enter here..."
                                                                    label="Job Title"
                                                                    id="JobTitleDp"
                                                                    name="jobTitleDp"
                                                                    // options={dropDownOtions}
                                                                />
                                                            </CCol>
                                                            <CCol md="4">
                                                                <FormicControl
                                                                    control="selectedit"
                                                                    placeholder="Enter here..."
                                                                    label="Responsibility"
                                                                    id="ResponsibilityDp"
                                                                    name="responsibilityDp"
                                                                    // options={Resposibilities}
                                                                      options={localData.tvbDta.ResposibilitiesCodes}

                                                                    isRequired="true"
                                                                />
                                                            </CCol>
                                                            <CCol md="12">
                                                                <div className="card-title mt-3">
                                                                    Communication Channel
                                                                </div>
                                                            </CCol>
                                                            <CCol md="4">
                                                                <FormicControl
                                                                    control="selectOptionalcommunicationChanneledit"
                                                                    placeholder="Enter here..."
                                                                    label=" Communication Channel Code"
                                                                    id="CommunicationChannelCodeDp"
                                                                    name="communicationChannelCodeDp"
                                                                    // options={commmunicationChannel}
                                                                    options={localData.tvbDta.commmunicationChannelCodes}

                                                                    isRequired="true"
                                                                />
                                                            </CCol>
                                                            <CCol md="4">
                                                                <FormicControl
                                                                    control="input"
                                                                    placeholder="Enter here..."
                                                                    label="Communication Value"
                                                                    id="CommunicationValueDp"
                                                                    name="communicationValueDp"
                                                                    // options={dropDownOtions}
                                                                />
                                                            </CCol>
                                                            <CCol md="4">
                                                                <FormicControl
                                                                    control="input"
                                                                    placeholder="Enter here..."
                                                                    label="Communication Channel Name"
                                                                    id="CommunicationChannelNameDp"
                                                                    name="communicationChannelNameDp"
                                                                    // options={dropDownOtions}
                                                                />
                                                            </CCol>
                                                        </CRow>

                                                        {/* closeContact */}
                                                    </CCardBody>
                                                </div>
                                            </CRow>

                                    </CCardBody>

                          
                                </CCollapse>
                                )}
                            </CCard>


                            <CButton
                                type="submit"
                                className="next-btn"
                                color="primary"
                                style={{ margin: "1rem" }}
                                // disabled={!formik.dirty && formik.errors}
                              >
                                Next
                              </CButton>

											</Form>
										)}
									</Formik>
								</CCardBody>
							</CCollapse>
						</CCard>
					
					
             {/*333333 Pick Up Time */}

             <CCard>
                <CCardHeader
                  className={ `card-toggle-header ${true ? "cardheader": ""}` }
                 
                >
                
                   <div className="cardFlex">
                       
                       <div className="cardFlex__header">
                       <span className="cardFlex__header__Icon"> <AiOutlineCheck /></span>
                        <h6>Pickup Time</h6>
                      </div>
                       { true ?  <AiOutlineDown />: <AiOutlineRight />}

                    </div>
                    </CCardHeader>
                    {(
                      <CCollapse show={true}>
                        {/* <TCBPickUpTime setenableNext={setenableNextPp} /> */}
                        <TCBPIckUPTime  setenableNext={setTabenableDl} />
                      </CCollapse>
                )}
              </CCard>
              
            
              

              
              {/* 555555  DropOff Time */}
              <CCard>
                <CCardHeader
                className={ `card-toggle-header ${ true ? "cardheader": ""}` }
               
                >
               
                   <div className="cardFlex">
                       
                       <div className="cardFlex__header">
                       <span className="cardFlex__header__Icon"> <AiOutlineCheck /></span>
                        <h6> Drop-Off Time</h6>
                      </div>
                       { true ?  <AiOutlineDown />: <AiOutlineRight />}

                    </div>
                </CCardHeader>
                  {(
                     <CCollapse show={true}>
                     {/* <TCBPlannedDropOff setenableNext={setenableNextPd} /> */}
                     <TCBDropOffTime  setenableNext={setTabenableCG}/>
     
                  </CCollapse>
                  )}
              </CCard>
              
              {/*6666666  CargoCharacterstic */}
              <CCard>
                    <CCardHeader
                        className={ `card-toggle-header  ${ true ? "cardheader": ""}` } 
                    >
                      <div className="cardFlex">
                     
                       <div className="cardFlex__header">
                       <span className="cardFlex__header__Icon"> <AiOutlineCheck /></span>
                        <h6>  Space Requirements</h6>
                      </div>
                       { true ?  <AiOutlineDown />: <AiOutlineRight />}

                    </div>
                    </CCardHeader>
                    
                         <CCollapse show={true}>
                            {/* <CargoCharacteristicsForm  setenableNext={setTabenableSp}/> */}
                            <CCardBody>
                              <Formik 
                                  initialValues= {initialValuesCargo}
                                  // validationSchema= {validationSchema}
                                  
                                  onSubmit={value => {
                                    console.log(value)
                                  }}
                                >
                                    { formik => (
                                      
                                      <Form onSubmit={formik.handleSubmit} >
                                          
                                        <div className="card-title my-2">Cargo Characteristics</div>
                                        <CRow>
                                          <CCol md="6">
                                          {/* options={CargoType}  */}
                                              <FormicControl  control='selectedit' isRequired="true" label='Cargo Type' id='cargoTypeCode' name='cargoType'  options={dropDownOtions} /> 
                                          </CCol>
                                          <CCol md="6">
                    
                                              <FormicControl  control='selectedit' isRequired="true" label='Harmonized System' id='harmonizedSystemCode' name='harmonizedSystemCode' options={dropDownOtions}   />
                                            
                                          </CCol>
                                          <CCol md="6">
                                          

                                            <FormicControl control='selectedit' isRequired="true" label='Cargo Type Description' id='cargoTypeDescription' name='cargoTypeDescription' options={dropDownOtions}  />
                                          
                                          </CCol>
                                          <CCol md="3">
                                          
                                            <FormicControl control='selectedit' isRequired="true" label='Country Of Origin' id='countryOfOriginCode' name='countryOfOriginCode' options={dropDownOtions}  />
                                          </CCol>
                                          <CCol md="3">
                                          
                                            <FormicControl control='selectedit' isRequired="true" label='Final Destination Country' id='finalDestinationCountry' name='finalDestinationCountry' options={dropDownOtions} />
                                          </CCol>

                                          <CCol md="6">
                                            
                                            <CInputGroup  style={{marginTop:"0.7rem",display:"flex"}}>
                                            <FormicControl label="Total Gross Volume"  control='input' isRequired="true"  placeholder="Enter here..." id='totalGrossVolume' name='totalGrossVolume' />

                                              <div className="VolumeCodes">
                                                  <FormicControl control='selectedit'  id='totalGrossVolumeCodes' name='totalGrossVolumeCodes' options={dropDownOtions} />
                                              </div>
                                            </CInputGroup>
                                            
                                          </CCol>
                                          <CCol md="6">
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl  control='input' label='Total Gross Weight' isRequired="true"  placeholder="Enter here..." id='totalGrossWeight' name='totalGrossWeight' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit'   id='totalGrossWeightCodes' name='totalGrossWeightCodes' options={dropDownOtions}  />

                                                </div>
                                              </CInputGroup>
                                            </CCol>

                                          <CCol md="6">
                                          
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' isRequired="true" label="Total Transport Net Weight"   placeholder="Enter here..." id='totalTransportNetWeight' name='totalTransportNetWeight' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit'  id='totalTransportNetWeightCodes' name='totalTransportNetWeightCodes' options={dropDownOtions}  />
                                                  
                                                </div>
                                              </CInputGroup>
                                          </CCol>


                                          <CCol md="6">

                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' isRequired="true" label="Total Chargeable Weight"  placeholder="Enter here..." id='totalChargeableWeight' name='totalChargeableWeight' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit'  id='totalChargeableWeightCodes' name='totalChargeableWeightCodes' options={dropDownOtions}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                          
                                              
                                          </CCol>
                                          <CCol md="6">
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' label="Declared Weight For Customs" isRequired="true"  placeholder="Enter here..." id='declaredWeightForCustoms' name='declaredWeightForCustoms' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit'   id='declaredWeightForCustomsCodes' name='declaredWeightForCustomsCodes' options={dropDownOtions}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                            
                                          </CCol>
                                          <CCol md="6">
                                          
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' isRequired="true" label="Total Loading Length"   placeholder="Enter here..." id='totalLoadingLength' name='totalLoadingLength' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit'  id='totalLoadingLengthCodes' name='totalLoadingLengthCodes' options={dropDownOtions}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                          
                                          </CCol>
                                          <CCol md="6">
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input'  isRequired="true" label="Associated Invoice Amount" placeholder="Enter here..." id='associatedInvoiceAmount' name='associatedInvoiceAmount' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit'  id='associatedInvoiceAmountCodes' name='associatedInvoiceAmountCodes' options={dropDownOtions}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                            
                                          </CCol>
                                          <CCol md="6">
                                            
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' isRequired="true" label="Declared Value For Customs"  placeholder="Enter here..." id='declaredValueForCustoms' name='declaredValueForCustoms' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit'  id='declaredValueForCustomsCodes' name='declaredValueForCustomsCodes' options={dropDownOtions}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                            
                                          </CCol>
                                          <CCol md="6">
                                        
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' isRequired="true" label="Total Package Quantity"  placeholder="Enter here..." id='totalPackageQuantity' name='totalPackageQuantity' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit'  id='totalPackageQuantityCodes' name='totalPackageQuantityCodes' options={dropDownOtions}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                          
                                          </CCol>
                                          <CCol md="6">
                                          
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' isRequired="true" label="Total Item Quantity" placeholder="Enter here..." id='totalItemQuantity' name='totalItemQuantity' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit'  id='totalItemQuantityCodes' name='totalItemQuantityCodes' options={dropDownOtions}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                            
                                          </CCol>
                                        </CRow>

                                        <div className="card-title my-2">Package Total</div>
                                      
                                        <CRow>
                                          <CCol md="6">
                                            <FormicControl control='selectedit' isRequired="true" label='Package Type' id='packageTypeCode' name='packageTypeCode' options={dropDownOtions}  />
                                          </CCol>
                                          <CCol md="6">
                                            <FormicControl control='input' isRequired="true" label='Total Package Quantity' id='totalPackageQuantityPT' name='totalPackageQuantityPT' options={dropDownOtions}  />
                                          </CCol>
                                          <CCol md="6">
                                          
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' isRequired="true" label="Total Gross Weight" placeholder="Enter here..." id='totalGrossWeightPT' name='totalGrossWeightPT' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit'   id='totalGrossWeightPTCodes' name='totalGrossWeightPTCodes' options={dropDownOtions}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                          
                                          </CCol>
                                          <CCol md="6">
                                      
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' isRequired="true" label="Total Gross Volume" placeholder="Enter here..." id='totalGrossVolumePT' name='totalGrossVolumePT' />
                                                <div className="VolumeCodes">
                                                  <FormicControl control='selectedit'  id='totalGrossVolumePTCodes' name='totalGrossVolumePTCodes' options={dropDownOtions}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                          
                                          </CCol>
                                        </CRow>
                                    

                                    
                                    <CButton
                                          type="submit"
                                          className="next-btn"
                                          color="primary"
                                          style={{margin:"1rem"}}
                                          disabled={!formik.dirty && formik.errors}
                                        >
                                          Next
                                        </CButton>


                                      
                                      </Form>
                                    )}
                                </Formik>

                            </CCardBody>
                      

                         </CCollapse>
                        
                  
                  </CCard>
           

						{/* Form Ends here */}
            <div className="finalSubmition">
							<button
								disabled={!TabenableSp}
								className="finalSubmition__btn  disabled"
								onClick={() => {}}
							>
								Update Order
							</button>
						</div>
					</CContainer>
				</div>
			</div>
		</div>
	);
}

export default TransportcapacitybookingEdit;
