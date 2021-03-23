import React, { Component } from "react";
import { getUnitmeasurementtype } from "../../services/unitmeasurementtypeService";
import { getMeasurementtypes } from "../../services/measurementtypeService";

class UnitmeasurementtypeDetails extends Component{

  state = {
    data: { id: "", measurementType: "", measurementValue: "", measurementValueId: "", },
    measurementValues: [],
    errors: {}
  };

  async populateForm() {
    try {
        const unitmeasurementtypeId = this.props.match.params.id;
        const { data } = await getUnitmeasurementtype(unitmeasurementtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatemeasurementValues() {
    const { data } = await getMeasurementtypes();
    this.setState({ measurementValues: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatemeasurementValues();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/unitmeasurementtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Unitmeasurementtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Measurement Type : 
                 {this.state.data["measurementType"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Measurement Value : 
                 {this.state.data["measurementValue"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Measurement Value : 
                  {this.state.measurementValues.map(Measurementtype => 
                      this.state.data["measurementValueId"] == Measurementtype._id ? " "+ Measurementtype.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default UnitmeasurementtypeDetails;