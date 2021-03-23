import React, { Component } from "react";
import Joi from "joi-browser";
import { savePassengerinformationtype, getPassengerinformationtype } from "../../services/passengerinformationtypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createPassengerinformationtype extends Component{

 constructor(props){
super(props);
    this.populatepassengerCategoryCodes = this.populatepassengerCategoryCodes.bind(this);
}  state = {
    data: { id: "", numberOfPassengers: "", passengerCategoryCode: "", passengerTariffGroup: "", person: "", passengerCategoryCodeId: "", },
    passengerCategoryCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    numberOfPassengers:  Joi.number()



      .label("numberOfPassengers"),
    passengerCategoryCode:  Joi.number()



      .label("passengerCategoryCode"),
    passengerTariffGroup:  Joi.string()
      .allow('').allow(null)



      .label("passengerTariffGroup"),
    person:  Joi.number()



      .label("person"),
    passengerCategoryCodeId:  Joi.string()
      .required()
      .label("passengerCategoryCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const passengerinformationtypeId = this.props.match.params.id;
      if(passengerinformationtypeId!=="new"){
        const { data } = await getPassengerinformationtype(passengerinformationtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatepassengerCategoryCodes() {
    const { data: passengerCategoryCodes } = await getEnumerationlibrarys();
    this.setState({ passengerCategoryCodes: passengerCategoryCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatepassengerCategoryCodes();
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
    await savePassengerinformationtype(this.state.data);
    this.props.history.push("/passengerinformationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Passengerinformationtype Form</h1>
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
              <label htmlFor="numberOfPassengers">Number Of Passengers</label>
              <input
                value={this.state.data["numberOfPassengers"]}
                onChange={this.handleChange}
                name="numberOfPassengers"
                id="numberOfPassengers"
                type="number"
                className="form-control"
              />
              {this.state.errors["numberOfPassengers"] && <div className="alert alert-danger">{this.state.errors["numberOfPassengers"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="passengerCategoryCode">Passenger Category Code</label>
              <input
                value={this.state.data["passengerCategoryCode"]}
                onChange={this.handleChange}
                name="passengerCategoryCode"
                id="passengerCategoryCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["passengerCategoryCode"] && <div className="alert alert-danger">{this.state.errors["passengerCategoryCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="passengerTariffGroup">Passenger Tariff Group</label>
              <input
                value={this.state.data["passengerTariffGroup"]}
                onChange={this.handleChange}
                name="passengerTariffGroup"
                id="passengerTariffGroup"
                type="text"
                className="form-control"
              />
              {this.state.errors["passengerTariffGroup"] && <div className="alert alert-danger">{this.state.errors["passengerTariffGroup"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="person">Person</label>
              <input
                value={this.state.data["person"]}
                onChange={this.handleChange}
                name="person"
                id="person"
                type="number"
                className="form-control"
              />
              {this.state.errors["person"] && <div className="alert alert-danger">{this.state.errors["person"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="passengerCategoryCodeId">          Passenger Category Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatepassengerCategoryCodes}> Refresh</a> </label>
              <select
                value={this.state.data["passengerCategoryCodeId"]}
                onChange={this.handleChange}
                name="passengerCategoryCodeId"
                id="passengerCategoryCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.passengerCategoryCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["passengerCategoryCodeId"] && <div className="alert alert-danger">{this.state.errors["passengerCategoryCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createPassengerinformationtype;