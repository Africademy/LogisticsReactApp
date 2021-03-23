import React, { Component } from "react";
import Joi from "joi-browser";
import { saveDeliverytermstype, getDeliverytermstype } from "../../services/deliverytermstypeService";
import { getCodetypes } from "../../services/codetypeService";
import { getDescription500types } from "../../services/description500typeService";
import { getLogisticlocationtypes } from "../../services/logisticlocationtypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createDeliverytermstype extends Component{

 constructor(props){
super(props);
    this.populatealternateDeliveryTermsCodes = this.populatealternateDeliveryTermsCodes.bind(this);
    this.populatedeliveryInstructionss = this.populatedeliveryInstructionss.bind(this);
    this.populatedeliveryTermsLocations = this.populatedeliveryTermsLocations.bind(this);
    this.populateincotermsCodes = this.populateincotermsCodes.bind(this);
}  state = {
    data: { id: "", incotermsCode: "", alternateDeliveryTermsCode: "", deliveryInstructions: "", deliveryTermsLocation: "", alternateDeliveryTermsCodeId: "", deliveryInstructionsId: "", deliveryTermsLocationId: "", incotermsCodeId: "", },
    alternateDeliveryTermsCodes: [],
    deliveryInstructionss: [],
    deliveryTermsLocations: [],
    incotermsCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    incotermsCode:  Joi.number()



      .label("incotermsCode"),
    alternateDeliveryTermsCode:  Joi.number()



      .label("alternateDeliveryTermsCode"),
    deliveryInstructions:  Joi.number()



      .label("deliveryInstructions"),
    deliveryTermsLocation:  Joi.number()



      .label("deliveryTermsLocation"),
    alternateDeliveryTermsCodeId:  Joi.string()
      .required()
      .label("alternateDeliveryTermsCodeId"),
    deliveryInstructionsId:  Joi.string()
      .required()
      .label("deliveryInstructionsId"),
    deliveryTermsLocationId:  Joi.string()
      .required()
      .label("deliveryTermsLocationId"),
    incotermsCodeId:  Joi.string()
      .required()
      .label("incotermsCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const deliverytermstypeId = this.props.match.params.id;
      if(deliverytermstypeId!=="new"){
        const { data } = await getDeliverytermstype(deliverytermstypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatealternateDeliveryTermsCodes() {
    const { data: alternateDeliveryTermsCodes } = await getCodetypes();
    this.setState({ alternateDeliveryTermsCodes: alternateDeliveryTermsCodes });
  }

  async populatedeliveryInstructionss() {
    const { data: deliveryInstructionss } = await getDescription500types();
    this.setState({ deliveryInstructionss: deliveryInstructionss });
  }

  async populatedeliveryTermsLocations() {
    const { data: deliveryTermsLocations } = await getLogisticlocationtypes();
    this.setState({ deliveryTermsLocations: deliveryTermsLocations });
  }

  async populateincotermsCodes() {
    const { data: incotermsCodes } = await getEnumerationlibrarys();
    this.setState({ incotermsCodes: incotermsCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatealternateDeliveryTermsCodes();
    await this.populatedeliveryInstructionss();
    await this.populatedeliveryTermsLocations();
    await this.populateincotermsCodes();
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
    await saveDeliverytermstype(this.state.data);
    this.props.history.push("/deliverytermstypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Deliverytermstype Form</h1>
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
              <label htmlFor="incotermsCode">Incoterms Code</label>
              <input
                value={this.state.data["incotermsCode"]}
                onChange={this.handleChange}
                name="incotermsCode"
                id="incotermsCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["incotermsCode"] && <div className="alert alert-danger">{this.state.errors["incotermsCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="alternateDeliveryTermsCode">Alternate Delivery Terms Code</label>
              <input
                value={this.state.data["alternateDeliveryTermsCode"]}
                onChange={this.handleChange}
                name="alternateDeliveryTermsCode"
                id="alternateDeliveryTermsCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["alternateDeliveryTermsCode"] && <div className="alert alert-danger">{this.state.errors["alternateDeliveryTermsCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="deliveryInstructions">Delivery Instructions</label>
              <input
                value={this.state.data["deliveryInstructions"]}
                onChange={this.handleChange}
                name="deliveryInstructions"
                id="deliveryInstructions"
                type="number"
                className="form-control"
              />
              {this.state.errors["deliveryInstructions"] && <div className="alert alert-danger">{this.state.errors["deliveryInstructions"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="deliveryTermsLocation">Delivery Terms Location</label>
              <input
                value={this.state.data["deliveryTermsLocation"]}
                onChange={this.handleChange}
                name="deliveryTermsLocation"
                id="deliveryTermsLocation"
                type="number"
                className="form-control"
              />
              {this.state.errors["deliveryTermsLocation"] && <div className="alert alert-danger">{this.state.errors["deliveryTermsLocation"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="alternateDeliveryTermsCodeId">          Alternate Delivery Terms Code <a target="_blank" href="/Codetypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatealternateDeliveryTermsCodes}> Refresh</a> </label>
              <select
                value={this.state.data["alternateDeliveryTermsCodeId"]}
                onChange={this.handleChange}
                name="alternateDeliveryTermsCodeId"
                id="alternateDeliveryTermsCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Codetype
                  </option>
                  {this.state.alternateDeliveryTermsCodes.map(Codetype => (
                    <option key={Codetype._id} value={Codetype._id}>
                      {Codetype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["alternateDeliveryTermsCodeId"] && <div className="alert alert-danger">{this.state.errors["alternateDeliveryTermsCodeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="deliveryInstructionsId">          Delivery Instructions <a target="_blank" href="/Description500types/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedeliveryInstructionss}> Refresh</a> </label>
              <select
                value={this.state.data["deliveryInstructionsId"]}
                onChange={this.handleChange}
                name="deliveryInstructionsId"
                id="deliveryInstructionsId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Description500type
                  </option>
                  {this.state.deliveryInstructionss.map(Description500type => (
                    <option key={Description500type._id} value={Description500type._id}>
                      {Description500type.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["deliveryInstructionsId"] && <div className="alert alert-danger">{this.state.errors["deliveryInstructionsId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="deliveryTermsLocationId">          Delivery Terms Location <a target="_blank" href="/Logisticlocationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedeliveryTermsLocations}> Refresh</a> </label>
              <select
                value={this.state.data["deliveryTermsLocationId"]}
                onChange={this.handleChange}
                name="deliveryTermsLocationId"
                id="deliveryTermsLocationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Logisticlocationtype
                  </option>
                  {this.state.deliveryTermsLocations.map(Logisticlocationtype => (
                    <option key={Logisticlocationtype._id} value={Logisticlocationtype._id}>
                      {Logisticlocationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["deliveryTermsLocationId"] && <div className="alert alert-danger">{this.state.errors["deliveryTermsLocationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="incotermsCodeId">          Incoterms Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateincotermsCodes}> Refresh</a> </label>
              <select
                value={this.state.data["incotermsCodeId"]}
                onChange={this.handleChange}
                name="incotermsCodeId"
                id="incotermsCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.incotermsCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["incotermsCodeId"] && <div className="alert alert-danger">{this.state.errors["incotermsCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createDeliverytermstype;