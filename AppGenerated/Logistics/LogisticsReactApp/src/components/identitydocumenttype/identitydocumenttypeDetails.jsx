import React, { Component } from "react";
import { getIdentitydocumenttype } from "../../services/identitydocumenttypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class IdentitydocumenttypeDetails extends Component{

  state = {
    data: { id: "", identityDocumentNumber: "", identityDocumentType: "", identityDocumentIssuer: "", identityDocumentTypeId: "", },
    identityDocumentTypes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const identitydocumenttypeId = this.props.match.params.id;
        const { data } = await getIdentitydocumenttype(identitydocumenttypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateidentityDocumentTypes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ identityDocumentTypes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateidentityDocumentTypes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/identitydocumenttypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Identitydocumenttype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Identity Document Number : 
                 {this.state.data["identityDocumentNumber"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Identity Document Type : 
                 {this.state.data["identityDocumentType"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Identity Document Issuer : 
                 {this.state.data["identityDocumentIssuer"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Identity Document Type : 
                  {this.state.identityDocumentTypes.map(Enumerationlibrary => 
                      this.state.data["identityDocumentTypeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default IdentitydocumenttypeDetails;