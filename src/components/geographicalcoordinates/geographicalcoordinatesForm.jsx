import React, { Component } from "react";
import Joi from "joi-browser";
import { saveGeographicalcoordinates, getGeographicalcoordinates } from "../../services/geographicalcoordinatesService";

class createGeographicalcoordinates extends Component{

 constructor(props){
super(props);
}  state = {
    data: { latitude: "", longitude: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    latitude:  Joi.string()
      .required()


      .label("latitude"),
    longitude:  Joi.string()
      .required()


      .label("longitude"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const geographicalcoordinatesId = this.props.match.params.id;
      if(geographicalcoordinatesId!=="new"){
        const { data } = await getGeographicalcoordinates(geographicalcoordinatesId);
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
    await saveGeographicalcoordinates(this.state.data);
    this.props.history.push("/geographicalcoordinatess");
  };

  render() {
    return (
      <div className="content">
        <h1>Geographicalcoordinates Form</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label htmlFor="latitude">Latitude</label>
              <input
                value={this.state.data["latitude"]}
                onChange={this.handleChange}
                name="latitude"
                id="latitude"
                type="text"
                className="form-control"
              />
              {this.state.errors["latitude"] && <div className="alert alert-danger">{this.state.errors["latitude"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="longitude">Longitude</label>
              <input
                value={this.state.data["longitude"]}
                onChange={this.handleChange}
                name="longitude"
                id="longitude"
                type="text"
                className="form-control"
              />
              {this.state.errors["longitude"] && <div className="alert alert-danger">{this.state.errors["longitude"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createGeographicalcoordinates;