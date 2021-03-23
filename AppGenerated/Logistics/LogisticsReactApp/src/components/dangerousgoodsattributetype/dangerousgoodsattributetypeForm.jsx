import React, { Component } from "react";
import Joi from "joi-browser";
import { saveDangerousgoodsattributetype, getDangerousgoodsattributetype } from "../../services/dangerousgoodsattributetypeService";
import { getMeasurementtypes } from "../../services/measurementtypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createDangerousgoodsattributetype extends Component{

 constructor(props){
super(props);
    this.populatedangerousGoodsAttributeMeasurements = this.populatedangerousGoodsAttributeMeasurements.bind(this);
    this.populatedangerousGoodsAttributeTypeCodes = this.populatedangerousGoodsAttributeTypeCodes.bind(this);
}  state = {
    data: { id: "", dangerousGoodsAttributeTypeCode: "", dangerousGoodsAttributeText: "", dangerousGoodsAttributeMeasurement: "", dangerousGoodsAttributeIndicator: "", dangerousGoodsAttributeDateTime: "", dangerousGoodsAttributeMeasurementId: "", dangerousGoodsAttributeTypeCodeId: "", },
    dangerousGoodsAttributeMeasurements: [],
    dangerousGoodsAttributeTypeCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    dangerousGoodsAttributeTypeCode:  Joi.number()



      .label("dangerousGoodsAttributeTypeCode"),
    dangerousGoodsAttributeText:  Joi.string()
      .allow('').allow(null)



      .label("dangerousGoodsAttributeText"),
    dangerousGoodsAttributeMeasurement:  Joi.number()



      .label("dangerousGoodsAttributeMeasurement"),
    dangerousGoodsAttributeIndicator:  Joi.number()



      .label("dangerousGoodsAttributeIndicator"),
    dangerousGoodsAttributeDateTime:  Joi.date()
      .allow('').allow(null)



      .label("dangerousGoodsAttributeDateTime"),
    dangerousGoodsAttributeMeasurementId:  Joi.string()
      .required()
      .label("dangerousGoodsAttributeMeasurementId"),
    dangerousGoodsAttributeTypeCodeId:  Joi.string()
      .required()
      .label("dangerousGoodsAttributeTypeCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const dangerousgoodsattributetypeId = this.props.match.params.id;
      if(dangerousgoodsattributetypeId!=="new"){
        const { data } = await getDangerousgoodsattributetype(dangerousgoodsattributetypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatedangerousGoodsAttributeMeasurements() {
    const { data: dangerousGoodsAttributeMeasurements } = await getMeasurementtypes();
    this.setState({ dangerousGoodsAttributeMeasurements: dangerousGoodsAttributeMeasurements });
  }

  async populatedangerousGoodsAttributeTypeCodes() {
    const { data: dangerousGoodsAttributeTypeCodes } = await getEnumerationlibrarys();
    this.setState({ dangerousGoodsAttributeTypeCodes: dangerousGoodsAttributeTypeCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatedangerousGoodsAttributeMeasurements();
    await this.populatedangerousGoodsAttributeTypeCodes();
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
    await saveDangerousgoodsattributetype(this.state.data);
    this.props.history.push("/dangerousgoodsattributetypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Dangerousgoodsattributetype Form</h1>
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
              <label htmlFor="dangerousGoodsAttributeTypeCode">Dangerous Goods Attribute Type Code</label>
              <input
                value={this.state.data["dangerousGoodsAttributeTypeCode"]}
                onChange={this.handleChange}
                name="dangerousGoodsAttributeTypeCode"
                id="dangerousGoodsAttributeTypeCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["dangerousGoodsAttributeTypeCode"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsAttributeTypeCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsAttributeText">Dangerous Goods Attribute Text</label>
              <input
                value={this.state.data["dangerousGoodsAttributeText"]}
                onChange={this.handleChange}
                name="dangerousGoodsAttributeText"
                id="dangerousGoodsAttributeText"
                type="text"
                className="form-control"
              />
              {this.state.errors["dangerousGoodsAttributeText"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsAttributeText"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsAttributeMeasurement">Dangerous Goods Attribute Measurement</label>
              <input
                value={this.state.data["dangerousGoodsAttributeMeasurement"]}
                onChange={this.handleChange}
                name="dangerousGoodsAttributeMeasurement"
                id="dangerousGoodsAttributeMeasurement"
                type="number"
                className="form-control"
              />
              {this.state.errors["dangerousGoodsAttributeMeasurement"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsAttributeMeasurement"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsAttributeIndicator">Dangerous Goods Attribute Indicator</label>
              <input
                value={this.state.data["dangerousGoodsAttributeIndicator"]}
                onChange={this.handleChange}
                name="dangerousGoodsAttributeIndicator"
                id="dangerousGoodsAttributeIndicator"
                type="number"
                className="form-control"
              />
              {this.state.errors["dangerousGoodsAttributeIndicator"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsAttributeIndicator"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsAttributeDateTime">Dangerous Goods Attribute Date Time</label>
              <input
                value={this.state.data["dangerousGoodsAttributeDateTime"].substring(0, 10)}
                onChange={this.handleChange}
                name="dangerousGoodsAttributeDateTime"
                id="dangerousGoodsAttributeDateTime"
                type="date"
                className="form-control"
              />
              {this.state.errors["dangerousGoodsAttributeDateTime"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsAttributeDateTime"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsAttributeMeasurementId">          Dangerous Goods Attribute Measurement <a target="_blank" href="/Measurementtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedangerousGoodsAttributeMeasurements}> Refresh</a> </label>
              <select
                value={this.state.data["dangerousGoodsAttributeMeasurementId"]}
                onChange={this.handleChange}
                name="dangerousGoodsAttributeMeasurementId"
                id="dangerousGoodsAttributeMeasurementId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Measurementtype
                  </option>
                  {this.state.dangerousGoodsAttributeMeasurements.map(Measurementtype => (
                    <option key={Measurementtype._id} value={Measurementtype._id}>
                      {Measurementtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dangerousGoodsAttributeMeasurementId"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsAttributeMeasurementId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsAttributeTypeCodeId">          Dangerous Goods Attribute Type Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedangerousGoodsAttributeTypeCodes}> Refresh</a> </label>
              <select
                value={this.state.data["dangerousGoodsAttributeTypeCodeId"]}
                onChange={this.handleChange}
                name="dangerousGoodsAttributeTypeCodeId"
                id="dangerousGoodsAttributeTypeCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.dangerousGoodsAttributeTypeCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dangerousGoodsAttributeTypeCodeId"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsAttributeTypeCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createDangerousgoodsattributetype;