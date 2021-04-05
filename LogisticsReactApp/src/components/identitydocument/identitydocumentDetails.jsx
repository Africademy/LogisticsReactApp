import React, { Component } from "react";
import { getIdentitydocument } from "../../services/identitydocumentService";

class IdentitydocumentDetails extends Component{

  state = {
    data: { identityDocumentNumber: "", identityDocumentIssuer: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const identitydocumentId = this.props.match.params.id;
        const { data } = await getIdentitydocument(identitydocumentId);
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
    this.props.history.push("/identitydocuments");
  };

  render() {
    return (
      <div className="content">
        <h1>Identitydocument Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Identity Document Number : 
                 {this.state.data["identityDocumentNumber"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Identity Document Issuer : 
                 {this.state.data["identityDocumentIssuer"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default IdentitydocumentDetails;