import React, { Component } from "react";
import Joi from "joi-browser";
import { saveOperatinghourstype, getOperatinghourstype } from "../../services/operatinghourstypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createOperatinghourstype extends Component{

 constructor(props){
super(props);
    this.populatedayOfTheWeekCodes = this.populatedayOfTheWeekCodes.bind(this);
}  state = {
    data: { id: "", dayOfTheWeekCode: "", isOperational: "", closingTime: "", openingTime: "", dayOfTheWeekCodeId: "", },
    dayOfTheWeekCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    dayOfTheWeekCode:  Joi.number()



      .label("dayOfTheWeekCode"),
    isOperational:  Joi.number()



      .label("isOperational"),
    closingTime:  Joi.date()
      .allow('').allow(null)



      .label("closingTime"),
    openingTime:  Joi.date()
      .allow('').allow(null)



      .label("openingTime"),
    dayOfTheWeekCodeId:  Joi.string()
      .required()
      .label("dayOfTheWeekCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const operatinghourstypeId = this.props.match.params.id;
      if(operatinghourstypeId!=="new"){
        const { data } = await getOperatinghourstype(operatinghourstypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatedayOfTheWeekCodes() {
    const { data: dayOfTheWeekCodes } = await getEnumerationlibrarys();
    this.setState({ dayOfTheWeekCodes: dayOfTheWeekCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatedayOfTheWeekCodes();
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
    await saveOperatinghourstype(this.state.data);
    this.props.history.push("/operatinghourstypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Operatinghourstype Form</h1>
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
              <label htmlFor="dayOfTheWeekCode">Day Of The Week Code</label>
              <input
                value={this.state.data["dayOfTheWeekCode"]}
                onChange={this.handleChange}
                name="dayOfTheWeekCode"
                id="dayOfTheWeekCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["dayOfTheWeekCode"] && <div className="alert alert-danger">{this.state.errors["dayOfTheWeekCode"]}</div>}
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
              <label htmlFor="dayOfTheWeekCodeId">          Day Of The Week Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedayOfTheWeekCodes}> Refresh</a> </label>
              <select
                value={this.state.data["dayOfTheWeekCodeId"]}
                onChange={this.handleChange}
                name="dayOfTheWeekCodeId"
                id="dayOfTheWeekCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.dayOfTheWeekCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dayOfTheWeekCodeId"] && <div className="alert alert-danger">{this.state.errors["dayOfTheWeekCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createOperatinghourstype;