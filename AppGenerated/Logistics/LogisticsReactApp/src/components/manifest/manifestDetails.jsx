import React, { Component } from "react";
import { getManifest } from "../../services/manifestService";

class ManifestDetails extends Component{

  state = {
    data: { NumberOfItems: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const manifestId = this.props.match.params.id;
        const { data } = await getManifest(manifestId);
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
    this.props.history.push("/manifests");
  };

  render() {
    return (
      <div className="content">
        <h1>Manifest Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control">  Number Of Items : 
                 {this.state.data["NumberOfItems"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default ManifestDetails;