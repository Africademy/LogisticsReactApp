import React, { Component } from "react";
import { getContacttype } from "../../services/contacttypeService";
import { getCommunicationchanneltypes } from "../../services/communicationchanneltypeService";
import { getDescription70types } from "../../services/description70typeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class ContacttypeDetails extends Component{

  state = {
    data: { id: "", contactTypeCode: "", personName: "", departmentName: "", jobTitle: "", responsibility: "", communicationChannel: "", afterHoursCommunicationChannel: "", communicationChannelId: "", afterHoursCommunicationChannelId: "", responsibilityId: "", contactTypeCodeId: "", },
    communicationChannels: [],
    afterHoursCommunicationChannels: [],
    responsibilitys: [],
    contactTypeCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const contacttypeId = this.props.match.params.id;
        const { data } = await getContacttype(contacttypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatecommunicationChannels() {
    const { data } = await getCommunicationchanneltypes();
    this.setState({ communicationChannels: data });
  }

  async populateafterHoursCommunicationChannels() {
    const { data } = await getCommunicationchanneltypes();
    this.setState({ afterHoursCommunicationChannels: data });
  }

  async populateresponsibilitys() {
    const { data } = await getDescription70types();
    this.setState({ responsibilitys: data });
  }

  async populatecontactTypeCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ contactTypeCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatecommunicationChannels();
    await this.populateafterHoursCommunicationChannels();
    await this.populateresponsibilitys();
    await this.populatecontactTypeCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/contacttypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Contacttype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Contact Type Code : 
                 {this.state.data["contactTypeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Person Name : 
                 {this.state.data["personName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Department Name : 
                 {this.state.data["departmentName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Job Title : 
                 {this.state.data["jobTitle"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Responsibility : 
                 {this.state.data["responsibility"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Communication Channel : 
                 {this.state.data["communicationChannel"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> After Hours Communication Channel : 
                 {this.state.data["afterHoursCommunicationChannel"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Communication Channel : 
                  {this.state.communicationChannels.map(Communicationchanneltype => 
                      this.state.data["communicationChannelId"] == Communicationchanneltype._id ? " "+ Communicationchanneltype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> After Hours Communication Channel : 
                  {this.state.afterHoursCommunicationChannels.map(Communicationchanneltype => 
                      this.state.data["afterHoursCommunicationChannelId"] == Communicationchanneltype._id ? " "+ Communicationchanneltype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Responsibility : 
                  {this.state.responsibilitys.map(Description70type => 
                      this.state.data["responsibilityId"] == Description70type._id ? " "+ Description70type.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Contact Type Code : 
                  {this.state.contactTypeCodes.map(Enumerationlibrary => 
                      this.state.data["contactTypeCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default ContacttypeDetails;