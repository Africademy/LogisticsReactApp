import React, { Component } from "react";
import Joi from "joi-browser";
import { saveTransportcapacitybookingspacerequirement, getTransportcapacitybookingspacerequirement } from "../../services/transportcapacitybookingspacerequirementService";
import { getMeasurementtypes } from "../../services/measurementtypeService";
import { getTransportcargocharacteristicstypes } from "../../services/transportcargocharacteristicstypeService";
import { getTransportequipmenttypes } from "../../services/transportequipmenttypeService";
import { getDimensiontypes } from "../../services/dimensiontypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";
import { getPassengerinformationtypes } from "../../services/passengerinformationtypeService";
import { getTransportmeanstypes } from "../../services/transportmeanstypeService";

class createTransportcapacitybookingspacerequirement extends Component{

 constructor(props){
super(props);
    this.populatetransportEquipmentWeights = this.populatetransportEquipmentWeights.bind(this);
    this.populatetransportCargoCharacteristicss = this.populatetransportCargoCharacteristicss.bind(this);
    this.populateincludedTransportEquipments = this.populateincludedTransportEquipments.bind(this);
    this.populatedimensions = this.populatedimensions.bind(this);
    this.populatepackageTotals = this.populatepackageTotals.bind(this);
    this.populatepassengerInformations = this.populatepassengerInformations.bind(this);
    this.populateincludedTransportMeanss = this.populateincludedTransportMeanss.bind(this);
}  state = {
    data: { id: "", transportCargoCharacteristics: "", packageTotal: "", includedTransportMeans: "", passengerInformation: "", includedTransportEquipment: "", numberOfPiecesOfEquipment: "", transportEquipmentWeight: "", dimension: "", transportEquipmentWeightId: "", transportCargoCharacteristicsId: "", includedTransportEquipmentId: "", dimensionId: "", packageTotalId: "", passengerInformationId: "", includedTransportMeansId: "", },
    transportEquipmentWeights: [],
    transportCargoCharacteristicss: [],
    includedTransportEquipments: [],
    dimensions: [],
    packageTotals: [],
    passengerInformations: [],
    includedTransportMeanss: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    transportCargoCharacteristics:  Joi.number()
      .required()


      .label("transportCargoCharacteristics"),
    packageTotal:  Joi.number()



      .label("packageTotal"),
    includedTransportMeans:  Joi.number()



      .label("includedTransportMeans"),
    passengerInformation:  Joi.number()



      .label("passengerInformation"),
    includedTransportEquipment:  Joi.number()



      .label("includedTransportEquipment"),
    numberOfPiecesOfEquipment:  Joi.number()



      .label("numberOfPiecesOfEquipment"),
    transportEquipmentWeight:  Joi.number()



      .label("transportEquipmentWeight"),
    dimension:  Joi.number()



      .label("dimension"),
    transportEquipmentWeightId:  Joi.string()
      .required()
      .label("transportEquipmentWeightId"),
    transportCargoCharacteristicsId:  Joi.string()
      .required()
      .label("transportCargoCharacteristicsId"),
    includedTransportEquipmentId:  Joi.string()
      .required()
      .label("includedTransportEquipmentId"),
    dimensionId:  Joi.string()
      .required()
      .label("dimensionId"),
    packageTotalId:  Joi.string()
      .required()
      .label("packageTotalId"),
    passengerInformationId:  Joi.string()
      .required()
      .label("passengerInformationId"),
    includedTransportMeansId:  Joi.string()
      .required()
      .label("includedTransportMeansId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const transportcapacitybookingspacerequirementId = this.props.match.params.id;
      if(transportcapacitybookingspacerequirementId!=="new"){
        const { data } = await getTransportcapacitybookingspacerequirement(transportcapacitybookingspacerequirementId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatetransportEquipmentWeights() {
    const { data: transportEquipmentWeights } = await getMeasurementtypes();
    this.setState({ transportEquipmentWeights: transportEquipmentWeights });
  }

  async populatetransportCargoCharacteristicss() {
    const { data: transportCargoCharacteristicss } = await getTransportcargocharacteristicstypes();
    this.setState({ transportCargoCharacteristicss: transportCargoCharacteristicss });
  }

  async populateincludedTransportEquipments() {
    const { data: includedTransportEquipments } = await getTransportequipmenttypes();
    this.setState({ includedTransportEquipments: includedTransportEquipments });
  }

  async populatedimensions() {
    const { data: dimensions } = await getDimensiontypes();
    this.setState({ dimensions: dimensions });
  }

  async populatepackageTotals() {
    const { data: packageTotals } = await getEnumerationlibrarys();
    this.setState({ packageTotals: packageTotals });
  }

  async populatepassengerInformations() {
    const { data: passengerInformations } = await getPassengerinformationtypes();
    this.setState({ passengerInformations: passengerInformations });
  }

  async populateincludedTransportMeanss() {
    const { data: includedTransportMeanss } = await getTransportmeanstypes();
    this.setState({ includedTransportMeanss: includedTransportMeanss });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatetransportEquipmentWeights();
    await this.populatetransportCargoCharacteristicss();
    await this.populateincludedTransportEquipments();
    await this.populatedimensions();
    await this.populatepackageTotals();
    await this.populatepassengerInformations();
    await this.populateincludedTransportMeanss();
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
    await saveTransportcapacitybookingspacerequirement(this.state.data);
    this.props.history.push("/transportcapacitybookingspacerequirements");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportcapacitybookingspacerequirement Form</h1>
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
              <label htmlFor="transportCargoCharacteristics">Transport Cargo Characteristics</label>
              <input
                value={this.state.data["transportCargoCharacteristics"]}
                onChange={this.handleChange}
                name="transportCargoCharacteristics"
                id="transportCargoCharacteristics"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportCargoCharacteristics"] && <div className="alert alert-danger">{this.state.errors["transportCargoCharacteristics"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="packageTotal">Package Total</label>
              <input
                value={this.state.data["packageTotal"]}
                onChange={this.handleChange}
                name="packageTotal"
                id="packageTotal"
                type="number"
                className="form-control"
              />
              {this.state.errors["packageTotal"] && <div className="alert alert-danger">{this.state.errors["packageTotal"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="includedTransportMeans">Included Transport Means</label>
              <input
                value={this.state.data["includedTransportMeans"]}
                onChange={this.handleChange}
                name="includedTransportMeans"
                id="includedTransportMeans"
                type="number"
                className="form-control"
              />
              {this.state.errors["includedTransportMeans"] && <div className="alert alert-danger">{this.state.errors["includedTransportMeans"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="passengerInformation">Passenger Information</label>
              <input
                value={this.state.data["passengerInformation"]}
                onChange={this.handleChange}
                name="passengerInformation"
                id="passengerInformation"
                type="number"
                className="form-control"
              />
              {this.state.errors["passengerInformation"] && <div className="alert alert-danger">{this.state.errors["passengerInformation"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="includedTransportEquipment">Included Transport Equipment</label>
              <input
                value={this.state.data["includedTransportEquipment"]}
                onChange={this.handleChange}
                name="includedTransportEquipment"
                id="includedTransportEquipment"
                type="number"
                className="form-control"
              />
              {this.state.errors["includedTransportEquipment"] && <div className="alert alert-danger">{this.state.errors["includedTransportEquipment"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="numberOfPiecesOfEquipment">Number Of Pieces Of Equipment</label>
              <input
                value={this.state.data["numberOfPiecesOfEquipment"]}
                onChange={this.handleChange}
                name="numberOfPiecesOfEquipment"
                id="numberOfPiecesOfEquipment"
                type="number"
                className="form-control"
              />
              {this.state.errors["numberOfPiecesOfEquipment"] && <div className="alert alert-danger">{this.state.errors["numberOfPiecesOfEquipment"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportEquipmentWeight">Transport Equipment Weight</label>
              <input
                value={this.state.data["transportEquipmentWeight"]}
                onChange={this.handleChange}
                name="transportEquipmentWeight"
                id="transportEquipmentWeight"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportEquipmentWeight"] && <div className="alert alert-danger">{this.state.errors["transportEquipmentWeight"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dimension">Dimension</label>
              <input
                value={this.state.data["dimension"]}
                onChange={this.handleChange}
                name="dimension"
                id="dimension"
                type="number"
                className="form-control"
              />
              {this.state.errors["dimension"] && <div className="alert alert-danger">{this.state.errors["dimension"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportEquipmentWeightId">          Transport Equipment Weight <a target="_blank" href="/Measurementtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportEquipmentWeights}> Refresh</a> </label>
              <select
                value={this.state.data["transportEquipmentWeightId"]}
                onChange={this.handleChange}
                name="transportEquipmentWeightId"
                id="transportEquipmentWeightId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Measurementtype
                  </option>
                  {this.state.transportEquipmentWeights.map(Measurementtype => (
                    <option key={Measurementtype._id} value={Measurementtype._id}>
                      {Measurementtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportEquipmentWeightId"] && <div className="alert alert-danger">{this.state.errors["transportEquipmentWeightId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportCargoCharacteristicsId">          Transport Cargo Characteristics <a target="_blank" href="/Transportcargocharacteristicstypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportCargoCharacteristicss}> Refresh</a> </label>
              <select
                value={this.state.data["transportCargoCharacteristicsId"]}
                onChange={this.handleChange}
                name="transportCargoCharacteristicsId"
                id="transportCargoCharacteristicsId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Transportcargocharacteristicstype
                  </option>
                  {this.state.transportCargoCharacteristicss.map(Transportcargocharacteristicstype => (
                    <option key={Transportcargocharacteristicstype._id} value={Transportcargocharacteristicstype._id}>
                      {Transportcargocharacteristicstype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportCargoCharacteristicsId"] && <div className="alert alert-danger">{this.state.errors["transportCargoCharacteristicsId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="includedTransportEquipmentId">          Included Transport Equipment <a target="_blank" href="/Transportequipmenttypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateincludedTransportEquipments}> Refresh</a> </label>
              <select
                value={this.state.data["includedTransportEquipmentId"]}
                onChange={this.handleChange}
                name="includedTransportEquipmentId"
                id="includedTransportEquipmentId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Transportequipmenttype
                  </option>
                  {this.state.includedTransportEquipments.map(Transportequipmenttype => (
                    <option key={Transportequipmenttype._id} value={Transportequipmenttype._id}>
                      {Transportequipmenttype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["includedTransportEquipmentId"] && <div className="alert alert-danger">{this.state.errors["includedTransportEquipmentId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dimensionId">          Dimension <a target="_blank" href="/Dimensiontypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedimensions}> Refresh</a> </label>
              <select
                value={this.state.data["dimensionId"]}
                onChange={this.handleChange}
                name="dimensionId"
                id="dimensionId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Dimensiontype
                  </option>
                  {this.state.dimensions.map(Dimensiontype => (
                    <option key={Dimensiontype._id} value={Dimensiontype._id}>
                      {Dimensiontype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dimensionId"] && <div className="alert alert-danger">{this.state.errors["dimensionId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="packageTotalId">          Package Total <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatepackageTotals}> Refresh</a> </label>
              <select
                value={this.state.data["packageTotalId"]}
                onChange={this.handleChange}
                name="packageTotalId"
                id="packageTotalId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.packageTotals.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["packageTotalId"] && <div className="alert alert-danger">{this.state.errors["packageTotalId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="passengerInformationId">          Passenger Information <a target="_blank" href="/Passengerinformationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatepassengerInformations}> Refresh</a> </label>
              <select
                value={this.state.data["passengerInformationId"]}
                onChange={this.handleChange}
                name="passengerInformationId"
                id="passengerInformationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Passengerinformationtype
                  </option>
                  {this.state.passengerInformations.map(Passengerinformationtype => (
                    <option key={Passengerinformationtype._id} value={Passengerinformationtype._id}>
                      {Passengerinformationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["passengerInformationId"] && <div className="alert alert-danger">{this.state.errors["passengerInformationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="includedTransportMeansId">          Included Transport Means <a target="_blank" href="/Transportmeanstypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateincludedTransportMeanss}> Refresh</a> </label>
              <select
                value={this.state.data["includedTransportMeansId"]}
                onChange={this.handleChange}
                name="includedTransportMeansId"
                id="includedTransportMeansId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Transportmeanstype
                  </option>
                  {this.state.includedTransportMeanss.map(Transportmeanstype => (
                    <option key={Transportmeanstype._id} value={Transportmeanstype._id}>
                      {Transportmeanstype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["includedTransportMeansId"] && <div className="alert alert-danger">{this.state.errors["includedTransportMeansId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createTransportcapacitybookingspacerequirement;