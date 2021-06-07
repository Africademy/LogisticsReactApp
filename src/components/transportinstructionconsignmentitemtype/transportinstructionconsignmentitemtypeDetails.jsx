import React, { Component } from "react";
import { getTransportinstructionconsignmentitemtype } from "../../services/transportinstructionconsignmentitemtypeService";
import { getDangerousgoodsinformationtypes } from "../../services/dangerousgoodsinformationtypeService";
import { getDescription500types } from "../../services/description500typeService";
import { getEcom_attributevaluepairlisttypes } from "../../services/ecom_attributevaluepairlisttypeService";
import { getLogisticunittypes } from "../../services/logisticunittypeService";
import { getPackagetotaltypes } from "../../services/packagetotaltypeService";
import { getTransportcargocharacteristicstypes } from "../../services/transportcargocharacteristicstypeService";
import { getTransportequipmenttypes } from "../../services/transportequipmenttypeService";
import { getTransportreferencetypes } from "../../services/transportreferencetypeService";
import { getHandlinginstructiontypes } from "../../services/handlinginstructiontypeService";

class TransportinstructionconsignmentitemtypeDetails extends Component{

  state = {
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

  async populateForm() {
    try {
        const transportinstructionconsignmentitemtypeId = this.props.match.params.id;
        const { data } = await getTransportinstructionconsignmentitemtype(transportinstructionconsignmentitemtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatedangerousGoodsInformations() {
    const { data } = await getDangerousgoodsinformationtypes();
    this.setState({ dangerousGoodsInformations: data });
  }

  async populatenotes() {
    const { data } = await getDescription500types();
    this.setState({ notes: data });
  }

  async populateavpLists() {
    const { data } = await getEcom_attributevaluepairlisttypes();
    this.setState({ avpLists: data });
  }

  async populatelogisticUnits() {
    const { data } = await getLogisticunittypes();
    this.setState({ logisticUnits: data });
  }

  async populatepackageTotals() {
    const { data } = await getPackagetotaltypes();
    this.setState({ packageTotals: data });
  }

  async populatetransportCargoCharacteristicss() {
    const { data } = await getTransportcargocharacteristicstypes();
    this.setState({ transportCargoCharacteristicss: data });
  }

  async populatereferencedTransportEquipments() {
    const { data } = await getTransportequipmenttypes();
    this.setState({ referencedTransportEquipments: data });
  }

  async populatetransportReferences() {
    const { data } = await getTransportreferencetypes();
    this.setState({ transportReferences: data });
  }

  async populatehandlingInstructions() {
    const { data } = await getHandlinginstructiontypes();
    this.setState({ handlingInstructions: data });
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

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/transportinstructionconsignmentitemtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportinstructionconsignmentitemtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Line Item Number : 
                 {this.state.data["lineItemNumber"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Parent Line Item Number : 
                 {this.state.data["parentLineItemNumber"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Note : 
                 {this.state.data["note"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Cargo Characteristics : 
                 {this.state.data["transportCargoCharacteristics"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Package Total : 
                 {this.state.data["packageTotal"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Unit : 
                 {this.state.data["logisticUnit"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Referenced Transport Equipment : 
                 {this.state.data["referencedTransportEquipment"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Reference : 
                 {this.state.data["transportReference"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Handling Instruction : 
                 {this.state.data["handlingInstruction"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Information : 
                 {this.state.data["dangerousGoodsInformation"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Avp List : 
                 {this.state.data["avpList"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Information : 
                  {this.state.dangerousGoodsInformations.map(Dangerousgoodsinformationtype => 
                      this.state.data["dangerousGoodsInformationId"] == Dangerousgoodsinformationtype._id ? " "+ Dangerousgoodsinformationtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Note : 
                  {this.state.notes.map(Description500type => 
                      this.state.data["noteId"] == Description500type._id ? " "+ Description500type.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Avp List : 
                  {this.state.avpLists.map(Ecom_attributevaluepairlisttype => 
                      this.state.data["avpListId"] == Ecom_attributevaluepairlisttype._id ? " "+ Ecom_attributevaluepairlisttype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Unit : 
                  {this.state.logisticUnits.map(Logisticunittype => 
                      this.state.data["logisticUnitId"] == Logisticunittype._id ? " "+ Logisticunittype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Package Total : 
                  {this.state.packageTotals.map(Packagetotaltype => 
                      this.state.data["packageTotalId"] == Packagetotaltype._id ? " "+ Packagetotaltype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Cargo Characteristics : 
                  {this.state.transportCargoCharacteristicss.map(Transportcargocharacteristicstype => 
                      this.state.data["transportCargoCharacteristicsId"] == Transportcargocharacteristicstype._id ? " "+ Transportcargocharacteristicstype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Referenced Transport Equipment : 
                  {this.state.referencedTransportEquipments.map(Transportequipmenttype => 
                      this.state.data["referencedTransportEquipmentId"] == Transportequipmenttype._id ? " "+ Transportequipmenttype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Reference : 
                  {this.state.transportReferences.map(Transportreferencetype => 
                      this.state.data["transportReferenceId"] == Transportreferencetype._id ? " "+ Transportreferencetype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Handling Instruction : 
                  {this.state.handlingInstructions.map(Handlinginstructiontype => 
                      this.state.data["handlingInstructionId"] == Handlinginstructiontype._id ? " "+ Handlinginstructiontype.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default TransportinstructionconsignmentitemtypeDetails;