import React, { Component } from "react";
import Joi from "joi-browser";
import { saveAfterhourscommunicationchannel, getAfterhourscommunicationchannel } from "../../services/afterhourscommunicationchannelService";

class createAfterhourscommunicationchannel extends Component{

 constructor(props){
super(props);
}  state = {
    data: { communicationValue: "", communicationChannelName: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    communicationValue:  Joi.string()
      .required()


      .label("communicationValue"),
    communicationChannelName:  Joi.string()
      .allow('').allow(null)



      .label("communicationChannelName"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const afterhourscommunicationchannelId = this.props.match.params.id;
      if(afterhourscommunicationchannelId!=="new"){
        const { data } = await getAfterhourscommunicationchannel(afterhourscommunicationchannelId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async componentDidMount() {
    await this.populateForm();
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
    await saveAfterhourscommunicationchannel(this.state.data);
    this.props.history.push("/afterhourscommunicationchannels");
  };

  render() {
    return (
      <div className="content">
        <h1>Afterhourscommunicationchannel Form</h1>
        <form onSubmit={this.handleSubmit}>

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

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createAfterhourscommunicationchannel;