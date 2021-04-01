import React, { Component } from "react";
import Joi from "joi-browser";
import { saveTransportinstructiontransportmovementtype, getTransportinstructiontransportmovementtype } from "../../services/transportinstructiontransportmovementtypeService";
import { getIdentifiertypes } from "../../services/identifiertypeService";
import { getLogisticeventtypes } from "../../services/logisticeventtypeService";
import { getTransactionalpartytypes } from "../../services/transactionalpartytypeService";
import { getTransportmeanstypes } from "../../services/transportmeanstypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";
import { getPersons } from "../../services/personService";

class createTransportinstructiontransportmovementtype extends Component{

 constructor(props){
super(props);
    this.populaterouteIDs = this.populaterouteIDs.bind(this);
    this.populateplannedDepartures = this.populateplannedDepartures.bind(this);
    this.populateplannedArrivals = this.populateplannedArrivals.bind(this);
    this.populateplannedWaypoints = this.populateplannedWaypoints.bind(this);
    this.populatecarriers = this.populatecarriers.bind(this);
    this.populatetransportStatusResponsiblePartys = this.populatetransportStatusResponsiblePartys.bind(this);
    this.populatetransportMeanss = this.populatetransportMeanss.bind(this);
    this.populatetransportModeTypeCodes = this.populatetransportModeTypeCodes.bind(this);
    this.populateassociatedPersons = this.populateassociatedPersons.bind(this);
}  state = {
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

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    sequenceNumber:  Joi.number()



      .label("sequenceNumber"),
    transportModeTypeCode:  Joi.number()



      .label("transportModeTypeCode"),
    routeID:  Joi.number()



      .label("routeID"),
    carrier:  Joi.number()



      .label("carrier"),
    transportStatusResponsibleParty:  Joi.number()



      .label("transportStatusResponsibleParty"),
    transportMeans:  Joi.number()



      .label("transportMeans"),
    plannedDeparture:  Joi.number()



      .label("plannedDeparture"),
    plannedArrival:  Joi.number()



      .label("plannedArrival"),
    plannedWaypoint:  Joi.number()



      .label("plannedWaypoint"),
    associatedPerson:  Joi.number()



      .label("associatedPerson"),
    routeIDId:  Joi.string()
      .required()
      .label("routeIDId"),
    plannedDepartureId:  Joi.string()
      .required()
      .label("plannedDepartureId"),
    plannedArrivalId:  Joi.string()
      .required()
      .label("plannedArrivalId"),
    plannedWaypointId:  Joi.string()
      .required()
      .label("plannedWaypointId"),
    carrierId:  Joi.string()
      .required()
      .label("carrierId"),
    transportStatusResponsiblePartyId:  Joi.string()
      .required()
      .label("transportStatusResponsiblePartyId"),
    transportMeansId:  Joi.string()
      .required()
      .label("transportMeansId"),
    transportModeTypeCodeId:  Joi.string()
      .required()
      .label("transportModeTypeCodeId"),
    associatedPersonId:  Joi.string()
      .required()
      .label("associatedPersonId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const transportinstructiontransportmovementtypeId = this.props.match.params.id;
      if(transportinstructiontransportmovementtypeId!=="new"){
        const { data } = await getTransportinstructiontransportmovementtype(transportinstructiontransportmovementtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populaterouteIDs() {
    const { data: routeIDs } = await getIdentifiertypes();
    this.setState({ routeIDs: routeIDs });
  }

  async populateplannedDepartures() {
    const { data: plannedDepartures } = await getLogisticeventtypes();
    this.setState({ plannedDepartures: plannedDepartures });
  }

  async populateplannedArrivals() {
    const { data: plannedArrivals } = await getLogisticeventtypes();
    this.setState({ plannedArrivals: plannedArrivals });
  }

  async populateplannedWaypoints() {
    const { data: plannedWaypoints } = await getLogisticeventtypes();
    this.setState({ plannedWaypoints: plannedWaypoints });
  }

  async populatecarriers() {
    const { data: carriers } = await getTransactionalpartytypes();
    this.setState({ carriers: carriers });
  }

  async populatetransportStatusResponsiblePartys() {
    const { data: transportStatusResponsiblePartys } = await getTransactionalpartytypes();
    this.setState({ transportStatusResponsiblePartys: transportStatusResponsiblePartys });
  }

  async populatetransportMeanss() {
    const { data: transportMeanss } = await getTransportmeanstypes();
    this.setState({ transportMeanss: transportMeanss });
  }

  async populatetransportModeTypeCodes() {
    const { data: transportModeTypeCodes } = await getEnumerationlibrarys();
    this.setState({ transportModeTypeCodes: transportModeTypeCodes });
  }

  async populateassociatedPersons() {
    const { data: associatedPersons } = await getPersons();
    this.setState({ associatedPersons: associatedPersons });
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


  validate = () => {
    const result = Joi.validate(this.state.data, this.scheema, {
      abortEarly: false
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = inputField => {
    const { name, value } = inputField;
    const obj = { [name]: value };
    const scheema = { [name]: this.scheema[name] };
    const result = Joi.validate(obj, scheema);
    return result.error ? result.error.details[0].message : null;
  };

  handleChange = event => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(event.currentTarget);
    if (errorMessage) errors[event.currentTarget.name] = errorMessage;
    else delete errors[event.currentTarget.name];

    const data = { ...this.state.data };
    data[event.currentTarget.name] = event.currentTarget.value;

    this.setState({ data: data, errors: errors });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors ? errors : {} });
    if (errors) return;
    await saveTransportinstructiontransportmovementtype(this.state.data);
    this.props.history.push("/transportinstructiontransportmovementtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportinstructiontransportmovementtype Form</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label htmlFor="id">Id</label>
              <input
                value={this.state.data["id"]}
                onChange={this.handleChange}
                name="id"
                id="id"
                type="number"
                className="form-control"
              />
              {this.state.errors["id"] && <div className="alert alert-danger">{this.state.errors["id"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="sequenceNumber">Sequence Number</label>
              <input
                value={this.state.data["sequenceNumber"]}
                onChange={this.handleChange}
                name="sequenceNumber"
                id="sequenceNumber"
                type="number"
                className="form-control"
              />
              {this.state.errors["sequenceNumber"] && <div className="alert alert-danger">{this.state.errors["sequenceNumber"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportModeTypeCode">Transport Mode Type Code</label>
              <input
                value={this.state.data["transportModeTypeCode"]}
                onChange={this.handleChange}
                name="transportModeTypeCode"
                id="transportModeTypeCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportModeTypeCode"] && <div className="alert alert-danger">{this.state.errors["transportModeTypeCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="routeID">Route I D</label>
              <input
                value={this.state.data["routeID"]}
                onChange={this.handleChange}
                name="routeID"
                id="routeID"
                type="number"
                className="form-control"
              />
              {this.state.errors["routeID"] && <div className="alert alert-danger">{this.state.errors["routeID"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="carrier">Carrier</label>
              <input
                value={this.state.data["carrier"]}
                onChange={this.handleChange}
                name="carrier"
                id="carrier"
                type="number"
                className="form-control"
              />
              {this.state.errors["carrier"] && <div className="alert alert-danger">{this.state.errors["carrier"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportStatusResponsibleParty">Transport Status Responsible Party</label>
              <input
                value={this.state.data["transportStatusResponsibleParty"]}
                onChange={this.handleChange}
                name="transportStatusResponsibleParty"
                id="transportStatusResponsibleParty"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportStatusResponsibleParty"] && <div className="alert alert-danger">{this.state.errors["transportStatusResponsibleParty"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportMeans">Transport Means</label>
              <input
                value={this.state.data["transportMeans"]}
                onChange={this.handleChange}
                name="transportMeans"
                id="transportMeans"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportMeans"] && <div className="alert alert-danger">{this.state.errors["transportMeans"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="plannedDeparture">Planned Departure</label>
              <input
                value={this.state.data["plannedDeparture"]}
                onChange={this.handleChange}
                name="plannedDeparture"
                id="plannedDeparture"
                type="number"
                className="form-control"
              />
              {this.state.errors["plannedDeparture"] && <div className="alert alert-danger">{this.state.errors["plannedDeparture"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="plannedArrival">Planned Arrival</label>
              <input
                value={this.state.data["plannedArrival"]}
                onChange={this.handleChange}
                name="plannedArrival"
                id="plannedArrival"
                type="number"
                className="form-control"
              />
              {this.state.errors["plannedArrival"] && <div className="alert alert-danger">{this.state.errors["plannedArrival"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="plannedWaypoint">Planned Waypoint</label>
              <input
                value={this.state.data["plannedWaypoint"]}
                onChange={this.handleChange}
                name="plannedWaypoint"
                id="plannedWaypoint"
                type="number"
                className="form-control"
              />
              {this.state.errors["plannedWaypoint"] && <div className="alert alert-danger">{this.state.errors["plannedWaypoint"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="associatedPerson">Associated Person</label>
              <input
                value={this.state.data["associatedPerson"]}
                onChange={this.handleChange}
                name="associatedPerson"
                id="associatedPerson"
                type="number"
                className="form-control"
              />
              {this.state.errors["associatedPerson"] && <div className="alert alert-danger">{this.state.errors["associatedPerson"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="routeIDId">          Route I D <a target="_blank" href="/Identifiertypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populaterouteIDs}> Refresh</a> </label>
              <select
                value={this.state.data["routeIDId"]}
                onChange={this.handleChange}
                name="routeIDId"
                id="routeIDId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Identifiertype
                  </option>
                  {this.state.routeIDs.map(Identifiertype => (
                    <option key={Identifiertype._id} value={Identifiertype._id}>
                      {Identifiertype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["routeIDId"] && <div className="alert alert-danger">{this.state.errors["routeIDId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="plannedDepartureId">          Planned Departure <a target="_blank" href="/Logisticeventtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateplannedDepartures}> Refresh</a> </label>
              <select
                value={this.state.data["plannedDepartureId"]}
                onChange={this.handleChange}
                name="plannedDepartureId"
                id="plannedDepartureId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Logisticeventtype
                  </option>
                  {this.state.plannedDepartures.map(Logisticeventtype => (
                    <option key={Logisticeventtype._id} value={Logisticeventtype._id}>
                      {Logisticeventtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["plannedDepartureId"] && <div className="alert alert-danger">{this.state.errors["plannedDepartureId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="plannedArrivalId">          Planned Arrival <a target="_blank" href="/Logisticeventtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateplannedArrivals}> Refresh</a> </label>
              <select
                value={this.state.data["plannedArrivalId"]}
                onChange={this.handleChange}
                name="plannedArrivalId"
                id="plannedArrivalId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Logisticeventtype
                  </option>
                  {this.state.plannedArrivals.map(Logisticeventtype => (
                    <option key={Logisticeventtype._id} value={Logisticeventtype._id}>
                      {Logisticeventtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["plannedArrivalId"] && <div className="alert alert-danger">{this.state.errors["plannedArrivalId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="plannedWaypointId">          Planned Waypoint <a target="_blank" href="/Logisticeventtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateplannedWaypoints}> Refresh</a> </label>
              <select
                value={this.state.data["plannedWaypointId"]}
                onChange={this.handleChange}
                name="plannedWaypointId"
                id="plannedWaypointId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Logisticeventtype
                  </option>
                  {this.state.plannedWaypoints.map(Logisticeventtype => (
                    <option key={Logisticeventtype._id} value={Logisticeventtype._id}>
                      {Logisticeventtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["plannedWaypointId"] && <div className="alert alert-danger">{this.state.errors["plannedWaypointId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="carrierId">          Carrier <a target="_blank" href="/Transactionalpartytypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatecarriers}> Refresh</a> </label>
              <select
                value={this.state.data["carrierId"]}
                onChange={this.handleChange}
                name="carrierId"
                id="carrierId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Transactionalpartytype
                  </option>
                  {this.state.carriers.map(Transactionalpartytype => (
                    <option key={Transactionalpartytype._id} value={Transactionalpartytype._id}>
                      {Transactionalpartytype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["carrierId"] && <div className="alert alert-danger">{this.state.errors["carrierId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportStatusResponsiblePartyId">          Transport Status Responsible Party <a target="_blank" href="/Transactionalpartytypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportStatusResponsiblePartys}> Refresh</a> </label>
              <select
                value={this.state.data["transportStatusResponsiblePartyId"]}
                onChange={this.handleChange}
                name="transportStatusResponsiblePartyId"
                id="transportStatusResponsiblePartyId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Transactionalpartytype
                  </option>
                  {this.state.transportStatusResponsiblePartys.map(Transactionalpartytype => (
                    <option key={Transactionalpartytype._id} value={Transactionalpartytype._id}>
                      {Transactionalpartytype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportStatusResponsiblePartyId"] && <div className="alert alert-danger">{this.state.errors["transportStatusResponsiblePartyId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportMeansId">          Transport Means <a target="_blank" href="/Transportmeanstypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportMeanss}> Refresh</a> </label>
              <select
                value={this.state.data["transportMeansId"]}
                onChange={this.handleChange}
                name="transportMeansId"
                id="transportMeansId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Selectmeanstype
                  </option>
                  {this.state.transportMeanss.map(Transportmeanstype => (
                    <option key={Transportmeanstype._id} value={Transportmeanstype._id}>
                      {Transportmeanstype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportMeansId"] && <div className="alert alert-danger">{this.state.errors["transportMeansId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportModeTypeCodeId">          Transport Mode Type Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportModeTypeCodes}> Refresh</a> </label>
              <select
                value={this.state.data["transportModeTypeCodeId"]}
                onChange={this.handleChange}
                name="transportModeTypeCodeId"
                id="transportModeTypeCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.transportModeTypeCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportModeTypeCodeId"] && <div className="alert alert-danger">{this.state.errors["transportModeTypeCodeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="associatedPersonId">          Associated Person <a target="_blank" href="/Persons/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateassociatedPersons}> Refresh</a> </label>
              <select
                value={this.state.data["associatedPersonId"]}
                onChange={this.handleChange}
                name="associatedPersonId"
                id="associatedPersonId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Person
                  </option>
                  {this.state.associatedPersons.map(Person => (
                    <option key={Person._id} value={Person._id}>
                      {Person.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["associatedPersonId"] && <div className="alert alert-danger">{this.state.errors["associatedPersonId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createTransportinstructiontransportmovementtype;