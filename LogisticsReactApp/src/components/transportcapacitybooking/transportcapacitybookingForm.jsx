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
import React, { Component } from "react";
import PickupLocationModal from "./transportcapacitybookingLocationForm";
import CargoCharacteristicsForm from "./transportcapacitybookingCargoCharacteristicsform";

class createTransportcapacitybooking extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      collapseOrderDetails: false,
      collapseServiceDetails: false,
      pickupLocationModal: false,
    };
  }

  toggle = (key, val) => {
    let d = {};
    d[key] = val;
    this.setState({ ...d });
  };

  render() {
    return (
      <div>
        <div className="py-5">
          <CContainer>
            <CForm action="" method="post">
              <CCard>
                <CCardHeader
                  className="card-toggle-header"
                  onClick={() => {
                    this.toggle(
                      "collapseOrderDetails",
                      !this.state.collapseOrderDetails
                    );
                  }}
                >
                  Order Details
                </CCardHeader>
                <CCollapse show={this.state.collapseOrderDetails}>
                  <CCardBody>
                    <CRow className="justify-content-center">
                      <CCol md="6">
                        <CFormGroup>
                          <CLabel htmlFor="nf-email">Email</CLabel>
                          <CLink
                            href="#"
                            className="float-right font-xs font-italic"
                          >
                            Generate ID
                          </CLink>
                          <CInput
                            type="email"
                            id="nf-email"
                            name="nf-email"
                            placeholder="Enter Email.."
                            autoComplete="email"
                          />
                          <CFormText className="help-block error">
                            show errors in here
                          </CFormText>
                        </CFormGroup>
                      </CCol>
                      <CCol md="3">
                        <CFormGroup>
                          <CLabel htmlFor="nf-password">Password</CLabel>
                          <CInput
                            type="password"
                            id="nf-password"
                            name="nf-password"
                            placeholder="Enter Password.."
                            autoComplete="current-password"
                          />
                          <CFormText className="help-block error">
                            show errors in here
                          </CFormText>
                        </CFormGroup>
                      </CCol>
                      <CCol md="3">
                        <CFormGroup>
                          <CLabel htmlFor="nf-password">Password</CLabel>
                          <CInput
                            type="password"
                            id="nf-password"
                            name="nf-password"
                            placeholder="Enter Password.."
                            autoComplete="current-password"
                          />
                          <CFormText className="help-block error">
                            show errors in here
                          </CFormText>
                        </CFormGroup>
                      </CCol>
                    </CRow>

                    <div className="card-title mt-3">Product Details</div>

                    {/* Loop the below CRow for new product */}
                    <CRow className="justify-content-center">
                      <CCol md="3">
                        <CFormGroup>
                          <CLabel htmlFor="nf-password">Password</CLabel>
                          <CInput
                            type="password"
                            id="nf-password"
                            name="nf-password"
                            placeholder="Enter Password.."
                            autoComplete="current-password"
                          />
                          <CFormText className="help-block error">
                            show errors in here
                          </CFormText>
                        </CFormGroup>
                      </CCol>
                      <CCol md="3">
                        <CFormGroup>
                          <CLabel htmlFor="nf-password">Password</CLabel>
                          <CInput
                            type="password"
                            id="nf-password"
                            name="nf-password"
                            placeholder="Enter Password.."
                            autoComplete="current-password"
                          />
                          <CFormText className="help-block error">
                            show errors in here
                          </CFormText>
                        </CFormGroup>
                      </CCol>

                      <CCol md="3">
                        <CFormGroup>
                          <CLabel htmlFor="nf-password">Password</CLabel>
                          <CInput
                            type="password"
                            id="nf-password"
                            name="nf-password"
                            placeholder="Enter Password.."
                            autoComplete="current-password"
                          />
                          <CFormText className="help-block error">
                            show errors in here
                          </CFormText>
                        </CFormGroup>
                      </CCol>
                      <CCol md="3">
                        <CFormGroup>
                          <CLabel htmlFor="nf-password">Password</CLabel>
                          <CInput
                            type="password"
                            id="nf-password"
                            name="nf-password"
                            placeholder="Enter Password.."
                            autoComplete="current-password"
                          />
                          <CFormText className="help-block error">
                            show errors in here
                          </CFormText>
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <div className="continue-block">
                      <CLink href="https://coreui.io" target="_blank">
                        Add New Product
                        <CIcon size={"sm"} name={"cisPlusCircle"} />
                      </CLink>
                      <CButton
                        type="button"
                        className="next-btn"
                        color="primary"
                      >
                        Next
                      </CButton>
                    </div>
                  </CCardBody>
                </CCollapse>
              </CCard>

              <CCard>
                <CCardHeader
                  className="card-toggle-header"
                  onClick={() => {
                    this.toggle(
                      "collapseServiceDetails",
                      !this.state.collapseServiceDetails
                    );
                  }}
                >
                  Planned Pickup Details
                </CCardHeader>
                <CCollapse show={this.state.collapseServiceDetails}>
                  <CCardBody>
                    <CRow className="justify-content-center">
                      <CCol md="4">
                        <CFormGroup>
                          <CLabel htmlFor="nf-dropdown">
                            Service category
                          </CLabel>
                          <select
                            className="form-control form-select"
                            id="nf-dropdown"
                          >
                            <option value="">Select Service Category</option>
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
                          <CLabel htmlFor="nf-dropdown">
                            Service Condition Type
                          </CLabel>
                          <select
                            className="form-control form-select"
                            id="nf-dropdown"
                          >
                            <option value="">
                              Select Service Condition Type
                            </option>
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
                          <CLabel htmlFor="nf-dropdown">Service Level</CLabel>
                          <select
                            className="form-control form-select"
                            id="nf-dropdown"
                          >
                            <option value="">Select Service Level</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                          <CFormText className="help-block error">
                            show errors in here
                          </CFormText>
                        </CFormGroup>
                      </CCol>
                    </CRow>

                    <CRow className="justify-content-center">
                      <CCol md="12">
                        <CButton
                          onClick={() => {
                            this.toggle(
                              "pickupLocationModal",
                              !this.state.pickupLocationModal
                            );
                          }}
                          className="btn btn-info mr-1"
                        >
                          Add Pickup Location
                        </CButton>
                        <CModal
                          size="xl"
                          closeOnBackdrop="false"
                          show={this.state.pickupLocationModal}
                          onClose={() => {
                            this.toggle(
                              "pickupLocationModal",
                              !this.state.pickupLocationModal
                            );
                          }}
                        >
                          <CModalHeader className="card-title mb-0">
                            Add Pickup Location
                          </CModalHeader>
                          <CModalBody>
                            <PickupLocationModal
                              data={this.state}
                              {...this.props}
                            ></PickupLocationModal>
                          </CModalBody>
                          <CModalFooter>
                            <CButton color="primary">Add</CButton>
                            <CButton
                              color="secondary"
                              onClick={() => {
                                this.toggle(
                                  "pickupLocationModal",
                                  !this.state.pickupLocationModal
                                );
                              }}
                            >
                              Cancel
                            </CButton>
                          </CModalFooter>
                        </CModal>
                      </CCol>
                    </CRow>
                    <div className="card-title mt-3">Time Band</div>

                    <CRow className="justify-content-center">
                      <CCol md="6">
                        <CFormGroup>
                          <CLabel htmlFor="nf-pickupStartTime">
                            Starts at
                          </CLabel>
                          <CInput
                            type="datetime-local"
                            id="nf-pickupStartTime"
                            name="nf-pickupStartTime"
                          />
                          <CFormText className="help-block error">
                            show errors in here
                          </CFormText>
                        </CFormGroup>
                      </CCol>
                      <CCol md="6">
                        <CFormGroup>
                          <CLabel htmlFor="nf-pickupEndTime">Ends at</CLabel>
                          <CInput
                            type="datetime-local"
                            id="nf-pickupEndTime"
                            name="nf-pickupEndTime"
                          />
                          <CFormText className="help-block error">
                            show errors in here
                          </CFormText>
                        </CFormGroup>
                      </CCol>
                    </CRow>

                    <div className="card-title mt-3">Event Time</div>

                    <CRow className="justify-content-center">
                      <CCol md="6">
                        <CFormGroup>
                          <CLabel htmlFor="nf-pickupStartTime">
                            Start time
                          </CLabel>
                          <CInput
                            type="time"
                            id="nf-pickupStartTime"
                            name="nf-pickupStartTime"
                          />
                          <CFormText className="help-block error">
                            show errors in here
                          </CFormText>
                        </CFormGroup>
                      </CCol>
                      <CCol md="6">
                        <CFormGroup>
                          <CLabel htmlFor="nf-pickupEndTime">End time</CLabel>
                          <CInput
                            type="time"
                            id="nf-pickupEndTime"
                            name="nf-pickupEndTime"
                          />
                          <CFormText className="help-block error">
                            show errors in here
                          </CFormText>
                        </CFormGroup>
                      </CCol>
                    </CRow>

                    <div className="continue-block">
                      <CButton
                        type="button"
                        className="next-btn"
                        color="primary"
                      >
                        Next
                      </CButton>
                    </div>
                  </CCardBody>
                </CCollapse>
              </CCard>

              <CargoCharacteristicsForm
                {...this.props}
                data={this.state}
              ></CargoCharacteristicsForm>

              {/* <CCard>
                <CCardHeader
                  className="card-toggle-header"
                  onClick={() => {
                    this.toggle(
                      "collapsePackageTotal",
                      !this.state.collapsePackageTotal
                    );
                  }}
                >
                  Package Total
                </CCardHeader>
                <CCollapse show={this.state.collapsePackageTotal}>
                  <CCardBody>
                    <CRow>
                      <CCol md="6">
                        <CFormGroup>
                          <CLabel htmlFor="packageTypeCode">
                            Package Type
                          </CLabel>
                          <select
                            className="form-control form-select"
                            id="packageTypeCode"
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
                      <CCol md="6">
                        <CFormGroup>
                          <CLabel htmlFor="sublocationIdentification">
                            Total Package Quantity
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
                      <CCol md="6">
                        <CInputGroup>
                          <CInput
                            type="email"
                            id="username"
                            name="username"
                            autoComplete="name"
                          />
                          <CInputGroupAppend>
                            <CDropdown>
                              <CDropdownToggle caret color="info">
                                Dropdown button
                              </CDropdownToggle>
                              <CDropdownMenu>
                                <CDropdownItem>Action</CDropdownItem>
                                <CDropdownItem>Action</CDropdownItem>
                                <CDropdownItem>Another Action</CDropdownItem>
                              </CDropdownMenu>
                            </CDropdown>
                          </CInputGroupAppend>
                        </CInputGroup>
                        <CFormText className="help-block error">
                          show errors in here
                        </CFormText>
                      </CCol>
                      <CCol md="6">
                        <CInputGroup>
                          <CInput
                            type="email"
                            id="username"
                            name="username"
                            autoComplete="name"
                          />
                          <CInputGroupAppend>
                            <CDropdown>
                              <CDropdownToggle caret color="info">
                                Dropdown button
                              </CDropdownToggle>
                              <CDropdownMenu>
                                <CDropdownItem>Action</CDropdownItem>
                                <CDropdownItem>Action</CDropdownItem>
                                <CDropdownItem>Another Action</CDropdownItem>
                              </CDropdownMenu>
                            </CDropdown>
                          </CInputGroupAppend>
                        </CInputGroup>
                        <CFormText className="help-block error">
                          show errors in here
                        </CFormText>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCollapse>
              </CCard> */}

              {/* Form Ends here */}
            </CForm>
          </CContainer>
        </div>
      </div>
    );
  }
}

export default createTransportcapacitybooking;
