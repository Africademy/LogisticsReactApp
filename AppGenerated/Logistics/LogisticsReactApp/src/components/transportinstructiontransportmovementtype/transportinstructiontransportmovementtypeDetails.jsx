import React, { Component } from "react";
import { getTransportinstructiontransportmovementtype } from "../../services/transportinstructiontransportmovementtypeService";
import { getIdentifiertypes } from "../../services/identifiertypeService";
import { getLogisticeventtypes } from "../../services/logisticeventtypeService";
import { getTransactionalpartytypes } from "../../services/transactionalpartytypeService";
import { getTransportmeanstypes } from "../../services/transportmeanstypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";
import { getPersons } from "../../services/personService";

class TransportinstructiontransportmovementtypeDetails extends Component{

  state = {
    data: { id: "", sequenceNumber: "", transportModeTypeCode: "", routeID: "", carrier: "", transportStatusResponsibleParty: "", transportMeans: "", plannedDeparture: "", plannedArrival: "", plannedWaypoint: "", associatedPerson: "", routeIDId: "", plannedDepartureId: "", plannedArrivalId: "", plannedWaypointId: "", carrierId: "", transportStatusResponsiblePartyId: "", transportMeansId: "", transportModeTypeCodeId: "", associatedPersonId: "", },
    routeIDs: [],
    plannedDepartures: [],
    plannedArrivals: [],
    plannedWaypoints: [],
    carriers: [],
    transportStatusResponsiblePartys: [],
    transportMeanss: [],
    transportModeTypeCodes: [],
    associatedPersons: [],
    errors: {}
  };

  async populateForm() {
    try {
        const transportinstructiontransportmovementtypeId = this.props.match.params.id;
        const { data } = await getTransportinstructiontransportmovementtype(transportinstructiontransportmovementtypeId);
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

  async populatetransportStatusResponsiblePartys() {
    const { data } = await getTransactionalpartytypes();
    this.setState({ transportStatusResponsiblePartys: data });
  }

  async populatetransportMeanss() {
    const { data } = await getTransportmeanstypes();
    this.setState({ transportMeanss: data });
  }

  async populatetransportModeTypeCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ transportModeTypeCodes: data });
  }

  async populateassociatedPersons() {
    const { data } = await getPersons();
    this.setState({ associatedPersons: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populaterouteIDs();
    await this.populateplannedDepartures();
    await this.populateplannedArrivals();
    await this.populateplannedWaypoints();
    await this.populatecarriers();
    await this.populatetransportStatusResponsiblePartys();
    await this.populatetransportMeanss();
    await this.populatetransportModeTypeCodes();
    await this.populateassociatedPersons();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/transportinstructiontransportmovementtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportinstructiontransportmovementtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Sequence Number : 
                 {this.state.data["sequenceNumber"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Mode Type Code : 
                 {this.state.data["transportModeTypeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Route I D : 
                 {this.state.data["routeID"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Carrier : 
                 {this.state.data["carrier"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Status Responsible Party : 
                 {this.state.data["transportStatusResponsibleParty"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Means : 
                 {this.state.data["transportMeans"]}
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
              <label  className="form-control"> Associated Person : 
                 {this.state.data["associatedPerson"]}
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
              <label  className="form-control"> Transport Status Responsible Party : 
                  {this.state.transportStatusResponsiblePartys.map(Transactionalpartytype => 
                      this.state.data["transportStatusResponsiblePartyId"] == Transactionalpartytype._id ? " "+ Transactionalpartytype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Means : 
                  {this.state.transportMeanss.map(Transportmeanstype => 
                      this.state.data["transportMeansId"] == Transportmeanstype._id ? " "+ Transportmeanstype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Mode Type Code : 
                  {this.state.transportModeTypeCodes.map(Enumerationlibrary => 
                      this.state.data["transportModeTypeCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Associated Person : 
                  {this.state.associatedPersons.map(Person => 
                      this.state.data["associatedPersonId"] == Person._id ? " "+ Person.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default TransportinstructiontransportmovementtypeDetails;