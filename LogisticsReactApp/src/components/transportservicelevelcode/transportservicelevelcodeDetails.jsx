import React, { Component } from "react";
import { getTransportservicelevelcode } from "../../services/transportservicelevelcodeService";

class TransportservicelevelcodeDetails extends Component{

  state = {
    data: { codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const transportservicelevelcodeId = this.props.match.params.id;
        const { data } = await getTransportservicelevelcode(transportservicelevelcodeId);
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
    this.props.history.push("/transportservicelevelcodes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportservicelevelcode Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Code List Version : 
                 {this.state.data["codeListVersion"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default TransportservicelevelcodeDetails;