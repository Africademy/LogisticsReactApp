import React, { Component } from 'react'
import LogisticLocation from './LogisticLocation'

export class DeliveryTerms extends Component {
    render() {
        return (
            <div id="card-989306">
                <div class="card">
                    <div class="card-header">
                        <a class="card-link collapsed" data-toggle="collapse" data-parent="#card-989306" href="#card-element-780306">Delivery Terms:</a>
                    </div>
                    <div id="card-element-780306" class="collapse">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="incotermsCode">International Commercial Terms:</label>
                                <Select class="form-control dropdown-toggle" id="incotermsCode" data-toggle="dropdown"></Select>
                            </div>
                            <div class="form-group">
                                <label for="alternateDeliveryTermsCode">Alternate Delivery Terms:</label>
                                <Select class="form-control dropdown-toggle" id="alternateDeliveryTermsCode" data-toggle="dropdown"></Select>
                            </div>
                            <div class="form-group">
                                <label for="deliveryInstructions">Delivery Instructions:</label>
                                <Select class="form-control dropdown-toggle" id="deliveryInstructions" data-toggle="dropdown"></Select>
                            </div>
                            < LogisticLocation />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeliveryTerms
