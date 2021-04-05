import React, { Component } from "react";
import { getSpecialdatename } from "../../services/specialdatenameService";

class SpecialdatenameDetails extends Component{

  state = {
    data: { languageCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const specialdatenameId = this.props.match.params.id;
        const { data } = await getSpecialdatename(specialdatenameId);
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
    this.props.history.push("/specialdatenames");
  };

  render() {
    return (
      <div className="content">
        <h1>Specialdatename Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Language Code : 
                 {this.state.data["languageCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Code List Version : 
                 {this.state.data["codeListVersion"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default SpecialdatenameDetails;