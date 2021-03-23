import React, { Component } from "react";
import { getAdditionalpartyidentificationtype } from "../../services/additionalpartyidentificationtypeService";

class AdditionalpartyidentificationtypeDetails extends Component{

  state = {
    data: { id: "", additionalPartyIdentificationTypeCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const additionalpartyidentificationtypeId = this.props.match.params.id;
        const { data } = await getAdditionalpartyidentificationtype(additionalpartyidentificationtypeId);
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
    this.props.history.push("/additionalpartyidentificationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Additionalpartyidentificationtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Party Identification Type Code : 
                 {this.state.data["additionalPartyIdentificationTypeCode"]}
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

export default AdditionalpartyidentificationtypeDetails;