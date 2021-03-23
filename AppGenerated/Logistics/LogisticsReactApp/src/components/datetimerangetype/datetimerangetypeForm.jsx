import React, { Component } from "react";
import Joi from "joi-browser";
import { saveDatetimerangetype, getDatetimerangetype } from "../../services/datetimerangetypeService";

class createDatetimerangetype extends Component{

 constructor(props){
super(props);
}  state = {
    data: { id: "", beginDate: "", beginTime: "", endDate: "", endTime: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    beginDate:  Joi.date()
      .allow('').allow(null)



      .label("beginDate"),
    beginTime:  Joi.date()
      .allow('').allow(null)



      .label("beginTime"),
    endDate:  Joi.date()
      .allow('').allow(null)



      .label("endDate"),
    endTime:  Joi.date()
      .allow('').allow(null)



      .label("endTime"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const datetimerangetypeId = this.props.match.params.id;
      if(datetimerangetypeId!=="new"){
        const { data } = await getDatetimerangetype(datetimerangetypeId);
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
    await saveDatetimerangetype(this.state.data);
    this.props.history.push("/datetimerangetypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Datetimerangetype Form</h1>
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
              <label htmlFor="beginDate">Begin Date</label>
              <input
                value={this.state.data["beginDate"].substring(0, 10)}
                onChange={this.handleChange}
                name="beginDate"
                id="beginDate"
                type="date"
                className="form-control"
              />
              {this.state.errors["beginDate"] && <div className="alert alert-danger">{this.state.errors["beginDate"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="beginTime">Begin Time</label>
              <input
                value={this.state.data["beginTime"].substring(0, 10)}
                onChange={this.handleChange}
                name="beginTime"
                id="beginTime"
                type="date"
                className="form-control"
              />
              {this.state.errors["beginTime"] && <div className="alert alert-danger">{this.state.errors["beginTime"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <input
                value={this.state.data["endDate"].substring(0, 10)}
                onChange={this.handleChange}
                name="endDate"
                id="endDate"
                type="date"
                className="form-control"
              />
              {this.state.errors["endDate"] && <div className="alert alert-danger">{this.state.errors["endDate"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="endTime">End Time</label>
              <input
                value={this.state.data["endTime"].substring(0, 10)}
                onChange={this.handleChange}
                name="endTime"
                id="endTime"
                type="date"
                className="form-control"
              />
              {this.state.errors["endTime"] && <div className="alert alert-danger">{this.state.errors["endTime"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createDatetimerangetype;