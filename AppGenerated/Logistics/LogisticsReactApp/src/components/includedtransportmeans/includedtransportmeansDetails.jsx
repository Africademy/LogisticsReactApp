import React, { Component } from "react";
import { getIncludedtransportmeans } from "../../services/includedtransportmeansService";

class IncludedtransportmeansDetails extends Component{

  state = {
    data: { transportMeansName: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const includedtransportmeansId = this.props.match.params.id;
        const { data } = await getIncludedtransportmeans(includedtransportmeansId);
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
    this.props.history.push("/includedtransportmeanss");
  };

  render() {
    return (
      <div className="content">
        <h1>Includedtransportmeans Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Transport Means Name : 
                 {this.state.data["transportMeansName"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default IncludedtransportmeansDetails;