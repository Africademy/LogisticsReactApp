import React, { Component } from "react";
import { getManifestitem } from "../../services/manifestitemService";

class ManifestitemDetails extends Component{

  state = {
    data: { MimeTypeQualifierCode: "", UniformResourceIdentifier: "", Description: "", LanguageCode: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const manifestitemId = this.props.match.params.id;
        const { data } = await getManifestitem(manifestitemId);
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
    this.props.history.push("/manifestitems");
  };

  render() {
    return (
      <div className="content">
        <h1>Manifestitem Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control">  Mime Type Qualifier Code : 
                 {this.state.data["MimeTypeQualifierCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Uniform Resource Identifier : 
                 {this.state.data["UniformResourceIdentifier"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Description : 
                 {this.state.data["Description"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Language Code : 
                 {this.state.data["LanguageCode"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default ManifestitemDetails;