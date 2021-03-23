import React, { Component } from "react";
import Joi from "joi-browser";
import { saveTransportinstructionconsignmentitemtype, getTransportinstructionconsignmentitemtype } from "../../services/transportinstructionconsignmentitemtypeService";
import { getDangerousgoodsinformationtypes } from "../../services/dangerousgoodsinformationtypeService";
import { getDescription500types } from "../../services/description500typeService";
import { getEcom_attributevaluepairlisttypes } from "../../services/ecom_attributevaluepairlisttypeService";
import { getLogisticunittypes } from "../../services/logisticunittypeService";
import { getPackagetotaltypes } from "../../services/packagetotaltypeService";
import { getTransportcargocharacteristicstypes } from "../../services/transportcargocharacteristicstypeService";
import { getTransportequipmenttypes } from "../../services/transportequipmenttypeService";
import { getTransportreferencetypes } from "../../services/transportreferencetypeService";
import { getHandlinginstructiontypes } from "../../services/handlinginstructiontypeService";

class createTransportinstructionconsignmentitemtype extends Component{

 constructor(props){
super(props);
    this.populatedangerousGoodsInformations = this.populatedangerousGoodsInformations.bind(this);
    this.populatenotes = this.populatenotes.bind(this);
    this.populateavpLists = this.populateavpLists.bind(this);
    this.populatelogisticUnits = this.populatelogisticUnits.bind(this);
    this.populatepackageTotals = this.populatepackageTotals.bind(this);
    this.populatetransportCargoCharacteristicss = this.populatetransportCargoCharacteristicss.bind(this);
    this.populatereferencedTransportEquipments = this.populatereferencedTransportEquipments.bind(this);
    this.populatetransportReferences = this.populatetransportReferences.bind(this);
    this.populatehandlingInstructions = this.populatehandlingInstructions.bind(this);
}  state = {
    data: { id: "", lineItemNumber: "", parentLineItemNumber: "", note: "", transportCargoCharacteristics: "", packageTotal: "", logisticUnit: "", referencedTransportEquipment: "", transportReference: "", handlingInstruction: "", dangerousGoodsInformation: "", avpList: "", dangerousGoodsInformationId: "", noteId: "", avpListId: "", logisticUnitId: "", packageTotalId: "", transportCargoCharacteristicsId: "", referencedTransportEquipmentId: "", transportReferenceId: "", handlingInstructionId: "", },
    dangerousGoodsInformations: [],
    notes: [],
    avpLists: [],
    logisticUnits: [],
    packageTotals: [],
    transportCargoCharacteristicss: [],
    referencedTransportEquipments: [],
    transportReferences: [],
    handlingInstructions: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    lineItemNumber:  Joi.number()



      .label("lineItemNumber"),
    parentLineItemNumber:  Joi.number()



      .label("parentLineItemNumber"),
    note:  Joi.number()



      .label("note"),
    transportCargoCharacteristics:  Joi.number()



      .label("transportCargoCharacteristics"),
    packageTotal:  Joi.number()



      .label("packageTotal"),
    logisticUnit:  Joi.number()



      .label("logisticUnit"),
    referencedTransportEquipment:  Joi.number()



      .label("referencedTransportEquipment"),
    transportReference:  Joi.number()



      .label("transportReference"),
    handlingInstruction:  Joi.number()



      .label("handlingInstruction"),
    dangerousGoodsInformation:  Joi.number()



      .label("dangerousGoodsInformation"),
    avpList:  Joi.number()



      .label("avpList"),
    dangerousGoodsInformationId:  Joi.string()
      .required()
      .label("dangerousGoodsInformationId"),
    noteId:  Joi.string()
      .required()
      .label("noteId"),
    avpListId:  Joi.string()
      .required()
      .label("avpListId"),
    logisticUnitId:  Joi.string()
      .required()
      .label("logisticUnitId"),
    packageTotalId:  Joi.string()
      .required()
      .label("packageTotalId"),
    transportCargoCharacteristicsId:  Joi.string()
      .required()
      .label("transportCargoCharacteristicsId"),
    referencedTransportEquipmentId:  Joi.string()
      .required()
      .label("referencedTransportEquipmentId"),
    transportReferenceId:  Joi.string()
      .required()
      .label("transportReferenceId"),
    handlingInstructionId:  Joi.string()
      .required()
      .label("handlingInstructionId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const transportinstructionconsignmentitemtypeId = this.props.match.params.id;
      if(transportinstructionconsignmentitemtypeId!=="new"){
        const { data } = await getTransportinstructionconsignmentitemtype(transportinstructionconsignmentitemtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatedangerousGoodsInformations() {
    const { data: dangerousGoodsInformations } = await getDangerousgoodsinformationtypes();
    this.setState({ dangerousGoodsInformations: dangerousGoodsInformations });
  }

  async populatenotes() {
    const { data: notes } = await getDescription500types();
    this.setState({ notes: notes });
  }

  async populateavpLists() {
    const { data: avpLists } = await getEcom_attributevaluepairlisttypes();
    this.setState({ avpLists: avpLists });
  }

  async populatelogisticUnits() {
    const { data: logisticUnits } = await getLogisticunittypes();
    this.setState({ logisticUnits: logisticUnits });
  }

  async populatepackageTotals() {
    const { data: packageTotals } = await getPackagetotaltypes();
    this.setState({ packageTotals: packageTotals });
  }

  async populatetransportCargoCharacteristicss() {
    const { data: transportCargoCharacteristicss } = await getTransportcargocharacteristicstypes();
    this.setState({ transportCargoCharacteristicss: transportCargoCharacteristicss });
  }

  async populatereferencedTransportEquipments() {
    const { data: referencedTransportEquipments } = await getTransportequipmenttypes();
    this.setState({ referencedTransportEquipments: referencedTransportEquipments });
  }

  async populatetransportReferences() {
    const { data: transportReferences } = await getTransportreferencetypes();
    this.setState({ transportReferences: transportReferences });
  }

  async populatehandlingInstructions() {
    const { data: handlingInstructions } = await getHandlinginstructiontypes();
    this.setState({ handlingInstructions: handlingInstructions });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatedangerousGoodsInformations();
    await this.populatenotes();
    await this.populateavpLists();
    await this.populatelogisticUnits();
    await this.populatepackageTotals();
    await this.populatetransportCargoCharacteristicss();
    await this.populatereferencedTransportEquipments();
    await this.populatetransportReferences();
    await this.populatehandlingInstructions();
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
    await saveTransportinstructionconsignmentitemtype(this.state.data);
    this.props.history.push("/transportinstructionconsignmentitemtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportinstructionconsignmentitemtype Form</h1>
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
              <label htmlFor="lineItemNumber">Line Item Number</label>
              <input
                value={this.state.data["lineItemNumber"]}
                onChange={this.handleChange}
                name="lineItemNumber"
                id="lineItemNumber"
                type="number"
                className="form-control"
              />
              {this.state.errors["lineItemNumber"] && <div className="alert alert-danger">{this.state.errors["lineItemNumber"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="parentLineItemNumber">Parent Line Item Number</label>
              <input
                value={this.state.data["parentLineItemNumber"]}
                onChange={this.handleChange}
                name="parentLineItemNumber"
                id="parentLineItemNumber"
                type="number"
                className="form-control"
              />
              {this.state.errors["parentLineItemNumber"] && <div className="alert alert-danger">{this.state.errors["parentLineItemNumber"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="note">Note</label>
              <input
                value={this.state.data["note"]}
                onChange={this.handleChange}
                name="note"
                id="note"
                type="number"
                className="form-control"
              />
              {this.state.errors["note"] && <div className="alert alert-danger">{this.state.errors["note"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportCargoCharacteristics">Transport Cargo Characteristics</label>
              <input
                value={this.state.data["transportCargoCharacteristics"]}
                onChange={this.handleChange}
                name="transportCargoCharacteristics"
                id="transportCargoCharacteristics"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportCargoCharacteristics"] && <div className="alert alert-danger">{this.state.errors["transportCargoCharacteristics"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="packageTotal">Package Total</label>
              <input
                value={this.state.data["packageTotal"]}
                onChange={this.handleChange}
                name="packageTotal"
                id="packageTotal"
                type="number"
                className="form-control"
              />
              {this.state.errors["packageTotal"] && <div className="alert alert-danger">{this.state.errors["packageTotal"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticUnit">Logistic Unit</label>
              <input
                value={this.state.data["logisticUnit"]}
                onChange={this.handleChange}
                name="logisticUnit"
                id="logisticUnit"
                type="number"
                className="form-control"
              />
              {this.state.errors["logisticUnit"] && <div className="alert alert-danger">{this.state.errors["logisticUnit"]}</div>}
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
              <label htmlFor="transportReference">Transport Reference</label>
              <input
                value={this.state.data["transportReference"]}
                onChange={this.handleChange}
                name="transportReference"
                id="transportReference"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportReference"] && <div className="alert alert-danger">{this.state.errors["transportReference"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="handlingInstruction">Handling Instruction</label>
              <input
                value={this.state.data["handlingInstruction"]}
                onChange={this.handleChange}
                name="handlingInstruction"
                id="handlingInstruction"
                type="number"
                className="form-control"
              />
              {this.state.errors["handlingInstruction"] && <div className="alert alert-danger">{this.state.errors["handlingInstruction"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsInformation">Dangerous Goods Information</label>
              <input
                value={this.state.data["dangerousGoodsInformation"]}
                onChange={this.handleChange}
                name="dangerousGoodsInformation"
                id="dangerousGoodsInformation"
                type="number"
                className="form-control"
              />
              {this.state.errors["dangerousGoodsInformation"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsInformation"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="avpList">Avp List</label>
              <input
                value={this.state.data["avpList"]}
                onChange={this.handleChange}
                name="avpList"
                id="avpList"
                type="number"
                className="form-control"
              />
              {this.state.errors["avpList"] && <div className="alert alert-danger">{this.state.errors["avpList"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsInformationId">          Dangerous Goods Information <a target="_blank" href="/Dangerousgoodsinformationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedangerousGoodsInformations}> Refresh</a> </label>
              <select
                value={this.state.data["dangerousGoodsInformationId"]}
                onChange={this.handleChange}
                name="dangerousGoodsInformationId"
                id="dangerousGoodsInformationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Dangerousgoodsinformationtype
                  </option>
                  {this.state.dangerousGoodsInformations.map(Dangerousgoodsinformationtype => (
                    <option key={Dangerousgoodsinformationtype._id} value={Dangerousgoodsinformationtype._id}>
                      {Dangerousgoodsinformationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dangerousGoodsInformationId"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsInformationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="noteId">          Note <a target="_blank" href="/Description500types/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatenotes}> Refresh</a> </label>
              <select
                value={this.state.data["noteId"]}
                onChange={this.handleChange}
                name="noteId"
                id="noteId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Description500type
                  </option>
                  {this.state.notes.map(Description500type => (
                    <option key={Description500type._id} value={Description500type._id}>
                      {Description500type.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["noteId"] && <div className="alert alert-danger">{this.state.errors["noteId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="avpListId">          Avp List <a target="_blank" href="/Ecom_attributevaluepairlisttypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateavpLists}> Refresh</a> </label>
              <select
                value={this.state.data["avpListId"]}
                onChange={this.handleChange}
                name="avpListId"
                id="avpListId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Ecom_attributevaluepairlisttype
                  </option>
                  {this.state.avpLists.map(Ecom_attributevaluepairlisttype => (
                    <option key={Ecom_attributevaluepairlisttype._id} value={Ecom_attributevaluepairlisttype._id}>
                      {Ecom_attributevaluepairlisttype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["avpListId"] && <div className="alert alert-danger">{this.state.errors["avpListId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticUnitId">          Logistic Unit <a target="_blank" href="/Logisticunittypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatelogisticUnits}> Refresh</a> </label>
              <select
                value={this.state.data["logisticUnitId"]}
                onChange={this.handleChange}
                name="logisticUnitId"
                id="logisticUnitId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Logisticunittype
                  </option>
                  {this.state.logisticUnits.map(Logisticunittype => (
                    <option key={Logisticunittype._id} value={Logisticunittype._id}>
                      {Logisticunittype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["logisticUnitId"] && <div className="alert alert-danger">{this.state.errors["logisticUnitId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="packageTotalId">          Package Total <a target="_blank" href="/Packagetotaltypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatepackageTotals}> Refresh</a> </label>
              <select
                value={this.state.data["packageTotalId"]}
                onChange={this.handleChange}
                name="packageTotalId"
                id="packageTotalId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Packagetotaltype
                  </option>
                  {this.state.packageTotals.map(Packagetotaltype => (
                    <option key={Packagetotaltype._id} value={Packagetotaltype._id}>
                      {Packagetotaltype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["packageTotalId"] && <div className="alert alert-danger">{this.state.errors["packageTotalId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportCargoCharacteristicsId">          Transport Cargo Characteristics <a target="_blank" href="/Transportcargocharacteristicstypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportCargoCharacteristicss}> Refresh</a> </label>
              <select
                value={this.state.data["transportCargoCharacteristicsId"]}
                onChange={this.handleChange}
                name="transportCargoCharacteristicsId"
                id="transportCargoCharacteristicsId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Transportcargocharacteristicstype
                  </option>
                  {this.state.transportCargoCharacteristicss.map(Transportcargocharacteristicstype => (
                    <option key={Transportcargocharacteristicstype._id} value={Transportcargocharacteristicstype._id}>
                      {Transportcargocharacteristicstype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportCargoCharacteristicsId"] && <div className="alert alert-danger">{this.state.errors["transportCargoCharacteristicsId"]}</div>}
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
                     Select Transportequipmenttype
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
              <label htmlFor="transportReferenceId">          Transport Reference <a target="_blank" href="/Transportreferencetypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportReferences}> Refresh</a> </label>
              <select
                value={this.state.data["transportReferenceId"]}
                onChange={this.handleChange}
                name="transportReferenceId"
                id="transportReferenceId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Transportreferencetype
                  </option>
                  {this.state.transportReferences.map(Transportreferencetype => (
                    <option key={Transportreferencetype._id} value={Transportreferencetype._id}>
                      {Transportreferencetype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportReferenceId"] && <div className="alert alert-danger">{this.state.errors["transportReferenceId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="handlingInstructionId">          Handling Instruction <a target="_blank" href="/Handlinginstructiontypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatehandlingInstructions}> Refresh</a> </label>
              <select
                value={this.state.data["handlingInstructionId"]}
                onChange={this.handleChange}
                name="handlingInstructionId"
                id="handlingInstructionId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Handlinginstructiontype
                  </option>
                  {this.state.handlingInstructions.map(Handlinginstructiontype => (
                    <option key={Handlinginstructiontype._id} value={Handlinginstructiontype._id}>
                      {Handlinginstructiontype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["handlingInstructionId"] && <div className="alert alert-danger">{this.state.errors["handlingInstructionId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createTransportinstructionconsignmentitemtype;