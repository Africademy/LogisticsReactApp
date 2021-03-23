import React, { Component } from "react";
import { getSpecialoperatinghourstype } from "../../services/specialoperatinghourstypeService";
import { getDescription80types } from "../../services/description80typeService";

class SpecialoperatinghourstypeDetails extends Component{

  state = {
    data: { id: "", isOperational: "", specialDate: "", closingTime: "", openingTime: "", specialDateName: "", specialDateNameId: "", },
    specialDateNames: [],
    errors: {}
  };

  async populateForm() {
    try {
        const specialoperatinghourstypeId = this.props.match.params.id;
        const { data } = await getSpecialoperatinghourstype(specialoperatinghourstypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatespecialDateNames() {
    const { data } = await getDescription80types();
    this.setState({ specialDateNames: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatespecialDateNames();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/specialoperatinghourstypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Specialoperatinghourstype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Is Operational : 
                 {this.state.data["isOperational"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Special Date : 
                 {this.state.data["specialDate"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Closing Time : 
                 {this.state.data["closingTime"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Opening Time : 
                 {this.state.data["openingTime"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Special Date Name : 
                 {this.state.data["specialDateName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Special Date Name : 
                  {this.state.specialDateNames.map(Description80type => 
                      this.state.data["specialDateNameId"] == Description80type._id ? " "+ Description80type.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default SpecialoperatinghourstypeDetails;