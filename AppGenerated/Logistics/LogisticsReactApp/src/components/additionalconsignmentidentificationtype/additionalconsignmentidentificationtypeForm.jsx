import React, { Component } from "react";
import Joi from "joi-browser";
import { saveAdditionalconsignmentidentificationtype, getAdditionalconsignmentidentificationtype } from "../../services/additionalconsignmentidentificationtypeService";

class createAdditionalconsignmentidentificationtype extends Component{

 constructor(props){
super(props);
}  state = {
    data: { id: "", String80Type: "", additionalConsignmentIdentificationTypeCode: "", codeListVersion: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    String80Type:  Joi.string()
      .allow('').allow(null)



      .label("String80Type"),
    additionalConsignmentIdentificationTypeCode:  Joi.string()
      .allow('').allow(null)



      .label("additionalConsignmentIdentificationTypeCode"),
    codeListVersion:  Joi.string()
      .allow('').allow(null)



      .label("codeListVersion"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const additionalconsignmentidentificationtypeId = this.props.match.params.id;
      if(additionalconsignmentidentificationtypeId!=="new"){
        const { data } = await getAdditionalconsignmentidentificationtype(additionalconsignmentidentificationtypeId);
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
    await saveAdditionalconsignmentidentificationtype(this.state.data);
    this.props.history.push("/additionalconsignmentidentificationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Additionalconsignmentidentificationtype Form</h1>
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
              <label htmlFor="String80Type"> String80 Type</label>
              <input
                value={this.state.data["String80Type"]}
                onChange={this.handleChange}
                name="String80Type"
                id="String80Type"
                type="text"
                className="form-control"
              />
              {this.state.errors["String80Type"] && <div className="alert alert-danger">{this.state.errors["String80Type"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalConsignmentIdentificationTypeCode">Additional Consignment Identification Type Code</label>
              <input
                value={this.state.data["additionalConsignmentIdentificationTypeCode"]}
                onChange={this.handleChange}
                name="additionalConsignmentIdentificationTypeCode"
                id="additionalConsignmentIdentificationTypeCode"
                type="text"
                className="form-control"
              />
              {this.state.errors["additionalConsignmentIdentificationTypeCode"] && <div className="alert alert-danger">{this.state.errors["additionalConsignmentIdentificationTypeCode"]}</div>}
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

export default createAdditionalconsignmentidentificationtype;