import { CFormGroup, CFormText, CInput, CLabel } from '@coreui/react'
import React from 'react'
import {Field, useField} from 'formik'
import {} from "./CoreInput.css";
function CoreInput(props) {

    const [field,meta] = useField(props)
    const {label,name,id,isRequired,styleForgroup,  readOnly , ...rest } = props
   
    // console.log(meta,"coreInput")
    return (
        <Field name={name}>
            {
                ({field,form})=>{
                   
                    return <CFormGroup >
                    
                    {styleForgroup ? <span style={{backgroundColor:"blue"}}>  <CLabel htmlFor={name}>{label}</CLabel></span> :   <CLabel htmlFor={name}>{label}</CLabel>}
                    { isRequired && <span style={styleForgroup ? {color:"red",fontSize:"0.5rem",paddingLeft:"1rem"}: {color:"red",fontSize:"1rem",paddingLeft:"2px"} } > *</span> }
                    <CInput
                      readOnly = {readOnly}
                      // type={readOnly && "hidden"}
                      id={id}
                      {...rest}
                      {...field}
                     
                      
                    />
                    { meta.touched &&  <CFormText className="help-block error">
                      {form.errors[name]}
                    </CFormText>}
                  </CFormGroup>

                }
            }
        </Field>
    )
}

export default CoreInput

// className={`${true} ? "cargoStyle": "coreinput"`}

// {{color:"red",fontSize:"1rem",paddingLeft:"2px"}}