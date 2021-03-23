import React, { Component } from "react";
import Joi from "joi-browser";
import { saveUnitmeasurementtype, getUnitmeasurementtype } from "../../services/unitmeasurementtypeService";
import { getMeasurementtypes } from "../../services/measurementtypeService";

class createUnitmeasurementtype extends Component{

 constructor(props){
super(props);
    this.populatemeasurementValues = this.populatemeasurementValues.bind(this);
}  state = {
    data: { id: "", measurementType: "", measurementValue: "", measurementValueId: "", },
    measurementValues: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    measurementType:  Joi.number()



      .label("measurementType"),
    measurementValue:  Joi.number()



      .label("measurementValue"),
    measurementValueId:  Joi.string()
      .required()
      .label("measurementValueId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const unitmeasurementtypeId = this.props.match.params.id;
      if(unitmeasurementtypeId!=="new"){
        const { data } = await getUnitmeasurementtype(unitmeasurementtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatemeasurementValues() {
    const { data: measurementValues } = await getMeasurementtypes();
    this.setState({ measurementValues: measurementValues });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatemeasurementValues();
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
    await saveUnitmeasurementtype(this.state.data);
    this.props.history.push("/unitmeasurementtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Unitmeasurementtype Form</h1>
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
              <label htmlFor="measurementType">Measurement Type</label>
              <input
                value={this.state.data["measurementType"]}
                onChange={this.handleChange}
                name="measurementType"
                id="measurementType"
                type="number"
                className="form-control"
              />
              {this.state.errors["measurementType"] && <div className="alert alert-danger">{this.state.errors["measurementType"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="measurementValue">Measurement Value</label>
              <input
                value={this.state.data["measurementValue"]}
                onChange={this.handleChange}
                name="measurementValue"
                id="measurementValue"
                type="number"
                className="form-control"
              />
              {this.state.errors["measurementValue"] && <div className="alert alert-danger">{this.state.errors["measurementValue"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="measurementValueId">          Measurement Value <a target="_blank" href="/Measurementtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatemeasurementValues}> Refresh</a> </label>
              <select
                value={this.state.data["measurementValueId"]}
                onChange={this.handleChange}
                name="measurementValueId"
                id="measurementValueId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Measurementtype
                  </option>
                  {this.state.measurementValues.map(Measurementtype => (
                    <option key={Measurementtype._id} value={Measurementtype._id}>
                      {Measurementtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["measurementValueId"] && <div className="alert alert-danger">{this.state.errors["measurementValueId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createUnitmeasurementtype;