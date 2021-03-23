import React, { Component } from "react";
import Joi from "joi-browser";
import { savePackagetotaltype, getPackagetotaltype } from "../../services/packagetotaltypeService";
import { getMeasurementtypes } from "../../services/measurementtypeService";
import { getReturnablepackagingtypes } from "../../services/returnablepackagingtypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createPackagetotaltype extends Component{

 constructor(props){
super(props);
    this.populatetotalGrossVolumes = this.populatetotalGrossVolumes.bind(this);
    this.populatetotalGrossWeights = this.populatetotalGrossWeights.bind(this);
    this.populatereturnablePackagings = this.populatereturnablePackagings.bind(this);
    this.populatepackageTypeCodes = this.populatepackageTypeCodes.bind(this);
}  state = {
    data: { id: "", packageTypeCode: "", totalPackageQuantity: "", totalGrossVolume: "", totalGrossWeight: "", returnablePackaging: "", totalGrossVolumeId: "", totalGrossWeightId: "", returnablePackagingId: "", packageTypeCodeId: "", },
    totalGrossVolumes: [],
    totalGrossWeights: [],
    returnablePackagings: [],
    packageTypeCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    packageTypeCode:  Joi.number()



      .label("packageTypeCode"),
    totalPackageQuantity:  Joi.number()



      .label("totalPackageQuantity"),
    totalGrossVolume:  Joi.number()



      .label("totalGrossVolume"),
    totalGrossWeight:  Joi.number()



      .label("totalGrossWeight"),
    returnablePackaging:  Joi.number()



      .label("returnablePackaging"),
    totalGrossVolumeId:  Joi.string()
      .required()
      .label("totalGrossVolumeId"),
    totalGrossWeightId:  Joi.string()
      .required()
      .label("totalGrossWeightId"),
    returnablePackagingId:  Joi.string()
      .required()
      .label("returnablePackagingId"),
    packageTypeCodeId:  Joi.string()
      .required()
      .label("packageTypeCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const packagetotaltypeId = this.props.match.params.id;
      if(packagetotaltypeId!=="new"){
        const { data } = await getPackagetotaltype(packagetotaltypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatetotalGrossVolumes() {
    const { data: totalGrossVolumes } = await getMeasurementtypes();
    this.setState({ totalGrossVolumes: totalGrossVolumes });
  }

  async populatetotalGrossWeights() {
    const { data: totalGrossWeights } = await getMeasurementtypes();
    this.setState({ totalGrossWeights: totalGrossWeights });
  }

  async populatereturnablePackagings() {
    const { data: returnablePackagings } = await getReturnablepackagingtypes();
    this.setState({ returnablePackagings: returnablePackagings });
  }

  async populatepackageTypeCodes() {
    const { data: packageTypeCodes } = await getEnumerationlibrarys();
    this.setState({ packageTypeCodes: packageTypeCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatetotalGrossVolumes();
    await this.populatetotalGrossWeights();
    await this.populatereturnablePackagings();
    await this.populatepackageTypeCodes();
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
    await savePackagetotaltype(this.state.data);
    this.props.history.push("/packagetotaltypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Packagetotaltype Form</h1>
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
              <label htmlFor="packageTypeCode">Package Type Code</label>
              <input
                value={this.state.data["packageTypeCode"]}
                onChange={this.handleChange}
                name="packageTypeCode"
                id="packageTypeCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["packageTypeCode"] && <div className="alert alert-danger">{this.state.errors["packageTypeCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="totalPackageQuantity">Total Package Quantity</label>
              <input
                value={this.state.data["totalPackageQuantity"]}
                onChange={this.handleChange}
                name="totalPackageQuantity"
                id="totalPackageQuantity"
                type="number"
                className="form-control"
              />
              {this.state.errors["totalPackageQuantity"] && <div className="alert alert-danger">{this.state.errors["totalPackageQuantity"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="totalGrossVolume">Total Gross Volume</label>
              <input
                value={this.state.data["totalGrossVolume"]}
                onChange={this.handleChange}
                name="totalGrossVolume"
                id="totalGrossVolume"
                type="number"
                className="form-control"
              />
              {this.state.errors["totalGrossVolume"] && <div className="alert alert-danger">{this.state.errors["totalGrossVolume"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="totalGrossWeight">Total Gross Weight</label>
              <input
                value={this.state.data["totalGrossWeight"]}
                onChange={this.handleChange}
                name="totalGrossWeight"
                id="totalGrossWeight"
                type="number"
                className="form-control"
              />
              {this.state.errors["totalGrossWeight"] && <div className="alert alert-danger">{this.state.errors["totalGrossWeight"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="returnablePackaging">Returnable Packaging</label>
              <input
                value={this.state.data["returnablePackaging"]}
                onChange={this.handleChange}
                name="returnablePackaging"
                id="returnablePackaging"
                type="number"
                className="form-control"
              />
              {this.state.errors["returnablePackaging"] && <div className="alert alert-danger">{this.state.errors["returnablePackaging"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="totalGrossVolumeId">          Total Gross Volume <a target="_blank" href="/Measurementtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetotalGrossVolumes}> Refresh</a> </label>
              <select
                value={this.state.data["totalGrossVolumeId"]}
                onChange={this.handleChange}
                name="totalGrossVolumeId"
                id="totalGrossVolumeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Measurementtype
                  </option>
                  {this.state.totalGrossVolumes.map(Measurementtype => (
                    <option key={Measurementtype._id} value={Measurementtype._id}>
                      {Measurementtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["totalGrossVolumeId"] && <div className="alert alert-danger">{this.state.errors["totalGrossVolumeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="totalGrossWeightId">          Total Gross Weight <a target="_blank" href="/Measurementtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetotalGrossWeights}> Refresh</a> </label>
              <select
                value={this.state.data["totalGrossWeightId"]}
                onChange={this.handleChange}
                name="totalGrossWeightId"
                id="totalGrossWeightId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Measurementtype
                  </option>
                  {this.state.totalGrossWeights.map(Measurementtype => (
                    <option key={Measurementtype._id} value={Measurementtype._id}>
                      {Measurementtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["totalGrossWeightId"] && <div className="alert alert-danger">{this.state.errors["totalGrossWeightId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="returnablePackagingId">          Returnable Packaging <a target="_blank" href="/Returnablepackagingtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatereturnablePackagings}> Refresh</a> </label>
              <select
                value={this.state.data["returnablePackagingId"]}
                onChange={this.handleChange}
                name="returnablePackagingId"
                id="returnablePackagingId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Returnablepackagingtype
                  </option>
                  {this.state.returnablePackagings.map(Returnablepackagingtype => (
                    <option key={Returnablepackagingtype._id} value={Returnablepackagingtype._id}>
                      {Returnablepackagingtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["returnablePackagingId"] && <div className="alert alert-danger">{this.state.errors["returnablePackagingId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="packageTypeCodeId">          Package Type Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatepackageTypeCodes}> Refresh</a> </label>
              <select
                value={this.state.data["packageTypeCodeId"]}
                onChange={this.handleChange}
                name="packageTypeCodeId"
                id="packageTypeCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.packageTypeCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["packageTypeCodeId"] && <div className="alert alert-danger">{this.state.errors["packageTypeCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createPackagetotaltype;