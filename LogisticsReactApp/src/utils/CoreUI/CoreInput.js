import { CFormGroup, CFormText, CInput, CLabel } from '@coreui/react'
import React from 'react'
import {Field, useField} from 'formik'

function CoreInput(props) {

    const [field,meta] = useField(props)
    const {label,name,id, ...rest } = props
   
    // console.log(meta,"coreInput")
    return (
        <Field name={name}>
            {
                ({field,form})=>{
                   
                    return <CFormGroup >
                    <CLabel htmlFor={name}>{label}</CLabel>
                    <CInput
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


