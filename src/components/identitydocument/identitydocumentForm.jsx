import React, { Component } from "react";
import Joi from "joi-browser";
import { saveIdentitydocument, getIdentitydocument } from "../../services/identitydocumentService";

class createIdentitydocument extends Component{

 constructor(props){
super(props);
}  state = {
    data: { identityDocumentNumber: "", identityDocumentIssuer: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    identityDocumentNumber:  Joi.string()
      .required()


      .label("identityDocumentNumber"),
    identityDocumentIssuer:  Joi.string()
      .allow('').allow(null)



      .label("identityDocumentIssuer"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const identitydocumentId = this.props.match.params.id;
      if(identitydocumentId!=="new"){
        const { data } = await getIdentitydocument(identitydocumentId);
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
    await saveIdentitydocument(this.state.data);
    this.props.history.push("/identitydocuments");
  };

  render() {
    return (
      <div className="content">
        <h1>Identitydocument Form</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label htmlFor="identityDocumentNumber">Identity Document Number</label>
              <input
                value={this.state.data["identityDocumentNumber"]}
                onChange={this.handleChange}
                name="identityDocumentNumber"
                id="identityDocumentNumber"
                type="text"
                className="form-control"
              />
              {this.state.errors["identityDocumentNumber"] && <div className="alert alert-danger">{this.state.errors["identityDocumentNumber"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="identityDocumentIssuer">Identity Document Issuer</label>
              <input
                value={this.state.data["identityDocumentIssuer"]}
                onChange={this.handleChange}
                name="identityDocumentIssuer"
                id="identityDocumentIssuer"
                type="text"
                className="form-control"
              />
              {this.state.errors["identityDocumentIssuer"] && <div className="alert alert-danger">{this.state.errors["identityDocumentIssuer"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createIdentitydocument;