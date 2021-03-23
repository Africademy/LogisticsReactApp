import React, { Component } from "react";
import { getDutyfeetaxregistration } from "../../services/dutyfeetaxregistrationService";

class DutyfeetaxregistrationDetails extends Component{

  state = {
    data: { dutyFeeTaxAgencyName: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const dutyfeetaxregistrationId = this.props.match.params.id;
        const { data } = await getDutyfeetaxregistration(dutyfeetaxregistrationId);
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
    this.props.history.push("/dutyfeetaxregistrations");
  };

  render() {
    return (
      <div className="content">
        <h1>Dutyfeetaxregistration Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Duty Fee Tax Agency Name : 
                 {this.state.data["dutyFeeTaxAgencyName"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default DutyfeetaxregistrationDetails;