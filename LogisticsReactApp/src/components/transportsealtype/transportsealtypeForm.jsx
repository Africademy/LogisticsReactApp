import React, { Component } from "react";
import Joi from "joi-browser";
import { saveTransportsealtype, getTransportsealtype } from "../../services/transportsealtypeService";
import { getIdentifiertypes } from "../../services/identifiertypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createTransportsealtype extends Component{

 constructor(props){
super(props);
    this.populatesealIdentifications = this.populatesealIdentifications.bind(this);
    this.populatesealTypeCodes = this.populatesealTypeCodes.bind(this);
    this.populatesealAffixingPartyRoles = this.populatesealAffixingPartyRoles.bind(this);
    this.populatesealConditionCodes = this.populatesealConditionCodes.bind(this);
}  state = {
    data: { id: "", sealIdentification: "", sealTypeCode: "", sealAffixingPartyRole: "", sealConditionCode: "", sealIdentificationId: "", sealTypeCodeId: "", sealAffixingPartyRoleId: "", sealConditionCodeId: "", },
    sealIdentifications: [],
    sealTypeCodes: [],
    sealAffixingPartyRoles: [],
    sealConditionCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    sealIdentification:  Joi.number()



      .label("sealIdentification"),
    sealTypeCode:  Joi.number()



      .label("sealTypeCode"),
    sealAffixingPartyRole:  Joi.number()



      .label("sealAffixingPartyRole"),
    sealConditionCode:  Joi.number()



      .label("sealConditionCode"),
    sealIdentificationId:  Joi.string()
      .required()
      .label("sealIdentificationId"),
    sealTypeCodeId:  Joi.string()
      .required()
      .label("sealTypeCodeId"),
    sealAffixingPartyRoleId:  Joi.string()
      .required()
      .label("sealAffixingPartyRoleId"),
    sealConditionCodeId:  Joi.string()
      .required()
      .label("sealConditionCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const transportsealtypeId = this.props.match.params.id;
      if(transportsealtypeId!=="new"){
        const { data } = await getTransportsealtype(transportsealtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatesealIdentifications() {
    const { data: sealIdentifications } = await getIdentifiertypes();
    this.setState({ sealIdentifications: sealIdentifications });
  }

  async populatesealTypeCodes() {
    const { data: sealTypeCodes } = await getEnumerationlibrarys();
    this.setState({ sealTypeCodes: sealTypeCodes });
  }

  async populatesealAffixingPartyRoles() {
    const { data: sealAffixingPartyRoles } = await getEnumerationlibrarys();
    this.setState({ sealAffixingPartyRoles: sealAffixingPartyRoles });
  }

  async populatesealConditionCodes() {
    const { data: sealConditionCodes } = await getEnumerationlibrarys();
    this.setState({ sealConditionCodes: sealConditionCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatesealIdentifications();
    await this.populatesealTypeCodes();
    await this.populatesealAffixingPartyRoles();
    await this.populatesealConditionCodes();
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
    await saveTransportsealtype(this.state.data);
    this.props.history.push("/transportsealtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportsealtype Form</h1>
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
              <label htmlFor="sealIdentification">Seal Identification</label>
              <input
                value={this.state.data["sealIdentification"]}
                onChange={this.handleChange}
                name="sealIdentification"
                id="sealIdentification"
                type="number"
                className="form-control"
              />
              {this.state.errors["sealIdentification"] && <div className="alert alert-danger">{this.state.errors["sealIdentification"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="sealTypeCode">Seal Type Code</label>
              <input
                value={this.state.data["sealTypeCode"]}
                onChange={this.handleChange}
                name="sealTypeCode"
                id="sealTypeCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["sealTypeCode"] && <div className="alert alert-danger">{this.state.errors["sealTypeCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="sealAffixingPartyRole">Seal Affixing Party Role</label>
              <input
                value={this.state.data["sealAffixingPartyRole"]}
                onChange={this.handleChange}
                name="sealAffixingPartyRole"
                id="sealAffixingPartyRole"
                type="number"
                className="form-control"
              />
              {this.state.errors["sealAffixingPartyRole"] && <div className="alert alert-danger">{this.state.errors["sealAffixingPartyRole"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="sealConditionCode">Seal Condition Code</label>
              <input
                value={this.state.data["sealConditionCode"]}
                onChange={this.handleChange}
                name="sealConditionCode"
                id="sealConditionCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["sealConditionCode"] && <div className="alert alert-danger">{this.state.errors["sealConditionCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="sealIdentificationId">          Seal Identification <a target="_blank" href="/Identifiertypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatesealIdentifications}> Refresh</a> </label>
              <select
                value={this.state.data["sealIdentificationId"]}
                onChange={this.handleChange}
                name="sealIdentificationId"
                id="sealIdentificationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Identifiertype
                  </option>
                  {this.state.sealIdentifications.map(Identifiertype => (
                    <option key={Identifiertype._id} value={Identifiertype._id}>
                      {Identifiertype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["sealIdentificationId"] && <div className="alert alert-danger">{this.state.errors["sealIdentificationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="sealTypeCodeId">          Seal Type Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatesealTypeCodes}> Refresh</a> </label>
              <select
                value={this.state.data["sealTypeCodeId"]}
                onChange={this.handleChange}
                name="sealTypeCodeId"
                id="sealTypeCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.sealTypeCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["sealTypeCodeId"] && <div className="alert alert-danger">{this.state.errors["sealTypeCodeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="sealAffixingPartyRoleId">          Seal Affixing Party Role <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatesealAffixingPartyRoles}> Refresh</a> </label>
              <select
                value={this.state.data["sealAffixingPartyRoleId"]}
                onChange={this.handleChange}
                name="sealAffixingPartyRoleId"
                id="sealAffixingPartyRoleId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.sealAffixingPartyRoles.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["sealAffixingPartyRoleId"] && <div className="alert alert-danger">{this.state.errors["sealAffixingPartyRoleId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="sealConditionCodeId">          Seal Condition Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatesealConditionCodes}> Refresh</a> </label>
              <select
                value={this.state.data["sealConditionCodeId"]}
                onChange={this.handleChange}
                name="sealConditionCodeId"
                id="sealConditionCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.sealConditionCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["sealConditionCodeId"] && <div className="alert alert-danger">{this.state.errors["sealConditionCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createTransportsealtype;