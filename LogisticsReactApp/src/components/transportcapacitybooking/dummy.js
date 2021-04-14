

import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
import './TransportCapacityBooking.css'
//service
import { getMeasurementtypes } from '../services/measurementtypeService';
import { getTransportcapacitybookingspacerequirements } from '../services/transportcapacitybookingspacerequirementService';
import { getCodetypes } from '../services/codetypeService';

//
import { getHarmonizedsystemcodes } from '../services/harmonizedsystemcodeService';
import { getCargotypedescriptions } from '../services/cargotypedescriptionService';
import { getFinaldestinationcountrys } from '../services/finaldestinationcountryService';
import { getCountryoforigincodes } from '../services/countryoforigincodeService';
import { getAmounttypes } from '../services/amounttypeService';
import { getQuantitytypes } from '../services/quantitytypeService';
import { getPackagetypecodes } from '../services/packagetypecodeService';
import { savePackagetotaltype } from '../services/packagetotaltypeService';
//service
import { getTransportservicecategorycodes } from '../services/transportservicecategorycodeService';
import { getTransportserviceconditiontypecodes } from '../services/transportserviceconditiontypecodeService';
import { getTransportservicelevelcodes } from '../services/transportservicelevelcodeService';
///
import { getIdentifiertypes } from '../services/identifiertypeService';
import { getDescription200types } from '../services/description200typeService';
import { getCountrycodes } from '../services/countrycodeService';
import { getCurrencyofpartycodes } from '../services/currencyofpartycodeService';
import { getLanguageofthepartycodes } from '../services/languageofthepartycodeService';
import { getDescription70types } from '../services/description70typeService';
import { getContacttypecodes } from '../services/contacttypecodeService';
import { getCommunicationchannels } from '../services/communicationchannelService';



