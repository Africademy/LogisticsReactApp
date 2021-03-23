import React, { Component } from "react";
import Joi from "joi-browser";
import { saveCurrentholderregistration, getCurrentholderregistration } from "../../services/currentholderregistrationService";

class createCurrentholderregistration extends Component{

 constructor(props){
super(props);
}  state = {
    data: { identificationSchemeAgencyCode: "", identificationSchemeAgencyCodeCodeListVersion: "", identificationSchemeAgencyName: "", identificationSchemeName: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    identificationSchemeAgencyCode:  Joi.string()
      .allow('').allow(null)



      .label("identificationSchemeAgencyCode"),
    identificationSchemeAgencyCodeCodeListVersion:  Joi.string()
      .allow('').allow(null)



      .label("identificationSchemeAgencyCodeCodeListVersion"),
    identificationSchemeAgencyName:  Joi.string()
      .allow('').allow(null)



      .label("identificationSchemeAgencyName"),
    identificationSchemeName:  Joi.string()
      .allow('').allow(null)



      .label("identificationSchemeName"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const currentholderregistrationId = this.props.match.params.id;
      if(currentholderregistrationId!=="new"){
        const { data } = await getCurrentholderregistration(currentholderregistrationId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async componentDidMount() {
    await this.populateForm();
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
    await saveCurrentholderregistration(this.state.data);
    this.props.history.push("/currentholderregistrations");
  };

  render() {
    return (
      <div className="content">
        <h1>Currentholderregistration Form</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label htmlFor="identificationSchemeAgencyCode">Identification Scheme Agency Code</label>
              <input
                value={this.state.data["identificationSchemeAgencyCode"]}
                onChange={this.handleChange}
                name="identificationSchemeAgencyCode"
                id="identificationSchemeAgencyCode"
                type="text"
                className="form-control"
              />
              {this.state.errors["identificationSchemeAgencyCode"] && <div className="alert alert-danger">{this.state.errors["identificationSchemeAgencyCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="identificationSchemeAgencyCodeCodeListVersion">Identification Scheme Agency Code Code List Version</label>
              <input
                value={this.state.data["identificationSchemeAgencyCodeCodeListVersion"]}
                onChange={this.handleChange}
                name="identificationSchemeAgencyCodeCodeListVersion"
                id="identificationSchemeAgencyCodeCodeListVersion"
                type="text"
                className="form-control"
              />
              {this.state.errors["identificationSchemeAgencyCodeCodeListVersion"] && <div className="alert alert-danger">{this.state.errors["identificationSchemeAgencyCodeCodeListVersion"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="identificationSchemeAgencyName">Identification Scheme Agency Name</label>
              <input
                value={this.state.data["identificationSchemeAgencyName"]}
                onChange={this.handleChange}
                name="identificationSchemeAgencyName"
                id="identificationSchemeAgencyName"
                type="text"
                className="form-control"
              />
              {this.state.errors["identificationSchemeAgencyName"] && <div className="alert alert-danger">{this.state.errors["identificationSchemeAgencyName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="identificationSchemeName">Identification Scheme Name</label>
              <input
                value={this.state.data["identificationSchemeName"]}
                onChange={this.handleChange}
                name="identificationSchemeName"
                id="identificationSchemeName"
                type="text"
                className="form-control"
              />
              {this.state.errors["identificationSchemeName"] && <div className="alert alert-danger">{this.state.errors["identificationSchemeName"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createCurrentholderregistration;