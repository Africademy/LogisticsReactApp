import React, { Component } from "react";
import Joi from "joi-browser";
import { saveShipmentidentificationtype, getShipmentidentificationtype } from "../../services/shipmentidentificationtypeService";
import { getAdditionalshipmentidentificationtypes } from "../../services/additionalshipmentidentificationtypeService";

class createShipmentidentificationtype extends Component{

 constructor(props){
super(props);
    this.populateadditionalShipmentIdentifications = this.populateadditionalShipmentIdentifications.bind(this);
}  state = {
    data: { id: "", gsin: "", additionalShipmentIdentification: "", additionalShipmentIdentificationId: "", },
    additionalShipmentIdentifications: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    gsin:  Joi.string()
      .allow('').allow(null)



      .label("gsin"),
    additionalShipmentIdentification:  Joi.number()



      .label("additionalShipmentIdentification"),
    additionalShipmentIdentificationId:  Joi.string()
      .required()
      .label("additionalShipmentIdentificationId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const shipmentidentificationtypeId = this.props.match.params.id;
      if(shipmentidentificationtypeId!=="new"){
        const { data } = await getShipmentidentificationtype(shipmentidentificationtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateadditionalShipmentIdentifications() {
    const { data: additionalShipmentIdentifications } = await getAdditionalshipmentidentificationtypes();
    this.setState({ additionalShipmentIdentifications: additionalShipmentIdentifications });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateadditionalShipmentIdentifications();
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
    await saveShipmentidentificationtype(this.state.data);
    this.props.history.push("/shipmentidentificationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Shipmentidentificationtype Form</h1>
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
              <label htmlFor="gsin">Gsin</label>
              <input
                value={this.state.data["gsin"]}
                onChange={this.handleChange}
                name="gsin"
                id="gsin"
                type="text"
                className="form-control"
              />
              {this.state.errors["gsin"] && <div className="alert alert-danger">{this.state.errors["gsin"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalShipmentIdentification">Additional Shipment Identification</label>
              <input
                value={this.state.data["additionalShipmentIdentification"]}
                onChange={this.handleChange}
                name="additionalShipmentIdentification"
                id="additionalShipmentIdentification"
                type="number"
                className="form-control"
              />
              {this.state.errors["additionalShipmentIdentification"] && <div className="alert alert-danger">{this.state.errors["additionalShipmentIdentification"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalShipmentIdentificationId">          Additional Shipment Identification <a target="_blank" href="/Additionalshipmentidentificationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateadditionalShipmentIdentifications}> Refresh</a> </label>
              <select
                value={this.state.data["additionalShipmentIdentificationId"]}
                onChange={this.handleChange}
                name="additionalShipmentIdentificationId"
                id="additionalShipmentIdentificationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Additionalshipmentidentificationtype
                  </option>
                  {this.state.additionalShipmentIdentifications.map(Additionalshipmentidentificationtype => (
                    <option key={Additionalshipmentidentificationtype._id} value={Additionalshipmentidentificationtype._id}>
                      {Additionalshipmentidentificationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["additionalShipmentIdentificationId"] && <div className="alert alert-danger">{this.state.errors["additionalShipmentIdentificationId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createShipmentidentificationtype;