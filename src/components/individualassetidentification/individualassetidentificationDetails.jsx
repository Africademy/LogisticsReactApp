import React, { Component } from "react";
import { getIndividualassetidentification } from "../../services/individualassetidentificationService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class IndividualassetidentificationDetails extends Component{

  state = {
    data: { id: "", giai: "", additionalIndividualAssetIdentification: "", additionalIndividualAssetIdentificationId: "", },
    additionalIndividualAssetIdentifications: [],
    errors: {}
  };

  async populateForm() {
    try {
        const individualassetidentificationId = this.props.match.params.id;
        const { data } = await getIndividualassetidentification(individualassetidentificationId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateadditionalIndividualAssetIdentifications() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ additionalIndividualAssetIdentifications: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateadditionalIndividualAssetIdentifications();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/individualassetidentifications");
  };

  render() {
    return (
      <div className="content">
        <h1>Individualassetidentification Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Giai : 
                 {this.state.data["giai"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Individual Asset Identification : 
                 {this.state.data["additionalIndividualAssetIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Individual Asset Identification : 
                  {this.state.additionalIndividualAssetIdentifications.map(Enumerationlibrary => 
                      this.state.data["additionalIndividualAssetIdentificationId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default IndividualassetidentificationDetails;