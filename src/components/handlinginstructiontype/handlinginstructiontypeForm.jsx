import React, { Component } from "react";
import Joi from "joi-browser";
import { saveHandlinginstructiontype, getHandlinginstructiontype } from "../../services/handlinginstructiontypeService";
import { getDescription500types } from "../../services/description500typeService";
import { getTemperaturerangetypes } from "../../services/temperaturerangetypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createHandlinginstructiontype extends Component{

 constructor(props){
super(props);
    this.populatehandlingInstructionTexts = this.populatehandlingInstructionTexts.bind(this);
    this.populatestorageTemperatures = this.populatestorageTemperatures.bind(this);
    this.populatetransportTemperatures = this.populatetransportTemperatures.bind(this);
    this.populatehandlingInstructionCodes = this.populatehandlingInstructionCodes.bind(this);
    this.populateprintingInstructionCodes = this.populateprintingInstructionCodes.bind(this);
}  state = {
    data: { id: "", handlingInstructionCode: "", handlingInstructionText: "", printingInstructionCode: "", storageTemperature: "", transportTemperature: "", handlingInstructionTextId: "", storageTemperatureId: "", transportTemperatureId: "", handlingInstructionCodeId: "", printingInstructionCodeId: "", },
    handlingInstructionTexts: [],
    storageTemperatures: [],
    transportTemperatures: [],
    handlingInstructionCodes: [],
    printingInstructionCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    handlingInstructionCode:  Joi.number()



      .label("handlingInstructionCode"),
    handlingInstructionText:  Joi.number()



      .label("handlingInstructionText"),
    printingInstructionCode:  Joi.number()



      .label("printingInstructionCode"),
    storageTemperature:  Joi.number()



      .label("storageTemperature"),
    transportTemperature:  Joi.number()



      .label("transportTemperature"),
    handlingInstructionTextId:  Joi.string()
      .required()
      .label("handlingInstructionTextId"),
    storageTemperatureId:  Joi.string()
      .required()
      .label("storageTemperatureId"),
    transportTemperatureId:  Joi.string()
      .required()
      .label("transportTemperatureId"),
    handlingInstructionCodeId:  Joi.string()
      .required()
      .label("handlingInstructionCodeId"),
    printingInstructionCodeId:  Joi.string()
      .required()
      .label("printingInstructionCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const handlinginstructiontypeId = this.props.match.params.id;
      if(handlinginstructiontypeId!=="new"){
        const { data } = await getHandlinginstructiontype(handlinginstructiontypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatehandlingInstructionTexts() {
    const { data: handlingInstructionTexts } = await getDescription500types();
    this.setState({ handlingInstructionTexts: handlingInstructionTexts });
  }

  async populatestorageTemperatures() {
    const { data: storageTemperatures } = await getTemperaturerangetypes();
    this.setState({ storageTemperatures: storageTemperatures });
  }

  async populatetransportTemperatures() {
    const { data: transportTemperatures } = await getTemperaturerangetypes();
    this.setState({ transportTemperatures: transportTemperatures });
  }

  async populatehandlingInstructionCodes() {
    const { data: handlingInstructionCodes } = await getEnumerationlibrarys();
    this.setState({ handlingInstructionCodes: handlingInstructionCodes });
  }

  async populateprintingInstructionCodes() {
    const { data: printingInstructionCodes } = await getEnumerationlibrarys();
    this.setState({ printingInstructionCodes: printingInstructionCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatehandlingInstructionTexts();
    await this.populatestorageTemperatures();
    await this.populatetransportTemperatures();
    await this.populatehandlingInstructionCodes();
    await this.populateprintingInstructionCodes();
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
    await saveHandlinginstructiontype(this.state.data);
    this.props.history.push("/handlinginstructiontypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Handlinginstructiontype Form</h1>
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
              <label htmlFor="handlingInstructionCode">Handling Instruction Code</label>
              <input
                value={this.state.data["handlingInstructionCode"]}
                onChange={this.handleChange}
                name="handlingInstructionCode"
                id="handlingInstructionCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["handlingInstructionCode"] && <div className="alert alert-danger">{this.state.errors["handlingInstructionCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="handlingInstructionText">Handling Instruction Text</label>
              <input
                value={this.state.data["handlingInstructionText"]}
                onChange={this.handleChange}
                name="handlingInstructionText"
                id="handlingInstructionText"
                type="number"
                className="form-control"
              />
              {this.state.errors["handlingInstructionText"] && <div className="alert alert-danger">{this.state.errors["handlingInstructionText"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="printingInstructionCode">Printing Instruction Code</label>
              <input
                value={this.state.data["printingInstructionCode"]}
                onChange={this.handleChange}
                name="printingInstructionCode"
                id="printingInstructionCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["printingInstructionCode"] && <div className="alert alert-danger">{this.state.errors["printingInstructionCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="storageTemperature">Storage Temperature</label>
              <input
                value={this.state.data["storageTemperature"]}
                onChange={this.handleChange}
                name="storageTemperature"
                id="storageTemperature"
                type="number"
                className="form-control"
              />
              {this.state.errors["storageTemperature"] && <div className="alert alert-danger">{this.state.errors["storageTemperature"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportTemperature">Transport Temperature</label>
              <input
                value={this.state.data["transportTemperature"]}
                onChange={this.handleChange}
                name="transportTemperature"
                id="transportTemperature"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportTemperature"] && <div className="alert alert-danger">{this.state.errors["transportTemperature"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="handlingInstructionTextId">          Handling Instruction Text <a target="_blank" href="/Description500types/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatehandlingInstructionTexts}> Refresh</a> </label>
              <select
                value={this.state.data["handlingInstructionTextId"]}
                onChange={this.handleChange}
                name="handlingInstructionTextId"
                id="handlingInstructionTextId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Description500type
                  </option>
                  {this.state.handlingInstructionTexts.map(Description500type => (
                    <option key={Description500type._id} value={Description500type._id}>
                      {Description500type.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["handlingInstructionTextId"] && <div className="alert alert-danger">{this.state.errors["handlingInstructionTextId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="storageTemperatureId">          Storage Temperature <a target="_blank" href="/Temperaturerangetypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatestorageTemperatures}> Refresh</a> </label>
              <select
                value={this.state.data["storageTemperatureId"]}
                onChange={this.handleChange}
                name="storageTemperatureId"
                id="storageTemperatureId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Temperaturerangetype
                  </option>
                  {this.state.storageTemperatures.map(Temperaturerangetype => (
                    <option key={Temperaturerangetype._id} value={Temperaturerangetype._id}>
                      {Temperaturerangetype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["storageTemperatureId"] && <div className="alert alert-danger">{this.state.errors["storageTemperatureId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportTemperatureId">          Transport Temperature <a target="_blank" href="/Temperaturerangetypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportTemperatures}> Refresh</a> </label>
              <select
                value={this.state.data["transportTemperatureId"]}
                onChange={this.handleChange}
                name="transportTemperatureId"
                id="transportTemperatureId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Temperaturerangetype
                  </option>
                  {this.state.transportTemperatures.map(Temperaturerangetype => (
                    <option key={Temperaturerangetype._id} value={Temperaturerangetype._id}>
                      {Temperaturerangetype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportTemperatureId"] && <div className="alert alert-danger">{this.state.errors["transportTemperatureId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="handlingInstructionCodeId">          Handling Instruction Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatehandlingInstructionCodes}> Refresh</a> </label>
              <select
                value={this.state.data["handlingInstructionCodeId"]}
                onChange={this.handleChange}
                name="handlingInstructionCodeId"
                id="handlingInstructionCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.handlingInstructionCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["handlingInstructionCodeId"] && <div className="alert alert-danger">{this.state.errors["handlingInstructionCodeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="printingInstructionCodeId">          Printing Instruction Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateprintingInstructionCodes}> Refresh</a> </label>
              <select
                value={this.state.data["printingInstructionCodeId"]}
                onChange={this.handleChange}
                name="printingInstructionCodeId"
                id="printingInstructionCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.printingInstructionCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["printingInstructionCodeId"] && <div className="alert alert-danger">{this.state.errors["printingInstructionCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createHandlinginstructiontype;