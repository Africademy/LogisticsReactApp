import React, { Component } from "react";
import { getLogisticeventtype } from "../../services/logisticeventtypeService";
import { getDateoptionaltimetypes } from "../../services/dateoptionaltimetypeService";
import { getDatetimerangetypes } from "../../services/datetimerangetypeService";
import { getTimemeasurementtypes } from "../../services/timemeasurementtypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";
import { getLogisticlocationtypes } from "../../services/logisticlocationtypeService";

class LogisticeventtypeDetails extends Component{

  state = {
    data: { id: "", logisticEventTypeCode: "", logisticEventDuration: "", logisticLocation: "", logisticEventPeriod: "", logisticEventDateTime: "", logisticEventDateTimeId: "", logisticEventPeriodId: "", logisticEventDurationId: "", logisticEventTypeCodeId: "", logisticLocationId: "", },
    logisticEventDateTimes: [],
    logisticEventPeriods: [],
    logisticEventDurations: [],
    logisticEventTypeCodes: [],
    logisticLocations: [],
    errors: {}
  };

  async populateForm() {
    try {
        const logisticeventtypeId = this.props.match.params.id;
        const { data } = await getLogisticeventtype(logisticeventtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatelogisticEventDateTimes() {
    const { data } = await getDateoptionaltimetypes();
    this.setState({ logisticEventDateTimes: data });
  }

  async populatelogisticEventPeriods() {
    const { data } = await getDatetimerangetypes();
    this.setState({ logisticEventPeriods: data });
  }

  async populatelogisticEventDurations() {
    const { data } = await getTimemeasurementtypes();
    this.setState({ logisticEventDurations: data });
  }

  async populatelogisticEventTypeCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ logisticEventTypeCodes: data });
  }

  async populatelogisticLocations() {
    const { data } = await getLogisticlocationtypes();
    this.setState({ logisticLocations: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatelogisticEventDateTimes();
    await this.populatelogisticEventPeriods();
    await this.populatelogisticEventDurations();
    await this.populatelogisticEventTypeCodes();
    await this.populatelogisticLocations();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/logisticeventtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Logisticeventtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Event Type Code : 
                 {this.state.data["logisticEventTypeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Event Duration : 
                 {this.state.data["logisticEventDuration"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Location : 
                 {this.state.data["logisticLocation"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Event Period : 
                 {this.state.data["logisticEventPeriod"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Event Date Time : 
                 {this.state.data["logisticEventDateTime"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Event Date Time : 
                  {this.state.logisticEventDateTimes.map(Dateoptionaltimetype => 
                      this.state.data["logisticEventDateTimeId"] == Dateoptionaltimetype._id ? " "+ Dateoptionaltimetype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Event Period : 
                  {this.state.logisticEventPeriods.map(Datetimerangetype => 
                      this.state.data["logisticEventPeriodId"] == Datetimerangetype._id ? " "+ Datetimerangetype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Event Duration : 
                  {this.state.logisticEventDurations.map(Timemeasurementtype => 
                      this.state.data["logisticEventDurationId"] == Timemeasurementtype._id ? " "+ Timemeasurementtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Event Type Code : 
                  {this.state.logisticEventTypeCodes.map(Enumerationlibrary => 
                      this.state.data["logisticEventTypeCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Location : 
                  {this.state.logisticLocations.map(Logisticlocationtype => 
                      this.state.data["logisticLocationId"] == Logisticlocationtype._id ? " "+ Logisticlocationtype.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default LogisticeventtypeDetails;