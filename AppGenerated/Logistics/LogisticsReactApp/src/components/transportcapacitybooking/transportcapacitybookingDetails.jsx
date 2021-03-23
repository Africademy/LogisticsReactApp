import React, { Component } from "react";
import { getTransportcapacitybooking } from "../../services/transportcapacitybookingService";
import { getTransportcapacitybookingspacerequirements } from "../../services/transportcapacitybookingspacerequirementService";
import { getTransportcapacitybookingtransportmovementtypes } from "../../services/transportcapacitybookingtransportmovementtypeService";
import { getEcomstringattributevaluepairlists } from "../../services/ecomstringattributevaluepairlistService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";
import { getIncotermscodes } from "../../services/incotermscodeService";

class TransportcapacitybookingDetails extends Component{

  state = {
    data: { id: "", creationDateTime: "", documentStatusCode: "", documentActionCode: "", documentStructureVersion: "", lastUpdateDateTime: "", revisionNumber: "", extension: "", documentEffectiveDate: "", avpList: "", transportCapacityBookingIdentification: "", transportServiceCategoryCode: "", transportServiceConditionTypeCode: "", transportServiceLevelCode: "", logisticServicesBuyer: "", logisticServicesSeller: "", pickUpParty: "", dropOffParty: "", plannedPickUp: "", plannedDropOff: "", transportReference: "", deliveryTerms: "", handlingInstruction: "", transportCapacityBookingSpaceRequirements: "", transportCapacityBookingTransportMovement: "", transportCapacityBookingSpaceRequirementsId: "", transportCapacityBookingTransportMovementId: "", avpListId: "", documentStatusCodeId: "", dropOffPartyId: "", plannedPickUpId: "", plannedDropOffId: "", transportReferenceId: "", handlingInstructionId: "", documentActionCodeId: "", transportCapacityBookingIdentificationId: "", transportServiceCategoryCodeId: "", transportServiceConditionTypeCodeId: "", transportServiceLevelCodeId: "", logisticServicesBuyerId: "", logisticServicesSellerId: "", pickUpPartyId: "", deliveryTermsId: "", },
    transportCapacityBookingSpaceRequirementss: [],
    transportCapacityBookingTransportMovements: [],
    avpLists: [],
    documentStatusCodes: [],
    dropOffPartys: [],
    plannedPickUps: [],
    plannedDropOffs: [],
    transportReferences: [],
    handlingInstructions: [],
    documentActionCodes: [],
    transportCapacityBookingIdentifications: [],
    transportServiceCategoryCodes: [],
    transportServiceConditionTypeCodes: [],
    transportServiceLevelCodes: [],
    logisticServicesBuyers: [],
    logisticServicesSellers: [],
    pickUpPartys: [],
    deliveryTermss: [],
    errors: {}
  };

  async populateForm() {
    try {
        const transportcapacitybookingId = this.props.match.params.id;
        const { data } = await getTransportcapacitybooking(transportcapacitybookingId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatetransportCapacityBookingSpaceRequirementss() {
    const { data } = await getTransportcapacitybookingspacerequirements();
    this.setState({ transportCapacityBookingSpaceRequirementss: data });
  }

  async populatetransportCapacityBookingTransportMovements() {
    const { data } = await getTransportcapacitybookingtransportmovementtypes();
    this.setState({ transportCapacityBookingTransportMovements: data });
  }

  async populateavpLists() {
    const { data } = await getEcomstringattributevaluepairlists();
    this.setState({ avpLists: data });
  }

  async populatedocumentStatusCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ documentStatusCodes: data });
  }

