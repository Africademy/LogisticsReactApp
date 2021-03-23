import React, { Component } from "react";
import Joi from "joi-browser";
import { saveLogisticunitidentificationtype, getLogisticunitidentificationtype } from "../../services/logisticunitidentificationtypeService";
import { getAdditionallogisticunitidentificationtypes } from "../../services/additionallogisticunitidentificationtypeService";

class createLogisticunitidentificationtype extends Component{

 constructor(props){
super(props);
    this.populateadditionalLogisticUnitIdentifications = this.populateadditionalLogisticUnitIdentifications.bind(this);
}  state = {
    data: { id: "", sscc: "", additionalLogisticUnitIdentification: "", additionalLogisticUnitIdentificationId: "", },
    additionalLogisticUnitIdentifications: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    sscc:  Joi.string()
      .allow('').allow(null)



      .label("sscc"),
    additionalLogisticUnitIdentification:  Joi.number()



      .label("additionalLogisticUnitIdentification"),
    additionalLogisticUnitIdentificationId:  Joi.string()
      .required()
      .label("additionalLogisticUnitIdentificationId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const logisticunitidentificationtypeId = this.props.match.params.id;
      if(logisticunitidentificationtypeId!=="new"){
        const { data } = await getLogisticunitidentificationtype(logisticunitidentificationtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateadditionalLogisticUnitIdentifications() {
    const { data: additionalLogisticUnitIdentifications } = await getAdditionallogisticunitidentificationtypes();
    this.setState({ additionalLogisticUnitIdentifications: additionalLogisticUnitIdentifications });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateadditionalLogisticUnitIdentifications();
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
    await saveLogisticunitidentificationtype(this.state.data);
    this.props.history.push("/logisticunitidentificationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Logisticunitidentificationtype Form</h1>
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
              <label htmlFor="sscc">Sscc</label>
              <input
                value={this.state.data["sscc"]}
                onChange={this.handleChange}
                name="sscc"
                id="sscc"
                type="text"
                className="form-control"
              />
              {this.state.errors["sscc"] && <div className="alert alert-danger">{this.state.errors["sscc"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalLogisticUnitIdentification">Additional Logistic Unit Identification</label>
              <input
                value={this.state.data["additionalLogisticUnitIdentification"]}
                onChange={this.handleChange}
                name="additionalLogisticUnitIdentification"
                id="additionalLogisticUnitIdentification"
                type="number"
                className="form-control"
              />
              {this.state.errors["additionalLogisticUnitIdentification"] && <div className="alert alert-danger">{this.state.errors["additionalLogisticUnitIdentification"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalLogisticUnitIdentificationId">          Additional Logistic Unit Identification <a target="_blank" href="/Additionallogisticunitidentificationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateadditionalLogisticUnitIdentifications}> Refresh</a> </label>
              <select
                value={this.state.data["additionalLogisticUnitIdentificationId"]}
                onChange={this.handleChange}
                name="additionalLogisticUnitIdentificationId"
                id="additionalLogisticUnitIdentificationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Additionallogisticunitidentificationtype
                  </option>
                  {this.state.additionalLogisticUnitIdentifications.map(Additionallogisticunitidentificationtype => (
                    <option key={Additionallogisticunitidentificationtype._id} value={Additionallogisticunitidentificationtype._id}>
                      {Additionallogisticunitidentificationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["additionalLogisticUnitIdentificationId"] && <div className="alert alert-danger">{this.state.errors["additionalLogisticUnitIdentificationId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createLogisticunitidentificationtype;