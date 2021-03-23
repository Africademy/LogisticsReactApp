import React, { Component } from "react";
import Joi from "joi-browser";
import { saveConsignmentidentificationtype, getConsignmentidentificationtype } from "../../services/consignmentidentificationtypeService";
import { getAdditionalconsignmentidentificationtypes } from "../../services/additionalconsignmentidentificationtypeService";

class createConsignmentidentificationtype extends Component{

 constructor(props){
super(props);
    this.populateadditionalConsignmentIdentifications = this.populateadditionalConsignmentIdentifications.bind(this);
}  state = {
    data: { id: "", ginc: "", additionalConsignmentIdentification: "", additionalConsignmentIdentificationId: "", },
    additionalConsignmentIdentifications: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    ginc:  Joi.string()
      .allow('').allow(null)



      .label("ginc"),
    additionalConsignmentIdentification:  Joi.number()



      .label("additionalConsignmentIdentification"),
    additionalConsignmentIdentificationId:  Joi.string()
      .required()
      .label("additionalConsignmentIdentificationId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const consignmentidentificationtypeId = this.props.match.params.id;
      if(consignmentidentificationtypeId!=="new"){
        const { data } = await getConsignmentidentificationtype(consignmentidentificationtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateadditionalConsignmentIdentifications() {
    const { data: additionalConsignmentIdentifications } = await getAdditionalconsignmentidentificationtypes();
    this.setState({ additionalConsignmentIdentifications: additionalConsignmentIdentifications });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateadditionalConsignmentIdentifications();
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
    await saveConsignmentidentificationtype(this.state.data);
    this.props.history.push("/consignmentidentificationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Consignmentidentificationtype Form</h1>
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
              <label htmlFor="ginc">Ginc</label>
              <input
                value={this.state.data["ginc"]}
                onChange={this.handleChange}
                name="ginc"
                id="ginc"
                type="text"
                className="form-control"
              />
              {this.state.errors["ginc"] && <div className="alert alert-danger">{this.state.errors["ginc"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalConsignmentIdentification">Additional Consignment Identification</label>
              <input
                value={this.state.data["additionalConsignmentIdentification"]}
                onChange={this.handleChange}
                name="additionalConsignmentIdentification"
                id="additionalConsignmentIdentification"
                type="number"
                className="form-control"
              />
              {this.state.errors["additionalConsignmentIdentification"] && <div className="alert alert-danger">{this.state.errors["additionalConsignmentIdentification"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalConsignmentIdentificationId">          Additional Consignment Identification <a target="_blank" href="/Additionalconsignmentidentificationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateadditionalConsignmentIdentifications}> Refresh</a> </label>
              <select
                value={this.state.data["additionalConsignmentIdentificationId"]}
                onChange={this.handleChange}
                name="additionalConsignmentIdentificationId"
                id="additionalConsignmentIdentificationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Additionalconsignmentidentificationtype
                  </option>
                  {this.state.additionalConsignmentIdentifications.map(Additionalconsignmentidentificationtype => (
                    <option key={Additionalconsignmentidentificationtype._id} value={Additionalconsignmentidentificationtype._id}>
                      {Additionalconsignmentidentificationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["additionalConsignmentIdentificationId"] && <div className="alert alert-danger">{this.state.errors["additionalConsignmentIdentificationId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createConsignmentidentificationtype;