import React, { Component } from "react";
import { getDocumenteffectivedate } from "../../services/documenteffectivedateService";

class DocumenteffectivedateDetails extends Component{

  state = {
    data: { date: "", time: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const documenteffectivedateId = this.props.match.params.id;
        const { data } = await getDocumenteffectivedate(documenteffectivedateId);
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
    this.props.history.push("/documenteffectivedates");
  };

  render() {
    return (
      <div className="content">
        <h1>Documenteffectivedate Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Date : 
                 {this.state.data["date"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Time : 
                 {this.state.data["time"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default DocumenteffectivedateDetails;