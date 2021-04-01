import React, { Component } from "react";
import Joi from "joi-browser";
import { saveTransportcapacitybooking, getTransportcapacitybooking } from "../../services/transportcapacitybookingService";
import { getTransportcapacitybookingspacerequirements } from "../../services/transportcapacitybookingspacerequirementService";
import { getTransportcapacitybookingtransportmovementtypes } from "../../services/transportcapacitybookingtransportmovementtypeService";
import { getEcomstringattributevaluepairlists } from "../../services/ecomstringattributevaluepairlistService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";
import { getIncotermscodes } from "../../services/incotermscodeService";

class createTransportcapacitybooking extends Component{

 constructor(props){
super(props);
    this.populatetransportCapacityBookingSpaceRequirementss = this.populatetransportCapacityBookingSpaceRequirementss.bind(this);
    this.populatetransportCapacityBookingTransportMovements = this.populatetransportCapacityBookingTransportMovements.bind(this);
    this.populateavpLists = this.populateavpLists.bind(this);
    this.populatedocumentStatusCodes = this.populatedocumentStatusCodes.bind(this);
    this.populatedropOffPartys = this.populatedropOffPartys.bind(this);
    this.populateplannedPickUps = this.populateplannedPickUps.bind(this);
    this.populateplannedDropOffs = this.populateplannedDropOffs.bind(this);
    this.populatetransportReferences = this.populatetransportReferences.bind(this);
    this.populatehandlingInstructions = this.populatehandlingInstructions.bind(this);
    this.populatedocumentActionCodes = this.populatedocumentActionCodes.bind(this);
    this.populatetransportCapacityBookingIdentifications = this.populatetransportCapacityBookingIdentifications.bind(this);
    this.populatetransportServiceCategoryCodes = this.populatetransportServiceCategoryCodes.bind(this);
    this.populatetransportServiceConditionTypeCodes = this.populatetransportServiceConditionTypeCodes.bind(this);
    this.populatetransportServiceLevelCodes = this.populatetransportServiceLevelCodes.bind(this);
    this.populatelogisticServicesBuyers = this.populatelogisticServicesBuyers.bind(this);
    this.populatelogisticServicesSellers = this.populatelogisticServicesSellers.bind(this);
    this.populatepickUpPartys = this.populatepickUpPartys.bind(this);
    this.populatedeliveryTermss = this.populatedeliveryTermss.bind(this);
}  state = {
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

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    creationDateTime:  Joi.date()
      .required()


      .label("creationDateTime"),
    documentStatusCode:  Joi.number()
      .required()


      .label("documentStatusCode"),
    documentActionCode:  Joi.number()



      .label("documentActionCode"),
    documentStructureVersion:  Joi.string()
      .allow('').allow(null)



      .label("documentStructureVersion"),
    lastUpdateDateTime:  Joi.date()
      .allow('').allow(null)



      .label("lastUpdateDateTime"),
    revisionNumber:  Joi.number()



      .label("revisionNumber"),
    extension:  Joi.string()
      .allow('').allow(null)



      .label("extension"),
    documentEffectiveDate:  Joi.date()
      .allow('').allow(null)



      .label("documentEffectiveDate"),
    avpList:  Joi.string()
      .allow('').allow(null)



      .label("avpList"),
    transportCapacityBookingIdentification:  Joi.number()



      .label("transportCapacityBookingIdentification"),
    transportServiceCategoryCode:  Joi.number()
      .required()


      .label("transportServiceCategoryCode"),
   


    logisticServicesBuyer:  Joi.number()
      .required()


      .label("logisticServicesBuyer"),
    logisticServicesSeller:  Joi.number()
      .required()


      .label("logisticServicesSeller"),
    pickUpParty:  Joi.number()



      .label("pickUpParty"),
    dropOffParty:  Joi.number()



      .label("dropOffParty"),
    plannedPickUp:  Joi.number()



      .label("plannedPickUp"),
    plannedDropOff:  Joi.number()



      .label("plannedDropOff"),
    transportReference:  Joi.number()



      .label("transportReference"),
    deliveryTerms:  Joi.string()
      .allow('').allow(null)



      .label("deliveryTerms"),
    handlingInstruction:  Joi.number()



      .label("handlingInstruction"),
    transportCapacityBookingSpaceRequirements:  Joi.number()
      .required()


      .label("transportCapacityBookingSpaceRequirements"),
    transportCapacityBookingTransportMovement:  Joi.number()



      .label("transportCapacityBookingTransportMovement"),
    transportCapacityBookingSpaceRequirementsId:  Joi.string()
      .required()
      .label("transportCapacityBookingSpaceRequirementsId"),
    transportCapacityBookingTransportMovementId:  Joi.string()
      .required()
      .label("transportCapacityBookingTransportMovementId"),
    avpListId:  Joi.string()
      .required()
      .label("avpListId"),
    documentStatusCodeId:  Joi.string()
      .required()
      .label("documentStatusCodeId"),
    dropOffPartyId:  Joi.string()
      .required()
      .label("dropOffPartyId"),
    plannedPickUpId:  Joi.string()
      .required()
      .label("plannedPickUpId"),
    plannedDropOffId:  Joi.string()
      .required()
      .label("plannedDropOffId"),
    transportReferenceId:  Joi.string()
      .required()
      .label("transportReferenceId"),
    handlingInstructionId:  Joi.string()
      .required()
      .label("handlingInstructionId"),
    documentActionCodeId:  Joi.string()
      .required()
      .label("documentActionCodeId"),
    transportCapacityBookingIdentificationId:  Joi.string()
      .required()
      .label("transportCapacityBookingIdentificationId"),
    transportServiceCategoryCodeId:  Joi.string()
      .required()
      .label("transportServiceCategoryCodeId"),
    transportServiceConditionTypeCodeId:  Joi.string()
      .required()
      .label("transportServiceConditionTypeCodeId"),
    transportServiceLevelCodeId:  Joi.string()
      .required()
      .label("transportServiceLevelCodeId"),
    logisticServicesBuyerId:  Joi.string()
      .required()
      .label("logisticServicesBuyerId"),
    logisticServicesSellerId:  Joi.string()
      .required()
      .label("logisticServicesSellerId"),
    pickUpPartyId:  Joi.string()
      .required()
      .label("pickUpPartyId"),
    deliveryTermsId:  Joi.string()
      .required()
      .label("deliveryTermsId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const transportcapacitybookingId = this.props.match.params.id;
      if(transportcapacitybookingId!=="new"){
        const { data } = await getTransportcapacitybooking(transportcapacitybookingId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatetransportCapacityBookingSpaceRequirementss() {
    const { data: transportCapacityBookingSpaceRequirementss } = await getTransportcapacitybookingspacerequirements();
    this.setState({ transportCapacityBookingSpaceRequirementss: transportCapacityBookingSpaceRequirementss });
  }

  async populatetransportCapacityBookingTransportMovements() {
    const { data: transportCapacityBookingTransportMovements } = await getTransportcapacitybookingtransportmovementtypes();
    this.setState({ transportCapacityBookingTransportMovements: transportCapacityBookingTransportMovements });
  }

  async populateavpLists() {
    const { data: avpLists } = await getEcomstringattributevaluepairlists();
    this.setState({ avpLists: avpLists });
  }

  async populatedocumentStatusCodes() {
    const { data: documentStatusCodes } = await getEnumerationlibrarys();
    this.setState({ documentStatusCodes: documentStatusCodes });
  }

  async populatedropOffPartys() {
    const { data: dropOffPartys } = await getEnumerationlibrarys();
    this.setState({ dropOffPartys: dropOffPartys });
  }

  async populateplannedPickUps() {
    const { data: plannedPickUps } = await getEnumerationlibrarys();
    this.setState({ plannedPickUps: plannedPickUps });
  }

  async populateplannedDropOffs() {
    const { data: plannedDropOffs } = await getEnumerationlibrarys();
    this.setState({ plannedDropOffs: plannedDropOffs });
  }

  async populatetransportReferences() {
    const { data: transportReferences } = await getEnumerationlibrarys();
    this.setState({ transportReferences: transportReferences });
  }

  async populatehandlingInstructions() {
    const { data: handlingInstructions } = await getEnumerationlibrarys();
    this.setState({ handlingInstructions: handlingInstructions });
  }

  async populatedocumentActionCodes() {
    const { data: documentActionCodes } = await getEnumerationlibrarys();
    this.setState({ documentActionCodes: documentActionCodes });
  }

  async populatetransportCapacityBookingIdentifications() {
    const { data: transportCapacityBookingIdentifications } = await getEnumerationlibrarys();
    this.setState({ transportCapacityBookingIdentifications: transportCapacityBookingIdentifications });
  }

  async populatetransportServiceCategoryCodes() {
    const { data: transportServiceCategoryCodes } = await getEnumerationlibrarys();
    this.setState({ transportServiceCategoryCodes: transportServiceCategoryCodes });
  }

  async populatetransportServiceConditionTypeCodes() {
    const { data: transportServiceConditionTypeCodes } = await getEnumerationlibrarys();
    this.setState({ transportServiceConditionTypeCodes: transportServiceConditionTypeCodes });
  }

  async populatetransportServiceLevelCodes() {
    const { data: transportServiceLevelCodes } = await getEnumerationlibrarys();
    this.setState({ transportServiceLevelCodes: transportServiceLevelCodes });
  }

  async populatelogisticServicesBuyers() {
    const { data: logisticServicesBuyers } = await getEnumerationlibrarys();
    this.setState({ logisticServicesBuyers: logisticServicesBuyers });
  }

  async populatelogisticServicesSellers() {
    const { data: logisticServicesSellers } = await getEnumerationlibrarys();
    this.setState({ logisticServicesSellers: logisticServicesSellers });
  }

  async populatepickUpPartys() {
    const { data: pickUpPartys } = await getEnumerationlibrarys();
    this.setState({ pickUpPartys: pickUpPartys });
  }

  async populatedeliveryTermss() {
    const { data: deliveryTermss } = await getIncotermscodes();
    this.setState({ deliveryTermss: deliveryTermss });
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
    await saveTransportcapacitybooking(this.state.data);
    this.props.history.push("/transportcapacitybookings");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportcapacitybooking Form</h1>
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
              <label htmlFor="creationDateTime">Creation Date Time</label>
              <input
                value={this.state.data["creationDateTime"].substring(0, 10)}
                onChange={this.handleChange}
                name="creationDateTime"
                id="creationDateTime"
                type="date"
                className="form-control"
              />
              {this.state.errors["creationDateTime"] && <div className="alert alert-danger">{this.state.errors["creationDateTime"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="documentStatusCode">Document Status Code</label>
              <input
                value={this.state.data["documentStatusCode"]}
                onChange={this.handleChange}
                name="documentStatusCode"
                id="documentStatusCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["documentStatusCode"] && <div className="alert alert-danger">{this.state.errors["documentStatusCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="documentActionCode">Document Action Code</label>
              <input
                value={this.state.data["documentActionCode"]}
                onChange={this.handleChange}
                name="documentActionCode"
                id="documentActionCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["documentActionCode"] && <div className="alert alert-danger">{this.state.errors["documentActionCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="documentStructureVersion">Document Structure Version</label>
              <input
                value={this.state.data["documentStructureVersion"]}
                onChange={this.handleChange}
                name="documentStructureVersion"
                id="documentStructureVersion"
                type="text"
                className="form-control"
              />
              {this.state.errors["documentStructureVersion"] && <div className="alert alert-danger">{this.state.errors["documentStructureVersion"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="lastUpdateDateTime">Last Update Date Time</label>
              <input
                value={this.state.data["lastUpdateDateTime"].substring(0, 10)}
                onChange={this.handleChange}
                name="lastUpdateDateTime"
                id="lastUpdateDateTime"
                type="date"
                className="form-control"
              />
              {this.state.errors["lastUpdateDateTime"] && <div className="alert alert-danger">{this.state.errors["lastUpdateDateTime"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="revisionNumber">Revision Number</label>
              <input
                value={this.state.data["revisionNumber"]}
                onChange={this.handleChange}
                name="revisionNumber"
                id="revisionNumber"
                type="number"
                className="form-control"
              />
              {this.state.errors["revisionNumber"] && <div className="alert alert-danger">{this.state.errors["revisionNumber"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="extension">Extension</label>
              <input
                value={this.state.data["extension"]}
                onChange={this.handleChange}
                name="extension"
                id="extension"
                type="text"
                className="form-control"
              />
              {this.state.errors["extension"] && <div className="alert alert-danger">{this.state.errors["extension"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="documentEffectiveDate">Document Effective Date</label>
              <input
                value={this.state.data["documentEffectiveDate"].substring(0, 10)}
                onChange={this.handleChange}
                name="documentEffectiveDate"
                id="documentEffectiveDate"
                type="date"
                className="form-control"
              />
              {this.state.errors["documentEffectiveDate"] && <div className="alert alert-danger">{this.state.errors["documentEffectiveDate"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="avpList">Avp List</label>
              <input
                value={this.state.data["avpList"]}
                onChange={this.handleChange}
                name="avpList"
                id="avpList"
                type="text"
                className="form-control"
              />
              {this.state.errors["avpList"] && <div className="alert alert-danger">{this.state.errors["avpList"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportCapacityBookingIdentification">Transport Capacity Booking Identification</label>
              <input
                value={this.state.data["transportCapacityBookingIdentification"]}
                onChange={this.handleChange}
                name="transportCapacityBookingIdentification"
                id="transportCapacityBookingIdentification"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportCapacityBookingIdentification"] && <div className="alert alert-danger">{this.state.errors["transportCapacityBookingIdentification"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportServiceCategoryCode">Transport Service Category Code</label>
              <input
                value={this.state.data["transportServiceCategoryCode"]}
                onChange={this.handleChange}
                name="transportServiceCategoryCode"
                id="transportServiceCategoryCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportServiceCategoryCode"] && <div className="alert alert-danger">{this.state.errors["transportServiceCategoryCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportServiceConditionTypeCode">Transport Service Condition Type Code</label>
              <input
                value={this.state.data["transportServiceConditionTypeCode"]}
                onChange={this.handleChange}
                name="transportServiceConditionTypeCode"
                id="transportServiceConditionTypeCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportServiceConditionTypeCode"] && <div className="alert alert-danger">{this.state.errors["transportServiceConditionTypeCode"]}</div>}
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
              <label htmlFor="logisticServicesBuyer">Logistic Services Buyer</label>
              <input
                value={this.state.data["logisticServicesBuyer"]}
                onChange={this.handleChange}
                name="logisticServicesBuyer"
                id="logisticServicesBuyer"
                type="number"
                className="form-control"
              />
              {this.state.errors["logisticServicesBuyer"] && <div className="alert alert-danger">{this.state.errors["logisticServicesBuyer"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticServicesSeller">Logistic Services Seller</label>
              <input
                value={this.state.data["logisticServicesSeller"]}
                onChange={this.handleChange}
                name="logisticServicesSeller"
                id="logisticServicesSeller"
                type="number"
                className="form-control"
              />
              {this.state.errors["logisticServicesSeller"] && <div className="alert alert-danger">{this.state.errors["logisticServicesSeller"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="pickUpParty">Pick Up Party</label>
              <input
                value={this.state.data["pickUpParty"]}
                onChange={this.handleChange}
                name="pickUpParty"
                id="pickUpParty"
                type="number"
                className="form-control"
              />
              {this.state.errors["pickUpParty"] && <div className="alert alert-danger">{this.state.errors["pickUpParty"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dropOffParty">Drop Off Party</label>
              <input
                value={this.state.data["dropOffParty"]}
                onChange={this.handleChange}
                name="dropOffParty"
                id="dropOffParty"
                type="number"
                className="form-control"
              />
              {this.state.errors["dropOffParty"] && <div className="alert alert-danger">{this.state.errors["dropOffParty"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="plannedPickUp">Planned Pick Up</label>
              <input
                value={this.state.data["plannedPickUp"]}
                onChange={this.handleChange}
                name="plannedPickUp"
                id="plannedPickUp"
                type="number"
                className="form-control"
              />
              {this.state.errors["plannedPickUp"] && <div className="alert alert-danger">{this.state.errors["plannedPickUp"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="plannedDropOff">Planned Drop Off</label>
              <input
                value={this.state.data["plannedDropOff"]}
                onChange={this.handleChange}
                name="plannedDropOff"
                id="plannedDropOff"
                type="number"
                className="form-control"
              />
              {this.state.errors["plannedDropOff"] && <div className="alert alert-danger">{this.state.errors["plannedDropOff"]}</div>}
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
              <label htmlFor="deliveryTerms">Delivery Terms</label>
              <input
                value={this.state.data["deliveryTerms"]}
                onChange={this.handleChange}
                name="deliveryTerms"
                id="deliveryTerms"
                type="text"
                className="form-control"
              />
              {this.state.errors["deliveryTerms"] && <div className="alert alert-danger">{this.state.errors["deliveryTerms"]}</div>}
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
              <label htmlFor="transportCapacityBookingSpaceRequirements">Transport Capacity Booking Space Requirements</label>
              <input
                value={this.state.data["transportCapacityBookingSpaceRequirements"]}
                onChange={this.handleChange}
                name="transportCapacityBookingSpaceRequirements"
                id="transportCapacityBookingSpaceRequirements"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportCapacityBookingSpaceRequirements"] && <div className="alert alert-danger">{this.state.errors["transportCapacityBookingSpaceRequirements"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportCapacityBookingTransportMovement">Transport Capacity Booking Transport Movement</label>
              <input
                value={this.state.data["transportCapacityBookingTransportMovement"]}
                onChange={this.handleChange}
                name="transportCapacityBookingTransportMovement"
                id="transportCapacityBookingTransportMovement"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportCapacityBookingTransportMovement"] && <div className="alert alert-danger">{this.state.errors["transportCapacityBookingTransportMovement"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportCapacityBookingSpaceRequirementsId">          Transport Capacity Booking Space Requirements <a target="_blank" href="/Transportcapacitybookingspacerequirements/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportCapacityBookingSpaceRequirementss}> Refresh</a> </label>
              <select
                value={this.state.data["transportCapacityBookingSpaceRequirementsId"]}
                onChange={this.handleChange}
                name="transportCapacityBookingSpaceRequirementsId"
                id="transportCapacityBookingSpaceRequirementsId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Transportcapacitybookingspacerequirement
                  </option>
                  {this.state.transportCapacityBookingSpaceRequirementss.map(Transportcapacitybookingspacerequirement => (
                    <option key={Transportcapacitybookingspacerequirement._id} value={Transportcapacitybookingspacerequirement._id}>
                      {Transportcapacitybookingspacerequirement.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportCapacityBookingSpaceRequirementsId"] && <div className="alert alert-danger">{this.state.errors["transportCapacityBookingSpaceRequirementsId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportCapacityBookingTransportMovementId">          Transport Capacity Booking Transport Movement <a target="_blank" href="/Transportcapacitybookingtransportmovementtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportCapacityBookingTransportMovements}> Refresh</a> </label>
              <select
                value={this.state.data["transportCapacityBookingTransportMovementId"]}
                onChange={this.handleChange}
                name="transportCapacityBookingTransportMovementId"
                id="transportCapacityBookingTransportMovementId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Transportcapacitybookingtransportmovementtype
                  </option>
                  {this.state.transportCapacityBookingTransportMovements.map(Transportcapacitybookingtransportmovementtype => (
                    <option key={Transportcapacitybookingtransportmovementtype._id} value={Transportcapacitybookingtransportmovementtype._id}>
                      {Transportcapacitybookingtransportmovementtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportCapacityBookingTransportMovementId"] && <div className="alert alert-danger">{this.state.errors["transportCapacityBookingTransportMovementId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="avpListId">          Avp List <a target="_blank" href="/Ecomstringattributevaluepairlists/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateavpLists}> Refresh</a> </label>
              <select
                value={this.state.data["avpListId"]}
                onChange={this.handleChange}
                name="avpListId"
                id="avpListId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Ecomstringattributevaluepairlist
                  </option>
                  {this.state.avpLists.map(Ecomstringattributevaluepairlist => (
                    <option key={Ecomstringattributevaluepairlist._id} value={Ecomstringattributevaluepairlist._id}>
                      {Ecomstringattributevaluepairlist.qualifierCodeName}
                    </option>
                  ))}
              </select>
              {this.state.errors["avpListId"] && <div className="alert alert-danger">{this.state.errors["avpListId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="documentStatusCodeId">          Document Status Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedocumentStatusCodes}> Refresh</a> </label>
              <select
                value={this.state.data["documentStatusCodeId"]}
                onChange={this.handleChange}
                name="documentStatusCodeId"
                id="documentStatusCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.documentStatusCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["documentStatusCodeId"] && <div className="alert alert-danger">{this.state.errors["documentStatusCodeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dropOffPartyId">          Drop Off Party <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedropOffPartys}> Refresh</a> </label>
              <select
                value={this.state.data["dropOffPartyId"]}
                onChange={this.handleChange}
                name="dropOffPartyId"
                id="dropOffPartyId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.dropOffPartys.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dropOffPartyId"] && <div className="alert alert-danger">{this.state.errors["dropOffPartyId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="plannedPickUpId">          Planned Pick Up <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateplannedPickUps}> Refresh</a> </label>
              <select
                value={this.state.data["plannedPickUpId"]}
                onChange={this.handleChange}
                name="plannedPickUpId"
                id="plannedPickUpId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.plannedPickUps.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["plannedPickUpId"] && <div className="alert alert-danger">{this.state.errors["plannedPickUpId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="plannedDropOffId">          Planned Drop Off <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateplannedDropOffs}> Refresh</a> </label>
              <select
                value={this.state.data["plannedDropOffId"]}
                onChange={this.handleChange}
                name="plannedDropOffId"
                id="plannedDropOffId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.plannedDropOffs.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["plannedDropOffId"] && <div className="alert alert-danger">{this.state.errors["plannedDropOffId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportReferenceId">          Transport Reference <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportReferences}> Refresh</a> </label>
              <select
                value={this.state.data["transportReferenceId"]}
                onChange={this.handleChange}
                name="transportReferenceId"
                id="transportReferenceId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.transportReferences.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportReferenceId"] && <div className="alert alert-danger">{this.state.errors["transportReferenceId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="handlingInstructionId">          Handling Instruction <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatehandlingInstructions}> Refresh</a> </label>
              <select
                value={this.state.data["handlingInstructionId"]}
                onChange={this.handleChange}
                name="handlingInstructionId"
                id="handlingInstructionId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.handlingInstructions.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["handlingInstructionId"] && <div className="alert alert-danger">{this.state.errors["handlingInstructionId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="documentActionCodeId">          Document Action Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedocumentActionCodes}> Refresh</a> </label>
              <select
                value={this.state.data["documentActionCodeId"]}
                onChange={this.handleChange}
                name="documentActionCodeId"
                id="documentActionCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.documentActionCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["documentActionCodeId"] && <div className="alert alert-danger">{this.state.errors["documentActionCodeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportCapacityBookingIdentificationId">          Transport Capacity Booking Identification <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportCapacityBookingIdentifications}> Refresh</a> </label>
              <select
                value={this.state.data["transportCapacityBookingIdentificationId"]}
                onChange={this.handleChange}
                name="transportCapacityBookingIdentificationId"
                id="transportCapacityBookingIdentificationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.transportCapacityBookingIdentifications.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportCapacityBookingIdentificationId"] && <div className="alert alert-danger">{this.state.errors["transportCapacityBookingIdentificationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportServiceCategoryCodeId">          Transport Service Category Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportServiceCategoryCodes}> Refresh</a> </label>
              <select
                value={this.state.data["transportServiceCategoryCodeId"]}
                onChange={this.handleChange}
                name="transportServiceCategoryCodeId"
                id="transportServiceCategoryCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.transportServiceCategoryCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportServiceCategoryCodeId"] && <div className="alert alert-danger">{this.state.errors["transportServiceCategoryCodeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportServiceConditionTypeCodeId">          Transport Service Condition Type Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportServiceConditionTypeCodes}> Refresh</a> </label>
              <select
                value={this.state.data["transportServiceConditionTypeCodeId"]}
                onChange={this.handleChange}
                name="transportServiceConditionTypeCodeId"
                id="transportServiceConditionTypeCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.transportServiceConditionTypeCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportServiceConditionTypeCodeId"] && <div className="alert alert-danger">{this.state.errors["transportServiceConditionTypeCodeId"]}</div>}
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
               {this.state.errors["transportServiceLevelCodeId"] && <div className="alert alert-danger">{this.state.errors["transportServiceLevelCodeId"]}</div>}
                     {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
          </div>

          <div className="form-group">
              <label htmlFor="logisticServicesBuyerId">          Logistic Services Buyer <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatelogisticServicesBuyers}> Refresh</a> </label>
              <select
                value={this.state.data["logisticServicesBuyerId"]}
                onChange={this.handleChange}
                name="logisticServicesBuyerId"
                id="logisticServicesBuyerId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.logisticServicesBuyers.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["logisticServicesBuyerId"] && <div className="alert alert-danger">{this.state.errors["logisticServicesBuyerId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticServicesSellerId">          Logistic Services Seller <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatelogisticServicesSellers}> Refresh</a> </label>
              <select
                value={this.state.data["logisticServicesSellerId"]}
                onChange={this.handleChange}
                name="logisticServicesSellerId"
                id="logisticServicesSellerId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.logisticServicesSellers.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["logisticServicesSellerId"] && <div className="alert alert-danger">{this.state.errors["logisticServicesSellerId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="pickUpPartyId">          Pick Up Party <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatepickUpPartys}> Refresh</a> </label>
              <select
                value={this.state.data["pickUpPartyId"]}
                onChange={this.handleChange}
                name="pickUpPartyId"
                id="pickUpPartyId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.pickUpPartys.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["pickUpPartyId"] && <div className="alert alert-danger">{this.state.errors["pickUpPartyId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="deliveryTermsId">          Delivery Terms <a target="_blank" href="/Incotermscodes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedeliveryTermss}> Refresh</a> </label>
              <select
                value={this.state.data["deliveryTermsId"]}
                onChange={this.handleChange}
                name="deliveryTermsId"
                id="deliveryTermsId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Incotermscode
                  </option>
                  {this.state.deliveryTermss.map(Incotermscode => (
                    <option key={Incotermscode._id} value={Incotermscode._id}>
                      {Incotermscode.codeListVersion}
                    </option>
                  ))}
              </select>
              {this.state.errors["deliveryTermsId"] && <div className="alert alert-danger">{this.state.errors["deliveryTermsId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createTransportcapacitybooking;