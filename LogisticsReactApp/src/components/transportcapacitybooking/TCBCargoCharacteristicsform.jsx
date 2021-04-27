import React, {  useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CCollapse,
  CCardHeader,
  CInputGroup,
  CLabel,
  CRow,
  CButton,
} from "@coreui/react";
import { Form, Formik } from "formik";
import * as yup from 'yup';
import FormicControl from "../../utils/CoreUI/FormicControl";
import {useDispatch} from 'react-redux'
import {SpaceRequirementsAction} from "../../actions/TCBActions"; 
import { getCodetypes } from "../../services/codetypeService";
import { getHarmonizedsystemcodes } from "../../services/harmonizedsystemcodeService";
import { getCargotypedescriptions } from "../../services/cargotypedescriptionService";
import { getCountryoforigincodes } from "../../services/countryoforigincodeService";
import { getFinaldestinationcountrys } from "../../services/finaldestinationcountryService";
import { getMeasurementtypes } from "../../services/measurementtypeService";
import { getAmounttypes } from "../../services/amounttypeService";
import { getQuantitytypes } from "../../services/quantitytypeService";
import { getPackagetypecodes } from "../../services/packagetypecodeService";
import { getTotalpackagequantitys } from "../../services/totalpackagequantityService";
import { getCargotypecodes } from "../../services/cargotypecodeService";
import {} from "./transportcapacitybookingForm.css";

 const CargoCharacteristicsForm =({setenableNext ,setclosecargo})=> {

  const dispatch = useDispatch()
//   CargoType       :   codetypes() cc
// HarmonizedSystem  :  harmonizedsystemcodes() cc
// CargoTypeDescription : cargotypedescriptions() cc
// CountryOfOrigin  : countryoforigincodes() cc
// FinalDestinationCountry : finaldestinationcountrys() cc

// measurementtypes  :  measurementtypes() cc

// amounttypes :: amounttypes() cc

// quantitytypes  :  quantitytypes() cc
// PackageType: :  packagetypecodes()  cc
const [CargoData,setCargoData] = useState(null)

    const [CargoType,setCargoType] = useState([])
    const [HarmonizedSystem,setHarmonizedSystem] = useState([])
    const [CargoTypeDescription,setCargoTypeDescription] = useState([])
    const [CountryOfOrigin,setCountryOfOrigin] = useState([])
    const [FinalDestinationCountry,setFinalDestinationCountry] = useState([])
    const [measurementtypes,setmeasurementtypes] = useState([])
    const [amounttypes,setamounttypes] = useState([])
    const [quantitytypes,setquantitytypes] = useState([])
    const [PackageType,setPackageType] = useState([])
    const [Totalpackagequantitys,setTotalpackagequantitys] = useState([])
    


    useEffect(()=>{
      populateCargoTypeCodes()
      populatHarmonizedSystemCodes()
      populateCargoTypeDescriptionCodes()
      populateCountryOfOriginCodes()
      populateFinalDestinationCountryCodes()
      populatemeasurementtypesCodes()
      populateamounttypesCodes()
      populatequantitytypesCodes()
      populatePackageTypeCodes()
      populateTotalpackagequantitysCodes()

    },[])

    const populateCargoTypeCodes = async () =>{
      const { data: transportServiceLevelCodes } = await getCargotypecodes();
      setCargoType(transportServiceLevelCodes)
    }
    const populatHarmonizedSystemCodes = async () =>{
      const { data: transportServiceLevelCodes } = await getHarmonizedsystemcodes();
      setHarmonizedSystem(transportServiceLevelCodes)
    }
    const populateCargoTypeDescriptionCodes = async () =>{
      const { data: transportServiceLevelCodes } = await getCargotypedescriptions();
      setCargoTypeDescription(transportServiceLevelCodes)
    }
    const populateCountryOfOriginCodes = async () =>{
      const { data: transportServiceLevelCodes } = await getCountryoforigincodes();
      setCountryOfOrigin(transportServiceLevelCodes)
    }
    const populateFinalDestinationCountryCodes = async () =>{
      const { data: transportServiceLevelCodes } = await getFinaldestinationcountrys();
      setFinalDestinationCountry(transportServiceLevelCodes)
    }
    const populatemeasurementtypesCodes = async () =>{
      const { data: transportServiceLevelCodes } = await getMeasurementtypes();
      setmeasurementtypes(transportServiceLevelCodes)
    }
    const populateamounttypesCodes = async () =>{
      const { data: transportServiceLevelCodes } = await getAmounttypes();
      setamounttypes(transportServiceLevelCodes)
    }
    const populatequantitytypesCodes = async () =>{
      const { data: transportServiceLevelCodes } = await getQuantitytypes();
      setquantitytypes(transportServiceLevelCodes)
    }
    const populatePackageTypeCodes = async () =>{
      const { data: transportServiceLevelCodes } = await getPackagetypecodes();
      setPackageType(transportServiceLevelCodes)
    }
    const populateTotalpackagequantitysCodes = async () =>{
      const { data: transportServiceLevelCodes } = await getTotalpackagequantitys();
      setTotalpackagequantitys(transportServiceLevelCodes)
    }


    // getTotalpackagequantitys


  const dropDownOtions = [
    {key:'select value' ,value: ''},
    {key:'option1' ,value: 'option1'},
    {key:'option2' ,value: 'option2'},
    {key:'option3' ,value: 'option3'}
  ]

 

  const initialValues = {
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
    declaredValueForCustomsCodes:"",
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
  }
  const validationSchema =yup.object({
    cargoType: yup.string().required(),
    // harmonizedSystemCode: yup.string().required(),
    // cargoTypeDescription: yup.string().required(), 
    countryOfOriginCode: yup.string().required(), 
    finalDestinationCountry: yup.string().required(),
    totalGrossVolume: yup.number().required(),
    totalGrossVolumeCodes:yup.string().required(),
    totalGrossWeight: yup.number().required(),
    totalGrossWeightCodes:yup.string().required(),
    totalTransportNetWeight: yup.number().required(),
    totalTransportNetWeightCodes:yup.string().required(),
    totalChargeableWeight: yup.number().required(),
    totalChargeableWeightCodes: yup.string().required(),
    declaredWeightForCustoms: yup.number().required(), 
    declaredWeightForCustomsCodes: yup.string().required(), 
    totalLoadingLength: yup.number().required(), 
    totalLoadingLengthCodes: yup.string().required(),
    associatedInvoiceAmount: yup.number().required(),
    associatedInvoiceAmountCodes: yup.string().required(),
    declaredValueForCustoms: yup.number().required(), 
    declaredValueForCustomsCodes:yup.string().required(),
    totalPackageQuantity: yup.number().required(),
    totalPackageQuantityCodes: yup.string().required(),
    totalItemQuantity: yup.number().required(), 
    totalItemQuantityCodes: yup.string().required(), 
    packageTypeCode: yup.string().required(),
    totalPackageQuantityPT:yup.number().required(),
    totalGrossWeightPT:yup.number().required(),
    totalGrossWeightPTCodes:yup.string().required(),
    totalGrossVolumePT:yup.number().required(),
    totalGrossVolumePTCodes:yup.string().required(),  
  })
 
  // console.log(CargoData,"SpaceCargo Data")

    return (
      <div>
         <CCardBody>
            <Formik 
                initialValues= {initialValues}
                // validationSchema= {validationSchema}
                
                onSubmit={value => {
                  setenableNext(true)
                  setclosecargo(true)
                  setCargoData(value)
                  dispatch(SpaceRequirementsAction(value))
                }}
              >
                  { formik => (
                    
                    <Form onSubmit={formik.handleSubmit} >
                         
                      <div className="card-title my-2">Cargo Characteristics</div>
                      <CRow>
                        <CCol md="4">
                            <FormicControl  control='select' isRequired="true" label='Cargo Type' id='cargoTypeCode' name='cargoType' options={CargoType}  />
                        </CCol>
                        {/* <CCol md="6">
  
                            <FormicControl  control='select' isRequired="true" label='Harmonized System' id='harmonizedSystemCode' name='harmonizedSystemCode' options={HarmonizedSystem}  />
                          
                        </CCol> */}
                        {/* <CCol md="6">
                        

                          <FormicControl control='select' isRequired="true" label='Cargo Type Description' id='cargoTypeDescription' name='cargoTypeDescription' options={CargoTypeDescription} />
                        
                        </CCol> */}
                         <CCol md="4">
                                <FormicControl control='select' isRequired="true" label='Country Of Origin' id='countryOfOriginCode' name='countryOfOriginCode' options={CountryOfOrigin} />
                            
                         </CCol>
                         <CCol md="4">
                            <FormicControl control='select' isRequired="true" label='Final Destination Country' id='finalDestinationCountry' name='finalDestinationCountry' options={FinalDestinationCountry} />

                         </CCol>
                       

                        <CCol md="6">
                          
                          <CInputGroup  style={{marginTop:"0.7rem",display:"flex"}}>
                          <FormicControl style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} label="Total Gross Volume"  control='input' isRequired="true"  placeholder="Enter here..." id='totalGrossVolume' name='totalGrossVolume' />

                             <div className="VolumeCodes">
                                <FormicControl  style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}} control='select'  id='totalGrossVolumeCodes' name='totalGrossVolumeCodes' options={measurementtypes} />
                             </div>
                          </CInputGroup>
                          
                        </CCol>
                        <CCol md="6">
                            <CInputGroup  style={{marginTop:"0.7rem"}}>
                              <FormicControl style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}}  control='input' label='Total Gross Weight' isRequired="true"  placeholder="Enter here..." id='totalGrossWeight' name='totalGrossWeight' />
                              <div className="VolumeCodes">
                              <FormicControl style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}} control='select'   id='totalGrossWeightCodes' name='totalGrossWeightCodes' options={measurementtypes} />

                              </div>
                            </CInputGroup>
                          </CCol>

                        <CCol md="6">
                         
                            <CInputGroup  style={{marginTop:"0.7rem"}}>
                              <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} isRequired="true" label="Total Transport Net Weight"   placeholder="Enter here..." id='totalTransportNetWeight' name='totalTransportNetWeight' />
                              <div className="VolumeCodes">
                              <FormicControl control='select'  style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}  id='totalTransportNetWeightCodes' name='totalTransportNetWeightCodes' options={measurementtypes} />
                                
                              </div>
                            </CInputGroup>
                        </CCol>


                        <CCol md="6">

                            <CInputGroup  style={{marginTop:"0.7rem"}}>
                              <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} isRequired="true" label="Total Chargeable Weight"  placeholder="Enter here..." id='totalChargeableWeight' name='totalChargeableWeight' />
                              <div className="VolumeCodes">
                              <FormicControl control='select'  style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}  id='totalChargeableWeightCodes' name='totalChargeableWeightCodes' options={measurementtypes} />
                                
                                </div>
                            </CInputGroup>
                         
                            
                        </CCol>
                        <CCol md="6">
                            <CInputGroup  style={{marginTop:"0.7rem"}}>
                              <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} label="Declared Weight For Customs" isRequired="true"  placeholder="Enter here..." id='declaredWeightForCustoms' name='declaredWeightForCustoms' />
                              <div className="VolumeCodes">
                              <FormicControl control='select'  style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}   id='declaredWeightForCustomsCodes' name='declaredWeightForCustomsCodes' options={measurementtypes} />
                                
                                </div>
                            </CInputGroup>
                          
                        </CCol>
                        <CCol md="6">
                        
                            <CInputGroup  style={{marginTop:"0.7rem"}}>
                              <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} isRequired="true" label="Total Loading Length"   placeholder="Enter here..." id='totalLoadingLength' name='totalLoadingLength' />
                              <div className="VolumeCodes">
                              <FormicControl control='select'  style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}  id='totalLoadingLengthCodes' name='totalLoadingLengthCodes' options={measurementtypes} />
                                
                                </div>
                            </CInputGroup>
                        
                        </CCol>
                        <CCol md="6">
                            <CInputGroup  style={{marginTop:"0.7rem"}}>
                              <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}}  isRequired="true" label="Associated Invoice Amount" placeholder="Enter here..." id='associatedInvoiceAmount' name='associatedInvoiceAmount' />
                              <div className="VolumeCodes">
                              <FormicControl control='select'  style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}  id='associatedInvoiceAmountCodes' name='associatedInvoiceAmountCodes' options={amounttypes} />
                                
                                </div>
                            </CInputGroup>
                          
                        </CCol>
                        <CCol md="6">
                          
                            <CInputGroup  style={{marginTop:"0.7rem"}}>
                              <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} isRequired="true" label="Declared Value For Customs"  placeholder="Enter here..." id='declaredValueForCustoms' name='declaredValueForCustoms' />
                              <div className="VolumeCodes">
                              <FormicControl control='select'  style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}  id='declaredValueForCustomsCodes' name='declaredValueForCustomsCodes' options={amounttypes} />
                                
                                </div>
                            </CInputGroup>
                          
                        </CCol>
                        <CCol md="6">
                      
                            <CInputGroup  style={{marginTop:"0.7rem"}}>
                              <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} isRequired="true" label="Total Package Quantity"  placeholder="Enter here..." id='totalPackageQuantity' name='totalPackageQuantity' />
                              <div className="VolumeCodes">
                              <FormicControl control='select'  style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}  id='totalPackageQuantityCodes' name='totalPackageQuantityCodes' options={quantitytypes} />
                                
                                </div>
                            </CInputGroup>
                         
                        </CCol>
                        <CCol md="6">
                        
                            <CInputGroup  style={{marginTop:"0.7rem"}}>
                              <FormicControl control='input' style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} isRequired="true" label="Total Item Quantity" placeholder="Enter here..." id='totalItemQuantity' name='totalItemQuantity' />
                              <div className="VolumeCodes">
                              <FormicControl control='select'  style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}  id='totalItemQuantityCodes' name='totalItemQuantityCodes' options={quantitytypes} />
                                
                                </div>
                            </CInputGroup>
                          
                        </CCol>
                      </CRow>

                      <div className="card-title my-2">Package Total</div>
                    
                      <CRow>
                        <CCol md="6">
                           <FormicControl control='select'   isRequired="true" label='Package Type' id='packageTypeCode' name='packageTypeCode' options={PackageType} />
                        </CCol>
                        <CCol md="6">
                          <FormicControl control='input' isRequired="true" label='Total Package Quantity' id='totalPackageQuantityPT' name='totalPackageQuantityPT' options={Totalpackagequantitys} />
                        </CCol>
                        <CCol md="6">
                        
                            <CInputGroup  style={{marginTop:"0.7rem"}}>
                              <FormicControl control='input' 
style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}}  isRequired="true" label="Total Gross Weight" placeholder="Enter here..." id='totalGrossWeightPT' name='totalGrossWeightPT' />
                              <div className="VolumeCodes">
                              <FormicControl control='select' style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}}  id='totalGrossWeightPTCodes' name='totalGrossWeightPTCodes' options={measurementtypes} />
                                
                                </div>
                            </CInputGroup>
                        
                        </CCol>
                        <CCol md="6">
                     
                            <CInputGroup  style={{marginTop:"0.7rem"}}>
                              <FormicControl control='input' 
style={{borderTopRightRadius:"0",borderBottomRightRadius:"0"}} isRequired="true" label="Total Gross Volume" placeholder="Enter here..." id='totalGrossVolumePT' name='totalGrossVolumePT' />
                              <div className="VolumeCodes">
                                <FormicControl control='select' style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginTop:"-0.8px"}} id='totalGrossVolumePTCodes' name='totalGrossVolumePTCodes' options={measurementtypes} />
                                
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
      
      </div>
    );
  
}

export default CargoCharacteristicsForm

    
        