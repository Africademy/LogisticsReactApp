import React, { Component } from "react";
import { getTotaltransportnetweight } from "../../services/totaltransportnetweightService";

class TotaltransportnetweightDetails extends Component{

  state = {
    data: { measurementUnitCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const totaltransportnetweightId = this.props.match.params.id;
        const { data } = await getTotaltransportnetweight(totaltransportnetweightId);
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
    this.props.history.push("/totaltransportnetweights");
  };

  render() {
    return (
      <div className="content">
        <h1>Totaltransportnetweight Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Measurement Unit Code : 
                 {this.state.data["measurementUnitCode"]}
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

export default TotaltransportnetweightDetails;