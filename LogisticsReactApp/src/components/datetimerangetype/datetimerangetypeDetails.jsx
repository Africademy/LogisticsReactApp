import React, { Component } from "react";
import { getDatetimerangetype } from "../../services/datetimerangetypeService";

class DatetimerangetypeDetails extends Component{

  state = {
    data: { id: "", beginDate: "", beginTime: "", endDate: "", endTime: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const datetimerangetypeId = this.props.match.params.id;
        const { data } = await getDatetimerangetype(datetimerangetypeId);
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
    this.props.history.push("/datetimerangetypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Datetimerangetype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Begin Date : 
                 {this.state.data["beginDate"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Begin Time : 
                 {this.state.data["beginTime"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> End Date : 
                 {this.state.data["endDate"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> End Time : 
                 {this.state.data["endTime"].substring(0, 10)}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default DatetimerangetypeDetails;