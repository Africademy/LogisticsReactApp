import {
  CCard,
  CCardBody,
  CCol,
  CCollapse,
  CFormGroup,
  CFormText,
  CCardHeader,
  CInput,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CInputGroupText,
  CLabel,
  CRow,
} from "@coreui/react";
import React, { Component } from "react";
import PickupContactForm from "./transportcapacitybookingContactForm";

class PickupLocationModal extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = this.props.data;
    console.log(this.props);
    this.state.collapseAddLocation = true;
    this.state.collapseContactDetails = false;
  }

  toggle = (key, val) => {
    let d = {};
    d[key] = val;
    this.setState({ ...d });
  };

  render() {
    return (
      <CRow className="justify-content-center">
        <CCol md="12">
          <CInputGroup>
            <CInputGroupPrepend>
              <CInputGroupText className={"bg-info text-white"}>
                <i class="cil-location-pin"></i>
              </CInputGroupText>
            </CInputGroupPrepend>
            <CInput
              type="text"
              id="unlocation"
              name="unlocation"
              placeholder="UN Location"
            />
            <CInputGroupAppend>
              <CInputGroupText
                className={"bg-info text-white"}
                type="button"
                name="find"
              >
                Find
              </CInputGroupText>
            </CInputGroupAppend>
            <CInputGroupAppend>
              <CInputGroupText
                className={"bg-dark text-white"}
                name="Add"
                type="button"
                onClick={() => {
                  this.toggle(
                    "collapseAddLocation",
                    !this.state.collapseAddLocation
                  );
                }}
              >
                Add New
              </CInputGroupText>
            </CInputGroupAppend>
          </CInputGroup>
        </CCol>

        <CCol md="12 mt-3">
          <CCard className={this.state.collapseAddLocation ? "" : "border-0"}>
            <CCollapse show={this.state.collapseAddLocation}>
              <CCardBody>
                <CLabel
                  className="collapseAddLocation-hide-btn"
                  onClick={() => {
                    this.toggle(
                      "collapseAddLocation",
                      !this.state.collapseAddLocation
                    );
                  }}
                >
                  <span>
                    <i class="cil-x-circle"></i>
                  </span>
                </CLabel>
                <CRow className="justify-content-center">
                  <CCol md="4">
                    <CFormGroup>
                      <CLabel htmlFor="additionalLocationIdentification">
                        Additional Location Identification
                      </CLabel>
                      <select
                        className="form-control form-select"
                        id="additionalLocationIdentification"
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
                      <CLabel htmlFor="sublocationIdentification">
                        Sublocation Identification
                      </CLabel>
                      <CInput
                        type="text"
                        id="sublocationIdentification"
                        name="sublocationIdentification"
                        placeholder="Enter here..."
                      />
                      <CFormText className="help-block error">
                        show errors in here
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4">
                    <CFormGroup>
                      <CLabel htmlFor="locationName">Location Name</CLabel>
                      <CInput
                        type="text"
                        id="locationName"
                        name="locationName"
                        placeholder="Enter here..."
                      />
                      <CFormText className="help-block error">
                        show errors in here
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4">
                    <CFormGroup>
                      <CLabel htmlFor="locationSpecificInstructions">
                        Location Specific Instructions
                      </CLabel>
                      <select
                        className="form-control form-select"
                        id="locationSpecificInstructions"
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
                      <CLabel htmlFor="UTCOffset">UTC Offset</CLabel>
                      <CInput
                        type="text"
                        id="UTCOffset"
                        name="UTCOffset"
                        placeholder="Enter here.."
                      />
                      <CFormText className="help-block error">
                        show errors in here
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4">
                    <CFormGroup>
                      <CLabel htmlFor="city">City</CLabel>
                      <CInput
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Enter here..."
                      />
                      <CFormText className="help-block error">
                        show errors in here
                      </CFormText>
                    </CFormGroup>
                  </CCol>

                  <CCol md="4">
                    <CFormGroup>
                      <CLabel htmlFor="countrycode">Country</CLabel>
                      <select
                        className="form-control form-select"
                        id="countrycode"
                      >
                        <option value="">Choose country</option>
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
                      <CLabel htmlFor="crossStreet">Cross Street</CLabel>
                      <CInput
                        type="text"
                        id="crossStreet"
                        name="crossStreet"
                        placeholder="Enter here..."
                      />
                      <CFormText className="help-block error">
                        show errors in here
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4">
                    <CFormGroup>
                      <CLabel htmlFor="currencyOfPartyCode">
                        Currency Of Party
                      </CLabel>
                      <select
                        className="form-control form-select"
                        id="currencyOfPartyCode"
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
                      <CLabel htmlFor="languageOfThePartyCode">
                        Language Of the Party
                      </CLabel>
                      <select
                        className="form-control form-select"
                        id="languageOfThePartyCode"
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
                      <CLabel htmlFor="name">Name</CLabel>
                      <CInput
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter here..."
                      />
                      <CFormText className="help-block error">
                        show errors in here
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4">
                    <CFormGroup>
                      <CLabel htmlFor="postBoxNumber">Post Box Number</CLabel>
                      <CInput
                        type="number"
                        id="postBoxNumber"
                        name="postBoxNumber"
                        placeholder="Enter here..."
                      />
                      <CFormText className="help-block error">
                        show errors in here
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4">
                    <CFormGroup>
                      <CLabel htmlFor="postalCode">Postal Code</CLabel>
                      <CInput
                        type="number"
                        id="postalCode"
                        name="postalCode"
                        placeholder="Enter here..."
                      />
                      <CFormText className="help-block error">
                        show errors in here
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4">
                    <CFormGroup>
                      <CLabel htmlFor="nf-password">Province</CLabel>
                      <CInput
                        type="text"
                        id="provinceCode"
                        name="provinceCode"
                        placeholder="Enter here..."
                      />
                      <CFormText className="help-block error">
                        show errors in here
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4">
                    <CFormGroup>
                      <CLabel htmlFor="state">State</CLabel>
                      <CInput
                        type="text"
                        id="state"
                        name="state"
                        placeholder="Enter here..."
                      />
                      <CFormText className="help-block error">
                        show errors in here
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4">
                    <CFormGroup>
                      <CLabel htmlFor="streetAddressOne">
                        Street Address One
                      </CLabel>
                      <CInput
                        type="text"
                        id="streetAddressOne"
                        name="streetAddressOne"
                        placeholder="Enter here..."
                      />
                      <CFormText className="help-block error">
                        show errors in here
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4">
                    <CFormGroup>
                      <CLabel htmlFor="streetAddressTwo">
                        Street Address Two
                      </CLabel>
                      <CInput
                        type="text"
                        id="streetAddressTwo"
                        name="streetAddressTwo"
                        placeholder="Enter here..."
                      />
                      <CFormText className="help-block error">
                        show errors in here
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4">
                    <CFormGroup>
                      <CLabel htmlFor="streetAddressThree">
                        Street Address Three
                      </CLabel>
                      <CInput
                        type="text"
                        id="streetAddressThree"
                        name="streetAddressThree"
                        placeholder="Enter here..."
                      />
                      <CFormText className="help-block error">
                        show errors in here
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                </CRow>

                <div className="card-title mt-3">Geological Coordinates</div>

                {/* Loop the below CRow for new product */}
                <CRow className="justify-content-center">
                  <CCol md="4">
                    <CFormGroup>
                      <CLabel htmlFor="latitude">Latitude</CLabel>
                      <CInput
                        type="number"
                        id="latitude"
                        name="latitude"
                        placeholder="Enter here..."
                      />
                      <CFormText className="help-block error">
                        show errors in here
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4">
                    <CFormGroup>
                      <CLabel htmlFor="longitude">Longitude</CLabel>
                      <CInput
                        type="number"
                        id="longitude"
                        name="longitude"
                        placeholder="Enter here..."
                      />
                      <CFormText className="help-block error">
                        show errors in here
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4"></CCol>
                </CRow>
              </CCardBody>

              <div>
                <CCardHeader
                  className="card-toggle-header border-top border-bottom-0"
                  onClick={() => {
                    this.toggle(
                      "collapseContactDetails",
                      !this.state.collapseContactDetails
                    );
                  }}
                >
                  Contact Details
                </CCardHeader>
                <CCollapse show={this.state.collapseContactDetails}>
                  <CCardBody>
                    <PickupContactForm
                      {...this.props}
                      data={this.state}
                    ></PickupContactForm>
                  </CCardBody>
                </CCollapse>
              </div>
            </CCollapse>
          </CCard>
        </CCol>
      </CRow>
    );
  }
}

export default PickupLocationModal;
