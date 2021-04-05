import React, { Component } from "react";
import Joi from "joi-browser";
import { saveContacttype, getContacttype } from "../../services/contacttypeService";
import { getCommunicationchanneltypes } from "../../services/communicationchanneltypeService";
import { getDescription70types } from "../../services/description70typeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createContacttype extends Component{

 constructor(props){
super(props);
    this.populatecommunicationChannels = this.populatecommunicationChannels.bind(this);
    this.populateafterHoursCommunicationChannels = this.populateafterHoursCommunicationChannels.bind(this);
    this.populateresponsibilitys = this.populateresponsibilitys.bind(this);
    this.populatecontactTypeCodes = this.populatecontactTypeCodes.bind(this);
}  state = {
    data: { id: "", contactTypeCode: "", personName: "", departmentName: "", jobTitle: "", responsibility: "", communicationChannel: "", afterHoursCommunicationChannel: "", communicationChannelId: "", afterHoursCommunicationChannelId: "", responsibilityId: "", contactTypeCodeId: "", },
    communicationChannels: [],
    afterHoursCommunicationChannels: [],
    responsibilitys: [],
    contactTypeCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    contactTypeCode:  Joi.number()



      .label("contactTypeCode"),
    personName:  Joi.string()
      .allow('').allow(null)



      .label("personName"),
    departmentName:  Joi.string()
      .allow('').allow(null)



      .label("departmentName"),
    jobTitle:  Joi.string()
      .allow('').allow(null)



      .label("jobTitle"),
    responsibility:  Joi.number()



      .label("responsibility"),
    communicationChannel:  Joi.number()



      .label("communicationChannel"),
    afterHoursCommunicationChannel:  Joi.number()



      .label("afterHoursCommunicationChannel"),
    communicationChannelId:  Joi.string()
      .required()
      .label("communicationChannelId"),
    afterHoursCommunicationChannelId:  Joi.string()
      .required()
      .label("afterHoursCommunicationChannelId"),
    responsibilityId:  Joi.string()
      .required()
      .label("responsibilityId"),
    contactTypeCodeId:  Joi.string()
      .required()
      .label("contactTypeCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const contacttypeId = this.props.match.params.id;
      if(contacttypeId!=="new"){
        const { data } = await getContacttype(contacttypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatecommunicationChannels() {
    const { data: communicationChannels } = await getCommunicationchanneltypes();
    this.setState({ communicationChannels: communicationChannels });
  }

  async populateafterHoursCommunicationChannels() {
    const { data: afterHoursCommunicationChannels } = await getCommunicationchanneltypes();
    this.setState({ afterHoursCommunicationChannels: afterHoursCommunicationChannels });
  }

  async populateresponsibilitys() {
    const { data: responsibilitys } = await getDescription70types();
    this.setState({ responsibilitys: responsibilitys });
  }

  async populatecontactTypeCodes() {
    const { data: contactTypeCodes } = await getEnumerationlibrarys();
    this.setState({ contactTypeCodes: contactTypeCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatecommunicationChannels();
    await this.populateafterHoursCommunicationChannels();
    await this.populateresponsibilitys();
    await this.populatecontactTypeCodes();
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
    await saveContacttype(this.state.data);
    this.props.history.push("/contacttypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Contacttype Form</h1>
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
              <label htmlFor="contactTypeCode">Contact Type Code</label>
              <input
                value={this.state.data["contactTypeCode"]}
                onChange={this.handleChange}
                name="contactTypeCode"
                id="contactTypeCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["contactTypeCode"] && <div className="alert alert-danger">{this.state.errors["contactTypeCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="personName">Person Name</label>
              <input
                value={this.state.data["personName"]}
                onChange={this.handleChange}
                name="personName"
                id="personName"
                type="text"
                className="form-control"
              />
              {this.state.errors["personName"] && <div className="alert alert-danger">{this.state.errors["personName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="departmentName">Department Name</label>
              <input
                value={this.state.data["departmentName"]}
                onChange={this.handleChange}
                name="departmentName"
                id="departmentName"
                type="text"
                className="form-control"
              />
              {this.state.errors["departmentName"] && <div className="alert alert-danger">{this.state.errors["departmentName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="jobTitle">Job Title</label>
              <input
                value={this.state.data["jobTitle"]}
                onChange={this.handleChange}
                name="jobTitle"
                id="jobTitle"
                type="text"
                className="form-control"
              />
              {this.state.errors["jobTitle"] && <div className="alert alert-danger">{this.state.errors["jobTitle"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="responsibility">Responsibility</label>
              <input
                value={this.state.data["responsibility"]}
                onChange={this.handleChange}
                name="responsibility"
                id="responsibility"
                type="number"
                className="form-control"
              />
              {this.state.errors["responsibility"] && <div className="alert alert-danger">{this.state.errors["responsibility"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="communicationChannel">Communication Channel</label>
              <input
                value={this.state.data["communicationChannel"]}
                onChange={this.handleChange}
                name="communicationChannel"
                id="communicationChannel"
                type="number"
                className="form-control"
              />
              {this.state.errors["communicationChannel"] && <div className="alert alert-danger">{this.state.errors["communicationChannel"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="afterHoursCommunicationChannel">After Hours Communication Channel</label>
              <input
                value={this.state.data["afterHoursCommunicationChannel"]}
                onChange={this.handleChange}
                name="afterHoursCommunicationChannel"
                id="afterHoursCommunicationChannel"
                type="number"
                className="form-control"
              />
              {this.state.errors["afterHoursCommunicationChannel"] && <div className="alert alert-danger">{this.state.errors["afterHoursCommunicationChannel"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="communicationChannelId">          Communication Channel <a target="_blank" href="/Communicationchanneltypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatecommunicationChannels}> Refresh</a> </label>
              <select
                value={this.state.data["communicationChannelId"]}
                onChange={this.handleChange}
                name="communicationChannelId"
                id="communicationChannelId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Communicationchanneltype
                  </option>
                  {this.state.communicationChannels.map(Communicationchanneltype => (
                    <option key={Communicationchanneltype._id} value={Communicationchanneltype._id}>
                      {Communicationchanneltype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["communicationChannelId"] && <div className="alert alert-danger">{this.state.errors["communicationChannelId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="afterHoursCommunicationChannelId">          After Hours Communication Channel <a target="_blank" href="/Communicationchanneltypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateafterHoursCommunicationChannels}> Refresh</a> </label>
              <select
                value={this.state.data["afterHoursCommunicationChannelId"]}
                onChange={this.handleChange}
                name="afterHoursCommunicationChannelId"
                id="afterHoursCommunicationChannelId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Communicationchanneltype
                  </option>
                  {this.state.afterHoursCommunicationChannels.map(Communicationchanneltype => (
                    <option key={Communicationchanneltype._id} value={Communicationchanneltype._id}>
                      {Communicationchanneltype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["afterHoursCommunicationChannelId"] && <div className="alert alert-danger">{this.state.errors["afterHoursCommunicationChannelId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="responsibilityId">          Responsibility <a target="_blank" href="/Description70types/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateresponsibilitys}> Refresh</a> </label>
              <select
                value={this.state.data["responsibilityId"]}
                onChange={this.handleChange}
                name="responsibilityId"
                id="responsibilityId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Description70type
                  </option>
                  {this.state.responsibilitys.map(Description70type => (
                    <option key={Description70type._id} value={Description70type._id}>
                      {Description70type.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["responsibilityId"] && <div className="alert alert-danger">{this.state.errors["responsibilityId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="contactTypeCodeId">          Contact Type Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatecontactTypeCodes}> Refresh</a> </label>
              <select
                value={this.state.data["contactTypeCodeId"]}
                onChange={this.handleChange}
                name="contactTypeCodeId"
                id="contactTypeCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.contactTypeCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["contactTypeCodeId"] && <div className="alert alert-danger">{this.state.errors["contactTypeCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createContacttype;