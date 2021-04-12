import { CFormGroup, CFormText, CInput, CLabel } from '@coreui/react'
import React from 'react'
import {Field} from 'formik'

function CoreInput(props) {
    const {label,name,id, ...rest } = props
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
                    <CFormText className="help-block error">
                      {form.errors[name]}
                    </CFormText>
                  </CFormGroup>

                }
            }
        </Field>
    )
}

export default CoreInput


