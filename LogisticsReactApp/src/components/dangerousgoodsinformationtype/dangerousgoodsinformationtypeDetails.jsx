import React, { Component } from "react";
import { getDangerousgoodsinformationtype } from "../../services/dangerousgoodsinformationtypeService";
import { getContacttypes } from "../../services/contacttypeService";
import { getDangerousgoodsregulationinformationtypes } from "../../services/dangerousgoodsregulationinformationtypeService";
import { getDescription1000types } from "../../services/description1000typeService";
import { getDescription200types } from "../../services/description200typeService";
import { getIdentifiertypes } from "../../services/identifiertypeService";

class DangerousgoodsinformationtypeDetails extends Component{

  state = {
    data: { id: "", dangerousGoodsUNIdentifier: "", dangerousGoodsShippingName: "", dangerousGoodsTechnicalName: "", dangerousGoodsDescription: "", contact: "", dangerousGoodsRegulationInformation: "", contactId: "", dangerousGoodsRegulationInformationId: "", dangerousGoodsDescriptionId: "", dangerousGoodsShippingNameId: "", dangerousGoodsTechnicalNameId: "", dangerousGoodsUNIdentifierId: "", },
    contacts: [],
    dangerousGoodsRegulationInformations: [],
    dangerousGoodsDescriptions: [],
    dangerousGoodsShippingNames: [],
    dangerousGoodsTechnicalNames: [],
    dangerousGoodsUNIdentifiers: [],
    errors: {}
  };

  async populateForm() {
    try {
        const dangerousgoodsinformationtypeId = this.props.match.params.id;
        const { data } = await getDangerousgoodsinformationtype(dangerousgoodsinformationtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatecontacts() {
    const { data } = await getContacttypes();
    this.setState({ contacts: data });
  }

  async populatedangerousGoodsRegulationInformations() {
    const { data } = await getDangerousgoodsregulationinformationtypes();
    this.setState({ dangerousGoodsRegulationInformations: data });
  }

  async populatedangerousGoodsDescriptions() {
    const { data } = await getDescription1000types();
    this.setState({ dangerousGoodsDescriptions: data });
  }

  async populatedangerousGoodsShippingNames() {
    const { data } = await getDescription200types();
    this.setState({ dangerousGoodsShippingNames: data });
  }

  async populatedangerousGoodsTechnicalNames() {
    const { data } = await getDescription200types();
    this.setState({ dangerousGoodsTechnicalNames: data });
  }

  async populatedangerousGoodsUNIdentifiers() {
    const { data } = await getIdentifiertypes();
    this.setState({ dangerousGoodsUNIdentifiers: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatecontacts();
    await this.populatedangerousGoodsRegulationInformations();
    await this.populatedangerousGoodsDescriptions();
    await this.populatedangerousGoodsShippingNames();
    await this.populatedangerousGoodsTechnicalNames();
    await this.populatedangerousGoodsUNIdentifiers();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/dangerousgoodsinformationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Dangerousgoodsinformationtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods U N Identifier : 
                 {this.state.data["dangerousGoodsUNIdentifier"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Shipping Name : 
                 {this.state.data["dangerousGoodsShippingName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Technical Name : 
                 {this.state.data["dangerousGoodsTechnicalName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Description : 
                 {this.state.data["dangerousGoodsDescription"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Contact : 
                 {this.state.data["contact"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Regulation Information : 
                 {this.state.data["dangerousGoodsRegulationInformation"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Contact : 
                  {this.state.contacts.map(Contacttype => 
                      this.state.data["contactId"] == Contacttype._id ? " "+ Contacttype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Regulation Information : 
                  {this.state.dangerousGoodsRegulationInformations.map(Dangerousgoodsregulationinformationtype => 
                      this.state.data["dangerousGoodsRegulationInformationId"] == Dangerousgoodsregulationinformationtype._id ? " "+ Dangerousgoodsregulationinformationtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Description : 
                  {this.state.dangerousGoodsDescriptions.map(Description1000type => 
                      this.state.data["dangerousGoodsDescriptionId"] == Description1000type._id ? " "+ Description1000type.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Shipping Name : 
                  {this.state.dangerousGoodsShippingNames.map(Description200type => 
                      this.state.data["dangerousGoodsShippingNameId"] == Description200type._id ? " "+ Description200type.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Technical Name : 
                  {this.state.dangerousGoodsTechnicalNames.map(Description200type => 
                      this.state.data["dangerousGoodsTechnicalNameId"] == Description200type._id ? " "+ Description200type.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods U N Identifier : 
                  {this.state.dangerousGoodsUNIdentifiers.map(Identifiertype => 
                      this.state.data["dangerousGoodsUNIdentifierId"] == Identifiertype._id ? " "+ Identifiertype.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default DangerousgoodsinformationtypeDetails;