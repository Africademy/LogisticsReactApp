import React, { Component } from "react";
import { getIncludedtransportequipment } from "../../services/includedtransportequipmentService";

class IncludedtransportequipmentDetails extends Component{

  state = {
    data: { numberOfPiecesOfEquipment: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const includedtransportequipmentId = this.props.match.params.id;
        const { data } = await getIncludedtransportequipment(includedtransportequipmentId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async componentDidMount() {
    await this.populateForm();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/includedtransportequipments");
  };

  render() {
    return (
      <div className="content">
        <h1>Includedtransportequipment Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Number Of Pieces Of Equipment : 
                 {this.state.data["numberOfPiecesOfEquipment"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default IncludedtransportequipmentDetails;