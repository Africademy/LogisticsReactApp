import React, { Component } from 'react'
import Select from 'react-select';

export class Contact extends Component {
    render() {
        return (
            <div id="card-989294">
            <div class="card my-3">
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
}

export default Contact
