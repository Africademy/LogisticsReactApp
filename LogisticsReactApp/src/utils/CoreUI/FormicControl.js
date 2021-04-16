import React from 'react'
import CoreInput from './CoreInput'
import CoreSelect from './CoreSelect'
import CoreSelectOptional from './CoreSelectOptional'

function FormicControl(props) {
  const {control,...rest} = props 
  switch(control) {
      case 'input' : return <CoreInput {...rest} />
      case 'select' :return <CoreSelect {...rest}/>
      case 'selectOptional' :return <CoreSelectOptional {...rest}/>

      default : return null
  }
}

export default FormicControl
