import React, { Component } from 'react'
import { getCodetypes } from '../services/codetypeService';
import { getHarmonizedsystemcodes } from '../services/harmonizedsystemcodeService';
import { getCargotypedescriptions } from '../services/cargotypedescriptionService';
import { getFinaldestinationcountrys } from '../services/finaldestinationcountryService';
import { getCountryoforigincodes } from '../services/countryoforigincodeService';
import { getMeasurementtypes } from '../services/measurementtypeService';
import { getAmounttypes } from '../services/amounttypeService';
import { getQuantitytypes } from '../services/quantitytypeService';
import { getPackagetypecodes } from '../services/packagetypecodeService';
import { getTransportcapacitybookingspacerequirements } from '../services/transportcapacitybookingspacerequirementService';



export class TransportCapacityBookingSpaceRequirement extends Component {
    constructor(props) {
        super(props);
        this.populateForm = this.populateForm.bind(this);
        this.populateCodeTypes = this.populateCodeTypes.bind(this);
        this.populateHarmonizedsystem = this.populateHarmonizedsystem.bind(this);
        this.populateCargotypedescriptions = this.populateCargotypedescriptions.bind(this);
        this.populateFinaldestinationcountrys = this.populateFinaldestinationcountrys.bind(this);
        this.populateMeasurementtypes = this.populateMeasurementtypes.bind(this);
        this.populateCountryoforigincodes = this.populateCountryoforigincodes.bind(this)
        this.populateAmounttypes = this.populateAmounttypes.bind(this);
        this.populateQuantitytypes = this.populateQuantitytypes.bind(this);
        this.populatePackagetypecodes = this.populatePackagetypecodes.bind(this);


    } state = {
        data: {
            cargoTypeCode: "", harmonizedSystemCode: "", cargoTypeDescription: "", countryOfOriginCode: "", finalDestinationCountry: "", totalGrossVolume: "", totalGrossWeight: "", totalTransportNetWeight: "", totalChargeableWeight: "", declaredWeightForCustoms: "", totalLoadingLength: "", associatedInvoiceAmount: "", declaredValueForCustoms: "", totalPackageQuantity: "", totalItemQuantity: "", packageTypeCode: "",
            totalGrossVolumeMeasurementtype: "",
            totalGrossWeightMeasurementtype: "",
            totalTransportNetWeightMeasurementtype: "",
            totalChargeableWeightMeasurementtype: "",
            declaredWeightForCustomsMeasurementtype: "",
            totalLoadingLengthMeasurementtype: "",
            associatedInvoiceAmountAmounttype: "",
            declaredValueForCustomsAmounttype: "",
            totalPackageQuantityQuantitytype: "",
            totalItemQuantityQuantitytype: "",
        },
        cargoTypeCodes: [],
        harmonizedSystemCodes: [],
        cargoTypeDescriptions: [],
        finalDestinationCountrys: [],
        countryOfOriginCodes: [],
        measurementtypes: [],
        amounttypes: [],
        quantitytypes: [],
        packagetypecodes: [],
        errors: {}
    };
    async populateForm() {
        try {
            const transportcapacitybookingId = this.props.match.params.id;
            if (transportcapacitybookingId !== "new") {
                const { data } = await getTransportcapacitybookingspacerequirements(transportcapacitybookingId);
                this.setState({ data });
            }
        }
        catch (ex) {
            if (ex.response && ex.response.status === 404) {
                this.props.history.replace("/not-found");
            }
        }
    }
    async populateCodeTypes() {
        const { data: cargoTypeCodes } = await getCodetypes();
        this.setState({ cargoTypeCodes: cargoTypeCodes });
    }
    async populateHarmonizedsystem() {
        const { data: harmonizedSystemCodes } = await getHarmonizedsystemcodes();
        this.setState({ harmonizedSystemCodes: harmonizedSystemCodes });
    }
    async populateCargotypedescriptions() {
        const { data: cargoTypeDescriptions } = await getCargotypedescriptions();
        this.setState({ cargoTypeDescriptions: cargoTypeDescriptions });
    }
    async populateFinaldestinationcountrys() {
        const { data: finalDestinationCountrys } = await getFinaldestinationcountrys();
        this.setState({ finalDestinationCountrys: finalDestinationCountrys });
        console.log(finalDestinationCountrys, "ggh")
    }
    async populateCountryoforigincodes() {
        const { data: countryOfOriginCodes } = await getCountryoforigincodes();
        this.setState({ countryOfOriginCodes: countryOfOriginCodes });
    }
    async populateMeasurementtypes() {
        const { data: measurementtypes } = await getMeasurementtypes();
        this.setState({ measurementtypes: measurementtypes });
        console.log(measurementtypes, "MU")
    }
    async populateAmounttypes() {
        const { data: amounttypes } = await getAmounttypes();
        this.setState({ amounttypes: amounttypes });
    }
    async populateQuantitytypes() {
        const { data: quantitytypes } = await getQuantitytypes();
        this.setState({ quantitytypes: quantitytypes });
    }
    async populatePackagetypecodes() {
        const { data: packagetypecodes } = await getPackagetypecodes();
        this.setState({ packagetypecodes: packagetypecodes });
    }

