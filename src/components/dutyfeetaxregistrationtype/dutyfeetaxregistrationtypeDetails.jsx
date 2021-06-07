import React, { Component } from "react";
import { getDutyfeetaxregistrationtype } from "../../services/dutyfeetaxregistrationtypeService";
import { getDescription80types } from "../../services/description80typeService";
import { getIdentifiertypes } from "../../services/identifiertypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class DutyfeetaxregistrationtypeDetails extends Component{

  state = {
    data: { id: "", dutyFeeTaxRegistrationID: "", dutyFeeTaxTypeCode: "", dutyFeeTaxAgencyName: "", dutyFeeTaxDescription: "", dutyFeeTaxDescriptionId: "", dutyFeeTaxRegistrationIDId: "", dutyFeeTaxTypeCodeId: "", },
    dutyFeeTaxDescriptions: [],
    dutyFeeTaxRegistrationIDs: [],
    dutyFeeTaxTypeCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const dutyfeetaxregistrationtypeId = this.props.match.params.id;
        const { data } = await getDutyfeetaxregistrationtype(dutyfeetaxregistrationtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatedutyFeeTaxDescriptions() {
    const { data } = await getDescription80types();
    this.setState({ dutyFeeTaxDescriptions: data });
  }

  async populatedutyFeeTaxRegistrationIDs() {
    const { data } = await getIdentifiertypes();
    this.setState({ dutyFeeTaxRegistrationIDs: data });
  }

  async populatedutyFeeTaxTypeCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ dutyFeeTaxTypeCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatedutyFeeTaxDescriptions();
    await this.populatedutyFeeTaxRegistrationIDs();
    await this.populatedutyFeeTaxTypeCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/dutyfeetaxregistrationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Dutyfeetaxregistrationtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Duty Fee Tax Registration I D : 
                 {this.state.data["dutyFeeTaxRegistrationID"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Duty Fee Tax Type Code : 
                 {this.state.data["dutyFeeTaxTypeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Duty Fee Tax Agency Name : 
                 {this.state.data["dutyFeeTaxAgencyName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Duty Fee Tax Description : 
                 {this.state.data["dutyFeeTaxDescription"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Duty Fee Tax Description : 
                  {this.state.dutyFeeTaxDescriptions.map(Description80type => 
                      this.state.data["dutyFeeTaxDescriptionId"] == Description80type._id ? " "+ Description80type.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Duty Fee Tax Registration I D : 
                  {this.state.dutyFeeTaxRegistrationIDs.map(Identifiertype => 
                      this.state.data["dutyFeeTaxRegistrationIDId"] == Identifiertype._id ? " "+ Identifiertype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Duty Fee Tax Type Code : 
                  {this.state.dutyFeeTaxTypeCodes.map(Enumerationlibrary => 
                      this.state.data["dutyFeeTaxTypeCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default DutyfeetaxregistrationtypeDetails;