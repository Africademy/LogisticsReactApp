import React, { Component } from "react";
import { getTransportinstructiontransportequipmenttype } from "../../services/transportinstructiontransportequipmenttypeService";
import { getDimensiontypes } from "../../services/dimensiontypeService";
import { getLogisticlocationtypes } from "../../services/logisticlocationtypeService";
import { getMeasurementtypes } from "../../services/measurementtypeService";
import { getTransportsealtypes } from "../../services/transportsealtypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";
import { getReturnableassetidentifications } from "../../services/returnableassetidentificationService";

class TransportinstructiontransportequipmenttypeDetails extends Component{

  state = {
    data: { id: "", transportEquipmentWeight: "", transportEquipmentProviderPartyRole: "", pickUpLocation: "", returnLocation: "", transportSeal: "", dimension: "", transportEquipmentTypeCode: "", returnableAssetTypeIdentification: "", individualReturnableAssetIdentification: "", individualAssetIdentification: "", dimensionId: "", pickUpLocationId: "", returnLocationId: "", transportEquipmentWeightId: "", transportSealId: "", transportEquipmentProviderPartyRoleId: "", transportEquipmentTypeCodeId: "", individualAssetIdentificationId: "", returnableAssetTypeIdentificationId: "", individualReturnableAssetIdentificationId: "", },
    dimensions: [],
    pickUpLocations: [],
    returnLocations: [],
    transportEquipmentWeights: [],
    transportSeals: [],
    transportEquipmentProviderPartyRoles: [],
    transportEquipmentTypeCodes: [],
    individualAssetIdentifications: [],
    returnableAssetTypeIdentifications: [],
    individualReturnableAssetIdentifications: [],
    errors: {}
  };

  async populateForm() {
    try {
        const transportinstructiontransportequipmenttypeId = this.props.match.params.id;
        const { data } = await getTransportinstructiontransportequipmenttype(transportinstructiontransportequipmenttypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatedimensions() {
    const { data } = await getDimensiontypes();
    this.setState({ dimensions: data });
  }

  async populatepickUpLocations() {
    const { data } = await getLogisticlocationtypes();
    this.setState({ pickUpLocations: data });
  }

  async populatereturnLocations() {
    const { data } = await getLogisticlocationtypes();
    this.setState({ returnLocations: data });
  }

  async populatetransportEquipmentWeights() {
    const { data } = await getMeasurementtypes();
    this.setState({ transportEquipmentWeights: data });
  }

  async populatetransportSeals() {
    const { data } = await getTransportsealtypes();
    this.setState({ transportSeals: data });
  }

  async populatetransportEquipmentProviderPartyRoles() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ transportEquipmentProviderPartyRoles: data });
  }

  async populatetransportEquipmentTypeCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ transportEquipmentTypeCodes: data });
  }

  async populateindividualAssetIdentifications() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ individualAssetIdentifications: data });
  }

  async populatereturnableAssetTypeIdentifications() {
    const { data } = await getReturnableassetidentifications();
    this.setState({ returnableAssetTypeIdentifications: data });
  }

  async populateindividualReturnableAssetIdentifications() {
    const { data } = await getReturnableassetidentifications();
    this.setState({ individualReturnableAssetIdentifications: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatedimensions();
    await this.populatepickUpLocations();
    await this.populatereturnLocations();
    await this.populatetransportEquipmentWeights();
    await this.populatetransportSeals();
    await this.populatetransportEquipmentProviderPartyRoles();
    await this.populatetransportEquipmentTypeCodes();
    await this.populateindividualAssetIdentifications();
    await this.populatereturnableAssetTypeIdentifications();
    await this.populateindividualReturnableAssetIdentifications();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/transportinstructiontransportequipmenttypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportinstructiontransportequipmenttype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Equipment Weight : 
                 {this.state.data["transportEquipmentWeight"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Equipment Provider Party Role : 
                 {this.state.data["transportEquipmentProviderPartyRole"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Pick Up Location : 
                 {this.state.data["pickUpLocation"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Return Location : 
                 {this.state.data["returnLocation"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Seal : 
                 {this.state.data["transportSeal"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dimension : 
                 {this.state.data["dimension"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Equipment Type Code : 
                 {this.state.data["transportEquipmentTypeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Returnable Asset Type Identification : 
                 {this.state.data["returnableAssetTypeIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Individual Returnable Asset Identification : 
                 {this.state.data["individualReturnableAssetIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Individual Asset Identification : 
                 {this.state.data["individualAssetIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dimension : 
                  {this.state.dimensions.map(Dimensiontype => 
                      this.state.data["dimensionId"] == Dimensiontype._id ? " "+ Dimensiontype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Pick Up Location : 
                  {this.state.pickUpLocations.map(Logisticlocationtype => 
                      this.state.data["pickUpLocationId"] == Logisticlocationtype._id ? " "+ Logisticlocationtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Return Location : 
                  {this.state.returnLocations.map(Logisticlocationtype => 
                      this.state.data["returnLocationId"] == Logisticlocationtype._id ? " "+ Logisticlocationtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Equipment Weight : 
                  {this.state.transportEquipmentWeights.map(Measurementtype => 
                      this.state.data["transportEquipmentWeightId"] == Measurementtype._id ? " "+ Measurementtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Seal : 
                  {this.state.transportSeals.map(Transportsealtype => 
                      this.state.data["transportSealId"] == Transportsealtype._id ? " "+ Transportsealtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Equipment Provider Party Role : 
                  {this.state.transportEquipmentProviderPartyRoles.map(Enumerationlibrary => 
                      this.state.data["transportEquipmentProviderPartyRoleId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Equipment Type Code : 
                  {this.state.transportEquipmentTypeCodes.map(Enumerationlibrary => 
                      this.state.data["transportEquipmentTypeCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Individual Asset Identification : 
                  {this.state.individualAssetIdentifications.map(Enumerationlibrary => 
                      this.state.data["individualAssetIdentificationId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Returnable Asset Type Identification : 
                  {this.state.returnableAssetTypeIdentifications.map(Returnableassetidentification => 
                      this.state.data["returnableAssetTypeIdentificationId"] == Returnableassetidentification._id ? " "+ Returnableassetidentification.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Individual Returnable Asset Identification : 
                  {this.state.individualReturnableAssetIdentifications.map(Returnableassetidentification => 
                      this.state.data["individualReturnableAssetIdentificationId"] == Returnableassetidentification._id ? " "+ Returnableassetidentification.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default TransportinstructiontransportequipmenttypeDetails;