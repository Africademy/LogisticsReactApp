import React, { Component } from "react";
import Joi from "joi-browser";
import { savePackagingmarkingtype, getPackagingmarkingtype } from "../../services/packagingmarkingtypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createPackagingmarkingtype extends Component{

 constructor(props){
super(props);
    this.populatemarkingTypeCodes = this.populatemarkingTypeCodes.bind(this);
}  state = {
    data: { id: "", markingTypeCode: "", markingContentDateTime: "", markingContentText: "", markingTypeCodeId: "", },
    markingTypeCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    markingTypeCode:  Joi.number()



      .label("markingTypeCode"),
    markingContentDateTime:  Joi.date()
      .allow('').allow(null)



      .label("markingContentDateTime"),
    markingContentText:  Joi.string()
      .allow('').allow(null)



      .label("markingContentText"),
    markingTypeCodeId:  Joi.string()
      .required()
      .label("markingTypeCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const packagingmarkingtypeId = this.props.match.params.id;
      if(packagingmarkingtypeId!=="new"){
        const { data } = await getPackagingmarkingtype(packagingmarkingtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatemarkingTypeCodes() {
    const { data: markingTypeCodes } = await getEnumerationlibrarys();
    this.setState({ markingTypeCodes: markingTypeCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatemarkingTypeCodes();
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
    await savePackagingmarkingtype(this.state.data);
    this.props.history.push("/packagingmarkingtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Packagingmarkingtype Form</h1>
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
              <label htmlFor="markingTypeCode">Marking Type Code</label>
              <input
                value={this.state.data["markingTypeCode"]}
                onChange={this.handleChange}
                name="markingTypeCode"
                id="markingTypeCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["markingTypeCode"] && <div className="alert alert-danger">{this.state.errors["markingTypeCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="markingContentDateTime">Marking Content Date Time</label>
              <input
                value={this.state.data["markingContentDateTime"].substring(0, 10)}
                onChange={this.handleChange}
                name="markingContentDateTime"
                id="markingContentDateTime"
                type="date"
                className="form-control"
              />
              {this.state.errors["markingContentDateTime"] && <div className="alert alert-danger">{this.state.errors["markingContentDateTime"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="markingContentText">Marking Content Text</label>
              <input
                value={this.state.data["markingContentText"]}
                onChange={this.handleChange}
                name="markingContentText"
                id="markingContentText"
                type="text"
                className="form-control"
              />
              {this.state.errors["markingContentText"] && <div className="alert alert-danger">{this.state.errors["markingContentText"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="markingTypeCodeId">          Marking Type Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatemarkingTypeCodes}> Refresh</a> </label>
              <select
                value={this.state.data["markingTypeCodeId"]}
                onChange={this.handleChange}
                name="markingTypeCodeId"
                id="markingTypeCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.markingTypeCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["markingTypeCodeId"] && <div className="alert alert-danger">{this.state.errors["markingTypeCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createPackagingmarkingtype;