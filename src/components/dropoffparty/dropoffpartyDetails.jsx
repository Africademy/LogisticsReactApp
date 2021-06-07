import React, { Component } from "react";
import { getDropoffparty } from "../../services/dropoffpartyService";

class DropoffpartyDetails extends Component{

  state = {
    data: { gln: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const dropoffpartyId = this.props.match.params.id;
        const { data } = await getDropoffparty(dropoffpartyId);
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
    this.props.history.push("/dropoffpartys");
  };

  render() {
    return (
      <div className="content">
        <h1>Dropoffparty Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Gln : 
                 {this.state.data["gln"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default DropoffpartyDetails;