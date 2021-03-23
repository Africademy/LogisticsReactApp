import React, { Component } from "react";
import Joi from "joi-browser";
import { saveCommunicationchanneltype, getCommunicationchanneltype } from "../../services/communicationchanneltypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createCommunicationchanneltype extends Component{

 constructor(props){
super(props);
    this.populatecommunicationChannelCodes = this.populatecommunicationChannelCodes.bind(this);
}  state = {
    data: { id: "", communicationChannelCode: "", communicationValue: "", communicationChannelName: "", communicationChannelCodeId: "", },
    communicationChannelCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    communicationChannelCode:  Joi.number()



      .label("communicationChannelCode"),
    communicationValue:  Joi.string()
      .allow('').allow(null)



      .label("communicationValue"),
    communicationChannelName:  Joi.string()
      .allow('').allow(null)



      .label("communicationChannelName"),
    communicationChannelCodeId:  Joi.string()
      .required()
      .label("communicationChannelCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const communicationchanneltypeId = this.props.match.params.id;
      if(communicationchanneltypeId!=="new"){
        const { data } = await getCommunicationchanneltype(communicationchanneltypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatecommunicationChannelCodes() {
    const { data: communicationChannelCodes } = await getEnumerationlibrarys();
    this.setState({ communicationChannelCodes: communicationChannelCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatecommunicationChannelCodes();
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
    await saveCommunicationchanneltype(this.state.data);
    this.props.history.push("/communicationchanneltypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Communicationchanneltype Form</h1>
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
              <label htmlFor="communicationChannelCode">Communication Channel Code</label>
              <input
                value={this.state.data["communicationChannelCode"]}
                onChange={this.handleChange}
                name="communicationChannelCode"
                id="communicationChannelCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["communicationChannelCode"] && <div className="alert alert-danger">{this.state.errors["communicationChannelCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="communicationValue">Communication Value</label>
              <input
                value={this.state.data["communicationValue"]}
                onChange={this.handleChange}
                name="communicationValue"
                id="communicationValue"
                type="text"
                className="form-control"
              />
              {this.state.errors["communicationValue"] && <div className="alert alert-danger">{this.state.errors["communicationValue"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="communicationChannelName">Communication Channel Name</label>
              <input
                value={this.state.data["communicationChannelName"]}
                onChange={this.handleChange}
                name="communicationChannelName"
                id="communicationChannelName"
                type="text"
                className="form-control"
              />
              {this.state.errors["communicationChannelName"] && <div className="alert alert-danger">{this.state.errors["communicationChannelName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="communicationChannelCodeId">          Communication Channel Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatecommunicationChannelCodes}> Refresh</a> </label>
              <select
                value={this.state.data["communicationChannelCodeId"]}
                onChange={this.handleChange}
                name="communicationChannelCodeId"
                id="communicationChannelCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.communicationChannelCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["communicationChannelCodeId"] && <div className="alert alert-danger">{this.state.errors["communicationChannelCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createCommunicationchanneltype;