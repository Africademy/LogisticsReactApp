import React, { Component } from "react";
import { getPartyidentificationtype } from "../../services/partyidentificationtypeService";
import { getAdditionalpartyidentificationtypes } from "../../services/additionalpartyidentificationtypeService";

class PartyidentificationtypeDetails extends Component{

  state = {
    data: { id: "", gln: "", additionalPartyIdentification: "", additionalPartyIdentificationId: "", },
    additionalPartyIdentifications: [],
    errors: {}
  };

  async populateForm() {
    try {
        const partyidentificationtypeId = this.props.match.params.id;
        const { data } = await getPartyidentificationtype(partyidentificationtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateadditionalPartyIdentifications() {
    const { data } = await getAdditionalpartyidentificationtypes();
    this.setState({ additionalPartyIdentifications: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateadditionalPartyIdentifications();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/partyidentificationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Partyidentificationtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Gln : 
                 {this.state.data["gln"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Party Identification : 
                 {this.state.data["additionalPartyIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Party Identification : 
                  {this.state.additionalPartyIdentifications.map(Additionalpartyidentificationtype => 
                      this.state.data["additionalPartyIdentificationId"] == Additionalpartyidentificationtype._id ? " "+ Additionalpartyidentificationtype.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default PartyidentificationtypeDetails;