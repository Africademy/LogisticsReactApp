import React, { Component } from "react";
import { getLogisticunitidentificationtype } from "../../services/logisticunitidentificationtypeService";
import { getAdditionallogisticunitidentificationtypes } from "../../services/additionallogisticunitidentificationtypeService";

class LogisticunitidentificationtypeDetails extends Component{

  state = {
    data: { id: "", sscc: "", additionalLogisticUnitIdentification: "", additionalLogisticUnitIdentificationId: "", },
    additionalLogisticUnitIdentifications: [],
    errors: {}
  };

  async populateForm() {
    try {
        const logisticunitidentificationtypeId = this.props.match.params.id;
        const { data } = await getLogisticunitidentificationtype(logisticunitidentificationtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateadditionalLogisticUnitIdentifications() {
    const { data } = await getAdditionallogisticunitidentificationtypes();
    this.setState({ additionalLogisticUnitIdentifications: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateadditionalLogisticUnitIdentifications();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/logisticunitidentificationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Logisticunitidentificationtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Sscc : 
                 {this.state.data["sscc"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Logistic Unit Identification : 
                 {this.state.data["additionalLogisticUnitIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Logistic Unit Identification : 
                  {this.state.additionalLogisticUnitIdentifications.map(Additionallogisticunitidentificationtype => 
                      this.state.data["additionalLogisticUnitIdentificationId"] == Additionallogisticunitidentificationtype._id ? " "+ Additionallogisticunitidentificationtype.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default LogisticunitidentificationtypeDetails;