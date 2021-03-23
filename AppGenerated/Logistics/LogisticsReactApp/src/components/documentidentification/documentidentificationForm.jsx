import React, { Component } from "react";
import Joi from "joi-browser";
import { saveDocumentidentification, getDocumentidentification } from "../../services/documentidentificationService";

class createDocumentidentification extends Component{

 constructor(props){
super(props);
}  state = {
    data: { Standard: "", TypeVersion: "", InstanceIdentifier: "", Type: "", MultipleType: "", CreationDateAndTime: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    Standard:  Joi.string()
      .required()


      .label("Standard"),
    TypeVersion:  Joi.string()
      .required()


      .label("TypeVersion"),
    InstanceIdentifier:  Joi.string()
      .required()


      .label("InstanceIdentifier"),
    Type:  Joi.string()
      .required()


      .label("Type"),
    MultipleType:  Joi.number()



      .label("MultipleType"),
    CreationDateAndTime:  Joi.date()
      .required()


      .label("CreationDateAndTime"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const documentidentificationId = this.props.match.params.id;
      if(documentidentificationId!=="new"){
        const { data } = await getDocumentidentification(documentidentificationId);
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
    await saveDocumentidentification(this.state.data);
    this.props.history.push("/documentidentifications");
  };

  render() {
    return (
      <div className="content">
        <h1>Documentidentification Form</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label htmlFor="Standard"> Standard</label>
              <input
                value={this.state.data["Standard"]}
                onChange={this.handleChange}
                name="Standard"
                id="Standard"
                type="text"
                className="form-control"
              />
              {this.state.errors["Standard"] && <div className="alert alert-danger">{this.state.errors["Standard"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="TypeVersion"> Type Version</label>
              <input
                value={this.state.data["TypeVersion"]}
                onChange={this.handleChange}
                name="TypeVersion"
                id="TypeVersion"
                type="text"
                className="form-control"
              />
              {this.state.errors["TypeVersion"] && <div className="alert alert-danger">{this.state.errors["TypeVersion"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="InstanceIdentifier"> Instance Identifier</label>
              <input
                value={this.state.data["InstanceIdentifier"]}
                onChange={this.handleChange}
                name="InstanceIdentifier"
                id="InstanceIdentifier"
                type="text"
                className="form-control"
              />
              {this.state.errors["InstanceIdentifier"] && <div className="alert alert-danger">{this.state.errors["InstanceIdentifier"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="Type"> Type</label>
              <input
                value={this.state.data["Type"]}
                onChange={this.handleChange}
                name="Type"
                id="Type"
                type="text"
                className="form-control"
              />
              {this.state.errors["Type"] && <div className="alert alert-danger">{this.state.errors["Type"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="MultipleType"> Multiple Type</label>
              <input
                value={this.state.data["MultipleType"]}
                onChange={this.handleChange}
                name="MultipleType"
                id="MultipleType"
                type="number"
                className="form-control"
              />
              {this.state.errors["MultipleType"] && <div className="alert alert-danger">{this.state.errors["MultipleType"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="CreationDateAndTime"> Creation Date And Time</label>
              <input
                value={this.state.data["CreationDateAndTime"].substring(0, 10)}
                onChange={this.handleChange}
                name="CreationDateAndTime"
                id="CreationDateAndTime"
                type="date"
                className="form-control"
              />
              {this.state.errors["CreationDateAndTime"] && <div className="alert alert-danger">{this.state.errors["CreationDateAndTime"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createDocumentidentification;