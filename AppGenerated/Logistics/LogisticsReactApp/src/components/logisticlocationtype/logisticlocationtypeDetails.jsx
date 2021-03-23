import React, { Component } from "react";
import { getLogisticlocationtype } from "../../services/logisticlocationtypeService";
import { getDescription200types } from "../../services/description200typeService";
import { getIdentifiertypes } from "../../services/identifiertypeService";
import { getOperatinghourstypes } from "../../services/operatinghourstypeService";
import { getSpecialoperatinghourstypes } from "../../services/specialoperatinghourstypeService";
import { getAddresss } from "../../services/addressService";
import { getContacttypes } from "../../services/contacttypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class LogisticlocationtypeDetails extends Component{

  state = {
    data: { id: "", unLocationCode: "", gln: "", additionalLocationIdentification: "", sublocationIdentification: "", locationName: "", locationSpecificInstructions: "", utcOffset: "", address: "", contact: "", regularOperatingHours: "", specialOperatingHours: "", locationSpecificInstructionsId: "", additionalLocationIdentificationId: "", regularOperatingHoursId: "", specialOperatingHoursId: "", addressId: "", contactId: "", unLocationCodeId: "", },
    locationSpecificInstructionss: [],
    additionalLocationIdentifications: [],
    regularOperatingHourss: [],
    specialOperatingHourss: [],
    addresss: [],
    contacts: [],
    unLocationCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const logisticlocationtypeId = this.props.match.params.id;
        const { data } = await getLogisticlocationtype(logisticlocationtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatelocationSpecificInstructionss() {
    const { data } = await getDescription200types();
    this.setState({ locationSpecificInstructionss: data });
  }

  async populateadditionalLocationIdentifications() {
    const { data } = await getIdentifiertypes();
    this.setState({ additionalLocationIdentifications: data });
  }

  async populateregularOperatingHourss() {
    const { data } = await getOperatinghourstypes();
    this.setState({ regularOperatingHourss: data });
  }

  async populatespecialOperatingHourss() {
    const { data } = await getSpecialoperatinghourstypes();
    this.setState({ specialOperatingHourss: data });
  }

  async populateaddresss() {
    const { data } = await getAddresss();
    this.setState({ addresss: data });
  }

  async populatecontacts() {
    const { data } = await getContacttypes();
    this.setState({ contacts: data });
  }

  async populateunLocationCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ unLocationCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatelocationSpecificInstructionss();
    await this.populateadditionalLocationIdentifications();
    await this.populateregularOperatingHourss();
    await this.populatespecialOperatingHourss();
    await this.populateaddresss();
    await this.populatecontacts();
    await this.populateunLocationCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/logisticlocationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Logisticlocationtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Un Location Code : 
                 {this.state.data["unLocationCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Gln : 
                 {this.state.data["gln"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Location Identification : 
                 {this.state.data["additionalLocationIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Sublocation Identification : 
                 {this.state.data["sublocationIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Location Name : 
                 {this.state.data["locationName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Location Specific Instructions : 
                 {this.state.data["locationSpecificInstructions"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Utc Offset : 
                 {this.state.data["utcOffset"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Address : 
                 {this.state.data["address"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Contact : 
                 {this.state.data["contact"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Regular Operating Hours : 
                 {this.state.data["regularOperatingHours"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Special Operating Hours : 
                 {this.state.data["specialOperatingHours"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Location Specific Instructions : 
                  {this.state.locationSpecificInstructionss.map(Description200type => 
                      this.state.data["locationSpecificInstructionsId"] == Description200type._id ? " "+ Description200type.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Location Identification : 
                  {this.state.additionalLocationIdentifications.map(Identifiertype => 
                      this.state.data["additionalLocationIdentificationId"] == Identifiertype._id ? " "+ Identifiertype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Regular Operating Hours : 
                  {this.state.regularOperatingHourss.map(Operatinghourstype => 
                      this.state.data["regularOperatingHoursId"] == Operatinghourstype._id ? " "+ Operatinghourstype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Special Operating Hours : 
                  {this.state.specialOperatingHourss.map(Specialoperatinghourstype => 
                      this.state.data["specialOperatingHoursId"] == Specialoperatinghourstype._id ? " "+ Specialoperatinghourstype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Address : 
                  {this.state.addresss.map(Address => 
                      this.state.data["addressId"] == Address._id ? " "+ Address.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Contact : 
                  {this.state.contacts.map(Contacttype => 
                      this.state.data["contactId"] == Contacttype._id ? " "+ Contacttype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Un Location Code : 
                  {this.state.unLocationCodes.map(Enumerationlibrary => 
                      this.state.data["unLocationCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default LogisticlocationtypeDetails;