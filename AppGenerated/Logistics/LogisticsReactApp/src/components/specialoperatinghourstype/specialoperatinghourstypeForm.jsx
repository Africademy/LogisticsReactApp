import React, { Component } from "react";
import Joi from "joi-browser";
import { saveSpecialoperatinghourstype, getSpecialoperatinghourstype } from "../../services/specialoperatinghourstypeService";
import { getDescription80types } from "../../services/description80typeService";

class createSpecialoperatinghourstype extends Component{

 constructor(props){
super(props);
    this.populatespecialDateNames = this.populatespecialDateNames.bind(this);
}  state = {
    data: { id: "", isOperational: "", specialDate: "", closingTime: "", openingTime: "", specialDateName: "", specialDateNameId: "", },
    specialDateNames: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    isOperational:  Joi.number()



      .label("isOperational"),
    specialDate:  Joi.date()
      .allow('').allow(null)



      .label("specialDate"),
    closingTime:  Joi.date()
      .allow('').allow(null)



      .label("closingTime"),
    openingTime:  Joi.date()
      .allow('').allow(null)



      .label("openingTime"),
    specialDateName:  Joi.number()



      .label("specialDateName"),
    specialDateNameId:  Joi.string()
      .required()
      .label("specialDateNameId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const specialoperatinghourstypeId = this.props.match.params.id;
      if(specialoperatinghourstypeId!=="new"){
        const { data } = await getSpecialoperatinghourstype(specialoperatinghourstypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatespecialDateNames() {
    const { data: specialDateNames } = await getDescription80types();
    this.setState({ specialDateNames: specialDateNames });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatespecialDateNames();
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
    await saveSpecialoperatinghourstype(this.state.data);
    this.props.history.push("/specialoperatinghourstypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Specialoperatinghourstype Form</h1>
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
              <label htmlFor="isOperational">Is Operational</label>
              <input
                value={this.state.data["isOperational"]}
                onChange={this.handleChange}
                name="isOperational"
                id="isOperational"
                type="number"
                className="form-control"
              />
              {this.state.errors["isOperational"] && <div className="alert alert-danger">{this.state.errors["isOperational"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="specialDate">Special Date</label>
              <input
                value={this.state.data["specialDate"].substring(0, 10)}
                onChange={this.handleChange}
                name="specialDate"
                id="specialDate"
                type="date"
                className="form-control"
              />
              {this.state.errors["specialDate"] && <div className="alert alert-danger">{this.state.errors["specialDate"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="closingTime">Closing Time</label>
              <input
                value={this.state.data["closingTime"].substring(0, 10)}
                onChange={this.handleChange}
                name="closingTime"
                id="closingTime"
                type="date"
                className="form-control"
              />
              {this.state.errors["closingTime"] && <div className="alert alert-danger">{this.state.errors["closingTime"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="openingTime">Opening Time</label>
              <input
                value={this.state.data["openingTime"].substring(0, 10)}
                onChange={this.handleChange}
                name="openingTime"
                id="openingTime"
                type="date"
                className="form-control"
              />
              {this.state.errors["openingTime"] && <div className="alert alert-danger">{this.state.errors["openingTime"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="specialDateName">Special Date Name</label>
              <input
                value={this.state.data["specialDateName"]}
                onChange={this.handleChange}
                name="specialDateName"
                id="specialDateName"
                type="number"
                className="form-control"
              />
              {this.state.errors["specialDateName"] && <div className="alert alert-danger">{this.state.errors["specialDateName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="specialDateNameId">          Special Date Name <a target="_blank" href="/Description80types/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatespecialDateNames}> Refresh</a> </label>
              <select
                value={this.state.data["specialDateNameId"]}
                onChange={this.handleChange}
                name="specialDateNameId"
                id="specialDateNameId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Description80type
                  </option>
                  {this.state.specialDateNames.map(Description80type => (
                    <option key={Description80type._id} value={Description80type._id}>
                      {Description80type.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["specialDateNameId"] && <div className="alert alert-danger">{this.state.errors["specialDateNameId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createSpecialoperatinghourstype;