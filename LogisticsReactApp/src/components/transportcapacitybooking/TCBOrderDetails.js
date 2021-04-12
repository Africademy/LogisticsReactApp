import { CButton, CCard, CCardBody, CCardHeader, CCol, CCollapse, CFormGroup, CFormText, CInput, CLabel, CLink, CRow } from '@coreui/react'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import FormicControl from '../../utils/CoreUI/FormicControl'
import CIcon from "@coreui/icons-react";

function TCBOrderDetails() {

    const [collapseOrderDetails,setcollapseOrderDetails] = useState(false)

const initialValues ={
    ProductName:'',
    ProductCategory:'',
    Quantity:'',
    UnitPrice:''

}

    return (
        <CCard>
                <CCardHeader
                className="card-toggle-header"
                onClick={() => {
                    setcollapseOrderDetails(!collapseOrderDetails)
                
                }}
                >
                Order Details
                <CIcon size={"sm"} name={"cisPlusCircle"} />
                </CCardHeader>
            
        <CCollapse show={collapseOrderDetails}>
         
          <CCardBody>
            <Formik
              initialValues={initialValues}
              onSubmit={(values)=> console.log(values)}
            >
              {
                formik =>(
                  <Form>
                     <CRow className="justify-content-center">
                        <CCol md="6">
                            <CFormGroup>
                            <CLabel htmlFor="nf-email">Email</CLabel>
                            <CLink
                                href="#"
                                className="float-right font-xs font-italic"
                            >
                                Generate ID
                            </CLink>
                            <CInput
                                type="email"
                                id="nf-email"
                                name="nf-email"
                                placeholder="Enter Email.."
                                autoComplete="email"
                            />
                            <CFormText className="help-block error">
                                show errors in here
                            </CFormText>
                            </CFormGroup>
                        
                        </CCol>
                        <CCol md="3">
                            <CFormGroup>
                            <CLabel htmlFor="nf-password">Password</CLabel>
                            <CInput
                                type="password"
                                id="nf-password"
                                name="nf-password"
                                placeholder="Enter Password.."
                                autoComplete="current-password"
                            />
                            <CFormText className="help-block error">
                                show errors in here
                            </CFormText>
                            </CFormGroup>
                        </CCol>
                        <CCol md="3">
                            <CFormGroup>
                            <CLabel htmlFor="nf-password">Password</CLabel>
                            <CInput
                                type="password"
                                id="nf-password"
                                name="nf-password"
                                placeholder="Enter Password.."
                                autoComplete="current-password"
                            />
                            <CFormText className="help-block error">
                                show errors in here
                            </CFormText>
                            </CFormGroup>
                        </CCol>
                     </CRow>
                     <CRow className="justify-content-center">
                       <CCol md="3">

                            <FormicControl control="input" label="Product Name" name="ProductName"/>
                            </CCol>
                            <CCol md="3">

                            <FormicControl control="select" label="Product Category" name="ProductCategory"  options={[]}/>
                            </CCol>

                            <CCol md="3">
                            <FormicControl control="input" type="number" label="Quantity" name="Quantity"/>
                            </CCol>
                            <CCol md="3">
                            <FormicControl control="input" type="number" label="Unit Price" name="UnitPrice"/>
                            </CCol> 
                            </CRow>
                    <div className="continue-block">
                    <CLink >
                        Add New Product
                        <CIcon size={"sm"} name={"cisPlusCircle"} />
                    </CLink>
                    
                    </div>

                     <CButton
                                    type="submit"
                                    className="next-btn"
                                    color="primary"
                                    style={{margin:"1rem"}}
                                    disabled={!formik.dirty && formik.isValid }
                                    >
                                    Next
                                    </CButton>
                  </Form>
                )
              }
              
            </Formik>
           
        </CCardBody>
        
        </CCollapse>
      </CCard>
      
      
    )
}

export default TCBOrderDetails


// {/* <div className="card-title mt-3">Product Details</div>

{/* Loop the below CRow for new product */}
// {/* <CRow className="justify-content-center">
// <CCol md="3">

//     <FormicControl control="input" label="Product Name" name="ProductName"/>
// </CCol>
// <CCol md="3">

//     <FormicControl control="select" label="Product Category" name="ProductCategory"/>
// </CCol>

// <CCol md="3">
//     <FormicControl control="input" type="number" label="Quantity" name="Quantity"/>
// </CCol>
// <CCol md="3">
// <FormicControl control="input" type="number" label="Unit Price" name="UnitPrice"/>
// </CCol>
// </CRow>  */}


