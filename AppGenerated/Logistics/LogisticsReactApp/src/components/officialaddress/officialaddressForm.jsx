import React, { Component } from "react";
import Joi from "joi-browser";
import { saveOfficialaddress, getOfficialaddress } from "../../services/officialaddressService";

class createOfficialaddress extends Component{

 constructor(props){
super(props);
}  state = {
    data: { city: "", cityCode: "", countyCode: "", crossStreet: "", name: "", pOBoxNumber: "", postalCode: "", provinceCode: "", state: "", streetAddressOne: "", streetAddressTwo: "", streetAddressThree: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    city:  Joi.string()
      .allow('').allow(null)



      .label("city"),
    cityCode:  Joi.string()
      .allow('').allow(null)



      .label("cityCode"),
    countyCode:  Joi.string()
      .allow('').allow(null)



      .label("countyCode"),
    crossStreet:  Joi.string()
      .allow('').allow(null)



      .label("crossStreet"),
    name:  Joi.string()
      .allow('').allow(null)



      .label("name"),
    pOBoxNumber:  Joi.string()
      .allow('').allow(null)



      .label("pOBoxNumber"),
    postalCode:  Joi.string()
      .allow('').allow(null)



      .label("postalCode"),
    provinceCode:  Joi.string()
      .allow('').allow(null)



      .label("provinceCode"),
    state:  Joi.string()
      .allow('').allow(null)



      .label("state"),
    streetAddressOne:  Joi.string()
      .allow('').allow(null)



      .label("streetAddressOne"),
    streetAddressTwo:  Joi.string()
      .allow('').allow(null)



      .label("streetAddressTwo"),
    streetAddressThree:  Joi.string()
      .allow('').allow(null)



      .label("streetAddressThree"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const officialaddressId = this.props.match.params.id;
      if(officialaddressId!=="new"){
        const { data } = await getOfficialaddress(officialaddressId);
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
    await saveOfficialaddress(this.state.data);
    this.props.history.push("/officialaddresss");
  };

  render() {
    return (
      <div className="content">
        <h1>Officialaddress Form</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                value={this.state.data["city"]}
                onChange={this.handleChange}
                name="city"
                id="city"
                type="text"
                className="form-control"
              />
              {this.state.errors["city"] && <div className="alert alert-danger">{this.state.errors["city"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="cityCode">City Code</label>
              <input
                value={this.state.data["cityCode"]}
                onChange={this.handleChange}
                name="cityCode"
                id="cityCode"
                type="text"
                className="form-control"
              />
              {this.state.errors["cityCode"] && <div className="alert alert-danger">{this.state.errors["cityCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="countyCode">County Code</label>
              <input
                value={this.state.data["countyCode"]}
                onChange={this.handleChange}
                name="countyCode"
                id="countyCode"
                type="text"
                className="form-control"
              />
              {this.state.errors["countyCode"] && <div className="alert alert-danger">{this.state.errors["countyCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="crossStreet">Cross Street</label>
              <input
                value={this.state.data["crossStreet"]}
                onChange={this.handleChange}
                name="crossStreet"
                id="crossStreet"
                type="text"
                className="form-control"
              />
              {this.state.errors["crossStreet"] && <div className="alert alert-danger">{this.state.errors["crossStreet"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                value={this.state.data["name"]}
                onChange={this.handleChange}
                name="name"
                id="name"
                type="text"
                className="form-control"
              />
              {this.state.errors["name"] && <div className="alert alert-danger">{this.state.errors["name"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="pOBoxNumber">P O Box Number</label>
              <input
                value={this.state.data["pOBoxNumber"]}
                onChange={this.handleChange}
                name="pOBoxNumber"
                id="pOBoxNumber"
                type="text"
                className="form-control"
              />
              {this.state.errors["pOBoxNumber"] && <div className="alert alert-danger">{this.state.errors["pOBoxNumber"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                value={this.state.data["postalCode"]}
                onChange={this.handleChange}
                name="postalCode"
                id="postalCode"
                type="text"
                className="form-control"
              />
              {this.state.errors["postalCode"] && <div className="alert alert-danger">{this.state.errors["postalCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="provinceCode">Province Code</label>
              <input
                value={this.state.data["provinceCode"]}
                onChange={this.handleChange}
                name="provinceCode"
                id="provinceCode"
                type="text"
                className="form-control"
              />
              {this.state.errors["provinceCode"] && <div className="alert alert-danger">{this.state.errors["provinceCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                value={this.state.data["state"]}
                onChange={this.handleChange}
                name="state"
                id="state"
                type="text"
                className="form-control"
              />
              {this.state.errors["state"] && <div className="alert alert-danger">{this.state.errors["state"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="streetAddressOne">Street Address One</label>
              <input
                value={this.state.data["streetAddressOne"]}
                onChange={this.handleChange}
                name="streetAddressOne"
                id="streetAddressOne"
                type="text"
                className="form-control"
              />
              {this.state.errors["streetAddressOne"] && <div className="alert alert-danger">{this.state.errors["streetAddressOne"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="streetAddressTwo">Street Address Two</label>
              <input
                value={this.state.data["streetAddressTwo"]}
                onChange={this.handleChange}
                name="streetAddressTwo"
                id="streetAddressTwo"
                type="text"
                className="form-control"
              />
              {this.state.errors["streetAddressTwo"] && <div className="alert alert-danger">{this.state.errors["streetAddressTwo"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="streetAddressThree">Street Address Three</label>
              <input
                value={this.state.data["streetAddressThree"]}
                onChange={this.handleChange}
                name="streetAddressThree"
                id="streetAddressThree"
                type="text"
                className="form-control"
              />
              {this.state.errors["streetAddressThree"] && <div className="alert alert-danger">{this.state.errors["streetAddressThree"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createOfficialaddress;