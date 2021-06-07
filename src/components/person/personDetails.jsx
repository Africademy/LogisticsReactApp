import React, { Component } from "react";
import { getPerson } from "../../services/personService";
import { getIdentitydocumenttypes } from "../../services/identitydocumenttypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class PersonDetails extends Component{

  state = {
    data: { id: "", personName: "", dateOfBirth: "", gender: "", nationality: "", identityDocument: "", identityDocumentId: "", genderId: "", nationalityId: "", },
    identityDocuments: [],
    genders: [],
    nationalitys: [],
    errors: {}
  };

  async populateForm() {
    try {
        const personId = this.props.match.params.id;
        const { data } = await getPerson(personId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateidentityDocuments() {
    const { data } = await getIdentitydocumenttypes();
    this.setState({ identityDocuments: data });
  }

  async populategenders() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ genders: data });
  }

  async populatenationalitys() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ nationalitys: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateidentityDocuments();
    await this.populategenders();
    await this.populatenationalitys();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/persons");
  };

  render() {
    return (
      <div className="content">
        <h1>Person Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Person Name : 
                 {this.state.data["personName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Date Of Birth : 
                 {this.state.data["dateOfBirth"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Gender : 
                 {this.state.data["gender"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Nationality : 
                 {this.state.data["nationality"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Identity Document : 
                 {this.state.data["identityDocument"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Identity Document : 
                  {this.state.identityDocuments.map(Identitydocumenttype => 
                      this.state.data["identityDocumentId"] == Identitydocumenttype._id ? " "+ Identitydocumenttype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Gender : 
                  {this.state.genders.map(Enumerationlibrary => 
                      this.state.data["genderId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Nationality : 
                  {this.state.nationalitys.map(Enumerationlibrary => 
                      this.state.data["nationalityId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default PersonDetails;