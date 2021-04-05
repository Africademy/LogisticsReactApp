import React, { Component } from "react";
import { getTransportsealtype } from "../../services/transportsealtypeService";
import { getIdentifiertypes } from "../../services/identifiertypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class TransportsealtypeDetails extends Component{

  state = {
    data: { id: "", sealIdentification: "", sealTypeCode: "", sealAffixingPartyRole: "", sealConditionCode: "", sealIdentificationId: "", sealTypeCodeId: "", sealAffixingPartyRoleId: "", sealConditionCodeId: "", },
    sealIdentifications: [],
    sealTypeCodes: [],
    sealAffixingPartyRoles: [],
    sealConditionCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const transportsealtypeId = this.props.match.params.id;
        const { data } = await getTransportsealtype(transportsealtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatesealIdentifications() {
    const { data } = await getIdentifiertypes();
    this.setState({ sealIdentifications: data });
  }

  async populatesealTypeCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ sealTypeCodes: data });
  }

  async populatesealAffixingPartyRoles() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ sealAffixingPartyRoles: data });
  }

  async populatesealConditionCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ sealConditionCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatesealIdentifications();
    await this.populatesealTypeCodes();
    await this.populatesealAffixingPartyRoles();
    await this.populatesealConditionCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/transportsealtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportsealtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Seal Identification : 
                 {this.state.data["sealIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Seal Type Code : 
                 {this.state.data["sealTypeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Seal Affixing Party Role : 
                 {this.state.data["sealAffixingPartyRole"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Seal Condition Code : 
                 {this.state.data["sealConditionCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Seal Identification : 
                  {this.state.sealIdentifications.map(Identifiertype => 
                      this.state.data["sealIdentificationId"] == Identifiertype._id ? " "+ Identifiertype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Seal Type Code : 
                  {this.state.sealTypeCodes.map(Enumerationlibrary => 
                      this.state.data["sealTypeCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Seal Affixing Party Role : 
                  {this.state.sealAffixingPartyRoles.map(Enumerationlibrary => 
                      this.state.data["sealAffixingPartyRoleId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Seal Condition Code : 
                  {this.state.sealConditionCodes.map(Enumerationlibrary => 
                      this.state.data["sealConditionCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default TransportsealtypeDetails;