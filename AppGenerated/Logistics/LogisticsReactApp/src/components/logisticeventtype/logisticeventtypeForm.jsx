import React, { Component } from "react";
import Joi from "joi-browser";
import { saveLogisticeventtype, getLogisticeventtype } from "../../services/logisticeventtypeService";
import { getDateoptionaltimetypes } from "../../services/dateoptionaltimetypeService";
import { getDatetimerangetypes } from "../../services/datetimerangetypeService";
import { getTimemeasurementtypes } from "../../services/timemeasurementtypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";
import { getLogisticlocationtypes } from "../../services/logisticlocationtypeService";

class createLogisticeventtype extends Component{

 constructor(props){
super(props);
    this.populatelogisticEventDateTimes = this.populatelogisticEventDateTimes.bind(this);
    this.populatelogisticEventPeriods = this.populatelogisticEventPeriods.bind(this);
    this.populatelogisticEventDurations = this.populatelogisticEventDurations.bind(this);
    this.populatelogisticEventTypeCodes = this.populatelogisticEventTypeCodes.bind(this);
    this.populatelogisticLocations = this.populatelogisticLocations.bind(this);
}  state = {
    data: { id: "", logisticEventTypeCode: "", logisticEventDuration: "", logisticLocation: "", logisticEventPeriod: "", logisticEventDateTime: "", logisticEventDateTimeId: "", logisticEventPeriodId: "", logisticEventDurationId: "", logisticEventTypeCodeId: "", logisticLocationId: "", },
    logisticEventDateTimes: [],
    logisticEventPeriods: [],
    logisticEventDurations: [],
    logisticEventTypeCodes: [],
    logisticLocations: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    logisticEventTypeCode:  Joi.number()



      .label("logisticEventTypeCode"),
    logisticEventDuration:  Joi.number()



      .label("logisticEventDuration"),
    logisticLocation:  Joi.number()



      .label("logisticLocation"),
    logisticEventPeriod:  Joi.number()



      .label("logisticEventPeriod"),
    logisticEventDateTime:  Joi.number()



      .label("logisticEventDateTime"),
    logisticEventDateTimeId:  Joi.string()
      .required()
      .label("logisticEventDateTimeId"),
    logisticEventPeriodId:  Joi.string()
      .required()
      .label("logisticEventPeriodId"),
    logisticEventDurationId:  Joi.string()
      .required()
      .label("logisticEventDurationId"),
    logisticEventTypeCodeId:  Joi.string()
      .required()
      .label("logisticEventTypeCodeId"),
    logisticLocationId:  Joi.string()
      .required()
      .label("logisticLocationId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const logisticeventtypeId = this.props.match.params.id;
      if(logisticeventtypeId!=="new"){
        const { data } = await getLogisticeventtype(logisticeventtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatelogisticEventDateTimes() {
    const { data: logisticEventDateTimes } = await getDateoptionaltimetypes();
    this.setState({ logisticEventDateTimes: logisticEventDateTimes });
  }

  async populatelogisticEventPeriods() {
    const { data: logisticEventPeriods } = await getDatetimerangetypes();
    this.setState({ logisticEventPeriods: logisticEventPeriods });
  }

  async populatelogisticEventDurations() {
    const { data: logisticEventDurations } = await getTimemeasurementtypes();
    this.setState({ logisticEventDurations: logisticEventDurations });
  }

  async populatelogisticEventTypeCodes() {
    const { data: logisticEventTypeCodes } = await getEnumerationlibrarys();
    this.setState({ logisticEventTypeCodes: logisticEventTypeCodes });
  }

  async populatelogisticLocations() {
    const { data: logisticLocations } = await getLogisticlocationtypes();
    this.setState({ logisticLocations: logisticLocations });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatelogisticEventDateTimes();
    await this.populatelogisticEventPeriods();
    await this.populatelogisticEventDurations();
    await this.populatelogisticEventTypeCodes();
    await this.populatelogisticLocations();
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
    await saveLogisticeventtype(this.state.data);
    this.props.history.push("/logisticeventtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Logisticeventtype Form</h1>
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
              <label htmlFor="logisticEventTypeCode">Logistic Event Type Code</label>
              <input
                value={this.state.data["logisticEventTypeCode"]}
                onChange={this.handleChange}
                name="logisticEventTypeCode"
                id="logisticEventTypeCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["logisticEventTypeCode"] && <div className="alert alert-danger">{this.state.errors["logisticEventTypeCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticEventDuration">Logistic Event Duration</label>
              <input
                value={this.state.data["logisticEventDuration"]}
                onChange={this.handleChange}
                name="logisticEventDuration"
                id="logisticEventDuration"
                type="number"
                className="form-control"
              />
              {this.state.errors["logisticEventDuration"] && <div className="alert alert-danger">{this.state.errors["logisticEventDuration"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticLocation">Logistic Location</label>
              <input
                value={this.state.data["logisticLocation"]}
                onChange={this.handleChange}
                name="logisticLocation"
                id="logisticLocation"
                type="number"
                className="form-control"
              />
              {this.state.errors["logisticLocation"] && <div className="alert alert-danger">{this.state.errors["logisticLocation"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticEventPeriod">Logistic Event Period</label>
              <input
                value={this.state.data["logisticEventPeriod"]}
                onChange={this.handleChange}
                name="logisticEventPeriod"
                id="logisticEventPeriod"
                type="number"
                className="form-control"
              />
              {this.state.errors["logisticEventPeriod"] && <div className="alert alert-danger">{this.state.errors["logisticEventPeriod"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticEventDateTime">Logistic Event Date Time</label>
              <input
                value={this.state.data["logisticEventDateTime"]}
                onChange={this.handleChange}
                name="logisticEventDateTime"
                id="logisticEventDateTime"
                type="number"
                className="form-control"
              />
              {this.state.errors["logisticEventDateTime"] && <div className="alert alert-danger">{this.state.errors["logisticEventDateTime"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticEventDateTimeId">          Logistic Event Date Time <a target="_blank" href="/Dateoptionaltimetypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatelogisticEventDateTimes}> Refresh</a> </label>
              <select
                value={this.state.data["logisticEventDateTimeId"]}
                onChange={this.handleChange}
                name="logisticEventDateTimeId"
                id="logisticEventDateTimeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Dateoptionaltimetype
                  </option>
                  {this.state.logisticEventDateTimes.map(Dateoptionaltimetype => (
                    <option key={Dateoptionaltimetype._id} value={Dateoptionaltimetype._id}>
                      {Dateoptionaltimetype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["logisticEventDateTimeId"] && <div className="alert alert-danger">{this.state.errors["logisticEventDateTimeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticEventPeriodId">          Logistic Event Period <a target="_blank" href="/Datetimerangetypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatelogisticEventPeriods}> Refresh</a> </label>
              <select
                value={this.state.data["logisticEventPeriodId"]}
                onChange={this.handleChange}
                name="logisticEventPeriodId"
                id="logisticEventPeriodId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Datetimerangetype
                  </option>
                  {this.state.logisticEventPeriods.map(Datetimerangetype => (
                    <option key={Datetimerangetype._id} value={Datetimerangetype._id}>
                      {Datetimerangetype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["logisticEventPeriodId"] && <div className="alert alert-danger">{this.state.errors["logisticEventPeriodId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticEventDurationId">          Logistic Event Duration <a target="_blank" href="/Timemeasurementtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatelogisticEventDurations}> Refresh</a> </label>
              <select
                value={this.state.data["logisticEventDurationId"]}
                onChange={this.handleChange}
                name="logisticEventDurationId"
                id="logisticEventDurationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Timemeasurementtype
                  </option>
                  {this.state.logisticEventDurations.map(Timemeasurementtype => (
                    <option key={Timemeasurementtype._id} value={Timemeasurementtype._id}>
                      {Timemeasurementtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["logisticEventDurationId"] && <div className="alert alert-danger">{this.state.errors["logisticEventDurationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticEventTypeCodeId">          Logistic Event Type Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatelogisticEventTypeCodes}> Refresh</a> </label>
              <select
                value={this.state.data["logisticEventTypeCodeId"]}
                onChange={this.handleChange}
                name="logisticEventTypeCodeId"
                id="logisticEventTypeCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.logisticEventTypeCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["logisticEventTypeCodeId"] && <div className="alert alert-danger">{this.state.errors["logisticEventTypeCodeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticLocationId">          Logistic Location <a target="_blank" href="/Logisticlocationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatelogisticLocations}> Refresh</a> </label>
              <select
                value={this.state.data["logisticLocationId"]}
                onChange={this.handleChange}
                name="logisticLocationId"
                id="logisticLocationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Logisticlocationtype
                  </option>
                  {this.state.logisticLocations.map(Logisticlocationtype => (
                    <option key={Logisticlocationtype._id} value={Logisticlocationtype._id}>
                      {Logisticlocationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["logisticLocationId"] && <div className="alert alert-danger">{this.state.errors["logisticLocationId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createLogisticeventtype;