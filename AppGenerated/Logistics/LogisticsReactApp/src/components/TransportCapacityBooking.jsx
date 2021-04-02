import React, { Component } from 'react';
import Select from 'react-select';
import Joi from "joi-browser";
import { saveTransportcapacitybooking, getTransportcapacitybooking } from "../../src/services/transportcapacitybookingService";
import { getTransportcapacitybookingspacerequirements } from "../../src/services/transportcapacitybookingspacerequirementService";
import { getTransportcapacitybookingtransportmovementtypes } from "../../src/services/transportcapacitybookingtransportmovementtypeService";
import { getEcomstringattributevaluepairlists } from "../../src/services/ecomstringattributevaluepairlistService";
import { getEnumerationlibrarys } from "../../src/services/enumerationlibraryService";
import { getIncotermscodes } from "../../src/services/incotermscodeService";
import { getTransportservicecategorycodes } from "../../src/services/transportservicecategorycodeService";
import { getTransportservicelevelcodes } from "../../src/services/transportservicelevelcodeService";
import Address from "./Address"
import LogisticLocation from './LogisticLocation'
import Contact from './Contact'
import PlannedPickUp from "./PlannedPickUp";
import TransportReference from "./TransportReference"
import TransportCapacityBookingSpaceRequirement from "./TransportCapacityBookingSpaceRequirement"
import { getTransportserviceconditiontypecodes } from '../services/transportserviceconditiontypecodeService';




export class TransportCapacityBooking extends Component {
    constructor(props) {
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
    } state = {
        data: { documentStatusCode: "", documentActionCode: "", documentStructureVersion: "", lastUpdateDateTime: "", revisionNumber: "", extension: "", documentEffectiveDate: "", avpList: "", transportCapacityBookingIdentification: "", transportServiceCategoryCode: "", transportServiceConditionTypeCodeId: "", transportServiceLevelCodeId: "", logisticServicesBuyer: "", logisticServicesSeller: "", pickUpParty: "", dropOffParty: "", plannedPickUp: "", plannedDropOff: "", transportReference: "", deliveryTerms: "", handlingInstruction: "", transportCapacityBookingSpaceRequirements: "", transportCapacityBookingTransportMovement: "", transportCapacityBookingSpaceRequirementsId: "", transportCapacityBookingTransportMovementId: "", avpListId: "", documentStatusCodeId: "", dropOffPartyId: "", plannedPickUpId: "", plannedDropOffId: "", transportReferenceId: "", handlingInstructionId: "", documentActionCodeId: "", transportCapacityBookingIdentificationId: "", transportServiceCategoryCodeId: "", transportServiceConditionTypeCodeId: "", transportServiceLevelCodeId: "", logisticServicesBuyerId: "", logisticServicesSellerId: "", pickUpPartyId: "", deliveryTermsId: "", },
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
        id: Joi.number()
            .required()
            .label("id"),

        creationDateTime: Joi.date()
            .required()


            .label("creationDateTime"),
        documentStatusCode: Joi.number()
            .required()


            .label("documentStatusCode"),
        documentActionCode: Joi.number()



            .label("documentActionCode"),
        documentStructureVersion: Joi.string()
            .allow('').allow(null)



            .label("documentStructureVersion"),
        lastUpdateDateTime: Joi.date()
            .allow('').allow(null)



            .label("lastUpdateDateTime"),
        revisionNumber: Joi.number()



            .label("revisionNumber"),
        extension: Joi.string()
            .allow('').allow(null)



            .label("extension"),
        documentEffectiveDate: Joi.date()
            .allow('').allow(null)



            .label("documentEffectiveDate"),
        avpList: Joi.string()
            .allow('').allow(null)



            .label("avpList"),
        transportCapacityBookingIdentification: Joi.number()




            .label("transportServiceLevelCodeId"),
        logisticServicesBuyer: Joi.number()
            .required()


            .label("logisticServicesBuyer"),
        logisticServicesSeller: Joi.number()
            .required()


            .label("logisticServicesSeller"),
        pickUpParty: Joi.number()



            .label("pickUpParty"),
        dropOffParty: Joi.number()



            .label("dropOffParty"),
        plannedPickUp: Joi.number()



            .label("plannedPickUp"),
        plannedDropOff: Joi.number()



            .label("plannedDropOff"),
        transportReference: Joi.number()



            .label("transportReference"),
        deliveryTerms: Joi.string()
            .allow('').allow(null)



            .label("deliveryTerms"),
        handlingInstruction: Joi.number()



            .label("handlingInstruction"),
        transportCapacityBookingSpaceRequirements: Joi.number()
            .required()


            .label("transportCapacityBookingSpaceRequirements"),
        transportCapacityBookingTransportMovement: Joi.number()



            .label("transportCapacityBookingTransportMovement"),
        transportCapacityBookingSpaceRequirementsId: Joi.string()
            .required()
            .label("transportCapacityBookingSpaceRequirementsId"),
        transportCapacityBookingTransportMovementId: Joi.string()
            .required()
            .label("transportCapacityBookingTransportMovementId"),
        avpListId: Joi.string()
            .required()
            .label("avpListId"),
        documentStatusCodeId: Joi.string()
            .required()
            .label("documentStatusCodeId"),
        dropOffPartyId: Joi.string()
            .required()
            .label("dropOffPartyId"),
        plannedPickUpId: Joi.string()
            .required()
            .label("plannedPickUpId"),
        plannedDropOffId: Joi.string()
            .required()
            .label("plannedDropOffId"),
        transportReferenceId: Joi.string()
            .required()
            .label("transportReferenceId"),
        handlingInstructionId: Joi.string()
            .required()
            .label("handlingInstructionId"),
        documentActionCodeId: Joi.string()
            .required()
            .label("documentActionCodeId"),
        transportCapacityBookingIdentificationId: Joi.string()
            .required()
            .label("transportCapacityBookingIdentificationId"),
        transportServiceCategoryCodeId: Joi.string()
            .required()
            .label("transportServiceCategoryCodeId"),
        transportServiceConditionTypeCodeId: Joi.string()
            .required()
            .label("transportServiceConditionTypeCodeId"),
        transportServiceLevelCodeId: Joi.string()
            .required()
            .label("transportServiceLevelCodeId"),
        logisticServicesBuyerId: Joi.string()
            .required()
            .label("logisticServicesBuyerId"),
        logisticServicesSellerId: Joi.string()
            .required()
            .label("logisticServicesSellerId"),
        pickUpPartyId: Joi.string()
            .required()
            .label("pickUpPartyId"),
        deliveryTermsId: Joi.string()
            .required()
            .label("deliveryTermsId"),
        createdAt: Joi.date()
            .label("createAt")
    };

