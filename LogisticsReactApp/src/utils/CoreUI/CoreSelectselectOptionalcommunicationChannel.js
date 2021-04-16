import { CFormGroup, CFormText, CLabel } from '@coreui/react'
import { Field, useField } from 'formik'
import React from 'react'

function CoreSelectselectOptionalcommunicationChannel(props) {
    const [field,meta] = useField(props)
    const {label,name,id,options,isRequired,typeOfOption, ...rest } = props
    return (
        <div>

            <Field name={name}>
            {
                ({field,form})=>{
                    
                    return <CFormGroup >
                    <CLabel htmlFor={name}>{label}</CLabel>
                    { isRequired && (<span style={{color:"red",fontSize:"1rem",paddingLeft:"2px"}}> *</span>) }
                    {
                       
                            <select
                            className="form-control form-select"
                            id={id}
                            {...rest}
                            {...field}
                          > 
                          <option defaultValue>Select value</option>
                                 {
                                  options.map( item=>{
                                      return (
                                        <option key={item._id} value={item._id} >{item.communicationChannelName}</option>
                                      
                                      )
                                  })
                                 }
                          </select>      
                    }         
                    { meta.touched &&  <CFormText className="help-block error">
                      {form.errors[name]}
                    </CFormText>}
                  </CFormGroup>

                }
            }
        </Field>
           
        </div>
    )
}

export default CoreSelectselectOptionalcommunicationChannel
