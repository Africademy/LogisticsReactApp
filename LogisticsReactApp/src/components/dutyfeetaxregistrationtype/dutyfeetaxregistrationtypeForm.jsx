import React, { Component } from "react";
import Joi from "joi-browser";
import { saveDutyfeetaxregistrationtype, getDutyfeetaxregistrationtype } from "../../services/dutyfeetaxregistrationtypeService";
import { getDescription80types } from "../../services/description80typeService";
import { getIdentifiertypes } from "../../services/identifiertypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createDutyfeetaxregistrationtype extends Component{

 constructor(props){
super(props);
    this.populatedutyFeeTaxDescriptions = this.populatedutyFeeTaxDescriptions.bind(this);
    this.populatedutyFeeTaxRegistrationIDs = this.populatedutyFeeTaxRegistrationIDs.bind(this);
    this.populatedutyFeeTaxTypeCodes = this.populatedutyFeeTaxTypeCodes.bind(this);
}  state = {
    data: { id: "", dutyFeeTaxRegistrationID: "", dutyFeeTaxTypeCode: "", dutyFeeTaxAgencyName: "", dutyFeeTaxDescription: "", dutyFeeTaxDescriptionId: "", dutyFeeTaxRegistrationIDId: "", dutyFeeTaxTypeCodeId: "", },
    dutyFeeTaxDescriptions: [],
    dutyFeeTaxRegistrationIDs: [],
    dutyFeeTaxTypeCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    dutyFeeTaxRegistrationID:  Joi.number()



      .label("dutyFeeTaxRegistrationID"),
    dutyFeeTaxTypeCode:  Joi.number()



      .label("dutyFeeTaxTypeCode"),
    dutyFeeTaxAgencyName:  Joi.string()
      .allow('').allow(null)



      .label("dutyFeeTaxAgencyName"),
    dutyFeeTaxDescription:  Joi.number()



      .label("dutyFeeTaxDescription"),
    dutyFeeTaxDescriptionId:  Joi.string()
      .required()
      .label("dutyFeeTaxDescriptionId"),
    dutyFeeTaxRegistrationIDId:  Joi.string()
      .required()
      .label("dutyFeeTaxRegistrationIDId"),
    dutyFeeTaxTypeCodeId:  Joi.string()
      .required()
      .label("dutyFeeTaxTypeCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const dutyfeetaxregistrationtypeId = this.props.match.params.id;
      if(dutyfeetaxregistrationtypeId!=="new"){
        const { data } = await getDutyfeetaxregistrationtype(dutyfeetaxregistrationtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatedutyFeeTaxDescriptions() {
    const { data: dutyFeeTaxDescriptions } = await getDescription80types();
    this.setState({ dutyFeeTaxDescriptions: dutyFeeTaxDescriptions });
  }

  async populatedutyFeeTaxRegistrationIDs() {
    const { data: dutyFeeTaxRegistrationIDs } = await getIdentifiertypes();
    this.setState({ dutyFeeTaxRegistrationIDs: dutyFeeTaxRegistrationIDs });
  }

  async populatedutyFeeTaxTypeCodes() {
    const { data: dutyFeeTaxTypeCodes } = await getEnumerationlibrarys();
    this.setState({ dutyFeeTaxTypeCodes: dutyFeeTaxTypeCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatedutyFeeTaxDescriptions();
    await this.populatedutyFeeTaxRegistrationIDs();
    await this.populatedutyFeeTaxTypeCodes();
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
    await saveDutyfeetaxregistrationtype(this.state.data);
    this.props.history.push("/dutyfeetaxregistrationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Dutyfeetaxregistrationtype Form</h1>
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
              <label htmlFor="dutyFeeTaxRegistrationID">Duty Fee Tax Registration I D</label>
              <input
                value={this.state.data["dutyFeeTaxRegistrationID"]}
                onChange={this.handleChange}
                name="dutyFeeTaxRegistrationID"
                id="dutyFeeTaxRegistrationID"
                type="number"
                className="form-control"
              />
              {this.state.errors["dutyFeeTaxRegistrationID"] && <div className="alert alert-danger">{this.state.errors["dutyFeeTaxRegistrationID"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dutyFeeTaxTypeCode">Duty Fee Tax Type Code</label>
              <input
                value={this.state.data["dutyFeeTaxTypeCode"]}
                onChange={this.handleChange}
                name="dutyFeeTaxTypeCode"
                id="dutyFeeTaxTypeCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["dutyFeeTaxTypeCode"] && <div className="alert alert-danger">{this.state.errors["dutyFeeTaxTypeCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dutyFeeTaxAgencyName">Duty Fee Tax Agency Name</label>
              <input
                value={this.state.data["dutyFeeTaxAgencyName"]}
                onChange={this.handleChange}
                name="dutyFeeTaxAgencyName"
                id="dutyFeeTaxAgencyName"
                type="text"
                className="form-control"
              />
              {this.state.errors["dutyFeeTaxAgencyName"] && <div className="alert alert-danger">{this.state.errors["dutyFeeTaxAgencyName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dutyFeeTaxDescription">Duty Fee Tax Description</label>
              <input
                value={this.state.data["dutyFeeTaxDescription"]}
                onChange={this.handleChange}
                name="dutyFeeTaxDescription"
                id="dutyFeeTaxDescription"
                type="number"
                className="form-control"
              />
              {this.state.errors["dutyFeeTaxDescription"] && <div className="alert alert-danger">{this.state.errors["dutyFeeTaxDescription"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dutyFeeTaxDescriptionId">          Duty Fee Tax Description <a target="_blank" href="/Description80types/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedutyFeeTaxDescriptions}> Refresh</a> </label>
              <select
                value={this.state.data["dutyFeeTaxDescriptionId"]}
                onChange={this.handleChange}
                name="dutyFeeTaxDescriptionId"
                id="dutyFeeTaxDescriptionId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Description80type
                  </option>
                  {this.state.dutyFeeTaxDescriptions.map(Description80type => (
                    <option key={Description80type._id} value={Description80type._id}>
                      {Description80type.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dutyFeeTaxDescriptionId"] && <div className="alert alert-danger">{this.state.errors["dutyFeeTaxDescriptionId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dutyFeeTaxRegistrationIDId">          Duty Fee Tax Registration I D <a target="_blank" href="/Identifiertypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedutyFeeTaxRegistrationIDs}> Refresh</a> </label>
              <select
                value={this.state.data["dutyFeeTaxRegistrationIDId"]}
                onChange={this.handleChange}
                name="dutyFeeTaxRegistrationIDId"
                id="dutyFeeTaxRegistrationIDId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Identifiertype
                  </option>
                  {this.state.dutyFeeTaxRegistrationIDs.map(Identifiertype => (
                    <option key={Identifiertype._id} value={Identifiertype._id}>
                      {Identifiertype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dutyFeeTaxRegistrationIDId"] && <div className="alert alert-danger">{this.state.errors["dutyFeeTaxRegistrationIDId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dutyFeeTaxTypeCodeId">          Duty Fee Tax Type Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedutyFeeTaxTypeCodes}> Refresh</a> </label>
              <select
                value={this.state.data["dutyFeeTaxTypeCodeId"]}
                onChange={this.handleChange}
                name="dutyFeeTaxTypeCodeId"
                id="dutyFeeTaxTypeCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.dutyFeeTaxTypeCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dutyFeeTaxTypeCodeId"] && <div className="alert alert-danger">{this.state.errors["dutyFeeTaxTypeCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createDutyfeetaxregistrationtype;