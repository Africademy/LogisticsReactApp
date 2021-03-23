import React, { Component } from "react";
import Joi from "joi-browser";
import { saveTransportcapacitybookingtransportmovementtype, getTransportcapacitybookingtransportmovementtype } from "../../services/transportcapacitybookingtransportmovementtypeService";
import { getIdentifiertypes } from "../../services/identifiertypeService";
import { getLogisticeventtypes } from "../../services/logisticeventtypeService";
import { getTransactionalpartytypes } from "../../services/transactionalpartytypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createTransportcapacitybookingtransportmovementtype extends Component{

 constructor(props){
super(props);
    this.populaterouteIDs = this.populaterouteIDs.bind(this);
    this.populateplannedDepartures = this.populateplannedDepartures.bind(this);
    this.populateplannedArrivals = this.populateplannedArrivals.bind(this);
    this.populateplannedWaypoints = this.populateplannedWaypoints.bind(this);
    this.populatecarriers = this.populatecarriers.bind(this);
    this.populatetransportModeCodes = this.populatetransportModeCodes.bind(this);
}  state = {
    data: { id: "", transportModeCode: "", routeID: "", plannedDeparture: "", plannedArrival: "", plannedWaypoint: "", carrier: "", routeIDId: "", plannedDepartureId: "", plannedArrivalId: "", plannedWaypointId: "", carrierId: "", transportModeCodeId: "", },
    routeIDs: [],
    plannedDepartures: [],
    plannedArrivals: [],
    plannedWaypoints: [],
    carriers: [],
    transportModeCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    transportModeCode:  Joi.number()



      .label("transportModeCode"),
    routeID:  Joi.number()



      .label("routeID"),
    plannedDeparture:  Joi.number()



      .label("plannedDeparture"),
    plannedArrival:  Joi.number()



      .label("plannedArrival"),
    plannedWaypoint:  Joi.number()



      .label("plannedWaypoint"),
    carrier:  Joi.number()



      .label("carrier"),
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
    transportModeCodeId:  Joi.string()
      .required()
      .label("transportModeCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const transportcapacitybookingtransportmovementtypeId = this.props.match.params.id;
      if(transportcapacitybookingtransportmovementtypeId!=="new"){
        const { data } = await getTransportcapacitybookingtransportmovementtype(transportcapacitybookingtransportmovementtypeId);
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

  async populatetransportModeCodes() {
    const { data: transportModeCodes } = await getEnumerationlibrarys();
    this.setState({ transportModeCodes: transportModeCodes });
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
    await saveTransportcapacitybookingtransportmovementtype(this.state.data);
    this.props.history.push("/transportcapacitybookingtransportmovementtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportcapacitybookingtransportmovementtype Form</h1>
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
              <label htmlFor="transportModeCode">Transport Mode Code</label>
              <input
                value={this.state.data["transportModeCode"]}
                onChange={this.handleChange}
                name="transportModeCode"
                id="transportModeCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportModeCode"] && <div className="alert alert-danger">{this.state.errors["transportModeCode"]}</div>}
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
              <label htmlFor="transportModeCodeId">          Transport Mode Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportModeCodes}> Refresh</a> </label>
              <select
                value={this.state.data["transportModeCodeId"]}
                onChange={this.handleChange}
                name="transportModeCodeId"
                id="transportModeCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.transportModeCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportModeCodeId"] && <div className="alert alert-danger">{this.state.errors["transportModeCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createTransportcapacitybookingtransportmovementtype;