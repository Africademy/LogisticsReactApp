import React, { Component } from "react";
import { getTemperaturerangetype } from "../../services/temperaturerangetypeService";
import { getTimemeasurementtypes } from "../../services/timemeasurementtypeService";

class TemperaturerangetypeDetails extends Component{

  state = {
    data: { id: "", maximumTemperature: "", minimumTemperature: "", minimumTemperatureId: "", maximumTemperatureId: "", },
    minimumTemperatures: [],
    maximumTemperatures: [],
    errors: {}
  };

  async populateForm() {
    try {
        const temperaturerangetypeId = this.props.match.params.id;
        const { data } = await getTemperaturerangetype(temperaturerangetypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateminimumTemperatures() {
    const { data } = await getTimemeasurementtypes();
    this.setState({ minimumTemperatures: data });
  }

  async populatemaximumTemperatures() {
    const { data } = await getTimemeasurementtypes();
    this.setState({ maximumTemperatures: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateminimumTemperatures();
    await this.populatemaximumTemperatures();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/temperaturerangetypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Temperaturerangetype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Maximum Temperature : 
                 {this.state.data["maximumTemperature"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Minimum Temperature : 
                 {this.state.data["minimumTemperature"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Minimum Temperature : 
                  {this.state.minimumTemperatures.map(Timemeasurementtype => 
                      this.state.data["minimumTemperatureId"] == Timemeasurementtype._id ? " "+ Timemeasurementtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Maximum Temperature : 
                  {this.state.maximumTemperatures.map(Timemeasurementtype => 
                      this.state.data["maximumTemperatureId"] == Timemeasurementtype._id ? " "+ Timemeasurementtype.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default TemperaturerangetypeDetails;