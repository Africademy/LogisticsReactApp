import React, { Component } from "react";
import Joi from "joi-browser";
import { saveContactinformation, getContactinformation } from "../../services/contactinformationService";

class createContactinformation extends Component{

 constructor(props){
super(props);
}  state = {
    data: { Contact: "", EmailAddress: "", FaxNumber: "", TelephoneNumber: "", ContactTypeIdentifier: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    Contact:  Joi.string()
      .required()


      .label("Contact"),
    EmailAddress:  Joi.string()
      .allow('').allow(null)



      .label("EmailAddress"),
    FaxNumber:  Joi.string()
      .allow('').allow(null)



      .label("FaxNumber"),
    TelephoneNumber:  Joi.string()
      .allow('').allow(null)



      .label("TelephoneNumber"),
    ContactTypeIdentifier:  Joi.string()
      .allow('').allow(null)



      .label("ContactTypeIdentifier"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const contactinformationId = this.props.match.params.id;
      if(contactinformationId!=="new"){
        const { data } = await getContactinformation(contactinformationId);
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
    await saveContactinformation(this.state.data);
    this.props.history.push("/contactinformations");
  };

  render() {
    return (
      <div className="content">
        <h1>Contactinformation Form</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label htmlFor="Contact"> Contact</label>
              <input
                value={this.state.data["Contact"]}
                onChange={this.handleChange}
                name="Contact"
                id="Contact"
                type="text"
                className="form-control"
              />
              {this.state.errors["Contact"] && <div className="alert alert-danger">{this.state.errors["Contact"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="EmailAddress"> Email Address</label>
              <input
                value={this.state.data["EmailAddress"]}
                onChange={this.handleChange}
                name="EmailAddress"
                id="EmailAddress"
                type="text"
                className="form-control"
              />
              {this.state.errors["EmailAddress"] && <div className="alert alert-danger">{this.state.errors["EmailAddress"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="FaxNumber"> Fax Number</label>
              <input
                value={this.state.data["FaxNumber"]}
                onChange={this.handleChange}
                name="FaxNumber"
                id="FaxNumber"
                type="text"
                className="form-control"
              />
              {this.state.errors["FaxNumber"] && <div className="alert alert-danger">{this.state.errors["FaxNumber"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="TelephoneNumber"> Telephone Number</label>
              <input
                value={this.state.data["TelephoneNumber"]}
                onChange={this.handleChange}
                name="TelephoneNumber"
                id="TelephoneNumber"
                type="text"
                className="form-control"
              />
              {this.state.errors["TelephoneNumber"] && <div className="alert alert-danger">{this.state.errors["TelephoneNumber"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="ContactTypeIdentifier"> Contact Type Identifier</label>
              <input
                value={this.state.data["ContactTypeIdentifier"]}
                onChange={this.handleChange}
                name="ContactTypeIdentifier"
                id="ContactTypeIdentifier"
                type="text"
                className="form-control"
              />
              {this.state.errors["ContactTypeIdentifier"] && <div className="alert alert-danger">{this.state.errors["ContactTypeIdentifier"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createContactinformation;