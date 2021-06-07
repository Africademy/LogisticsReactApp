import React, { Component } from "react";
import Joi from "joi-browser";
import { saveTransactionalpartytype, getTransactionalpartytype } from "../../services/transactionalpartytypeService";
import { getAdditionalpartyidentificationtypes } from "../../services/additionalpartyidentificationtypeService";
import { getDutyfeetaxregistrationtypes } from "../../services/dutyfeetaxregistrationtypeService";
import { getFinancialinstitutioninformationtypes } from "../../services/financialinstitutioninformationtypeService";
import { getOrganisationtypes } from "../../services/organisationtypeService";
import { getAddresss } from "../../services/addressService";
import { getContacttypes } from "../../services/contacttypeService";

class createTransactionalpartytype extends Component{

 constructor(props){
super(props);
    this.populateadditionalPartyIdentifications = this.populateadditionalPartyIdentifications.bind(this);
    this.populatedutyFeeTaxRegistrations = this.populatedutyFeeTaxRegistrations.bind(this);
    this.populatefinancialInstitutionInformations = this.populatefinancialInstitutionInformations.bind(this);
    this.populateorganisationDetailss = this.populateorganisationDetailss.bind(this);
    this.populateaddresss = this.populateaddresss.bind(this);
    this.populatecontacts = this.populatecontacts.bind(this);
}  state = {
    data: { id: "", gln: "", additionalPartyIdentification: "", address: "", contact: "", dutyFeeTaxRegistration: "", organisationDetails: "", financialInstitutionInformation: "", additionalPartyIdentificationId: "", dutyFeeTaxRegistrationId: "", financialInstitutionInformationId: "", organisationDetailsId: "", addressId: "", contactId: "", },
    additionalPartyIdentifications: [],
    dutyFeeTaxRegistrations: [],
    financialInstitutionInformations: [],
    organisationDetailss: [],
    addresss: [],
    contacts: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    gln:  Joi.string()
      .allow('').allow(null)



      .label("gln"),
    additionalPartyIdentification:  Joi.number()



      .label("additionalPartyIdentification"),
    address:  Joi.number()



      .label("address"),
    contact:  Joi.number()



      .label("contact"),
    dutyFeeTaxRegistration:  Joi.number()



      .label("dutyFeeTaxRegistration"),
    organisationDetails:  Joi.number()



      .label("organisationDetails"),
    financialInstitutionInformation:  Joi.number()



      .label("financialInstitutionInformation"),
    additionalPartyIdentificationId:  Joi.string()
      .required()
      .label("additionalPartyIdentificationId"),
    dutyFeeTaxRegistrationId:  Joi.string()
      .required()
      .label("dutyFeeTaxRegistrationId"),
    financialInstitutionInformationId:  Joi.string()
      .required()
      .label("financialInstitutionInformationId"),
    organisationDetailsId:  Joi.string()
      .required()
      .label("organisationDetailsId"),
    addressId:  Joi.string()
      .required()
      .label("addressId"),
    contactId:  Joi.string()
      .required()
      .label("contactId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const transactionalpartytypeId = this.props.match.params.id;
      if(transactionalpartytypeId!=="new"){
        const { data } = await getTransactionalpartytype(transactionalpartytypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateadditionalPartyIdentifications() {
    const { data: additionalPartyIdentifications } = await getAdditionalpartyidentificationtypes();
    this.setState({ additionalPartyIdentifications: additionalPartyIdentifications });
  }

  async populatedutyFeeTaxRegistrations() {
    const { data: dutyFeeTaxRegistrations } = await getDutyfeetaxregistrationtypes();
    this.setState({ dutyFeeTaxRegistrations: dutyFeeTaxRegistrations });
  }

  async populatefinancialInstitutionInformations() {
    const { data: financialInstitutionInformations } = await getFinancialinstitutioninformationtypes();
    this.setState({ financialInstitutionInformations: financialInstitutionInformations });
  }

  async populateorganisationDetailss() {
    const { data: organisationDetailss } = await getOrganisationtypes();
    this.setState({ organisationDetailss: organisationDetailss });
  }

  async populateaddresss() {
    const { data: addresss } = await getAddresss();
    this.setState({ addresss: addresss });
  }

  async populatecontacts() {
    const { data: contacts } = await getContacttypes();
    this.setState({ contacts: contacts });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateadditionalPartyIdentifications();
    await this.populatedutyFeeTaxRegistrations();
    await this.populatefinancialInstitutionInformations();
    await this.populateorganisationDetailss();
    await this.populateaddresss();
    await this.populatecontacts();
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
    await saveTransactionalpartytype(this.state.data);
    this.props.history.push("/transactionalpartytypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transactionalpartytype Form</h1>
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
              <label htmlFor="additionalPartyIdentification">Additional Party Identification</label>
              <input
                value={this.state.data["additionalPartyIdentification"]}
                onChange={this.handleChange}
                name="additionalPartyIdentification"
                id="additionalPartyIdentification"
                type="number"
                className="form-control"
              />
              {this.state.errors["additionalPartyIdentification"] && <div className="alert alert-danger">{this.state.errors["additionalPartyIdentification"]}</div>}
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
              <label htmlFor="dutyFeeTaxRegistration">Duty Fee Tax Registration</label>
              <input
                value={this.state.data["dutyFeeTaxRegistration"]}
                onChange={this.handleChange}
                name="dutyFeeTaxRegistration"
                id="dutyFeeTaxRegistration"
                type="number"
                className="form-control"
              />
              {this.state.errors["dutyFeeTaxRegistration"] && <div className="alert alert-danger">{this.state.errors["dutyFeeTaxRegistration"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="organisationDetails">Organisation Details</label>
              <input
                value={this.state.data["organisationDetails"]}
                onChange={this.handleChange}
                name="organisationDetails"
                id="organisationDetails"
                type="number"
                className="form-control"
              />
              {this.state.errors["organisationDetails"] && <div className="alert alert-danger">{this.state.errors["organisationDetails"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="financialInstitutionInformation">Financial Institution Information</label>
              <input
                value={this.state.data["financialInstitutionInformation"]}
                onChange={this.handleChange}
                name="financialInstitutionInformation"
                id="financialInstitutionInformation"
                type="number"
                className="form-control"
              />
              {this.state.errors["financialInstitutionInformation"] && <div className="alert alert-danger">{this.state.errors["financialInstitutionInformation"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalPartyIdentificationId">          Additional Party Identification <a target="_blank" href="/Additionalpartyidentificationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateadditionalPartyIdentifications}> Refresh</a> </label>
              <select
                value={this.state.data["additionalPartyIdentificationId"]}
                onChange={this.handleChange}
                name="additionalPartyIdentificationId"
                id="additionalPartyIdentificationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Additionalpartyidentificationtype
                  </option>
                  {this.state.additionalPartyIdentifications.map(Additionalpartyidentificationtype => (
                    <option key={Additionalpartyidentificationtype._id} value={Additionalpartyidentificationtype._id}>
                      {Additionalpartyidentificationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["additionalPartyIdentificationId"] && <div className="alert alert-danger">{this.state.errors["additionalPartyIdentificationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dutyFeeTaxRegistrationId">          Duty Fee Tax Registration <a target="_blank" href="/Dutyfeetaxregistrationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedutyFeeTaxRegistrations}> Refresh</a> </label>
              <select
                value={this.state.data["dutyFeeTaxRegistrationId"]}
                onChange={this.handleChange}
                name="dutyFeeTaxRegistrationId"
                id="dutyFeeTaxRegistrationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Dutyfeetaxregistrationtype
                  </option>
                  {this.state.dutyFeeTaxRegistrations.map(Dutyfeetaxregistrationtype => (
                    <option key={Dutyfeetaxregistrationtype._id} value={Dutyfeetaxregistrationtype._id}>
                      {Dutyfeetaxregistrationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dutyFeeTaxRegistrationId"] && <div className="alert alert-danger">{this.state.errors["dutyFeeTaxRegistrationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="financialInstitutionInformationId">          Financial Institution Information <a target="_blank" href="/Financialinstitutioninformationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatefinancialInstitutionInformations}> Refresh</a> </label>
              <select
                value={this.state.data["financialInstitutionInformationId"]}
                onChange={this.handleChange}
                name="financialInstitutionInformationId"
                id="financialInstitutionInformationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Financialinstitutioninformationtype
                  </option>
                  {this.state.financialInstitutionInformations.map(Financialinstitutioninformationtype => (
                    <option key={Financialinstitutioninformationtype._id} value={Financialinstitutioninformationtype._id}>
                      {Financialinstitutioninformationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["financialInstitutionInformationId"] && <div className="alert alert-danger">{this.state.errors["financialInstitutionInformationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="organisationDetailsId">          Organisation Details <a target="_blank" href="/Organisationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateorganisationDetailss}> Refresh</a> </label>
              <select
                value={this.state.data["organisationDetailsId"]}
                onChange={this.handleChange}
                name="organisationDetailsId"
                id="organisationDetailsId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Organisationtype
                  </option>
                  {this.state.organisationDetailss.map(Organisationtype => (
                    <option key={Organisationtype._id} value={Organisationtype._id}>
                      {Organisationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["organisationDetailsId"] && <div className="alert alert-danger">{this.state.errors["organisationDetailsId"]}</div>}
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

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createTransactionalpartytype;