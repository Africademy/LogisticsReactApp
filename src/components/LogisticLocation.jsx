import React, { Component } from 'react'
import { render } from 'react-dom';
import Select from 'react-select';
import Address from './Address';
import Contact from './Contact';
import { getUnlocationcodes } from '../services/unlocationcodeService';

export class LogisticLocation extends Component {
    state = {
        data: {  cargoTypeCode: "", harmonizedSystemCode: "", cargoTypeDescription: "", countryOfOriginCode: "", finalDestinationCountry: "", totalGrossVolume: "", totalGrossWeight: "", totalTransportNetWeight: "", totalChargeableWeight: "", declaredWeightForCustoms: "", totalLoadingLength: "", associatedInvoiceAmount: "", declaredValueForCustoms: "", totalPackageQuantity: "", totalItemQuantity: "", },
        unlocationcodes: [],
        unlnew:false,
        errors: {}
    };
    render() {
        const populateUnlocationcodes = async () => {
            const { data: unlocationcodes } = await getUnlocationcodes();
            this.setState({ unlocationcodes: unlocationcodes });
        }
        const handleSetvalue = () => {
            this.setState({unlnew:true})
        }
        console.log(this.props.location,"inside LogisticLocation")
        return (
            <div id="card-989304">
                <div class="card">
                    <div class="card-header">
                        <a class="card-link collapsed" data-toggle="collapse" data-parent="#card-989304" href="#card-element-780304"> {this.props.location === "Planned DropOff" ? "DropOff Location" : "Pickup Location:"} </a>
                    </div>
                    <div id="card-element-780304" class="collapse">
                        <div class="card-body">
                            <form role="form" class="form">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="fa fa-map-pin"></i>
                                        </div>
                                    </div>
                                    <input id="unlocationcode" name="unlocationcode" placeholder="UN Location:" type="text" class="form-control"/>
                                        <div class="button-group">
                                            <button name="Find" type="button" class="btn btn-primary ml-2">Find</button>
                                            <button name="Add" type="button" class="btn btn-secondary ml-2" onClick={handleSetvalue}>Add New</button>
                                            {console.log(this.state.unlnew,"Qwerty")}
                                        </div>
                                </div>  
                                {this.state.unlnew && <div className="card my-2">
                                 <div className="card-body">
                                 {/* <div class="form-group">
                                        <label for="gln"> GLN:</label>
                                        <Select class="form-control dropdown-toggle" id="gln" data-toggle="dropdown"></Select>
                                    </div> */}
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
                                 </div>
                                
                                </div>}

                                    {/* <div class="form-group">
                                    <label for="unLocationCode"> UN Location:</label>
                                    <Select class="form-control dropdown-toggle" id="unLocationCode" data-toggle="dropdown" options={this.state.unlocationcodes}/>
                                </div> */}
                                    
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default LogisticLocation
