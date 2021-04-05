import React, { Component } from "react";
import Joi from "joi-browser";
import { saveDangerousgoodsregulationinformationtype, getDangerousgoodsregulationinformationtype } from "../../services/dangerousgoodsregulationinformationtypeService";
import { getDangerousgoodsattributetypes } from "../../services/dangerousgoodsattributetypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createDangerousgoodsregulationinformationtype extends Component{

 constructor(props){
super(props);
    this.populatedangerousGoodsAttributes = this.populatedangerousGoodsAttributes.bind(this);
    this.populatedangerousGoodsRegulationCodes = this.populatedangerousGoodsRegulationCodes.bind(this);
}  state = {
    data: { id: "", dangerousGoodsRegulationCode: "", dangerousGoodsRegulationName: "", dangerousGoodsHazardClass: "", dangerousGoodsPackingGroup: "", dangerousGoodsAttribute: "", dangerousGoodsAttributeId: "", dangerousGoodsRegulationCodeId: "", },
    dangerousGoodsAttributes: [],
    dangerousGoodsRegulationCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    dangerousGoodsRegulationCode:  Joi.number()



      .label("dangerousGoodsRegulationCode"),
    dangerousGoodsRegulationName:  Joi.string()
      .allow('').allow(null)



      .label("dangerousGoodsRegulationName"),
    dangerousGoodsHazardClass:  Joi.string()
      .allow('').allow(null)



      .label("dangerousGoodsHazardClass"),
    dangerousGoodsPackingGroup:  Joi.string()
      .allow('').allow(null)



      .label("dangerousGoodsPackingGroup"),
    dangerousGoodsAttribute:  Joi.number()



      .label("dangerousGoodsAttribute"),
    dangerousGoodsAttributeId:  Joi.string()
      .required()
      .label("dangerousGoodsAttributeId"),
    dangerousGoodsRegulationCodeId:  Joi.string()
      .required()
      .label("dangerousGoodsRegulationCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const dangerousgoodsregulationinformationtypeId = this.props.match.params.id;
      if(dangerousgoodsregulationinformationtypeId!=="new"){
        const { data } = await getDangerousgoodsregulationinformationtype(dangerousgoodsregulationinformationtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatedangerousGoodsAttributes() {
    const { data: dangerousGoodsAttributes } = await getDangerousgoodsattributetypes();
    this.setState({ dangerousGoodsAttributes: dangerousGoodsAttributes });
  }

  async populatedangerousGoodsRegulationCodes() {
    const { data: dangerousGoodsRegulationCodes } = await getEnumerationlibrarys();
    this.setState({ dangerousGoodsRegulationCodes: dangerousGoodsRegulationCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatedangerousGoodsAttributes();
    await this.populatedangerousGoodsRegulationCodes();
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
    await saveDangerousgoodsregulationinformationtype(this.state.data);
    this.props.history.push("/dangerousgoodsregulationinformationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Dangerousgoodsregulationinformationtype Form</h1>
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
              <label htmlFor="dangerousGoodsRegulationCode">Dangerous Goods Regulation Code</label>
              <input
                value={this.state.data["dangerousGoodsRegulationCode"]}
                onChange={this.handleChange}
                name="dangerousGoodsRegulationCode"
                id="dangerousGoodsRegulationCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["dangerousGoodsRegulationCode"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsRegulationCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsRegulationName">Dangerous Goods Regulation Name</label>
              <input
                value={this.state.data["dangerousGoodsRegulationName"]}
                onChange={this.handleChange}
                name="dangerousGoodsRegulationName"
                id="dangerousGoodsRegulationName"
                type="text"
                className="form-control"
              />
              {this.state.errors["dangerousGoodsRegulationName"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsRegulationName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsHazardClass">Dangerous Goods Hazard Class</label>
              <input
                value={this.state.data["dangerousGoodsHazardClass"]}
                onChange={this.handleChange}
                name="dangerousGoodsHazardClass"
                id="dangerousGoodsHazardClass"
                type="text"
                className="form-control"
              />
              {this.state.errors["dangerousGoodsHazardClass"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsHazardClass"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsPackingGroup">Dangerous Goods Packing Group</label>
              <input
                value={this.state.data["dangerousGoodsPackingGroup"]}
                onChange={this.handleChange}
                name="dangerousGoodsPackingGroup"
                id="dangerousGoodsPackingGroup"
                type="text"
                className="form-control"
              />
              {this.state.errors["dangerousGoodsPackingGroup"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsPackingGroup"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsAttribute">Dangerous Goods Attribute</label>
              <input
                value={this.state.data["dangerousGoodsAttribute"]}
                onChange={this.handleChange}
                name="dangerousGoodsAttribute"
                id="dangerousGoodsAttribute"
                type="number"
                className="form-control"
              />
              {this.state.errors["dangerousGoodsAttribute"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsAttribute"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsAttributeId">          Dangerous Goods Attribute <a target="_blank" href="/Dangerousgoodsattributetypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedangerousGoodsAttributes}> Refresh</a> </label>
              <select
                value={this.state.data["dangerousGoodsAttributeId"]}
                onChange={this.handleChange}
                name="dangerousGoodsAttributeId"
                id="dangerousGoodsAttributeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Dangerousgoodsattributetype
                  </option>
                  {this.state.dangerousGoodsAttributes.map(Dangerousgoodsattributetype => (
                    <option key={Dangerousgoodsattributetype._id} value={Dangerousgoodsattributetype._id}>
                      {Dangerousgoodsattributetype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dangerousGoodsAttributeId"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsAttributeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="dangerousGoodsRegulationCodeId">          Dangerous Goods Regulation Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedangerousGoodsRegulationCodes}> Refresh</a> </label>
              <select
                value={this.state.data["dangerousGoodsRegulationCodeId"]}
                onChange={this.handleChange}
                name="dangerousGoodsRegulationCodeId"
                id="dangerousGoodsRegulationCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.dangerousGoodsRegulationCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["dangerousGoodsRegulationCodeId"] && <div className="alert alert-danger">{this.state.errors["dangerousGoodsRegulationCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createDangerousgoodsregulationinformationtype;