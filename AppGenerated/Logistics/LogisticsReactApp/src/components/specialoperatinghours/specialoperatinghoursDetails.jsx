import React, { Component } from "react";
import { getSpecialoperatinghours } from "../../services/specialoperatinghoursService";

class SpecialoperatinghoursDetails extends Component{

  state = {
    data: { isOperational: "", specialDate: "", closingTime: "", openingTime: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const specialoperatinghoursId = this.props.match.params.id;
        const { data } = await getSpecialoperatinghours(specialoperatinghoursId);
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
    this.props.history.push("/specialoperatinghourss");
  };

  render() {
    return (
      <div className="content">
        <h1>Specialoperatinghours Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Is Operational : 
                 {this.state.data["isOperational"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Special Date : 
                 {this.state.data["specialDate"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Closing Time : 
                 {this.state.data["closingTime"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Opening Time : 
                 {this.state.data["openingTime"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default SpecialoperatinghoursDetails;