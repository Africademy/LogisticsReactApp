import React, { Component } from "react";
import { getCountryoforigincode } from "../../services/countryoforigincodeService";

class CountryoforigincodeDetails extends Component{

  state = {
    data: { codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const countryoforigincodeId = this.props.match.params.id;
        const { data } = await getCountryoforigincode(countryoforigincodeId);
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
    this.props.history.push("/countryoforigincodes");
  };

  render() {
    return (
      <div className="content">
        <h1>Countryoforigincode Details</h1>
        <form onSubmit={this.handleSubmit}>

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

export default CountryoforigincodeDetails;