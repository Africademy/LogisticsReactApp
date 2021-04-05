import React, { Component } from "react";
import { getOrganisationdetails } from "../../services/organisationdetailsService";

class OrganisationdetailsDetails extends Component{

  state = {
    data: { organisationName: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const organisationdetailsId = this.props.match.params.id;
        const { data } = await getOrganisationdetails(organisationdetailsId);
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
    this.props.history.push("/organisationdetailss");
  };

  render() {
    return (
      <div className="content">
        <h1>Organisationdetails Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Organisation Name : 
                 {this.state.data["organisationName"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default OrganisationdetailsDetails;