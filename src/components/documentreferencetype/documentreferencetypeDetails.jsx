import React, { Component } from "react";
import { getDocumentreferencetype } from "../../services/documentreferencetypeService";

class DocumentreferencetypeDetails extends Component{

  state = {
    data: { id: "", creationDateTime: "", revisionNumber: "", lineItemNumber: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const documentreferencetypeId = this.props.match.params.id;
        const { data } = await getDocumentreferencetype(documentreferencetypeId);
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
    this.props.history.push("/documentreferencetypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Documentreferencetype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Creation Date Time : 
                 {this.state.data["creationDateTime"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Revision Number : 
                 {this.state.data["revisionNumber"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Line Item Number : 
                 {this.state.data["lineItemNumber"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default DocumentreferencetypeDetails;