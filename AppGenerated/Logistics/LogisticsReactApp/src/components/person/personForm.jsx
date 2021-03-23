import React, { Component } from "react";
import Joi from "joi-browser";
import { savePerson, getPerson } from "../../services/personService";
import { getIdentitydocumenttypes } from "../../services/identitydocumenttypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createPerson extends Component{

 constructor(props){
super(props);
    this.populateidentityDocuments = this.populateidentityDocuments.bind(this);
    this.populategenders = this.populategenders.bind(this);
    this.populatenationalitys = this.populatenationalitys.bind(this);
}  state = {
    data: { id: "", personName: "", dateOfBirth: "", gender: "", nationality: "", identityDocument: "", identityDocumentId: "", genderId: "", nationalityId: "", },
    identityDocuments: [],
    genders: [],
    nationalitys: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    personName:  Joi.string()
      .allow('').allow(null)



      .label("personName"),
    dateOfBirth:  Joi.date()
      .allow('').allow(null)



      .label("dateOfBirth"),
    gender:  Joi.number()



      .label("gender"),
    nationality:  Joi.number()



      .label("nationality"),
    identityDocument:  Joi.number()



      .label("identityDocument"),
    identityDocumentId:  Joi.string()
      .required()
      .label("identityDocumentId"),
    genderId:  Joi.string()
      .required()
      .label("genderId"),
    nationalityId:  Joi.string()
      .required()
      .label("nationalityId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const personId = this.props.match.params.id;
      if(personId!=="new"){
        const { data } = await getPerson(personId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateidentityDocuments() {
    const { data: identityDocuments } = await getIdentitydocumenttypes();
    this.setState({ identityDocuments: identityDocuments });
  }

  async populategenders() {
    const { data: genders } = await getEnumerationlibrarys();
    this.setState({ genders: genders });
  }

  async populatenationalitys() {
    const { data: nationalitys } = await getEnumerationlibrarys();
    this.setState({ nationalitys: nationalitys });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateidentityDocuments();
    await this.populategenders();
    await this.populatenationalitys();
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
    await savePerson(this.state.data);
    this.props.history.push("/persons");
  };

  render() {
    return (
      <div className="content">
        <h1>Person Form</h1>
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
              <label htmlFor="dateOfBirth">Date Of Birth</label>
              <input
                value={this.state.data["dateOfBirth"].substring(0, 10)}
                onChange={this.handleChange}
                name="dateOfBirth"
                id="dateOfBirth"
                type="date"
                className="form-control"
              />
              {this.state.errors["dateOfBirth"] && <div className="alert alert-danger">{this.state.errors["dateOfBirth"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <input
                value={this.state.data["gender"]}
                onChange={this.handleChange}
                name="gender"
                id="gender"
                type="number"
                className="form-control"
              />
              {this.state.errors["gender"] && <div className="alert alert-danger">{this.state.errors["gender"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <input
                value={this.state.data["nationality"]}
                onChange={this.handleChange}
                name="nationality"
                id="nationality"
                type="number"
                className="form-control"
              />
              {this.state.errors["nationality"] && <div className="alert alert-danger">{this.state.errors["nationality"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="identityDocument">Identity Document</label>
              <input
                value={this.state.data["identityDocument"]}
                onChange={this.handleChange}
                name="identityDocument"
                id="identityDocument"
                type="number"
                className="form-control"
              />
              {this.state.errors["identityDocument"] && <div className="alert alert-danger">{this.state.errors["identityDocument"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="identityDocumentId">          Identity Document <a target="_blank" href="/Identitydocumenttypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateidentityDocuments}> Refresh</a> </label>
              <select
                value={this.state.data["identityDocumentId"]}
                onChange={this.handleChange}
                name="identityDocumentId"
                id="identityDocumentId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Identitydocumenttype
                  </option>
                  {this.state.identityDocuments.map(Identitydocumenttype => (
                    <option key={Identitydocumenttype._id} value={Identitydocumenttype._id}>
                      {Identitydocumenttype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["identityDocumentId"] && <div className="alert alert-danger">{this.state.errors["identityDocumentId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="genderId">          Gender <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populategenders}> Refresh</a> </label>
              <select
                value={this.state.data["genderId"]}
                onChange={this.handleChange}
                name="genderId"
                id="genderId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.genders.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["genderId"] && <div className="alert alert-danger">{this.state.errors["genderId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="nationalityId">          Nationality <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatenationalitys}> Refresh</a> </label>
              <select
                value={this.state.data["nationalityId"]}
                onChange={this.handleChange}
                name="nationalityId"
                id="nationalityId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.nationalitys.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["nationalityId"] && <div className="alert alert-danger">{this.state.errors["nationalityId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createPerson;