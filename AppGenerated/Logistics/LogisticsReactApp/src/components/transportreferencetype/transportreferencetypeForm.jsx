import React, { Component } from "react";
import Joi from "joi-browser";
import { saveTransportreferencetype, getTransportreferencetype } from "../../services/transportreferencetypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createTransportreferencetype extends Component{

 constructor(props){
super(props);
    this.populatetransportReferenceTypeCodes = this.populatetransportReferenceTypeCodes.bind(this);
}  state = {
    data: { id: "", creationDateTime: "", revisionNumber: "", lineItemNumber: "", transportReferenceTypeCode: "", transportReferenceTypeCodeId: "", },
    transportReferenceTypeCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    creationDateTime:  Joi.date()
      .allow('').allow(null)



      .label("creationDateTime"),
    revisionNumber:  Joi.number()



      .label("revisionNumber"),
    lineItemNumber:  Joi.number()



      .label("lineItemNumber"),
    transportReferenceTypeCode:  Joi.number()



      .label("transportReferenceTypeCode"),
    transportReferenceTypeCodeId:  Joi.string()
      .required()
      .label("transportReferenceTypeCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const transportreferencetypeId = this.props.match.params.id;
      if(transportreferencetypeId!=="new"){
        const { data } = await getTransportreferencetype(transportreferencetypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatetransportReferenceTypeCodes() {
    const { data: transportReferenceTypeCodes } = await getEnumerationlibrarys();
    this.setState({ transportReferenceTypeCodes: transportReferenceTypeCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatetransportReferenceTypeCodes();
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
    await saveTransportreferencetype(this.state.data);
    this.props.history.push("/transportreferencetypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportreferencetype Form</h1>
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
              <label htmlFor="creationDateTime">Creation Date Time</label>
              <input
                value={this.state.data["creationDateTime"].substring(0, 10)}
                onChange={this.handleChange}
                name="creationDateTime"
                id="creationDateTime"
                type="date"
                className="form-control"
              />
              {this.state.errors["creationDateTime"] && <div className="alert alert-danger">{this.state.errors["creationDateTime"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="revisionNumber">Revision Number</label>
              <input
                value={this.state.data["revisionNumber"]}
                onChange={this.handleChange}
                name="revisionNumber"
                id="revisionNumber"
                type="number"
                className="form-control"
              />
              {this.state.errors["revisionNumber"] && <div className="alert alert-danger">{this.state.errors["revisionNumber"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="lineItemNumber">Line Item Number</label>
              <input
                value={this.state.data["lineItemNumber"]}
                onChange={this.handleChange}
                name="lineItemNumber"
                id="lineItemNumber"
                type="number"
                className="form-control"
              />
              {this.state.errors["lineItemNumber"] && <div className="alert alert-danger">{this.state.errors["lineItemNumber"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportReferenceTypeCode">Transport Reference Type Code</label>
              <input
                value={this.state.data["transportReferenceTypeCode"]}
                onChange={this.handleChange}
                name="transportReferenceTypeCode"
                id="transportReferenceTypeCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportReferenceTypeCode"] && <div className="alert alert-danger">{this.state.errors["transportReferenceTypeCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportReferenceTypeCodeId">          Transport Reference Type Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportReferenceTypeCodes}> Refresh</a> </label>
              <select
                value={this.state.data["transportReferenceTypeCodeId"]}
                onChange={this.handleChange}
                name="transportReferenceTypeCodeId"
                id="transportReferenceTypeCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.transportReferenceTypeCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportReferenceTypeCodeId"] && <div className="alert alert-danger">{this.state.errors["transportReferenceTypeCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createTransportreferencetype;