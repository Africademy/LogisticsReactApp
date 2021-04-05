import React, { Component } from "react";
import { getDimensiontype } from "../../services/dimensiontypeService";
import { getMeasurementtypes } from "../../services/measurementtypeService";

class DimensiontypeDetails extends Component{

  state = {
    data: { id: "", depth: "", height: "", width: "", depthId: "", heightId: "", widthId: "", },
    depths: [],
    heights: [],
    widths: [],
    errors: {}
  };

  async populateForm() {
    try {
        const dimensiontypeId = this.props.match.params.id;
        const { data } = await getDimensiontype(dimensiontypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatedepths() {
    const { data } = await getMeasurementtypes();
    this.setState({ depths: data });
  }

  async populateheights() {
    const { data } = await getMeasurementtypes();
    this.setState({ heights: data });
  }

  async populatewidths() {
    const { data } = await getMeasurementtypes();
    this.setState({ widths: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatedepths();
    await this.populateheights();
    await this.populatewidths();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/dimensiontypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Dimensiontype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Depth : 
                 {this.state.data["depth"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Height : 
                 {this.state.data["height"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Width : 
                 {this.state.data["width"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Depth : 
                  {this.state.depths.map(Measurementtype => 
                      this.state.data["depthId"] == Measurementtype._id ? " "+ Measurementtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Height : 
                  {this.state.heights.map(Measurementtype => 
                      this.state.data["heightId"] == Measurementtype._id ? " "+ Measurementtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Width : 
                  {this.state.widths.map(Measurementtype => 
                      this.state.data["widthId"] == Measurementtype._id ? " "+ Measurementtype.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default DimensiontypeDetails;