    async populateForm() {
        try {
            const transportcapacitybookingId = this.props.match.params.id;
            if (transportcapacitybookingId !== "new") {
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
        const { data: transportServiceCategoryCodes } = await getTransportservicecategorycodes();
        this.setState({ transportServiceCategoryCodes: transportServiceCategoryCodes });
        console.log(this.state.transportServiceCategoryCodes,"service codes")
    }

    async populatetransportServiceConditionTypeCodes() {
        const { data: transportServiceConditionTypeCodes } = await getTransportserviceconditiontypecodes();
        this.setState({ transportServiceConditionTypeCodes: transportServiceConditionTypeCodes });
    }

    async populatetransportServiceLevelCodes() {
        const { data: transportServiceLevelCodes } = await getTransportservicelevelcodes();

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
        console.log(inputField)
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

        this.setState({ data: data, errors: errors});
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
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="page-header">
                            <h1 className="header text-center">Transport Capacity Booking</h1>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div className="col-md-1"></div>
                        <div class="col-md-10 center">
                            <div class="card">
                                <div class="card-body">
                                    <form>
                                        <div>
                                            {/* <!-- <div class="form-group">
                                     <label for="">Automatically Generated</label>
                                    <input id="" name="" type="text" placeholder="Booking number" readonly value="BI545"
                                        required="required" class="form-control"/>
                                </div> --> */}
                                            <div class="form-group">
                                                <label for="transportServiceCategoryCode">Service Category:</label>
                                                <div>
                                                    <select
                                                        value={this.state.data["transportServiceCategoryCodeId"]}
                                                        onChange={this.handleChange}
                                                        name="transportServiceCategoryCodeId"
                                                        id="transportServiceCategoryCodeId"
                                                        className="form-control"
                                                    >
                                                        <option value="" disabled defaultValue>
                                                            Select Service Category
                                                        </option>
                                                        {this.state.transportServiceCategoryCodes.map(populatetransportServiceCategoryCodes => (
                                                            <option key={populatetransportServiceCategoryCodes._id} value={populatetransportServiceCategoryCodes._id}>
                                                                {populatetransportServiceCategoryCodes.codeListVersion}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {this.state.errors["transportServiceCategoryCodeId"]
                                                        &&
                                                        <div className="alert alert-danger">{this.state.errors["transportServiceCategoryCodeId"]}</div>}
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="transportServiceConditionTypeCode"> Service Condition Type:</label>
                                                <div>
                                                    <select
                                                        value={this.state.data["transportServiceConditionTypeCodeId"]}
                                                        onChange={this.handleChange}
                                                        name="transportServiceConditionTypeCodeId"
                                                        id="transportServiceConditionTypeCodeId"
                                                        className="form-control"
                                                    >
                                                        <option value="" disabled defaultValue>
                                                            Select Service Condition Type
                                                        </option>
                                                        {this.state.transportServiceConditionTypeCodes.map(Enumerationlibrary => (
                                                            <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                                                                {Enumerationlibrary.codeListVersion}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {this.state.errors["transportServiceConditionTypeCodeId"] && <div className="alert alert-danger">{this.state.errors["transportServiceConditionTypeCodeId"]}</div>}
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="transportServiceLevelCode"> Service Level:</label>
                                                <div>
                                                <div>
                                                    <select
                                                        value={this.state.data["transportServiceLevelCodeId"]}
                                                        onChange={this.handleChange}
                                                        name="transportServiceLevelCodeId"
                                                        id="transportServiceLevelCodeId"
                                                        className="form-control"
                                                    >
                                                        <option value="" disabled defaultValue>
                                                            Select Service Level
                                                        </option>
                                                        {this.state.transportServiceLevelCodes.map(transportServiceLevelCode => (
                                                            <option key={transportServiceLevelCode._id} value={transportServiceLevelCode._id}>
                                                                {transportServiceLevelCode.codeListVersion}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {this.state.errors["transportServiceLevelCode"]
                                                        &&
                                                        <div className="alert alert-danger">{this.state.errors["transportServiceLevelCode"]}</div>}
                                                </div>
                                                    {/* <Select
                                                        value={this.state.transportServiceLevelCodeId}
                                                        onChange={this.handleChange}
                                                        options={this.state.transportServiceLevelCodes}
                                                    /> */}
                                                </div>
                                            </div>
                                        </div>
                                        < PlannedPickUp name="Planned PickUp" />
                                        < PlannedPickUp name="Planned DropOff"/>

                                        < TransportCapacityBookingSpaceRequirement />
                                        
                                    </form>
 <button className="packageTotal"  >Submit </button>


                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
        )
    }
}

function FinancialInstitutionInformation() {
    return (
                <div>
                    <div id="card-989296">
                        <div class="card">
                            <div class="card-header">
                                <a class="card-link collapsed" data-toggle="collapse" data-parent="#card-989296" href="#card-element-780566">Financial Institution Information:</a>
                            </div>
                            <div id="card-element-780566" class="collapse">
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="financialInstitutionName">Financial Institution Name:</label>
                                        <input type="string" class="form-control" id="financialInstitutionName" />
                                    </div>
                                    <div className="card" id="financialAccount">
                                        <h4 for="financialAccount">financialAccount:</h4>
                                        <div class="form-group">
                                            <label for="financialAccountNumber">Financial Account Number:</label>
                                            <input type="string" class="form-control" id="financialAccountNumber" />
                                        </div>
                                        <div class="form-group">
                                            <label for="financialAccountNumberTypeCode">Financial Account Number Type:</label>
                                            <Select class="form-control dropdown-toggle" id="financialAccountNumberTypeCode" data-toggle="dropdown"></Select>
                                        </div>
                                        <div class="form-group">
                                            <label for="financialAccountName">Financial Account Name:</label>
                                            <input type="string" class="form-control" id="financialAccountName" />
                                        </div>
                                    </div>
                                    <div className="card" id="financialRoutingNumber">
                                        <h4 for="financialRoutingNumber">Financial Routing Number:</h4>
                                        <div class="form-group">
                                            <label for="financialRoutingNumber">Financial Routing Number:</label>
                                            <input type="string" class="form-control" id="financialRoutingNumber" />
                                        </div>
                                        <div class="form-group">
                                            <label for="financialRoutingNumberTypeCode">Financial Routing Number Type:</label>
                                            <Select class="form-control dropdown-toggle" id="financialRoutingNumberTypeCode" data-toggle="dropdown"></Select>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <h4>Additional Financial Information</h4>
                                        <div class="form-group">
                                            <label for="description">Description:</label>
                                            <Select class="form-control dropdown-toggle" id="description" data-toggle="dropdown"></Select>
                                        </div>
                                    </div>
                                    <div id="card-989292">
                                        <div class="card">
                                            <div class="card-header">
                                                <a class="card-link collapsed" data-toggle="collapse" data-parent="#card-989292" href="#card-element-780563">Official Address:</a>
                                            </div>
                                            <div id="card-element-780563" class="collapse">
                                                < Address />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default TransportCapacityBooking

