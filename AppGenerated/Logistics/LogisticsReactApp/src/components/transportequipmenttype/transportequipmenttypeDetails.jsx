import React, { Component } from "react";
import { getTransportequipmenttype } from "../../services/transportequipmenttypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";
import { getIndividualassetidentifications } from "../../services/individualassetidentificationService";
import { getReturnableassetidentifications } from "../../services/returnableassetidentificationService";

class TransportequipmenttypeDetails extends Component{

  state = {
    data: { id: "", transportEquipmentTypeCode: "", returnableAssetTypeIdentification: "", individualReturnableAssetIdentification: "", individualAssetIdentification: "", transportEquipmentTypeCodeId: "", individualAssetIdentificationId: "", returnableAssetTypeIdentificationId: "", individualReturnableAssetIdentificationId: "", },
    transportEquipmentTypeCodes: [],
    individualAssetIdentifications: [],
    returnableAssetTypeIdentifications: [],
    individualReturnableAssetIdentifications: [],
    errors: {}
  };

  async populateForm() {
    try {
        const transportequipmenttypeId = this.props.match.params.id;
        const { data } = await getTransportequipmenttype(transportequipmenttypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatetransportEquipmentTypeCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ transportEquipmentTypeCodes: data });
  }

  async populateindividualAssetIdentifications() {
    const { data } = await getIndividualassetidentifications();
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
    await this.populatetransportEquipmentTypeCodes();
    await this.populateindividualAssetIdentifications();
    await this.populatereturnableAssetTypeIdentifications();
    await this.populateindividualReturnableAssetIdentifications();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/transportequipmenttypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportequipmenttype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
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
              <label  className="form-control"> Transport Equipment Type Code : 
                  {this.state.transportEquipmentTypeCodes.map(Enumerationlibrary => 
                      this.state.data["transportEquipmentTypeCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Individual Asset Identification : 
                  {this.state.individualAssetIdentifications.map(Individualassetidentification => 
                      this.state.data["individualAssetIdentificationId"] == Individualassetidentification._id ? " "+ Individualassetidentification.id : ""
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

export default TransportequipmenttypeDetails;