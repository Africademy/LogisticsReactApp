import React, { Component } from "react";
import { getLogisticeventperiod } from "../../services/logisticeventperiodService";

class LogisticeventperiodDetails extends Component{

  state = {
    data: { beginDate: "", beginTime: "", endDate: "", endTime: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const logisticeventperiodId = this.props.match.params.id;
        const { data } = await getLogisticeventperiod(logisticeventperiodId);
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
    this.props.history.push("/logisticeventperiods");
  };

  render() {
    return (
      <div className="content">
        <h1>Logisticeventperiod Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Begin Date : 
                 {this.state.data["beginDate"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Begin Time : 
                 {this.state.data["beginTime"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> End Date : 
                 {this.state.data["endDate"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> End Time : 
                 {this.state.data["endTime"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default LogisticeventperiodDetails;