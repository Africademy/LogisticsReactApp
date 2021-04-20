/* eslint-disable no-lone-blocks */
import {} from "./transportcapacitybookingForm.css";
import {
  CAlert,
  CCard,
  CCardHeader,
  CCollapse,
  CContainer,
  CPopover,
  
} from "@coreui/react";
// import CIcon from "@coreui/icons-react";
import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux'
import Moment from "moment";

// import TCBPlannedPickUp from "./TCBPlannedPickUp";
// import TCBPlannedDropOff from "./TCBDropOffTime";
import { IconContext } from "react-icons";
import TCBOrderDetails from "./TCBOrderDetails";
import { AiOutlineRight,AiOutlineDown ,AiOutlineCheck} from "react-icons/ai";
import Alert from "../../utils/Alert/Alert";
import TCBPickUpLocation from "./TCBPickUpLocation";
import TCBDropOffLocation from "./TCBDropOffLocation";
import TCBPIckUPTime from "./TCBPIckUPTime";
import TCBDropOffTime from "./TCBDropOffTime";
import CargoCharacteristicsForm from "./TCBCargoCharacteristicsform";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";
import { getTransportservicelevelcodes } from "../../services/transportservicelevelcodeService";
import { getTransportserviceconditiontypecodes } from "../../services/transportserviceconditiontypecodeService";
import { getTransportservicecategorycodes } from "../../services/transportservicecategorycodeService";
import { saveTransportcapacitybooking } from "../../services/transportcapacitybookingService";
import { useHistory } from "react-router";
import {useDispatch} from 'react-redux'




