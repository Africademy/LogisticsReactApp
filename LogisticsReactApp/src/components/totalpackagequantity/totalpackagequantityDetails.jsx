import React, { Component } from "react";
import { getTotalpackagequantity } from "../../services/totalpackagequantityService";

class TotalpackagequantityDetails extends Component{

  state = {
    data: { measurementUnitCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const totalpackagequantityId = this.props.match.params.id;
        const { data } = await getTotalpackagequantity(totalpackagequantityId);
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
    this.props.history.push("/totalpackagequantitys");
  };

  render() {
    return (
      <div className="content">
        <h1>Totalpackagequantity Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Measurement Unit Code : 
                 {this.state.data["measurementUnitCode"]}
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

export default TotalpackagequantityDetails;