import { CFormGroup, CFormText, CLabel } from '@coreui/react'
import { ErrorMessage, Field } from 'formik'
import React from 'react'

function CoreSelect(props) {
    const {label,name,id,options, ...rest } = props
    return (
        <div>
           
           
            <Field name={name}>
            {
                ({field,form})=>{
                    
                    return <CFormGroup >
                    <CLabel htmlFor={name}>{label}</CLabel>
                    <select
                      className="form-control form-select"
                      id={id}
                      {...rest}
                      {...field}
                    >
                        {
                            options.map( option=>{
                                return (
                                    <option key={option.value} value={option.value} >{option.key}</option>
                                )
                            })
                        }

                    </select>
                    <CFormText className="help-block error">
                      {form.errors[name]}
                    </CFormText>
                  </CFormGroup>

                }
            }
        </Field>
           
        </div>
    )
}

export default CoreSelect

// {
//     options.map( option=>{
//         return (
//             <option key={option.value} value={option.value} >{option.key}</option>
//         )
//     })
// }