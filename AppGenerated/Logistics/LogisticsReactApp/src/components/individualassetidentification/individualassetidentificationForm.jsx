import React, { Component } from "react";
import Joi from "joi-browser";
import { saveIndividualassetidentification, getIndividualassetidentification } from "../../services/individualassetidentificationService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createIndividualassetidentification extends Component{

 constructor(props){
super(props);
    this.populateadditionalIndividualAssetIdentifications = this.populateadditionalIndividualAssetIdentifications.bind(this);
}  state = {
    data: { id: "", giai: "", additionalIndividualAssetIdentification: "", additionalIndividualAssetIdentificationId: "", },
    additionalIndividualAssetIdentifications: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    giai:  Joi.string()
      .allow('').allow(null)



      .label("giai"),
    additionalIndividualAssetIdentification:  Joi.number()



      .label("additionalIndividualAssetIdentification"),
    additionalIndividualAssetIdentificationId:  Joi.string()
      .required()
      .label("additionalIndividualAssetIdentificationId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const individualassetidentificationId = this.props.match.params.id;
      if(individualassetidentificationId!=="new"){
        const { data } = await getIndividualassetidentification(individualassetidentificationId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateadditionalIndividualAssetIdentifications() {
    const { data: additionalIndividualAssetIdentifications } = await getEnumerationlibrarys();
    this.setState({ additionalIndividualAssetIdentifications: additionalIndividualAssetIdentifications });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateadditionalIndividualAssetIdentifications();
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
    await saveIndividualassetidentification(this.state.data);
    this.props.history.push("/individualassetidentifications");
  };

  render() {
    return (
      <div className="content">
        <h1>Individualassetidentification Form</h1>
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
              <label htmlFor="giai">Giai</label>
              <input
                value={this.state.data["giai"]}
                onChange={this.handleChange}
                name="giai"
                id="giai"
                type="text"
                className="form-control"
              />
              {this.state.errors["giai"] && <div className="alert alert-danger">{this.state.errors["giai"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalIndividualAssetIdentification">Additional Individual Asset Identification</label>
              <input
                value={this.state.data["additionalIndividualAssetIdentification"]}
                onChange={this.handleChange}
                name="additionalIndividualAssetIdentification"
                id="additionalIndividualAssetIdentification"
                type="number"
                className="form-control"
              />
              {this.state.errors["additionalIndividualAssetIdentification"] && <div className="alert alert-danger">{this.state.errors["additionalIndividualAssetIdentification"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalIndividualAssetIdentificationId">          Additional Individual Asset Identification <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateadditionalIndividualAssetIdentifications}> Refresh</a> </label>
              <select
                value={this.state.data["additionalIndividualAssetIdentificationId"]}
                onChange={this.handleChange}
                name="additionalIndividualAssetIdentificationId"
                id="additionalIndividualAssetIdentificationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.additionalIndividualAssetIdentifications.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["additionalIndividualAssetIdentificationId"] && <div className="alert alert-danger">{this.state.errors["additionalIndividualAssetIdentificationId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createIndividualassetidentification;