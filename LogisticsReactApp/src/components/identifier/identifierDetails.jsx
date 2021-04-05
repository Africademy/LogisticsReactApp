import React, { Component } from "react";
import { getIdentifier } from "../../services/identifierService";

class IdentifierDetails extends Component{

  state = {
    data: { Authority: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const identifierId = this.props.match.params.id;
        const { data } = await getIdentifier(identifierId);
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
    this.props.history.push("/identifiers");
  };

  render() {
    return (
      <div className="content">
        <h1>Identifier Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control">  Authority : 
                 {this.state.data["Authority"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default IdentifierDetails;