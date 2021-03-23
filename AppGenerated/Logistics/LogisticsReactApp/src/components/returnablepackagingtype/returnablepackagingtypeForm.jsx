import React, { Component } from "react";
import Joi from "joi-browser";
import { saveReturnablepackagingtype, getReturnablepackagingtype } from "../../services/returnablepackagingtypeService";
import { getIdentifiertypes } from "../../services/identifiertypeService";
import { getReturnableassetidentifications } from "../../services/returnableassetidentificationService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createReturnablepackagingtype extends Component{

 constructor(props){
super(props);
    this.populatecurrentHolderRegistrations = this.populatecurrentHolderRegistrations.bind(this);
    this.populatenewHolderRegistrations = this.populatenewHolderRegistrations.bind(this);
    this.populatereturnableAssetIdentifications = this.populatereturnableAssetIdentifications.bind(this);
    this.populateindividualReturnableAssetIdentifications = this.populateindividualReturnableAssetIdentifications.bind(this);
    this.populatepackagingConditionCodes = this.populatepackagingConditionCodes.bind(this);
}  state = {
    data: { id: "", packagingQuantity: "", currentHolderRegistration: "", newHolderRegistration: "", packagingConditionCode: "", returnableAssetIdentification: "", individualReturnableAssetIdentification: "", currentHolderRegistrationId: "", newHolderRegistrationId: "", returnableAssetIdentificationId: "", individualReturnableAssetIdentificationId: "", packagingConditionCodeId: "", },
    currentHolderRegistrations: [],
    newHolderRegistrations: [],
    returnableAssetIdentifications: [],
    individualReturnableAssetIdentifications: [],
    packagingConditionCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    packagingQuantity:  Joi.number()



      .label("packagingQuantity"),
    currentHolderRegistration:  Joi.number()



      .label("currentHolderRegistration"),
    newHolderRegistration:  Joi.number()



      .label("newHolderRegistration"),
    packagingConditionCode:  Joi.number()



      .label("packagingConditionCode"),
    returnableAssetIdentification:  Joi.number()



      .label("returnableAssetIdentification"),
    individualReturnableAssetIdentification:  Joi.number()



      .label("individualReturnableAssetIdentification"),
    currentHolderRegistrationId:  Joi.string()
      .required()
      .label("currentHolderRegistrationId"),
    newHolderRegistrationId:  Joi.string()
      .required()
      .label("newHolderRegistrationId"),
    returnableAssetIdentificationId:  Joi.string()
      .required()
      .label("returnableAssetIdentificationId"),
    individualReturnableAssetIdentificationId:  Joi.string()
      .required()
      .label("individualReturnableAssetIdentificationId"),
    packagingConditionCodeId:  Joi.string()
      .required()
      .label("packagingConditionCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const returnablepackagingtypeId = this.props.match.params.id;
      if(returnablepackagingtypeId!=="new"){
        const { data } = await getReturnablepackagingtype(returnablepackagingtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatecurrentHolderRegistrations() {
    const { data: currentHolderRegistrations } = await getIdentifiertypes();
    this.setState({ currentHolderRegistrations: currentHolderRegistrations });
  }

  async populatenewHolderRegistrations() {
    const { data: newHolderRegistrations } = await getIdentifiertypes();
    this.setState({ newHolderRegistrations: newHolderRegistrations });
  }

  async populatereturnableAssetIdentifications() {
    const { data: returnableAssetIdentifications } = await getReturnableassetidentifications();
    this.setState({ returnableAssetIdentifications: returnableAssetIdentifications });
  }

  async populateindividualReturnableAssetIdentifications() {
    const { data: individualReturnableAssetIdentifications } = await getReturnableassetidentifications();
    this.setState({ individualReturnableAssetIdentifications: individualReturnableAssetIdentifications });
  }

  async populatepackagingConditionCodes() {
    const { data: packagingConditionCodes } = await getEnumerationlibrarys();
    this.setState({ packagingConditionCodes: packagingConditionCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatecurrentHolderRegistrations();
    await this.populatenewHolderRegistrations();
    await this.populatereturnableAssetIdentifications();
    await this.populateindividualReturnableAssetIdentifications();
    await this.populatepackagingConditionCodes();
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
    await saveReturnablepackagingtype(this.state.data);
    this.props.history.push("/returnablepackagingtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Returnablepackagingtype Form</h1>
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
              <label htmlFor="packagingQuantity">Packaging Quantity</label>
              <input
                value={this.state.data["packagingQuantity"]}
                onChange={this.handleChange}
                name="packagingQuantity"
                id="packagingQuantity"
                type="number"
                className="form-control"
              />
              {this.state.errors["packagingQuantity"] && <div className="alert alert-danger">{this.state.errors["packagingQuantity"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="currentHolderRegistration">Current Holder Registration</label>
              <input
                value={this.state.data["currentHolderRegistration"]}
                onChange={this.handleChange}
                name="currentHolderRegistration"
                id="currentHolderRegistration"
                type="number"
                className="form-control"
              />
              {this.state.errors["currentHolderRegistration"] && <div className="alert alert-danger">{this.state.errors["currentHolderRegistration"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="newHolderRegistration">New Holder Registration</label>
              <input
                value={this.state.data["newHolderRegistration"]}
                onChange={this.handleChange}
                name="newHolderRegistration"
                id="newHolderRegistration"
                type="number"
                className="form-control"
              />
              {this.state.errors["newHolderRegistration"] && <div className="alert alert-danger">{this.state.errors["newHolderRegistration"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="packagingConditionCode">Packaging Condition Code</label>
              <input
                value={this.state.data["packagingConditionCode"]}
                onChange={this.handleChange}
                name="packagingConditionCode"
                id="packagingConditionCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["packagingConditionCode"] && <div className="alert alert-danger">{this.state.errors["packagingConditionCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="returnableAssetIdentification">Returnable Asset Identification</label>
              <input
                value={this.state.data["returnableAssetIdentification"]}
                onChange={this.handleChange}
                name="returnableAssetIdentification"
                id="returnableAssetIdentification"
                type="number"
                className="form-control"
              />
              {this.state.errors["returnableAssetIdentification"] && <div className="alert alert-danger">{this.state.errors["returnableAssetIdentification"]}</div>}
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
              <label htmlFor="currentHolderRegistrationId">          Current Holder Registration <a target="_blank" href="/Identifiertypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatecurrentHolderRegistrations}> Refresh</a> </label>
              <select
                value={this.state.data["currentHolderRegistrationId"]}
                onChange={this.handleChange}
                name="currentHolderRegistrationId"
                id="currentHolderRegistrationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Identifiertype
                  </option>
                  {this.state.currentHolderRegistrations.map(Identifiertype => (
                    <option key={Identifiertype._id} value={Identifiertype._id}>
                      {Identifiertype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["currentHolderRegistrationId"] && <div className="alert alert-danger">{this.state.errors["currentHolderRegistrationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="newHolderRegistrationId">          New Holder Registration <a target="_blank" href="/Identifiertypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatenewHolderRegistrations}> Refresh</a> </label>
              <select
                value={this.state.data["newHolderRegistrationId"]}
                onChange={this.handleChange}
                name="newHolderRegistrationId"
                id="newHolderRegistrationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Identifiertype
                  </option>
                  {this.state.newHolderRegistrations.map(Identifiertype => (
                    <option key={Identifiertype._id} value={Identifiertype._id}>
                      {Identifiertype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["newHolderRegistrationId"] && <div className="alert alert-danger">{this.state.errors["newHolderRegistrationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="returnableAssetIdentificationId">          Returnable Asset Identification <a target="_blank" href="/Returnableassetidentifications/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatereturnableAssetIdentifications}> Refresh</a> </label>
              <select
                value={this.state.data["returnableAssetIdentificationId"]}
                onChange={this.handleChange}
                name="returnableAssetIdentificationId"
                id="returnableAssetIdentificationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Returnableassetidentification
                  </option>
                  {this.state.returnableAssetIdentifications.map(Returnableassetidentification => (
                    <option key={Returnableassetidentification._id} value={Returnableassetidentification._id}>
                      {Returnableassetidentification.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["returnableAssetIdentificationId"] && <div className="alert alert-danger">{this.state.errors["returnableAssetIdentificationId"]}</div>}
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

          <div className="form-group">
              <label htmlFor="packagingConditionCodeId">          Packaging Condition Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatepackagingConditionCodes}> Refresh</a> </label>
              <select
                value={this.state.data["packagingConditionCodeId"]}
                onChange={this.handleChange}
                name="packagingConditionCodeId"
                id="packagingConditionCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.packagingConditionCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["packagingConditionCodeId"] && <div className="alert alert-danger">{this.state.errors["packagingConditionCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createReturnablepackagingtype;