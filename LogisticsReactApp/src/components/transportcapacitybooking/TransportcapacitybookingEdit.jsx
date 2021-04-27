/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-duplicate-props */
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
import { useHistory, useParams } from "react-router";
import Alert from "../../utils/Alert/Alert";
import FormicControl from "../../utils/CoreUI/FormicControl";
import CargoCharacteristicsForm from "./TCBCargoCharacteristicsform";
import TCBDropOffLocation from "./TCBDropOffLocation";
import TCBDropOffTime from "./TCBDropOffTime";
import TCBOrderDetails from "./TCBOrderDetails";
import TCBPickUpLocation from "./TCBPickUpLocation";
import TCBPIckUPTime from "./TCBPIckUPTime";
import { getTransportcapacitybooking, saveTransportcapacitybooking } from "../../services/transportcapacitybookingService";
import { getTransportservicelevelcodes } from "../../services/transportservicelevelcodeService";
import { getTransportservicecategorycodes } from "../../services/transportservicecategorycodeService";
import { getTransportserviceconditiontypecodes } from "../../services/transportserviceconditiontypecodeService";
import {useSelector} from 'react-redux'
import { isArray, trim } from "lodash";
import Moment from "moment";
import Swal from 'sweetalert2'

function TransportcapacitybookingEdit() {
	// const data = useSelector((state)=> state.tvbDta)
	const [TcbData, setTcbData] = useState(null);
	const [FormValues, setFormValues] = useState(null);
  const [localData, setlocalData] = useState(JSON.parse(localStorage.getItem('state')));
  const [tcbFinalData,settcbFinalData] = useState(null)
  const [ABCLoacal,setABCLoacal] = useState(null)
  const [Success,setSuccess] = useState('')
  const [Loading,setLoading] = useState(true)
  const [count,setcount] =useState(0)
  const [Error1, setError] = useState(false);
  const history = useHistory()

//   const formreduxData =  useSelector((state)=> state.tvbDta)
// console.log(formreduxData,"Redux00000")
	//Order Details


	let { id } = useParams();

	useEffect(() => {
		console.log("effect runnning");
		getDataFromTcB();
     
	}, []);
  

    console.log(Response,"Response from server")

  // console.log(localData.tvbDta.transportServiceCategoryCodes,"Edit123123") rm
  useEffect(()=>{
     loadValuesFn()
     setcount((value)=> value+1)
     setLoading(false)
  },[TcbData,])

	const getDataFromTcB = async () => {
		const getData = await getTransportcapacitybooking(id);

		console.log(getData, "getTransportcapacitybooking");
		setTcbData(getData);
    setLoading(false)
	};
  const loadValuesFn =()=>{
        setFormValues(newinitialValues)
        console.log(newinitialValues,"newinitialValues")
  }

	console.log(TcbData, "TcbData");
  console.log(tcbFinalData,"tcbFinalData9999999");
  // console.log(localData.tvbDta.transportServiceCategoryCodes,"options1") rm
  // console.log(localData.tvbDta.transportServiceConditionTypeCodes,"options2") rm
  // transportServiceConditionTypeCodes


  //measurments
  console.log( (TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.declaredValueForCustoms.Measurementtype),"Measurementtype111in EditPage")
  const declaredValueForCustoms = TcbData && (localData&& localData.tvbDta.amounttypesCodes.filter((item)=> item._id === (TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.declaredValueForCustoms.Measurementtype) ))
  const totalItemQuantity = TcbData && (localData&& localData.tvbDta.quantitytypesCodes.filter((item)=> item._id === (TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalItemQuantity.Measurementtype) ))
  const totalPackageQuantity = TcbData && (localData&& localData.tvbDta.quantitytypesCodes.filter((item)=> item._id === (TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalPackageQuantity.Measurementtype) ))
 
  const totalGrossVolume = TcbData && (localData&& localData.tvbDta.measurementtypesCodes.filter((item)=> item._id === (TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossVolume.Measurementtype) ))
  const totalGrossWeight = TcbData && (localData&& localData.tvbDta.measurementtypesCodes.filter((item)=> item._id === (TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossWeight.Measurementtype) ))
  

  ///   LoctionTimings  
  const DatepickupStarts = TcbData && Moment(TcbData.data.plannedPickUp.LogisticEventPeriod.beginDate ).format("YYYY-MM-DD")
  const timepickupStarts = trim(TcbData && TcbData.data.plannedPickUp.LogisticEventPeriod.beginTime)
  
  const DatepickupEnds = TcbData && Moment(TcbData.data.plannedPickUp.LogisticEventPeriod.endDate ).format("YYYY-MM-DD")
  const timepickupEnds = trim(TcbData && TcbData.data.plannedPickUp.LogisticEventPeriod.endTime)

   
   const pickupUpTimeLocal = `${DatepickupStarts}T${timepickupStarts}`
   const pickupUpTimeLoacalEnd = `${DatepickupEnds}T${timepickupEnds}`


  const DateDropStarts = TcbData && Moment(TcbData.data.plannedDropOff.LogisticEventPeriod.beginDate ).format("YYYY-MM-DD")
  const timeDropStarts = trim(TcbData && TcbData.data.plannedDropOff.LogisticEventPeriod.beginTime)
  
  const DateDropEnds = TcbData && Moment(TcbData.data.plannedDropOff.LogisticEventPeriod.endDate ).format("YYYY-MM-DD")
  const timeDropEnds = trim(TcbData && TcbData.data.plannedDropOff.LogisticEventPeriod.endTime)

   
   const DropOffTimeLocal = `${DateDropStarts}T${timeDropStarts}`
   const DropOffTimeLoacalEnd = `${DateDropEnds}T${timeDropEnds}`
  

	const initialValues = {
		servicecategory:"",
		serviceConditionType: "",
		serviceLevel: "",
  //  pickUpLoaction

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

      //DropOff Location
      
    // additionalLocationIdentificationDp:"",
    sublocationIdentificationDp:"",
    locationNameDp:"",
    // locationSpecificInstructionsDp:"",
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
    // responsibilityDp:"",
    communicationChannelCodeDp:"",
    communicationValueDp:"",
    communicationChannelNameDp:"",

   // Cargo Values
      cargoType :'',
      // harmonizedSystemCode: "", 
      // cargoTypeDescription: "", 
      countryOfOriginCode: "", 
      finalDestinationCountry: "",
      totalGrossVolume:'',
      totalGrossVolumeCodes:"",
      totalGrossWeight: '',
      totalGrossWeightCodes:'',
      totalTransportNetWeight: "",
      totalTransportNetWeightCodes:"",
      totalChargeableWeight: "",
      totalChargeableWeightCodes: "",
      declaredWeightForCustoms: "", 
      declaredWeightForCustomsCodes: "", 
      totalLoadingLength: "", 
      totalLoadingLengthCodes: "",
      associatedInvoiceAmount: "",
      associatedInvoiceAmountCodes: "",
      declaredValueForCustoms: "", 
      declaredValueForCustomsCodes: '',
      totalPackageQuantity: "",
      totalPackageQuantityCodes: "",
      totalItemQuantity: "", 
      totalItemQuantityCodes: "", 
      packageTypeCode: "",
      totalPackageQuantityPT:"",
      totalGrossWeightPT:"",
      totalGrossWeightPTCodes:"",
      totalGrossVolumePT:"",
      totalGrossVolumePTCodes:"",  
      //PickupTime
      pickupStartTime: "",
      pickupEndTime: "",
      //Dropoff Time
      dropOffStartTime: "",
      dropOffEndTime: "",
      



	};
 
	const newinitialValues = {
		servicecategory: TcbData && TcbData.data.transportServiceCategoryCode.Name,
    // servicecategory:'Road transport',
		serviceConditionType:TcbData && TcbData.data.transportServiceConditionTypeCode.Name,
    // serviceConditionType :'AVC conditions',
		serviceLevel: TcbData && TcbData.data.transportServiceLevelCode.Name,

    /// pickupLocation

    // additionalLocationIdentification:TcbData && TcbData.data.plannedPickUp.Logisticlocation.additionalLocationIdentification.Name,
    sublocationIdentification:TcbData && TcbData.data.plannedPickUp.Logisticlocation.sublocationIdentification,
    locationName:TcbData && TcbData.data.plannedPickUp.Logisticlocation.locationName,
    // locationSpecificInstructions:TcbData && TcbData.data.plannedPickUp.Logisticlocation.locationSpecificInstructions.Name,
    uTCOffset:TcbData && TcbData.data.plannedPickUp.Logisticlocation.utcOffset,
    cityName:TcbData && TcbData.data.plannedPickUp.Logisticlocation.cityCode,
    country:TcbData && TcbData.data.plannedPickUp.Logisticlocation.countryCode.Name,
    crossStreet:TcbData && TcbData.data.plannedPickUp.Logisticlocation.crossStreet,
    currencyOfParty:TcbData && TcbData.data.plannedPickUp.Logisticlocation.currencyOfParty.Name,
    launguageOftheParty:TcbData && TcbData.data.plannedPickUp.Logisticlocation.languageOfTheParty.Name,
    name:TcbData && TcbData.data.plannedPickUp.Logisticlocation.name,
    postBoxNumber:TcbData && TcbData.data.plannedPickUp.Logisticlocation.pOBoxNumber,
    postalCode:TcbData && TcbData.data.plannedPickUp.Logisticlocation.postalCode,
    province:TcbData && TcbData.data.plannedPickUp.Logisticlocation.postalCode,
    state:TcbData && TcbData.data.plannedPickUp.Logisticlocation.state,
    streetAddressOne:TcbData && TcbData.data.plannedPickUp.Logisticlocation.streetAddressOne,
    streetAddressTwo:TcbData && TcbData.data.plannedPickUp.Logisticlocation.streetAddressTwo,
    streetAddressThree:TcbData && TcbData.data.plannedPickUp.Logisticlocation.streetAddressThree,
    latitude:TcbData && TcbData.data.plannedPickUp.Logisticlocation.latitude,
    longitutue:TcbData && TcbData.data.plannedPickUp.Logisticlocation.longitude,

    contactType:TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact.contactTypeCode.Name,
    personeName:TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact.personName,
    depormentName:TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact.departmentName,
    jobTitle:TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact.jobTitle,
    // responsibility:TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact.responsibility.Name,
    // responsibility:'',
    communicationChannelCode:TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact.communicationChannelCode.Name,
    // communicationChannelCode:'',
    communicationValue:TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact.communicationValue,
    communicationChannelName:TcbData && TcbData.data.plannedPickUp.Logisticlocation.contact.communicationChannelName,




          
      /// DropOffLocation

      // additionalLocationIdentificationDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.additionalLocationIdentification.Name,
      sublocationIdentificationDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.sublocationIdentification,
      locationNameDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.locationName,
      // locationSpecificInstructionsDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.locationSpecificInstructions.Name,
      uTCOffsetDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.utcOffset,
      cityNameDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.cityCode,
      countryDp:TcbData &&  TcbData.data.plannedDropOff.Logisticlocation.countryCode.Name,
      crossStreetDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.crossStreet,
      currencyOfPartyDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.currencyOfParty.Name,
      launguageOfthePartyDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.languageOfTheParty.Name,
      nameDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.name,
      postBoxNumberDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.pOBoxNumber,
      postalCodeDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.postalCode,
      provinceDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.postalCode,
      stateDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.state,
      streetAddressOneDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.streetAddressOne,
      streetAddressTwoDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.streetAddressTwo,
      streetAddressThreeDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.streetAddressThree,
      latitudeDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.latitude,
      longitutueDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.longitude,

      contactTypeDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact.contactTypeCode.Name,
      personeNameDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact.personName,
      depormentNameDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact.departmentName,
      jobTitleDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact.jobTitle,
      // responsibilityDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.responsibility.Name,
      // responsibilityDp:'',
      communicationChannelCodeDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact.communicationChannelCode.Name,
      // communicationChannelCodeDp:'',
      communicationValueDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact.communicationValue,
      communicationChannelNameDp:TcbData && TcbData.data.plannedDropOff.Logisticlocation.contact.communicationChannelName,

      //Cargo values

      cargoType :TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.cargoTypeCode.Name,
      // harmonizedSystemCode: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.harmonizedSystemCode.Name, 
      // cargoTypeDescription: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.cargoTypeDescription.Name, 
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
      totalPackageQuantityCodes: (isArray(totalPackageQuantity) && totalPackageQuantity[0].codeListVersion),
      totalItemQuantity: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalItemQuantity.Value, 
      // 
      totalItemQuantityCodes: (isArray(totalItemQuantity) && totalItemQuantity[0].codeListVersion), 
      packageTypeCode: TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.packageTypeCode.Name,
      totalPackageQuantityPT:TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalPackageQuantity,
      totalGrossWeightPT:TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossWeight.Value,
      totalGrossWeightPTCodes:(isArray(totalGrossWeight) && totalGrossWeight[0].codeListVersion),
      totalGrossVolumePT:TcbData && TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossVolume.Value,
      totalGrossVolumePTCodes:(isArray(totalGrossVolume) && totalGrossVolume[0].codeListVersion),  

      //PickupTime DD-MM-YYYY 
      // {`${TcbData &&  Moment(TcbData.data.plannedDropOff.LogisticEventPeriod.beginDate ).format("YYYY-MM-DD")}T${TcbData && TcbData.data.plannedDropOff.LogisticEventPeriod.beginTime}`}
      pickupStartTime: pickupUpTimeLocal,
      pickupEndTime: pickupUpTimeLoacalEnd,
      //Dropoff Time
      dropOffStartTime: DropOffTimeLocal,
      dropOffEndTime: DropOffTimeLoacalEnd,
	};

	///  newForm State
	const [TabenablePL, setTabenablePL] = useState(false);
	const [TabenablePickTime, setTabenablePickTime] = useState(false);
	const [TabenableDl, setTabenableDl] = useState(false);
	const [TabenableDropTime, setTabenableDropTime] = useState(false);
	const [TabenableCG, setTabenableCG] = useState(false);
	const [TabenableSp, setTabenableSp] = useState(false);
	// const [response, setResponse] = useState(null);

	const [navigate,setnavigate] = useState(false)
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
  const servicecategoryFn = (values)=>{
    return localData.tvbDta.transportServiceCategoryCodes.filter((item) => item.codeListVersion === values.servicecategory)
  }
  const serviceConditionTypeFn = (values)=>{
    return localData.tvbDta.transportServiceConditionTypeCodes.filter((item) => item.codeListVersion === values.serviceConditionType)
  }
  const serviceLevelFn = (values)=>{
    return localData.tvbDta.transportServiceLevelCodes.filter((item) => item.codeListVersion === values.serviceLevel)
  }

  //LoactionsDropandPickup
  const countryFn = (values)=>{
    return localData.tvbDta.CountryCodes.filter((item) => item.codeListVersion === values.country)
  }
  const currencyOfPartyFn = (values)=>{
    return localData.tvbDta.CurrencyOfPartyCodes.filter((item) => item.codeListVersion === values.currencyOfParty)
  }
  const languageOfthePartyFn = (values)=>{
    return localData.tvbDta.LanguageOfthePartyCodes.filter((item) => item.codeListVersion === values.launguageOftheParty)
  }
  const contactTypeFn = (values)=>{
    return localData.tvbDta.ContactTypeCodes.filter((item) => item.codeListVersion === values.contactType)
  }
  const communicationChannelCodeFn = (values)=>{
    return localData.tvbDta.commmunicationChannelCodes.filter((item) => item.communicationChannelName === values.communicationChannelCode)
  }

  //countryDpFn
  const countryDpFn = (values)=>{
    return localData.tvbDta.CountryCodes.filter((item) => item.codeListVersion === values.countryDp)
  }
  //currencyOfPartyDpFn
  const currencyOfPartyDpFn = (values)=>{
    return localData.tvbDta.CurrencyOfPartyCodes.filter((item) => item.codeListVersion === values.currencyOfPartyDp)
  }

  // languageOfthePartyDpFn
  const languageOfthePartyDpFn = (values)=>{
    return localData.tvbDta.LanguageOfthePartyCodes.filter((item) => item.codeListVersion === values.launguageOfthePartyDp)
  }
  //contactTypeDpFn
  const contactTypeDpFn = (values)=>{
    return localData.tvbDta.ContactTypeCodes.filter((item) => item.codeListVersion === values.contactTypeDp)
  }
  //communicationChannelCodeDpFn
  const communicationChannelCodeDpFn = (values)=>{
    return localData.tvbDta.commmunicationChannelCodes.filter((item) => item.communicationChannelName === values.communicationChannelCodeDp)
  }


  //****locations ****//

  //Cargo
  const CargoTypeCodesFn = (values)=>{
    return localData.tvbDta.CargoTypeCodes.filter((item) => item.codeListVersion === values.cargoType)
  }
  const HarmonizedSystemCodesFn = (values)=>{
    return localData.tvbDta.HarmonizedSystemCodes.filter((item) => item.codeListVersion === values.xyz)
  }
  const CargoTypeDescriptionCodesFn = (values)=>{
    return localData.tvbDta.CargoTypeDescriptionCodes.filter((item) => item.codeListVersion === values.xyz)
  }
  const CountryOfOriginCodesFn = (values)=>{
    return localData.tvbDta.CountryOfOriginCodes.filter((item) => item.codeListVersion === values.countryOfOriginCode)
  }
  const FinalDestinationCountryCodesFn = (values)=>{
    return localData.tvbDta.FinalDestinationCountryCodes.filter((item) => item.codeListVersion === values.finalDestinationCountry)
  }
  const measurementtypesCodesTGVFn = (values)=>{
    return localData.tvbDta.measurementtypesCodes.filter((item) => item.codeListVersion === values.totalGrossVolumeCodes)
  }
  const totalGrossWeightCodesTGWFn = (values)=>{
    return localData.tvbDta.measurementtypesCodes.filter((item) => item.codeListVersion === values.totalGrossWeightCodes)
  }

  // totalTransportNetWeightCodesFn
  const totalTransportNetWeightCodesFn = (values)=>{
    return localData.tvbDta.measurementtypesCodes.filter((item) => item.codeListVersion === values.totalTransportNetWeightCodes)
  }
  // totalChargeableWeightCodesFn
  const totalChargeableWeightCodesFn = (values)=>{
    return localData.tvbDta.measurementtypesCodes.filter((item) => item.codeListVersion === values.totalChargeableWeightCodes)
  }
  // declaredWeightForCustomsCodesFn
  const declaredWeightForCustomsCodesFn = (values)=>{
    return localData.tvbDta.measurementtypesCodes.filter((item) => item.codeListVersion === values.declaredWeightForCustomsCodes)
  }
  // totalLoadingLengthCodesFn
  const totalLoadingLengthCodesFn = (values)=>{
    return localData.tvbDta.measurementtypesCodes.filter((item) => item.codeListVersion === values.totalLoadingLengthCodes)
  }
  // totalGrossWeightPTCodesFn
  const totalGrossWeightPTCodesFn = (values)=>{
    return localData.tvbDta.measurementtypesCodes.filter((item) => item.codeListVersion === values.totalGrossWeightPTCodes)
  }
  // totalGrossVolumePTCodesFn
  const totalGrossVolumePTCodesFn = (values)=>{
    return localData.tvbDta.measurementtypesCodes.filter((item) => item.codeListVersion === values.totalGrossVolumePTCodes)
  }


 // associatedInvoiceAmountCodesFn
  const associatedInvoiceAmountCodesFn = (values)=>{
    return localData.tvbDta.amounttypesCodes.filter((item) => item.codeListVersion === values.associatedInvoiceAmountCodes)
  }
  // declaredValueForCustomsCodesFn
  const declaredValueForCustomsCodesFn = (values)=>{
    return localData.tvbDta.amounttypesCodes.filter((item) => item.codeListVersion === values.declaredValueForCustomsCodes)
  }
  // totalPackageQuantityCodesFn
  const totalPackageQuantityCodesFn = (values)=>{
    return localData.tvbDta.quantitytypesCodes.filter((item) => item.codeListVersion === values.totalPackageQuantityCodes)
  }
  // totalItemQuantityCodesFn
  const totalItemQuantityCodesFn = (values)=>{
    return localData.tvbDta.quantitytypesCodes.filter((item) => item.codeListVersion === values.totalItemQuantityCodes)
  }
  // packageTypeCodeFn
  const packageTypeCodeFn = (values)=>{
    return localData.tvbDta.PackageTypeCodes.filter((item) => item.codeListVersion === values.packageTypeCode)
  }
  // const TotalpackagequantitysCodesFn = (values)=>{
  //   return localData.tvbDta.TotalpackagequantitysCodes.filter((item) => item.codeListVersion === values.xyz)
  // 

  //Cargo
  useEffect(()=>{

    if(navigate){
      setTimeout( ()=> {
        // navigateToHome()
        console.log("navigateToHome()")
      },1000)

    }
 },[navigate])
   



  const navigateToHome = ()=>{
    history.push('/home')
}

  useEffect(()=>{
    if(tcbFinalData){
      getApiCall()
      
    }
  },[tcbFinalData])

  const getApiCall =  ()=>{
    const SchemaObj = {
         
        ServiceDetailsData: {
              servicecategoryCode: tcbFinalData.servicecategory,
              serviceConditionTypeCode: tcbFinalData.serviceConditionType,
              serviceLevelCode: tcbFinalData.serviceLevel
        },
        PickUpLocationData:{
              additionalLocationIdentificationCode: "6066bc8ff225027765a0a67f",
              sublocationIdentification: tcbFinalData.sublocationIdentification,
              locationName: tcbFinalData.locationName,
              locationSpecificInstructionsCode: "6066bd5e9db55078bf0d00f1",
              uTCOffset: tcbFinalData.uTCOffset,
              cityName: tcbFinalData.cityName,
              countryCode: tcbFinalData.country,
              crossStreet: tcbFinalData.crossStreet,
              currencyOfPartyCode: tcbFinalData.currencyOfParty,
              languageOfthePartyCode: tcbFinalData.launguageOftheParty,
              name: tcbFinalData.name,
              postBoxNumber: tcbFinalData.postBoxNumber,
              postalCode: tcbFinalData.postalCode,
              provinceCode: tcbFinalData.province,
              state: tcbFinalData.state,
              streetAddressOne: tcbFinalData.streetAddressOne,
              streetAddressTwo: tcbFinalData.streetAddressTwo,
              streetAddressThree: tcbFinalData.streetAddressThree,
              latitude: tcbFinalData.latitude,
              longitude: tcbFinalData.longitutue,
              contactTypeCode: tcbFinalData.contactType,
              personName: tcbFinalData.personeName,
              departmentName: tcbFinalData.depormentName,
              jobTitle: tcbFinalData.jobTitle,
              responsibility: "606604c84e9e6d6253b5bfb6",
              communicationChannelCode: tcbFinalData.communicationChannelCode,
              communicationValue: tcbFinalData.communicationValue,
              communicationChannelName: tcbFinalData.communicationChannelName,
              contactId: TcbData.data.plannedPickUp.Logisticlocation.contact._id,
              logisticLocationId:TcbData.data.plannedPickUp.Logisticlocation._id
        },
        PickUpTime:{
              pickupStartDate: Moment(tcbFinalData.pickupStartTime).format("YYYY-MM-DD") ,
              pickupStartTime: Moment(tcbFinalData.pickupStartTime).format("HH:MM"),
              pickupEndDate:Moment(tcbFinalData.pickupEndTime).format("YYYY-MM-DD") ,
              pickupEndTime: Moment(tcbFinalData.pickupEndTime).format("HH:MM"),
              id: TcbData.data.plannedPickUp.LogisticEventPeriod._id
        },
        DropOffLocation:{
          additionalLocationIdentificationCode: "6066bc8ff225027765a0a67f",
          sublocationIdentification: tcbFinalData.sublocationIdentificationDp,
          locationName: tcbFinalData.locationNameDp,
          locationSpecificInstructionsCode: "6066bd5e9db55078bf0d00f1",
          uTCOffset: tcbFinalData.uTCOffsetDp,
          cityName: tcbFinalData.cityNameDp,
          countryCode: tcbFinalData.countryDp,
          crossStreet: tcbFinalData.crossStreetDp,
          currencyOfPartyCode: tcbFinalData.currencyOfPartyDp,
          languageOfthePartyCode: tcbFinalData.launguageOfthePartyDp,
          name: tcbFinalData.nameDp,
          postBoxNumber: tcbFinalData.postBoxNumberDp,
          postalCode: tcbFinalData.postalCodeDp,
          provinceCode: tcbFinalData.provinceDp,
          state: tcbFinalData.stateDp,
          streetAddressOne: tcbFinalData.streetAddressOneDp,
          streetAddressTwo: tcbFinalData.streetAddressTwoDp,
          streetAddressThree: tcbFinalData.streetAddressThreeDp,
          latitude: tcbFinalData.latitudeDp,
          longitude: tcbFinalData.longitutueDp,
          // longitude:1231321,
          contactTypeCode: tcbFinalData.contactTypeDp,
          personName: tcbFinalData.personeNameDp,
          departmentName: tcbFinalData.depormentNameDp,
          jobTitle: tcbFinalData.jobTitleDp,
          responsibility: "606604c84e9e6d6253b5bfb6",
          communicationChannelCode: tcbFinalData.communicationChannelCodeDp,
          communicationValue: tcbFinalData.communicationValueDp,
          communicationChannelName: tcbFinalData.communicationChannelNameDp,
          contactId: TcbData.data.plannedDropOff.Logisticlocation.contact._id,
          logisticLocationId:TcbData.data.plannedDropOff.Logisticlocation._id
    },
        DropOffTime:{
              dropOffStartDate:  Moment(tcbFinalData.dropOffStartTime).format("YYYY-MM-DD") ,
              dropOffStartTime:  Moment(tcbFinalData.dropOffStartTime).format("HH:MM"),
              dropOffEndDate:  Moment( tcbFinalData.dropOffEndTime).format("YYYY-MM-DD") ,
              dropOffEndTime:   Moment( tcbFinalData.dropOffEndTime).format("HH:MM"),
              id: TcbData.data.plannedDropOff.LogisticEventPeriod._id
        },
        SpaceRequirements:{ 
          cargoTypeCode: tcbFinalData.cargoType,
          harmonizedSystemCode: "6065e82e97b3245cabbd0452",
          cargoTypeDescriptionCode: "6065e87c97b3245cabbd0456",
          countryOfOriginCode: tcbFinalData.countryOfOriginCode,
          finalDestinationCountryCode: tcbFinalData.finalDestinationCountry,
          totalGrossVolume: tcbFinalData.totalGrossVolume,
          totalGrossVolumeUnits: tcbFinalData.totalGrossVolumeCodes,
          totalGrossWeight: tcbFinalData.totalGrossWeight,
          totalGrossWeightUnits: tcbFinalData.totalGrossWeightCodes,
          totalTransportNetWeight: tcbFinalData.totalTransportNetWeight,
          totalTransportNetWeightUnits: tcbFinalData.totalTransportNetWeightCodes,
          totalChargeableWeight: tcbFinalData.totalChargeableWeight,
          totalChargeableWeightUnits: tcbFinalData.totalChargeableWeightCodes,
          declaredWeightForCustoms: tcbFinalData.declaredWeightForCustoms,
          declaredWeightForCustomsUnits: tcbFinalData.declaredWeightForCustomsCodes,
          totalLoadingLength: tcbFinalData.totalLoadingLength,
          totalLoadingLengthUnits: tcbFinalData.totalLoadingLengthCodes,
          associatedInvoiceAmount: tcbFinalData.associatedInvoiceAmount,
          associatedInvoiceAmountUnits: tcbFinalData.associatedInvoiceAmountCodes,
          declaredValueForCustoms: tcbFinalData.declaredValueForCustoms,
          declaredValueForCustomsUnits: tcbFinalData.declaredValueForCustomsCodes,
          totalPackageQuantity: tcbFinalData.totalPackageQuantity,
          totalPackageQuantityUnits: tcbFinalData.totalPackageQuantityCodes,
          totalItemQuantity: tcbFinalData.totalItemQuantity,
          totalItemQuantityUnits: tcbFinalData.totalItemQuantityCodes,
          packageTypeCode: tcbFinalData.packageTypeCode,
          totalPackageQuantityPT: tcbFinalData.totalPackageQuantityPT,
          totalGrossWeightPT: tcbFinalData.totalGrossWeightPT,
          totalGrossWeightPTUnits: tcbFinalData.totalGrossWeightPTCodes,
          totalGrossVolumePT: tcbFinalData.totalGrossVolumePT,
          totalGrossVolumePTUnits: tcbFinalData.totalGrossVolumePTCodes,
          packagetotaltypeId: TcbData.data.transportCapacityBookingSpaceRequirements.Packagetotaltypes._id,
          transportcargocharacteristicstypeId: TcbData.data.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes._id
        },
        _id:TcbData.data._id

    }
    console.log(SchemaObj.PickUpTime.pickupStartTime,"local time")
    console.log(SchemaObj,"SchemaObj && getApiCall")
    console.log(tcbFinalData,"tcbFinalData ")
  
    saveTransportcapacitybooking(SchemaObj).then(
       res => { 
        setSuccess(res.status)
        setLoading(false)
        setnavigate(true)
         console.log(res.status,"response")
        } ).catch(err => {
          // setResponse(err)
          setError(true)
          setLoading(false)
          console.log(err.status,"Error while updateing Orderid")
        })
      
  }
  { Success && Swal.fire("Good Job","SuccessFully Update the Order Details !!","success").then((result) => {
    if (result.isConfirmed) {
      navigateToHome()
    }
  })}
   {Error1  && Swal.fire('Oops...', 'Something went wrong!', 'error')}
    
  // {Loading && count === 0 && Swal.fire( Swal.showLoading(),{
  //   icon:'success',
  //   title: '....Loading please wait !',
  //   showConfirmButton: false,
  //   timer: 700
  // })} 
  //  { Loading &&count === 0 &&  Swal.showLoading()}

 
	return (
		<div>
        
              {/* {( Loading && count === 0 ) ? (
            // Swal.fire({title: 'Loading Order Details ....  !'})
            Swal.showLoading()
          ): (
            // Swal.fire({title: 'Loaded success...'})
            Swal.hideLoading()
          )} */}

         {/* {Loading && <Alert bgcolor="bgBlue" >  Please wait updating.... </Alert> } */}
         {/* { Error1 === 400 && <Alert bgcolor="bgRed" > Update is Failed !!!! </Alert>} */}
         {/* { Success === 200 && <Alert bgcolor="bgBlue" >  SuccessFully Update the Order Details !! </Alert>} */}
       

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
										initialValues={FormValues || initialValues} 
										enableReinitialize
										// validationSchema={validationSchema}
										onSubmit={(values) => {
                      const servicecategory = servicecategoryFn(values)
                      const serviceConditionType = serviceConditionTypeFn(values)
                      const serviceLevel =serviceLevelFn(values)
                      
                      const country = countryFn(values)
                      const currencyOfParty = currencyOfPartyFn(values)
                      const languageOftheParty = languageOfthePartyFn(values)
                      const contactType = contactTypeFn(values)
                      const communicationChannelCode =communicationChannelCodeFn(values)

                     const countryDp = countryDpFn(values)
                     const currencyOfPartyDp= currencyOfPartyDpFn(values)
                      const languageOfthePartyDp = languageOfthePartyDpFn(values)
                     const contactTypeDp =contactTypeDpFn(values)
                     const communicationChannelCodeDp =communicationChannelCodeDpFn(values)

                       const CargoTypeCodes = CargoTypeCodesFn(values)
                      //  const HarmonizedSystemCodes = HarmonizedSystemCodesFn(values)
                      //  const CargoTypeDescriptionCodes = CargoTypeDescriptionCodesFn(values)
                      const CountryOfOriginCodes =CountryOfOriginCodesFn(values)
                      const FinalDestinationCountryCodes =FinalDestinationCountryCodesFn(values)
                      const measurementtypesCodesTGV = measurementtypesCodesTGVFn(values)
                      const totalGrossWeightCodesTGW = totalGrossWeightCodesTGWFn(values)
                      const totalTransportNetWeightCodes =totalTransportNetWeightCodesFn(values)
                      const totalChargeableWeightCodes = totalChargeableWeightCodesFn(values)
                      const declaredWeightForCustomsCodes = declaredWeightForCustomsCodesFn(values)
                      const totalLoadingLengthCodes = totalLoadingLengthCodesFn(values)

                      const totalGrossWeightPTCodes = totalGrossWeightPTCodesFn(values)
                      const totalGrossVolumePTCodes = totalGrossVolumePTCodesFn(values)

                      const associatedInvoiceAmountCodes = associatedInvoiceAmountCodesFn(values)
                      const declaredValueForCustomsCodes = declaredValueForCustomsCodesFn(values)

                      const totalPackageQuantityCodes = totalPackageQuantityCodesFn(values)
                      const totalItemQuantityCodes = totalItemQuantityCodesFn(values)
                      const packageTypeCode = packageTypeCodeFn(values)


                      // const amounttypesCodes = amounttypesCodesFn(values)
                      // const quantitytypesCodes = quantitytypesCodesFn(values)
                      // const PackageTypeCodes = PackageTypeCodesFn(values)
                      // const TotalpackagequantitysCodes = TotalpackagequantitysCodesFn(values)


                        
                      settcbFinalData({...values,
                        servicecategory : servicecategory[0]._id ,
                        serviceConditionType : serviceConditionType[0]._id,
                        serviceLevel : serviceLevel[0]._id,
                        country: country[0]._id,
                        currencyOfParty: currencyOfParty[0]._id,
                        launguageOftheParty: languageOftheParty[0]._id,
                        contactType: contactType[0]._id,
                        communicationChannelCode: communicationChannelCode[0]._id, 
                        countryDp: countryDp[0]._id,
                        currencyOfPartyDp: currencyOfPartyDp[0]._id,
                        launguageOfthePartyDp:languageOfthePartyDp[0]._id,
                        contactTypeDp: contactTypeDp[0]._id,
                        communicationChannelCodeDp: communicationChannelCodeDp[0]._id,

                        cargoType:CargoTypeCodes[0]._id,
                        countryOfOriginCode :CountryOfOriginCodes[0]._id,
                        finalDestinationCountry:FinalDestinationCountryCodes[0]._id,

                        totalGrossVolumeCodes:measurementtypesCodesTGV[0]._id,
                        totalGrossWeightCodes:totalGrossWeightCodesTGW[0]._id,
                        totalTransportNetWeightCodes:totalTransportNetWeightCodes[0]._id,
                        totalChargeableWeightCodes:totalChargeableWeightCodes[0]._id,
                        declaredWeightForCustomsCodes:declaredWeightForCustomsCodes[0]._id,
                        totalLoadingLengthCodes:totalLoadingLengthCodes[0]._id,

                        totalGrossWeightPTCodes:totalGrossWeightPTCodes[0]._id,
                        totalGrossVolumePTCodes:totalGrossVolumePTCodes[0]._id,
                        
                        associatedInvoiceAmountCodes:associatedInvoiceAmountCodes[0]._id,
                        declaredValueForCustomsCodes: declaredValueForCustomsCodes[0]._id,

                        totalPackageQuantityCodes: totalPackageQuantityCodes[0]._id,
                        totalItemQuantityCodes: totalItemQuantityCodes[0]._id,

                        packageTypeCode :packageTypeCode[0]._id




                      })
                      // settcbFinalData(values)
                      // getCallAbc()
                      // getApiCall()
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
                              selectedId = {TcbData && TcbData.data.transportServiceCategoryCode.Id}
                              selectedName = {TcbData && TcbData.data.transportServiceCategoryCode.Name}
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
                              selectedId = {TcbData && TcbData.data.transportServiceConditionTypeCode.Id}
                              selectedName = {TcbData && TcbData.data.transportServiceConditionTypeCode.Name}
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
                              selectedId = {TcbData && TcbData.data.transportServiceLevelCode.Id}
                              selectedName = {TcbData && TcbData.data.transportServiceLevelCode.Name}
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
                                                {/* <CCol md="4">
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
                                                </CCol> */}
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
                                                {/* <CCol md="4">
                                                    <FormicControl
                                                        control="selectedit"
                                                        label="Location Specific Instructions"
                                                        id="LocationSpecificInstructions"
                                                        name="locationSpecificInstructions"
                                                        // options={LocationSpecificInstructions}
                                                        options={localData.tvbDta.LocationSpecificInstructionsCodes}
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
                                                            {/* <CCol md="4">
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
                                                            </CCol> */}
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
                                       	<CRow className="justify-content-center" style={{padding:"1rem"}}>
                                          <CCol md="12">
                                            <div className="card-title mt-3">Time Band</div>
                                          </CCol>

                                          <CCol md="6">
                                            <FormicControl
                                              label="Starts at"
                                              control="input"
                                              type="datetime-local"
                                              id="pickupStartTime"
                                              name="pickupStartTime"
                                              isRequired="true"
                                            />
                                          </CCol>
                                            <CCol md="6">
                                              <FormicControl
                                                label="Ends at"
                                                control="input"
                                                type="datetime-local"
                                                id="pickupEndTime"
                                                name="pickupEndTime"
                                                isRequired="true"
                                              />
                                            </CCol>
                                        
                                          </CRow>

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
                                                {/* <CCol md="4">
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
                                                </CCol> */}
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
                                                {/* <CCol md="4">
                                                    <FormicControl
                                                        control="selectedit"
                                                        label="Location Specific Instructions"
                                                        id="LocationSpecificInstructions"
                                                        name="locationSpecificInstructionsDp"
                                                        // options={LocationSpecificInstructions}
                                                        options={localData.tvbDta.LocationSpecificInstructionsCodes}
                                                        isRequired="true"
                                                    />
                                                </CCol> */}
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
                                                        label="Postal Code"
                                                        id="PostalCode"
                                                        name="postalCodeDp"
                                                        isRequired="true"
                                                        // options={dropDownOtions}
                                                    />
                                                </CCol>
                                                <CCol md="4">
                                                    <FormicControl
                                                        control="selectedit"
                                                        label="Country"
                                                        id="countryDp"
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
                                                        label="City"
                                                        id="CityName"
                                                        name="cityNameDp"
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
                                                
                                            </CRow>
                                            <CRow>
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
                                                            {/* <CCol md="4">
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
                                                            </CCol> */}
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
                                  <CCollapse show={true}>
                                  <CRow className="justify-content-center" style={{padding:"1rem"}}>
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
                                      />
                                    </CCol>
                                  </CRow>

                                  </CCollapse>

                             </CCard>

                            
                            {/* 6666666 cargo TCB */}
                            
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
                                <CCardBody>
                                <div className="card-title my-2">Cargo Characteristics</div>
                                        <CRow>
                                          <CCol md="6">
                                          {/* options={CargoType}  */}
                                              <FormicControl  control='selectedit' isRequired="true" label='Cargo Type' id='cargoTypeCode' name='cargoType'  options={localData.tvbDta.CargoTypeCodes} /> 
                                          </CCol>
                                          {/* <CCol md="6">
                    
                                              <FormicControl  control='selectedit' isRequired="true" label='Harmonized System' id='harmonizedSystemCode' name='harmonizedSystemCode' options={localData.tvbDta.HarmonizedSystemCodes}   />
                                            
                                          </CCol> */}
                                          {/* <CCol md="6">
                                          

                                            <FormicControl control='selectedit' isRequired="true" label='Cargo Type Description' id='cargoTypeDescription' name='cargoTypeDescription' options={localData.tvbDta.CargoTypeDescriptionCodes}  />
                                          
                                          </CCol> */}
                                          <CCol md="3">
                                          
                                            <FormicControl control='selectedit' isRequired="true" label='Country Of Origin' id='countryOfOriginCode' name='countryOfOriginCode' options={localData.tvbDta.CountryOfOriginCodes}  />
                                          </CCol>
                                          <CCol md="3">
                                          
                                            <FormicControl control='selectedit' isRequired="true" label='Final Destination Country' id='finalDestinationCountry' name='finalDestinationCountry' options={localData.tvbDta.FinalDestinationCountryCodes} />
                                          </CCol>

                                          <CCol md="6">
                                            
                                            <CInputGroup  style={{marginTop:"0.7rem",display:"flex"}}>
                                            <FormicControl label="Total Gross Volume"  control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} isRequired="true"  placeholder="Enter here..." id='totalGrossVolume' name='totalGrossVolume' />

                                              <div className="VolumeCodes">
                                                  <FormicControl control='selectedit' style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}  id='totalGrossVolumeCodes' name='totalGrossVolumeCodes' options={localData.tvbDta.measurementtypesCodes} /> 
                                              </div>
                                            </CInputGroup>
                                            
                                          </CCol>
                                          <CCol md="6">
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl  control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} label='Total Gross Weight' isRequired="true"  placeholder="Enter here..." id='totalGrossWeight' name='totalGrossWeight' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit' style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}   id='totalGrossWeightCodes' name='totalGrossWeightCodes' options={localData.tvbDta.measurementtypesCodes}  />

                                                </div>
                                              </CInputGroup>
                                            </CCol>

                                          <CCol md="6">
                                          
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} isRequired="true" label="Total Transport Net Weight"   placeholder="Enter here..." id='totalTransportNetWeight' name='totalTransportNetWeight' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit' style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}  id='totalTransportNetWeightCodes' name='totalTransportNetWeightCodes' options={localData.tvbDta.measurementtypesCodes}  />
                                                  
                                                </div>
                                              </CInputGroup>
                                          </CCol>


                                          <CCol md="6">

                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} isRequired="true" label="Total Chargeable Weight"  placeholder="Enter here..." id='totalChargeableWeight' name='totalChargeableWeight' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit' style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}  id='totalChargeableWeightCodes' name='totalChargeableWeightCodes' options={localData.tvbDta.measurementtypesCodes}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                          
                                              
                                          </CCol>
                                          <CCol md="6">
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} label="Declared Weight For Customs" isRequired="true"  placeholder="Enter here..." id='declaredWeightForCustoms' name='declaredWeightForCustoms' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit' style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}   id='declaredWeightForCustomsCodes' name='declaredWeightForCustomsCodes' options={localData.tvbDta.measurementtypesCodes}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                            
                                          </CCol>
                                          <CCol md="6">
                                          
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} isRequired="true" label="Total Loading Length"   placeholder="Enter here..." id='totalLoadingLength' name='totalLoadingLength' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit' style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}  id='totalLoadingLengthCodes' name='totalLoadingLengthCodes' options={localData.tvbDta.measurementtypesCodes}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                          
                                          </CCol>
                                          <CCol md="6">
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}}  isRequired="true" label="Associated Invoice Amount" placeholder="Enter here..." id='associatedInvoiceAmount' name='associatedInvoiceAmount' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit' style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}  id='associatedInvoiceAmountCodes' name='associatedInvoiceAmountCodes' options={localData.tvbDta.amounttypesCodes}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                            
                                          </CCol>
                                          <CCol md="6">
                                            
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} isRequired="true" label="Declared Value For Customs"  placeholder="Enter here..." id='declaredValueForCustoms' name='declaredValueForCustoms' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit' style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}  id='declaredValueForCustomsCodes' name='declaredValueForCustomsCodes' options={localData.tvbDta.amounttypesCodes}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                            
                                          </CCol>
                                          <CCol md="6">
                                        
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} isRequired="true" label="Total Package Quantity"  placeholder="Enter here..." id='totalPackageQuantity' name='totalPackageQuantity' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit' style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}  id='totalPackageQuantityCodes' name='totalPackageQuantityCodes' options={localData.tvbDta.quantitytypesCodes}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                          
                                          </CCol>
                                          <CCol md="6">
                                          
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} isRequired="true" label="Total Item Quantity" placeholder="Enter here..." id='totalItemQuantity' name='totalItemQuantity' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit' style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}  id='totalItemQuantityCodes' name='totalItemQuantityCodes' options={localData.tvbDta.quantitytypesCodes}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                            
                                          </CCol>
                                        </CRow>

                                        <div className="card-title my-2">Package Total</div>
                                      
                                        <CRow>
                                          <CCol md="6">
                                            <FormicControl control='selectedit'  isRequired="true" label='Package Type' id='packageTypeCode' name='packageTypeCode' options={localData.tvbDta.PackageTypeCodes}  />
                                          </CCol>
                                          <CCol md="6">
                                            <FormicControl control='input' isRequired="true" label='Total Package Quantity' id='totalPackageQuantityPT' name='totalPackageQuantityPT'  />
                                          </CCol>
                                          <CCol md="6">
                                          
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} isRequired="true" label="Total Gross Weight" placeholder="Enter here..." id='totalGrossWeightPT' name='totalGrossWeightPT' />
                                                <div className="VolumeCodes">
                                                <FormicControl control='selectedit' style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}   id='totalGrossWeightPTCodes' name='totalGrossWeightPTCodes' options={localData.tvbDta.measurementtypesCodes}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                          
                                          </CCol>
                                          <CCol md="6">
                                      
                                              <CInputGroup  style={{marginTop:"0.7rem"}}>
                                                <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} isRequired="true" label="Total Gross Volume" placeholder="Enter here..." id='totalGrossVolumePT' name='totalGrossVolumePT' />
                                                <div className="VolumeCodes">
                                                  <FormicControl control='selectedit' style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}  id='totalGrossVolumePTCodes' name='totalGrossVolumePTCodes' options={localData.tvbDta.measurementtypesCodes}  />
                                                  
                                                  </div>
                                              </CInputGroup>
                                          
                                          </CCol>
                                        </CRow>
                                    

                                  
                                </CCardBody>
                              
                              </CCollapse>
                           </CCard>
                           <div className="finalSubmition">
                            <button
                                type="submit"
                                className="finalSubmition__btn"
                                color="primary"
                                style={{ margin: "1rem" }}
                                // disabled={!formik.dirty && formik.errors}
                              >
                                Submit Changes
                              </button>
                              </div>

											</Form>
										)}
									</Formik>
								</CCardBody>
							</CCollapse>
						</CCard>
	
            {/* <button onClick={getCallAbc}>getCallAbc</button> */}

						{/* Form Ends here */}
            <div className="finalSubmition">
							{/* <button
								disabled={!TabenableSp}
								className="finalSubmition__btn  disabled"
								onClick={() => {}}
							>
								Update Order
							</button> */}
						</div>
					</CContainer>
				</div>
			</div>
		</div>
	);
}

export default TransportcapacitybookingEdit;
