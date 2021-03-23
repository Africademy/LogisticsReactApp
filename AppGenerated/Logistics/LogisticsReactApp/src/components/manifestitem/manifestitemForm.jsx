import React, { Component } from "react";
import Joi from "joi-browser";
import { saveManifestitem, getManifestitem } from "../../services/manifestitemService";

class createManifestitem extends Component{

 constructor(props){
super(props);
}  state = {
    data: { MimeTypeQualifierCode: "", UniformResourceIdentifier: "", Description: "", LanguageCode: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    MimeTypeQualifierCode:  Joi.string()
      .required()


      .label("MimeTypeQualifierCode"),
    UniformResourceIdentifier:  Joi.string()
      .required()


      .label("UniformResourceIdentifier"),
    Description:  Joi.string()
      .allow('').allow(null)



      .label("Description"),
    LanguageCode:  Joi.string()
      .allow('').allow(null)



      .label("LanguageCode"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const manifestitemId = this.props.match.params.id;
      if(manifestitemId!=="new"){
        const { data } = await getManifestitem(manifestitemId);
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
    await saveManifestitem(this.state.data);
    this.props.history.push("/manifestitems");
  };

  render() {
    return (
      <div className="content">
        <h1>Manifestitem Form</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label htmlFor="MimeTypeQualifierCode"> Mime Type Qualifier Code</label>
              <input
                value={this.state.data["MimeTypeQualifierCode"]}
                onChange={this.handleChange}
                name="MimeTypeQualifierCode"
                id="MimeTypeQualifierCode"
                type="text"
                className="form-control"
              />
              {this.state.errors["MimeTypeQualifierCode"] && <div className="alert alert-danger">{this.state.errors["MimeTypeQualifierCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="UniformResourceIdentifier"> Uniform Resource Identifier</label>
              <input
                value={this.state.data["UniformResourceIdentifier"]}
                onChange={this.handleChange}
                name="UniformResourceIdentifier"
                id="UniformResourceIdentifier"
                type="text"
                className="form-control"
              />
              {this.state.errors["UniformResourceIdentifier"] && <div className="alert alert-danger">{this.state.errors["UniformResourceIdentifier"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="Description"> Description</label>
              <input
                value={this.state.data["Description"]}
                onChange={this.handleChange}
                name="Description"
                id="Description"
                type="text"
                className="form-control"
              />
              {this.state.errors["Description"] && <div className="alert alert-danger">{this.state.errors["Description"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="LanguageCode"> Language Code</label>
              <input
                value={this.state.data["LanguageCode"]}
                onChange={this.handleChange}
                name="LanguageCode"
                id="LanguageCode"
                type="text"
                className="form-control"
              />
              {this.state.errors["LanguageCode"] && <div className="alert alert-danger">{this.state.errors["LanguageCode"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createManifestitem;