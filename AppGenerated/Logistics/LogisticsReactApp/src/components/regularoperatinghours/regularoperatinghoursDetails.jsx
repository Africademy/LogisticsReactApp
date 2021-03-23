import React, { Component } from "react";
import { getRegularoperatinghours } from "../../services/regularoperatinghoursService";

class RegularoperatinghoursDetails extends Component{

  state = {
    data: { dayOfTheWeekCode: "", isOperational: "", closingTime: "", openingTime: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const regularoperatinghoursId = this.props.match.params.id;
        const { data } = await getRegularoperatinghours(regularoperatinghoursId);
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
    this.props.history.push("/regularoperatinghourss");
  };

  render() {
    return (
      <div className="content">
        <h1>Regularoperatinghours Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Day Of The Week Code : 
                 {this.state.data["dayOfTheWeekCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Is Operational : 
                 {this.state.data["isOperational"]}
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

export default RegularoperatinghoursDetails;