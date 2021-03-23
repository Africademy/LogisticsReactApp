import React, { Component } from "react";
import { getLogisticunittype } from "../../services/logisticunittypeService";
import { getAdditionallogisticunitidentificationtypes } from "../../services/additionallogisticunitidentificationtypeService";
import { getDimensiontypes } from "../../services/dimensiontypeService";
import { getLogisticunitidentificationtypes } from "../../services/logisticunitidentificationtypeService";
import { getMeasurementtypes } from "../../services/measurementtypeService";
import { getPackagingmarkingtypes } from "../../services/packagingmarkingtypeService";
import { getQuantitytypes } from "../../services/quantitytypeService";
import { getReturnablepackagingtypes } from "../../services/returnablepackagingtypeService";
import { getTransportequipmenttypes } from "../../services/transportequipmenttypeService";
import { getUnitmeasurementtypes } from "../../services/unitmeasurementtypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class LogisticunittypeDetails extends Component{

  state = {
    data: { id: "", parentLogisticUnitId: "", grossWeight: "", packageLevelCode: "", packageTypeCode: "", tradeItemQuantity: "", packagingMarking: "", referencedTransportEquipment: "", returnablePackaging: "", dimension: "", unitMeasurement: "", sscc: "", additionalLogisticUnitIdentification: "", additionalLogisticUnitIdentificationId: "", dimensionId: "", parentLogisticUnitIdId: "", grossWeightId: "", packagingMarkingId: "", tradeItemQuantityId: "", returnablePackagingId: "", referencedTransportEquipmentId: "", unitMeasurementId: "", packageLevelCodeId: "", packageTypeCodeId: "", },
    additionalLogisticUnitIdentifications: [],
    dimensions: [],
    parentLogisticUnitIds: [],
    grossWeights: [],
    packagingMarkings: [],
    tradeItemQuantitys: [],
    returnablePackagings: [],
    referencedTransportEquipments: [],
    unitMeasurements: [],
    packageLevelCodes: [],
    packageTypeCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const logisticunittypeId = this.props.match.params.id;
        const { data } = await getLogisticunittype(logisticunittypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateadditionalLogisticUnitIdentifications() {
    const { data } = await getAdditionallogisticunitidentificationtypes();
    this.setState({ additionalLogisticUnitIdentifications: data });
  }

  async populatedimensions() {
    const { data } = await getDimensiontypes();
    this.setState({ dimensions: data });
  }

  async populateparentLogisticUnitIds() {
    const { data } = await getLogisticunitidentificationtypes();
    this.setState({ parentLogisticUnitIds: data });
  }

  async populategrossWeights() {
    const { data } = await getMeasurementtypes();
    this.setState({ grossWeights: data });
  }

  async populatepackagingMarkings() {
    const { data } = await getPackagingmarkingtypes();
    this.setState({ packagingMarkings: data });
  }

  async populatetradeItemQuantitys() {
    const { data } = await getQuantitytypes();
    this.setState({ tradeItemQuantitys: data });
  }

  async populatereturnablePackagings() {
    const { data } = await getReturnablepackagingtypes();
    this.setState({ returnablePackagings: data });
  }

  async populatereferencedTransportEquipments() {
    const { data } = await getTransportequipmenttypes();
    this.setState({ referencedTransportEquipments: data });
  }

  async populateunitMeasurements() {
    const { data } = await getUnitmeasurementtypes();
    this.setState({ unitMeasurements: data });
  }

  async populatepackageLevelCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ packageLevelCodes: data });
  }

  async populatepackageTypeCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ packageTypeCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateadditionalLogisticUnitIdentifications();
    await this.populatedimensions();
    await this.populateparentLogisticUnitIds();
    await this.populategrossWeights();
    await this.populatepackagingMarkings();
    await this.populatetradeItemQuantitys();
    await this.populatereturnablePackagings();
    await this.populatereferencedTransportEquipments();
    await this.populateunitMeasurements();
    await this.populatepackageLevelCodes();
    await this.populatepackageTypeCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/logisticunittypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Logisticunittype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Parent Logistic Unit Id : 
                 {this.state.data["parentLogisticUnitId"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Gross Weight : 
                 {this.state.data["grossWeight"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Package Level Code : 
                 {this.state.data["packageLevelCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Package Type Code : 
                 {this.state.data["packageTypeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Trade Item Quantity : 
                 {this.state.data["tradeItemQuantity"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Packaging Marking : 
                 {this.state.data["packagingMarking"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Referenced Transport Equipment : 
                 {this.state.data["referencedTransportEquipment"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Returnable Packaging : 
                 {this.state.data["returnablePackaging"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dimension : 
                 {this.state.data["dimension"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Unit Measurement : 
                 {this.state.data["unitMeasurement"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Sscc : 
                 {this.state.data["sscc"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Logistic Unit Identification : 
                 {this.state.data["additionalLogisticUnitIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Logistic Unit Identification : 
                  {this.state.additionalLogisticUnitIdentifications.map(Additionallogisticunitidentificationtype => 
                      this.state.data["additionalLogisticUnitIdentificationId"] == Additionallogisticunitidentificationtype._id ? " "+ Additionallogisticunitidentificationtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dimension : 
                  {this.state.dimensions.map(Dimensiontype => 
                      this.state.data["dimensionId"] == Dimensiontype._id ? " "+ Dimensiontype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Parent Logistic Unit Id : 
                  {this.state.parentLogisticUnitIds.map(Logisticunitidentificationtype => 
                      this.state.data["parentLogisticUnitIdId"] == Logisticunitidentificationtype._id ? " "+ Logisticunitidentificationtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Gross Weight : 
                  {this.state.grossWeights.map(Measurementtype => 
                      this.state.data["grossWeightId"] == Measurementtype._id ? " "+ Measurementtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Packaging Marking : 
                  {this.state.packagingMarkings.map(Packagingmarkingtype => 
                      this.state.data["packagingMarkingId"] == Packagingmarkingtype._id ? " "+ Packagingmarkingtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Trade Item Quantity : 
                  {this.state.tradeItemQuantitys.map(Quantitytype => 
                      this.state.data["tradeItemQuantityId"] == Quantitytype._id ? " "+ Quantitytype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Returnable Packaging : 
                  {this.state.returnablePackagings.map(Returnablepackagingtype => 
                      this.state.data["returnablePackagingId"] == Returnablepackagingtype._id ? " "+ Returnablepackagingtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Referenced Transport Equipment : 
                  {this.state.referencedTransportEquipments.map(Transportequipmenttype => 
                      this.state.data["referencedTransportEquipmentId"] == Transportequipmenttype._id ? " "+ Transportequipmenttype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Unit Measurement : 
                  {this.state.unitMeasurements.map(Unitmeasurementtype => 
                      this.state.data["unitMeasurementId"] == Unitmeasurementtype._id ? " "+ Unitmeasurementtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Package Level Code : 
                  {this.state.packageLevelCodes.map(Enumerationlibrary => 
                      this.state.data["packageLevelCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Package Type Code : 
                  {this.state.packageTypeCodes.map(Enumerationlibrary => 
                      this.state.data["packageTypeCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default LogisticunittypeDetails;