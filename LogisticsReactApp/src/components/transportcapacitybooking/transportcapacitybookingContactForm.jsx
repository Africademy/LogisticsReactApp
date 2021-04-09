import React, { Component } from "react";
import {
  CCol,
  CFormGroup,
  CFormText,
  CInput,
  CLabel,
  CRow,
} from "@coreui/react";

class PickupContactForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = this.props.data;
    console.log(this.props);
  }

  render() {
    return (
      <CRow>
        <CCol md="4">
          <CFormGroup>
            <CLabel htmlFor="contactTypeCode">Contact Type</CLabel>
            <select className="form-control form-select" id="contactTypeCode">
              <option value="">Select an option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <CFormText className="help-block error">
              show errors in here
            </CFormText>
          </CFormGroup>
        </CCol>
        <CCol md="4">
          <CFormGroup>
            <CLabel htmlFor="personName">Person Name</CLabel>
            <CInput
              type="text"
              id="personName"
              name="personName"
              placeholder="Enter here..."
            />
            <CFormText className="help-block error">
              show errors in here
            </CFormText>
          </CFormGroup>
        </CCol>
        <CCol md="4">
          <CFormGroup>
            <CLabel htmlFor="departmentName">Department Name</CLabel>
            <CInput
              type="text"
              id="departmentName"
              name="departmentName"
              placeholder="Enter here..."
            />
            <CFormText className="help-block error">
              show errors in here
            </CFormText>
          </CFormGroup>
        </CCol>
        <CCol md="4">
          <CFormGroup>
            <CLabel htmlFor="jobTitle">Job Title</CLabel>
            <CInput
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="Enter here..."
            />
            <CFormText className="help-block error">
              show errors in here
            </CFormText>
          </CFormGroup>
        </CCol>
        <CCol md="4">
          <CFormGroup>
            <CLabel htmlFor="responsibility">Responsibility</CLabel>
            <select className="form-control form-select" id="responsibility">
              <option value="">Select an option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <CFormText className="help-block error">
              show errors in here
            </CFormText>
          </CFormGroup>
        </CCol>
        <CCol md="12">
          <div className="card-title mt-3">Communication Channel</div>
        </CCol>
        <CCol md="4">
          <CFormGroup>
            <CLabel htmlFor="communicationChannelCode">
              Communication Channel Code
            </CLabel>
            <select
              className="form-control form-select"
              id="communicationChannelCode"
            >
              <option value="">Select an option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <CFormText className="help-block error">
              show errors in here
            </CFormText>
          </CFormGroup>
        </CCol>
        <CCol md="4">
          <CFormGroup>
            <CLabel htmlFor="communicationValue">Communication Value</CLabel>
            <CInput
              type="text"
              id="longitude"
              name="longitude"
              placeholder="Enter here..."
            />
            <CFormText className="help-block error">
              show errors in here
            </CFormText>
          </CFormGroup>
        </CCol>
        <CCol md="4">
          <CFormGroup>
            <CLabel htmlFor="longitude">Communication Channel Name</CLabel>
            <CInput
              type="text"
              id="communicationChannelName"
              name="communicationChannelName"
              placeholder="Enter here..."
            />
            <CFormText className="help-block error">
              show errors in here
            </CFormText>
          </CFormGroup>
        </CCol>
      </CRow>
    );
  }
}

export default PickupContactForm;
