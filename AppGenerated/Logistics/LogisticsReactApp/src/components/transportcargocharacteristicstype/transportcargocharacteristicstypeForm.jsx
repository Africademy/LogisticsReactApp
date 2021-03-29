import React, { Component } from "react";
import Joi from "joi-browser";
import { saveTransportcargocharacteristicstype, getTransportcargocharacteristicstype } from "../../services/transportcargocharacteristicstypeService";

class createTransportcargocharacteristicstype extends Component{

 constructor(props){
super(props);
}  state = {
    data: { id: "", cargoTypeCode: "", harmonizedSystemCode: "", cargoTypeDescription: "", countryOfOriginCode: "", finalDestinationCountry: "", totalGrossVolume: "", totalGrossWeight: "", totalTransportNetWeight: "", totalChargeableWeight: "", declaredWeightForCustoms: "", totalLoadingLength: "", associatedInvoiceAmount: "", declaredValueForCustoms: "", totalPackageQuantity: "", totalItemQuantity: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()
      .label("id"),
    cargoTypeCode:  Joi.string()
      .allow('').allow(null)



      .label("cargoTypeCode"),
    harmonizedSystemCode:  Joi.string()
      .allow('').allow(null)



      .label("harmonizedSystemCode"),
    cargoTypeDescription:  Joi.string()
      .allow('').allow(null)



      .label("cargoTypeDescription"),
    countryOfOriginCode:  Joi.string()
      .allow('').allow(null)



      .label("countryOfOriginCode"),
    finalDestinationCountry:  Joi.string()
      .allow('').allow(null)



      .label("finalDestinationCountry"),
    totalGrossVolume:  Joi.number()



      .label("totalGrossVolume"),
    totalGrossWeight:  Joi.number()



      .label("totalGrossWeight"),
    totalTransportNetWeight:  Joi.number()



      .label("totalTransportNetWeight"),
    totalChargeableWeight:  Joi.number()



      .label("totalChargeableWeight"),
    declaredWeightForCustoms:  Joi.number()



      .label("declaredWeightForCustoms"),
    totalLoadingLength:  Joi.number()



      .label("totalLoadingLength"),
    associatedInvoiceAmount:  Joi.number()



      .label("associatedInvoiceAmount"),
    declaredValueForCustoms:  Joi.number()



      .label("declaredValueForCustoms"),
    totalPackageQuantity:  Joi.number()



      .label("totalPackageQuantity"),
    totalItemQuantity:  Joi.number()



      .label("totalItemQuantity"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const transportcargocharacteristicstypeId = this.props.match.params.id;
      if(transportcargocharacteristicstypeId!=="new"){
        const { data } = await getTransportcargocharacteristicstype(transportcargocharacteristicstypeId);
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
    await saveTransportcargocharacteristicstype(this.state.data);
    this.props.history.push("/transportcargocharacteristicstypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportcargocharacteristicstype Form</h1>
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
              <label htmlFor="cargoTypeCode">Cargo Type Code</label>
              <input
                value={this.state.data["cargoTypeCode"]}
                onChange={this.handleChange}
                name="cargoTypeCode"
                id="cargoTypeCode"
                type="text"
                className="form-control"
              />
              {this.state.errors["cargoTypeCode"] && <div className="alert alert-danger">{this.state.errors["cargoTypeCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="harmonizedSystemCode">Harmonized System Code</label>
              <input
                value={this.state.data["harmonizedSystemCode"]}
                onChange={this.handleChange}
                name="harmonizedSystemCode"
                id="harmonizedSystemCode"
                type="text"
                className="form-control"
              />
              {this.state.errors["harmonizedSystemCode"] && <div className="alert alert-danger">{this.state.errors["harmonizedSystemCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="cargoTypeDescription">Cargo Type Description</label>
              <input
                value={this.state.data["cargoTypeDescription"]}
                onChange={this.handleChange}
                name="cargoTypeDescription"
                id="cargoTypeDescription"
                type="text"
                className="form-control"
              />
              {this.state.errors["cargoTypeDescription"] && <div className="alert alert-danger">{this.state.errors["cargoTypeDescription"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="countryOfOriginCode">Country Of Origin Code</label>
              <input
                value={this.state.data["countryOfOriginCode"]}
                onChange={this.handleChange}
                name="countryOfOriginCode"
                id="countryOfOriginCode"
                type="text"
                className="form-control"
              />
              {this.state.errors["countryOfOriginCode"] && <div className="alert alert-danger">{this.state.errors["countryOfOriginCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="finalDestinationCountry">Final Destination Country</label>
              <input
                value={this.state.data["finalDestinationCountry"]}
                onChange={this.handleChange}
                name="finalDestinationCountry"
                id="finalDestinationCountry"
                type="text"
                className="form-control"
              />
              {this.state.errors["finalDestinationCountry"] && <div className="alert alert-danger">{this.state.errors["finalDestinationCountry"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="totalGrossVolume">Total Gross Volume</label>
              <input
                value={this.state.data["totalGrossVolume"]}
                onChange={this.handleChange}
                name="totalGrossVolume"
                id="totalGrossVolume"
                type="number"
                className="form-control"
              />
              {this.state.errors["totalGrossVolume"] && <div className="alert alert-danger">{this.state.errors["totalGrossVolume"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="totalGrossWeight">Total Gross Weight</label>
              <input
                value={this.state.data["totalGrossWeight"]}
                onChange={this.handleChange}
                name="totalGrossWeight"
                id="totalGrossWeight"
                type="number"
                className="form-control"
              />
              {this.state.errors["totalGrossWeight"] && <div className="alert alert-danger">{this.state.errors["totalGrossWeight"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="totalTransportNetWeight">Total Transport Net Weight</label>
              <input
                value={this.state.data["totalTransportNetWeight"]}
                onChange={this.handleChange}
                name="totalTransportNetWeight"
                id="totalTransportNetWeight"
                type="number"
                className="form-control"
              />
              {this.state.errors["totalTransportNetWeight"] && <div className="alert alert-danger">{this.state.errors["totalTransportNetWeight"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="totalChargeableWeight">Total Chargeable Weight</label>
              <input
                value={this.state.data["totalChargeableWeight"]}
                onChange={this.handleChange}
                name="totalChargeableWeight"
                id="totalChargeableWeight"
                type="number"
                className="form-control"
              />
              {this.state.errors["totalChargeableWeight"] && <div className="alert alert-danger">{this.state.errors["totalChargeableWeight"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="declaredWeightForCustoms">Declared Weight For Customs</label>
              <input
                value={this.state.data["declaredWeightForCustoms"]}
                onChange={this.handleChange}
                name="declaredWeightForCustoms"
                id="declaredWeightForCustoms"
                type="number"
                className="form-control"
              />
              {this.state.errors["declaredWeightForCustoms"] && <div className="alert alert-danger">{this.state.errors["declaredWeightForCustoms"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="totalLoadingLength">Total Loading Length</label>
              <input
                value={this.state.data["totalLoadingLength"]}
                onChange={this.handleChange}
                name="totalLoadingLength"
                id="totalLoadingLength"
                type="number"
                className="form-control"
              />
              {this.state.errors["totalLoadingLength"] && <div className="alert alert-danger">{this.state.errors["totalLoadingLength"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="associatedInvoiceAmount">Associated Invoice Amount</label>
              <input
                value={this.state.data["associatedInvoiceAmount"]}
                onChange={this.handleChange}
                name="associatedInvoiceAmount"
                id="associatedInvoiceAmount"
                type="number"
                className="form-control"
              />
              {this.state.errors["associatedInvoiceAmount"] && <div className="alert alert-danger">{this.state.errors["associatedInvoiceAmount"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="declaredValueForCustoms">Declared Value For Customs</label>
              <input
                value={this.state.data["declaredValueForCustoms"]}
                onChange={this.handleChange}
                name="declaredValueForCustoms"
                id="declaredValueForCustoms"
                type="number"
                className="form-control"
              />
              {this.state.errors["declaredValueForCustoms"] && <div className="alert alert-danger">{this.state.errors["declaredValueForCustoms"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="totalPackageQuantity">Total Package Quantity</label>
              <input
                value={this.state.data["totalPackageQuantity"]}
                onChange={this.handleChange}
                name="totalPackageQuantity"
                id="totalPackageQuantity"
                type="number"
                className="form-control"
              />
              {this.state.errors["totalPackageQuantity"] && <div className="alert alert-danger">{this.state.errors["totalPackageQuantity"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="totalItemQuantity">Total Item Quantity</label>
              <input
                value={this.state.data["totalItemQuantity"]}
                onChange={this.handleChange}
                name="totalItemQuantity"
                id="totalItemQuantity"
                type="number"
                className="form-control"
              />
              {this.state.errors["totalItemQuantity"] && <div className="alert alert-danger">{this.state.errors["totalItemQuantity"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createTransportcargocharacteristicstype;