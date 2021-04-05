import React, { Component } from "react";
import { getConsignmentidentificationtype } from "../../services/consignmentidentificationtypeService";
import { getAdditionalconsignmentidentificationtypes } from "../../services/additionalconsignmentidentificationtypeService";

class ConsignmentidentificationtypeDetails extends Component{

  state = {
    data: { id: "", ginc: "", additionalConsignmentIdentification: "", additionalConsignmentIdentificationId: "", },
    additionalConsignmentIdentifications: [],
    errors: {}
  };

  async populateForm() {
    try {
        const consignmentidentificationtypeId = this.props.match.params.id;
        const { data } = await getConsignmentidentificationtype(consignmentidentificationtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateadditionalConsignmentIdentifications() {
    const { data } = await getAdditionalconsignmentidentificationtypes();
    this.setState({ additionalConsignmentIdentifications: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateadditionalConsignmentIdentifications();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/consignmentidentificationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Consignmentidentificationtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Ginc : 
                 {this.state.data["ginc"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Consignment Identification : 
                 {this.state.data["additionalConsignmentIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Consignment Identification : 
                  {this.state.additionalConsignmentIdentifications.map(Additionalconsignmentidentificationtype => 
                      this.state.data["additionalConsignmentIdentificationId"] == Additionalconsignmentidentificationtype._id ? " "+ Additionalconsignmentidentificationtype.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default ConsignmentidentificationtypeDetails;