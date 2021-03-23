import React, { Component } from "react";
import { getEntityidentificationtype } from "../../services/entityidentificationtypeService";
import { getPartyidentificationtypes } from "../../services/partyidentificationtypeService";

class EntityidentificationtypeDetails extends Component{

  state = {
    data: { id: "", entityIdentification: "", contentOwner: "", contentOwnerId: "", },
    contentOwners: [],
    errors: {}
  };

  async populateForm() {
    try {
        const entityidentificationtypeId = this.props.match.params.id;
        const { data } = await getEntityidentificationtype(entityidentificationtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatecontentOwners() {
    const { data } = await getPartyidentificationtypes();
    this.setState({ contentOwners: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatecontentOwners();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/entityidentificationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Entityidentificationtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Entity Identification : 
                 {this.state.data["entityIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Content Owner : 
                 {this.state.data["contentOwner"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Content Owner : 
                  {this.state.contentOwners.map(Partyidentificationtype => 
                      this.state.data["contentOwnerId"] == Partyidentificationtype._id ? " "+ Partyidentificationtype.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default EntityidentificationtypeDetails;