  async populatedropOffPartys() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ dropOffPartys: data });
  }

  async populateplannedPickUps() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ plannedPickUps: data });
  }

  async populateplannedDropOffs() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ plannedDropOffs: data });
  }

  async populatetransportReferences() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ transportReferences: data });
  }

  async populatehandlingInstructions() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ handlingInstructions: data });
  }

  async populatedocumentActionCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ documentActionCodes: data });
  }

  async populatetransportCapacityBookingIdentifications() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ transportCapacityBookingIdentifications: data });
  }

  async populatetransportServiceCategoryCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ transportServiceCategoryCodes: data });
  }

  async populatetransportServiceConditionTypeCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ transportServiceConditionTypeCodes: data });
  }

  async populatetransportServiceLevelCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ transportServiceLevelCodes: data });
  }

  async populatelogisticServicesBuyers() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ logisticServicesBuyers: data });
  }

  async populatelogisticServicesSellers() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ logisticServicesSellers: data });
  }

  async populatepickUpPartys() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ pickUpPartys: data });
  }

  async populatedeliveryTermss() {
    const { data } = await getIncotermscodes();
    this.setState({ deliveryTermss: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatetransportCapacityBookingSpaceRequirementss();
    await this.populatetransportCapacityBookingTransportMovements();
    await this.populateavpLists();
    await this.populatedocumentStatusCodes();
    await this.populatedropOffPartys();
    await this.populateplannedPickUps();
    await this.populateplannedDropOffs();
    await this.populatetransportReferences();
    await this.populatehandlingInstructions();
    await this.populatedocumentActionCodes();
    await this.populatetransportCapacityBookingIdentifications();
    await this.populatetransportServiceCategoryCodes();
    await this.populatetransportServiceConditionTypeCodes();
    await this.populatetransportServiceLevelCodes();
    await this.populatelogisticServicesBuyers();
    await this.populatelogisticServicesSellers();
    await this.populatepickUpPartys();
    await this.populatedeliveryTermss();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/transportcapacitybookings");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportcapacitybooking Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Creation Date Time : 
                 {this.state.data["creationDateTime"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Document Status Code : 
                 {this.state.data["documentStatusCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Document Action Code : 
                 {this.state.data["documentActionCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Document Structure Version : 
                 {this.state.data["documentStructureVersion"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Last Update Date Time : 
                 {this.state.data["lastUpdateDateTime"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Revision Number : 
                 {this.state.data["revisionNumber"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Extension : 
                 {this.state.data["extension"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Document Effective Date : 
                 {this.state.data["documentEffectiveDate"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Avp List : 
                 {this.state.data["avpList"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Capacity Booking Identification : 
                 {this.state.data["transportCapacityBookingIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Service Category Code : 
                 {this.state.data["transportServiceCategoryCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Service Condition Type Code : 
                 {this.state.data["transportServiceConditionTypeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Service Level Code : 
                 {this.state.data["transportServiceLevelCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Services Buyer : 
                 {this.state.data["logisticServicesBuyer"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Services Seller : 
                 {this.state.data["logisticServicesSeller"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Pick Up Party : 
                 {this.state.data["pickUpParty"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Drop Off Party : 
                 {this.state.data["dropOffParty"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Planned Pick Up : 
                 {this.state.data["plannedPickUp"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Planned Drop Off : 
                 {this.state.data["plannedDropOff"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Reference : 
                 {this.state.data["transportReference"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Delivery Terms : 
                 {this.state.data["deliveryTerms"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Handling Instruction : 
                 {this.state.data["handlingInstruction"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Capacity Booking Space Requirements : 
                 {this.state.data["transportCapacityBookingSpaceRequirements"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Capacity Booking Transport Movement : 
                 {this.state.data["transportCapacityBookingTransportMovement"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Capacity Booking Space Requirements : 
                  {this.state.transportCapacityBookingSpaceRequirementss.map(Transportcapacitybookingspacerequirement => 
                      this.state.data["transportCapacityBookingSpaceRequirementsId"] == Transportcapacitybookingspacerequirement._id ? " "+ Transportcapacitybookingspacerequirement.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Capacity Booking Transport Movement : 
                  {this.state.transportCapacityBookingTransportMovements.map(Transportcapacitybookingtransportmovementtype => 
                      this.state.data["transportCapacityBookingTransportMovementId"] == Transportcapacitybookingtransportmovementtype._id ? " "+ Transportcapacitybookingtransportmovementtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Avp List : 
                  {this.state.avpLists.map(Ecomstringattributevaluepairlist => 
                      this.state.data["avpListId"] == Ecomstringattributevaluepairlist._id ? " "+ Ecomstringattributevaluepairlist.qualifierCodeName : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Document Status Code : 
                  {this.state.documentStatusCodes.map(Enumerationlibrary => 
                      this.state.data["documentStatusCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Drop Off Party : 
                  {this.state.dropOffPartys.map(Enumerationlibrary => 
                      this.state.data["dropOffPartyId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Planned Pick Up : 
                  {this.state.plannedPickUps.map(Enumerationlibrary => 
                      this.state.data["plannedPickUpId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Planned Drop Off : 
                  {this.state.plannedDropOffs.map(Enumerationlibrary => 
                      this.state.data["plannedDropOffId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Reference : 
                  {this.state.transportReferences.map(Enumerationlibrary => 
                      this.state.data["transportReferenceId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Handling Instruction : 
                  {this.state.handlingInstructions.map(Enumerationlibrary => 
                      this.state.data["handlingInstructionId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Document Action Code : 
                  {this.state.documentActionCodes.map(Enumerationlibrary => 
                      this.state.data["documentActionCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Capacity Booking Identification : 
                  {this.state.transportCapacityBookingIdentifications.map(Enumerationlibrary => 
                      this.state.data["transportCapacityBookingIdentificationId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Service Category Code : 
                  {this.state.transportServiceCategoryCodes.map(Enumerationlibrary => 
                      this.state.data["transportServiceCategoryCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Service Condition Type Code : 
                  {this.state.transportServiceConditionTypeCodes.map(Enumerationlibrary => 
                      this.state.data["transportServiceConditionTypeCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Service Level Code : 
                  {this.state.transportServiceLevelCodes.map(Enumerationlibrary => 
                      this.state.data["transportServiceLevelCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Services Buyer : 
                  {this.state.logisticServicesBuyers.map(Enumerationlibrary => 
                      this.state.data["logisticServicesBuyerId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Services Seller : 
                  {this.state.logisticServicesSellers.map(Enumerationlibrary => 
                      this.state.data["logisticServicesSellerId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Pick Up Party : 
                  {this.state.pickUpPartys.map(Enumerationlibrary => 
                      this.state.data["pickUpPartyId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Delivery Terms : 
                  {this.state.deliveryTermss.map(Incotermscode => 
                      this.state.data["deliveryTermsId"] == Incotermscode._id ? " "+ Incotermscode.codeListVersion : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default TransportcapacitybookingDetails;