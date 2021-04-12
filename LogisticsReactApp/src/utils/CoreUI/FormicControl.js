import React from 'react'
import CoreInput from './CoreInput'
import CoreSelect from './CoreSelect'

function FormicControl(props) {
  const {control,...rest} = props 
  switch(control) {
      case 'input' : return <CoreInput {...rest} />
      case 'select' :return <CoreSelect {...rest}/>

      default : return null
  }
}

export default FormicControl
