import React, { Component } from "react";
import Joi from "joi-browser";
import { saveLogisticservicetype, getLogisticservicetype } from "../../services/logisticservicetypeService";
import { getAmounttypes } from "../../services/amounttypeService";
import { getTransactionalpartytypes } from "../../services/transactionalpartytypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createLogisticservicetype extends Component{

 constructor(props){
super(props);
    this.populatecashOnDeliveryAmounts = this.populatecashOnDeliveryAmounts.bind(this);
    this.populateinsuranceValues = this.populateinsuranceValues.bind(this);
    this.populatelogisticServiceChargeAmounts = this.populatelogisticServiceChargeAmounts.bind(this);
    this.populatecashOnDeliveryPayers = this.populatecashOnDeliveryPayers.bind(this);
    this.populatecashOnDeliveryBillTos = this.populatecashOnDeliveryBillTos.bind(this);
    this.populatelogisticServiceRequirementCodes = this.populatelogisticServiceRequirementCodes.bind(this);
}  state = {
    data: { id: "", logisticServiceRequirementCode: "", cashOnDeliveryAmount: "", insuranceValue: "", logisticServiceChargeAmount: "", cashOnDeliveryPayer: "", cashOnDeliveryBillTo: "", cashOnDeliveryAmountId: "", insuranceValueId: "", logisticServiceChargeAmountId: "", cashOnDeliveryPayerId: "", cashOnDeliveryBillToId: "", logisticServiceRequirementCodeId: "", },
    cashOnDeliveryAmounts: [],
    insuranceValues: [],
    logisticServiceChargeAmounts: [],
    cashOnDeliveryPayers: [],
    cashOnDeliveryBillTos: [],
    logisticServiceRequirementCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    logisticServiceRequirementCode:  Joi.number()



      .label("logisticServiceRequirementCode"),
    cashOnDeliveryAmount:  Joi.number()



      .label("cashOnDeliveryAmount"),
    insuranceValue:  Joi.number()



      .label("insuranceValue"),
    logisticServiceChargeAmount:  Joi.number()



      .label("logisticServiceChargeAmount"),
    cashOnDeliveryPayer:  Joi.number()



      .label("cashOnDeliveryPayer"),
    cashOnDeliveryBillTo:  Joi.number()



      .label("cashOnDeliveryBillTo"),
    cashOnDeliveryAmountId:  Joi.string()
      .required()
      .label("cashOnDeliveryAmountId"),
    insuranceValueId:  Joi.string()
      .required()
      .label("insuranceValueId"),
    logisticServiceChargeAmountId:  Joi.string()
      .required()
      .label("logisticServiceChargeAmountId"),
    cashOnDeliveryPayerId:  Joi.string()
      .required()
      .label("cashOnDeliveryPayerId"),
    cashOnDeliveryBillToId:  Joi.string()
      .required()
      .label("cashOnDeliveryBillToId"),
    logisticServiceRequirementCodeId:  Joi.string()
      .required()
      .label("logisticServiceRequirementCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const logisticservicetypeId = this.props.match.params.id;
      if(logisticservicetypeId!=="new"){
        const { data } = await getLogisticservicetype(logisticservicetypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatecashOnDeliveryAmounts() {
    const { data: cashOnDeliveryAmounts } = await getAmounttypes();
    this.setState({ cashOnDeliveryAmounts: cashOnDeliveryAmounts });
  }

  async populateinsuranceValues() {
    const { data: insuranceValues } = await getAmounttypes();
    this.setState({ insuranceValues: insuranceValues });
  }

  async populatelogisticServiceChargeAmounts() {
    const { data: logisticServiceChargeAmounts } = await getAmounttypes();
    this.setState({ logisticServiceChargeAmounts: logisticServiceChargeAmounts });
  }

  async populatecashOnDeliveryPayers() {
    const { data: cashOnDeliveryPayers } = await getTransactionalpartytypes();
    this.setState({ cashOnDeliveryPayers: cashOnDeliveryPayers });
  }

  async populatecashOnDeliveryBillTos() {
    const { data: cashOnDeliveryBillTos } = await getTransactionalpartytypes();
    this.setState({ cashOnDeliveryBillTos: cashOnDeliveryBillTos });
  }

  async populatelogisticServiceRequirementCodes() {
    const { data: logisticServiceRequirementCodes } = await getEnumerationlibrarys();
    this.setState({ logisticServiceRequirementCodes: logisticServiceRequirementCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatecashOnDeliveryAmounts();
    await this.populateinsuranceValues();
    await this.populatelogisticServiceChargeAmounts();
    await this.populatecashOnDeliveryPayers();
    await this.populatecashOnDeliveryBillTos();
    await this.populatelogisticServiceRequirementCodes();
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
    await saveLogisticservicetype(this.state.data);
    this.props.history.push("/logisticservicetypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Logisticservicetype Form</h1>
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
              <label htmlFor="logisticServiceRequirementCode">Logistic Service Requirement Code</label>
              <input
                value={this.state.data["logisticServiceRequirementCode"]}
                onChange={this.handleChange}
                name="logisticServiceRequirementCode"
                id="logisticServiceRequirementCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["logisticServiceRequirementCode"] && <div className="alert alert-danger">{this.state.errors["logisticServiceRequirementCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="cashOnDeliveryAmount">Cash On Delivery Amount</label>
              <input
                value={this.state.data["cashOnDeliveryAmount"]}
                onChange={this.handleChange}
                name="cashOnDeliveryAmount"
                id="cashOnDeliveryAmount"
                type="number"
                className="form-control"
              />
              {this.state.errors["cashOnDeliveryAmount"] && <div className="alert alert-danger">{this.state.errors["cashOnDeliveryAmount"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="insuranceValue">Insurance Value</label>
              <input
                value={this.state.data["insuranceValue"]}
                onChange={this.handleChange}
                name="insuranceValue"
                id="insuranceValue"
                type="number"
                className="form-control"
              />
              {this.state.errors["insuranceValue"] && <div className="alert alert-danger">{this.state.errors["insuranceValue"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticServiceChargeAmount">Logistic Service Charge Amount</label>
              <input
                value={this.state.data["logisticServiceChargeAmount"]}
                onChange={this.handleChange}
                name="logisticServiceChargeAmount"
                id="logisticServiceChargeAmount"
                type="number"
                className="form-control"
              />
              {this.state.errors["logisticServiceChargeAmount"] && <div className="alert alert-danger">{this.state.errors["logisticServiceChargeAmount"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="cashOnDeliveryPayer">Cash On Delivery Payer</label>
              <input
                value={this.state.data["cashOnDeliveryPayer"]}
                onChange={this.handleChange}
                name="cashOnDeliveryPayer"
                id="cashOnDeliveryPayer"
                type="number"
                className="form-control"
              />
              {this.state.errors["cashOnDeliveryPayer"] && <div className="alert alert-danger">{this.state.errors["cashOnDeliveryPayer"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="cashOnDeliveryBillTo">Cash On Delivery Bill To</label>
              <input
                value={this.state.data["cashOnDeliveryBillTo"]}
                onChange={this.handleChange}
                name="cashOnDeliveryBillTo"
                id="cashOnDeliveryBillTo"
                type="number"
                className="form-control"
              />
              {this.state.errors["cashOnDeliveryBillTo"] && <div className="alert alert-danger">{this.state.errors["cashOnDeliveryBillTo"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="cashOnDeliveryAmountId">          Cash On Delivery Amount <a target="_blank" href="/Amounttypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatecashOnDeliveryAmounts}> Refresh</a> </label>
              <select
                value={this.state.data["cashOnDeliveryAmountId"]}
                onChange={this.handleChange}
                name="cashOnDeliveryAmountId"
                id="cashOnDeliveryAmountId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Amounttype
                  </option>
                  {this.state.cashOnDeliveryAmounts.map(Amounttype => (
                    <option key={Amounttype._id} value={Amounttype._id}>
                      {Amounttype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["cashOnDeliveryAmountId"] && <div className="alert alert-danger">{this.state.errors["cashOnDeliveryAmountId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="insuranceValueId">          Insurance Value <a target="_blank" href="/Amounttypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateinsuranceValues}> Refresh</a> </label>
              <select
                value={this.state.data["insuranceValueId"]}
                onChange={this.handleChange}
                name="insuranceValueId"
                id="insuranceValueId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Amounttype
                  </option>
                  {this.state.insuranceValues.map(Amounttype => (
                    <option key={Amounttype._id} value={Amounttype._id}>
                      {Amounttype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["insuranceValueId"] && <div className="alert alert-danger">{this.state.errors["insuranceValueId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticServiceChargeAmountId">          Logistic Service Charge Amount <a target="_blank" href="/Amounttypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatelogisticServiceChargeAmounts}> Refresh</a> </label>
              <select
                value={this.state.data["logisticServiceChargeAmountId"]}
                onChange={this.handleChange}
                name="logisticServiceChargeAmountId"
                id="logisticServiceChargeAmountId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Amounttype
                  </option>
                  {this.state.logisticServiceChargeAmounts.map(Amounttype => (
                    <option key={Amounttype._id} value={Amounttype._id}>
                      {Amounttype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["logisticServiceChargeAmountId"] && <div className="alert alert-danger">{this.state.errors["logisticServiceChargeAmountId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="cashOnDeliveryPayerId">          Cash On Delivery Payer <a target="_blank" href="/Transactionalpartytypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatecashOnDeliveryPayers}> Refresh</a> </label>
              <select
                value={this.state.data["cashOnDeliveryPayerId"]}
                onChange={this.handleChange}
                name="cashOnDeliveryPayerId"
                id="cashOnDeliveryPayerId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Transactionalpartytype
                  </option>
                  {this.state.cashOnDeliveryPayers.map(Transactionalpartytype => (
                    <option key={Transactionalpartytype._id} value={Transactionalpartytype._id}>
                      {Transactionalpartytype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["cashOnDeliveryPayerId"] && <div className="alert alert-danger">{this.state.errors["cashOnDeliveryPayerId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="cashOnDeliveryBillToId">          Cash On Delivery Bill To <a target="_blank" href="/Transactionalpartytypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatecashOnDeliveryBillTos}> Refresh</a> </label>
              <select
                value={this.state.data["cashOnDeliveryBillToId"]}
                onChange={this.handleChange}
                name="cashOnDeliveryBillToId"
                id="cashOnDeliveryBillToId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Transactionalpartytype
                  </option>
                  {this.state.cashOnDeliveryBillTos.map(Transactionalpartytype => (
                    <option key={Transactionalpartytype._id} value={Transactionalpartytype._id}>
                      {Transactionalpartytype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["cashOnDeliveryBillToId"] && <div className="alert alert-danger">{this.state.errors["cashOnDeliveryBillToId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticServiceRequirementCodeId">          Logistic Service Requirement Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatelogisticServiceRequirementCodes}> Refresh</a> </label>
              <select
                value={this.state.data["logisticServiceRequirementCodeId"]}
                onChange={this.handleChange}
                name="logisticServiceRequirementCodeId"
                id="logisticServiceRequirementCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.logisticServiceRequirementCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["logisticServiceRequirementCodeId"] && <div className="alert alert-danger">{this.state.errors["logisticServiceRequirementCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createLogisticservicetype;