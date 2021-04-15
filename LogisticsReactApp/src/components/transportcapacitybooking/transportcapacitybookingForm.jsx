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




const createTransportcapacitybooking =() => {

  const [ServiceDetails,setServiceDetails] = useState(false)
  const [PickUpLocation,setPickUpLocation] = useState(false)
  const [pickUPTime,setpickUPTime] = useState(false)
  const [DropOffLocation,setDropOffLocation] = useState(false)
  const [DropOffTime,setDropOffTime] = useState(false)
  const [collapseSpecialRequirements,setcollapseSpecialRequirements] =useState(false)

  const data = useSelector((state)=> state.tvbDta)
  

  // const [enableNextOd,setenableNextOd] = useState(false)
  // const [enableNextPp,setenableNextPp] = useState(false)
  // const [enableNextPd,setenableNextPd] = useState(false)
  // const [enableNextCr,setenableNextCr] = useState(false)


  const [TabenablePL,setTabenablePL] = useState(false)
  const [TabenablePickTime,setTabenablePickTime] = useState(false)
  const [TabenableDl,setTabenableDl] = useState(false)
  const [TabenableDropTime,setTabenableDropTime] = useState(false)
  const [TabenableCG,setTabenableCG] = useState(false)
  const [TabenableSp,setTabenableSp] = useState(false)

  //Order Details
  const [transportServiceCategoryCodes,settransportServiceCategoryCodes]= useState([])
  const [transportServiceConditionTypeCodes,settransportServiceConditionTypeCodes]= useState([])
  const [transportServiceLevelCodes,settransportServiceLevelCodes]= useState([])
  
  useEffect(()=>{
    populatetransportServiceCategoryCodes()
    populatetransportServiceConditionTypeCodes()
    populatetransportServiceLevelCodes()
  },[])
 

  const populatetransportServiceCategoryCodes = async () =>{
    const {
      data: transportServiceCategoryCodes,
    } = await getEnumerationlibrarys();
    // this.setState({
    //   transportServiceCategoryCodes: transportServiceCategoryCodes,
    // });
    settransportServiceCategoryCodes(transportServiceCategoryCodes)
  }

  const populatetransportServiceConditionTypeCodes = async () => {
    const {
      data: transportServiceConditionTypeCodes,
    } = await getEnumerationlibrarys();
    // this.setState({
    //   transportServiceConditionTypeCodes: transportServiceConditionTypeCodes,
    // });
    settransportServiceConditionTypeCodes(transportServiceConditionTypeCodes)
  }

  const populatetransportServiceLevelCodes = async () =>{
    const { data: transportServiceLevelCodes } = await getEnumerationlibrarys();
    // this.setState({ transportServiceLevelCodes: transportServiceLevelCodes });
    settransportServiceLevelCodes(transportServiceLevelCodes)
  }

 


    console.log(transportServiceCategoryCodes,"arrays")
    
    const handleSubmit =()=>{
      console.log(data,"From Redux")
    }
    
    return (
      <div className="transportcapacitybooking">
        <div className="py-5">
           <div className="mt-2">
              <div className="AlertInTCB">
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
                     <TCBOrderDetails setenableNext={setTabenablePL}  />
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
             </div>
              
            

              {/* Form Ends here */}
           
        
          </CContainer>
        </div>
      </div>
    );
  
}

export default createTransportcapacitybooking;
