import React, { Component } from "react";
import { getTransportcapacitybookingtransportmovementtype } from "../../services/transportcapacitybookingtransportmovementtypeService";
import { getIdentifiertypes } from "../../services/identifiertypeService";
import { getLogisticeventtypes } from "../../services/logisticeventtypeService";
import { getTransactionalpartytypes } from "../../services/transactionalpartytypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class TransportcapacitybookingtransportmovementtypeDetails extends Component{

  state = {
    data: { id: "", transportModeCode: "", routeID: "", plannedDeparture: "", plannedArrival: "", plannedWaypoint: "", carrier: "", routeIDId: "", plannedDepartureId: "", plannedArrivalId: "", plannedWaypointId: "", carrierId: "", transportModeCodeId: "", },
    routeIDs: [],
    plannedDepartures: [],
    plannedArrivals: [],
    plannedWaypoints: [],
    carriers: [],
    transportModeCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const transportcapacitybookingtransportmovementtypeId = this.props.match.params.id;
        const { data } = await getTransportcapacitybookingtransportmovementtype(transportcapacitybookingtransportmovementtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populaterouteIDs() {
    const { data } = await getIdentifiertypes();
    this.setState({ routeIDs: data });
  }

  async populateplannedDepartures() {
    const { data } = await getLogisticeventtypes();
    this.setState({ plannedDepartures: data });
  }

  async populateplannedArrivals() {
    const { data } = await getLogisticeventtypes();
    this.setState({ plannedArrivals: data });
  }

  async populateplannedWaypoints() {
    const { data } = await getLogisticeventtypes();
    this.setState({ plannedWaypoints: data });
  }

  async populatecarriers() {
    const { data } = await getTransactionalpartytypes();
    this.setState({ carriers: data });
  }

  async populatetransportModeCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ transportModeCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populaterouteIDs();
    await this.populateplannedDepartures();
    await this.populateplannedArrivals();
    await this.populateplannedWaypoints();
    await this.populatecarriers();
    await this.populatetransportModeCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/transportcapacitybookingtransportmovementtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportcapacitybookingtransportmovementtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Mode Code : 
                 {this.state.data["transportModeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Route I D : 
                 {this.state.data["routeID"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Planned Departure : 
                 {this.state.data["plannedDeparture"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Planned Arrival : 
                 {this.state.data["plannedArrival"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Planned Waypoint : 
                 {this.state.data["plannedWaypoint"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Carrier : 
                 {this.state.data["carrier"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Route I D : 
                  {this.state.routeIDs.map(Identifiertype => 
                      this.state.data["routeIDId"] == Identifiertype._id ? " "+ Identifiertype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Planned Departure : 
                  {this.state.plannedDepartures.map(Logisticeventtype => 
                      this.state.data["plannedDepartureId"] == Logisticeventtype._id ? " "+ Logisticeventtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Planned Arrival : 
                  {this.state.plannedArrivals.map(Logisticeventtype => 
                      this.state.data["plannedArrivalId"] == Logisticeventtype._id ? " "+ Logisticeventtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Planned Waypoint : 
                  {this.state.plannedWaypoints.map(Logisticeventtype => 
                      this.state.data["plannedWaypointId"] == Logisticeventtype._id ? " "+ Logisticeventtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Carrier : 
                  {this.state.carriers.map(Transactionalpartytype => 
                      this.state.data["carrierId"] == Transactionalpartytype._id ? " "+ Transactionalpartytype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Mode Code : 
                  {this.state.transportModeCodes.map(Enumerationlibrary => 
                      this.state.data["transportModeCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default TransportcapacitybookingtransportmovementtypeDetails;