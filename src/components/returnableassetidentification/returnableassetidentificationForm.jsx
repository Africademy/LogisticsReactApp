import React, { Component } from "react";
import Joi from "joi-browser";
import { saveReturnableassetidentification, getReturnableassetidentification } from "../../services/returnableassetidentificationService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createReturnableassetidentification extends Component{

 constructor(props){
super(props);
    this.populateadditionalReturnableAssetIdentifications = this.populateadditionalReturnableAssetIdentifications.bind(this);
}  state = {
    data: { id: "", grai: "", additionalReturnableAssetIdentification: "", additionalReturnableAssetIdentificationId: "", },
    additionalReturnableAssetIdentifications: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    grai:  Joi.string()
      .required()


      .label("grai"),
    additionalReturnableAssetIdentification:  Joi.number()



      .label("additionalReturnableAssetIdentification"),
    additionalReturnableAssetIdentificationId:  Joi.string()
      .required()
      .label("additionalReturnableAssetIdentificationId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const returnableassetidentificationId = this.props.match.params.id;
      if(returnableassetidentificationId!=="new"){
        const { data } = await getReturnableassetidentification(returnableassetidentificationId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateadditionalReturnableAssetIdentifications() {
    const { data: additionalReturnableAssetIdentifications } = await getEnumerationlibrarys();
    this.setState({ additionalReturnableAssetIdentifications: additionalReturnableAssetIdentifications });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateadditionalReturnableAssetIdentifications();
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
    await saveReturnableassetidentification(this.state.data);
    this.props.history.push("/returnableassetidentifications");
  };

  render() {
    return (
      <div className="content">
        <h1>Returnableassetidentification Form</h1>
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
              <label htmlFor="grai">Grai</label>
              <input
                value={this.state.data["grai"]}
                onChange={this.handleChange}
                name="grai"
                id="grai"
                type="text"
                className="form-control"
              />
              {this.state.errors["grai"] && <div className="alert alert-danger">{this.state.errors["grai"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalReturnableAssetIdentification">Additional Returnable Asset Identification</label>
              <input
                value={this.state.data["additionalReturnableAssetIdentification"]}
                onChange={this.handleChange}
                name="additionalReturnableAssetIdentification"
                id="additionalReturnableAssetIdentification"
                type="number"
                className="form-control"
              />
              {this.state.errors["additionalReturnableAssetIdentification"] && <div className="alert alert-danger">{this.state.errors["additionalReturnableAssetIdentification"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalReturnableAssetIdentificationId">          Additional Returnable Asset Identification <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateadditionalReturnableAssetIdentifications}> Refresh</a> </label>
              <select
                value={this.state.data["additionalReturnableAssetIdentificationId"]}
                onChange={this.handleChange}
                name="additionalReturnableAssetIdentificationId"
                id="additionalReturnableAssetIdentificationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.additionalReturnableAssetIdentifications.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["additionalReturnableAssetIdentificationId"] && <div className="alert alert-danger">{this.state.errors["additionalReturnableAssetIdentificationId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createReturnableassetidentification;