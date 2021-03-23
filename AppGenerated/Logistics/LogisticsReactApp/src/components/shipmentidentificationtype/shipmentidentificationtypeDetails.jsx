import React, { Component } from "react";
import { getShipmentidentificationtype } from "../../services/shipmentidentificationtypeService";
import { getAdditionalshipmentidentificationtypes } from "../../services/additionalshipmentidentificationtypeService";

class ShipmentidentificationtypeDetails extends Component{

  state = {
    data: { id: "", gsin: "", additionalShipmentIdentification: "", additionalShipmentIdentificationId: "", },
    additionalShipmentIdentifications: [],
    errors: {}
  };

  async populateForm() {
    try {
        const shipmentidentificationtypeId = this.props.match.params.id;
        const { data } = await getShipmentidentificationtype(shipmentidentificationtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateadditionalShipmentIdentifications() {
    const { data } = await getAdditionalshipmentidentificationtypes();
    this.setState({ additionalShipmentIdentifications: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateadditionalShipmentIdentifications();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/shipmentidentificationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Shipmentidentificationtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Gsin : 
                 {this.state.data["gsin"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Shipment Identification : 
                 {this.state.data["additionalShipmentIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Shipment Identification : 
                  {this.state.additionalShipmentIdentifications.map(Additionalshipmentidentificationtype => 
                      this.state.data["additionalShipmentIdentificationId"] == Additionalshipmentidentificationtype._id ? " "+ Additionalshipmentidentificationtype.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default ShipmentidentificationtypeDetails;