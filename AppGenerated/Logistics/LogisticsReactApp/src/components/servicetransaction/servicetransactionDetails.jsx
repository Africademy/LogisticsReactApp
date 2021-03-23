import React, { Component } from "react";
import { getServicetransaction } from "../../services/servicetransactionService";

class ServicetransactionDetails extends Component{

  state = {
    data: { TypeOfServiceTransaction: "", IsNonRepudiationRequired: "", IsAuthenticationRequired: "", IsNonRepudiationOfReceiptRequired: "", IsIntegrityCheckRequired: "", IsApplicationErrorResponseRequested: "", TimeToAcknowledgeReceipt: "", TimeToAcknowledgeAcceptance: "", TimeToPerform: "", Recurrence: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const servicetransactionId = this.props.match.params.id;
        const { data } = await getServicetransaction(servicetransactionId);
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
    this.props.history.push("/servicetransactions");
  };

  render() {
    return (
      <div className="content">
        <h1>Servicetransaction Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control">  Type Of Service Transaction : 
                 {this.state.data["TypeOfServiceTransaction"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Is Non Repudiation Required : 
                 {this.state.data["IsNonRepudiationRequired"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Is Authentication Required : 
                 {this.state.data["IsAuthenticationRequired"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Is Non Repudiation Of Receipt Required : 
                 {this.state.data["IsNonRepudiationOfReceiptRequired"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Is Integrity Check Required : 
                 {this.state.data["IsIntegrityCheckRequired"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Is Application Error Response Requested : 
                 {this.state.data["IsApplicationErrorResponseRequested"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Time To Acknowledge Receipt : 
                 {this.state.data["TimeToAcknowledgeReceipt"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Time To Acknowledge Acceptance : 
                 {this.state.data["TimeToAcknowledgeAcceptance"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Time To Perform : 
                 {this.state.data["TimeToPerform"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Recurrence : 
                 {this.state.data["Recurrence"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default ServicetransactionDetails;