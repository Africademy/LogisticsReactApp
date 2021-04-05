import React, { Component } from "react";
import Joi from "joi-browser";
import { saveTransportinstructiontermstype, getTransportinstructiontermstype } from "../../services/transportinstructiontermstypeService";
import { getAmounttypes } from "../../services/amounttypeService";
import { getIdentifiertypes } from "../../services/identifiertypeService";
import { getLogisticservicetypes } from "../../services/logisticservicetypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createTransportinstructiontermstype extends Component{

 constructor(props){
super(props);
    this.populatetransportCollectChargeAmounts = this.populatetransportCollectChargeAmounts.bind(this);
    this.populatetransportPickUpChargeAmounts = this.populatetransportPickUpChargeAmounts.bind(this);
    this.populaterouteIDs = this.populaterouteIDs.bind(this);
    this.populatelogisticServices = this.populatelogisticServices.bind(this);
    this.populatetransportServiceCategoryTypes = this.populatetransportServiceCategoryTypes.bind(this);
    this.populatetransportPaymentMethodTypeCodes = this.populatetransportPaymentMethodTypeCodes.bind(this);
    this.populatetransportServiceConditionTypes = this.populatetransportServiceConditionTypes.bind(this);
    this.populatetransportServiceLevelCodes = this.populatetransportServiceLevelCodes.bind(this);
}  state = {
    data: { id: "", transportServiceCategoryType: "", transportCollectChargeAmount: "", transportPaymentMethodTypeCode: "", transportPickUpChargeAmount: "", transportServiceConditionType: "", transportServiceLevelCode: "", routeID: "", logisticService: "", transportCollectChargeAmountId: "", transportPickUpChargeAmountId: "", routeIDId: "", logisticServiceId: "", transportServiceCategoryTypeId: "", transportPaymentMethodTypeCodeId: "", transportServiceConditionTypeId: "", transportServiceLevelCodeId: "", },
    transportCollectChargeAmounts: [],
    transportPickUpChargeAmounts: [],
    routeIDs: [],
    logisticServices: [],
    transportServiceCategoryTypes: [],
    transportPaymentMethodTypeCodes: [],
    transportServiceConditionTypes: [],
    transportServiceLevelCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    transportServiceCategoryType:  Joi.number()



      .label("transportServiceCategoryType"),
    transportCollectChargeAmount:  Joi.number()



      .label("transportCollectChargeAmount"),
    transportPaymentMethodTypeCode:  Joi.number()



      .label("transportPaymentMethodTypeCode"),
    transportPickUpChargeAmount:  Joi.number()



      .label("transportPickUpChargeAmount"),
    transportServiceConditionType:  Joi.number()



      .label("transportServiceConditionType"),
    transportServiceLevelCode:  Joi.number()



      .label("transportServiceLevelCode"),
    routeID:  Joi.number()



      .label("routeID"),
    logisticService:  Joi.number()



      .label("logisticService"),
    transportCollectChargeAmountId:  Joi.string()
      .required()
      .label("transportCollectChargeAmountId"),
    transportPickUpChargeAmountId:  Joi.string()
      .required()
      .label("transportPickUpChargeAmountId"),
    routeIDId:  Joi.string()
      .required()
      .label("routeIDId"),
    logisticServiceId:  Joi.string()
      .required()
      .label("logisticServiceId"),
    transportServiceCategoryTypeId:  Joi.string()
      .required()
      .label("transportServiceCategoryTypeId"),
    transportPaymentMethodTypeCodeId:  Joi.string()
      .required()
      .label("transportPaymentMethodTypeCodeId"),
    transportServiceConditionTypeId:  Joi.string()
      .required()
      .label("transportServiceConditionTypeId"),
    transportServiceLevelCodeId:  Joi.string()
      .required()
      .label("transportServiceLevelCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const transportinstructiontermstypeId = this.props.match.params.id;
      if(transportinstructiontermstypeId!=="new"){
        const { data } = await getTransportinstructiontermstype(transportinstructiontermstypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatetransportCollectChargeAmounts() {
    const { data: transportCollectChargeAmounts } = await getAmounttypes();
    this.setState({ transportCollectChargeAmounts: transportCollectChargeAmounts });
  }

  async populatetransportPickUpChargeAmounts() {
    const { data: transportPickUpChargeAmounts } = await getAmounttypes();
    this.setState({ transportPickUpChargeAmounts: transportPickUpChargeAmounts });
  }

  async populaterouteIDs() {
    const { data: routeIDs } = await getIdentifiertypes();
    this.setState({ routeIDs: routeIDs });
  }

  async populatelogisticServices() {
    const { data: logisticServices } = await getLogisticservicetypes();
    this.setState({ logisticServices: logisticServices });
  }

  async populatetransportServiceCategoryTypes() {
    const { data: transportServiceCategoryTypes } = await getEnumerationlibrarys();
    this.setState({ transportServiceCategoryTypes: transportServiceCategoryTypes });
  }

  async populatetransportPaymentMethodTypeCodes() {
    const { data: transportPaymentMethodTypeCodes } = await getEnumerationlibrarys();
    this.setState({ transportPaymentMethodTypeCodes: transportPaymentMethodTypeCodes });
  }

  async populatetransportServiceConditionTypes() {
    const { data: transportServiceConditionTypes } = await getEnumerationlibrarys();
    this.setState({ transportServiceConditionTypes: transportServiceConditionTypes });
  }

  async populatetransportServiceLevelCodes() {
    const { data: transportServiceLevelCodes } = await getEnumerationlibrarys();
    this.setState({ transportServiceLevelCodes: transportServiceLevelCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatetransportCollectChargeAmounts();
    await this.populatetransportPickUpChargeAmounts();
    await this.populaterouteIDs();
    await this.populatelogisticServices();
    await this.populatetransportServiceCategoryTypes();
    await this.populatetransportPaymentMethodTypeCodes();
    await this.populatetransportServiceConditionTypes();
    await this.populatetransportServiceLevelCodes();
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
    await saveTransportinstructiontermstype(this.state.data);
    this.props.history.push("/transportinstructiontermstypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportinstructiontermstype Form</h1>
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
              <label htmlFor="transportServiceCategoryType">Transport Service Category Type</label>
              <input
                value={this.state.data["transportServiceCategoryType"]}
                onChange={this.handleChange}
                name="transportServiceCategoryType"
                id="transportServiceCategoryType"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportServiceCategoryType"] && <div className="alert alert-danger">{this.state.errors["transportServiceCategoryType"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportCollectChargeAmount">Transport Collect Charge Amount</label>
              <input
                value={this.state.data["transportCollectChargeAmount"]}
                onChange={this.handleChange}
                name="transportCollectChargeAmount"
                id="transportCollectChargeAmount"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportCollectChargeAmount"] && <div className="alert alert-danger">{this.state.errors["transportCollectChargeAmount"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportPaymentMethodTypeCode">Transport Payment Method Type Code</label>
              <input
                value={this.state.data["transportPaymentMethodTypeCode"]}
                onChange={this.handleChange}
                name="transportPaymentMethodTypeCode"
                id="transportPaymentMethodTypeCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportPaymentMethodTypeCode"] && <div className="alert alert-danger">{this.state.errors["transportPaymentMethodTypeCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportPickUpChargeAmount">Transport Pick Up Charge Amount</label>
              <input
                value={this.state.data["transportPickUpChargeAmount"]}
                onChange={this.handleChange}
                name="transportPickUpChargeAmount"
                id="transportPickUpChargeAmount"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportPickUpChargeAmount"] && <div className="alert alert-danger">{this.state.errors["transportPickUpChargeAmount"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportServiceConditionType">Transport Service Condition Type</label>
              <input
                value={this.state.data["transportServiceConditionType"]}
                onChange={this.handleChange}
                name="transportServiceConditionType"
                id="transportServiceConditionType"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportServiceConditionType"] && <div className="alert alert-danger">{this.state.errors["transportServiceConditionType"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportServiceLevelCode">Transport Service Level Code</label>
              <input
                value={this.state.data["transportServiceLevelCode"]}
                onChange={this.handleChange}
                name="transportServiceLevelCode"
                id="transportServiceLevelCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportServiceLevelCode"] && <div className="alert alert-danger">{this.state.errors["transportServiceLevelCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="routeID">Route I D</label>
              <input
                value={this.state.data["routeID"]}
                onChange={this.handleChange}
                name="routeID"
                id="routeID"
                type="number"
                className="form-control"
              />
              {this.state.errors["routeID"] && <div className="alert alert-danger">{this.state.errors["routeID"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticService">Logistic Service</label>
              <input
                value={this.state.data["logisticService"]}
                onChange={this.handleChange}
                name="logisticService"
                id="logisticService"
                type="number"
                className="form-control"
              />
              {this.state.errors["logisticService"] && <div className="alert alert-danger">{this.state.errors["logisticService"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportCollectChargeAmountId">          Transport Collect Charge Amount <a target="_blank" href="/Amounttypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportCollectChargeAmounts}> Refresh</a> </label>
              <select
                value={this.state.data["transportCollectChargeAmountId"]}
                onChange={this.handleChange}
                name="transportCollectChargeAmountId"
                id="transportCollectChargeAmountId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Amounttype
                  </option>
                  {this.state.transportCollectChargeAmounts.map(Amounttype => (
                    <option key={Amounttype._id} value={Amounttype._id}>
                      {Amounttype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportCollectChargeAmountId"] && <div className="alert alert-danger">{this.state.errors["transportCollectChargeAmountId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportPickUpChargeAmountId">          Transport Pick Up Charge Amount <a target="_blank" href="/Amounttypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportPickUpChargeAmounts}> Refresh</a> </label>
              <select
                value={this.state.data["transportPickUpChargeAmountId"]}
                onChange={this.handleChange}
                name="transportPickUpChargeAmountId"
                id="transportPickUpChargeAmountId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Amounttype
                  </option>
                  {this.state.transportPickUpChargeAmounts.map(Amounttype => (
                    <option key={Amounttype._id} value={Amounttype._id}>
                      {Amounttype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportPickUpChargeAmountId"] && <div className="alert alert-danger">{this.state.errors["transportPickUpChargeAmountId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="routeIDId">          Route I D <a target="_blank" href="/Identifiertypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populaterouteIDs}> Refresh</a> </label>
              <select
                value={this.state.data["routeIDId"]}
                onChange={this.handleChange}
                name="routeIDId"
                id="routeIDId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Identifiertype
                  </option>
                  {this.state.routeIDs.map(Identifiertype => (
                    <option key={Identifiertype._id} value={Identifiertype._id}>
                      {Identifiertype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["routeIDId"] && <div className="alert alert-danger">{this.state.errors["routeIDId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticServiceId">          Logistic Service <a target="_blank" href="/Logisticservicetypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatelogisticServices}> Refresh</a> </label>
              <select
                value={this.state.data["logisticServiceId"]}
                onChange={this.handleChange}
                name="logisticServiceId"
                id="logisticServiceId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Logisticservicetype
                  </option>
                  {this.state.logisticServices.map(Logisticservicetype => (
                    <option key={Logisticservicetype._id} value={Logisticservicetype._id}>
                      {Logisticservicetype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["logisticServiceId"] && <div className="alert alert-danger">{this.state.errors["logisticServiceId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportServiceCategoryTypeId">          Transport Service Category Type <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportServiceCategoryTypes}> Refresh</a> </label>
              <select
                value={this.state.data["transportServiceCategoryTypeId"]}
                onChange={this.handleChange}
                name="transportServiceCategoryTypeId"
                id="transportServiceCategoryTypeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.transportServiceCategoryTypes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportServiceCategoryTypeId"] && <div className="alert alert-danger">{this.state.errors["transportServiceCategoryTypeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportPaymentMethodTypeCodeId">          Transport Payment Method Type Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportPaymentMethodTypeCodes}> Refresh</a> </label>
              <select
                value={this.state.data["transportPaymentMethodTypeCodeId"]}
                onChange={this.handleChange}
                name="transportPaymentMethodTypeCodeId"
                id="transportPaymentMethodTypeCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.transportPaymentMethodTypeCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportPaymentMethodTypeCodeId"] && <div className="alert alert-danger">{this.state.errors["transportPaymentMethodTypeCodeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportServiceConditionTypeId">          Transport Service Condition Type <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportServiceConditionTypes}> Refresh</a> </label>
              <select
                value={this.state.data["transportServiceConditionTypeId"]}
                onChange={this.handleChange}
                name="transportServiceConditionTypeId"
                id="transportServiceConditionTypeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.transportServiceConditionTypes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportServiceConditionTypeId"] && <div className="alert alert-danger">{this.state.errors["transportServiceConditionTypeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportServiceLevelCodeId">          Transport Service Level Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportServiceLevelCodes}> Refresh</a> </label>
              <select
                value={this.state.data["transportServiceLevelCodeId"]}
                onChange={this.handleChange}
                name="transportServiceLevelCodeId"
                id="transportServiceLevelCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.transportServiceLevelCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportServiceLevelCodeId"] && <div className="alert alert-danger">{this.state.errors["transportServiceLevelCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createTransportinstructiontermstype;