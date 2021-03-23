import React, { Component } from "react";
import { getLogisticeventdatetime } from "../../services/logisticeventdatetimeService";

class LogisticeventdatetimeDetails extends Component{

  state = {
    data: { date: "", time: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const logisticeventdatetimeId = this.props.match.params.id;
        const { data } = await getLogisticeventdatetime(logisticeventdatetimeId);
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
    this.props.history.push("/logisticeventdatetimes");
  };

  render() {
    return (
      <div className="content">
        <h1>Logisticeventdatetime Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Date : 
                 {this.state.data["date"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Time : 
                 {this.state.data["time"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default LogisticeventdatetimeDetails;