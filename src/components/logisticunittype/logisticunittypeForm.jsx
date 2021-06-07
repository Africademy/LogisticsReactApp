import React, { Component } from "react";
import Joi from "joi-browser";
import { saveLogisticunittype, getLogisticunittype } from "../../services/logisticunittypeService";
import { getAdditionallogisticunitidentificationtypes } from "../../services/additionallogisticunitidentificationtypeService";
import { getDimensiontypes } from "../../services/dimensiontypeService";
import { getLogisticunitidentificationtypes } from "../../services/logisticunitidentificationtypeService";
import { getMeasurementtypes } from "../../services/measurementtypeService";
import { getPackagingmarkingtypes } from "../../services/packagingmarkingtypeService";
import { getQuantitytypes } from "../../services/quantitytypeService";
import { getReturnablepackagingtypes } from "../../services/returnablepackagingtypeService";
import { getTransportequipmenttypes } from "../../services/transportequipmenttypeService";
import { getUnitmeasurementtypes } from "../../services/unitmeasurementtypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createLogisticunittype extends Component{

 constructor(props){
super(props);
    this.populateadditionalLogisticUnitIdentifications = this.populateadditionalLogisticUnitIdentifications.bind(this);
    this.populatedimensions = this.populatedimensions.bind(this);
    this.populateparentLogisticUnitIds = this.populateparentLogisticUnitIds.bind(this);
    this.populategrossWeights = this.populategrossWeights.bind(this);
    this.populatepackagingMarkings = this.populatepackagingMarkings.bind(this);
    this.populatetradeItemQuantitys = this.populatetradeItemQuantitys.bind(this);
    this.populatereturnablePackagings = this.populatereturnablePackagings.bind(this);
    this.populatereferencedTransportEquipments = this.populatereferencedTransportEquipments.bind(this);
    this.populateunitMeasurements = this.populateunitMeasurements.bind(this);
    this.populatepackageLevelCodes = this.populatepackageLevelCodes.bind(this);
    this.populatepackageTypeCodes = this.populatepackageTypeCodes.bind(this);
}  state = {
    data: { id: "", parentLogisticUnitId: "", grossWeight: "", packageLevelCode: "", packageTypeCode: "", tradeItemQuantity: "", packagingMarking: "", referencedTransportEquipment: "", returnablePackaging: "", dimension: "", unitMeasurement: "", sscc: "", additionalLogisticUnitIdentification: "", additionalLogisticUnitIdentificationId: "", dimensionId: "", parentLogisticUnitIdId: "", grossWeightId: "", packagingMarkingId: "", tradeItemQuantityId: "", returnablePackagingId: "", referencedTransportEquipmentId: "", unitMeasurementId: "", packageLevelCodeId: "", packageTypeCodeId: "", },
    additionalLogisticUnitIdentifications: [],
    dimensions: [],
    parentLogisticUnitIds: [],
    grossWeights: [],
    packagingMarkings: [],
    tradeItemQuantitys: [],
    returnablePackagings: [],
    referencedTransportEquipments: [],
    unitMeasurements: [],
    packageLevelCodes: [],
    packageTypeCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    parentLogisticUnitId:  Joi.number()



      .label("parentLogisticUnitId"),
    grossWeight:  Joi.number()



      .label("grossWeight"),
    packageLevelCode:  Joi.number()



      .label("packageLevelCode"),
    packageTypeCode:  Joi.number()



      .label("packageTypeCode"),
    tradeItemQuantity:  Joi.number()



      .label("tradeItemQuantity"),
    packagingMarking:  Joi.number()



      .label("packagingMarking"),
    referencedTransportEquipment:  Joi.number()



      .label("referencedTransportEquipment"),
    returnablePackaging:  Joi.number()



      .label("returnablePackaging"),
    dimension:  Joi.number()



      .label("dimension"),
    unitMeasurement:  Joi.number()



      .label("unitMeasurement"),
    sscc:  Joi.string()
      .allow('').allow(null)



      .label("sscc"),
    additionalLogisticUnitIdentification:  Joi.number()



      .label("additionalLogisticUnitIdentification"),
    additionalLogisticUnitIdentificationId:  Joi.string()
      .required()
      .label("additionalLogisticUnitIdentificationId"),
    dimensionId:  Joi.string()
      .required()
      .label("dimensionId"),
    parentLogisticUnitIdId:  Joi.string()
      .required()
      .label("parentLogisticUnitIdId"),
    grossWeightId:  Joi.string()
      .required()
      .label("grossWeightId"),
    packagingMarkingId:  Joi.string()
      .required()
      .label("packagingMarkingId"),
    tradeItemQuantityId:  Joi.string()
      .required()
      .label("tradeItemQuantityId"),
    returnablePackagingId:  Joi.string()
      .required()
      .label("returnablePackagingId"),
    referencedTransportEquipmentId:  Joi.string()
      .required()
      .label("referencedTransportEquipmentId"),
    unitMeasurementId:  Joi.string()
      .required()
      .label("unitMeasurementId"),
    packageLevelCodeId:  Joi.string()
      .required()
      .label("packageLevelCodeId"),
    packageTypeCodeId:  Joi.string()
      .required()
      .label("packageTypeCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const logisticunittypeId = this.props.match.params.id;
      if(logisticunittypeId!=="new"){
        const { data } = await getLogisticunittype(logisticunittypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateadditionalLogisticUnitIdentifications() {
    const { data: additionalLogisticUnitIdentifications } = await getAdditionallogisticunitidentificationtypes();
    this.setState({ additionalLogisticUnitIdentifications: additionalLogisticUnitIdentifications });
  }

  async populatedimensions() {
    const { data: dimensions } = await getDimensiontypes();
    this.setState({ dimensions: dimensions });
  }

  async populateparentLogisticUnitIds() {
    const { data: parentLogisticUnitIds } = await getLogisticunitidentificationtypes();
    this.setState({ parentLogisticUnitIds: parentLogisticUnitIds });
  }

  async populategrossWeights() {
    const { data: grossWeights } = await getMeasurementtypes();
    this.setState({ grossWeights: grossWeights });
  }

  async populatepackagingMarkings() {
    const { data: packagingMarkings } = await getPackagingmarkingtypes();
    this.setState({ packagingMarkings: packagingMarkings });
  }

  async populatetradeItemQuantitys() {
    const { data: tradeItemQuantitys } = await getQuantitytypes();
    this.setState({ tradeItemQuantitys: tradeItemQuantitys });
  }

  async populatereturnablePackagings() {
    const { data: returnablePackagings } = await getReturnablepackagingtypes();
    this.setState({ returnablePackagings: returnablePackagings });
  }

  async populatereferencedTransportEquipments() {
    const { data: referencedTransportEquipments } = await getTransportequipmenttypes();
    this.setState({ referencedTransportEquipments: referencedTransportEquipments });
  }

  async populateunitMeasurements() {
    const { data: unitMeasurements } = await getUnitmeasurementtypes();
    this.setState({ unitMeasurements: unitMeasurements });
  }

  async populatepackageLevelCodes() {
    const { data: packageLevelCodes } = await getEnumerationlibrarys();
    this.setState({ packageLevelCodes: packageLevelCodes });
  }

  async populatepackageTypeCodes() {
    const { data: packageTypeCodes } = await getEnumerationlibrarys();
    this.setState({ packageTypeCodes: packageTypeCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateadditionalLogisticUnitIdentifications();
    await this.populatedimensions();
    await this.populateparentLogisticUnitIds();
    await this.populategrossWeights();
    await this.populatepackagingMarkings();
    await this.populatetradeItemQuantitys();
    await this.populatereturnablePackagings();
    await this.populatereferencedTransportEquipments();
    await this.populateunitMeasurements();
    await this.populatepackageLevelCodes();
    await this.populatepackageTypeCodes();
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
    await saveLogisticunittype(this.state.data);
    this.props.history.push("/logisticunittypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Logisticunittype Form</h1>
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
              <label htmlFor="parentLogisticUnitId">Parent Logistic Unit Id</label>
              <input
                value={this.state.data["parentLogisticUnitId"]}
                onChange={this.handleChange}
                name="parentLogisticUnitId"
                id="parentLogisticUnitId"
                type="number"
                className="form-control"
              />
              {this.state.errors["parentLogisticUnitId"] && <div className="alert alert-danger">{this.state.errors["parentLogisticUnitId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="grossWeight">Gross Weight</label>
              <input
                value={this.state.data["grossWeight"]}
                onChange={this.handleChange}
                name="grossWeight"
                id="grossWeight"
                type="number"
                className="form-control"
              />
              {this.state.errors["grossWeight"] && <div className="alert alert-danger">{this.state.errors["grossWeight"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="packageLevelCode">Package Level Code</label>
              <input
                value={this.state.data["packageLevelCode"]}
                onChange={this.handleChange}
                name="packageLevelCode"
                id="packageLevelCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["packageLevelCode"] && <div className="alert alert-danger">{this.state.errors["packageLevelCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="packageTypeCode">Package Type Code</label>
              <input
                value={this.state.data["packageTypeCode"]}
                onChange={this.handleChange}
                name="packageTypeCode"
                id="packageTypeCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["packageTypeCode"] && <div className="alert alert-danger">{this.state.errors["packageTypeCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="tradeItemQuantity">Trade Item Quantity</label>
              <input
                value={this.state.data["tradeItemQuantity"]}
                onChange={this.handleChange}
                name="tradeItemQuantity"
                id="tradeItemQuantity"
                type="number"
                className="form-control"
              />
              {this.state.errors["tradeItemQuantity"] && <div className="alert alert-danger">{this.state.errors["tradeItemQuantity"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="packagingMarking">Packaging Marking</label>
              <input
                value={this.state.data["packagingMarking"]}
                onChange={this.handleChange}
                name="packagingMarking"
                id="packagingMarking"
                type="number"
                className="form-control"
              />
              {this.state.errors["packagingMarking"] && <div className="alert alert-danger">{this.state.errors["packagingMarking"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="referencedTransportEquipment">Referenced Transport Equipment</label>
              <input
                value={this.state.data["referencedTransportEquipment"]}
                onChange={this.handleChange}
                name="referencedTransportEquipment"
                id="referencedTransportEquipment"
                type="number"
                className="form-control"
              />
              {this.state.errors["referencedTransportEquipment"] && <div className="alert alert-danger">{this.state.errors["referencedTransportEquipment"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="returnablePackaging">Returnable Packaging</label>
              <input
                value={this.state.data["returnablePackaging"]}
                onChange={this.handleChange}
                name="returnablePackaging"
                id="returnablePackaging"
                type="number"
                className="form-control"
              />
              {this.state.errors["returnablePackaging"] && <div className="alert alert-danger">{this.state.errors["returnablePackaging"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dimension">Dimension</label>
              <input
                value={this.state.data["dimension"]}
                onChange={this.handleChange}
                name="dimension"
                id="dimension"
                type="number"
                className="form-control"
              />
              {this.state.errors["dimension"] && <div className="alert alert-danger">{this.state.errors["dimension"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="unitMeasurement">Unit Measurement</label>
              <input
                value={this.state.data["unitMeasurement"]}
                onChange={this.handleChange}
                name="unitMeasurement"
                id="unitMeasurement"
                type="number"
                className="form-control"
              />
              {this.state.errors["unitMeasurement"] && <div className="alert alert-danger">{this.state.errors["unitMeasurement"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="sscc">Sscc</label>
              <input
                value={this.state.data["sscc"]}
                onChange={this.handleChange}
                name="sscc"
                id="sscc"
                type="text"
                className="form-control"
              />
              {this.state.errors["sscc"] && <div className="alert alert-danger">{this.state.errors["sscc"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalLogisticUnitIdentification">Additional Logistic Unit Identification</label>
              <input
                value={this.state.data["additionalLogisticUnitIdentification"]}
                onChange={this.handleChange}
                name="additionalLogisticUnitIdentification"
                id="additionalLogisticUnitIdentification"
                type="number"
                className="form-control"
              />
              {this.state.errors["additionalLogisticUnitIdentification"] && <div className="alert alert-danger">{this.state.errors["additionalLogisticUnitIdentification"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalLogisticUnitIdentificationId">          Additional Logistic Unit Identification <a target="_blank" href="/Additionallogisticunitidentificationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateadditionalLogisticUnitIdentifications}> Refresh</a> </label>
              <select
                value={this.state.data["additionalLogisticUnitIdentificationId"]}
                onChange={this.handleChange}
                name="additionalLogisticUnitIdentificationId"
                id="additionalLogisticUnitIdentificationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Additionallogisticunitidentificationtype
                  </option>
                  {this.state.additionalLogisticUnitIdentifications.map(Additionallogisticunitidentificationtype => (
                    <option key={Additionallogisticunitidentificationtype._id} value={Additionallogisticunitidentificationtype._id}>
                      {Additionallogisticunitidentificationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["additionalLogisticUnitIdentificationId"] && <div className="alert alert-danger">{this.state.errors["additionalLogisticUnitIdentificationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dimensionId">          Dimension <a target="_blank" href="/Dimensiontypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedimensions}> Refresh</a> </label>
              <select
                value={this.state.data["dimensionId"]}
                onChange={this.handleChange}
                name="dimensionId"
                id="dimensionId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Dimensiontype
                  </option>
                  {this.state.dimensions.map(Dimensiontype => (
                    <option key={Dimensiontype._id} value={Dimensiontype._id}>
                      {Dimensiontype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dimensionId"] && <div className="alert alert-danger">{this.state.errors["dimensionId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="parentLogisticUnitIdId">          Parent Logistic Unit Id <a target="_blank" href="/Logisticunitidentificationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateparentLogisticUnitIds}> Refresh</a> </label>
              <select
                value={this.state.data["parentLogisticUnitIdId"]}
                onChange={this.handleChange}
                name="parentLogisticUnitIdId"
                id="parentLogisticUnitIdId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Logisticunitidentificationtype
                  </option>
                  {this.state.parentLogisticUnitIds.map(Logisticunitidentificationtype => (
                    <option key={Logisticunitidentificationtype._id} value={Logisticunitidentificationtype._id}>
                      {Logisticunitidentificationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["parentLogisticUnitIdId"] && <div className="alert alert-danger">{this.state.errors["parentLogisticUnitIdId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="grossWeightId">          Gross Weight <a target="_blank" href="/Measurementtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populategrossWeights}> Refresh</a> </label>
              <select
                value={this.state.data["grossWeightId"]}
                onChange={this.handleChange}
                name="grossWeightId"
                id="grossWeightId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Measurementtype
                  </option>
                  {this.state.grossWeights.map(Measurementtype => (
                    <option key={Measurementtype._id} value={Measurementtype._id}>
                      {Measurementtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["grossWeightId"] && <div className="alert alert-danger">{this.state.errors["grossWeightId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="packagingMarkingId">          Packaging Marking <a target="_blank" href="/Packagingmarkingtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatepackagingMarkings}> Refresh</a> </label>
              <select
                value={this.state.data["packagingMarkingId"]}
                onChange={this.handleChange}
                name="packagingMarkingId"
                id="packagingMarkingId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Packagingmarkingtype
                  </option>
                  {this.state.packagingMarkings.map(Packagingmarkingtype => (
                    <option key={Packagingmarkingtype._id} value={Packagingmarkingtype._id}>
                      {Packagingmarkingtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["packagingMarkingId"] && <div className="alert alert-danger">{this.state.errors["packagingMarkingId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="tradeItemQuantityId">          Trade Item Quantity <a target="_blank" href="/Quantitytypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetradeItemQuantitys}> Refresh</a> </label>
              <select
                value={this.state.data["tradeItemQuantityId"]}
                onChange={this.handleChange}
                name="tradeItemQuantityId"
                id="tradeItemQuantityId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Quantitytype
                  </option>
                  {this.state.tradeItemQuantitys.map(Quantitytype => (
                    <option key={Quantitytype._id} value={Quantitytype._id}>
                      {Quantitytype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["tradeItemQuantityId"] && <div className="alert alert-danger">{this.state.errors["tradeItemQuantityId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="returnablePackagingId">          Returnable Packaging <a target="_blank" href="/Returnablepackagingtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatereturnablePackagings}> Refresh</a> </label>
              <select
                value={this.state.data["returnablePackagingId"]}
                onChange={this.handleChange}
                name="returnablePackagingId"
                id="returnablePackagingId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Returnablepackagingtype
                  </option>
                  {this.state.returnablePackagings.map(Returnablepackagingtype => (
                    <option key={Returnablepackagingtype._id} value={Returnablepackagingtype._id}>
                      {Returnablepackagingtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["returnablePackagingId"] && <div className="alert alert-danger">{this.state.errors["returnablePackagingId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="referencedTransportEquipmentId">          Referenced Transport Equipment <a target="_blank" href="/Transportequipmenttypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatereferencedTransportEquipments}> Refresh</a> </label>
              <select
                value={this.state.data["referencedTransportEquipmentId"]}
                onChange={this.handleChange}
                name="referencedTransportEquipmentId"
                id="referencedTransportEquipmentId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Selectequipmenttype
                  </option>
                  {this.state.referencedTransportEquipments.map(Transportequipmenttype => (
                    <option key={Transportequipmenttype._id} value={Transportequipmenttype._id}>
                      {Transportequipmenttype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["referencedTransportEquipmentId"] && <div className="alert alert-danger">{this.state.errors["referencedTransportEquipmentId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="unitMeasurementId">          Unit Measurement <a target="_blank" href="/Unitmeasurementtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateunitMeasurements}> Refresh</a> </label>
              <select
                value={this.state.data["unitMeasurementId"]}
                onChange={this.handleChange}
                name="unitMeasurementId"
                id="unitMeasurementId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Unitmeasurementtype
                  </option>
                  {this.state.unitMeasurements.map(Unitmeasurementtype => (
                    <option key={Unitmeasurementtype._id} value={Unitmeasurementtype._id}>
                      {Unitmeasurementtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["unitMeasurementId"] && <div className="alert alert-danger">{this.state.errors["unitMeasurementId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="packageLevelCodeId">          Package Level Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatepackageLevelCodes}> Refresh</a> </label>
              <select
                value={this.state.data["packageLevelCodeId"]}
                onChange={this.handleChange}
                name="packageLevelCodeId"
                id="packageLevelCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.packageLevelCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["packageLevelCodeId"] && <div className="alert alert-danger">{this.state.errors["packageLevelCodeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="packageTypeCodeId">          Package Type Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatepackageTypeCodes}> Refresh</a> </label>
              <select
                value={this.state.data["packageTypeCodeId"]}
                onChange={this.handleChange}
                name="packageTypeCodeId"
                id="packageTypeCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.packageTypeCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["packageTypeCodeId"] && <div className="alert alert-danger">{this.state.errors["packageTypeCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createLogisticunittype;