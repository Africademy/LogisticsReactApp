import React, { Component, useState, useEffect } from 'react';
import Select from 'react-select';
import LogisticLocation from './LogisticLocation'
import { getLogisticeventtypecodes } from '../services/logisticeventtypecodeService';
import { getLogisticeventdurations } from '../services/logisticeventdurationService';
import { getTimemeasurementtypes } from '../services/timemeasurementtypeService';

const intialData = {
    data: { logisticeventtypecode: "", logisticeventduration: "", timemeasurementtype: "" },
    logisticeventtypecodes: [],
    logisticeventdurations: [],
    timemeasurementtypes: [],
    errors: {}
}
const PlannedPickUp = () => {
    const [state, setState] = useState(intialData)
    //  const [data,setData] = useState({ logisticeventtypecode: "", logisticeventduration: ""})

    useEffect(() => {
        populateLogisticeventtypecodes();
        populateLogisticeventdurations();
        populateTimemeasurementtypes();
    }, [])
    console.log(state.logisticeventdurations, "New")
    const populateLogisticeventtypecodes = async () => {
        const { data: logisticeventtypecodes } = await getLogisticeventtypecodes();
        // useEffect(() => {
        //     getLogisticeventtypecodes().then(data => setItems(data));
        //   }, []);
        setState({ ...state, logisticeventtypecodes: logisticeventtypecodes });
    }
    const populateLogisticeventdurations = async () => {
        const { data: logisticeventdurations } = await getLogisticeventdurations();
        setState({ ...state, logisticeventdurations: logisticeventdurations });
    }
    const populateTimemeasurementtypes = async () => {
        const { data: timemeasurementtypes } = await getTimemeasurementtypes();
        setState({ ...state, timemeasurementtypes: timemeasurementtypes });
    }
    const handleSelect = (e, type) => {
        if (type === "logisticEventDuration") {
            this.setState({ timemeasurementtype: e.target.text })
        }
    }

    return (
        <div id="card-989303">
            <div class="card my-3">
                <div class="card-header">
                    <a class="card-link collapsed card-title" data-toggle="collapse" data-parent="#card-989303" href="#card-element-780303">Planned PickUp:</a>
                </div>
                <div id="card-element-780303" class="collapse">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="logisticEventTypeCode">Logistic Event Type:</label>
                            <Select class="form-control dropdown-toggle" id="logisticEventTypeCode" data-toggle="dropdown" options={state.logisticeventtypecodes} />
                        </div>
                        <div class="form-group">
                            <label class="col-12 control-label" for="logisticEventDuration">Associated Invoice Amount</label>
                            <div class="col-12">
                                <div class="input-group">
                                    <input id="logisticEventDuration" name="logisticEventDuration"
                                        class="form-control" placeholder="Logistic Event Duration" type="text" />
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-default dropdown-toggle"
                                            data-toggle="dropdown">
                                            {state.data.timemeasurementtype}
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu pull-right">
                                            {state.timemeasurementtypes.map(data => (
                                                <li> <a href="javascript:void(0)" onClick={() => handleSelect("logisticEventDuration")} > {data.codeListVersion}</a></li>))}
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            {state.errors["timemeasurementtype"]
                                &&
                                <div className="alert alert-danger">{state.errors["timemeasurementtype"]}</div>}

                        </div>

                        <div>
                            < LogisticLocation />
                        </div>
                        <div class="card my-2">
                            <div class="card-body">
                                <h3 class="card-title">Logistic Event Period</h3>
                                <form>
                                    <div class="form-group row">
                                        <div class="input-group col-6 my-1">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">Start Date</div>
                                            </div>
                                            <input id="startdate" name="startdate" type="date"
                                                required="required" class="form-control" />
                                        </div>
                                        <div class="input-group col-6 my-1">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">End Date</div>
                                            </div>
                                            <input id="enddate" name="enddate" type="date"
                                                required="required" class="form-control" />
                                        </div>
                                        <div class="input-group col-6 my-1">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">Start Time</div>
                                            </div>
                                            <input id="startdate" name="startdate" type="time"
                                                required="required" class="form-control" />
                                        </div>
                                        <div class="input-group col-6 my-1">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">End Time</div>
                                            </div>
                                            <input id="endtime" name="endtime" type="time"
                                                required="required" class="form-control" />
                                        </div>
                                    </div>
                                    {/* <!-- <div class="form-group">
                                                        <button name="submit" type="submit"
                                                            class="btn btn-primary">Submit</button>
                                                    </div> --> */}
                                </form>
                            </div>
                        </div>
                        <div class="card my-2">
                            <div class="card-body">
                                <h3 class="card-title">Logistic Event Time</h3>
                                <form class="row">
                                    <div class="form-group col-10 row">
                                        <div class="input-group col-6 my-1">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">Start Time</div>
                                            </div>
                                            <input id="startdate" name="startdate" type="time"
                                                required="required" class="form-control" />
                                        </div>
                                        <div class="input-group col-6 my-1">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">End Time</div>
                                            </div>
                                            <input id="endtime" name="endtime" type="time"
                                                required="required" class="form-control" />
                                        </div>
                                    </div>
                                    {/* <!-- <div class="form-group align-self-center col-2">
                                                        <button name="submit" type="submit"
                                                            class="btn btn-primary">Submit</button>
                                                    </div> --> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}


// export class PlannedPickUp extends Component {
//     state = {
//         data: { logisticeventtypecode: "", logisticeventduration: "" },
//         logisticeventtypecodes: [],
//         logisticeventdurations: [],
//         timemeasurementtypes: [],
//         errors: {}
//     };
//     render() {
// const populateLogisticeventtypecodes = async () => {
//     const { data: logisticeventtypecodes } = await getLogisticeventtypecodes();
//     setState({ logisticeventtypecodes: logisticeventtypecodes });
// }
// const populateLogisticeventdurations = async () => {
//     const { data: logisticeventdurations } = await getLogisticeventdurations();
//     setState({ logisticeventdurations: logisticeventdurations });
// }
// const populateTimemeasurementtypes = async () => {
//     const { data: timemeasurementtypes } = await getTimemeasurementtypes();
//     setState({ timemeasurementtypes: timemeasurementtypes });
// }
//         return (
// <div id="card-989303">
//     <div class="card my-3">
//         <div class="card-header">
//             <a class="card-link collapsed card-title" data-toggle="collapse" data-parent="#card-989303" href="#card-element-780303">Planned PickUp:</a>
//         </div>
//         <div id="card-element-780303" class="collapse">
//             <div class="card-body">
//                 <div class="form-group">
//                     <label for="logisticEventTypeCode">Logistic Event Type:</label>
//                     <Select class="form-control dropdown-toggle" id="logisticEventTypeCode" data-toggle="dropdown" options={state.logisticeventtypecodes} />
//                 </div>
//                 <div class="form-group">
//                     <label for="logisticEventDuration">Logistic Event Duration:</label>
//                     <input type="text" class="form-control" id="logisticEventDuration" aria-label="Text input with dropdown button" />
//                     <div class="input-group-append">
//                         <button class="btn btn-outline-secondary dropdown-toggle"
//                             type="button" data-toggle="dropdown" aria-haspopup="true"
//                             aria-expanded="false">{state.timemeasurementtype}</button>
//                         <div class="dropdown-menu">
//                             <a value="" disabled defaultValue>
//                                 Select Time Measurement Type
//                                         </a>
//                             {state.timemeasurementtypes.map(timemeasurementtype => (
//                                 <a key={timemeasurementtype._id} value={timemeasurementtype.codeListVersion}>
//                                     {timemeasurementtype.codeListVersion}
//                                 </a>
//                             ))}
//                         </div>
//                         {state.errors["timemeasurementtype"]
//                             &&
//                             <div className="alert alert-danger">{state.errors["timemeasurementtype"]}</div>}
//                     </div>
//                 </div>

//             <div>
//                 < LogisticLocation />
//             </div>
//             <div class="card my-2">
//                 <div class="card-body">
//                     <h3 class="card-title">Logistic Event Period</h3>
//                     <form>
//                         <div class="form-group row">
//                             <div class="input-group col-6 my-1">
//                                 <div class="input-group-prepend">
//                                     <div class="input-group-text">Start Date</div>
//                                 </div>
//                                 <input id="startdate" name="startdate" type="date"
//                                     required="required" class="form-control" />
//                             </div>
//                             <div class="input-group col-6 my-1">
//                                 <div class="input-group-prepend">
//                                     <div class="input-group-text">End Date</div>
//                                 </div>
//                                 <input id="enddate" name="enddate" type="date"
//                                     required="required" class="form-control" />
//                             </div>
//                             <div class="input-group col-6 my-1">
//                                 <div class="input-group-prepend">
//                                     <div class="input-group-text">Start Time</div>
//                                 </div>
//                                 <input id="startdate" name="startdate" type="time"
//                                     required="required" class="form-control" />
//                             </div>
//                             <div class="input-group col-6 my-1">
//                                 <div class="input-group-prepend">
//                                     <div class="input-group-text">End Time</div>
//                                 </div>
//                                 <input id="endtime" name="endtime" type="time"
//                                     required="required" class="form-control" />
//                             </div>
//                         </div>
//                         {/* <!-- <div class="form-group">
//                                             <button name="submit" type="submit"
//                                                 class="btn btn-primary">Submit</button>
//                                         </div> --> */}
//                     </form>
//                 </div>
//             </div>
//             <div class="card my-2">
//                 <div class="card-body">
//                     <h3 class="card-title">Logistic Event Time</h3>
//                     <form class="row">
//                         <div class="form-group col-10 row">
//                             <div class="input-group col-6 my-1">
//                                 <div class="input-group-prepend">
//                                     <div class="input-group-text">Start Time</div>
//                                 </div>
//                                 <input id="startdate" name="startdate" type="time"
//                                     required="required" class="form-control" />
//                             </div>
//                             <div class="input-group col-6 my-1">
//                                 <div class="input-group-prepend">
//                                     <div class="input-group-text">End Time</div>
//                                 </div>
//                                 <input id="endtime" name="endtime" type="time"
//                                     required="required" class="form-control" />
//                             </div>
//                         </div>
//                         {/* <!-- <div class="form-group align-self-center col-2">
//                                             <button name="submit" type="submit"
//                                                 class="btn btn-primary">Submit</button>
//                                         </div> --> */}
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div >
//         )
//     }
// }

export default PlannedPickUp
