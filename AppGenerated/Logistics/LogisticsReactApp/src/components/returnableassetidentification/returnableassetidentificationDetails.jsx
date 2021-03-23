import React, { Component } from "react";
import { getReturnableassetidentification } from "../../services/returnableassetidentificationService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class ReturnableassetidentificationDetails extends Component{

  state = {
    data: { id: "", grai: "", additionalReturnableAssetIdentification: "", additionalReturnableAssetIdentificationId: "", },
    additionalReturnableAssetIdentifications: [],
    errors: {}
  };

  async populateForm() {
    try {
        const returnableassetidentificationId = this.props.match.params.id;
        const { data } = await getReturnableassetidentification(returnableassetidentificationId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateadditionalReturnableAssetIdentifications() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ additionalReturnableAssetIdentifications: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateadditionalReturnableAssetIdentifications();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/returnableassetidentifications");
  };

  render() {
    return (
      <div className="content">
        <h1>Returnableassetidentification Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Grai : 
                 {this.state.data["grai"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Returnable Asset Identification : 
                 {this.state.data["additionalReturnableAssetIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Returnable Asset Identification : 
                  {this.state.additionalReturnableAssetIdentifications.map(Enumerationlibrary => 
                      this.state.data["additionalReturnableAssetIdentificationId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default ReturnableassetidentificationDetails;