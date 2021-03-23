import React, { Component } from "react";
import { getGeographicalcoordinates } from "../../services/geographicalcoordinatesService";

class GeographicalcoordinatesDetails extends Component{

  state = {
    data: { latitude: "", longitude: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const geographicalcoordinatesId = this.props.match.params.id;
        const { data } = await getGeographicalcoordinates(geographicalcoordinatesId);
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
    this.props.history.push("/geographicalcoordinatess");
  };

  render() {
    return (
      <div className="content">
        <h1>Geographicalcoordinates Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Latitude : 
                 {this.state.data["latitude"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Longitude : 
                 {this.state.data["longitude"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default GeographicalcoordinatesDetails;