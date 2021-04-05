import React, { Component } from "react";
import Joi from "joi-browser";
import { saveTemperaturerangetype, getTemperaturerangetype } from "../../services/temperaturerangetypeService";
import { getTimemeasurementtypes } from "../../services/timemeasurementtypeService";

class createTemperaturerangetype extends Component{

 constructor(props){
super(props);
    this.populateminimumTemperatures = this.populateminimumTemperatures.bind(this);
    this.populatemaximumTemperatures = this.populatemaximumTemperatures.bind(this);
}  state = {
    data: { id: "", maximumTemperature: "", minimumTemperature: "", minimumTemperatureId: "", maximumTemperatureId: "", },
    minimumTemperatures: [],
    maximumTemperatures: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    maximumTemperature:  Joi.number()



      .label("maximumTemperature"),
    minimumTemperature:  Joi.number()



      .label("minimumTemperature"),
    minimumTemperatureId:  Joi.string()
      .required()
      .label("minimumTemperatureId"),
    maximumTemperatureId:  Joi.string()
      .required()
      .label("maximumTemperatureId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const temperaturerangetypeId = this.props.match.params.id;
      if(temperaturerangetypeId!=="new"){
        const { data } = await getTemperaturerangetype(temperaturerangetypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateminimumTemperatures() {
    const { data: minimumTemperatures } = await getTimemeasurementtypes();
    this.setState({ minimumTemperatures: minimumTemperatures });
  }

  async populatemaximumTemperatures() {
    const { data: maximumTemperatures } = await getTimemeasurementtypes();
    this.setState({ maximumTemperatures: maximumTemperatures });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateminimumTemperatures();
    await this.populatemaximumTemperatures();
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
    await saveTemperaturerangetype(this.state.data);
    this.props.history.push("/temperaturerangetypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Temperaturerangetype Form</h1>
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
              <label htmlFor="maximumTemperature">Maximum Temperature</label>
              <input
                value={this.state.data["maximumTemperature"]}
                onChange={this.handleChange}
                name="maximumTemperature"
                id="maximumTemperature"
                type="number"
                className="form-control"
              />
              {this.state.errors["maximumTemperature"] && <div className="alert alert-danger">{this.state.errors["maximumTemperature"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="minimumTemperature">Minimum Temperature</label>
              <input
                value={this.state.data["minimumTemperature"]}
                onChange={this.handleChange}
                name="minimumTemperature"
                id="minimumTemperature"
                type="number"
                className="form-control"
              />
              {this.state.errors["minimumTemperature"] && <div className="alert alert-danger">{this.state.errors["minimumTemperature"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="minimumTemperatureId">          Minimum Temperature <a target="_blank" href="/Timemeasurementtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateminimumTemperatures}> Refresh</a> </label>
              <select
                value={this.state.data["minimumTemperatureId"]}
                onChange={this.handleChange}
                name="minimumTemperatureId"
                id="minimumTemperatureId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Timemeasurementtype
                  </option>
                  {this.state.minimumTemperatures.map(Timemeasurementtype => (
                    <option key={Timemeasurementtype._id} value={Timemeasurementtype._id}>
                      {Timemeasurementtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["minimumTemperatureId"] && <div className="alert alert-danger">{this.state.errors["minimumTemperatureId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="maximumTemperatureId">          Maximum Temperature <a target="_blank" href="/Timemeasurementtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatemaximumTemperatures}> Refresh</a> </label>
              <select
                value={this.state.data["maximumTemperatureId"]}
                onChange={this.handleChange}
                name="maximumTemperatureId"
                id="maximumTemperatureId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Timemeasurementtype
                  </option>
                  {this.state.maximumTemperatures.map(Timemeasurementtype => (
                    <option key={Timemeasurementtype._id} value={Timemeasurementtype._id}>
                      {Timemeasurementtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["maximumTemperatureId"] && <div className="alert alert-danger">{this.state.errors["maximumTemperatureId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createTemperaturerangetype;