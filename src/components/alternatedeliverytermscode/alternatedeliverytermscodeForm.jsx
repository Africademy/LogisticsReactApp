import React, { Component } from "react";
import Joi from "joi-browser";
import { saveAlternatedeliverytermscode, getAlternatedeliverytermscode } from "../../services/alternatedeliverytermscodeService";

class createAlternatedeliverytermscode extends Component{

 constructor(props){
super(props);
}  state = {
    data: { codeDescription: "", codeListAgencyCode: "", codeListAgencyCodeListVersion: "", codeListAgencyName: "", codeListName: "", codeListURI: "", codeListVersion: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    codeDescription:  Joi.string()
      .allow('').allow(null)



      .label("codeDescription"),
    codeListAgencyCode:  Joi.string()
      .allow('').allow(null)



      .label("codeListAgencyCode"),
    codeListAgencyCodeListVersion:  Joi.string()
      .allow('').allow(null)



      .label("codeListAgencyCodeListVersion"),
    codeListAgencyName:  Joi.string()
      .allow('').allow(null)



      .label("codeListAgencyName"),
    codeListName:  Joi.string()
      .allow('').allow(null)



      .label("codeListName"),
    codeListURI:  Joi.string()
      .allow('').allow(null)



      .label("codeListURI"),
    codeListVersion:  Joi.string()
      .allow('').allow(null)



      .label("codeListVersion"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const alternatedeliverytermscodeId = this.props.match.params.id;
      if(alternatedeliverytermscodeId!=="new"){
        const { data } = await getAlternatedeliverytermscode(alternatedeliverytermscodeId);
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
    await saveAlternatedeliverytermscode(this.state.data);
    this.props.history.push("/alternatedeliverytermscodes");
  };

  render() {
    return (
      <div className="content">
        <h1>Alternatedeliverytermscode Form</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label htmlFor="codeDescription">Code Description</label>
              <input
                value={this.state.data["codeDescription"]}
                onChange={this.handleChange}
                name="codeDescription"
                id="codeDescription"
                type="text"
                className="form-control"
              />
              {this.state.errors["codeDescription"] && <div className="alert alert-danger">{this.state.errors["codeDescription"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="codeListAgencyCode">Code List Agency Code</label>
              <input
                value={this.state.data["codeListAgencyCode"]}
                onChange={this.handleChange}
                name="codeListAgencyCode"
                id="codeListAgencyCode"
                type="text"
                className="form-control"
              />
              {this.state.errors["codeListAgencyCode"] && <div className="alert alert-danger">{this.state.errors["codeListAgencyCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="codeListAgencyCodeListVersion">Code List Agency Code List Version</label>
              <input
                value={this.state.data["codeListAgencyCodeListVersion"]}
                onChange={this.handleChange}
                name="codeListAgencyCodeListVersion"
                id="codeListAgencyCodeListVersion"
                type="text"
                className="form-control"
              />
              {this.state.errors["codeListAgencyCodeListVersion"] && <div className="alert alert-danger">{this.state.errors["codeListAgencyCodeListVersion"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="codeListAgencyName">Code List Agency Name</label>
              <input
                value={this.state.data["codeListAgencyName"]}
                onChange={this.handleChange}
                name="codeListAgencyName"
                id="codeListAgencyName"
                type="text"
                className="form-control"
              />
              {this.state.errors["codeListAgencyName"] && <div className="alert alert-danger">{this.state.errors["codeListAgencyName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="codeListName">Code List Name</label>
              <input
                value={this.state.data["codeListName"]}
                onChange={this.handleChange}
                name="codeListName"
                id="codeListName"
                type="text"
                className="form-control"
              />
              {this.state.errors["codeListName"] && <div className="alert alert-danger">{this.state.errors["codeListName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="codeListURI">Code List U R I</label>
              <input
                value={this.state.data["codeListURI"]}
                onChange={this.handleChange}
                name="codeListURI"
                id="codeListURI"
                type="text"
                className="form-control"
              />
              {this.state.errors["codeListURI"] && <div className="alert alert-danger">{this.state.errors["codeListURI"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="codeListVersion">Code List Version</label>
              <input
                value={this.state.data["codeListVersion"]}
                onChange={this.handleChange}
                name="codeListVersion"
                id="codeListVersion"
                type="text"
                className="form-control"
              />
              {this.state.errors["codeListVersion"] && <div className="alert alert-danger">{this.state.errors["codeListVersion"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createAlternatedeliverytermscode;