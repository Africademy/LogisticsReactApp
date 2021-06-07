
    //  old code

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
import {saveTransportcargocharacteristicstype} from '../services/transportcargocharacteristicstypeService'
import { savePackagetotaltype } from '../services/packagetotaltypeService';


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

        cargoTypeCode: "",
        harmonizedSystemCode: "", 
        cargoTypeDescription: "", 
        countryOfOriginCode: "", 
        finalDestinationCountry: "",

        totalGrossVolume:'',
        totalGrossVolumeUnits:"",
        totalGrossWeight: '',
        totalGrossWeightUnits:'',
        totalTransportNetWeight: "",
        totalTransportNetWeightUnits:"",
        totalChargeableWeight: "",
        totalChargeableWeightUnits: "",
        declaredWeightForCustoms: "", 
        declaredWeightForCustomsUnits: "", 
        totalLoadingLength: "", 
        totalLoadingLengthUnits: "",
        associatedInvoiceAmount: "",
        associatedInvoiceAmountUnits: "",
        declaredValueForCustoms: "", 
        declaredValueForCustomsUnits:"",
        totalPackageQuantity: "",
        totalPackageQuantityUnits: "",
        totalItemQuantity: "", 
        totalItemQuantityUnits: "", 

        packageTypeCode: "",
        totalPackageQuantityPT:"",
        totalGrossWeightPT:"",
        totalGrossWeightPTUnits:"",
        totalGrossVolumePT:"",
        totalGrossVolumePTUnits:"",
        errors: {}
    };
    async populateForm() {
        try {
            const transportcapacitybookingId = this.props.match.params.id;
            console.log(transportcapacitybookingId,"this.param.id ")
            console.log("called,called,called")
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
        console.log(cargoTypeCodes, "CargoTypeCodes")
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


      ///Post 
        const handleSubmitPackageTotal =  (e) =>{
            e.preventDefault()
            const data ={
                totalPackageQuantity: this.state.totalPackageQuantityPT,
                totalGrossVolume: {
                    value: this.state.totalGrossVolumePT,
                    measurementtype: this.state.totalGrossVolumePTUnits

                },
                totalGrossWeight: {
                    Value:this.state.totalGrossWeightPT,
                    Measurementtype:this.state.totalGrossWeightPTUnits
                },
                packageTypeCodeId:this.state.packageTypeCode
            }
           console.log(JSON.stringify(data),"posting data")
            savePackagetotaltype(data)
        }
     
    const handleInputChange =(e,type)=>{

          if(type === "totalGrossVolume"){
            //   const updatVlaue = JSON.parse(JSON.stringify(this.state))
            //    const xyz = {...updatVlaue,data:{totalGrossVolume:e.target.value}}
            this.setState({totalGrossVolume:e.target.value})
          }
          if(type === "totalGrossWeight"){
            this.setState({totalGrossWeight:e.target.value})
          }

          if(type === "totalTransportNetWeight"){
            this.setState({totalTransportNetWeight:e.target.value})
          }
          if(type === "totalChargeableWeight"){
            this.setState({totalChargeableWeight:e.target.value})
          }
          if(type === "declaredWeightForCustoms"){
            this.setState({declaredWeightForCustoms:e.target.value})
          }
          if(type === "totalLoadingLength"){
            this.setState({totalLoadingLength:e.target.value})
          }
         
          
          if(type === "associatedInvoiceAmount"){
            this.setState({associatedInvoiceAmount:e.target.value})
          }
          if(type === "declaredValueForCustoms"){
            this.setState({declaredValueForCustoms:e.target.value})
          }
          if(type === "totalPackageQuantity"){
            this.setState({totalPackageQuantity:e.target.value})
          }
          if(type === "totalItemQuantity"){
            this.setState({totalItemQuantity:e.target.value})
          }
        //   totalPackageQuantityPT
        if(type === "totalPackageQuantityPT"){
            this.setState({totalPackageQuantityPT:e.target.value})
          }
        //   totalGrossWeightPT
        if(type === "totalGrossWeightPT"){
            this.setState({totalGrossWeightPT:e.target.value})
          }
        //   totalGrossVolumePT
        if(type === "totalGrossVolumePT"){
            this.setState({ totalGrossVolumePT:e.target.value})
          }

    }
   

    const handleSelectChange =(e,type)=>{

          if(type === "totalGrossVolume"){
           this.setState({totalGrossVolumeUnits:e.target.value})  
          }
          if(type === "totalGrossWeight"){
            this.setState({totalGrossWeightUnits:e.target.value})  
           }
     
          if(type === "totalTransportNetWeight"){
            this.setState({totalTransportNetWeightUnits:e.target.value})
          }
          if(type === "totalChargeableWeight"){
            this.setState({totalChargeableWeightUnits:e.target.value})
          }
          if(type === "declaredWeightForCustoms"){
            this.setState({declaredWeightForCustomsUnits:e.target.value})
          }
          if(type === "totalLoadingLength"){
            this.setState({totalLoadingLengthUnits:e.target.value})
          }
         
        
        if(type === "associatedInvoiceAmount"){
            this.setState({associatedInvoiceAmountUnits:e.target.value})
        }
        if(type === "declaredValueForCustoms"){
            this.setState({declaredValueForCustomsUnits:e.target.value})
        }
        if(type === "totalPackageQuantity"){
            this.setState({totalPackageQuantityUnits:e.target.value})
        }
        if(type === "totalItemQuantity"){
            this.setState({totalItemQuantityUnits:e.target.value})
        }
        // packageTypeCode
        if(type === "packageTypeCode"){
            this.setState({packageTypeCode:e.target.value})
        }
         //   totalGrossWeightPT
         if(type === "totalGrossWeightPT"){
            this.setState({totalGrossWeightPTUnits:e.target.value})
          }
          //   totalGrossVolumePT
        if(type === "totalGrossVolumePT"){
            this.setState({ totalGrossVolumePTUnits:e.target.value})
          }

          //start here
          if(type === "cargoTypeCode"){
            this.setState({ cargoTypeCode:e.target.value})
          }
          if(type === "harmonizedSystemCode"){
            this.setState({ harmonizedSystemCode:e.target.value})
          }
          if(type === "cargoTypeDescription"){
            this.setState({ cargoTypeDescription:e.target.value})
          }
          if(type === "countryOfOriginCode"){
            this.setState({ countryOfOriginCode:e.target.value})
          }
          if(type === "finalDestinationCountry"){
            this.setState({ finalDestinationCountry:e.target.value})
          }
    }
  
    console.log(this.state,"state")
 

        return (
            <div id="card-989308">
                <div className="card my-3">
                    <div className="card-header">
                        <a className="card-link collapsed card-title" data-toggle="collapse" data-parent="#card-989308" href="#card-element-780308">Space Requirements:</a>
                    </div>
                    <div id="card-element-780308" className="collapse">
                        <div className="card-body">
                            <div className="card">
                            <div className="card-header">
                                <a className="card-title">Cargo Characteristics:</a>
                            </div>





                            {/* cargoType */}
                                <div className="form-group">
                                    <label className="col-12 control-label" for="cargoTypeCode">Cargo Type</label>
                                    <div className="col-12">
                                        <select id="cargoTypeCode" name="cargoTypeCode" class="form-control" value={this.state.cargoTypeCode} onChange={(e)=>handleSelectChange(e,"cargoTypeCode")} >
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

                                {/* Harmonized type */}
                                <div className="form-group">
                                    <label className="col-12 control-label" for="harmonizedSystemCode">Harmonized System</label>
                                    <div className="col-12">
                                        <select id="harmonizedSystemCode" name="harmonizedSystemCode"
                                            className="form-control" value={this.state.harmonizedSystemCode} onChange={(e)=>handleSelectChange(e,"harmonizedSystemCode")} >
                                            <option value="" disabled defaultValue>
                                                Select Harmonized system
                                                        </option>
                                            {this.state.harmonizedSystemCodes.map(harmonizedSystemCode => (
                                                <option key={harmonizedSystemCode._id} value={harmonizedSystemCode._id}>
                                                    {harmonizedSystemCode.codeListVersion}
                                                </option>
                                            ))}
                                        </select>
                                        {this.state.errors["harmonizedSystemCode"]
                                            &&
                                            <div className="alert alert-danger">{this.state.errors["harmonizedSystemCode"]}</div>}

                                    </div>
                                </div>

                                {/* cargoTypeDescription */}
                                <div className="form-group">
                                    <label className="col-12 control-label" for="cargoTypeDescription">Cargo Type Description</label>
                                    <div className="col-12">
                                        <select id="cargoTypeDescription" name="cargoTypeDescription" className="form-control" value={this.state.cargoTypeDescription} onChange={(e)=>handleSelectChange(e,"cargoTypeDescription")}>
                                            <option value="" disabled defaultValue>
                                                Cargo Type Description
                                                    </option>
                                            {this.state.cargoTypeDescriptions.map(cargoTypeDescription => (
                                                <option key={cargoTypeDescription._id} value={cargoTypeDescription._id}>
                                                    {cargoTypeDescription.codeListVersion}
                                                </option>
                                            ))}
                                        </select>
                                        {this.state.errors["cargoTypeDescription"]
                                            &&
                                            <div className="alert alert-danger">{this.state.errors["cargoTypeDescription"]}</div>}

                                    </div>
                                </div>


                             {/* Cpuntry Of Origin    */}
                                <div className="form-group">
                                    
                                    <div className="form-group">
                                        <label className="col-12 control-label" for="countryOfOriginCode">Country Of Origin</label>
                                        <div className="col-12">
                                            <select id="countryOfOriginCode" name="countryOfOriginCode"
                                                className="form-control" value={this.state.countryOfOriginCode} onChange={(e)=>handleSelectChange(e,"countryOfOriginCode")} >
                                                <option value="" disabled defaultValue>
                                                    Select Country Of Origin
                                                    </option>
                                                {this.state.countryOfOriginCodes.map(countryOfOriginCode => (
                                                    <option key={countryOfOriginCode._id} value={countryOfOriginCode._id}>
                                                        {countryOfOriginCode.codeListVersion}
                                                    </option>
                                                ))}
                                            </select>
                                            {this.state.errors["countryOfOriginCode"]
                                                &&
                                                <div className="alert alert-danger">{this.state.errors["countryOfOriginCode"]}</div>}

                                        </div>
                                    </div>

                                    {/* Final Destination Country */}

                                    <div className="form-group">
                                        <label className="col-12 control-label" for="finalDestinationCountry">Final Destination Country</label>
                                        <div className="col-12">
                                            <select id="finalDestinationCountry" name="finalDestinationCountry"
                                                className="form-control" value={this.state.finalDestinationCountry} onChange={(e)=>handleSelectChange(e,"finalDestinationCountry")}>
                                                <option value="" disabled defaultValue>
                                                    Select Final Destination Country
                                                    </option>
                                                {this.state.finalDestinationCountrys.map(finalDestinationCountry => (
                                                    <option key={finalDestinationCountry._id} value={finalDestinationCountry._id}>
                                                        {finalDestinationCountry.codeListVersion}
                                                    </option>
                                                ))}
                                            </select>
                                            {this.state.errors["finalDestinationCountry"]
                                                &&
                                                <div className="alert alert-danger">{this.state.errors["finalDestinationCountry"]}</div>}

                                        </div>
                                    </div>

                                    {/* new code */}


                                    {/* Total Gross Volume */}

                                    <div className="form-group">
                                      <label className="col-12 control-label" for="totalGrossVolume">Total Gross Volume</label>
                                        <div className="col-12">
                                            <div className="input-group">
                                                <input id="totalGrossVolume" name="totalGrossVolume"
                                                    className="form-control" placeholder="Volume" type="text" value={this.state.totalGrossVolume} onChange={(e)=>handleInputChange(e,"totalGrossVolume")}/>
                                                <select value={this.state.totalGrossVolumeUnits} onChange={(e)=>handleSelectChange(e,"totalGrossVolume")}>
                                                <option defaultValue>Select unit</option>
                                                   {this.state.measurementtypes.map(item=>{
                                                       return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                   }) }
                                                </select>
                                                {this.state.errors["countryOfOriginCode"]
                                                    &&
                                                    <div className="alert alert-danger">{this.state.errors["countryOfOriginCode"]}</div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Total Gross Weight */}
                                <div className="form-group">
                                    <label className="col-12 control-label" for="totalGrossWeight">Total Gross Weight</label>
                                    <div className="col-12">
                                        <div className="input-group">
                                            <input id="totalGrossWeight" name="totalGrossWeight"
                                                className="form-control" placeholder="Weight" type="text" value={this.state.totalGrossWeight } onChange={(e)=>handleInputChange(e,"totalGrossWeight")} />
                                          
                                             <select value={this.state.totalGrossWeightUnits } onChange={(e)=>handleSelectChange(e,"totalGrossWeight")}>
                                             <option defaultValue>Select unit</option>
                                                 {this.state.measurementtypes.map(item=>{
                                                     return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                 }) }
                                              </select>
                                              
                                        </div>
                                    </div>
                                </div>



                                {/* Total Transport Net Weight */}
                                <div className="form-group">
                                    <label className="col-12 control-label" for="totalTransportNetWeight">Total Transport Net Weight</label>
                                    <div className="col-12">
                                        <div className="input-group">
                                            <input id="totalTransportNetWeight" name="totalTransportNetWeight"
                                                className="form-control" placeholder="Weight" type="text" value={this.state.totalTransportNetWeight } onChange={(e)=>handleInputChange(e,"totalTransportNetWeight")}  />
                                           <select value={this.state.totalTransportNetWeightUnits } onChange={(e)=>handleSelectChange(e,"totalTransportNetWeight")}>                                              
                                           <option defaultValue>Select unit</option>
                                                 {this.state.measurementtypes.map(item=>{
                                                     return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                 }) }
                                              </select>
                                        </div>
                                    </div>
                                </div>
                                {/* Total Chargeable Weight */}
                                <div className="form-group">
                                    <label className="col-12 control-label" for="totalChargeableWeight">Total Chargeable Weight</label>
                                    <div className="col-12">
                                        <div className="input-group">
                                            <input id="totalChargeableWeight" name="totalChargeableWeight"
                                                className="form-control" placeholder="placeholder" type="text" value={this.state.totalChargeableWeight } onChange={(e)=>handleInputChange(e,"totalChargeableWeight")} />
                                           <select value={this.state.totalChargeableWeightUnits } onChange={(e)=>handleSelectChange(e,"totalChargeableWeight")}>                                              
                                           <option defaultValue>Select unit</option>
                                                 {this.state.measurementtypes.map(item=>{
                                                     return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                 }) }
                                              </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Declared Weight For Customs */}
                                <div className="form-group">
                                    <label className="col-12 control-label" for="declaredWeightForCustoms">Declared Weight For Customs</label>
                                    <div className="col-12">
                                        <div className="input-group">
                                            <input id="declaredWeightForCustoms" name="declaredWeightForCustoms"
                                                className="form-control" placeholder="placeholder" type="text" value={this.state.declaredWeightForCustoms } onChange={(e)=>handleInputChange(e,"declaredWeightForCustoms")} />
                                            <select value={this.state.declaredWeightForCustomsUnits } onChange={(e)=>handleSelectChange(e,"declaredWeightForCustoms")}>                                              
                                            <option defaultValue>Select unit</option>
                                                 {this.state.measurementtypes.map(item=>{
                                                     return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                 }) }
                                              </select>
                                        </div>
                                    </div>
                                </div>
                                {/* Total Loading Length */}
                                <div className="form-group">
                                    <label className="col-12 control-label" for="totalLoadingLength">Total Loading Length</label>
                                    <div className="col-12">
                                        <div className="input-group">
                                            <input id="totalLoadingLength" name="totalLoadingLength"
                                                className="form-control" placeholder="placeholder" type="text" value={this.state.totalLoadingLength } onChange={(e)=>handleInputChange(e,"totalLoadingLength")} />
                                          <select value={this.state.totalLoadingLengthUnits } onChange={(e)=>handleSelectChange(e,"totalLoadingLength")}>                                              
                                          <option defaultValue>Select unit</option>
                                                 {this.state.measurementtypes.map(item=>{
                                                     return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                 }) }
                                              </select>
                                        </div>
                                    </div>
                                </div>







                                {/* Associated Invoice Amount */}


                                <div className="form-group">
                                    <label className="col-12 control-label" for="associatedInvoiceAmount">Associated Invoice Amount</label>
                                    <div className="col-12">
                                        <div className="input-group">
                                            <input id="associatedInvoiceAmount" name="associatedInvoiceAmount"
                                                className="form-control" placeholder="placeholder" type="text"  value={this.state.associatedInvoiceAmount } onChange={(e)=>handleInputChange(e,"associatedInvoiceAmount")} />
                                          
                                             <select value={this.state.associatedInvoiceAmountUnits } onChange={(e)=>handleSelectChange(e,"associatedInvoiceAmount")}>                                              
                                             <option defaultValue>Select unit</option>
                                                 {this.state.amounttypes.map(item=>{
                                                     return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                 }) }
                                              </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Declared Value For Customs< */}
                                <div className="form-group">
                                    <label className="col-12 control-label" for="declaredValueForCustoms">Declared Value For Customs</label>
                                    <div className="col-12">
                                        <div className="input-group">
                                            <input id="declaredValueForCustoms" name="declaredValueForCustoms"
                                                className="form-control" placeholder="Declared Value For Customs" type="text"  value={this.state.declaredValueForCustoms } onChange={(e)=>handleInputChange(e,"declaredValueForCustoms")} />
                                             <select value={this.state.declaredValueForCustomsUnits } onChange={(e)=>handleSelectChange(e,"declaredValueForCustoms")}>                                              
                                             <option defaultValue>Select unit</option>
                                                 {this.state.amounttypes.map(item=>{
                                                     return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                 }) }
                                              </select>
                                        </div>
                                    </div>
                                </div>

                            {/* Total Package Quantity */}

                                <div className="form-group">
                                    <label className="col-12 control-label" for="totalPackageQuantity">Total Package Quantity</label>
                                    <div className="col-12">
                                        <div className="input-group">
                                            <input id="totalPackageQuantity" name="totalPackageQuantity"
                                                className="form-control" placeholder="placeholder" type="text"  value={this.state.totalPackageQuantity } onChange={(e)=>handleInputChange(e,"totalPackageQuantity")} />
                                             <select value={this.state.totalPackageQuantityUnits } onChange={(e)=>handleSelectChange(e,"totalPackageQuantity")}>                                              
                                             <option defaultValue>Select unit</option>
                                                 {this.state.quantitytypes.map(item=>{
                                                     return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                 }) }
                                              </select>
                                        </div>
                                    </div>
                                </div>
                            {/* Total Item Quantity: */}
                                <div className="form-group">
                                    <label className="col-12 control-label"
                                        for="totalItemQuantity">Total Item Quantity:</label>
                                    <div className="col-12">
                                        <div className="input-group">
                                            <input id="totalItemQuantity" name="totalItemQuantity"
                                                className="form-control" placeholder="placeholder" type="text"  value={this.state.totalItemQuantity } onChange={(e)=>handleInputChange(e,"totalItemQuantity")} />
                                            <select value={this.state.totalItemQuantityUnits } onChange={(e)=>handleSelectChange(e,"totalItemQuantity")}>                                              
                                             <option defaultValue>Select unit</option>
                                                 {this.state.quantitytypes.map(item=>{
                                                     return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                 }) }
                                              </select>
                                        </div>
                                    </div>
                                </div>

                            </div>





                     {/* //2 Packagetype */}
                          
                            <div className="card my-3">
                            <div className="card-header">
                                <a className="card-title">Package Total:</a>
                            </div>
                     {/* Package Type */}
                                <div className="form-group">
                                    <label className="col-12 control-label" for="packageTypeCode">Package Type:</label>
                                    <div className="col-12">
                                        <select id="packageTypeCode" name="packageTypeCode"
                                            className="form-control" value={this.state.packageTypeCode} onChange={(e)=>handleSelectChange(e,"packageTypeCode")} >
                                             <option defaultValue>select package</option>
                                            {/* <option value="606451311b09402e3c72a155">Select Id1</option>
                                            <option value="706451311b09402e3c72a151">Select Id2</option> */}
                                            {this.state.packagetypecodes.map((item)=>{
                                                 return <option value={item._id}>{item.codeListVersion}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>


                     {/* PackageTT Total Package Quantity */}
                                    <div className="form-group">
                                        <label className="col-12 control-label" htmlFor="totalPackageQuantityPT">Total Package Quantity</label>
                                        <div className="col-12">
                                        <input
                                            value={this.state.totalPackageQuantityPT}
                                            onChange={(e)=>handleInputChange(e,"totalPackageQuantityPT")}
                                            name="totalPackageQuantity"
                                            id="totalPackageQuantity"
                                            type="number"
                                            className="form-control"
                                        />
                                        {this.state.errors["totalPackageQuantity"] && <div className="alert alert-danger">{this.state.errors["totalPackageQuantity"]}</div>}
                                        </div>
                                    </div>

                                    {/* Total Gross WeightPT */}
                                <div className="form-group">
                                    <label className="col-12 control-label" for="totalGrossWeightPT">Total Gross Weight</label>
                                    <div className="col-12">
                                    <div className="input-group">
                                            <input id="totalGrossWeight" name="totalGrossWeightPT"
                                                className="form-control" placeholder="Weight" type="text"  value={this.state.totalGrossWeightPT } onChange={(e)=>handleInputChange(e,"totalGrossWeightPT")} />
                                             <select value={this.state.totalGrossWeightPTUnits } onChange={(e)=>handleSelectChange(e,"totalGrossWeightPT")}>                                              
                                                 <option defaultValue>Select unit</option>
                                                 {this.state.measurementtypes.map(item=>{
                                                     return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                 }) }
                                              </select>
                                        </div>
                                    </div>
                                </div>
                                {/* Total Gross VolumePT */}
                                <div className="form-group">
                                    <label className="col-12 control-label" for="totalGrossVolumePT">Total Gross Volume</label>
                                    <div className="col-12">
                                    <div className="input-group">
                                                <input id="totalGrossVolume" name="totalGrossVolumePT"
                                                    className="form-control" placeholder="Volume" type="text"  value={this.state.totalGrossVolumePT } onChange={(e)=>handleInputChange(e,"totalGrossVolumePT")} />
                                               <select value={this.state.totalGrossVolumePTUnits } onChange={(e)=>handleSelectChange(e,"totalGrossVolumePT")}>                                              
                                               <option defaultValue>Select unit</option>
                                                 {this.state.measurementtypes.map(item=>{
                                                     return <option value={item.codeListVersion}>{item.codeListVersion}</option>
                                                 }) }
                                               </select>
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





// NEw Code >>>>>>>>>>>>>>>>>>>>. //




// import React, { useEffect,useState } from 'react'

// import { getMeasurementtypes } from '../services/measurementtypeService';



// const TransportCapacityBookingSpaceRequirement = ()=> {

//     const [measurementtypes,setmeasurementtypes] =  useState([])
//     const [state,setState] =  useState({  
//                 cargoTypeCode: "",
//                 harmonizedSystemCode: "", 
//                 cargoTypeDescription: "", 
//                 countryOfOriginCode: "", 
//                 finalDestinationCountry: "",
//                 totalGrossVolume:'',
//                 totalGrossVolumeUnits:"",
//                 totalGrossWeight: '',
//                 totalGrossWeightUnits:'',
//                 totalTransportNetWeight: "",
//                 totalTransportNetWeightUnits:"",
//                 totalChargeableWeight: "",
//                 totalChargeableWeightUnits: "",
//                 declaredWeightForCustoms: "", 
//                 declaredWeightForCustomsUnits: "", 
//                 totalLoadingLength: "", 
//                 totalLoadingLengthUnits: "",
//                 associatedInvoiceAmount: "",
//                 associatedInvoiceAmountUnits: "",
//                 declaredValueForCustoms: "", 
//                 declaredValueForCustomsUnits:"",
//                 totalPackageQuantity: "",
//                 totalPackageQuantityUnits: "",
//                 totalItemQuantity: "", 
//                 totalItemQuantityUnits: "", 
//                 packageTypeCode: "",
//                 totalPackageQuantityPT:"",
//                 totalGrossWeightPT:"",
//                 totalGrossWeightPTUnits:"",
//                 totalGrossVolumePT:"",
//                 totalGrossVolumePTUnits:"",      
//         })
    
//         useEffect(()=>{
//          populateMeasurementtypes();
//         },[])

    
     
    
//         const populateMeasurementtypes = async () => {
//             const { data: measurementtypes } = await getMeasurementtypes();
          
//             setmeasurementtypes([...measurementtypes])
//         }
       
//       console.log(state,"state")

//       const handleInputChange1 =(e)=>{
//              setState({...state,totalGrossVolume:e.target.value})
//       }
//       const handleSelectChange1 =(e)=>{
//         setState({...state,totalGrossVolumeUnits:e.target.value})
//       }

//         return (
//             <div id="card-989308">
//                 <div className="card my-3">
//                     <div className="card-header">
//                         <a className="card-link collapsed card-title" data-toggle="collapse" data-parent="#card-989308" href="#card-element-780308">Space Requirements:</a>
//                     </div>


//                     <div className="form-group">
//                                       <label className="col-12 control-label" for="totalGrossVolume">Total Gross Volume</label>
//                                         <div className="col-12">
//                                             <div className="input-group">
//                                                 <input id="totalGrossVolume" name="totalGrossVolume"
//                                                     className="form-control" placeholder="Volume" type="text" value={state.totalGrossVolume} onChange={(e)=>handleInputChange1(e)}/>
//                                                 <select value={state.totalGrossVolumeUnits } onChange={(e)=>handleSelectChange1(e)}>
//                                                  <option>Select unit</option>
//                                                    {measurementtypes.map(item=>{
//                                                        return <option value={item.codeListVersion}>{item.codeListVersion}</option>
//                                                    }) }
//                                                 </select>
                                              
//                                             </div>
//                                         </div>
//                                     </div>
//                   </div>
//             </div>
//         )
//     }
// export default TransportCapacityBookingSpaceRequirement
