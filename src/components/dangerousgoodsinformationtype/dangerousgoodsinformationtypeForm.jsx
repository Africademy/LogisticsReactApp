import React, { Component } from "react";
import Joi from "joi-browser";
import { saveDangerousgoodsinformationtype, getDangerousgoodsinformationtype } from "../../services/dangerousgoodsinformationtypeService";
import { getContacttypes } from "../../services/contacttypeService";
import { getDangerousgoodsregulationinformationtypes } from "../../services/dangerousgoodsregulationinformationtypeService";
import { getDescription1000types } from "../../services/description1000typeService";
import { getDescription200types } from "../../services/description200typeService";
import { getIdentifiertypes } from "../../services/identifiertypeService";

class createDangerousgoodsinformationtype extends Component{

 constructor(props){
super(props);
    this.populatecontacts = this.populatecontacts.bind(this);
    this.populatedangerousGoodsRegulationInformations = this.populatedangerousGoodsRegulationInformations.bind(this);
    this.populatedangerousGoodsDescriptions = this.populatedangerousGoodsDescriptions.bind(this);
    this.populatedangerousGoodsShippingNames = this.populatedangerousGoodsShippingNames.bind(this);
    this.populatedangerousGoodsTechnicalNames = this.populatedangerousGoodsTechnicalNames.bind(this);
    this.populatedangerousGoodsUNIdentifiers = this.populatedangerousGoodsUNIdentifiers.bind(this);
}  state = {
    data: { id: "", dangerousGoodsUNIdentifier: "", dangerousGoodsShippingName: "", dangerousGoodsTechnicalName: "", dangerousGoodsDescription: "", contact: "", dangerousGoodsRegulationInformation: "", contactId: "", dangerousGoodsRegulationInformationId: "", dangerousGoodsDescriptionId: "", dangerousGoodsShippingNameId: "", dangerousGoodsTechnicalNameId: "", dangerousGoodsUNIdentifierId: "", },
    contacts: [],
    dangerousGoodsRegulationInformations: [],
    dangerousGoodsDescriptions: [],
    dangerousGoodsShippingNames: [],
    dangerousGoodsTechnicalNames: [],
    dangerousGoodsUNIdentifiers: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    dangerousGoodsUNIdentifier:  Joi.number()



      .label("dangerousGoodsUNIdentifier"),
    dangerousGoodsShippingName:  Joi.number()



      .label("dangerousGoodsShippingName"),
    dangerousGoodsTechnicalName:  Joi.number()



      .label("dangerousGoodsTechnicalName"),
    dangerousGoodsDescription:  Joi.number()



      .label("dangerousGoodsDescription"),
    contact:  Joi.number()



      .label("contact"),
    dangerousGoodsRegulationInformation:  Joi.number()



      .label("dangerousGoodsRegulationInformation"),
    contactId:  Joi.string()
      .required()
      .label("contactId"),
    dangerousGoodsRegulationInformationId:  Joi.string()
      .required()
      .label("dangerousGoodsRegulationInformationId"),
    dangerousGoodsDescriptionId:  Joi.string()
      .required()
      .label("dangerousGoodsDescriptionId"),
    dangerousGoodsShippingNameId:  Joi.string()
      .required()
      .label("dangerousGoodsShippingNameId"),
    dangerousGoodsTechnicalNameId:  Joi.string()
      .required()
      .label("dangerousGoodsTechnicalNameId"),
    dangerousGoodsUNIdentifierId:  Joi.string()
      .required()
      .label("dangerousGoodsUNIdentifierId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const dangerousgoodsinformationtypeId = this.props.match.params.id;
      if(dangerousgoodsinformationtypeId!=="new"){
        const { data } = await getDangerousgoodsinformationtype(dangerousgoodsinformationtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatecontacts() {
    const { data: contacts } = await getContacttypes();
    this.setState({ contacts: contacts });
  }

  async populatedangerousGoodsRegulationInformations() {
    const { data: dangerousGoodsRegulationInformations } = await getDangerousgoodsregulationinformationtypes();
    this.setState({ dangerousGoodsRegulationInformations: dangerousGoodsRegulationInformations });
  }

  async populatedangerousGoodsDescriptions() {
    const { data: dangerousGoodsDescriptions } = await getDescription1000types();
    this.setState({ dangerousGoodsDescriptions: dangerousGoodsDescriptions });
  }

  async populatedangerousGoodsShippingNames() {
    const { data: dangerousGoodsShippingNames } = await getDescription200types();
    this.setState({ dangerousGoodsShippingNames: dangerousGoodsShippingNames });
  }

  async populatedangerousGoodsTechnicalNames() {
    const { data: dangerousGoodsTechnicalNames } = await getDescription200types();
    this.setState({ dangerousGoodsTechnicalNames: dangerousGoodsTechnicalNames });
  }

  async populatedangerousGoodsUNIdentifiers() {
    const { data: dangerousGoodsUNIdentifiers } = await getIdentifiertypes();
    this.setState({ dangerousGoodsUNIdentifiers: dangerousGoodsUNIdentifiers });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatecontacts();
    await this.populatedangerousGoodsRegulationInformations();
    await this.populatedangerousGoodsDescriptions();
    await this.populatedangerousGoodsShippingNames();
    await this.populatedangerousGoodsTechnicalNames();
    await this.populatedangerousGoodsUNIdentifiers();
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
    await saveDangerousgoodsinformationtype(this.state.data);
    this.props.history.push("/dangerousgoodsinformationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Dangerousgoodsinformationtype Form</h1>
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
              <label htmlFor="dangerousGoodsUNIdentifier">Dangerous Goods U N Identifier</label>
              <input
                value={this.state.data["dangerousGoodsUNIdentifier"]}
                onChange={this.handleChange}
                name="dangerousGoodsUNIdentifier"
                id="dangerousGoodsUNIdentifier"
                type="number"
                className="form-control"
              />
              {this.state.errors["dangerousGoodsUNIdentifier"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsUNIdentifier"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsShippingName">Dangerous Goods Shipping Name</label>
              <input
                value={this.state.data["dangerousGoodsShippingName"]}
                onChange={this.handleChange}
                name="dangerousGoodsShippingName"
                id="dangerousGoodsShippingName"
                type="number"
                className="form-control"
              />
              {this.state.errors["dangerousGoodsShippingName"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsShippingName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsTechnicalName">Dangerous Goods Technical Name</label>
              <input
                value={this.state.data["dangerousGoodsTechnicalName"]}
                onChange={this.handleChange}
                name="dangerousGoodsTechnicalName"
                id="dangerousGoodsTechnicalName"
                type="number"
                className="form-control"
              />
              {this.state.errors["dangerousGoodsTechnicalName"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsTechnicalName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsDescription">Dangerous Goods Description</label>
              <input
                value={this.state.data["dangerousGoodsDescription"]}
                onChange={this.handleChange}
                name="dangerousGoodsDescription"
                id="dangerousGoodsDescription"
                type="number"
                className="form-control"
              />
              {this.state.errors["dangerousGoodsDescription"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsDescription"]}</div>}
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
              <label htmlFor="dangerousGoodsRegulationInformation">Dangerous Goods Regulation Information</label>
              <input
                value={this.state.data["dangerousGoodsRegulationInformation"]}
                onChange={this.handleChange}
                name="dangerousGoodsRegulationInformation"
                id="dangerousGoodsRegulationInformation"
                type="number"
                className="form-control"
              />
              {this.state.errors["dangerousGoodsRegulationInformation"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsRegulationInformation"]}</div>}
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
              <label htmlFor="dangerousGoodsRegulationInformationId">          Dangerous Goods Regulation Information <a target="_blank" href="/Dangerousgoodsregulationinformationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedangerousGoodsRegulationInformations}> Refresh</a> </label>
              <select
                value={this.state.data["dangerousGoodsRegulationInformationId"]}
                onChange={this.handleChange}
                name="dangerousGoodsRegulationInformationId"
                id="dangerousGoodsRegulationInformationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Dangerousgoodsregulationinformationtype
                  </option>
                  {this.state.dangerousGoodsRegulationInformations.map(Dangerousgoodsregulationinformationtype => (
                    <option key={Dangerousgoodsregulationinformationtype._id} value={Dangerousgoodsregulationinformationtype._id}>
                      {Dangerousgoodsregulationinformationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dangerousGoodsRegulationInformationId"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsRegulationInformationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsDescriptionId">          Dangerous Goods Description <a target="_blank" href="/Description1000types/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedangerousGoodsDescriptions}> Refresh</a> </label>
              <select
                value={this.state.data["dangerousGoodsDescriptionId"]}
                onChange={this.handleChange}
                name="dangerousGoodsDescriptionId"
                id="dangerousGoodsDescriptionId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Description1000type
                  </option>
                  {this.state.dangerousGoodsDescriptions.map(Description1000type => (
                    <option key={Description1000type._id} value={Description1000type._id}>
                      {Description1000type.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dangerousGoodsDescriptionId"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsDescriptionId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsShippingNameId">          Dangerous Goods Shipping Name <a target="_blank" href="/Description200types/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedangerousGoodsShippingNames}> Refresh</a> </label>
              <select
                value={this.state.data["dangerousGoodsShippingNameId"]}
                onChange={this.handleChange}
                name="dangerousGoodsShippingNameId"
                id="dangerousGoodsShippingNameId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Description200type
                  </option>
                  {this.state.dangerousGoodsShippingNames.map(Description200type => (
                    <option key={Description200type._id} value={Description200type._id}>
                      {Description200type.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dangerousGoodsShippingNameId"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsShippingNameId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsTechnicalNameId">          Dangerous Goods Technical Name <a target="_blank" href="/Description200types/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedangerousGoodsTechnicalNames}> Refresh</a> </label>
              <select
                value={this.state.data["dangerousGoodsTechnicalNameId"]}
                onChange={this.handleChange}
                name="dangerousGoodsTechnicalNameId"
                id="dangerousGoodsTechnicalNameId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Description200type
                  </option>
                  {this.state.dangerousGoodsTechnicalNames.map(Description200type => (
                    <option key={Description200type._id} value={Description200type._id}>
                      {Description200type.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dangerousGoodsTechnicalNameId"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsTechnicalNameId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsUNIdentifierId">          Dangerous Goods U N Identifier <a target="_blank" href="/Identifiertypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedangerousGoodsUNIdentifiers}> Refresh</a> </label>
              <select
                value={this.state.data["dangerousGoodsUNIdentifierId"]}
                onChange={this.handleChange}
                name="dangerousGoodsUNIdentifierId"
                id="dangerousGoodsUNIdentifierId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Identifiertype
                  </option>
                  {this.state.dangerousGoodsUNIdentifiers.map(Identifiertype => (
                    <option key={Identifiertype._id} value={Identifiertype._id}>
                      {Identifiertype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dangerousGoodsUNIdentifierId"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsUNIdentifierId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createDangerousgoodsinformationtype;