import React, { Component } from "react";
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
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CLabel,
  CRow,
} from "@coreui/react";

export default class CargoCharacteristicsForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = this.props.data;
    this.state.collapseSpecialRequirements = true;
  }
  toggle = (key, val) => {
    let d = {};
    d[key] = val;
    this.setState({ ...d });
  };
  render() {
    return (
      <div>
        <CCard>
          <CCardHeader
            className="card-toggle-header"
            onClick={() => {
              this.toggle(
                "collapseSpecialRequirements",
                !this.state.collapseSpecialRequirements
              );
            }}
          >
            Space Requirements
          </CCardHeader>
          <CCollapse show={this.state.collapseSpecialRequirements}>
            <CCardBody>
              <div className="card-title my-2">Cargo Characteristics</div>
              <CRow>
                <CCol md="6">
                  <CFormGroup>
                    <CLabel htmlFor="cargoTypeCode">Cargo Type</CLabel>
                    <select
                      className="form-control form-select"
                      id="cargoTypeCode"
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
                    <CLabel htmlFor="harmonizedSystemCode">
                      Harmonized System
                    </CLabel>
                    <select
                      className="form-control form-select"
                      id="harmonizedSystemCode"
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
                    <CLabel htmlFor="cargoTypeDescription">
                      Cargo Type Description
                    </CLabel>
                    <select
                      className="form-control form-select"
                      id="cargoTypeDescription"
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
                <CCol md="3">
                  <CFormGroup>
                    <CLabel htmlFor="countryOfOriginCode">
                      Country Of Origin
                    </CLabel>
                    <select
                      className="form-control form-select"
                      id="countryOfOriginCode"
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
                <CCol md="3">
                  <CFormGroup>
                    <CLabel htmlFor="finalDestinationCountry">
                      Final Destination Country
                    </CLabel>
                    <select
                      className="form-control form-select"
                      id="finalDestinationCountry"
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
                  <CLabel htmlFor="totalGrossVolume">Total Gross Volume</CLabel>
                  <CInputGroup>
                    <CInput
                      type="text"
                      placeholder="Enter here..."
                      id="totalGrossVolume"
                      name="totalGrossVolume"
                    />
                    <CInputGroupAppend>
                      <CDropdown>
                        <CDropdownToggle caret color="info">
                          Select unit
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
                  <CLabel htmlFor="totalGrossWeight">Total Gross Weight</CLabel>
                  <CInputGroup>
                    <CInput
                      type="text"
                      placeholder="Enter here..."
                      id="totalGrossWeight"
                      name="totalGrossWeight"
                    />
                    <CInputGroupAppend>
                      <CDropdown>
                        <CDropdownToggle caret color="info">
                          Select unit
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
                  <CLabel htmlFor="totalTransportNetWeight">
                    Total Transport Net Weight
                  </CLabel>
                  <CInputGroup>
                    <CInput
                      type="text"
                      placeholder="Enter here..."
                      id="totalTransportNetWeight"
                      name="totalTransportNetWeight"
                    />
                    <CInputGroupAppend>
                      <CDropdown>
                        <CDropdownToggle caret color="info">
                          Select unit
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
                  <CLabel htmlFor="totalChargeableWeight">
                    Total Chargeable Weight
                  </CLabel>
                  <CInputGroup>
                    <CInput
                      type="text"
                      placeholder="Enter here..."
                      id="totalChargeableWeight"
                      name="totalChargeableWeight"
                    />
                    <CInputGroupAppend>
                      <CDropdown>
                        <CDropdownToggle caret color="info">
                          Select unit
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
                  <CLabel htmlFor="declaredWeightForCustoms">
                    Declared Weight For Customs
                  </CLabel>
                  <CInputGroup>
                    <CInput
                      type="text"
                      placeholder="Enter here..."
                      id="declaredWeightForCustoms"
                      name="declaredWeightForCustoms"
                    />
                    <CInputGroupAppend>
                      <CDropdown>
                        <CDropdownToggle caret color="info">
                          Select unit
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
                  <CLabel htmlFor="totalLoadingLength">
                    Total Loading Length
                  </CLabel>
                  <CInputGroup>
                    <CInput
                      type="text"
                      placeholder="Enter here..."
                      id="totalLoadingLength"
                      name="totalLoadingLength"
                    />
                    <CInputGroupAppend>
                      <CDropdown>
                        <CDropdownToggle caret color="info">
                          Select unit
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
                  <CLabel htmlFor="associatedInvoiceAmount">
                    Associated Invoice Amount
                  </CLabel>
                  <CInputGroup>
                    <CInput
                      type="text"
                      placeholder="Enter here..."
                      id="associatedInvoiceAmount"
                      name="associatedInvoiceAmount"
                    />
                    <CInputGroupAppend>
                      <CDropdown>
                        <CDropdownToggle caret color="info">
                          Select unit
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
                  <CLabel htmlFor="declaredValueForCustoms">
                    Declared Value For Customs
                  </CLabel>
                  <CInputGroup>
                    <CInput
                      type="text"
                      placeholder="Enter here..."
                      id="declaredValueForCustoms"
                      name="declaredValueForCustoms"
                    />
                    <CInputGroupAppend>
                      <CDropdown>
                        <CDropdownToggle caret color="info">
                          Select unit
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
                  <CLabel htmlFor="totalPackageQuantity">
                    Total Package Quantity
                  </CLabel>
                  <CInputGroup>
                    <CInput
                      type="text"
                      placeholder="Enter here..."
                      id="totalPackageQuantity"
                      name="totalPackageQuantity"
                    />
                    <CInputGroupAppend>
                      <CDropdown>
                        <CDropdownToggle caret color="info">
                          Select unit
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
                  <CLabel htmlFor="totalItemQuantity">
                    Total Item Quantity
                  </CLabel>
                  <CInputGroup>
                    <CInput
                      type="text"
                      placeholder="Enter here..."
                      id="totalItemQuantity"
                      name="totalItemQuantity"
                    />
                    <CInputGroupAppend>
                      <CDropdown>
                        <CDropdownToggle caret color="info">
                          Select unit
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

              <div className="card-title my-2">Package Total</div>
              <CRow>
                <CCol md="6">
                  <CFormGroup>
                    <CLabel htmlFor="packageTypeCode">Package Type</CLabel>
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
                    <CLabel htmlFor="totalPackageQuantityPT">
                      Total Package Quantity
                    </CLabel>
                    <CInput
                      type="text"
                      id="totalPackageQuantityPT"
                      name="totalPackageQuantityPT"
                      placeholder="Enter here..."
                    />
                    <CFormText className="help-block error">
                      show errors in here
                    </CFormText>
                  </CFormGroup>
                </CCol>
                <CCol md="6">
                  <CLabel htmlFor="totalGrossWeightPT">
                    Total Gross Weight
                  </CLabel>
                  <CInputGroup>
                    <CInput
                      type="text"
                      placeholder="Enter here..."
                      id="totalGrossWeightPT"
                      name="totalGrossWeightPT"
                    />
                    <CInputGroupAppend>
                      <CDropdown>
                        <CDropdownToggle caret color="info">
                          Select unit
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
                  <CLabel htmlFor="totalGrossVolumePT">
                    Total Gross Volume
                  </CLabel>
                  <CInputGroup>
                    <CInput
                      type="text"
                      placeholder="Enter here..."
                      id="totalGrossVolumePT"
                      name="totalGrossVolumePT"
                    />
                    <CInputGroupAppend>
                      <CDropdown>
                        <CDropdownToggle caret color="info">
                          Select unit
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
        </CCard>
      </div>
    );
  }
}