    async componentDidMount() {
        await this.populateForm();
        await this.populateCodeTypes();
        await this.populateHarmonizedsystem();
        await this.populateCargotypedescriptions();
        await this.populateFinaldestinationcountrys();
        await this.populateCountryoforigincodes();
        await this.populateMeasurementtypes();
        await this.populateAmounttypes();
        await this.populateQuantitytypes();
        await this.populatePackagetypecodes();

    }
    render() {
        const handleSelect = (e, type) => {
            if (type === "associatedInvoiceAmount") {
                this.setState({ data:{associatedInvoiceAmountAmounttype: e.target.text }})
            } else if (type === "totalGrossVolume") {
                this.setState({ data:{totalGrossVolumeMeasurementtype: e.target.text }})
            } else if (type === "totalGrossWeight") {
                this.setState({data:{totalGrossWeightMeasurementtype: e.target.text }})
            }else if (type === "totalTransportNetWeight") {
                this.setState({data:{totalTransportNetWeightMeasurementtype: e.target.text }})
            }else if (type === "totalChargeableWeight") {
                this.setState({data:{totalChargeableWeightMeasurementtype: e.target.text }})
            }else if (type === "declaredWeightForCustoms") {
                this.setState({data:{declaredWeightForCustomsMeasurementtype: e.target.text }})
            }else if (type === "totalLoadingLength") {
                this.setState({data:{totalLoadingLengthMeasurementtype: e.target.text }})
            }else if (type === "declaredValueForCustoms") {
                this.setState({data:{declaredValueForCustomsAmounttype: e.target.text }})
            }else if (type === "totalPackageQuantity") {
                this.setState({data:{totalPackageQuantityQuantitytype: e.target.text }})
            }else if (type === "totalItemQuantity") {
                this.setState({data:{totalItemQuantityQuantitytype: e.target.text }})
            }

            // console.log(e.target.text, "inside dropdown")
            // const x = e.target.text totalItemQuantityQuantitytype

        }
        return (
            <div id="card-989308">
                <div class="card my-3">
                    <div class="card-header">
                        <a class="card-link collapsed card-title" data-toggle="collapse" data-parent="#card-989308" href="#card-element-780308">Transport Capacity Booking Space Requirements:</a>
                    </div>
                    <div id="card-element-780308" class="collapse">
                        <div class="card-body">
                            <div className="card">
                                <div class="form-group">
                                    <h3 className="card-title">Transport Cargo Characteristics</h3>
                                </div>
                                <div class="form-group">
                                    <label class="col-12 control-label" for="cargoTypeCode">Cargo Type</label>
                                    <div class="col-12">
                                        <select id="cargoTypeCode" name="cargoTypeCode" class="form-control">
                                            <option value="" disabled defaultValue>
                                                Select Cargo Type
                                                        </option>
                                            {this.state.cargoTypeCodes.map(cargoTypeCode => (
                                                <option key={cargoTypeCode._id} value={cargoTypeCode.codeListVersion}>
                                                    {cargoTypeCode.codeListVersion}
                                                </option>
                                            ))}
                                        </select>
                                        {this.state.errors["cargoTypeCode"]
                                            &&
                                            <div className="alert alert-danger">{this.state.errors["cargoTypeCode"]}</div>}


                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-12 control-label" for="harmonizedSystemCode">Harmonized System</label>
                                    <div class="col-12">
                                        <select id="harmonizedSystemCode" name="harmonizedSystemCode"
                                            class="form-control">
                                            <option value="" disabled defaultValue>
                                                Select Cargo Type
                                                        </option>
                                            {this.state.harmonizedSystemCodes.map(harmonizedSystemCode => (
                                                <option key={harmonizedSystemCode._id} value={harmonizedSystemCode.codeListVersion}>
                                                    {harmonizedSystemCode.codeListVersion}
                                                </option>
                                            ))}
                                        </select>
                                        {this.state.errors["harmonizedSystemCode"]
                                            &&
                                            <div className="alert alert-danger">{this.state.errors["harmonizedSystemCode"]}</div>}

                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-12 control-label" for="cargoTypeDescription">Cargo Type Description</label>
                                    <div class="col-12">
                                        <select id="cargoTypeDescription" name="cargoTypeDescription" className="form-control">
                                            <option value="" disabled defaultValue>
                                                Cargo Type Description
                                                    </option>
                                            {this.state.cargoTypeDescriptions.map(cargoTypeDescription => (
                                                <option key={cargoTypeDescription._id} value={cargoTypeDescription.codeListVersion}>
                                                    {cargoTypeDescription.codeListVersion}
                                                </option>
                                            ))}
                                        </select>
                                        {this.state.errors["cargoTypeDescription"]
                                            &&
                                            <div className="alert alert-danger">{this.state.errors["cargoTypeDescription"]}</div>}

                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-12 control-label" for="finalDestinationCountry">Final Destination Country</label>
                                    <div class="col-12">
                                        <select id="finalDestinatonCountry" name="finalDestinationCountry"
                                            class="form-control">
                                            <option value="" disabled defaultValue>
                                                Select Final Destination Country
                                                    </option>

                                            {/* {this.state.finalDestinatonCountrys.map(finalDestinatonCountry => (
                                                    <option key={finalDestinatonCountry._id} value={finalDestinatonCountry.codeListVersion}>
                                                        {finalDestinatonCountry.codeListVersion}
                                                    </option>
                                                ))} */}
                                        </select>
                                        {this.state.errors["finalDestinatonCountry"]
                                            &&
                                            <div className="alert alert-danger">{this.state.errors["finalDestinatonCountry"]}</div>}

                                    </div>
                                    <div class="form-group">
                                        <label class="col-12 control-label" for="countryOfOriginCode">Country Of Origin</label>
                                        <div class="col-12">
                                            <select id="countryOfOriginCode" name="countryOfOriginCode"
                                                class="form-control">
                                                <option value="" disabled defaultValue>
                                                    Select Country Of Origin
                                                    </option>
                                                {this.state.countryOfOriginCodes.map(countryOfOriginCode => (
                                                    <option key={countryOfOriginCode._id} value={countryOfOriginCode.codeListVersion}>
                                                        {countryOfOriginCode.codeListVersion}
                                                    </option>
                                                ))}
                                            </select>
                                            {this.state.errors["countryOfOriginCode"]
                                                &&
                                                <div className="alert alert-danger">{this.state.errors["countryOfOriginCode"]}</div>}

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-12 control-label" for="finalDestinationCountry">Final Destination Country</label>
                                        <div class="col-12">
                                            <select id="finalDestinationCountry" name="finalDestinationCountry"
                                                class="form-control">
                                                <option value="" disabled defaultValue>
                                                    Select Final Destination Country
                                                    </option>
                                                {this.state.finalDestinationCountrys.map(finalDestinationCountry => (
                                                    <option key={finalDestinationCountry._id} value={finalDestinationCountry.codeListVersion}>
                                                        {finalDestinationCountry.codeListVersion}
                                                    </option>
                                                ))}
                                            </select>
                                            {this.state.errors["finalDestinationCountry"]
                                                &&
                                                <div className="alert alert-danger">{this.state.errors["finalDestinationCountry"]}</div>}

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-12 control-label" for="totalGrossVolume">Total Gross Volume</label>
                                        <div class="col-12">
                                            <div class="input-group">
                                                <input id="totalGrossVolume" name="totalGrossVolume"
                                                    class="form-control" placeholder="Volume" type="text" />

                                                <div class="input-group-btn">
                                                    <button type="button" class="btn btn-default dropdown-toggle"
                                                        data-toggle="dropdown">
                                                        {this.state.data.totalGrossVolumeMeasurementtype}
                                                        <span class="caret"></span>
                                                    </button>
                                                    <ul class="dropdown-menu pull-right">
                                                        {this.state.measurementtypes.map(data => (
                                                            <li> <a href="javascript:void(0)" onClick={() => handleSelect("totalGrossVolume")} > {data.codeListVersion}</a></li>))}
                                                    </ul>
                                                </div>
                                                {this.state.errors["countryOfOriginCode"]
                                                    &&
                                                    <div className="alert alert-danger">{this.state.errors["countryOfOriginCode"]}</div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-12 control-label" for="totalGrossWeight">Total Gross Weight</label>
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input id="totalGrossWeight" name="totalGrossWeight"
                                                class="form-control" placeholder="Weight" type="text" />
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-default dropdown-toggle"
                                                    data-toggle="dropdown">
                                                    {this.state.data.totalGrossWeightMeasurementtype}
                                                    <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu pull-right">
                                                    {this.state.measurementtypes.map(data => (
                                                        <li> <a href="javascript:void(0)" onClick={() => handleSelect("totalGrossWeight")} > {data.codeListVersion}</a></li>))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-12 control-label" for="totalTransportNetWeight">Total
                                                Transport Net Weight</label>
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input id="totalTransportNetWeight" name="totalTransportNetWeight"
                                                class="form-control" placeholder="Weight" type="text" />
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-default dropdown-toggle"
                                                    data-toggle="dropdown">
                                                    {this.state.data.totalTransportNetWeightMeasurementtype}
                                                    <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu pull-right">
                                                    {this.state.measurementtypes.map(data => (
                                                        <li> <a href="javascript:void(0)" onClick={() => handleSelect("totalTransportNetWeight")} > {data.codeListVersion}</a></li>))}

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-12 control-label" for="totalChargeableWeight">Total Chargeable Weight</label>
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input id="totalChargeableWeight" name="totalChargeableWeight"
                                                class="form-control" placeholder="placeholder" type="text" />
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-default dropdown-toggle"
                                                    data-toggle="dropdown">
                                                    {this.state.data.totalChargeableWeightMeasurementtype}
                                                    <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu pull-right">
                                                    {this.state.measurementtypes.map(data => (
                                                        <li> <a href="javascript:void(0)" onClick={() => handleSelect("totalChargeableWeight")} > {data.codeListVersion}</a></li>))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-12 control-label" for="declaredWeightForCustoms">Declared Weight For Customs</label>
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input id="declaredWeightForCustoms" name="declaredWeightForCustoms"
                                                class="form-control" placeholder="placeholder" type="text" />
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-default dropdown-toggle"
                                                    data-toggle="dropdown">
                                                    {this.state.data.declaredWeightForCustomsMeasurementtype}
                                                    <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu pull-right">
                                                    {this.state.measurementtypes.map(data => (
                                                        <li> <a href="javascript:void(0)" onClick={() => handleSelect("declaredWeightForCustoms")} > {data.codeListVersion}</a></li>))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-12 control-label" for="totalLoadingLength">Total Loading Length</label>
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input id="totalLoadingLength" name="totalLoadingLength"
                                                class="form-control" placeholder="placeholder" type="text" />
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-default dropdown-toggle"
                                                    data-toggle="dropdown">
                                                    {this.state.data.totalLoadingLengthMeasurementtype}
                                                    <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu pull-right">
                                                    {this.state.measurementtypes.map(data => (
                                                        <li> <a href="javascript:void(0)" onClick={() => handleSelect("totalLoadingLength")} > {data.codeListVersion}</a></li>))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-12 control-label" for="associatedInvoiceAmount">Associated Invoice Amount</label>
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input id="associatedInvoiceAmount" name="associatedInvoiceAmount"
                                                class="form-control" placeholder="placeholder" type="text" />
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-default dropdown-toggle"
                                                    data-toggle="dropdown">
                                                    {this.state.data.amounttype}
                                                    <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu pull-right">
                                                    {this.state.amounttypes.map(data => (
                                                        <li> <a href="javascript:void(0)" onClick={() => handleSelect("associatedInvoiceAmount")} > {data.codeListVersion}</a></li>))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-12 control-label" for="declaredValueForCustoms">Declared Value For Customs</label>
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input id="declaredValueForCustoms" name="declaredValueForCustoms"
                                                class="form-control" placeholder="Declared Value For Customs" type="text" />
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-default dropdown-toggle"
                                                    data-toggle="dropdown">
                                                    {this.state.data.declaredValueForCustomsAmounttype}
                                                    <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu pull-right">
                                                    {this.state.amounttypes.map(data => (
                                                        <li> <a href="javascript:void(0)" onClick={() => handleSelect("declaredValueForCustoms")} > {data.codeListVersion}</a></li>))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-12 control-label" for="totalPackageQuantity">Total Package Quantity</label>
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input id="totalPackageQuantity" name="totalPackageQuantity"
                                                class="form-control" placeholder="placeholder" type="text" />
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-default dropdown-toggle"
                                                    data-toggle="dropdown">
                                                    {this.state.data.totalPackageQuantityQuantitytype}
                                                    <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu pull-right">
                                                    {this.state.quantitytypes.map(data => (
                                                        <li> <a href="javascript:void(0)" onClick={() => handleSelect("totalPackageQuantity")} > {data.codeListVersion}</a></li>))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-12 control-label"
                                        for="totalItemQuantity">Total Item Quantity:</label>
                                    <div class="col-12">
                                        <div class="input-group">
                                            <input id="totalItemQuantity" name="totalItemQuantity"
                                                class="form-control" placeholder="placeholder" type="text" />
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-default dropdown-toggle"
                                                    data-toggle="dropdown">
                                                    {this.state.data.totalItemQuantityQuantitytype}
                                                    <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu pull-right">
                                                    {this.state.quantitytypes.map(data => (
                                                        <li> <a href="javascript:void(0)" onClick={() => handleSelect("totalItemQuantity")} > {data.codeListVersion}</a></li>))}

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="card my-3">
                                <div class="form-group">
                                    <h3 className="card-title">Package Total</h3>
                                </div>
                                <div class="form-group">
                                    <label class="col-12 control-label" for="packageTypeCode">Package Type:</label>
                                    <div class="col-12">
                                        <select id="packageTypeCode" name="packageTypeCode"
                                            class="form-control">
                                            <option value="1">Option one</option>
                                            <option value="2">Option two</option>
                                        </select>
                                    </div>
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
                                <div class="form-group">
                                    <label class="col-12 control-label" for="totalGrossWeight">Total Gross Weight</label>
                                    <div class="col-12">
                                    <div class="input-group">
                                            <input id="totalGrossWeight" name="totalGrossWeight"
                                                class="form-control" placeholder="Weight" type="text" />
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-default dropdown-toggle"
                                                    data-toggle="dropdown">
                                                    {this.state.data.totalGrossWeightMeasurementtype}
                                                    <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu pull-right">
                                                    {this.state.measurementtypes.map(data => (
                                                        <li> <a href="javascript:void(0)" onClick={() => handleSelect("totalGrossWeight")} > {data.codeListVersion}</a></li>))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-12 control-label" for="totalGrossVolume">Total Gross Volume</label>
                                    <div class="col-12">
                                    <div class="input-group">
                                                <input id="totalGrossVolume" name="totalGrossVolume"
                                                    class="form-control" placeholder="Volume" type="text" />

                                                <div class="input-group-btn">
                                                    <button type="button" class="btn btn-default dropdown-toggle"
                                                        data-toggle="dropdown">
                                                        {this.state.data.totalGrossVolumeMeasurementtype}
                                                        <span class="caret"></span>
                                                    </button>
                                                    <ul class="dropdown-menu pull-right">
                                                        {this.state.measurementtypes.map(data => (
                                                            <li> <a href="javascript:void(0)" onClick={() => handleSelect("totalGrossVolume")} > {data.codeListVersion}</a></li>))}
                                                    </ul>
                                                </div>
                                                {this.state.errors["countryOfOriginCode"]
                                                    &&
                                                    <div className="alert alert-danger">{this.state.errors["countryOfOriginCode"]}</div>}
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
}

export default TransportCapacityBookingSpaceRequirement
