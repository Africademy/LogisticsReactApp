import React, { Component } from "react";
import { getCodetype } from "../../services/codetypeService";

class CodetypeDetails extends Component{

  state = {
    data: { id: "", String80Type: "", codeDescription: "", codeListAgencyCode: "", codeListAgencyCodeListVersion: "", codeListAgencyName: "", codeListName: "", codeListURI: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const codetypeId = this.props.match.params.id;
        const { data } = await getCodetype(codetypeId);
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
    this.props.history.push("/codetypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Codetype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  String80 Type : 
                 {this.state.data["String80Type"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Code Description : 
                 {this.state.data["codeDescription"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Code List Agency Code : 
                 {this.state.data["codeListAgencyCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Code List Agency Code List Version : 
                 {this.state.data["codeListAgencyCodeListVersion"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Code List Agency Name : 
                 {this.state.data["codeListAgencyName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Code List Name : 
                 {this.state.data["codeListName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Code List U R I : 
                 {this.state.data["codeListURI"]}
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

export default CodetypeDetails;