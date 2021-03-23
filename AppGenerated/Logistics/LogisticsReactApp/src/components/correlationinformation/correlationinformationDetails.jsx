import React, { Component } from "react";
import { getCorrelationinformation } from "../../services/correlationinformationService";

class CorrelationinformationDetails extends Component{

  state = {
    data: { RequestingDocumentCreationDateTime: "", RequestingDocumentInstanceIdentifier: "", ExpectedResponseDateTime: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const correlationinformationId = this.props.match.params.id;
        const { data } = await getCorrelationinformation(correlationinformationId);
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
    this.props.history.push("/correlationinformations");
  };

  render() {
    return (
      <div className="content">
        <h1>Correlationinformation Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control">  Requesting Document Creation Date Time : 
                 {this.state.data["RequestingDocumentCreationDateTime"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Requesting Document Instance Identifier : 
                 {this.state.data["RequestingDocumentInstanceIdentifier"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Expected Response Date Time : 
                 {this.state.data["ExpectedResponseDateTime"].substring(0, 10)}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default CorrelationinformationDetails;