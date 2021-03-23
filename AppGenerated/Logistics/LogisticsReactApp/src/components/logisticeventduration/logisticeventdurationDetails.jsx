import React, { Component } from "react";
import { getLogisticeventduration } from "../../services/logisticeventdurationService";

class LogisticeventdurationDetails extends Component{

  state = {
    data: { timeMeasurementUnitCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const logisticeventdurationId = this.props.match.params.id;
        const { data } = await getLogisticeventduration(logisticeventdurationId);
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
    this.props.history.push("/logisticeventdurations");
  };

  render() {
    return (
      <div className="content">
        <h1>Logisticeventduration Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Time Measurement Unit Code : 
                 {this.state.data["timeMeasurementUnitCode"]}
              </label>
          </div>
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

export default LogisticeventdurationDetails;