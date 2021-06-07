import React, { Component } from "react";
import Joi from "joi-browser";
import { saveTransportinstructiontransportequipmenttype, getTransportinstructiontransportequipmenttype } from "../../services/transportinstructiontransportequipmenttypeService";
import { getDimensiontypes } from "../../services/dimensiontypeService";
import { getLogisticlocationtypes } from "../../services/logisticlocationtypeService";
import { getMeasurementtypes } from "../../services/measurementtypeService";
import { getTransportsealtypes } from "../../services/transportsealtypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";
import { getReturnableassetidentifications } from "../../services/returnableassetidentificationService";

class createTransportinstructiontransportequipmenttype extends Component{

 constructor(props){
super(props);
    this.populatedimensions = this.populatedimensions.bind(this);
    this.populatepickUpLocations = this.populatepickUpLocations.bind(this);
    this.populatereturnLocations = this.populatereturnLocations.bind(this);
    this.populatetransportEquipmentWeights = this.populatetransportEquipmentWeights.bind(this);
    this.populatetransportSeals = this.populatetransportSeals.bind(this);
    this.populatetransportEquipmentProviderPartyRoles = this.populatetransportEquipmentProviderPartyRoles.bind(this);
    this.populatetransportEquipmentTypeCodes = this.populatetransportEquipmentTypeCodes.bind(this);
    this.populateindividualAssetIdentifications = this.populateindividualAssetIdentifications.bind(this);
    this.populatereturnableAssetTypeIdentifications = this.populatereturnableAssetTypeIdentifications.bind(this);
    this.populateindividualReturnableAssetIdentifications = this.populateindividualReturnableAssetIdentifications.bind(this);
}  state = {
    data: { id: "", transportEquipmentWeight: "", transportEquipmentProviderPartyRole: "", pickUpLocation: "", returnLocation: "", transportSeal: "", dimension: "", transportEquipmentTypeCode: "", returnableAssetTypeIdentification: "", individualReturnableAssetIdentification: "", individualAssetIdentification: "", dimensionId: "", pickUpLocationId: "", returnLocationId: "", transportEquipmentWeightId: "", transportSealId: "", transportEquipmentProviderPartyRoleId: "", transportEquipmentTypeCodeId: "", individualAssetIdentificationId: "", returnableAssetTypeIdentificationId: "", individualReturnableAssetIdentificationId: "", },
    dimensions: [],
    pickUpLocations: [],
    returnLocations: [],
    transportEquipmentWeights: [],
    transportSeals: [],
    transportEquipmentProviderPartyRoles: [],
    transportEquipmentTypeCodes: [],
    individualAssetIdentifications: [],
    returnableAssetTypeIdentifications: [],
    individualReturnableAssetIdentifications: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    transportEquipmentWeight:  Joi.number()



      .label("transportEquipmentWeight"),
    transportEquipmentProviderPartyRole:  Joi.number()



      .label("transportEquipmentProviderPartyRole"),
    pickUpLocation:  Joi.number()



      .label("pickUpLocation"),
    returnLocation:  Joi.number()



      .label("returnLocation"),
    transportSeal:  Joi.number()



      .label("transportSeal"),
    dimension:  Joi.number()



      .label("dimension"),
    transportEquipmentTypeCode:  Joi.number()



      .label("transportEquipmentTypeCode"),
    returnableAssetTypeIdentification:  Joi.number()



      .label("returnableAssetTypeIdentification"),
    individualReturnableAssetIdentification:  Joi.number()



      .label("individualReturnableAssetIdentification"),
    individualAssetIdentification:  Joi.number()



      .label("individualAssetIdentification"),
    dimensionId:  Joi.string()
      .required()
      .label("dimensionId"),
    pickUpLocationId:  Joi.string()
      .required()
      .label("pickUpLocationId"),
    returnLocationId:  Joi.string()
      .required()
      .label("returnLocationId"),
    transportEquipmentWeightId:  Joi.string()
      .required()
      .label("transportEquipmentWeightId"),
    transportSealId:  Joi.string()
      .required()
      .label("transportSealId"),
    transportEquipmentProviderPartyRoleId:  Joi.string()
      .required()
      .label("transportEquipmentProviderPartyRoleId"),
    transportEquipmentTypeCodeId:  Joi.string()
      .required()
      .label("transportEquipmentTypeCodeId"),
    individualAssetIdentificationId:  Joi.string()
      .required()
      .label("individualAssetIdentificationId"),
    returnableAssetTypeIdentificationId:  Joi.string()
      .required()
      .label("returnableAssetTypeIdentificationId"),
    individualReturnableAssetIdentificationId:  Joi.string()
      .required()
      .label("individualReturnableAssetIdentificationId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const transportinstructiontransportequipmenttypeId = this.props.match.params.id;
      if(transportinstructiontransportequipmenttypeId!=="new"){
        const { data } = await getTransportinstructiontransportequipmenttype(transportinstructiontransportequipmenttypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatedimensions() {
    const { data: dimensions } = await getDimensiontypes();
    this.setState({ dimensions: dimensions });
  }

  async populatepickUpLocations() {
    const { data: pickUpLocations } = await getLogisticlocationtypes();
    this.setState({ pickUpLocations: pickUpLocations });
  }

  async populatereturnLocations() {
    const { data: returnLocations } = await getLogisticlocationtypes();
    this.setState({ returnLocations: returnLocations });
  }

  async populatetransportEquipmentWeights() {
    const { data: transportEquipmentWeights } = await getMeasurementtypes();
    this.setState({ transportEquipmentWeights: transportEquipmentWeights });
  }

  async populatetransportSeals() {
    const { data: transportSeals } = await getTransportsealtypes();
    this.setState({ transportSeals: transportSeals });
  }

  async populatetransportEquipmentProviderPartyRoles() {
    const { data: transportEquipmentProviderPartyRoles } = await getEnumerationlibrarys();
    this.setState({ transportEquipmentProviderPartyRoles: transportEquipmentProviderPartyRoles });
  }

  async populatetransportEquipmentTypeCodes() {
    const { data: transportEquipmentTypeCodes } = await getEnumerationlibrarys();
    this.setState({ transportEquipmentTypeCodes: transportEquipmentTypeCodes });
  }

  async populateindividualAssetIdentifications() {
    const { data: individualAssetIdentifications } = await getEnumerationlibrarys();
    this.setState({ individualAssetIdentifications: individualAssetIdentifications });
  }

  async populatereturnableAssetTypeIdentifications() {
    const { data: returnableAssetTypeIdentifications } = await getReturnableassetidentifications();
    this.setState({ returnableAssetTypeIdentifications: returnableAssetTypeIdentifications });
  }

  async populateindividualReturnableAssetIdentifications() {
    const { data: individualReturnableAssetIdentifications } = await getReturnableassetidentifications();
    this.setState({ individualReturnableAssetIdentifications: individualReturnableAssetIdentifications });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatedimensions();
    await this.populatepickUpLocations();
    await this.populatereturnLocations();
    await this.populatetransportEquipmentWeights();
    await this.populatetransportSeals();
    await this.populatetransportEquipmentProviderPartyRoles();
    await this.populatetransportEquipmentTypeCodes();
    await this.populateindividualAssetIdentifications();
    await this.populatereturnableAssetTypeIdentifications();
    await this.populateindividualReturnableAssetIdentifications();
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
    await saveTransportinstructiontransportequipmenttype(this.state.data);
    this.props.history.push("/transportinstructiontransportequipmenttypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportinstructiontransportequipmenttype Form</h1>
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
              <label htmlFor="transportEquipmentProviderPartyRole">Transport Equipment Provider Party Role</label>
              <input
                value={this.state.data["transportEquipmentProviderPartyRole"]}
                onChange={this.handleChange}
                name="transportEquipmentProviderPartyRole"
                id="transportEquipmentProviderPartyRole"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportEquipmentProviderPartyRole"] && <div className="alert alert-danger">{this.state.errors["transportEquipmentProviderPartyRole"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="pickUpLocation">Pick Up Location</label>
              <input
                value={this.state.data["pickUpLocation"]}
                onChange={this.handleChange}
                name="pickUpLocation"
                id="pickUpLocation"
                type="number"
                className="form-control"
              />
              {this.state.errors["pickUpLocation"] && <div className="alert alert-danger">{this.state.errors["pickUpLocation"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="returnLocation">Return Location</label>
              <input
                value={this.state.data["returnLocation"]}
                onChange={this.handleChange}
                name="returnLocation"
                id="returnLocation"
                type="number"
                className="form-control"
              />
              {this.state.errors["returnLocation"] && <div className="alert alert-danger">{this.state.errors["returnLocation"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportSeal">Transport Seal</label>
              <input
                value={this.state.data["transportSeal"]}
                onChange={this.handleChange}
                name="transportSeal"
                id="transportSeal"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportSeal"] && <div className="alert alert-danger">{this.state.errors["transportSeal"]}</div>}
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
              <label htmlFor="transportEquipmentTypeCode">Transport Equipment Type Code</label>
              <input
                value={this.state.data["transportEquipmentTypeCode"]}
                onChange={this.handleChange}
                name="transportEquipmentTypeCode"
                id="transportEquipmentTypeCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportEquipmentTypeCode"] && <div className="alert alert-danger">{this.state.errors["transportEquipmentTypeCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="returnableAssetTypeIdentification">Returnable Asset Type Identification</label>
              <input
                value={this.state.data["returnableAssetTypeIdentification"]}
                onChange={this.handleChange}
                name="returnableAssetTypeIdentification"
                id="returnableAssetTypeIdentification"
                type="number"
                className="form-control"
              />
              {this.state.errors["returnableAssetTypeIdentification"] && <div className="alert alert-danger">{this.state.errors["returnableAssetTypeIdentification"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="individualReturnableAssetIdentification">Individual Returnable Asset Identification</label>
              <input
                value={this.state.data["individualReturnableAssetIdentification"]}
                onChange={this.handleChange}
                name="individualReturnableAssetIdentification"
                id="individualReturnableAssetIdentification"
                type="number"
                className="form-control"
              />
              {this.state.errors["individualReturnableAssetIdentification"] && <div className="alert alert-danger">{this.state.errors["individualReturnableAssetIdentification"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="individualAssetIdentification">Individual Asset Identification</label>
              <input
                value={this.state.data["individualAssetIdentification"]}
                onChange={this.handleChange}
                name="individualAssetIdentification"
                id="individualAssetIdentification"
                type="number"
                className="form-control"
              />
              {this.state.errors["individualAssetIdentification"] && <div className="alert alert-danger">{this.state.errors["individualAssetIdentification"]}</div>}
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
              <label htmlFor="pickUpLocationId">          Pick Up Location <a target="_blank" href="/Logisticlocationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatepickUpLocations}> Refresh</a> </label>
              <select
                value={this.state.data["pickUpLocationId"]}
                onChange={this.handleChange}
                name="pickUpLocationId"
                id="pickUpLocationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Logisticlocationtype
                  </option>
                  {this.state.pickUpLocations.map(Logisticlocationtype => (
                    <option key={Logisticlocationtype._id} value={Logisticlocationtype._id}>
                      {Logisticlocationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["pickUpLocationId"] && <div className="alert alert-danger">{this.state.errors["pickUpLocationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="returnLocationId">          Return Location <a target="_blank" href="/Logisticlocationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatereturnLocations}> Refresh</a> </label>
              <select
                value={this.state.data["returnLocationId"]}
                onChange={this.handleChange}
                name="returnLocationId"
                id="returnLocationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Logisticlocationtype
                  </option>
                  {this.state.returnLocations.map(Logisticlocationtype => (
                    <option key={Logisticlocationtype._id} value={Logisticlocationtype._id}>
                      {Logisticlocationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["returnLocationId"] && <div className="alert alert-danger">{this.state.errors["returnLocationId"]}</div>}
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
              <label htmlFor="transportSealId">          Transport Seal <a target="_blank" href="/Transportsealtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportSeals}> Refresh</a> </label>
              <select
                value={this.state.data["transportSealId"]}
                onChange={this.handleChange}
                name="transportSealId"
                id="transportSealId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Selectsealtype
                  </option>
                  {this.state.transportSeals.map(Transportsealtype => (
                    <option key={Transportsealtype._id} value={Transportsealtype._id}>
                      {Transportsealtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportSealId"] && <div className="alert alert-danger">{this.state.errors["transportSealId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportEquipmentProviderPartyRoleId">          Transport Equipment Provider Party Role <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportEquipmentProviderPartyRoles}> Refresh</a> </label>
              <select
                value={this.state.data["transportEquipmentProviderPartyRoleId"]}
                onChange={this.handleChange}
                name="transportEquipmentProviderPartyRoleId"
                id="transportEquipmentProviderPartyRoleId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.transportEquipmentProviderPartyRoles.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportEquipmentProviderPartyRoleId"] && <div className="alert alert-danger">{this.state.errors["transportEquipmentProviderPartyRoleId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportEquipmentTypeCodeId">          Transport Equipment Type Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportEquipmentTypeCodes}> Refresh</a> </label>
              <select
                value={this.state.data["transportEquipmentTypeCodeId"]}
                onChange={this.handleChange}
                name="transportEquipmentTypeCodeId"
                id="transportEquipmentTypeCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.transportEquipmentTypeCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportEquipmentTypeCodeId"] && <div className="alert alert-danger">{this.state.errors["transportEquipmentTypeCodeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="individualAssetIdentificationId">          Individual Asset Identification <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateindividualAssetIdentifications}> Refresh</a> </label>
              <select
                value={this.state.data["individualAssetIdentificationId"]}
                onChange={this.handleChange}
                name="individualAssetIdentificationId"
                id="individualAssetIdentificationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.individualAssetIdentifications.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["individualAssetIdentificationId"] && <div className="alert alert-danger">{this.state.errors["individualAssetIdentificationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="returnableAssetTypeIdentificationId">          Returnable Asset Type Identification <a target="_blank" href="/Returnableassetidentifications/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatereturnableAssetTypeIdentifications}> Refresh</a> </label>
              <select
                value={this.state.data["returnableAssetTypeIdentificationId"]}
                onChange={this.handleChange}
                name="returnableAssetTypeIdentificationId"
                id="returnableAssetTypeIdentificationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Returnableassetidentification
                  </option>
                  {this.state.returnableAssetTypeIdentifications.map(Returnableassetidentification => (
                    <option key={Returnableassetidentification._id} value={Returnableassetidentification._id}>
                      {Returnableassetidentification.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["returnableAssetTypeIdentificationId"] && <div className="alert alert-danger">{this.state.errors["returnableAssetTypeIdentificationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="individualReturnableAssetIdentificationId">          Individual Returnable Asset Identification <a target="_blank" href="/Returnableassetidentifications/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateindividualReturnableAssetIdentifications}> Refresh</a> </label>
              <select
                value={this.state.data["individualReturnableAssetIdentificationId"]}
                onChange={this.handleChange}
                name="individualReturnableAssetIdentificationId"
                id="individualReturnableAssetIdentificationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Returnableassetidentification
                  </option>
                  {this.state.individualReturnableAssetIdentifications.map(Returnableassetidentification => (
                    <option key={Returnableassetidentification._id} value={Returnableassetidentification._id}>
                      {Returnableassetidentification.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["individualReturnableAssetIdentificationId"] && <div className="alert alert-danger">{this.state.errors["individualReturnableAssetIdentificationId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createTransportinstructiontransportequipmenttype;