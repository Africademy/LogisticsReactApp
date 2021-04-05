import React, { Component } from "react";
import Joi from "joi-browser";
import { saveTransportmeanstype, getTransportmeanstype } from "../../services/transportmeanstypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createTransportmeanstype extends Component{

 constructor(props){
super(props);
    this.populatetransportMeansTypes = this.populatetransportMeansTypes.bind(this);
}  state = {
    data: { id: "", transportMeansType: "", transportMeansID: "", transportMeansName: "", transportMeansTypeId: "", },
    transportMeansTypes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    transportMeansType:  Joi.number()



      .label("transportMeansType"),
    transportMeansID:  Joi.string()
      .allow('').allow(null)



      .label("transportMeansID"),
    transportMeansName:  Joi.string()
      .allow('').allow(null)



      .label("transportMeansName"),
    transportMeansTypeId:  Joi.string()
      .required()
      .label("transportMeansTypeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const transportmeanstypeId = this.props.match.params.id;
      if(transportmeanstypeId!=="new"){
        const { data } = await getTransportmeanstype(transportmeanstypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatetransportMeansTypes() {
    const { data: transportMeansTypes } = await getEnumerationlibrarys();
    this.setState({ transportMeansTypes: transportMeansTypes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatetransportMeansTypes();
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
    await saveTransportmeanstype(this.state.data);
    this.props.history.push("/transportmeanstypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportmeanstype Form</h1>
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
              <label htmlFor="transportMeansType">Transport Means Type</label>
              <input
                value={this.state.data["transportMeansType"]}
                onChange={this.handleChange}
                name="transportMeansType"
                id="transportMeansType"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportMeansType"] && <div className="alert alert-danger">{this.state.errors["transportMeansType"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportMeansID">Transport Means I D</label>
              <input
                value={this.state.data["transportMeansID"]}
                onChange={this.handleChange}
                name="transportMeansID"
                id="transportMeansID"
                type="text"
                className="form-control"
              />
              {this.state.errors["transportMeansID"] && <div className="alert alert-danger">{this.state.errors["transportMeansID"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportMeansName">Transport Means Name</label>
              <input
                value={this.state.data["transportMeansName"]}
                onChange={this.handleChange}
                name="transportMeansName"
                id="transportMeansName"
                type="text"
                className="form-control"
              />
              {this.state.errors["transportMeansName"] && <div className="alert alert-danger">{this.state.errors["transportMeansName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportMeansTypeId">          Transport Means Type <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportMeansTypes}> Refresh</a> </label>
              <select
                value={this.state.data["transportMeansTypeId"]}
                onChange={this.handleChange}
                name="transportMeansTypeId"
                id="transportMeansTypeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.transportMeansTypes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportMeansTypeId"] && <div className="alert alert-danger">{this.state.errors["transportMeansTypeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createTransportmeanstype;