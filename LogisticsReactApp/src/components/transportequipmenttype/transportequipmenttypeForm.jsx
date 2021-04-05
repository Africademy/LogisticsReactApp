import React, { Component } from "react";
import Joi from "joi-browser";
import { saveTransportequipmenttype, getTransportequipmenttype } from "../../services/transportequipmenttypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";
import { getIndividualassetidentifications } from "../../services/individualassetidentificationService";
import { getReturnableassetidentifications } from "../../services/returnableassetidentificationService";

class createTransportequipmenttype extends Component{

 constructor(props){
super(props);
    this.populatetransportEquipmentTypeCodes = this.populatetransportEquipmentTypeCodes.bind(this);
    this.populateindividualAssetIdentifications = this.populateindividualAssetIdentifications.bind(this);
    this.populatereturnableAssetTypeIdentifications = this.populatereturnableAssetTypeIdentifications.bind(this);
    this.populateindividualReturnableAssetIdentifications = this.populateindividualReturnableAssetIdentifications.bind(this);
}  state = {
    data: { id: "", transportEquipmentTypeCode: "", returnableAssetTypeIdentification: "", individualReturnableAssetIdentification: "", individualAssetIdentification: "", transportEquipmentTypeCodeId: "", individualAssetIdentificationId: "", returnableAssetTypeIdentificationId: "", individualReturnableAssetIdentificationId: "", },
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
    transportEquipmentTypeCode:  Joi.number()



      .label("transportEquipmentTypeCode"),
    returnableAssetTypeIdentification:  Joi.number()



      .label("returnableAssetTypeIdentification"),
    individualReturnableAssetIdentification:  Joi.number()



      .label("individualReturnableAssetIdentification"),
    individualAssetIdentification:  Joi.number()



      .label("individualAssetIdentification"),
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
      const transportequipmenttypeId = this.props.match.params.id;
      if(transportequipmenttypeId!=="new"){
        const { data } = await getTransportequipmenttype(transportequipmenttypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatetransportEquipmentTypeCodes() {
    const { data: transportEquipmentTypeCodes } = await getEnumerationlibrarys();
    this.setState({ transportEquipmentTypeCodes: transportEquipmentTypeCodes });
  }

  async populateindividualAssetIdentifications() {
    const { data: individualAssetIdentifications } = await getIndividualassetidentifications();
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
    await saveTransportequipmenttype(this.state.data);
    this.props.history.push("/transportequipmenttypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportequipmenttype Form</h1>
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
              <label htmlFor="individualAssetIdentificationId">          Individual Asset Identification <a target="_blank" href="/Individualassetidentifications/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateindividualAssetIdentifications}> Refresh</a> </label>
              <select
                value={this.state.data["individualAssetIdentificationId"]}
                onChange={this.handleChange}
                name="individualAssetIdentificationId"
                id="individualAssetIdentificationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Individualassetidentification
                  </option>
                  {this.state.individualAssetIdentifications.map(Individualassetidentification => (
                    <option key={Individualassetidentification._id} value={Individualassetidentification._id}>
                      {Individualassetidentification.id}
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

export default createTransportequipmenttype;