import React, { Component } from "react";
import Joi from "joi-browser";
import { saveDeliverytermslocation, getDeliverytermslocation } from "../../services/deliverytermslocationService";

class createDeliverytermslocation extends Component{

 constructor(props){
super(props);
}  state = {
    data: { gln: "", sublocationIdentification: "", locationName: "", utcOffset: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    gln:  Joi.string()
      .allow('').allow(null)



      .label("gln"),
    sublocationIdentification:  Joi.string()
      .allow('').allow(null)



      .label("sublocationIdentification"),
    locationName:  Joi.string()
      .allow('').allow(null)



      .label("locationName"),
    utcOffset:  Joi.number()



      .label("utcOffset"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const deliverytermslocationId = this.props.match.params.id;
      if(deliverytermslocationId!=="new"){
        const { data } = await getDeliverytermslocation(deliverytermslocationId);
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
    await saveDeliverytermslocation(this.state.data);
    this.props.history.push("/deliverytermslocations");
  };

  render() {
    return (
      <div className="content">
        <h1>Deliverytermslocation Form</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label htmlFor="gln">Gln</label>
              <input
                value={this.state.data["gln"]}
                onChange={this.handleChange}
                name="gln"
                id="gln"
                type="text"
                className="form-control"
              />
              {this.state.errors["gln"] && <div className="alert alert-danger">{this.state.errors["gln"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="sublocationIdentification">Sublocation Identification</label>
              <input
                value={this.state.data["sublocationIdentification"]}
                onChange={this.handleChange}
                name="sublocationIdentification"
                id="sublocationIdentification"
                type="text"
                className="form-control"
              />
              {this.state.errors["sublocationIdentification"] && <div className="alert alert-danger">{this.state.errors["sublocationIdentification"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="locationName">Location Name</label>
              <input
                value={this.state.data["locationName"]}
                onChange={this.handleChange}
                name="locationName"
                id="locationName"
                type="text"
                className="form-control"
              />
              {this.state.errors["locationName"] && <div className="alert alert-danger">{this.state.errors["locationName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="utcOffset">Utc Offset</label>
              <input
                value={this.state.data["utcOffset"]}
                onChange={this.handleChange}
                name="utcOffset"
                id="utcOffset"
                type="number"
                className="form-control"
              />
              {this.state.errors["utcOffset"] && <div className="alert alert-danger">{this.state.errors["utcOffset"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createDeliverytermslocation;