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
        transportServiceLevelCodes: [{value:'',label:''},],
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
    }

    async populatetransportServiceConditionTypeCodes() {
        const { data: transportServiceConditionTypeCodes } = await getEnumerationlibrarys();
        this.setState({ transportServiceConditionTypeCodes: transportServiceConditionTypeCodes });
    }

    async populatetransportServiceLevelCodes() {
        const { data: transportServiceLevelCodes } = await getTransportservicelevelcodes();
        
        this.setState({ transportServiceLevelCodes: transportServiceLevelCodes});
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
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="page-header">
                            <h1>Transport Capacity Booking</h1>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <form role="form">
                            <div class="form-group">
                                <label for="transportServiceCategoryCode">Transport Service Category:</label>
                                <select
                                    value={this.state.data["transportServiceCategoryCodeId"]}
                                    onChange={this.handleChange}
                                    name="transportServiceCategoryCodeId"
                                    id="transportServiceCategoryCodeId"
                                    className="form-control"
                                >
                                    <option value="" disabled defaultValue>
                                        Select Transport Service Category
                                    </option>
                                    {this.state.transportServiceCategoryCodes.map(populatetransportServiceCategoryCodes => (
                                        <option key={populatetransportServiceCategoryCodes._id} value={populatetransportServiceCategoryCodes.codeListVersion}>
                                            {populatetransportServiceCategoryCodes.codeListVersion}
                                        </option>
                                    ))}
                                </select>
                                {this.state.errors["transportServiceCategoryCodeId"] && <div className="alert alert-danger">{this.state.errors["transportServiceCategoryCodeId"]}</div>}
                            </div>

                            <div class="form-group">
                                <label for="transportServiceConditionTypeCodeId">Transport Service Condition Type:</label>
                                <select
                                    value={this.state.data["transportServiceConditionTypeCodeId"]}
                                    onChange={this.handleChange}
                                    name="transportServiceConditionTypeCodeId"
                                    id="transportServiceConditionTypeCodeId"
                                    className="form-control"
                                >
                                    <option value="" disabled defaultValue>
                                        Select Transport Service Condition Type
                                    </option>
                                    {this.state.transportServiceConditionTypeCodes.map(Enumerationlibrary => (
                                        <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                                            {Enumerationlibrary.id}
                                        </option>
                                    ))}
                                </select>
                                {this.state.errors["transportServiceConditionTypeCodeId"] && <div className="alert alert-danger">{this.state.errors["transportServiceConditionTypeCodeId"]}</div>}
                            </div>

                            <div class="form-group">
                                <label for="transportServiceLevelCodeId">Transport Service Level:</label>
                                <Select
                                    value={this.state.transportServiceLevelCodeId}
                                    onChange={this.handleChange}
                                    options={this.state.transportServiceLevelCodes}
                                    
                                />
                            </div>

                            <div id="card-989291">
                                <div class="card">
                                    <div class="card-header">
                                        <a class="card-link collapsed" data-toggle="collapse" data-parent="#card-989291" href="#card-element-780562">Logistic Services Buyer:</a>
                                    </div>
                                    <div id="card-element-780562" class="collapse">
                                        <div class="card-body">

                                            <div class="form-group ">
                                                <label for="gln">Global Location Number:<a href="/">Find</a>  <a href="/">Create</a></label>
                                                <input type="number" class="form-control" id="gln" />
                                            </div>


                                            <div id="card-989292">
                                                <div class="card">
                                                    <div class="card-header">
                                                        <a class="card-link collapsed" data-toggle="collapse" data-parent="#card-989292" href="#card-element-780563">Address:</a>
                                                    </div>
                                                    <div id="card-element-780563" class="collapse">
                                                        < Address />
                                                    </div>
                                                </div>
                                            </div>
                                            < Contact />
                                            < DutyFeeTaxRegistration />
                                            < OrganisationDetails />
                                            < FinancialInstitutionInformation />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            < PlannedPickUp />
                            <button type="submit" class="btn btn-primary">
                                Submit
				            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function Contact() {
    return (
        <div id="card-989294">
            <div class="card">
                <div class="card-header">
                    <a class="card-link collapsed" data-toggle="collapse" data-parent="#card-989294" href="#card-element-780564">Contact:</a>
                </div>
                <div id="card-element-780564" class="collapse">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="contactTypeCode">Contact Type:</label>
                            <Select class="form-control dropdown-toggle" id="contactTypeCode" data-toggle="dropdown"></Select>
                        </div>
                        <div class="form-group">
                            <label for="personName">Person Name:</label>
                            <input type="string" class="form-control" id="personName" />
                        </div>
                        <div class="form-group">
                            <label for="departmentName">Department Name:</label>
                            <input type="string" class="form-control" id="departmentName" />
                        </div>
                        <div class="form-group">
                            <label for="jobTitle">Job Title:</label>
                            <input type="string" class="form-control" id="jobTitle" />
                        </div>
                        <div class="form-group">
                            <label for="responsibility">Responsibility:</label>
                            <Select class="form-control dropdown-toggle" id="responsibility" data-toggle="dropdown"></Select>
                        </div>
                        <div className="card">
                            <h5>Communication Channel</h5>
                            <div class="form-group">
                                <label for="communicationChannelCode">Communication Channel Code:</label>
                                <Select class="form-control dropdown-toggle" id="communicationChannelCode" data-toggle="dropdown"></Select>
                            </div>
                            <div class="form-group">
                                <label for="communicationValue">Communication Value:</label>
                                <input type="string" class="form-control" id="communicationValue" />
                            </div>
                            <div class="form-group">
                                <label for="communicationChannelName">Communication Channel Name:</label>
                                <input type="string" class="form-control" id="communicationChannelName" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

function DutyFeeTaxRegistration() {
    return (
        <div id="card-989295">
            <div class="card">
                <div class="card-header">
                    <a class="card-link collapsed" data-toggle="collapse" data-parent="#card-989295" href="#card-element-780565">Duty Fee Tax Registration:</a>
                </div>
                <div id="card-element-780565" class="collapse">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="dutyFeeTaxRegistrationID">Duty Fee Tax Registration ID:</label>
                            <Select class="form-control dropdown-toggle" id="dutyFeeTaxRegistrationID" data-toggle="dropdown"></Select>
                        </div>
                        <div class="form-group">
                            <label for="dutyFeeTaxTypeCode">Duty Fee Tax Type:</label>
                            <Select class="form-control dropdown-toggle" id="dutyFeeTaxTypeCode" data-toggle="dropdown"></Select>
                        </div>
                        <div class="form-group">
                            <label for="dutyFeeTaxAgencyName">Duty Fee Tax Agency Name:</label>
                            <input type="string" class="form-control" id="dutyFeeTaxAgencyName" />
                        </div>
                        <div class="form-group">
                            <label for="dutyFeeTaxDescription">Duty Fee Tax Description:</label>
                            <Select class="form-control dropdown-toggle" id="dutyFeeTaxTypeCode" data-toggle="dropdown"></Select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function OrganisationDetails() {
    return (
        <div id="card-989296">
            <div class="card">
                <div class="card-header">
                    <a class="card-link collapsed" data-toggle="collapse" data-parent="#card-989296" href="#card-element-780566">Organisation Details:</a>
                </div>
                <div id="card-element-780566" class="collapse">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="organisationName">Organisation Name:</label>
                            <input type="string" class="form-control" id="organisationName" />
                        </div>
                        <div class="form-group">
                            <label for="issuedCapital">Issued Capital:</label>
                            <Select class="form-control dropdown-toggle" id="issuedCapital" data-toggle="dropdown"></Select>
                        </div>
                        <div class="form-group">
                            <label for="legalStructure">Legal Structure:</label>
                            <Select class="form-control dropdown-toggle" id="legalStructure" data-toggle="dropdown"></Select>
                        </div>

                        <div class="form-group">
                            <label for="dutyFeeTaxDescription">Duty Fee Tax Description:</label>
                            <Select class="form-control dropdown-toggle" id="dutyFeeTaxTypeCode" data-toggle="dropdown"></Select>
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
                        <div className="card">
                            <h4>Legal Registration:</h4>
                            <div class="form-group">
                                <label for="legalRegistrationNumber">Legal Registration Number:</label>
                                <input type="string" class="form-control" id="legalRegistrationNumber" />
                            </div>
                            <div class="form-group">
                                <label for="legalRegistrationType">Legal Registration Type:</label>
                                <Select class="form-control dropdown-toggle" id="legalRegistrationType" data-toggle="dropdown"></Select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function PlannedPickUp() {
    return (
        <div id="plannedPickUp" className="card">
            <h5 for="plannedPickUp">Planned PickUp</h5>
            <div class="form-group">
                <label for="logisticEventTypeCode">Logistic Event Type:</label>
                <Select class="form-control dropdown-toggle" id="logisticEventTypeCode" data-toggle="dropdown"></Select>
            </div>
            <div class="form-group">
                <label for="logisticEventDuration">Logistic Event Duration:</label>
                <Select class="form-control dropdown-toggle" id="logisticEventDuration" data-toggle="dropdown"></Select>
            </div>
            <div>
                < LogisticLocation />
            </div>
            <div id="card-element-576248" class="collapse">
                <div class="card-header">
                    <a class="card-link collapsed" data-toggle="collapse" data-parent="#card-989296" href="#card-element-780566">Logistic Event Period:</a>
                </div>
                <div class="card-body">
                    <form role="form" class="form-inline">
                        <div class="form-group">
                            <label for="dayOfThebeginDateWeekCode"> Begin Date:</label>
                            <input type="date" class="form-control" id="beginDate" />
                        </div>
                        <div class="form-group">
                            <label for="beginTime"> Begin Time:</label>
                            <input type="time" class="form-control" id="isOperational" />
                        </div>
                        <div class="form-group">
                            <label for="endDate"> End Date:</label>
                            <input type="date" class="form-control" id="endDate" />
                        </div>
                        <div class="form-group">
                            <label for="endTime"> End Time:</label>
                            <input type="time" class="form-control" id="endTime" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

function LogisticLocation() {
    return (
        <div id="card-element-576244" class="collapse">
            <div class="card-body">
                <form role="form" class="form">
                    <div class="form-group">
                        <label for="unLocationCode"> UN Location:</label>
                        <Select class="form-control dropdown-toggle" id="unLocationCode" data-toggle="dropdown"></Select>
                    </div>
                    <div class="form-group">
                        <label for="gln"> GLN:</label>
                        <Select class="form-control dropdown-toggle" id="gln" data-toggle="dropdown"></Select>
                    </div>
                    <div class="form-group">
                        <label for="additionalLocationIdentification"> Additional Location Identification:</label>
                        <Select class="form-control dropdown-toggle" id="additionalLocationIdentification" data-toggle="dropdown"></Select>
                    </div>
                    <div class="form-group">
                        <label for="sublocationIdentification">Sublocation Identification:</label>
                        <input type="string" class="form-control" id="communsublocationIdentification" />
                    </div>
                    <div class="form-group">
                        <label for="locationName">Location Name:</label>
                        <input type="string" class="form-control" id="locationName" />
                    </div>
                    <div class="form-group">
                        <label for="locationSpecificInstructions"> Location Specific Instructions:</label>
                        <Select class="form-control dropdown-toggle" id="locationSpecificInstructions" data-toggle="dropdown"></Select>
                    </div>
                    <div class="form-group">
                        <label for="utcOffset">UTC Offset:</label>
                        <input type="float" class="form-control" id="utcOffset" />
                    </div>
                    < Address />
                    < Contact />
                    <div id="card-element-576245" class="collapse">
                        <div class="card-body">
                            <form role="form" class="form-inline">
                                <div class="form-group">
                                    <label for="dayOfTheWeekCode"> Day Of The Week:</label>
                                    <Select class="form-control dropdown-toggle" id="dayOfTheWeekCode" data-toggle="dropdown"></Select>
                                </div>
                                <div class="form-group">
                                    <label for="isOperational"> Is Operational:</label>
                                    <input type="checkbox" class="form-control" id="isOperational" />
                                </div>
                                <div class="form-group">
                                    <label for="closingTime"> closingTime:</label>
                                    <input type="time" class="form-control" id="closingTime" />
                                </div>
                                <div class="form-group">
                                    <label for="openingTime"> Opening Time:</label>
                                    <input type="time" class="form-control" id="openingTime" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div id="card-element-576245" class="collapse">
                        <div class="card-body">
                            <form role="form" class="form-inline">
                                <div class="form-group">
                                    <label for="isOperational"> Is Operational:</label>
                                    <input type="checkbox" class="form-control" id="isOperational" />
                                </div>
                                <div class="form-group">
                                    <label for="specialDate"> Special Date:</label>
                                    <input type="date" class="form-control" id="specialDateName" />
                                </div>
                                <div class="form-group">
                                    <label for="closingTime"> closingTime:</label>
                                    <input type="time" class="form-control" id="closingTime" />
                                </div>
                                <div class="form-group">
                                    <label for="openingTime"> Opening Time:</label>
                                    <input type="time" class="form-control" id="openingTime" />
                                </div>
                                <div class="form-group">
                                    <label for="specialDateName">Special Date Name:</label>
                                    <Select class="form-control dropdown-toggle" id="specialDateName" data-toggle="dropdown"></Select>
                                </div>
                            </form>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TransportCapacityBooking

