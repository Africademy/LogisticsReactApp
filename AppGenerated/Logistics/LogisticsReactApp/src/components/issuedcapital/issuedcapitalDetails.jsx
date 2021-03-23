import React, { Component } from "react";
import { getIssuedcapital } from "../../services/issuedcapitalService";

class IssuedcapitalDetails extends Component{

  state = {
    data: { currencyCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const issuedcapitalId = this.props.match.params.id;
        const { data } = await getIssuedcapital(issuedcapitalId);
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
    this.props.history.push("/issuedcapitals");
  };

  render() {
    return (
      <div className="content">
        <h1>Issuedcapital Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Currency Code : 
                 {this.state.data["currencyCode"]}
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

export default IssuedcapitalDetails;