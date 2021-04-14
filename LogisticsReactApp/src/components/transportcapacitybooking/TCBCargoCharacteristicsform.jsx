import React, {  useState } from "react";
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


 const CargoCharacteristicsForm =({setenableNext})=> {

  const dispatch = useDispatch()
  

  const [CargoData,setCargoData] = useState(null)


  const dropDownOtions = [
    {key:'select value' ,value: ''},
    {key:'option1' ,value: 'option1'},
    {key:'option2' ,value: 'option2'},
    {key:'option3' ,value: 'option3'}
  ]

 

  const initialValues = {
    CargoType :'',
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
  }
  const validationSchema =yup.object({
    CargoType: yup.string().required(),
    harmonizedSystemCode: yup.string().required(),
    cargoTypeDescription: yup.string().required(), 
    countryOfOriginCode: yup.string().required(), 
    finalDestinationCountry: yup.string().required(),
    totalGrossVolume: yup.number().required(),
    totalGrossVolumeUnits:yup.string().required(),
    totalGrossWeight: yup.number().required(),
    totalGrossWeightUnits:yup.string().required(),
    totalTransportNetWeight: yup.number().required(),
    totalTransportNetWeightUnits:yup.string().required(),
    totalChargeableWeight: yup.number().required(),
    totalChargeableWeightUnits: yup.string().required(),
    declaredWeightForCustoms: yup.number().required(), 
    declaredWeightForCustomsUnits: yup.string().required(), 
    totalLoadingLength: yup.number().required(), 
    totalLoadingLengthUnits: yup.string().required(),
    associatedInvoiceAmount: yup.number().required(),
    associatedInvoiceAmountUnits: yup.string().required(),
    declaredValueForCustoms: yup.number().required(), 
    declaredValueForCustomsUnits:yup.string().required(),
    totalPackageQuantity: yup.number().required(),
    totalPackageQuantityUnits: yup.string().required(),
    totalItemQuantity: yup.number().required(), 
    totalItemQuantityUnits: yup.string().required(), 
    packageTypeCode: yup.string().required(),
    totalPackageQuantityPT:yup.string().required(),
    totalGrossWeightPT:yup.number().required(),
    totalGrossWeightPTUnits:yup.string().required(),
    totalGrossVolumePT:yup.number().required(),
    totalGrossVolumePTUnits:yup.string().required(),  
  })
 
  console.log(CargoData,"SpaceCargo Data")

    return (
      <div>
         <CCardBody>
            <Formik 
                initialValues= {initialValues}
                // validationSchema= {validationSchema}
                
                onSubmit={value => {
                  setenableNext(true)
                  setCargoData(value)
                  dispatch(SpaceRequirementsAction(value))
                }}
              >
                  { formik => (
                    
                    <Form onSubmit={formik.handleSubmit} >
                         
                      <div className="card-title my-2">Cargo Characteristics</div>
                      <CRow>
                        <CCol md="6">
                            <FormicControl  control='select' label='Cargo Type' id='cargoTypeCode' name='CargoType' options={dropDownOtions}  />
                        </CCol>
                        <CCol md="6">
  
                            <FormicControl  control='select' label='Harmonized System' id='harmonizedSystemCode' name='harmonizedSystemCode' options={dropDownOtions}  />
                          
                        </CCol>
                        <CCol md="6">
                        

                          <FormicControl control='select' label='Cargo Type Description' id='cargoTypeDescription' name='cargoTypeDescription' options={dropDownOtions} />
                        
                        </CCol>
                        <CCol md="3">
                        
                           <FormicControl control='select' label='Country Of Origin' id='countryOfOriginCode' name='countryOfOriginCode' options={dropDownOtions} />
                        </CCol>
                        <CCol md="3">
                        
                           <FormicControl control='select' label=' Final Destination Country' id='finalDestinationCountry' name='finalDestinationCountry' options={dropDownOtions} />
                        </CCol>

                        <CCol md="6">
                          <CLabel htmlFor="totalGrossVolume" >Total Gross Volume</CLabel>
                          <CInputGroup  style={{marginTop:"-1rem"}}>
                             <FormicControl  control='input'  placeholder="Enter here..." id='totalGrossVolume' name='totalGrossVolume' />
                             <FormicControl control='select'  id='totalGrossVolumeUnits' name='totalGrossVolumeUnits' options={dropDownOtions} />
                          </CInputGroup>
                          
                        </CCol>
                        <CCol md="6">
                          <CLabel htmlFor="totalGrossWeight" >Total Gross Weight</CLabel>
                            <CInputGroup  style={{marginTop:"-1rem"}}>
                              <FormicControl  control='input'  placeholder="Enter here..." id='totalGrossWeight' name='totalGrossWeight' />
                              <FormicControl control='select'  id='totalGrossWeightUnits' name='totalGrossWeightUnits' options={dropDownOtions} />
                            </CInputGroup>
                          </CCol>

                        <CCol md="6">
                         
                           <CLabel htmlFor="totalTransportNetWeight" >Total Transport Net Weight</CLabel>
                            <CInputGroup  style={{marginTop:"-1rem"}}>
                              <FormicControl control='input'  placeholder="Enter here..." id='totalTransportNetWeight' name='totalTransportNetWeight' />
                              <FormicControl control='select'  id='totalTransportNetWeightUnits' name='totalTransportNetWeightUnits' options={dropDownOtions} />
                            </CInputGroup>
                        </CCol>


                        <CCol md="6">

                          <CLabel htmlFor="totalChargeableWeight" >Total Chargeable Weight</CLabel>
                            <CInputGroup  style={{marginTop:"-1rem"}}>
                              <FormicControl control='input'  placeholder="Enter here..." id='totalChargeableWeight' name='totalChargeableWeight' />
                              <FormicControl control='select'  id='totalChargeableWeightUnits' name='totalChargeableWeightUnits' options={dropDownOtions} />
                            </CInputGroup>
                         
                            
                        </CCol>
                        <CCol md="6">
                          <CLabel htmlFor="declaredWeightForCustoms" > Declared Weight For Customs</CLabel>
                            <CInputGroup  style={{marginTop:"-1rem"}}>
                              <FormicControl control='input'  placeholder="Enter here..." id='declaredWeightForCustoms' name='declaredWeightForCustoms' />
                              <FormicControl control='select'  id='declaredWeightForCustomsUnits' name='declaredWeightForCustomsUnits' options={dropDownOtions} />
                            </CInputGroup>
                          
                        </CCol>
                        <CCol md="6">
                        
                          <CLabel htmlFor="totalLoadingLength" >  Total Loading Length</CLabel>
                            <CInputGroup  style={{marginTop:"-1rem"}}>
                              <FormicControl control='input'  placeholder="Enter here..." id='totalLoadingLength' name='totalLoadingLength' />
                              <FormicControl control='select'  id='totalLoadingLengthUnits' name='totalLoadingLengthUnits' options={dropDownOtions} />
                            </CInputGroup>
                        
                        </CCol>
                        <CCol md="6">
                            <CLabel htmlFor="associatedInvoiceAmount" > Associated Invoice Amount</CLabel>
                            <CInputGroup  style={{marginTop:"-1rem"}}>
                              <FormicControl control='input'  placeholder="Enter here..." id='associatedInvoiceAmount' name='associatedInvoiceAmount' />
                              <FormicControl control='select'  id='associatedInvoiceAmountUnits' name='associatedInvoiceAmountUnits' options={dropDownOtions} />
                            </CInputGroup>
                          
                        </CCol>
                        <CCol md="6">
                          
                          <CLabel htmlFor="declaredValueForCustoms" >  Declared Value For Customs</CLabel>
                            <CInputGroup  style={{marginTop:"-1rem"}}>
                              <FormicControl control='input'  placeholder="Enter here..." id='declaredValueForCustoms' name='declaredValueForCustoms' />
                              <FormicControl control='select'  id='declaredValueForCustomsUnits' name='declaredValueForCustomsUnits' options={dropDownOtions} />
                            </CInputGroup>
                          
                        </CCol>
                        <CCol md="6">
                      
                            <CLabel htmlFor="totalPackageQuantity" >  Total Package Quantity</CLabel>
                            <CInputGroup  style={{marginTop:"-1rem"}}>
                              <FormicControl control='input'  placeholder="Enter here..." id='totalPackageQuantity' name='totalPackageQuantity' />
                              <FormicControl control='select'  id='totalPackageQuantityUnits' name='totalPackageQuantityUnits' options={dropDownOtions} />
                            </CInputGroup>
                         
                        </CCol>
                        <CCol md="6">
                        
                          <CLabel htmlFor="totalItemQuantity" >   Total Item Quantity</CLabel>
                            <CInputGroup  style={{marginTop:"-1rem"}}>
                              <FormicControl control='input'  placeholder="Enter here..." id='totalItemQuantity' name='totalItemQuantity' />
                              <FormicControl control='select'  id='totalItemQuantityUnits' name='totalItemQuantityUnits' options={dropDownOtions} />
                            </CInputGroup>
                          
                        </CCol>
                      </CRow>

                      <div className="card-title my-2">Package Total</div>
                    
                      <CRow>
                        <CCol md="6">
                           <FormicControl control='select' label='Package Type' id='packageTypeCode' name='packageTypeCode' options={dropDownOtions} />
                        </CCol>
                        <CCol md="6">
                          <FormicControl control='select' label='Total Package Quantity' id='totalPackageQuantityPT' name='totalPackageQuantityPT' options={dropDownOtions} />
                        </CCol>
                        <CCol md="6">
                        
                            <CLabel htmlFor="totalGrossWeightPT" > Total Gross Weight</CLabel>
                            <CInputGroup  style={{marginTop:"-1rem"}}>
                              <FormicControl control='input'  placeholder="Enter here..." id='totalGrossWeightPT' name='totalGrossWeightPT' />
                              <FormicControl control='select'  id='totalGrossWeightPTUnits' name='totalGrossWeightPTUnits' options={dropDownOtions} />
                            </CInputGroup>
                        
                        </CCol>
                        <CCol md="6">
                     
                          <CLabel htmlFor="totalGrossVolumePT" >Total Gross Volume</CLabel>
                            <CInputGroup  style={{marginTop:"-1rem"}}>
                              <FormicControl control='input'  placeholder="Enter here..." id='totalGrossVolumePT' name='totalGrossVolumePT' />
                              <FormicControl control='select'  id='totalGrossVolumePTUnits' name='totalGrossVolumePTUnits' options={dropDownOtions} />
                            </CInputGroup>
                         
                        </CCol>
                      </CRow>
                  

                   
                   <CButton
                        type="submit"
                        className="next-btn"
                        color="primary"
                        style={{margin:"1rem"}}
                        disabled={(!formik.dirty  )}
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

        // :"",
        // :"",
        // :"",
        // :"",
        // :"",
        // :"",
        // :"",
        // :"",