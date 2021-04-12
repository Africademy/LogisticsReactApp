import {} from "./transportcapacitybookingForm.css";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CCollapse,
  CContainer,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CLabel,
  CLink,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import React, { Component, useState } from "react";
// import PickupLocationModal from "./transportcapacitybookingLocationForm";
import CargoCharacteristicsForm from "./TCBCargoCharacteristicsform";
import TCBPlannedPickUp from "./TCBPlannedPickUp";
import TCBPlannedDropOff from "./TCBPlannedDropOff";
import FormicControl from "../../utils/CoreUI/FormicControl";
import { Form, Formik } from "formik";
import * as yup from 'yup';
import TCBOrderDetails from "./TCBOrderDetails";
// import CoreInput from "../../utils/CoreUI/CoreInput";
// import { Form,Formik } from "formik";
// import FormicControl from "../../utils/CoreUI/FormicControl";

// class createTransportcapacitybooking extends Component 

const createTransportcapacitybooking =() => {

    

 
    return (
      <div>
        <div className="py-5">
          <CContainer>
             
              <TCBOrderDetails />
              <TCBPlannedPickUp />
              <TCBPlannedDropOff />
              <CargoCharacteristicsForm />
            

              {/* Form Ends here */}
           
        
          </CContainer>
        </div>
      </div>
    );
  
}

export default createTransportcapacitybooking;
