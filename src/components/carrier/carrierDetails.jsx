import React, { Component } from "react";
import { getCarrier } from "../../services/carrierService";

class CarrierDetails extends Component{

  state = {
    data: { gln: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const carrierId = this.props.match.params.id;
        const { data } = await getCarrier(carrierId);
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
    this.props.history.push("/carriers");
  };

  render() {
    return (
      <div className="content">
        <h1>Carrier Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Gln : 
                 {this.state.data["gln"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default CarrierDetails;