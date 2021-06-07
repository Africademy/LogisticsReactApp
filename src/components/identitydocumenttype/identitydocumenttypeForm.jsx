import React, { Component } from "react";
import Joi from "joi-browser";
import { saveIdentitydocumenttype, getIdentitydocumenttype } from "../../services/identitydocumenttypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createIdentitydocumenttype extends Component{

 constructor(props){
super(props);
    this.populateidentityDocumentTypes = this.populateidentityDocumentTypes.bind(this);
}  state = {
    data: { id: "", identityDocumentNumber: "", identityDocumentType: "", identityDocumentIssuer: "", identityDocumentTypeId: "", },
    identityDocumentTypes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    identityDocumentNumber:  Joi.string()
      .allow('').allow(null)



      .label("identityDocumentNumber"),
    identityDocumentType:  Joi.number()



      .label("identityDocumentType"),
    identityDocumentIssuer:  Joi.string()
      .allow('').allow(null)



      .label("identityDocumentIssuer"),
    identityDocumentTypeId:  Joi.string()
      .required()
      .label("identityDocumentTypeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const identitydocumenttypeId = this.props.match.params.id;
      if(identitydocumenttypeId!=="new"){
        const { data } = await getIdentitydocumenttype(identitydocumenttypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateidentityDocumentTypes() {
    const { data: identityDocumentTypes } = await getEnumerationlibrarys();
    this.setState({ identityDocumentTypes: identityDocumentTypes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateidentityDocumentTypes();
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
    await saveIdentitydocumenttype(this.state.data);
    this.props.history.push("/identitydocumenttypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Identitydocumenttype Form</h1>
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
              <label htmlFor="identityDocumentType">Identity Document Type</label>
              <input
                value={this.state.data["identityDocumentType"]}
                onChange={this.handleChange}
                name="identityDocumentType"
                id="identityDocumentType"
                type="number"
                className="form-control"
              />
              {this.state.errors["identityDocumentType"] && <div className="alert alert-danger">{this.state.errors["identityDocumentType"]}</div>}
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

          <div className="form-group">
              <label htmlFor="identityDocumentTypeId">          Identity Document Type <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateidentityDocumentTypes}> Refresh</a> </label>
              <select
                value={this.state.data["identityDocumentTypeId"]}
                onChange={this.handleChange}
                name="identityDocumentTypeId"
                id="identityDocumentTypeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.identityDocumentTypes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["identityDocumentTypeId"] && <div className="alert alert-danger">{this.state.errors["identityDocumentTypeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createIdentitydocumenttype;