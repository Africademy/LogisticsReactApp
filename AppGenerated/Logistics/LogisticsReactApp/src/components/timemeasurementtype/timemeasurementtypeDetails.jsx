import React, { Component } from "react";
import { getTimemeasurementtype } from "../../services/timemeasurementtypeService";

class TimemeasurementtypeDetails extends Component{

  state = {
    data: { id: "", timeMeasurementUnitCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const timemeasurementtypeId = this.props.match.params.id;
        const { data } = await getTimemeasurementtype(timemeasurementtypeId);
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
    this.props.history.push("/timemeasurementtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Timemeasurementtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
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

export default TimemeasurementtypeDetails;