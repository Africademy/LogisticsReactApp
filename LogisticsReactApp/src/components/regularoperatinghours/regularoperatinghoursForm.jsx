import React, { Component } from "react";
import Joi from "joi-browser";
import { saveRegularoperatinghours, getRegularoperatinghours } from "../../services/regularoperatinghoursService";

class createRegularoperatinghours extends Component{

 constructor(props){
super(props);
}  state = {
    data: { dayOfTheWeekCode: "", isOperational: "", closingTime: "", openingTime: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    dayOfTheWeekCode:  Joi.string()
      .required()


      .label("dayOfTheWeekCode"),
    isOperational:  Joi.number()
      .required()


      .label("isOperational"),
    closingTime:  Joi.string()
      .allow('').allow(null)



      .label("closingTime"),
    openingTime:  Joi.string()
      .allow('').allow(null)



      .label("openingTime"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const regularoperatinghoursId = this.props.match.params.id;
      if(regularoperatinghoursId!=="new"){
        const { data } = await getRegularoperatinghours(regularoperatinghoursId);
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
    await saveRegularoperatinghours(this.state.data);
    this.props.history.push("/regularoperatinghourss");
  };

  render() {
    return (
      <div className="content">
        <h1>Regularoperatinghours Form</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label htmlFor="dayOfTheWeekCode">Day Of The Week Code</label>
              <input
                value={this.state.data["dayOfTheWeekCode"]}
                onChange={this.handleChange}
                name="dayOfTheWeekCode"
                id="dayOfTheWeekCode"
                type="text"
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
                value={this.state.data["closingTime"]}
                onChange={this.handleChange}
                name="closingTime"
                id="closingTime"
                type="text"
                className="form-control"
              />
              {this.state.errors["closingTime"] && <div className="alert alert-danger">{this.state.errors["closingTime"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="openingTime">Opening Time</label>
              <input
                value={this.state.data["openingTime"]}
                onChange={this.handleChange}
                name="openingTime"
                id="openingTime"
                type="text"
                className="form-control"
              />
              {this.state.errors["openingTime"] && <div className="alert alert-danger">{this.state.errors["openingTime"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createRegularoperatinghours;