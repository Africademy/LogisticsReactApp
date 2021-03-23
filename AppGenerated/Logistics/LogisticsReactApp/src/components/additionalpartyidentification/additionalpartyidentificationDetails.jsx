import React, { Component } from "react";
import { getAdditionalpartyidentification } from "../../services/additionalpartyidentificationService";

class AdditionalpartyidentificationDetails extends Component{

  state = {
    data: { additionalPartyIdentificationTypeCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const additionalpartyidentificationId = this.props.match.params.id;
        const { data } = await getAdditionalpartyidentification(additionalpartyidentificationId);
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
    this.props.history.push("/additionalpartyidentifications");
  };

  render() {
    return (
      <div className="content">
        <h1>Additionalpartyidentification Details</h1>
        <form onSubmit={this.handleSubmit}>

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

export default AdditionalpartyidentificationDetails;