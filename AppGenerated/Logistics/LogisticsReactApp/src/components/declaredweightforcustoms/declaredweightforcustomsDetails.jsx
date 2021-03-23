import React, { Component } from "react";
import { getDeclaredweightforcustoms } from "../../services/declaredweightforcustomsService";

class DeclaredweightforcustomsDetails extends Component{

  state = {
    data: { measurementUnitCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const declaredweightforcustomsId = this.props.match.params.id;
        const { data } = await getDeclaredweightforcustoms(declaredweightforcustomsId);
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
    this.props.history.push("/declaredweightforcustomss");
  };

  render() {
    return (
      <div className="content">
        <h1>Declaredweightforcustoms Details</h1>
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

export default DeclaredweightforcustomsDetails;