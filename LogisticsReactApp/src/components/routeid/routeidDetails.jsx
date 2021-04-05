import React, { Component } from "react";
import { getRouteid } from "../../services/routeidService";

class RouteidDetails extends Component{

  state = {
    data: { identificationSchemeAgencyCode: "", identificationSchemeAgencyCodeCodeListVersion: "", identificationSchemeAgencyName: "", identificationSchemeName: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const routeidId = this.props.match.params.id;
        const { data } = await getRouteid(routeidId);
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
    this.props.history.push("/routeids");
  };

  render() {
    return (
      <div className="content">
        <h1>Routeid Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Identification Scheme Agency Code : 
                 {this.state.data["identificationSchemeAgencyCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Identification Scheme Agency Code Code List Version : 
                 {this.state.data["identificationSchemeAgencyCodeCodeListVersion"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Identification Scheme Agency Name : 
                 {this.state.data["identificationSchemeAgencyName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Identification Scheme Name : 
                 {this.state.data["identificationSchemeName"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default RouteidDetails;