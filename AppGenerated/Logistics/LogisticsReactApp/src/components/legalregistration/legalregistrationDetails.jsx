import React, { Component } from "react";
import { getLegalregistration } from "../../services/legalregistrationService";

class LegalregistrationDetails extends Component{

  state = {
    data: { legalRegistrationNumber: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const legalregistrationId = this.props.match.params.id;
        const { data } = await getLegalregistration(legalregistrationId);
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
    this.props.history.push("/legalregistrations");
  };

  render() {
    return (
      <div className="content">
        <h1>Legalregistration Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Legal Registration Number : 
                 {this.state.data["legalRegistrationNumber"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default LegalregistrationDetails;