import React, { Component } from "react";
import { getAdditionalconsignmentidentificationtype } from "../../services/additionalconsignmentidentificationtypeService";

class AdditionalconsignmentidentificationtypeDetails extends Component{

  state = {
    data: { id: "", String80Type: "", additionalConsignmentIdentificationTypeCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const additionalconsignmentidentificationtypeId = this.props.match.params.id;
        const { data } = await getAdditionalconsignmentidentificationtype(additionalconsignmentidentificationtypeId);
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
    this.props.history.push("/additionalconsignmentidentificationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Additionalconsignmentidentificationtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  String80 Type : 
                 {this.state.data["String80Type"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Consignment Identification Type Code : 
                 {this.state.data["additionalConsignmentIdentificationTypeCode"]}
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

export default AdditionalconsignmentidentificationtypeDetails;