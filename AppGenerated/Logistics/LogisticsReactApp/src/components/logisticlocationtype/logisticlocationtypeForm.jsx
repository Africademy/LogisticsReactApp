import React, { Component } from "react";
import Joi from "joi-browser";
import { saveLogisticlocationtype, getLogisticlocationtype } from "../../services/logisticlocationtypeService";
import { getDescription200types } from "../../services/description200typeService";
import { getIdentifiertypes } from "../../services/identifiertypeService";
import { getOperatinghourstypes } from "../../services/operatinghourstypeService";
import { getSpecialoperatinghourstypes } from "../../services/specialoperatinghourstypeService";
import { getAddresss } from "../../services/addressService";
import { getContacttypes } from "../../services/contacttypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createLogisticlocationtype extends Component{

 constructor(props){
super(props);
    this.populatelocationSpecificInstructionss = this.populatelocationSpecificInstructionss.bind(this);
    this.populateadditionalLocationIdentifications = this.populateadditionalLocationIdentifications.bind(this);
    this.populateregularOperatingHourss = this.populateregularOperatingHourss.bind(this);
    this.populatespecialOperatingHourss = this.populatespecialOperatingHourss.bind(this);
    this.populateaddresss = this.populateaddresss.bind(this);
    this.populatecontacts = this.populatecontacts.bind(this);
    this.populateunLocationCodes = this.populateunLocationCodes.bind(this);
}  state = {
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

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    unLocationCode:  Joi.number()



      .label("unLocationCode"),
    gln:  Joi.string()
      .allow('').allow(null)



      .label("gln"),
    additionalLocationIdentification:  Joi.number()



      .label("additionalLocationIdentification"),
    sublocationIdentification:  Joi.string()
      .allow('').allow(null)



      .label("sublocationIdentification"),
    locationName:  Joi.string()
      .allow('').allow(null)



      .label("locationName"),
    locationSpecificInstructions:  Joi.number()



      .label("locationSpecificInstructions"),
    utcOffset:  Joi.number()



      .label("utcOffset"),
    address:  Joi.number()



      .label("address"),
    contact:  Joi.number()



      .label("contact"),
    regularOperatingHours:  Joi.number()



      .label("regularOperatingHours"),
    specialOperatingHours:  Joi.number()



      .label("specialOperatingHours"),
    locationSpecificInstructionsId:  Joi.string()
      .required()
      .label("locationSpecificInstructionsId"),
    additionalLocationIdentificationId:  Joi.string()
      .required()
      .label("additionalLocationIdentificationId"),
    regularOperatingHoursId:  Joi.string()
      .required()
      .label("regularOperatingHoursId"),
    specialOperatingHoursId:  Joi.string()
      .required()
      .label("specialOperatingHoursId"),
    addressId:  Joi.string()
      .required()
      .label("addressId"),
    contactId:  Joi.string()
      .required()
      .label("contactId"),
    unLocationCodeId:  Joi.string()
      .required()
      .label("unLocationCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const logisticlocationtypeId = this.props.match.params.id;
      if(logisticlocationtypeId!=="new"){
        const { data } = await getLogisticlocationtype(logisticlocationtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatelocationSpecificInstructionss() {
    const { data: locationSpecificInstructionss } = await getDescription200types();
    this.setState({ locationSpecificInstructionss: locationSpecificInstructionss });
  }

  async populateadditionalLocationIdentifications() {
    const { data: additionalLocationIdentifications } = await getIdentifiertypes();
    this.setState({ additionalLocationIdentifications: additionalLocationIdentifications });
  }

  async populateregularOperatingHourss() {
    const { data: regularOperatingHourss } = await getOperatinghourstypes();
    this.setState({ regularOperatingHourss: regularOperatingHourss });
  }

  async populatespecialOperatingHourss() {
    const { data: specialOperatingHourss } = await getSpecialoperatinghourstypes();
    this.setState({ specialOperatingHourss: specialOperatingHourss });
  }

  async populateaddresss() {
    const { data: addresss } = await getAddresss();
    this.setState({ addresss: addresss });
  }

  async populatecontacts() {
    const { data: contacts } = await getContacttypes();
    this.setState({ contacts: contacts });
  }

  async populateunLocationCodes() {
    const { data: unLocationCodes } = await getEnumerationlibrarys();
    this.setState({ unLocationCodes: unLocationCodes });
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
    await saveLogisticlocationtype(this.state.data);
    this.props.history.push("/logisticlocationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Logisticlocationtype Form</h1>
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
              <label htmlFor="unLocationCode">Un Location Code</label>
              <input
                value={this.state.data["unLocationCode"]}
                onChange={this.handleChange}
                name="unLocationCode"
                id="unLocationCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["unLocationCode"] && <div className="alert alert-danger">{this.state.errors["unLocationCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="gln">Gln</label>
              <input
                value={this.state.data["gln"]}
                onChange={this.handleChange}
                name="gln"
                id="gln"
                type="text"
                className="form-control"
              />
              {this.state.errors["gln"] && <div className="alert alert-danger">{this.state.errors["gln"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalLocationIdentification">Additional Location Identification</label>
              <input
                value={this.state.data["additionalLocationIdentification"]}
                onChange={this.handleChange}
                name="additionalLocationIdentification"
                id="additionalLocationIdentification"
                type="number"
                className="form-control"
              />
              {this.state.errors["additionalLocationIdentification"] && <div className="alert alert-danger">{this.state.errors["additionalLocationIdentification"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="sublocationIdentification">Sublocation Identification</label>
              <input
                value={this.state.data["sublocationIdentification"]}
                onChange={this.handleChange}
                name="sublocationIdentification"
                id="sublocationIdentification"
                type="text"
                className="form-control"
              />
              {this.state.errors["sublocationIdentification"] && <div className="alert alert-danger">{this.state.errors["sublocationIdentification"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="locationName">Location Name</label>
              <input
                value={this.state.data["locationName"]}
                onChange={this.handleChange}
                name="locationName"
                id="locationName"
                type="text"
                className="form-control"
              />
              {this.state.errors["locationName"] && <div className="alert alert-danger">{this.state.errors["locationName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="locationSpecificInstructions">Location Specific Instructions</label>
              <input
                value={this.state.data["locationSpecificInstructions"]}
                onChange={this.handleChange}
                name="locationSpecificInstructions"
                id="locationSpecificInstructions"
                type="number"
                className="form-control"
              />
              {this.state.errors["locationSpecificInstructions"] && <div className="alert alert-danger">{this.state.errors["locationSpecificInstructions"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="utcOffset">Utc Offset</label>
              <input
                value={this.state.data["utcOffset"]}
                onChange={this.handleChange}
                name="utcOffset"
                id="utcOffset"
                type="number"
                className="form-control"
              />
              {this.state.errors["utcOffset"] && <div className="alert alert-danger">{this.state.errors["utcOffset"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                value={this.state.data["address"]}
                onChange={this.handleChange}
                name="address"
                id="address"
                type="number"
                className="form-control"
              />
              {this.state.errors["address"] && <div className="alert alert-danger">{this.state.errors["address"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <input
                value={this.state.data["contact"]}
                onChange={this.handleChange}
                name="contact"
                id="contact"
                type="number"
                className="form-control"
              />
              {this.state.errors["contact"] && <div className="alert alert-danger">{this.state.errors["contact"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="regularOperatingHours">Regular Operating Hours</label>
              <input
                value={this.state.data["regularOperatingHours"]}
                onChange={this.handleChange}
                name="regularOperatingHours"
                id="regularOperatingHours"
                type="number"
                className="form-control"
              />
              {this.state.errors["regularOperatingHours"] && <div className="alert alert-danger">{this.state.errors["regularOperatingHours"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="specialOperatingHours">Special Operating Hours</label>
              <input
                value={this.state.data["specialOperatingHours"]}
                onChange={this.handleChange}
                name="specialOperatingHours"
                id="specialOperatingHours"
                type="number"
                className="form-control"
              />
              {this.state.errors["specialOperatingHours"] && <div className="alert alert-danger">{this.state.errors["specialOperatingHours"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="locationSpecificInstructionsId">          Location Specific Instructions <a target="_blank" href="/Description200types/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatelocationSpecificInstructionss}> Refresh</a> </label>
              <select
                value={this.state.data["locationSpecificInstructionsId"]}
                onChange={this.handleChange}
                name="locationSpecificInstructionsId"
                id="locationSpecificInstructionsId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Description200type
                  </option>
                  {this.state.locationSpecificInstructionss.map(Description200type => (
                    <option key={Description200type._id} value={Description200type._id}>
                      {Description200type.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["locationSpecificInstructionsId"] && <div className="alert alert-danger">{this.state.errors["locationSpecificInstructionsId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalLocationIdentificationId">          Additional Location Identification <a target="_blank" href="/Identifiertypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateadditionalLocationIdentifications}> Refresh</a> </label>
              <select
                value={this.state.data["additionalLocationIdentificationId"]}
                onChange={this.handleChange}
                name="additionalLocationIdentificationId"
                id="additionalLocationIdentificationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Identifiertype
                  </option>
                  {this.state.additionalLocationIdentifications.map(Identifiertype => (
                    <option key={Identifiertype._id} value={Identifiertype._id}>
                      {Identifiertype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["additionalLocationIdentificationId"] && <div className="alert alert-danger">{this.state.errors["additionalLocationIdentificationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="regularOperatingHoursId">          Regular Operating Hours <a target="_blank" href="/Operatinghourstypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateregularOperatingHourss}> Refresh</a> </label>
              <select
                value={this.state.data["regularOperatingHoursId"]}
                onChange={this.handleChange}
                name="regularOperatingHoursId"
                id="regularOperatingHoursId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Operatinghourstype
                  </option>
                  {this.state.regularOperatingHourss.map(Operatinghourstype => (
                    <option key={Operatinghourstype._id} value={Operatinghourstype._id}>
                      {Operatinghourstype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["regularOperatingHoursId"] && <div className="alert alert-danger">{this.state.errors["regularOperatingHoursId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="specialOperatingHoursId">          Special Operating Hours <a target="_blank" href="/Specialoperatinghourstypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatespecialOperatingHourss}> Refresh</a> </label>
              <select
                value={this.state.data["specialOperatingHoursId"]}
                onChange={this.handleChange}
                name="specialOperatingHoursId"
                id="specialOperatingHoursId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Specialoperatinghourstype
                  </option>
                  {this.state.specialOperatingHourss.map(Specialoperatinghourstype => (
                    <option key={Specialoperatinghourstype._id} value={Specialoperatinghourstype._id}>
                      {Specialoperatinghourstype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["specialOperatingHoursId"] && <div className="alert alert-danger">{this.state.errors["specialOperatingHoursId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="addressId">          Address <a target="_blank" href="/Addresss/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateaddresss}> Refresh</a> </label>
              <select
                value={this.state.data["addressId"]}
                onChange={this.handleChange}
                name="addressId"
                id="addressId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Address
                  </option>
                  {this.state.addresss.map(Address => (
                    <option key={Address._id} value={Address._id}>
                      {Address.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["addressId"] && <div className="alert alert-danger">{this.state.errors["addressId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="contactId">          Contact <a target="_blank" href="/Contacttypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatecontacts}> Refresh</a> </label>
              <select
                value={this.state.data["contactId"]}
                onChange={this.handleChange}
                name="contactId"
                id="contactId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Contacttype
                  </option>
                  {this.state.contacts.map(Contacttype => (
                    <option key={Contacttype._id} value={Contacttype._id}>
                      {Contacttype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["contactId"] && <div className="alert alert-danger">{this.state.errors["contactId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="unLocationCodeId">          Un Location Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateunLocationCodes}> Refresh</a> </label>
              <select
                value={this.state.data["unLocationCodeId"]}
                onChange={this.handleChange}
                name="unLocationCodeId"
                id="unLocationCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.unLocationCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["unLocationCodeId"] && <div className="alert alert-danger">{this.state.errors["unLocationCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createLogisticlocationtype;