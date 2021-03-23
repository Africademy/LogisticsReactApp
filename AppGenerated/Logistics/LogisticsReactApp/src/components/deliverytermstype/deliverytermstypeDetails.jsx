import React, { Component } from "react";
import { getDeliverytermstype } from "../../services/deliverytermstypeService";
import { getCodetypes } from "../../services/codetypeService";
import { getDescription500types } from "../../services/description500typeService";
import { getLogisticlocationtypes } from "../../services/logisticlocationtypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class DeliverytermstypeDetails extends Component{

  state = {
    data: { id: "", incotermsCode: "", alternateDeliveryTermsCode: "", deliveryInstructions: "", deliveryTermsLocation: "", alternateDeliveryTermsCodeId: "", deliveryInstructionsId: "", deliveryTermsLocationId: "", incotermsCodeId: "", },
    alternateDeliveryTermsCodes: [],
    deliveryInstructionss: [],
    deliveryTermsLocations: [],
    incotermsCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const deliverytermstypeId = this.props.match.params.id;
        const { data } = await getDeliverytermstype(deliverytermstypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatealternateDeliveryTermsCodes() {
    const { data } = await getCodetypes();
    this.setState({ alternateDeliveryTermsCodes: data });
  }

  async populatedeliveryInstructionss() {
    const { data } = await getDescription500types();
    this.setState({ deliveryInstructionss: data });
  }

  async populatedeliveryTermsLocations() {
    const { data } = await getLogisticlocationtypes();
    this.setState({ deliveryTermsLocations: data });
  }

  async populateincotermsCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ incotermsCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatealternateDeliveryTermsCodes();
    await this.populatedeliveryInstructionss();
    await this.populatedeliveryTermsLocations();
    await this.populateincotermsCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/deliverytermstypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Deliverytermstype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Incoterms Code : 
                 {this.state.data["incotermsCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Alternate Delivery Terms Code : 
                 {this.state.data["alternateDeliveryTermsCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Delivery Instructions : 
                 {this.state.data["deliveryInstructions"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Delivery Terms Location : 
                 {this.state.data["deliveryTermsLocation"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Alternate Delivery Terms Code : 
                  {this.state.alternateDeliveryTermsCodes.map(Codetype => 
                      this.state.data["alternateDeliveryTermsCodeId"] == Codetype._id ? " "+ Codetype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Delivery Instructions : 
                  {this.state.deliveryInstructionss.map(Description500type => 
                      this.state.data["deliveryInstructionsId"] == Description500type._id ? " "+ Description500type.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Delivery Terms Location : 
                  {this.state.deliveryTermsLocations.map(Logisticlocationtype => 
                      this.state.data["deliveryTermsLocationId"] == Logisticlocationtype._id ? " "+ Logisticlocationtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Incoterms Code : 
                  {this.state.incotermsCodes.map(Enumerationlibrary => 
                      this.state.data["incotermsCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default DeliverytermstypeDetails;