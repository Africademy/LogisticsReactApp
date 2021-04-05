import React, { Component } from "react";
import { getMinimumtemperature } from "../../services/minimumtemperatureService";

class MinimumtemperatureDetails extends Component{

  state = {
    data: { temperatureMeasurementUnitCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const minimumtemperatureId = this.props.match.params.id;
        const { data } = await getMinimumtemperature(minimumtemperatureId);
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
    this.props.history.push("/minimumtemperatures");
  };

  render() {
    return (
      <div className="content">
        <h1>Minimumtemperature Details</h1>
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

export default MinimumtemperatureDetails;