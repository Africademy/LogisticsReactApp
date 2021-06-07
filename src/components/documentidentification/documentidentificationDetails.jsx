import React, { Component } from "react";
import { getDocumentidentification } from "../../services/documentidentificationService";

class DocumentidentificationDetails extends Component{

  state = {
    data: { Standard: "", TypeVersion: "", InstanceIdentifier: "", Type: "", MultipleType: "", CreationDateAndTime: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const documentidentificationId = this.props.match.params.id;
        const { data } = await getDocumentidentification(documentidentificationId);
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
    this.props.history.push("/documentidentifications");
  };

  render() {
    return (
      <div className="content">
        <h1>Documentidentification Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control">  Standard : 
                 {this.state.data["Standard"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Type Version : 
                 {this.state.data["TypeVersion"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Instance Identifier : 
                 {this.state.data["InstanceIdentifier"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Type : 
                 {this.state.data["Type"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Multiple Type : 
                 {this.state.data["MultipleType"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Creation Date And Time : 
                 {this.state.data["CreationDateAndTime"].substring(0, 10)}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default DocumentidentificationDetails;