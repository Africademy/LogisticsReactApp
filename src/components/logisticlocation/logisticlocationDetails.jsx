import React, { Component } from "react";
import { getLogisticlocation } from "../../services/logisticlocationService";

class LogisticlocationDetails extends Component{

  state = {
    data: { gln: "", sublocationIdentification: "", locationName: "", utcOffset: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const logisticlocationId = this.props.match.params.id;
        const { data } = await getLogisticlocation(logisticlocationId);
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
    this.props.history.push("/logisticlocations");
  };

  render() {
    return (
      <div className="content">
        <h1>Logisticlocation Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Gln : 
                 {this.state.data["gln"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Sublocation Identification : 
                 {this.state.data["sublocationIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Location Name : 
                 {this.state.data["locationName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Utc Offset : 
                 {this.state.data["utcOffset"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default LogisticlocationDetails;