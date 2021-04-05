import React, { Component } from "react";
import { getReturnablepackagingtype } from "../../services/returnablepackagingtypeService";
import { getIdentifiertypes } from "../../services/identifiertypeService";
import { getReturnableassetidentifications } from "../../services/returnableassetidentificationService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class ReturnablepackagingtypeDetails extends Component{

  state = {
    data: { id: "", packagingQuantity: "", currentHolderRegistration: "", newHolderRegistration: "", packagingConditionCode: "", returnableAssetIdentification: "", individualReturnableAssetIdentification: "", currentHolderRegistrationId: "", newHolderRegistrationId: "", returnableAssetIdentificationId: "", individualReturnableAssetIdentificationId: "", packagingConditionCodeId: "", },
    currentHolderRegistrations: [],
    newHolderRegistrations: [],
    returnableAssetIdentifications: [],
    individualReturnableAssetIdentifications: [],
    packagingConditionCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const returnablepackagingtypeId = this.props.match.params.id;
        const { data } = await getReturnablepackagingtype(returnablepackagingtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatecurrentHolderRegistrations() {
    const { data } = await getIdentifiertypes();
    this.setState({ currentHolderRegistrations: data });
  }

  async populatenewHolderRegistrations() {
    const { data } = await getIdentifiertypes();
    this.setState({ newHolderRegistrations: data });
  }

  async populatereturnableAssetIdentifications() {
    const { data } = await getReturnableassetidentifications();
    this.setState({ returnableAssetIdentifications: data });
  }

  async populateindividualReturnableAssetIdentifications() {
    const { data } = await getReturnableassetidentifications();
    this.setState({ individualReturnableAssetIdentifications: data });
  }

  async populatepackagingConditionCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ packagingConditionCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatecurrentHolderRegistrations();
    await this.populatenewHolderRegistrations();
    await this.populatereturnableAssetIdentifications();
    await this.populateindividualReturnableAssetIdentifications();
    await this.populatepackagingConditionCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/returnablepackagingtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Returnablepackagingtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Packaging Quantity : 
                 {this.state.data["packagingQuantity"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Current Holder Registration : 
                 {this.state.data["currentHolderRegistration"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> New Holder Registration : 
                 {this.state.data["newHolderRegistration"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Packaging Condition Code : 
                 {this.state.data["packagingConditionCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Returnable Asset Identification : 
                 {this.state.data["returnableAssetIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Individual Returnable Asset Identification : 
                 {this.state.data["individualReturnableAssetIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Current Holder Registration : 
                  {this.state.currentHolderRegistrations.map(Identifiertype => 
                      this.state.data["currentHolderRegistrationId"] == Identifiertype._id ? " "+ Identifiertype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> New Holder Registration : 
                  {this.state.newHolderRegistrations.map(Identifiertype => 
                      this.state.data["newHolderRegistrationId"] == Identifiertype._id ? " "+ Identifiertype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Returnable Asset Identification : 
                  {this.state.returnableAssetIdentifications.map(Returnableassetidentification => 
                      this.state.data["returnableAssetIdentificationId"] == Returnableassetidentification._id ? " "+ Returnableassetidentification.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Individual Returnable Asset Identification : 
                  {this.state.individualReturnableAssetIdentifications.map(Returnableassetidentification => 
                      this.state.data["individualReturnableAssetIdentificationId"] == Returnableassetidentification._id ? " "+ Returnableassetidentification.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Packaging Condition Code : 
                  {this.state.packagingConditionCodes.map(Enumerationlibrary => 
                      this.state.data["packagingConditionCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default ReturnablepackagingtypeDetails;