import React, { Component } from "react";
import { getAdditionalreturnableassetidentification } from "../../services/additionalreturnableassetidentificationService";

class AdditionalreturnableassetidentificationDetails extends Component{

  state = {
    data: { additionalReturnableAssetIdentificationTypeCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const additionalreturnableassetidentificationId = this.props.match.params.id;
        const { data } = await getAdditionalreturnableassetidentification(additionalreturnableassetidentificationId);
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
    this.props.history.push("/additionalreturnableassetidentifications");
  };

  render() {
    return (
      <div className="content">
        <h1>Additionalreturnableassetidentification Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Additional Returnable Asset Identification Type Code : 
                 {this.state.data["additionalReturnableAssetIdentificationTypeCode"]}
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

export default AdditionalreturnableassetidentificationDetails;