function TransportCapacityBooking() {


//cargo
     const [measurementtypes,setmeasurementtypes] =  useState([])
     const [cargoTypeCodes,setcargoTypeCodes] =  useState([])
     const [harmonizedSystemCodes,setharmonizedSystemCodes] =  useState([])
     const [cargoTypeDescriptions,setcargoTypeDescriptions] =  useState([])
     const [finalDestinationCountrys,setfinalDestinationCountrys] =  useState([])
     const [countryOfOriginCodes,setcountryOfOriginCodes] =  useState([])
     const [amounttypes,setamounttypes] =  useState([])
     const [quantitytypes,setquantitytypes] =  useState([])
     const [packagetypecodes,setpackagetypecodes] =  useState([])
///


/// Transport 12
      
const [transportServiceCategoryCodes,settransportServiceCategoryCodes] = useState([])
const [transportServiceConditionTypeCodes,settransportServiceConditionTypeCodes] = useState([])
const [transportServiceLevelCodes,settransportServiceLevelCodes] = useState([])

//Pick & Drop

const [Identifiertypes,setIdentifiertypes] =useState([])
const [Description200types,setDescription200types] =useState([])
const [Countrycodes,setCountrycodes] =useState([])
const [Currencyofpartycodes,setCurrencyofpartycodes] =useState([])
const [Contacttypecodes,setContacttypecodes] =useState([])
const [Description70types,setDescription70types] =useState([])
const [Communicationchannels,setCommunicationchannels] =useState([])
const [Languageofthepartycodes,setLanguageofthepartycodes] =useState([])




   
    const[handleAddNewTogglestate,sethandleAddNewTogglestate] =  useState(false)
    const[AddNewToggleDrop,setAddNewToggleDrop] = useState(false)


    const [cargoState,setCargoState] = useState({
        ServiceCategory: "",
        ServiceConditionType:'',
        ServiceLevel:""
    })

    const[PickupState,setPickupState] = useState({
        AdditionalLocationIdentification:"",
        SublocationIdentification:"",
        LocationName:"",
        LocationSpecificInstructions:"",
        UTCOffset:"",
        CityName:"",
        Country:"",
        CrossStreet:"",
        CurrencyOfParty:"",
        LaunguageOftheParty:"",
        Name:"",
        PostBoxNumber:"",
        PostalCode:"",
        Province:"",
        State:"",
        StreetAddressOne:"",
        StreetAddressTwo:"",
        StreetAddressThree:"",
        Latitude:"",
        Longitutue:"",
        ContactType:"",
        PersoneName:"",
        DepormentName:"",
        JobTitle1:"",
        Responsibility:"",
        CommunicationChannelCode:"",
        CommunicationValue:"",
        CommunicationChannelName:"",
        TimeBandStartDate:"",
        TimeBandEndTime:"",
        TimeBandStartTime:"",
        TimeBandEndDate:"",
        startDate:"",
        startTime : ""
        // EventTimeStartTime:"",
        // EventTimeEndTime:""
    })

    const[DropOffState,setDropOffState] = useState({
        AdditionalLocationIdentification:"",
        SublocationIdentification:"",
        LocationName:"",
        LocationSpecificInstructions:"",
        UTCOffset:"",
        CityName:"",
        Country:"",
        CrossStreet:"",
        CurrencyOfParty:"",
        LaunguageOftheParty:"",
        Name:"",
        PostBoxNumber:"",
        PostalCode:"",
        Province:"",
        State:"",
        StreetAddressOne:"",
        StreetAddressTwo:"",
        StreetAddressThree:"",
        Latitude:"",
        Longitutue:"",
        ContactType:"",
        PersoneName:"",
        DepormentName:"",
        JobTitle1:"",
        Responsibility:"",
        CommunicationChannelCode:"",
        CommunicationValue:"",
        CommunicationChannelName:"",
        TimeBandStartDateDP:"",
        TimeBandEndTimeDP:"",
        TimeBandStartTimeDP:"",
        TimeBandEndDateDP:"",
        EndDate:"",
        Endtime:""
        // EventTimeStartTime:"",
        // EventTimeEndTime:""
    })
    
     const [spacestate,setSpacestate] =  useState({  
                 cargoTypeCode: "",
                 harmonizedSystemCode: "", 
                 cargoTypeDescription: "", 
                 countryOfOriginCode: "", 
                 finalDestinationCountry: "",
                 totalGrossVolume:'',
                 totalGrossVolumeUnits:"",
                 totalGrossWeight: '',
                 totalGrossWeightUnits:'',
                 totalTransportNetWeight: "",
                 totalTransportNetWeightUnits:"",
                 totalChargeableWeight: "",
                 totalChargeableWeightUnits: "",
                 declaredWeightForCustoms: "", 
                 declaredWeightForCustomsUnits: "", 
                 totalLoadingLength: "", 
                 totalLoadingLengthUnits: "",
                 associatedInvoiceAmount: "",
                 associatedInvoiceAmountUnits: "",
                 declaredValueForCustoms: "", 
                 declaredValueForCustomsUnits:"",
                 totalPackageQuantity: "",
                 totalPackageQuantityUnits: "",
                 totalItemQuantity: "", 
                 totalItemQuantityUnits: "", 
                 packageTypeCode: "",
                 totalPackageQuantityPT:"",
                 totalGrossWeightPT:"",
                 totalGrossWeightPTUnits:"",
                 totalGrossVolumePT:"",
                 totalGrossVolumePTUnits:"",      
         })
 

   const [togglePickUp,settogglePickUp] = useState(false)
   const [toggleDropOff,settoggleDropOff] = useState(false)
   const [toggleSpace,setToggleSpace] = useState(false)


/**
 *  SPace Requirements
 */

   useEffect(()=>{
    populateForm()
    
    populateCodeTypes();
    populateHarmonizedsystem();
    populateCargotypedescriptions();
    populateFinaldestinationcountrys();
    populateCountryoforigincodes();
    populateMeasurementtypes();
    populateAmounttypes();
    populateQuantitytypes();
    populatePackagetypecodes();
    //cargo
    populatetransportServiceCategoryCodes()
    populatetransportServiceConditionTypeCodes()
    populatetransportServiceLevelCodes()
   //pickuplocation & dropup location

   populategetIdentifiertypes()  //.1.Additional Location Identification:
   populateggetDescription200types() //2.Location Specific Instructions:
   populategetCountrycodes()  //3. Country ->
   populategetCurrencyofpartycodes() //4
   populategegetContacttypecodes() //5
   populategetDescription70types() //6
   populategetCommunicationchannels() //7
   populategetLanguageofthepartycodes() //8
   
   },[])




    const populateForm = async () => {
        try {

            // const transportcapacitybookingId = this.props.match.params.id;
            // const { id } = useParams();
            const transportcapacitybookingId = ''  // id 
            if (transportcapacitybookingId !== "new") {
                const { data } = await getTransportcapacitybookingspacerequirements(transportcapacitybookingId);
                // this.setState({ data });
            }
        }
        catch (ex) {
            if (ex.response && ex.response.status === 404) {
                this.props.history.replace("/not-found");
            }
        }
    }

     //pickuplocation & dropup location
        //getIdentifiertypes()
    
   

       const  populategetIdentifiertypes= async () =>{
            const { data: Identifiertypes } = await getIdentifiertypes();
            setIdentifiertypes([...Identifiertypes])
        }

        const  populateggetDescription200types= async () =>{
            const { data: Description200types } = await getDescription200types();
            setDescription200types([...Description200types])
        }

        const  populategetCountrycodes= async () =>{
            const { data: Countrycodes } = await getCountrycodes();
            setCountrycodes([...Countrycodes])
        }

         const  populategetCurrencyofpartycodes= async () =>{
            const { data: Currencyofpartycodes } = await getCurrencyofpartycodes();
            setCurrencyofpartycodes([...Currencyofpartycodes])
        }
        const  populategegetContacttypecodes= async () =>{
            const { data: Contacttypecodes } = await getContacttypecodes();
            setContacttypecodes([...Contacttypecodes])
        }
        const  populategetDescription70types= async () =>{
            const { data: Description70types } = await getDescription70types();
            setDescription70types([...Description70types])
        }
        const  populategetCommunicationchannels= async () =>{
            const { data: Communicationchannels } = await getCommunicationchannels();
            setCommunicationchannels([...Communicationchannels])
        }
        const  populategetLanguageofthepartycodes= async () =>{
            const { data: Languageofthepartycodes } = await getLanguageofthepartycodes();
            setLanguageofthepartycodes([...Languageofthepartycodes])
        }
        // getLanguageofthepartycodes()



///end

    //Cargo 
       const  populatetransportServiceCategoryCodes= async () =>{
        const { data: transportServiceCategoryCodes } = await getTransportservicecategorycodes();
        // this.setState({ transportServiceCategoryCodes: transportServiceCategoryCodes });
        settransportServiceCategoryCodes([...transportServiceCategoryCodes])
        }
        
        const populatetransportServiceConditionTypeCodes = async () => {
        const { data: transportServiceConditionTypeCodes } = await getTransportserviceconditiontypecodes();
        // this.setState({ transportServiceConditionTypeCodes: transportServiceConditionTypeCodes });
        settransportServiceConditionTypeCodes([...transportServiceConditionTypeCodes])
        }
        
        const populatetransportServiceLevelCodes = async () => {
        const { data: transportServiceLevelCodes } = await getTransportservicelevelcodes();
        // this.setState({ transportServiceLevelCodes: transportServiceLevelCodes });
        settransportServiceLevelCodes([...transportServiceLevelCodes])
        }





    const populateCodeTypes = async () =>{
        const { data: cargoTypeCodes } = await getCodetypes();
        // this.setState({ cargoTypeCodes: cargoTypeCodes });
        setcargoTypeCodes([...cargoTypeCodes])
    }
        const populateHarmonizedsystem= async () =>{
            const { data: harmonizedSystemCodes } = await getHarmonizedsystemcodes();
            // this.setState({ harmonizedSystemCodes: harmonizedSystemCodes });
            setharmonizedSystemCodes([...harmonizedSystemCodes])
        }
        const populateCargotypedescriptions = async () => {
            const { data: cargoTypeDescriptions } = await getCargotypedescriptions();
            // this.setState({ cargoTypeDescriptions: cargoTypeDescriptions });
            setcargoTypeDescriptions([...cargoTypeDescriptions])
        }
        const populateFinaldestinationcountrys = async () => {
            const { data: finalDestinationCountrys } = await getFinaldestinationcountrys();
            // this.setState({ finalDestinationCountrys: finalDestinationCountrys });
            setfinalDestinationCountrys([...finalDestinationCountrys])
        }
        
        const populateCountryoforigincodes = async () => {
            const { data: countryOfOriginCodes } = await getCountryoforigincodes();
            // this.setState({ countryOfOriginCodes: countryOfOriginCodes });
            setcountryOfOriginCodes([...countryOfOriginCodes])
        }
    
        const populateAmounttypes = async ()  =>{
            const { data: amounttypes } = await getAmounttypes();
            // this.setState({ amounttypes: amounttypes });
            setamounttypes([...amounttypes])
        }
        const populateQuantitytypes = async() => {
            const { data: quantitytypes } = await getQuantitytypes();
            // this.setState({ quantitytypes: quantitytypes });
            setquantitytypes([...quantitytypes])
        }
        const populatePackagetypecodes = async() => {
            const { data: packagetypecodes } = await getPackagetypecodes();
            // this.setState({ packagetypecodes: packagetypecodes });
            setpackagetypecodes([...packagetypecodes])
        }

        const populateMeasurementtypes = async () => {
            const { data: measurementtypes } = await getMeasurementtypes();
            setmeasurementtypes([...measurementtypes])
        }
  




 console.log(cargoState,"cargoState")
 console.log(PickupState,"PickupState12345")
 console.log(DropOffState,"DropOffState")
 console.log(spacestate,"spacestate")


 //handleInput

  const handleInputChange =(e,type)=>{

        if(type === "totalGrossVolume"){
            setSpacestate({...spacestate,totalGrossVolume:e.target.value})
        }
        if(type === "totalGrossWeight"){
            setSpacestate({...spacestate,totalGrossWeight:e.target.value})
        }
        
        if(type === "totalTransportNetWeight"){
            setSpacestate({...spacestate,totalTransportNetWeight:e.target.value})
        }
        if(type === "totalChargeableWeight"){
            setSpacestate({...spacestate,totalChargeableWeight:e.target.value})
        }
        if(type === "declaredWeightForCustoms"){
            setSpacestate({...spacestate,declaredWeightForCustoms:e.target.value})
        }
        if(type === "totalLoadingLength"){
            setSpacestate({...spacestate,totalLoadingLength:e.target.value})
        }  
        if(type === "associatedInvoiceAmount"){
            setSpacestate({...spacestate,associatedInvoiceAmount:e.target.value})
        }
        if(type === "declaredValueForCustoms"){
            setSpacestate({...spacestate,declaredValueForCustoms:e.target.value})
        }
        if(type === "totalPackageQuantity"){
            setSpacestate({...spacestate,totalPackageQuantity:e.target.value})
        }
        if(type === "totalItemQuantity"){
            setSpacestate({...spacestate,totalItemQuantity:e.target.value})
        }
        //   totalPackageQuantityPT
        if(type === "totalPackageQuantityPT"){
            setSpacestate({...spacestate,totalPackageQuantityPT:e.target.value})
        }
        //   totalGrossWeightPT
        if(type === "totalGrossWeightPT"){
            setSpacestate({...spacestate,totalGrossWeightPT:e.target.value})
        }
        //   totalGrossVolumePT
        if(type === "totalGrossVolumePT"){
            setSpacestate({...spacestate, totalGrossVolumePT:e.target.value})
        }   

//start ------------

          // For Planned PickUP -- PickUp Loction

         if(type === "PickupsublocationIdentification"){
            setPickupState({...PickupState, SublocationIdentification :e.target.value})
        } 
        if(type === "PickuplocationName"){
            setPickupState({...PickupState, LocationName :e.target.value})
        } 
        if(type === "PickuputcOffset"){
            setPickupState({...PickupState, UTCOffset  :e.target.value})
        } 
        if(type === "PickUpcity"){
            setPickupState({...PickupState, CityName :e.target.value})
        } 
        if(type === "PickUpcrossStreet"){
            setPickupState({...PickupState, CrossStreet :e.target.value})
        } 
        if(type === "PickUpname"){
            setPickupState({...PickupState, Name :e.target.value})
        } 
        if(type === "PickUppOBoxNumber"){
            setPickupState({...PickupState, PostBoxNumber :e.target.value})
        } 
        if(type === "PickUppostalCode"){
            setPickupState({...PickupState, PostalCode :e.target.value})
        } 
        if(type === "PickUpprovinceCode"){
            setPickupState({...PickupState, Province  :e.target.value})
        } 
        if(type === "PickUpstate"){
            setPickupState({...PickupState, State :e.target.value})
        } 
        if(type === "PickUpstreetAddressOne"){
            setPickupState({...PickupState, StreetAddressOne :e.target.value})
        } 
        if(type === "PickUpstreetAddressTwo"){
            setPickupState({...PickupState, StreetAddressTwo :e.target.value})
        } 
        if(type === "PickUpstreetAddressThree"){
            setPickupState({...PickupState, StreetAddressThree :e.target.value})
        } 
        if(type === "PickUplatitude"){
            setPickupState({...PickupState, Latitude :e.target.value})
        } 
        if(type === "PickUplongitude"){
            setPickupState({...PickupState, Longitutue :e.target.value})
        } 
        if(type === "PickuppersonName"){
            setPickupState({...PickupState, PersoneName :e.target.value})
        } 
        if(type === "PickupdepartmentName"){
            setPickupState({...PickupState, DepormentName :e.target.value})
        }
        if(type === "PickUpjobTitle"){
            setPickupState({...PickupState, JobTitle1:e.target.value})
        } 
        if(type === "PickUpcommunicationValue"){
            setPickupState({...PickupState, CommunicationValue :e.target.value})
        }
        if(type === "PickUpcommunicationChannelName"){
            setPickupState({...PickupState, CommunicationChannelName :e.target.value})
        } 
        if(type === "PickUpTimeBandStartDate"){
            setPickupState({...PickupState, TimeBandStartDate :e.target.value})
        }
        if(type === "PickUpTimeBandEndDate"){
            setPickupState({...PickupState, TimeBandEndDate :e.target.value})
        }

        if(type === "PickUpTimeBandStartTime"){
            setPickupState({...PickupState, TimeBandStartTime :e.target.value})
        }

        if(type === "PickUpTimeBandEndTime"){
            setPickupState({...PickupState, TimeBandEndTime :e.target.value})
        }

        if(type === "PickUpEventTimeStartTime"){
            setPickupState({...PickupState, startDate :e.target.value})
        }
        if(type === "PickUpEventTimeEndTime"){
            setPickupState({...PickupState, startTime :e.target.value})
        }

          //For  Planned DropOff: ---  DropOff  Location

          if(type === "DropUpsublocationIdentification"){
            setDropOffState({...DropOffState, SublocationIdentification :e.target.value})
        } 
        if(type === "DropUplocationName"){
            setDropOffState({...DropOffState, LocationName :e.target.value})
        } 
        if(type === "DropUputcOffset"){
            setDropOffState({...DropOffState, UTCOffset  :e.target.value})
        } 
        if(type === "DropUpcity"){
            setDropOffState({...DropOffState, CityName :e.target.value})
        } 
        if(type === "DropUpcrossStreet"){
            setDropOffState({...DropOffState, CrossStreet :e.target.value})
        } 
        if(type === "DropUpname"){
            setDropOffState({...DropOffState, Name :e.target.value})
        } 
        if(type === "DropUppOBoxNumber"){
            setDropOffState({...DropOffState, PostBoxNumber :e.target.value})
        } 
        if(type === "DropUppostalCode"){
            setDropOffState({...DropOffState, PostalCode :e.target.value})
        } 
        if(type === "DropUpprovinceCode"){
            setDropOffState({...DropOffState, Province  :e.target.value})
        } 
        if(type === "DropOffStateState"){
            setDropOffState({...DropOffState, State :e.target.value})
        } 
        if(type === "DropUpstreetAddressOne"){
            setDropOffState({...DropOffState, StreetAddressOne :e.target.value})
        } 
        if(type === "DropUpstreetAddressTwo"){
            setDropOffState({...DropOffState, StreetAddressTwo :e.target.value})
        } 
        if(type === "DropUpstreetAddressThree"){
            setDropOffState({...DropOffState, StreetAddressThree :e.target.value})
        } 
        if(type === "DropUplatitude"){
            setDropOffState({...DropOffState, Latitude :e.target.value})
        } 
        if(type === "DropUplongitude"){
            setDropOffState({...DropOffState, Longitutue :e.target.value})
        } 
        if(type === "DropUppersonName"){
            setDropOffState({...DropOffState, PersoneName :e.target.value})
        } 
        if(type === "DropUpdepartmentName"){
            setDropOffState({...DropOffState, DepormentName :e.target.value})
        }
        if(type === "DropUpjobTitle"){
            setDropOffState({...DropOffState, JobTitle1:e.target.value})
        } 
        if(type === "DropUpcommunicationValue"){
            setDropOffState({...DropOffState, CommunicationValue :e.target.value})
        }
        if(type === "DropUpcommunicationChannelName"){
            setDropOffState({...DropOffState, CommunicationChannelName :e.target.value})
        } 
        if(type === "DropUpTimeBandStartDate"){
            setDropOffState({...DropOffState, TimeBandStartDateDP :e.target.value})
        }
        if(type === "DropUpTimeBandEndDate"){
            setDropOffState({...DropOffState, TimeBandEndDateDP :e.target.value})
        }

        if(type === "DropUpTimeBandStartTime"){
            setDropOffState({...DropOffState, TimeBandStartTimeDP :e.target.value})
        }

        if(type === "DropUpTimeBandEndTime"){
            setDropOffState({...DropOffState, TimeBandEndTimeDP :e.target.value})
        }

        if(type === "DropUpEventTimeStartTime"){
            setDropOffState({...DropOffState, EndDate :e.target.value})
        }
        if(type === "DropUpEventTimeEndTime"){
            setDropOffState({...DropOffState, Endtime :e.target.value})
        }


        //////////stop Droff          

 }


 // handleSelect

    const handleSelectChange = (e,type) => {

            if(type === "totalGrossVolume"){
                setSpacestate({...spacestate,totalGrossVolumeUnits:e.target.value})
            }
            if(type === "totalGrossWeight"){
                setSpacestate({...spacestate,totalGrossWeightUnits:e.target.value})
            }
            
            if(type === "totalTransportNetWeight"){
                setSpacestate({...spacestate,totalTransportNetWeightUnits:e.target.value})
            }
            if(type === "totalChargeableWeight"){
                setSpacestate({...spacestate,totalChargeableWeightUnits:e.target.value})
            }
            if(type === "declaredWeightForCustoms"){
                setSpacestate({...spacestate,declaredWeightForCustomsUnits:e.target.value})
            }
            if(type === "totalLoadingLength"){
                setSpacestate({...spacestate,totalLoadingLengthUnits:e.target.value})
            }
            
            if(type === "associatedInvoiceAmount"){
                setSpacestate({...spacestate,associatedInvoiceAmountUnits:e.target.value})
            }
            if(type === "declaredValueForCustoms"){
                setSpacestate({...spacestate,declaredValueForCustomsUnits:e.target.value})
            }
            if(type === "totalPackageQuantity"){
                setSpacestate({...spacestate,totalPackageQuantityUnits:e.target.value})
            }
            if(type === "totalItemQuantity"){
                setSpacestate({...spacestate,totalItemQuantityUnits:e.target.value})
            }
            // packageTypeCode
            if(type === "packageTypeCode"){
                setSpacestate({...spacestate,packageTypeCode:e.target.value})
            }
            //   totalGrossWeightPT
            if(type === "totalGrossWeightPT"){
                setSpacestate({...spacestate,totalGrossWeightPTUnits:e.target.value})
            }
            //   totalGrossVolumePT
            if(type === "totalGrossVolumePT"){
                setSpacestate({...spacestate, totalGrossVolumePTUnits:e.target.value})
            }

            //start here
            if(type === "cargoTypeCode"){
                setSpacestate({...spacestate, cargoTypeCode:e.target.value})
            }
            if(type === "harmonizedSystemCode"){
                setSpacestate({...spacestate, harmonizedSystemCode:e.target.value})
            }
            if(type === "cargoTypeDescription"){
                setSpacestate({...spacestate, cargoTypeDescription:e.target.value})
            }
            if(type === "countryOfOriginCode"){
                setSpacestate({...spacestate, countryOfOriginCode:e.target.value})
            }
            if(type === "finalDestinationCountry"){
                setSpacestate({...spacestate, finalDestinationCountry:e.target.value})
            }

    // For Planned PickUP -- PickUp Loction

            if(type === "PickupadditionalLocationIdentification"){
                setPickupState({...PickupState, AdditionalLocationIdentification :e.target.value})
            } 
            if(type === "PickuplocationSpecificInstructions"){
                setPickupState({...PickupState, LocationSpecificInstructions :e.target.value})
            } 
            if(type === "Pickupcountry"){
                setPickupState({...PickupState, Country :e.target.value})
            } 
            if(type === "PickupcurrencyOfPartyCode"){
                setPickupState({...PickupState, CurrencyOfParty :e.target.value})
            } 
            if(type === "PickuplanguageOfThePartyCode"){
                setPickupState({...PickupState, LaunguageOftheParty  :e.target.value})
            } 
            if(type === "PickupcontactTypeCode"){
                setPickupState({...PickupState, ContactType :e.target.value})
            } 
            if(type === "Pickupresponsibility"){
                setPickupState({...PickupState, Responsibility :e.target.value})
            } 
            if(type === "PickupcommunicationChannelCode"){
                setPickupState({...PickupState, CommunicationChannelCode :e.target.value})
            } 
   
 

    //For  Planned DropOff: ---  DropOff  Location
            
            
            if(type === "DropUpadditionalLocationIdentification"){
                setDropOffState({...DropOffState, AdditionalLocationIdentification :e.target.value})
            } 
            if(type === "DropUplocationSpecificInstructions"){
                setDropOffState({...DropOffState, LocationSpecificInstructions :e.target.value})
            } 
            if(type === "DropUpcountry"){
                setDropOffState({...DropOffState, Country:e.target.value})
            } 
            if(type === "DropUpcurrencyOfPartyCode"){
                setDropOffState({...DropOffState, CurrencyOfParty :e.target.value})
            } 
            if(type === "DropUplanguageOfThePartyCode"){
                setDropOffState({...DropOffState, LaunguageOftheParty  :e.target.value})
            } 
            if(type === "DropUpcontactTypeCode"){
                setDropOffState({...DropOffState, ContactType :e.target.value})
            } 
            if(type === "DropUpresponsibility"){
                setDropOffState({...DropOffState, Responsibility :e.target.value})
            } 
            if(type === "DropUpcommunicationChannelCode"){
                setDropOffState({...DropOffState, CommunicationChannelCode :e.target.value})
            } 

            ////  Cargo Service
            // CargoServiceCategoryType
            // CargoServiceConditionType
            // CargoServiceLevel

            if(type === "CargoServiceCategoryType"){
                setCargoState({...cargoState, ServiceCategory:e.target.value})
            } 
            if(type === "CargoServiceConditionType"){
                setCargoState({...cargoState, ServiceConditionType:e.target.value})
            } 
            if(type === "CargoServiceLevel"){
                setCargoState({...cargoState, ServiceLevel:e.target.value})
            } 
        }
//drofff
///////////////////////////////////////////////////////SPace REq????????????


        const handleTogglePickUp = ()=>{
            settogglePickUp(!togglePickUp)
        }
        const handleToggleDropOff = () =>{
            settoggleDropOff(!toggleDropOff)
        }
        const handleToggleSpace = () =>{
            setToggleSpace(!toggleSpace)
        }
       
        const handleAddNewToggle =()=>{
            sethandleAddNewTogglestate(true)
        }
        const handleAddNewToggleDrop = ()=>{
            setAddNewToggleDrop(true)
        }




//Post Api API's 


// CargoCharacteristics

// const handleSubmitCargoCharacteristics = (e) => {
//     const data =  {
//         cargoTypeCodeId:this.state.cargoTypeCode,
//         harmonizedSystemCodeId:this.state.harmonizedSystemCode,
//         cargoTypeDescriptionId:this.state.cargoTypeDescription,
//         countryOfOriginCodeId:this.state.countryOfOriginCode,
//         finalDestinationCountryId:this.state.finalDestinationCountry,
//         totalGrossVolume:{
//         Value:this.state.totalGrossVolume,
//         Measurementtype:this.state.totalGrossVolumeUnits
//         },
//         totalGrossWeight:{
//         Value:this.state.totalGrossWeight,
//         Measurementtype:this.state.totalGrossWeightUnits
//         },
//         totalTransportNetWeight:{
//         Value:this.state.totalTransportNetWeight,
//         Measurementtype:this.state.totalTransportNetWeightUnits
//         },
//         totalChargeableWeight:{
//         Value:this.state.totalChargeableWeight,
//         Measurementtype:this.state.totalChargeableWeightUnits
//         },
//         declaredWeightForCustoms:{
//         Value:this.state.declaredWeightForCustoms,
//         Measurementtype:this.state.declaredWeightForCustomsUnits
//         },
//         totalLoadingLength:{
//         Value:this.state.totalLoadingLength,
//         Measurementtype:this.state.totalLoadingLengthUnits
//         },
//         associatedInvoiceAmount:{
//         Value:this.state.associatedInvoiceAmount,
//         Measurementtype:this.state.associatedInvoiceAmountUnits
//         },
//         declaredValueForCustoms:{
//         Value:this.state.declaredValueForCustoms,
//         Measurementtype:this.state.declaredValueForCustomsUnits
//         },
//         totalPackageQuantity:{
//         Value:this.state.totalPackageQuantity,
//         Measurementtype:this.state.totalPackageQuantityUnits
//         },
//         totalItemQuantity:{
//         Value:this.state.totalItemQuantity,
//         Measurementtype:this.state.totalItemQuantityUnits
//         }
//     }
     
//       console.log(data,"Cargo Characteristics API")

//   }

       ///Post 
       const handleSubmitPackageTotal =  (e) =>{
        // e.preventDefault()
        const data ={
            totalPackageQuantity: this.state.totalPackageQuantityPT,
            totalGrossVolume: {
                value: this.state.totalGrossVolumePT,
                measurementtype: this.state.totalGrossVolumePTUnits

            },
            totalGrossWeight: {
                Value:this.state.totalGrossWeightPT,
                Measurementtype:this.state.totalGrossWeightPTUnits
            },
            packageTypeCodeId:this.state.packageTypeCode
        }
       console.log(JSON.stringify(data),"posting data123")
       console.log("PacketTotalAPi")
        savePackagetotaltype(data).then((res)=>console.log(res.data._id,"responseID"))
    }
     


        const handleSubmit =()=>{
            //    APi Calls


        }



    return (
        <div className="wrapper">
            <h1 className="TransportHeader">Transport Capacity Booking</h1>
            <div className="capacityBokking">
              <form  >

                <div className="form-group">
                        <label for="">Service Category :</label>
                        <select value={cargoState.ServiceCategory} onChange={(e)=>handleSelectChange(e,"CargoServiceCategoryType")}  className="form-control" >
                          <option value="" disabled defaultValue> Select  Category</option>
                            {/* <option value="1" > Category Type 1</option>
                               <option value="2" > Category Type 2</option>
                               <option value="3" > Category Type 2</option> */}
                               
                               {transportServiceCategoryCodes.map(populatetransportServiceCategoryCodes => (
                                    <option key={populatetransportServiceCategoryCodes._id} value={populatetransportServiceCategoryCodes._id}>
                                    {populatetransportServiceCategoryCodes.codeListVersion}
                                    </option>
                               ))}

                        </select>
                           
                       

                    </div>
                    <div className="form-group">
                        <label for=""> Service Condition Type:</label>
                         <div>
                             <select  value={cargoState.ServiceConditionType}  onChange={(e)=>handleSelectChange(e,"CargoServiceConditionType")}  className="form-control" >
                               <option value="" disabled defaultValue>Select  Condition Type</option>
                               {transportServiceConditionTypeCodes.map(populatetransportServiceCategoryCodes => (
                                    <option key={populatetransportServiceCategoryCodes._id} value={populatetransportServiceCategoryCodes._id}>
                                    {populatetransportServiceCategoryCodes.codeListVersion}
                                    </option>
                               ))}
                             </select>                            
                        </div>                                                     
                     </div>
                     <div className="form-group">
                        <label for=""> Service Level:</label>
                         <div>
                             <select  value={cargoState.ServiceLevel}  onChange={(e)=>handleSelectChange(e,"CargoServiceLevel")} className="form-control" >
                             <option value="" disabled defaultValue>Select Service Level</option>
                                {transportServiceLevelCodes.map(transportServiceLevelCode => (
                                    <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                    {transportServiceLevelCode.codeListVersion}
                                    </option>
                               ))}
                             </select>                            
                        </div>                                                     
                     </div>


                     <div className="cardheader" onClick={handleTogglePickUp}>
                         Planned PickUP:
                     </div>
                       {togglePickUp && (
                        <div className="SpcaeRequirements">
                              {/* PickupLocation          */}
                       
                            <div className="card-header">
                                <a className="card-link collapsed" data-toggle="collapse" data-parent="#card-989304" href="#card-element-780304"> Pickup Location</a>
                            </div>
                            <div className="card-body">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fa fa-map-pin"></i>
                                        </div>
                                    </div>
                                    <input id="unlocationcode" name="unlocationcode" placeholder="UN Location:" type="text" className="form-control"/>
                                        <div className="button-group">
                                            <button name="Find" type="button" className="btn btn-primary ml-2">Find</button>
                                            <button name="Add" type="button" className="btn btn-secondary ml-2" onClick={()=>{handleAddNewToggle()}}>Add New</button>
                                            
                                        </div>
                                </div>  





                                {/* // now */}
                                 {handleAddNewTogglestate && <div className="card my-2">
                                 <div className="card-body">
                                    <div className="form-group">
                                        <label for="additionalLocationIdentification"> Additional Location Identification:</label>
                                        <select value={PickupState.AdditionalLocationIdentification}   onChange={(e)=>handleSelectChange(e,"PickupadditionalLocationIdentification")}
                                         className="form-control dropdown-toggle" id="additionalLocationIdentification" >
                                            <option value="Additional Location">Choose Location</option>
                                             <option value="" disabled defaultValue>Choose Location</option>
                                             {/* //flag 1 */}
                                                {Identifiertypes.map(transportServiceLevelCode => (
                                                    <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                                    {transportServiceLevelCode.codeListVersion}
                                                    </option>
                                            ))}

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="sublocationIdentification">Sublocation Identification:</label>
                                        <input value={PickupState.SublocationIdentification}  onChange={(e)=>handleInputChange(e,"PickupsublocationIdentification")}
                                          type="string" className="form-control" id="communsublocationIdentification" />
                                    </div>
                                    <div className="form-group">
                                        <label for="locationName">Location Name:</label>
                                        <input  value={PickupState.LocationName}  onChange={(e)=>handleInputChange(e,"PickuplocationName")}
                                        type="string" className="form-control" id="locationName" />
                                    </div>
                                    <div className="form-group">
                                        <label for="locationSpecificInstructions"> Location Specific Instructions:</label>
                                        <select value={PickupState.LocationSpecificInstructions} onChange={(e)=>handleSelectChange(e,"PickuplocationSpecificInstructions")}  className="form-control dropdown-toggle" id="locationSpecificInstructions" >
                                            <option value="Loaction">Choose Loaction</option>
                                              {/* //flag 1 */}
                                              
                                              {Description200types.map(transportServiceLevelCode => (
                                                    <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                                    {transportServiceLevelCode.codeListVersion}
                                                    </option>
                                            ))}

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="utcOffset">UTC Offset:</label>
                                        <input value={PickupState.UTCOffset} placeholder="UTCOffset" onChange={(e)=>handleInputChange(e,"PickuputcOffset")}
                                         type="text" className="form-control" id="utcOffset" />
                                    </div>

                                     {/* Address  start */}
                                    <div className="my-3">
                                        <div class="form-group">
                                            <label for="city">City:</label>
                                            <input value={PickupState.CityName} onChange={(e)=>handleInputChange(e,"PickUpcity")} 
                                             type="text" className="form-control" id="city" />
                                        </div>
                                        <div className="form-group">
                                            <label for="countrycode">Country:</label>
                                            <select value={PickupState.Country} onChange={(e)=>handleSelectChange(e,"Pickupcountry")}
                                             className="form-control dropdown-toggle" id="countrycode" >
                                                <option value="Country" defaultValue>Choose Country</option>
                                                  {/* //flag 1 */}
                                              {Countrycodes.map(transportServiceLevelCode => (
                                                    <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                                    {transportServiceLevelCode.codeListVersion}
                                                    </option>
                                            ))}
                                            </select>
                                        </div>
                                       
                                        <div className="form-group">
                                            <label for="crossStreet">Cross Street:</label>
                                            <input  value={PickupState.CrossStreet} onChange={(e)=>handleInputChange(e,"PickUpcrossStreet")}
                                             type="string" className="form-control" id="crossStreet" />
                                        </div>
                                        <div className="form-group">
                                            <label for="currencyOfPartyCode">Currency Of Party:</label>
                                            <select value={PickupState.CurrencyOfParty} onChange={(e)=>handleSelectChange(e,"PickupcurrencyOfPartyCode")}
                                             className="form-control dropdown-toggle" id="currencyOfPartyCode" >
                                                <option value="currencyOfPartyCode" defaultValue>Choose currencyOfPartyCode</option>
                                                  {/* //flag 1 */}
                                                  
                                              {Currencyofpartycodes.map(transportServiceLevelCode => (
                                                    <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                                    {transportServiceLevelCode.codeListVersion}
                                                    </option>
                                            ))}



                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="languageOfThePartyCode">Language Of the Party:</label>
                                            <select value={PickupState.LaunguageOftheParty} onChange={(e)=>handleSelectChange(e,"PickuplanguageOfThePartyCode")}
                                                className="form-control dropdown-toggle" id="languageOfThePartyCode" >
                                            <option value="languageOfThePartyCode" defaultValue>Choose languageOfThePartyCode</option>
                                               {/* //flag 1 */}
                                               
                                              {Languageofthepartycodes.map(transportServiceLevelCode => (
                                                    <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                                    {transportServiceLevelCode.codeListVersion}
                                                    </option>
                                            ))}



                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="name">Name:</label>
                                            <input   value={PickupState.Name} onChange={(e)=>handleInputChange(e,"PickUpname")}
                                            type="text" className="form-control" id="name" />
                                        </div>
                                        <div className="form-group">
                                            <label for="pOBoxNumber">Post Box Number:</label>
                                            <input  value={PickupState.PostBoxNumber} onChange={(e)=>handleInputChange(e,"PickUppOBoxNumber")}
                                            type="text" className="form-control" id="pOBoxNumber" />
                                        </div>
                                        <div className="form-group">
                                            <label for="postalCode">Postal Code:</label>
                                            <input  value={PickupState.PostalCode} onChange={(e)=>handleInputChange(e,"PickUppostalCode")} 
                                             type="text" className="form-control" id="postalCode" />
                                        </div>
                                        <div className="form-group">
                                            <label for="provinceCode"> Province:</label>
                                            <input value={PickupState.Province} onChange={(e)=>handleInputChange(e,"PickUpprovinceCode")}
                                             type="text" className="form-control" id="provinceCode" />
                                        </div>
                                        <div className="form-group">
                                            <label for="state"> State:</label>
                                            <input  value={PickupState.State} onChange={(e)=>handleInputChange(e,"PickUpstate")}
                                            type="text" className="form-control" id="state" />
                                        </div>
                                        <div className="form-group">
                                            <label for="streetAddressOne"> Street Address One:</label>
                                            <input value={PickupState.StreetAddressOne} onChange={(e)=>handleInputChange(e,"PickUpstreetAddressOne")}
                                             type="text" className="form-control" id="streetAddressOne" />
                                        </div>
                                        <div className="form-group">
                                            <label for="streetAddressTwo"> Street Address Two:</label>
                                            <input value={PickupState.StreetAddressTwo} onChange={(e)=>handleInputChange(e,"PickUpstreetAddressTwo")}
                                             type="text" className="form-control" id="streetAddressTwo" />
                                        </div>
                                        <div className="form-group">
                                            <label for="streetAddressThree"> Street Address Three:</label>
                                            <input value={PickupState.StreetAddressThree} onChange={(e)=>handleInputChange(e,"PickUpstreetAddressThree")}
                                             type="text" className="form-control" id="streetAddressThree" />
                                        </div>

                                       
                                        <div className="card my-3" id="card-109">
                                        <div className="card-header">
                                            <a className="collapsed card-link" data-toggle="collapse" data-parent="#card-109" href="#card-element-109">Geographical Coordinates:</a>
                                        </div>
                                    <div id="card-element-109" className="collapse">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label for="latitude"> Latitude:</label>
                                            <input  value={PickupState.Latitude} onChange={(e)=>handleInputChange(e,"PickUplatitude")}
                                            type="text" className="form-control" id="latitude" />
                                        </div>
                                        <div className="form-group">
                                            <label for="longitude"> Longitude:</label>
                                            <input value={PickupState.Longitutue} onChange={(e)=>handleInputChange(e,"PickUplongitude")}
                                             type="text" className="form-control" id="longitude" />
                                        </div>
                                  
                                </div>
                            </div>
                        </div>
                                     </div>
                                    {/* Address  End */}

                                    {/* Contact  start */}
                            
                                    <div id="card-989294">
                                        <div className="card my-3">
                                            <div className="card-header">
                                                <a className="card-link collapsed" data-toggle="collapse" data-parent="#card-989294" href="#card-element-780564">Contact:</a>
                                            </div>
                                            <div id="card-element-780564" className="collapse">
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label for="contactTypeCode">Contact Type:</label>
                                                    <select  value={PickupState.ContactType} onChange={(e)=>handleSelectChange(e,"PickupcontactTypeCode")}
                                                    className="form-control dropdown-toggle" id="contactTypeCode" >
                                                        <option value="contactTypeCode">Choose contactTypeCode</option>
                                                         {/* //flag 1 */}
                                                         
                                              {Contacttypecodes.map(transportServiceLevelCode => (
                                                    <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                                    {transportServiceLevelCode.codeListVersion}
                                                    </option>
                                            ))}



                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label for="personName">Person Name:</label>
                                                    <input value={PickupState.PersoneName} onChange={(e)=>handleInputChange(e,"PickuppersonName")}
                                                     type="text" className="form-control" id="personName" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="departmentName">Department Name:</label>
                                                    <input value={PickupState.DepormentName} onChange={(e)=>handleInputChange(e,"PickupdepartmentName")}
                                                     type="text" className="form-control" id="departmentName" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="jobTitle">Job Title:</label>
                                                    <input value={PickupState.JobTitle1} onChange={(e)=>handleInputChange(e,"PickUpjobTitle")}
                                                     type="text" className="form-control"  />
                                                </div>



                                                <div className="form-group">
                                                    <label for="responsibility">Responsibility:</label>
                                                    <select value={PickupState.Responsibility} onChange={(e)=>handleSelectChange(e,"Pickupresponsibility")}
                                                     className="form-control dropdown-toggle" id="responsibility" >
                                                         <option value="responsibility">Choose responsibility</option>
                                                          {/* //flag 1 */}
                                                          
                                              {Description70types.map(transportServiceLevelCode => (
                                                    <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                                    {transportServiceLevelCode.codeListVersion}
                                                    </option>
                                            ))}


                                                         
                                                     </select>
                                                </div>
                                                <div classNameName="card">
                                                    <h5>Communication Channel</h5>
                                                    <div className="form-group">
                                                        <label for="communicationChannelCode">Communication Channel Code:</label>
                                                        <select value={PickupState.CommunicationChannelCode} onChange={(e)=>handleSelectChange(e,"PickupcommunicationChannelCode")}
                                                         className="form-control dropdown-toggle" id="communicationChannelCode" >
                                                             <option value="responsibility">Choose ChannelCode</option>
                                                              {/* //flag 1 */}
                                                              


                                              {Communicationchannels.map(transportServiceLevelCode => (
                                                    <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                                    {transportServiceLevelCode.codeListVersion}
                                                    </option>
                                            ))}



                                                         </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="communicationValue">Communication Value:</label>
                                                        <input  value={PickupState.CommunicationValue} onChange={(e)=>handleInputChange(e,"PickUpcommunicationValue")}
                                                        type="text" className="form-control" id="communicationValue" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="communicationChannelName">Communication Channel Name:</label>
                                                        <input  value={PickupState.CommunicationChannelName} onChange={(e)=>handleInputChange(e,"PickUpcommunicationChannelName")}
                                                         type="text" className="form-control" id="communicationChannelName" />
                                                    </div>
                            
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                    {/* Contact   stop*/}


                                    <div id="card-element-576245" className="collapse">
                                        <div className="card-body">
                                                <div className="form-group">
                                                    <label for="dayOfTheWeekCode"> Day Of The Week:</label>
                                                    <select className="form-control dropdown-toggle" id="dayOfTheWeekCode" ></select>
                                                </div>
                                                <div className="form-group">
                                                    <label for="isOperational"> Is Operational:</label>
                                                    <input type="checkbox" className="form-control" id="isOperational" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="closingTime"> closingTime:</label>
                                                    <input type="time" className="form-control" id="closingTime" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="openingTime"> Opening Time:</label>
                                                    <input type="time" className="form-control" id="openingTime" />
                                                </div>
                                        </div>
                                    </div>
                                    <div id="card-element-576245" className="collapse">
                                        <div className="card-body">
                                                <div className="form-group">
                                                    <label for="isOperational"> Is Operational:</label>
                                                    <input type="checkbox" className="form-control" id="isOperational" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="specialDate"> Special Date:</label>
                                                    <input type="date" className="form-control" id="specialDateName" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="closingTime"> closingTime:</label>
                                                    <input type="time" className="form-control" id="closingTime" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="openingTime"> Opening Time:</label>
                                                    <input type="time" className="form-control" id="openingTime" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="specialDateName">Special Date Name:</label>
                                                    <select className="form-control dropdown-toggle" id="specialDateName" ></select>
                                                </div>
                                        </div>
                                    </div>
                               
                                 </div>
                                
                                </div>}                                  
                      
                        </div>     

                     
                            <div className="card my-2">
                            <div className="card-header">
                                <a className="card-title">Time Band:</a>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group row">
                                        <div className="input-group col-6 my-1">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">Start Date</div>
                                            </div>
                                            <input value={PickupState.TimeBandStartDate} onChange={(e)=>handleInputChange(e,"PickUpTimeBandStartDate")}
                                              id="startdate" name="startdate" type="date"
                                                required="required" className="form-control" />
                                        </div>
                                        <div className="input-group col-6 my-1">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">End Date</div>
                                            </div>
                                            <input value={PickupState.TimeBandEndDate} onChange={(e)=>handleInputChange(e,"PickUpTimeBandEndDate")}
                                             id="enddate" name="enddate" type="date"
                                                required="required" className="form-control" />
                                        </div>
                                        <div className="input-group col-6 my-1">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">Start Time</div>
                                            </div>
                                            <input value={PickupState.TimeBandStartTime} onChange={(e)=>handleInputChange(e,"PickUpTimeBandStartTime")}
                                             id="startdate" name="startdate" type="time"
                                                required="required" className="form-control" />
                                        </div>
                                        <div className="input-group col-6 my-1">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">End Time</div>
                                            </div>
                                            <input value={PickupState.TimeBandEndTime} onChange={(e)=>handleInputChange(e,"PickUpTimeBandEndTime")}
                                             id="endtime" name="endtime" type="time"
                                                required="required" className="form-control" />
                                        </div>
                                    </div>
                                  
                                </form>
                            </div>
                        </div>



                            <div className="card my-2">
                                <div className="card-header">
                                    <a className="card-title">Event Time:</a>
                                </div>
                                <div className="card-body">
                                   
                                        <div className="form-group col-10 row">
                                            <div className="input-group col-6 my-1">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">Start Date</div>
                                                </div>
                                                <input value={PickupState.startDate} onChange={(e)=>handleInputChange(e,"PickUpEventTimeStartTime")}
                                                 id="startdate" name="startdate" type="date"
                                                    required="required" className="form-control" />
                                            </div>
                                            <div className="input-group col-6 my-1">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">Start Time</div>
                                                </div>
                                                <input value={PickupState.startTime} onChange={(e)=>handleInputChange(e,"PickUpEventTimeEndTime")}
                                                 id="endtime" name="endtime" type="time"
                                                    required="required" className="form-control" />
                                            </div>
                                        </div>
                                
                                  
                                </div>
                            </div>
                    
                         </div>
                         
                       )}



                     <div className="cardheader" onClick={handleToggleDropOff}>
                         Planned DropOff:
                       </div>
                       {toggleDropOff && (
                            <div className="SpcaeRequirements">
                           
                     
                          <div className="card-header">
                              <a className="card-link collapsed" data-toggle="collapse" data-parent="#card-989304" href="#card-element-780304"> Pickup Location</a>
                          </div>
                          <div className="card-body">
                              <div className="input-group">
                                  <div className="input-group-prepend">
                                      <div className="input-group-text">
                                          <i className="fa fa-map-pin"></i>
                                      </div>
                                  </div>
                                  <input id="unlocationcode" name="unlocationcode" placeholder="UN Location:" type="text" className="form-control"/>
                                      <div className="button-group">
                                          <button name="Find" type="button" className="btn btn-primary ml-2">Find</button>
                                          <button name="Add" type="button" className="btn btn-secondary ml-2" onClick={()=>{handleAddNewToggleDrop()}}>Add New</button>
                                          
                                      </div>
                              </div>  




      
                              {/* // now */}
                               {AddNewToggleDrop && <div className="card my-2">
                               <div className="card-body">
                                  <div className="form-group">
                                      <label for="additionalLocationIdentification"> Additional Location Identification:</label>
                                      <select value={DropOffState.AdditionalLocationIdentification}   onChange={(e)=>handleSelectChange(e,"DropUpadditionalLocationIdentification")}
                                       className="form-control dropdown-toggle" id="additionalLocationIdentification" >
                                          <option value="Additional Location">Choose Location</option>
                                          {Identifiertypes.map(transportServiceLevelCode => (
                                                    <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                                    {transportServiceLevelCode.codeListVersion}
                                                    </option>
                                            ))}

                                      </select>
                                  </div>
                                  <div className="form-group">
                                      <label for="sublocationIdentification">Sublocation Identification:</label>
                                      <input value={DropOffState.SublocationIdentification}  onChange={(e)=>handleInputChange(e,"DropUpsublocationIdentification")}
                                        type="string" className="form-control" id="communsublocationIdentification" />
                                  </div>
                                  <div className="form-group">
                                      <label for="locationName">Location Name:</label>
                                      <input  value={DropOffState.LocationName}  onChange={(e)=>handleInputChange(e,"DropUplocationName")}
                                      type="string" className="form-control" id="locationName" />
                                  </div>
                                  <div className="form-group">
                                      <label for="locationSpecificInstructions"> Location Specific Instructions:</label>
                                      <select value={DropOffState.LocationSpecificInstructions} onChange={(e)=>handleSelectChange(e,"DropUplocationSpecificInstructions")}  className="form-control dropdown-toggle" id="locationSpecificInstructions" >
                                          <option value="Loaction">Choose Loaction</option>
                                          {Description200types.map(transportServiceLevelCode => (
                                                    <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                                    {transportServiceLevelCode.codeListVersion}
                                                    </option>
                                            ))}
                                      </select>
                                  </div>
                                  <div className="form-group">
                                      <label for="utcOffset">UTC Offset:</label>
                                      <input value={DropOffState.UTCOffset} placeholder="UTCOffset" onChange={(e)=>handleInputChange(e,"DropUputcOffset")}
                                       type="text" className="form-control" id="utcOffset" />
                                  </div>

                                   {/* Address  start */}
                                  <div className="my-3">
                                      <div class="form-group">
                                          <label for="city">City:</label>
                                          <input value={DropOffState.CityName} onChange={(e)=>handleInputChange(e,"DropUpcity")} 
                                           type="text" className="form-control" id="city" />
                                      </div>
                                      <div className="form-group">
                                          <label for="countrycode">Country:</label>
                                          <select value={DropOffState.Country} onChange={(e)=>handleSelectChange(e,"DropUpcountry")}
                                           className="form-control dropdown-toggle" id="countrycode" >
                                              <option value="Country" defaultValue>Choose Country</option>
                                              {Countrycodes.map(transportServiceLevelCode => (
                                                    <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                                    {transportServiceLevelCode.codeListVersion}
                                                    </option>
                                            ))}
                                          </select>
                                      </div>
                                     
                                      <div className="form-group">
                                          <label for="crossStreet">Cross Street:</label>
                                          <input  value={DropOffState.CrossStreet} onChange={(e)=>handleInputChange(e,"DropUpcrossStreet")}
                                           type="string" className="form-control" id="crossStreet" />
                                      </div>
                                      <div className="form-group">
                                          <label for="currencyOfPartyCode">Currency Of Party:</label>
                                          <select value={DropOffState.CurrencyOfParty} onChange={(e)=>handleSelectChange(e,"DropUpcurrencyOfPartyCode")}
                                           className="form-control dropdown-toggle" id="currencyOfPartyCode" >
                                              <option value="currencyOfPartyCode" defaultValue>Choose currencyOfPartyCode</option>
                                              {Currencyofpartycodes.map(transportServiceLevelCode => (
                                                    <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                                    {transportServiceLevelCode.codeListVersion}
                                                    </option>
                                            ))}
                                          </select>
                                      </div>
                                      <div className="form-group">
                                          <label for="languageOfThePartyCode">Language Of the Party:</label>
                                          <select value={DropOffState.LaunguageOftheParty} onChange={(e)=>handleSelectChange(e,"DropUplanguageOfThePartyCode")}
                                              className="form-control dropdown-toggle" id="languageOfThePartyCode" >
                                          <option value="languageOfThePartyCode" defaultValue>Choose languageOfThePartyCode</option>
                                          {Languageofthepartycodes.map(transportServiceLevelCode => (
                                                    <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                                    {transportServiceLevelCode.codeListVersion}
                                                    </option>
                                            ))}
                                          </select>
                                      </div>
                                      <div className="form-group">
                                          <label for="name">Name:</label>
                                          <input   value={DropOffState.Name} onChange={(e)=>handleInputChange(e,"DropUpname")}
                                          type="text" className="form-control" id="name" />
                                      </div>
                                      <div className="form-group">
                                          <label for="pOBoxNumber">Post Box Number:</label>
                                          <input  value={DropOffState.PostBoxNumber} onChange={(e)=>handleInputChange(e,"DropUppOBoxNumber")}
                                          type="text" className="form-control" id="pOBoxNumber" />
                                      </div>
                                      <div className="form-group">
                                          <label for="postalCode">Postal Code:</label>
                                          <input  value={DropOffState.PostalCode} onChange={(e)=>handleInputChange(e,"DropUppostalCode")} 
                                           type="text" className="form-control" id="postalCode" />
                                      </div>
                                      <div className="form-group">
                                          <label for="provinceCode"> Province:</label>
                                          <input value={DropOffState.Province} onChange={(e)=>handleInputChange(e,"DropUpprovinceCode")}
                                           type="text" className="form-control" id="provinceCode" />
                                      </div>
                                      <div className="form-group">
                                          <label for="state"> State:</label>
                                          <input  value={DropOffState.State} onChange={(e)=>handleInputChange(e,"DropOffStateState")}
                                          type="string" className="form-control" id="state" />
                                      </div>
                                      <div className="form-group">
                                          <label for="streetAddressOne"> Street Address One:</label>
                                          <input value={DropOffState.StreetAddressOne} onChange={(e)=>handleInputChange(e,"DropUpstreetAddressOne")}
                                           type="string" className="form-control" id="streetAddressOne" />
                                      </div>
                                      <div className="form-group">
                                          <label for="streetAddressTwo"> Street Address Two:</label>
                                          <input value={DropOffState.StreetAddressTwo} onChange={(e)=>handleInputChange(e,"DropUpstreetAddressTwo")}
                                           type="string" className="form-control" id="streetAddressTwo" />
                                      </div>
                                      <div className="form-group">
                                          <label for="streetAddressThree"> Street Address Three:</label>
                                          <input value={DropOffState.StreetAddressThree} onChange={(e)=>handleInputChange(e,"DropUpstreetAddressThree")}
                                           type="string" className="form-control" id="streetAddressThree" />
                                      </div>

                                     
                                      <div className="card my-3" id="card-109">
                                      <div className="card-header">
                                          <a className="collapsed card-link" data-toggle="collapse" data-parent="#card-109" href="#card-element-109">Geographical Coordinates:</a>
                                      </div>
                                  <div id="card-element-109" className="collapse">
                                  <div className="card-body">
                                      <div className="form-group">
                                          <label for="latitude"> Latitude:</label>
                                          <input  value={DropOffState.Latitude} onChange={(e)=>handleInputChange(e,"DropUplatitude")}
                                          type="string" className="form-control" id="latitude" />
                                      </div>
                                      <div className="form-group">
                                          <label for="longitude"> Longitude:</label>
                                          <input value={DropOffState.Longitutue} onChange={(e)=>handleInputChange(e,"DropUplongitude")}
                                           type="string" className="form-control" id="longitude" />
                                      </div>
                                
                              </div>
                          </div>
                      </div>
                                   </div>
                                  {/* Address  End */}

                                  {/* Contact  start */}
                          
                                  <div id="card-989294">
                                      <div className="card my-3">
                                          <div className="card-header">
                                              <a className="card-link collapsed" data-toggle="collapse" data-parent="#card-989294" href="#card-element-780564">Contact:</a>
                                          </div>
                                          <div id="card-element-780564" className="collapse">
                                          <div className="card-body">
                                              <div className="form-group">
                                                  <label for="contactTypeCode">Contact Type:</label>
                                                  <select  value={DropOffState.ContactType} onChange={(e)=>handleSelectChange(e,"DropUpcontactTypeCode")}
                                                  className="form-control dropdown-toggle" id="contactTypeCode" >
                                                      <option value="contactTypeCode">Choose contactTypeCode</option>
                                                      {Contacttypecodes.map(transportServiceLevelCode => (
                                                    <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                                    {transportServiceLevelCode.codeListVersion}
                                                    </option>
                                            ))}
                                                  </select>
                                              </div>
                                              <div className="form-group">
                                                  <label for="personName">Person Name:</label>
                                                  <input value={DropOffState.PersoneName} onChange={(e)=>handleInputChange(e,"DropUppersonName")}
                                                   type="text" className="form-control" id="personName" />
                                              </div>
                                              <div className="form-group">
                                                  <label for="departmentName">Department Name:</label>
                                                  <input value={DropOffState.DepormentName} onChange={(e)=>handleInputChange(e,"DropUpdepartmentName")}
                                                   type="text" className="form-control" id="departmentName" />
                                              </div>
                                              <div className="form-group">
                                                  <label for="jobTitle">Job Title:</label>
                                                  <input value={DropOffState.JobTitle1} onChange={(e)=>handleInputChange(e,"DropUpjobTitle")}
                                                   type="text" className="form-control"  />
                                              </div>



                                              <div className="form-group">
                                                  <label for="responsibility">Responsibility:</label>
                                                  <select value={DropOffState.Responsibility} onChange={(e)=>handleSelectChange(e,"DropUpresponsibility")}
                                                   className="form-control dropdown-toggle" id="responsibility" >
                                                       <option value="responsibility">Choose responsibility</option>
                                                       {Description70types.map(transportServiceLevelCode => (
                                                    <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                                    {transportServiceLevelCode.codeListVersion}
                                                    </option>
                                            ))}
                                                   </select>
                                              </div>
                                              <div classNameName="card">
                                                  <h5>Communication Channel</h5>
                                                  <div className="form-group">
                                                      <label for="communicationChannelCode">Communication Channel Code:</label>
                                                      <select value={DropOffState.CommunicationChannelCode} onChange={(e)=>handleSelectChange(e,"DropUpcommunicationChannelCode")}
                                                       className="form-control dropdown-toggle" id="communicationChannelCode" >
                                                           <option value="responsibility">Choose ChannelCode</option>
                                                           {Communicationchannels.map(transportServiceLevelCode => (
                                                    <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                                    {transportServiceLevelCode.codeListVersion}
                                                    </option>
                                            ))}
                                                     
                                                       </select>
                                                  </div>
                                                  <div className="form-group">
                                                      <label for="communicationValue">Communication Value:</label>
                                                      <input  value={DropOffState.CommunicationValue} onChange={(e)=>handleInputChange(e,"DropUpcommunicationValue")}
                                                      type="text" className="form-control" id="communicationValue" />
                                                  </div>
                                                  <div className="form-group">
                                                      <label for="communicationChannelName">Communication Channel Name:</label>
                                                      <input  value={DropOffState.CommunicationChannelName} onChange={(e)=>handleInputChange(e,"DropUpcommunicationChannelName")}
                                                       type="text" className="form-control" id="communicationChannelName" />
                                                  </div>
                          
                                              </div>
                                          </div>
                                      </div>
                                      </div>
                                      </div>
                                  {/* Contact   stop*/}


                                  <div id="card-element-576245" className="collapse">
                                      <div className="card-body">
                                          {/* <form role="form" className="form-inline"> */}
                                              <div className="form-group">
                                                  <label for="dayOfTheWeekCode"> Day Of The Week:</label>
                                                  <select className="form-control dropdown-toggle" id="dayOfTheWeekCode" ></select>
                                              </div>
                                              <div className="form-group">
                                                  <label for="isOperational"> Is Operational:</label>
                                                  <input type="checkbox" className="form-control" id="isOperational" />
                                              </div>
                                              <div className="form-group">
                                                  <label for="closingTime"> closingTime:</label>
                                                  <input type="time" className="form-control" id="closingTime" />
                                              </div>
                                              <div className="form-group">
                                                  <label for="openingTime"> Opening Time:</label>
                                                  <input type="time" className="form-control" id="openingTime" />
                                              </div>
                                          {/* </form> */}
                                      </div>
                                  </div>
                                  <div id="card-element-576245" className="collapse">
                                      <div className="card-body">
                                          {/* <form role="form" className="form-inline"> */}
                                              <div className="form-group">
                                                  <label for="isOperational"> Is Operational:</label>
                                                  <input type="checkbox" className="form-control" id="isOperational" />
                                              </div>
                                              <div className="form-group">
                                                  <label for="specialDate"> Special Date:</label>
                                                  <input type="date" className="form-control" id="specialDateName" />
                                              </div>
                                              <div className="form-group">
                                                  <label for="closingTime"> closingTime:</label>
                                                  <input type="time" className="form-control" id="closingTime" />
                                              </div>
                                              <div className="form-group">
                                                  <label for="openingTime"> Opening Time:</label>
                                                  <input type="time" className="form-control" id="openingTime" />
                                              </div>
                                              <div className="form-group">
                                                  <label for="specialDateName">Special Date Name:</label>
                                                  <select className="form-control dropdown-toggle" id="specialDateName" ></select>
                                              </div>
                                          {/* </form> */}
                                      </div>
                                  </div>
                             
                               </div>
                              
                              </div>}                                  
                    
                      </div>     

                          <div className="card my-2">
                          <div className="card-header">
                              <a className="card-title">Time Band:</a>
                          </div>
                          <div className="card-body">
                              {/* <form> */}
                                  <div className="form-group row">
                                      <div className="input-group col-6 my-1">
                                          <div className="input-group-prepend">
                                              <div className="input-group-text">Start Date</div>
                                          </div>
                                          <input value={DropOffState.TimeBandStartDateDP} onChange={(e)=>handleInputChange(e,"DropUpTimeBandStartDate")}
                                              id="startdate" name="startdate" type="date"    
                                              required="required" className="form-control" />
                                      </div>
                                      <div className="input-group col-6 my-1">
                                          <div className="input-group-prepend">
                                              <div className="input-group-text">End Date</div>
                                          </div>
                                          <input value={DropOffState.TimeBandEndDateDP} onChange={(e)=>handleInputChange(e,"DropUpTimeBandEndDate")}
                                           id="enddate" name="enddate" type="date"
                                              required="required" className="form-control" />
                                      </div>
                                      <div className="input-group col-6 my-1">
                                          <div className="input-group-prepend">
                                              <div className="input-group-text">Start Time</div>
                                          </div>
                                          <input value={DropOffState.TimeBandStartTimeDP} onChange={(e)=>handleInputChange(e,"DropUpTimeBandStartTime")}
                                           id="startdate" name="startdate" type="time"
                                              required="required" className="form-control" />
                                      </div>
                                      <div className="input-group col-6 my-1">
                                          <div className="input-group-prepend">
                                              <div className="input-group-text">End Time</div>
                                          </div>
                                          <input value={DropOffState.TimeBandEndTimeDP} onChange={(e)=>handleInputChange(e,"DropUpTimeBandEndTime")}
                                           id="endtime" name="endtime" type="time"
                                              required="required" className="form-control" />
                                      </div>
                                  </div>
                                
                              {/* </form> */}
                          </div>
                      </div>



                          <div className="card my-2">
                              <div className="card-header">
                                  <a className="card-title">Event Time:</a>
                              </div>
                              <div className="card-body">
                                  {/* <form className="row"> */}
                                      <div className="form-group col-10 row">
                                          <div className="input-group col-6 my-1">
                                              <div className="input-group-prepend">
                                                  <div className="input-group-text">End Date</div>
                                              </div>
                                              <input value={DropOffState.EndDate} onChange={(e)=>handleInputChange(e,"DropUpEventTimeStartTime")}
                                               id="startdate" name="startdate" type="date"
                                                  required="required" className="form-control" />
                                          </div>
                                          <div className="input-group col-6 my-1">
                                              <div className="input-group-prepend">
                                                  <div className="input-group-text">End Time</div>
                                              </div>
                                              <input value={DropOffState.Endtime} onChange={(e)=>handleInputChange(e,"DropUpEventTimeEndTime")}
                                               id="endtime" name="endtime" type="time"
                                                  required="required" className="form-control" />
                                          </div>
                                      </div>
                              
                                  {/* </form> */}
                              </div>
                          </div>
                  
                       </div>
                     
                         
                       )}




                     {/* Space Requirements:   */}
                       <div className="cardheader" onClick={handleToggleSpace}>
                       Space Requirements:
                     </div>
                       {toggleSpace && (
          
                          
                         <div className="SpcaeRequirements">
                               <div className="card-header">
                                <a className="card-title">Cargo Characteristics:</a>
                            </div>
                          
                            {/* cargoType */}
                            <div className="form-group">
                                     <label className="col-12 control-label" for="cargoTypeCode">Cargo Type</label>
                                     <div className="col-12">
                                         <select id="cargoTypeCode" name="cargoTypeCode" className="form-control"value={spacestate.cargoTypeCode} onChange={(e)=>handleSelectChange(e,"cargoTypeCode")} >
                                             <option value="" disabled defaultValue>
                                                 Select Cargo Type
                                                         </option>
                                             {cargoTypeCodes.map(cargoTypeCode => (
                                                 <option key={cargoTypeCode._id} value={cargoTypeCode.codeListVersion}>
                                                     {cargoTypeCode.codeListVersion}
                                                 </option>
                                             ))}
                                         
                                         </select>
                                        

                                     </div>
                                 </div>
                             {/* Harmonized type */}
                                <div className="form-group">
                                     <label className="col-12 control-label" for="harmonizedSystemCode">Harmonized System</label>
                                     <div className="col-12">
                                         <select id="harmonizedSystemCode" name="harmonizedSystemCode"
                                             className="form-control" value={spacestate.harmonizedSystemCode} onChange={(e)=>handleSelectChange(e,"harmonizedSystemCode")} >
                                             <option value="" disabled defaultValue>
                                                 Select Cargo Type
                                                         </option>
                                              {harmonizedSystemCodes.map(harmonizedSystemCode => (
                                                 <option key={harmonizedSystemCode._id} value={harmonizedSystemCode.codeListVersion}>
                                                     {harmonizedSystemCode.codeListVersion}
                                                 </option>
                                             ))}
                                         </select>

                                     </div>
                                 </div>
                                  {/* cargoTypeDescription */}
                                  <div className="form-group">
                                     <label className="col-12 control-label" for="cargoTypeDescription">Cargo Type Description</label>
                                     <div className="col-12">
                                         <select id="cargoTypeDescription" name="cargoTypeDescription" className="form-control" value={spacestate.cargoTypeDescription} onChange={(e)=>handleSelectChange(e,"cargoTypeDescription")}>
                                             <option value="" disabled defaultValue>
                                                 Cargo Type Description
                                                     </option>
                                             {cargoTypeDescriptions.map(cargoTypeDescription => (
                                                 <option key={cargoTypeDescription._id} value={cargoTypeDescription.codeListVersion}>
                                                     {cargoTypeDescription.codeListVersion}
                                                 </option>
                                             ))}
                                         </select>
                                      </div>
                                   </div>

                                  {/* Country Of Origin    */}
                              
                                    
                                     <div className="form-group">
                                         <label className="col-12 control-label" for="countryOfOriginCode">Country Of Origin</label>
                                         <div className="col-12">
                                             <select id="countryOfOriginCode" name="countryOfOriginCode"
                                                 className="form-control" value={spacestate.countryOfOriginCode} onChange={(e)=>handleSelectChange(e,"countryOfOriginCode")} >
                                                 <option value="" disabled defaultValue>
                                                     Select Country Of Origin
                                                     </option>
                                                 {countryOfOriginCodes.map(countryOfOriginCode => (
                                                     <option key={countryOfOriginCode._id} value={countryOfOriginCode.codeListVersion}>
                                                         {countryOfOriginCode.codeListVersion}
                                                     </option>
                                                 ))}
                                             </select>
                                             </div>
                                      </div>
                                    {/* Final Destination Country */}

                                    <div className="form-group">
                                         <label className="col-12 control-label" for="finalDestinationCountry">Final Destination Country</label>
                                         <div className="col-12">
                                             <select id="finalDestinationCountry" name="finalDestinationCountry"
                                                 className="form-control" value={spacestate.finalDestinationCountry} onChange={(e)=>handleSelectChange(e,"finalDestinationCountry")}>
                                                 <option value="" disabled defaultValue>
                                                     Select Final Destination Country
                                                     </option>
                                                 {finalDestinationCountrys.map(finalDestinationCountry => (
                                                     <option key={finalDestinationCountry._id} value={finalDestinationCountry.codeListVersion}>
                                                         {finalDestinationCountry.codeListVersion}
                                                     </option>
                                                 ))}
                                             </select>
                                          </div>
                                     </div>

                              {/* new */}

                              {/* Total Gross Volume       */}
                                        
                              <div className="form-group">
                             <label className="col-12 control-label" for="totalGrossVolume" >Total Gross Volume</label>
                              <div className="col-12">
                                 <div className="input-group">
                                     <input id="totalGrossVolume" name="totalGrossVolume"
                                         className="form-control" placeholder="Volume" type="text" value={spacestate.totalGrossVolume} onChange={(e)=>handleInputChange(e,"totalGrossVolume")}/>
                                     <select value={spacestate.totalGrossVolumeUnits } onChange={(e)=>handleSelectChange(e,"totalGrossVolume")}>
                                     <option>Select unit</option>
                                         {measurementtypes.map(item=>{
                                             return <option key={item.codeListVersion} value={item.codeListVersion}>{item.codeListVersion}</option>
                                         }) }
                                     </select>
                                 </div>
                                 </div>
                             </div>
                        
                                 {/* Total Gross Weight */}
                                 <div className="form-group">
                                    <label className="col-12 control-label" for="totalGrossWeight">Total Gross Weight</label>
                                    <div className="col-12">
                                        <div className="input-group">
                                            <input id="totalGrossWeight" name="totalGrossWeight"
                                                className="form-control" placeholder="Weight" type="text" value={spacestate.totalGrossWeight } onChange={(e)=>handleInputChange(e,"totalGrossWeight")} />
                                          
                                             <select value={spacestate.totalGrossWeightUnits }onChange={(e)=>handleSelectChange(e,"totalGrossWeight")}>
                                             <option defaultValue>Select unit</option>
                                                 {measurementtypes.map(item=>{
                                                     return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                 }) }
                                              </select>
                                              
                                        </div>
                                    </div>
                                </div>


              
                                   
                        
                                 {/* Total Transport Net Weight */}
                                    <div className="form-group">
                                     <label className="col-12 control-label" for="totalTransportNetWeight">Total Transport Net Weight</label>
                                     <div className="col-12">
                                         <div className="input-group">
                                             <input id="totalTransportNetWeight" name="totalTransportNetWeight"
                                                 className="form-control" placeholder="Weight" type="text" value={spacestate.totalTransportNetWeight } onChange={(e)=>handleInputChange(e,"totalTransportNetWeight")}  />
                                            <select value={spacestate.totalTransportNetWeightUnits } onChange={(e)=>handleSelectChange(e,"totalTransportNetWeight")}>                                              
                                            <option defaultValue>Select unit</option>
                                                  {measurementtypes.map(item=>{
                                                      return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                  }) }
                                               </select>
                                         </div>
                                     </div>
                                 </div>
                                  {/* Total Chargeable Weight */}
                                    <div className="form-group">
                                     <label className="col-12 control-label" for="totalChargeableWeight">Total Chargeable Weight</label>
                                     <div className="col-12">
                                         <div className="input-group">
                                             <input id="totalChargeableWeight" name="totalChargeableWeight"
                                                 className="form-control" placeholder="placeholder" type="text" value={spacestate.totalChargeableWeight } onChange={(e)=>handleInputChange(e,"totalChargeableWeight")} />
                                            <select value={spacestate.totalChargeableWeightUnits } onChange={(e)=>handleSelectChange(e,"totalChargeableWeight")}>                                              
                                            <option defaultValue>Select unit</option>
                                                  {measurementtypes.map(item=>{
                                                      return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                  }) }
                                               </select>
                                         </div>
                                     </div>
                                 </div>
                                  {/* Declared Weight For Customs */}
                                  <div className="form-group">
                                     <label className="col-12 control-label" for="declaredWeightForCustoms">Declared Weight For Customs</label>
                                     <div className="col-12">
                                         <div className="input-group">
                                             <input id="declaredWeightForCustoms" name="declaredWeightForCustoms"
                                                 className="form-control" placeholder="placeholder" type="text" value={spacestate.declaredWeightForCustoms } onChange={(e)=>handleInputChange(e,"declaredWeightForCustoms")} />
                                             <select value={spacestate.declaredWeightForCustomsUnits } onChange={(e)=>handleSelectChange(e,"declaredWeightForCustoms")}>                                              
                                             <option defaultValue>Select unit</option>
                                                  {measurementtypes.map(item=>{
                                                      return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                  }) }
                                               </select>
                                         </div>
                                     </div>
                                 </div>
                                   {/* Total Loading Length */}
                                   <div className="form-group">
                                     <label className="col-12 control-label" for="totalLoadingLength">Total Loading Length</label>
                                     <div className="col-12">
                                         <div className="input-group">
                                             <input id="totalLoadingLength" name="totalLoadingLength"
                                                 className="form-control" placeholder="placeholder" type="text" value={spacestate.totalLoadingLength } onChange={(e)=>handleInputChange(e,"totalLoadingLength")} />
                                           <select value={spacestate.totalLoadingLengthUnits } onChange={(e)=>handleSelectChange(e,"totalLoadingLength")}>                                              
                                           <option defaultValue>Select unit</option>
                                                  {measurementtypes.map(item=>{
                                                      return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                  }) }
                                               </select>
                                         </div>
                                     </div>
                                 </div>

                                  {/* Associated Invoice Amount */}


                                  <div className="form-group">
                                     <label className="col-12 control-label" for="associatedInvoiceAmount">Associated Invoice Amount</label>
                                     <div className="col-12">
                                         <div className="input-group">
                                             <input id="associatedInvoiceAmount" name="associatedInvoiceAmount"
                                                 className="form-control" placeholder="placeholder" type="text"  value={spacestate.associatedInvoiceAmount } onChange={(e)=>handleInputChange(e,"associatedInvoiceAmount")} />
                                          
                                              <select value={spacestate.associatedInvoiceAmountUnits } onChange={(e)=>handleSelectChange(e,"associatedInvoiceAmount")}>                                              
                                              <option defaultValue>Select unit</option>
                                               {/* amounttypes */}
                                                  {amounttypes.map(item=>{
                                                      return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                  }) }
                                               </select>
                                         </div>
                                     </div>
                                 </div>

                                 {/* Declared Value For Customs< */}
                                 <div className="form-group">
                                     <label className="col-12 control-label" for="declaredValueForCustoms">Declared Value For Customs</label>
                                     <div className="col-12">
                                         <div className="input-group">
                                             <input id="declaredValueForCustoms" name="declaredValueForCustoms"
                                                 className="form-control" placeholder="Declared Value For Customs" type="text"  value={spacestate.declaredValueForCustoms } onChange={(e)=>handleInputChange(e,"declaredValueForCustoms")} />
                                              <select value={spacestate.declaredValueForCustomsUnits } onChange={(e)=>handleSelectChange(e,"declaredValueForCustoms")}>                                              
                                              <option defaultValue>Select unit</option>
                                                  {amounttypes.map(item=>{
                                                      return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                  }) }
                                               </select>
                                         </div>
                                     </div>
                                 </div>

                             {/* Total Package Quantity */}

                                 <div className="form-group">
                                     <label className="col-12 control-label" for="totalPackageQuantity">Total Package Quantity</label>
                                     <div className="col-12">
                                         <div className="input-group">
                                             <input id="totalPackageQuantity" name="totalPackageQuantity"
                                                 className="form-control" placeholder="placeholder" type="text"  value={spacestate.totalPackageQuantity } onChange={(e)=>handleInputChange(e,"totalPackageQuantity")} />
                                              <select value={spacestate.totalPackageQuantityUnits } onChange={(e)=>handleSelectChange(e,"totalPackageQuantity")}>                                              
                                              <option defaultValue>Select unit</option>
                                                  {quantitytypes.map(item=>{
                                                      return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                  }) }
                                               </select>
                                         </div>
                                     </div>
                                 </div>
                             {/* Total Item Quantity: */}
                                 <div className="form-group">
                                     <label className="col-12 control-label"
                                         for="totalItemQuantity">Total Item Quantity:</label>
                                     <div className="col-12">
                                         <div className="input-group">
                                             <input id="totalItemQuantity" name="totalItemQuantity"
                                                 className="form-control" placeholder="placeholder" type="text"  value={spacestate.totalItemQuantity } onChange={(e)=>handleInputChange(e,"totalItemQuantity")} />
                                             <select value={spacestate.totalItemQuantityUnits } onChange={(e)=>handleSelectChange(e,"totalItemQuantity")}>                                              
                                              <option defaultValue>Select unit</option>
                                                  {quantitytypes.map(item=>{
                                                      return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                  }) }
                                               </select>
                                         </div>
                                     </div>
                                 </div>

                                    {/* 2 Packagetype */}
                          
                            
                             <div className="card-header ">
                                 <a className="card-title">Package Total:</a>
                               
                             </div>
                      {/* Package Type */}
                                 <div className="form-group">
                                     <label className="col-12 control-label" for="packageTypeCode">Package Type:</label>
                                     <div className="col-12">
                                         <select id="packageTypeCode" name="packageTypeCode"
                                             className="form-control" value={spacestate.packageTypeCode} onChange={(e)=>handleSelectChange(e,"packageTypeCode")} >
                                              <option defaultValue>select package</option>
                                             {/* packagetypecodes loop */}
                                             {packagetypecodes.map((item)=>{
                                                  return <option key={item._id} value={item._id}>{item.codeListVersion}</option>
                                             })}
                                         </select>
                                     </div>
                                 </div>


                               {/* PackageTT Total Package Quantity */}
                                     <div className="form-group">
                                         <label className="col-12 control-label" htmlFor="totalPackageQuantityPT">Total Package Quantity</label>
                                         <div className="col-12">
                                         <input
                                             value={spacestate.totalPackageQuantityPT}
                                             onChange={(e)=>handleInputChange(e,"totalPackageQuantityPT")}
                                             name="totalPackageQuantity"
                                             id="totalPackageQuantity"
                                             type="number"
                                             className="form-control"
                                         />
                                         {/* {spacestate.errors["totalPackageQuantity"] && <div className="alert alert-danger">{spacestate.errors["totalPackageQuantity"]}</div>} */}
                                         </div>
                                     </div>

                                     {/* Total Gross WeightPT */}
                                     <div className="form-group">
                                         <label className="col-12 control-label" for="totalGrossWeightPT">Total Gross Weight</label>
                                         <div className="col-12">
                                         <div className="input-group">
                                                 <input id="totalGrossWeight" name="totalGrossWeightPT"
                                                     className="form-control" placeholder="Weight" type="text"  value={spacestate.totalGrossWeightPT } onChange={(e)=>handleInputChange(e,"totalGrossWeightPT")} />
                                                 <select value={spacestate.totalGrossWeightPTUnits } onChange={(e)=>handleSelectChange(e,"totalGrossWeightPT")}>                                              
                                                     <option defaultValue>Select unit</option>
                                                     {measurementtypes.map(item=>{
                                                         return <option key={item.codeListVersion} value={item.codeListVersion}>{item.codeListVersion}</option>
                                                     }) }
                                                 </select>
                                             </div>
                                         </div>
                                     </div>
                                 {/* Total Gross VolumePT */}
                                 <div className="form-group">
                                     <label className="col-12 control-label" for="totalGrossVolumePT">Total Gross Volume</label>
                                     <div className="col-12">
                                     <div className="input-group">
                                                 <input id="totalGrossVolume" name="totalGrossVolumePT"
                                                     className="form-control" placeholder="Volume" type="text"  value={spacestate.totalGrossVolumePT } onChange={(e)=>handleInputChange(e,"totalGrossVolumePT")} />
                                                <select value={spacestate.totalGrossVolumePTUnits } onChange={(e)=>handleSelectChange(e,"totalGrossVolumePT")}>                                              
                                                <option defaultValue>Select unit</option>
                                                  {measurementtypes.map(item=>{
                                                      return <option key={item.codeListVersion} value={item.codeListVersion}>{item.codeListVersion}</option>
                                                  }) }
                                                </select>
                                                </div>
                                     </div>
                                 </div>
  
                          </div>
                      
                      
                      )}

                    


            </form>
                


            <button className="submitButton" onClick={handleSubmit}>Submit</button>
            </div>

        </div>
    )
}

export default TransportCapacityBooking
