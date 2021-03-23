import React, { Component } from "react";
import { getContactinformation } from "../../services/contactinformationService";

class ContactinformationDetails extends Component{

  state = {
    data: { Contact: "", EmailAddress: "", FaxNumber: "", TelephoneNumber: "", ContactTypeIdentifier: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const contactinformationId = this.props.match.params.id;
        const { data } = await getContactinformation(contactinformationId);
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
    this.props.history.push("/contactinformations");
  };

  render() {
    return (
      <div className="content">
        <h1>Contactinformation Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control">  Contact : 
                 {this.state.data["Contact"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Email Address : 
                 {this.state.data["EmailAddress"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Fax Number : 
                 {this.state.data["FaxNumber"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Telephone Number : 
                 {this.state.data["TelephoneNumber"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Contact Type Identifier : 
                 {this.state.data["ContactTypeIdentifier"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default ContactinformationDetails;