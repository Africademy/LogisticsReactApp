import React, { Component } from "react";
import { getAdditionalindividualassetidentification } from "../../services/additionalindividualassetidentificationService";

class AdditionalindividualassetidentificationDetails extends Component{

  state = {
    data: { additionalIndividualAssetIdentificationTypeCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const additionalindividualassetidentificationId = this.props.match.params.id;
        const { data } = await getAdditionalindividualassetidentification(additionalindividualassetidentificationId);
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
    this.props.history.push("/additionalindividualassetidentifications");
  };

  render() {
    return (
      <div className="content">
        <h1>Additionalindividualassetidentification Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Additional Individual Asset Identification Type Code : 
                 {this.state.data["additionalIndividualAssetIdentificationTypeCode"]}
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

export default AdditionalindividualassetidentificationDetails;