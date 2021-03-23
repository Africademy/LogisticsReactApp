import React, { Component } from "react";
import { getTransportreference } from "../../services/transportreferenceService";

class TransportreferenceDetails extends Component{

  state = {
    data: { entityIdentification: "", creationDateTime: "", revisionNumber: "", lineItemNumber: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const transportreferenceId = this.props.match.params.id;
        const { data } = await getTransportreference(transportreferenceId);
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
    this.props.history.push("/transportreferences");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportreference Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Entity Identification : 
                 {this.state.data["entityIdentification"]}
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

export default TransportreferenceDetails;