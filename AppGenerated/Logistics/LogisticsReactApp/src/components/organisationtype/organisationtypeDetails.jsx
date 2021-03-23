import React, { Component } from "react";
import { getOrganisationtype } from "../../services/organisationtypeService";
import { getAmounttypes } from "../../services/amounttypeService";

class OrganisationtypeDetails extends Component{

  state = {
    data: { id: "", organisationName: "", issuedCapital: "", issuedCapitalId: "", },
    issuedCapitals: [],
    errors: {}
  };

  async populateForm() {
    try {
        const organisationtypeId = this.props.match.params.id;
        const { data } = await getOrganisationtype(organisationtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateissuedCapitals() {
    const { data } = await getAmounttypes();
    this.setState({ issuedCapitals: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateissuedCapitals();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/organisationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Organisationtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Organisation Name : 
                 {this.state.data["organisationName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Issued Capital : 
                 {this.state.data["issuedCapital"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Issued Capital : 
                  {this.state.issuedCapitals.map(Amounttype => 
                      this.state.data["issuedCapitalId"] == Amounttype._id ? " "+ Amounttype.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default OrganisationtypeDetails;