const createTransportcapacitybooking =() => {
  const history = useHistory()
  // const dispatch = useDispatch()

  const [navigate,setnavigate] = useState(false)
  const [ServiceDetails,setServiceDetails] = useState(false)
  const [PickUpLocation,setPickUpLocation] = useState(false)
  const [pickUPTime,setpickUPTime] = useState(false)
  const [DropOffLocation,setDropOffLocation] = useState(false)
  const [DropOffTime,setDropOffTime] = useState(false)
  const [collapseSpecialRequirements,setcollapseSpecialRequirements] =useState(false)

  const data = useSelector((state)=> state.tvbDta)

 
  useEffect(()=>{
     getReduxData()
     if(navigate){
       setTimeout( ()=> {
         navigateToHome()
         console.log("navigateToHome()")
       },1000)

     }
  },[data,navigate])
  


  const [TabenablePL,setTabenablePL] = useState(false)
  const [TabenablePickTime,setTabenablePickTime] = useState(false)
  const [TabenableDl,setTabenableDl] = useState(false)
  const [TabenableDropTime,setTabenableDropTime] = useState(false)
  const [TabenableCG,setTabenableCG] = useState(false)
  const [TabenableSp,setTabenableSp] = useState(false)
  const [response,setresponse] = useState (null)
  const [Error,setError] = useState(null)

  //Order Details
  const [transportServiceCategoryCodes,settransportServiceCategoryCodes]= useState([])
  const [transportServiceConditionTypeCodes,settransportServiceConditionTypeCodes]= useState([])
  const [transportServiceLevelCodes,settransportServiceLevelCodes]= useState([])
  
  const navigateToHome = ()=>{
      history.push('/home')
  }

  useEffect(()=>{

    populatetransportServiceCategoryCodes()
    populatetransportServiceConditionTypeCodes()
    populatetransportServiceLevelCodes()
  },[])
 

  const populatetransportServiceCategoryCodes = async () =>{
    const {
      data: transportServiceCategoryCodes,
    } = await getTransportservicecategorycodes();
  
    settransportServiceCategoryCodes(transportServiceCategoryCodes)
  }

  const populatetransportServiceConditionTypeCodes = async () => {
    const {
      data: transportServiceConditionTypeCodes,
    } = await getTransportserviceconditiontypecodes();
  
    settransportServiceConditionTypeCodes(transportServiceConditionTypeCodes)
  }

  const populatetransportServiceLevelCodes = async () =>{
    const { data: transportServiceLevelCodes } = await getTransportservicelevelcodes();
    settransportServiceLevelCodes(transportServiceLevelCodes)
  }

 

  const getReduxData = () =>{
    console.log(data," Effect running fecth redux Data")

  }
  

    const handleSubmit =()=>{
      
      const schemaObj = {
        ServiceDetailsData: {
            servicecategoryCode:data.ServiceDetailsData && data.ServiceDetailsData.servicecategory ,
            serviceConditionTypeCode: data.ServiceDetailsData &&  data.ServiceDetailsData.serviceConditionType,
            serviceLevelCode: data.ServiceDetailsData && data.ServiceDetailsData.serviceLevel
        },
        PickUpLocationData: {
            additionalLocationIdentificationCode: data.PickUpLocationData && data.PickUpLocationData.additionalLocationIdentification,
            sublocationIdentification:data.PickUpLocationData && data.PickUpLocationData.sublocationIdentification ,
            locationName: data.PickUpLocationData && data.PickUpLocationData.locationName,
            locationSpecificInstructionsCode: data.PickUpLocationData && data.PickUpLocationData.locationSpecificInstructions,
            uTCOffset:data.PickUpLocationData && data.PickUpLocationData.uTCOffset ,
            cityName:data.PickUpLocationData && data.PickUpLocationData.cityName ,
            countryCode: data.PickUpLocationData && data.PickUpLocationData.country,
            crossStreet:data.PickUpLocationData && data.PickUpLocationData.crossStreet,
            currencyOfPartyCode: data.PickUpLocationData && data.PickUpLocationData.currencyOfParty,
            languageOfthePartyCode: data.PickUpLocationData && data.PickUpLocationData.launguageOftheParty,
            name:data.PickUpLocationData && data.PickUpLocationData.name ,
            postBoxNumber: data.PickUpLocationData && data.PickUpLocationData.postBoxNumber,
            postalCode:data.PickUpLocationData &&  data.PickUpLocationData.postalCode,
            provinceCode: data.PickUpLocationData &&data.PickUpLocationData.province ,
            state: data.PickUpLocationData && data.PickUpLocationData.state,
            streetAddressOne:data.PickUpLocationData &&  data.PickUpLocationData.streetAddressOne,
            streetAddressTwo: data.PickUpLocationData && data.PickUpLocationData.streetAddressTwo,
            streetAddressThree:data.PickUpLocationData &&  data.PickUpLocationData.streetAddressThree,
            latitude: data.PickUpLocationData && data.PickUpLocationData.latitude,
            longitutue:data.PickUpLocationData && data.PickUpLocationData.longitutue,
            contactTypeCode: data.PickUpLocationData && data.PickUpLocationData.contactType,
            personName:data.PickUpLocationData && data.PickUpLocationData.personeName,
            departmentName:data.PickUpLocationData && data.PickUpLocationData.depormentName ,
            jobTitle:data.PickUpLocationData && data.PickUpLocationData.jobTitle ,
            responsibility: data.PickUpLocationData && data.PickUpLocationData.responsibility,
            communicationChannelCode: data.PickUpLocationData && data.PickUpLocationData.communicationChannelCode,
            communicationValue: data.PickUpLocationData && data.PickUpLocationData.communicationValue,
            communicationChannelName: data.PickUpLocationData && data.PickUpLocationData.communicationChannelName
        },
        PickUpTime: {
            // pickupStartDate: "2021-04-10",
            // pickupStartTime:" 17:58",
            // pickupEndDate: "2021-04-10",
            // pickupEndTime:" 19:58"
            
            pickupStartDate: data.PickUpTime && Moment(data.PickUpTime.pickupStartTime).format("YYYY-MM-DD"),
            pickupStartTime:data.PickUpTime && Moment(data.PickUpTime.pickupStartTime).format("hh:mm"),
            pickupEndDate: data.PickUpTime && Moment(data.PickUpTime.pickupEndTime).format("YYYY-MM-DD"),
            pickupEndTime: data.PickUpTime &&  Moment(data.PickUpTime.pickupEndTime).format("hh:mm")

        },
        DropOffLocation: {
           
          additionalLocationIdentificationCode: data.DropOffLocation && data.DropOffLocation.additionalLocationIdentification,
          sublocationIdentification:data.DropOffLocation && data.DropOffLocation.sublocationIdentification ,
          locationName: data.DropOffLocation && data.DropOffLocation.locationName,
          locationSpecificInstructionsCode: data.DropOffLocation && data.DropOffLocation.locationSpecificInstructions,
          uTCOffset:data.DropOffLocation && data.DropOffLocation.uTCOffset ,
          cityName:data.DropOffLocation && data.DropOffLocation.cityName ,
          countryCode: data.DropOffLocation && data.DropOffLocation.country,
          crossStreet:data.DropOffLocation && data.DropOffLocation.crossStreet,
          currencyOfPartyCode: data.DropOffLocation && data.DropOffLocation.currencyOfParty,
          languageOfthePartyCode: data.DropOffLocation && data.DropOffLocation.launguageOftheParty,
          name:data.DropOffLocation && data.DropOffLocation.name ,
          postBoxNumber: data.DropOffLocation && data.DropOffLocation.postBoxNumber,
          postalCode:data.DropOffLocation &&  data.DropOffLocation.postalCode,
          provinceCode: data.DropOffLocation &&data.DropOffLocation.province ,
          state: data.DropOffLocation && data.DropOffLocation.state,
          streetAddressOne:data.DropOffLocation &&  data.DropOffLocation.streetAddressOne,
          streetAddressTwo: data.DropOffLocation && data.DropOffLocation.streetAddressTwo,
          streetAddressThree:data.DropOffLocation &&  data.DropOffLocation.streetAddressThree,
          latitude: data.DropOffLocation && data.DropOffLocation.latitude,
          longitutue:data.DropOffLocation && data.DropOffLocation.longitutue,
          contactTypeCode: data.DropOffLocation && data.DropOffLocation.contactType,
          personName:data.DropOffLocation && data.DropOffLocation.personeName,
          departmentName:data.DropOffLocation && data.DropOffLocation.depormentName ,
          jobTitle:data.DropOffLocation && data.DropOffLocation.jobTitle ,
          responsibility: data.DropOffLocation && data.DropOffLocation.responsibility,
          communicationChannelCode: data.DropOffLocation && data.DropOffLocation.communicationChannelCode,
          communicationValue: data.DropOffLocation && data.DropOffLocation.communicationValue,
          communicationChannelName: data.DropOffLocation && data.DropOffLocation.communicationChannelName

        },
        DropOffTime: {
          // dropOffStartDate: "2021-04-10",
          // dropOffStartTime: " 17:58",
          // dropOffEndDate: "2021-04-10",
          // dropOffEndTime: " 19:58"
          dropOffStartDate: data.DropOffTime && Moment(data.DropOffTime.dropOffStartTime).format("YYYY-MM-DD"),
          dropOffStartTime:data.DropOffTime && Moment(data.DropOffTime.dropOffStartTime).format("hh:mm"),
          dropOffEndDate: data.DropOffTime && Moment(data.DropOffTime.dropOffEndTime).format("YYYY-MM-DD"),
          dropOffEndTime: data.DropOffTime &&  Moment(data.DropOffTime.dropOffEndTime).format("hh:mm")

        },
        SpaceRequirements: {
            cargoTypeCode: data.SpaceRequirements && data.SpaceRequirements.cargoType,
            harmonizedSystemCode: data.SpaceRequirements && data.SpaceRequirements.harmonizedSystemCode,
            cargoTypeDescriptionCode: data.SpaceRequirements && data.SpaceRequirements.cargoTypeDescription,
            countryOfOriginCode: data.SpaceRequirements && data.SpaceRequirements.countryOfOriginCode,
            finalDestinationCountryCode: data.SpaceRequirements && data.SpaceRequirements.finalDestinationCountry,
            totalGrossVolume: data.SpaceRequirements && data.SpaceRequirements.totalGrossVolume,
            totalGrossVolumeUnits: data.SpaceRequirements && data.SpaceRequirements.totalGrossVolumeCodes,
            totalGrossWeight: data.SpaceRequirements && data.SpaceRequirements.totalGrossWeight,
            totalGrossWeightUnits: data.SpaceRequirements && data.SpaceRequirements.totalGrossWeightCodes,
            totalTransportNetWeight: data.SpaceRequirements && data.SpaceRequirements.totalTransportNetWeight,
            totalTransportNetWeightUnits: data.SpaceRequirements && data.SpaceRequirements.totalTransportNetWeightCodes,
            totalChargeableWeight: data.SpaceRequirements && data.SpaceRequirements.totalChargeableWeight,
            totalChargeableWeightUnits: data.SpaceRequirements && data.SpaceRequirements.totalChargeableWeightCodes,
            declaredWeightForCustoms: data.SpaceRequirements && data.SpaceRequirements.declaredWeightForCustoms,
            declaredWeightForCustomsUnits: data.SpaceRequirements && data.SpaceRequirements.declaredWeightForCustomsCodes,
            totalLoadingLength: data.SpaceRequirements && data.SpaceRequirements.totalLoadingLength,
            totalLoadingLengthUnits:data.SpaceRequirements && data.SpaceRequirements.totalLoadingLengthCodes,
            associatedInvoiceAmount: data.SpaceRequirements && data.SpaceRequirements.associatedInvoiceAmount,
            associatedInvoiceAmountUnits: data.SpaceRequirements && data.SpaceRequirements.associatedInvoiceAmountCodes,
            declaredValueForCustoms: data.SpaceRequirements && data.SpaceRequirements.declaredValueForCustoms,
            declaredValueForCustomsUnits: data.SpaceRequirements && data.SpaceRequirements.declaredValueForCustomsCodes,
            totalPackageQuantity: data.SpaceRequirements && data.SpaceRequirements.totalPackageQuantity,
            totalPackageQuantityUnits: data.SpaceRequirements && data.SpaceRequirements.totalPackageQuantityCodes,
            totalItemQuantity: data.SpaceRequirements && data.SpaceRequirements.totalItemQuantity,
            totalItemQuantityUnits: data.SpaceRequirements && data.SpaceRequirements.totalItemQuantityCodes,
            packageTypeCode:data.SpaceRequirements && data.SpaceRequirements.packageTypeCode,
            totalPackageQuantityPT: data.SpaceRequirements && data.SpaceRequirements.totalPackageQuantityPT,
            totalGrossWeightPT: data.SpaceRequirements && data.SpaceRequirements.totalGrossWeightPT,
            totalGrossWeightPTUnits: data.SpaceRequirements && data.SpaceRequirements.totalGrossWeightPTCodes,
            totalGrossVolumePT: data.SpaceRequirements && data.SpaceRequirements.totalGrossVolumePT,
            totalGrossVolumePTUnits: data.SpaceRequirements && data.SpaceRequirements.totalGrossVolumePTCodes
        }
    }
      console.log( schemaObj,"schemaObj")
         saveTransportcapacitybooking(schemaObj).then(
            response => {
              // setresponse(response.data)
          console.log(response.data)
          // history.push('http://localhost:3000/home')
          setresponse(true)
          setnavigate(true)

            }
          ).catch(err => {
            setError(err)
            console.log(err)
          })
         
          
  }
  // 
    return (
      <div className="transportcapacitybooking">
        <div className="py-5">
               {/* <div className="AlertInTCB">
                </div> */}
           <div className="mt-2">  
           <div className="AlertInTCB">
              
               {response && (<Alert bgcolor="bgBlue" > {`Successfully Booking!! Your Booking Id:${response.bookingId}`}</Alert>)}
             
                {Error && (<Alert bgcolor="bgRed" >Not Saved Please CheckForm </Alert>)}
             </div> 
           <div className="AlertInTCB">
              {/*  */}

                <Alert bgcolor="bgBlue" > Welcome To Transport Capacity Booking</Alert>
              </div>
            </div>
          <CContainer>
        
            {/*1111111111  Service Details */}
            <CCard >
              <CCardHeader
                  className={ `card-toggle-header Ccard ${ServiceDetails ? "cardheader": ""}` }
                  onClick={() => {
                    setServiceDetails(!ServiceDetails)
                  
                  }}
                  >
                    <div className="cardFlex">
                      <div className="cardFlex__header">
                        {TabenablePL ? ( <IconContext.Provider value={{ color: "white",size:"25px", className: "global-class-name" }}>
                           <span className="cardFlex__header__Icon"> <AiOutlineCheck /></span>

                        </IconContext.Provider>):   <span className="cardFlex__header__span">1</span>}
                      
                       
                       
                        <h6>Service Details</h6>
                      </div>
                       
                       {ServiceDetails ?  <AiOutlineDown />: <AiOutlineRight />}

                    </div>
                 
                 
                 
                  </CCardHeader>
              
                <CCollapse  show={ServiceDetails}>
                  {/* <div className="collapse"> */}
                     <TCBOrderDetails setenableNext={setTabenablePL} optionServiceLevel={transportServiceLevelCodes} ServiceConditionTypeCodes={transportServiceConditionTypeCodes} ServiceCategoryCodes={transportServiceCategoryCodes} />
                  {/* </div> */}
              </CCollapse>
            </CCard>
            {/* 222222222222 PickUp Location */}
              <CCard >
              <CCardHeader
                  className={ `card-toggle-header Ccard ${PickUpLocation ? "cardheader": ""}` }
                  onClick={() => {
                    
                    {TabenablePL && setPickUpLocation(!PickUpLocation) }
                    {TabenablePL && setServiceDetails(false)}
                      
                  
                  }}
                  >
                    <div className="cardFlex">
                      <div className="cardFlex__header">
                      {TabenablePickTime ? ( <IconContext.Provider value={{ color: "white",size:"25px", className: "global-class-name" }}>
                           <span className="cardFlex__header__Icon"> <AiOutlineCheck /></span>

                        </IconContext.Provider>):   <span className="cardFlex__header__span">2</span>}
                        <h6>Pickup Location</h6>
                      </div>
                       
                       {  PickUpLocation ?  <AiOutlineDown />: <AiOutlineRight />}

                    </div>
                  </CCardHeader>

                {TabenablePL && (
                  <CCollapse  show={PickUpLocation}>
                  
                  <TCBPickUpLocation setenableNext={setTabenablePickTime} />
           
                 </CCollapse>
                )}
            </CCard>

             {/*333333 Pick Up Time */}

             <CCard>
                <CCardHeader
                  className={ `card-toggle-header ${pickUPTime ? "cardheader": ""}` }
                  onClick={() => {
                    {TabenablePickTime && setpickUPTime(!pickUPTime)}
                    {TabenablePickTime && setPickUpLocation(false) }
                    
                    
                   // eslint-disable-next-line no-lone-blocks
                  //  { setcollapseOrderDetails(false)} 
                  }}
                >
                
                   <div className="cardFlex">
                       
                       <div className="cardFlex__header">
                       {TabenableDl ? ( <IconContext.Provider value={{ color: "white",size:"25px", className: "global-class-name" }}>
                           <span className="cardFlex__header__Icon"> <AiOutlineCheck /></span>

                        </IconContext.Provider>):   <span className="cardFlex__header__span">3</span>}
                        <h6>Pickup Time</h6>
                      </div>
                       { pickUPTime ?  <AiOutlineDown />: <AiOutlineRight />}

                    </div>
                    </CCardHeader>
                    {(
                      <CCollapse show={pickUPTime}>
                        {/* <TCBPickUpTime setenableNext={setenableNextPp} /> */}
                        <TCBPIckUPTime  setenableNext={setTabenableDl} />
                      </CCollapse>
                )}
              </CCard>
              
               {/* 44444 DropOff Location */}
               <CCard >
              <CCardHeader
                  className={ `card-toggle-header Ccard ${DropOffLocation ? "cardheader": ""}` }
                  onClick={() => {
                    {TabenableDl &&  setDropOffLocation(!DropOffLocation) }
                    {TabenableDl &&  setpickUPTime(false)}
                    
                  
                  }}
                  >
                    <div className="cardFlex">
                      <div className="cardFlex__header">
                      {TabenableDropTime ? ( <IconContext.Provider value={{ color: "white",size:"25px", className: "global-class-name" }}>
                           <span className="cardFlex__header__Icon"> <AiOutlineCheck /></span>

                        </IconContext.Provider>):   <span className="cardFlex__header__span">4</span>}
                        <h6>Drop-Off Location</h6>
                      </div>
                       
                       {DropOffLocation ?  <AiOutlineDown />: <AiOutlineRight />}

                    </div>
                 
                 
                 
                  </CCardHeader>
              
                <CCollapse  show={DropOffLocation}>
                 
                     <TCBDropOffLocation  setenableNext={setTabenableDropTime}/>
                  
              </CCollapse>
            </CCard>

              
              {/* 555555  DropOff Time */}
              <CCard>
                <CCardHeader
                className={ `card-toggle-header ${ DropOffTime ? "cardheader": ""}` }
                onClick={() => {
                  {TabenableDropTime && setDropOffTime(!DropOffTime) }
                  {TabenableDropTime &&  setDropOffLocation(false) }
                 
                 
                }}
                >
               
                   <div className="cardFlex">
                       
                       <div className="cardFlex__header">
                       {TabenableCG ? ( <IconContext.Provider value={{ color: "white",size:"25px", className: "global-class-name" }}>
                           <span className="cardFlex__header__Icon"> <AiOutlineCheck /></span>

                        </IconContext.Provider>):   <span className="cardFlex__header__span">5</span>}
                        <h6> Drop-Off Time</h6>
                      </div>
                       { DropOffTime ?  <AiOutlineDown />: <AiOutlineRight />}

                    </div>
                </CCardHeader>
                  {(
                     <CCollapse show={DropOffTime}>
                     {/* <TCBPlannedDropOff setenableNext={setenableNextPd} /> */}
                     <TCBDropOffTime  setenableNext={setTabenableCG}/>
     
                  </CCollapse>
                  )}
              </CCard>
              
              {/*6666666  CargoCharacterstic */}
              <CCard>
                    <CCardHeader
                        className={ `card-toggle-header  ${ collapseSpecialRequirements ? "cardheader": ""}` }
                        onClick={() => {
                          {TabenableCG && setcollapseSpecialRequirements(!collapseSpecialRequirements);}
                          {TabenableCG &&  setDropOffTime(false);}
                         
                     
                      }} 
                    >
                     
                      <div className="cardFlex">
                     
                       <div className="cardFlex__header">
                       {TabenableSp ? ( <IconContext.Provider value={{ color: "white",size:"25px", className: "global-class-name" }}>
                           <span className="cardFlex__header__Icon"> <AiOutlineCheck /></span>

                        </IconContext.Provider>):   <span className="cardFlex__header__span">6</span>}
                        <h6>  Space Requirements</h6>
                      </div>
                       { collapseSpecialRequirements ?  <AiOutlineDown />: <AiOutlineRight />}

                    </div>
                    </CCardHeader>
                          { (
                            <CCollapse show={collapseSpecialRequirements}>
                            <CargoCharacteristicsForm  setenableNext={setTabenableSp}/>
                         </CCollapse>
                          )}
                  
                  </CCard>
             <div className="finalSubmition">
                <button disabled={!TabenableSp} className="finalSubmition__btn  disabled" onClick={handleSubmit}>Add Order</button>
                {/* <button className="finalSubmition__btn  disabled" onClick={()=>{ 
                  setresponse(true)
                  setnavigate(true)
                  // navigateToHome()
                
                  }}>Checking</button> */}
             </div>
              
            

              {/* Form Ends here */}
           
        
          </CContainer>
        </div>
      </div>
    );
  
}

