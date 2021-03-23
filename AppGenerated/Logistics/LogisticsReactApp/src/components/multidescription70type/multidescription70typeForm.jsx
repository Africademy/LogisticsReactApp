import React, { Component } from "react";
import Joi from "joi-browser";
import { saveMultidescription70type, getMultidescription70type } from "../../services/multidescription70typeService";
import { getDescription70types } from "../../services/description70typeService";

class createMultidescription70type extends Component{

 constructor(props){
super(props);
    this.populatedescriptions = this.populatedescriptions.bind(this);
}  state = {
    data: { id: "", description: "", descriptionId: "", },
    descriptions: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    description:  Joi.number()



      .label("description"),
    descriptionId:  Joi.string()
      .required()
      .label("descriptionId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const multidescription70typeId = this.props.match.params.id;
      if(multidescription70typeId!=="new"){
        const { data } = await getMultidescription70type(multidescription70typeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatedescriptions() {
    const { data: descriptions } = await getDescription70types();
    this.setState({ descriptions: descriptions });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatedescriptions();
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
    await saveMultidescription70type(this.state.data);
    this.props.history.push("/multidescription70types");
  };

  render() {
    return (
      <div className="content">
        <h1>Multidescription70type Form</h1>
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
              <label htmlFor="description">Description</label>
              <input
                value={this.state.data["description"]}
                onChange={this.handleChange}
                name="description"
                id="description"
                type="number"
                className="form-control"
              />
              {this.state.errors["description"] && <div className="alert alert-danger">{this.state.errors["description"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="descriptionId">          Description <a target="_blank" href="/Description70types/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedescriptions}> Refresh</a> </label>
              <select
                value={this.state.data["descriptionId"]}
                onChange={this.handleChange}
                name="descriptionId"
                id="descriptionId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Description70type
                  </option>
                  {this.state.descriptions.map(Description70type => (
                    <option key={Description70type._id} value={Description70type._id}>
                      {Description70type.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["descriptionId"] && <div className="alert alert-danger">{this.state.errors["descriptionId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createMultidescription70type;