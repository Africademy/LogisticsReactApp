import React, { Component } from "react";
import { getAdditionallogisticunitidentificationtype } from "../../services/additionallogisticunitidentificationtypeService";

class AdditionallogisticunitidentificationtypeDetails extends Component{

  state = {
    data: { id: "", String80Type: "", additionalLogisticUnitIdentificationTypeCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const additionallogisticunitidentificationtypeId = this.props.match.params.id;
        const { data } = await getAdditionallogisticunitidentificationtype(additionallogisticunitidentificationtypeId);
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
    this.props.history.push("/additionallogisticunitidentificationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Additionallogisticunitidentificationtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  String80 Type : 
                 {this.state.data["String80Type"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Logistic Unit Identification Type Code : 
                 {this.state.data["additionalLogisticUnitIdentificationTypeCode"]}
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

export default AdditionallogisticunitidentificationtypeDetails;