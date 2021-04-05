import React, { Component } from "react";
import Joi from "joi-browser";
import { saveDescription1000type, getDescription1000type } from "../../services/description1000typeService";

class createDescription1000type extends Component{

 constructor(props){
super(props);
}  state = {
    data: { id: "", String1000Type: "", languageCode: "", codeListVersion: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    String1000Type:  Joi.string()
      .allow('').allow(null)



      .label("String1000Type"),
    languageCode:  Joi.string()
      .allow('').allow(null)



      .label("languageCode"),
    codeListVersion:  Joi.string()
      .allow('').allow(null)



      .label("codeListVersion"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const description1000typeId = this.props.match.params.id;
      if(description1000typeId!=="new"){
        const { data } = await getDescription1000type(description1000typeId);
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
    await saveDescription1000type(this.state.data);
    this.props.history.push("/description1000types");
  };

  render() {
    return (
      <div className="content">
        <h1>Description1000type Form</h1>
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
              <label htmlFor="String1000Type"> String1000 Type</label>
              <input
                value={this.state.data["String1000Type"]}
                onChange={this.handleChange}
                name="String1000Type"
                id="String1000Type"
                type="text"
                className="form-control"
              />
              {this.state.errors["String1000Type"] && <div className="alert alert-danger">{this.state.errors["String1000Type"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="languageCode">Language Code</label>
              <input
                value={this.state.data["languageCode"]}
                onChange={this.handleChange}
                name="languageCode"
                id="languageCode"
                type="text"
                className="form-control"
              />
              {this.state.errors["languageCode"] && <div className="alert alert-danger">{this.state.errors["languageCode"]}</div>}
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

export default createDescription1000type;