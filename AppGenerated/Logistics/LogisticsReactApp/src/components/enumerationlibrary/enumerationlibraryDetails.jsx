import React, { Component } from "react";
import { getEnumerationlibrary } from "../../services/enumerationlibraryService";

class EnumerationlibraryDetails extends Component{

  state = {
    data: { id: "", semanticResourceURN: "", CodeValue: "", resourceSubTypeCode: "", CodeList: "", Domain: "", ExternalLink: "", codeName: "", Definition: "", changeLog: "", Status: "", Version: "", ChangeDate: "", changeLogComment: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const enumerationlibraryId = this.props.match.params.id;
        const { data } = await getEnumerationlibrary(enumerationlibraryId);
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
    this.props.history.push("/enumerationlibrarys");
  };

  render() {
    return (
      <div className="content">
        <h1>Enumerationlibrary Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Semantic Resource U R N : 
                 {this.state.data["semanticResourceURN"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Code Value : 
                 {this.state.data["CodeValue"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Resource Sub Type Code : 
                 {this.state.data["resourceSubTypeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Code List : 
                 {this.state.data["CodeList"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Domain : 
                 {this.state.data["Domain"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  External Link : 
                 {this.state.data["ExternalLink"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Code Name : 
                 {this.state.data["codeName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Definition : 
                 {this.state.data["Definition"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Change Log : 
                 {this.state.data["changeLog"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Status : 
                 {this.state.data["Status"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Version : 
                 {this.state.data["Version"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Change Date : 
                 {this.state.data["ChangeDate"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Change Log Comment : 
                 {this.state.data["changeLogComment"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default EnumerationlibraryDetails;