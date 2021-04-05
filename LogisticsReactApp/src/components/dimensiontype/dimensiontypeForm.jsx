import React, { Component } from "react";
import Joi from "joi-browser";
import { saveDimensiontype, getDimensiontype } from "../../services/dimensiontypeService";
import { getMeasurementtypes } from "../../services/measurementtypeService";

class createDimensiontype extends Component{

 constructor(props){
super(props);
    this.populatedepths = this.populatedepths.bind(this);
    this.populateheights = this.populateheights.bind(this);
    this.populatewidths = this.populatewidths.bind(this);
}  state = {
    data: { id: "", depth: "", height: "", width: "", depthId: "", heightId: "", widthId: "", },
    depths: [],
    heights: [],
    widths: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    depth:  Joi.number()



      .label("depth"),
    height:  Joi.number()



      .label("height"),
    width:  Joi.number()



      .label("width"),
    depthId:  Joi.string()
      .required()
      .label("depthId"),
    heightId:  Joi.string()
      .required()
      .label("heightId"),
    widthId:  Joi.string()
      .required()
      .label("widthId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const dimensiontypeId = this.props.match.params.id;
      if(dimensiontypeId!=="new"){
        const { data } = await getDimensiontype(dimensiontypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatedepths() {
    const { data: depths } = await getMeasurementtypes();
    this.setState({ depths: depths });
  }

  async populateheights() {
    const { data: heights } = await getMeasurementtypes();
    this.setState({ heights: heights });
  }

  async populatewidths() {
    const { data: widths } = await getMeasurementtypes();
    this.setState({ widths: widths });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatedepths();
    await this.populateheights();
    await this.populatewidths();
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
    await saveDimensiontype(this.state.data);
    this.props.history.push("/dimensiontypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Dimensiontype Form</h1>
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
              <label htmlFor="depth">Depth</label>
              <input
                value={this.state.data["depth"]}
                onChange={this.handleChange}
                name="depth"
                id="depth"
                type="number"
                className="form-control"
              />
              {this.state.errors["depth"] && <div className="alert alert-danger">{this.state.errors["depth"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="height">Height</label>
              <input
                value={this.state.data["height"]}
                onChange={this.handleChange}
                name="height"
                id="height"
                type="number"
                className="form-control"
              />
              {this.state.errors["height"] && <div className="alert alert-danger">{this.state.errors["height"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="width">Width</label>
              <input
                value={this.state.data["width"]}
                onChange={this.handleChange}
                name="width"
                id="width"
                type="number"
                className="form-control"
              />
              {this.state.errors["width"] && <div className="alert alert-danger">{this.state.errors["width"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="depthId">          Depth <a target="_blank" href="/Measurementtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedepths}> Refresh</a> </label>
              <select
                value={this.state.data["depthId"]}
                onChange={this.handleChange}
                name="depthId"
                id="depthId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Measurementtype
                  </option>
                  {this.state.depths.map(Measurementtype => (
                    <option key={Measurementtype._id} value={Measurementtype._id}>
                      {Measurementtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["depthId"] && <div className="alert alert-danger">{this.state.errors["depthId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="heightId">          Height <a target="_blank" href="/Measurementtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateheights}> Refresh</a> </label>
              <select
                value={this.state.data["heightId"]}
                onChange={this.handleChange}
                name="heightId"
                id="heightId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Measurementtype
                  </option>
                  {this.state.heights.map(Measurementtype => (
                    <option key={Measurementtype._id} value={Measurementtype._id}>
                      {Measurementtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["heightId"] && <div className="alert alert-danger">{this.state.errors["heightId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="widthId">          Width <a target="_blank" href="/Measurementtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatewidths}> Refresh</a> </label>
              <select
                value={this.state.data["widthId"]}
                onChange={this.handleChange}
                name="widthId"
                id="widthId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Measurementtype
                  </option>
                  {this.state.widths.map(Measurementtype => (
                    <option key={Measurementtype._id} value={Measurementtype._id}>
                      {Measurementtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["widthId"] && <div className="alert alert-danger">{this.state.errors["widthId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createDimensiontype;