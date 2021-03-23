import React, { Component } from "react";
import { getDateoptionaltimetype } from "../../services/dateoptionaltimetypeService";

class DateoptionaltimetypeDetails extends Component{

  state = {
    data: { id: "", date: "", time: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const dateoptionaltimetypeId = this.props.match.params.id;
        const { data } = await getDateoptionaltimetype(dateoptionaltimetypeId);
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
    this.props.history.push("/dateoptionaltimetypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Dateoptionaltimetype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Date : 
                 {this.state.data["date"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Time : 
                 {this.state.data["time"].substring(0, 10)}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default DateoptionaltimetypeDetails;