export default createTransportcapacitybooking;


// cargoTypeCode: {
//   Id: cargotypecodes._id,
//   Name: cargotypecodes.codeListVersion,
// },
// harmonizedSystemCode: {
//   Id: harmonizedsystemcodes._id,
//   Name: harmonizedsystemcodes.codeListVersion,
// },
// cargoTypeDescription: {
//   Id: cargotypedescription._id,
//   Name: cargotypedescription.codeListVersion,
// },
// countryOfOriginCode: {
//   Id: countryoforigincodes._id,
//   Name: countryoforigincodes.codeListVersion,
// },
// finalDestinationCountry: {
//   Id: finaldestinationcountrys._id,
//   Name: finaldestinationcountrys.codeListVersion,
// },
// totalGrossVolume: {
//   Value: body.totalGrossWeight.Value,
//   Measurementtype: body.totalGrossWeight.Measurementtype,
// },
// totalGrossWeight: {
//   Value: body.totalGrossWeight.Value,
//   Measurementtype: body.totalGrossWeight.Measurementtype,
// },
// totalTransportNetWeight: {
//   Value: body.totalTransportNetWeight.Value,
//   Measurementtype: body.totalTransportNetWeight.Measurementtype,
// },
// totalChargeableWeight: {
//   Value: body.totalChargeableWeight.Value,
//   Measurementtype: body.totalChargeableWeight.Measurementtype,
// },
// declaredWeightForCustoms: {
//   Value: body.declaredWeightForCustoms.Value,
//   Measurementtype: body.declaredWeightForCustoms.Measurementtype,
// },
// totalLoadingLength: {
//   Value: body.totalLoadingLength.Value,
//   Measurementtype: body.totalLoadingLength.Measurementtype,
// },
// associatedInvoiceAmount: {
//   Value: body.totalGrossWeight.Value,
//   Measurementtype: body.totalGrossWeight.Measurementtype,
// },
// declaredValueForCustoms: {
//   Value: body.associatedInvoiceAmount.Value,
//   Measurementtype: body.associatedInvoiceAmount.Measurementtype,
// },
// totalPackageQuantity: {
//   Value: body.totalPackageQuantity.Value,
//   Measurementtype: body.totalPackageQuantity.Measurementtype,
// },
// totalItemQuantity: {
//   Value: body.totalItemQuantity.Value,
//   Measurementtype: body.totalItemQuantity.Measurementtype,
// }

