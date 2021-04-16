import React from 'react'
import CoreInput from './CoreInput'
import CoreSelect from './CoreSelect'
import CoreSelectOptional from './CoreSelectOptional'
import CoreSelectselectOptionalidentification from './CoreSelectselectOptionalidentification'
import CoreSelectselectOptionalcommunicationChannel from './CoreSelectselectOptionalcommunicationChannel'

function FormicControl(props) {
  const {control,...rest} = props 
  switch(control) {
      case 'input' : return <CoreInput {...rest} />
      case 'select' :return <CoreSelect {...rest}/>
      case 'selectOptional' :return <CoreSelectOptional {...rest}/>
      case 'selectOptionalidentificationScheme': return <CoreSelectselectOptionalidentification {...rest}/>
      case 'selectOptionalcommunicationChannel' : return <CoreSelectselectOptionalcommunicationChannel {...rest}/>
      default : return null
  }
}

export default FormicControl
