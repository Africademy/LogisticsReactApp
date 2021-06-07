import React, { Component } from 'react';
import Select from 'react-select';

export class TransportReference extends Component {
    render() {
        return (
            <div id="card-989306">
                <div class="card">
                    <div class="card-header">
                        <a class="card-link collapsed" data-toggle="collapse" data-parent="#card-989306" href="#card-element-780306">Transport Reference:</a>
                    </div>
                    <div id="card-element-780306" class="collapse">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="entityIdentification">Entity Identification:</label>
                                <input type="string" class="form-control" id="entityIdentification" />
                            </div>
                            <div className="card">
                                <h5>Content Owner:</h5>
                                <div className="card-body">
                                    <div class="form-group">
                                        <label for="gln">GLN:</label>
                                        <input type="string" class="form-control" id="gln" />
                                    </div>
                                    <div class="form-group">
                                        <label for="additionalPartyIdentification">Additional Party Identification:</label>
                                        <Select class="form-control dropdown-toggle" id="additionalPartyIdentification" data-toggle="dropdown"></Select>
                                    </div>
                                    <div class="form-group">
                                        <label for="transportReferenceTypeCode">Transport Reference Type:</label>
                                        <Select class="form-control dropdown-toggle" id="transportReferenceTypeCode" data-toggle="dropdown"></Select>
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

export default TransportReference
