import React, { Component } from "react";
import { getOperatinghourstype } from "../../services/operatinghourstypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class OperatinghourstypeDetails extends Component{

  state = {
    data: { id: "", dayOfTheWeekCode: "", isOperational: "", closingTime: "", openingTime: "", dayOfTheWeekCodeId: "", },
    dayOfTheWeekCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const operatinghourstypeId = this.props.match.params.id;
        const { data } = await getOperatinghourstype(operatinghourstypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatedayOfTheWeekCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ dayOfTheWeekCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatedayOfTheWeekCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/operatinghourstypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Operatinghourstype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
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
                 {this.state.data["closingTime"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Opening Time : 
                 {this.state.data["openingTime"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Day Of The Week Code : 
                  {this.state.dayOfTheWeekCodes.map(Enumerationlibrary => 
                      this.state.data["dayOfTheWeekCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default OperatinghourstypeDetails;