// {
//   "ServiceDetailsData": {
//       "servicecategoryCode": "",
//       "serviceConditionTypeCode": "606588285723194bb5e18aed",
//       "serviceLevelCode": "60658a415723194bb5e18afc"
//   },
//   "PickUpLocationData": {
//       "additionalLocationIdentificationCode": "6066bc8ff225027765a0a67f",
//       "sublocationIdentification": "asfjkhfkljf",
//       "locationName": "sdfdf",
//       "locationSpecificInstructionsCode": "6066bd5e9db55078bf0d00f1",
//       "uTCOffset": "asdf",
//       "cityName": "dsfds",
//       "countryCode": "6066bb76f225027765a0a67d",
//       "crossStreet": "asdfd",
//       "currencyOfPartyCode": "6066bdf89db55078bf0d00f3",
//       "languageOfthePartyCode": "6066be5c9db55078bf0d00f8",
//       "name": "asdfd",
//       "postBoxNumber": "51654",
//       "postalCode": "515425",
//       "provinceCode": "adsfd",
//       "state": "asdf",
//       "streetAddressOne": "a",
//       "streetAddressTwo": "asdfd",
//       "streetAddressThree": "adsfd",
//       "latitude": 4654,
//       "longitutue": 321321,
//       "contactTypeCode": "6066ba54f225027765a0a679",
//       "personName": "sdfasdf",
//       "departmentName": "adsf",
//       "jobTitle": "asdf",
//       "responsibility": "606604c84e9e6d6253b5bfb6",
//       "communicationChannelCode": "606605904e9e6d6253b5bfb9",
//       "communicationValue": "asdfds",
//       "communicationChannelName": "asdf"
//   },
//   "PickUpTime": {
//       "pickupStartDate": "2021-05-10",
//       "pickupStartTime": " 17:58",
//       "pickupEndDate": "2021-02-10",
//       "pickupEndTime": " 19:58"
//   },
//   "DropOffLocation": {
//       "additionalLocationIdentificationCode": "6066bc8ff225027765a0a67f",
//       "sublocationIdentification": "asfjkhfkljf",
//       "locationName": "sdfdf",
//       "locationSpecificInstructionsCode": "6066bd5e9db55078bf0d00f1",
//       "uTCOffset": "asdf",
//       "cityName": "dsfds",
//       "countryCode": "6066bb76f225027765a0a67d",
//       "crossStreet": "asdfd",
//       "currencyOfPartyCode": "6066bdf89db55078bf0d00f3",
//       "languageOfthePartyCode": "6066be5c9db55078bf0d00f8",
//       "name": "asdfd",
//       "postBoxNumber": "51654",
//       "postalCode": "515425",
//       "provinceCode": "adsfd",
//       "state": "asdf",
//       "streetAddressOne": "a",
//       "streetAddressTwo": "asdfd",
//       "streetAddressThree": "adsfd",
//       "latitude": 4654,
//       "longitutue": 321321,
//       "contactTypeCode": "",
//       "personName": "sdfasdf",
//       "departmentName": "adsf",
//       "jobTitle": "asdf",
//       "responsibility": "606604c84e9e6d6253b5bfb6",
//       "communicationChannelCode": "606605904e9e6d6253b5bfb9",
//       "communicationValue": "asdfds",
//       "communicationChannelName": "asdf"
//   },
//   "DropOffTime": {
//       "dropOffStartDate": "2021-07-10",
//       "dropOffStartTime": " 17:58",
//       "dropOffEndDate": "2021-09-10",
//       "dropOffEndTime": " 19:58"
//   },
//   "SpaceRequirements": {
//       "cargoTypeCode": "6062ca287ac03a03b5e4a79d",
//       "harmonizedSystemCode": "6065e82e97b3245cabbd0452",
//       "cargoTypeDescriptionCode": "6065e87c97b3245cabbd0456",
//       "countryOfOriginCode": "6065e91c97b3245cabbd0461",
//       "finalDestinationCountryCode": "6065e8b597b3245cabbd045a",
//       "totalGrossVolume": "516",
//       "totalGrossVolumeUnits": "60659f455723194bb5e18b15",
//       "totalGrossWeight": "21321",
//       "totalGrossWeightUnits": "60659fc05723194bb5e18b1a",
//       "totalTransportNetWeight": "54654",
//       "totalTransportNetWeightUnits": "60659f625723194bb5e18b16",
//       "totalChargeableWeight": "321321",
//       "totalChargeableWeightUnits": "60659f625723194bb5e18b16",
//       "declaredWeightForCustoms": "21",
//       "declaredWeightForCustomsUnits": "60659fc05723194bb5e18b1a",
//       "totalLoadingLength": "321321",
//       "totalLoadingLengthUnits": "60659f625723194bb5e18b16",
//       "associatedInvoiceAmount": "21321",
//       "associatedInvoiceAmountUnits": "605db315cfc2c6c738963b4d",
//       "declaredValueForCustoms": "321321",
//       "declaredValueForCustomsUnits": "605db31ecfc2c6c738963b4e",
//       "totalPackageQuantity": "5665",
//       "totalPackageQuantityUnits": "6065e99997b3245cabbd0465",
//       "totalItemQuantity": "321321",
//       "totalItemQuantityUnits": "6065e99197b3245cabbd0464",
//       "packageTypeCode": "606451381b09402e3c72a156",
//       "totalPackageQuantityPT": "13321",
//       "totalGrossWeightPT": "3232",
//       "totalGrossWeightPTUnits": "60659f795723194bb5e18b17",
//       "totalGrossVolumePT": "321321",
//       "totalGrossVolumePTUnits": "60659f625723194bb5e18b16"
//   }
// }