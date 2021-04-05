import React, { Component } from "react";
import { getMaximumtemperature } from "../../services/maximumtemperatureService";

class MaximumtemperatureDetails extends Component{

  state = {
    data: { temperatureMeasurementUnitCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const maximumtemperatureId = this.props.match.params.id;
        const { data } = await getMaximumtemperature(maximumtemperatureId);
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
    this.props.history.push("/maximumtemperatures");
  };

  render() {
    return (
      <div className="content">
        <h1>Maximumtemperature Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Temperature Measurement Unit Code : 
                 {this.state.data["temperatureMeasurementUnitCode"]}
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

export default MaximumtemperatureDetails;