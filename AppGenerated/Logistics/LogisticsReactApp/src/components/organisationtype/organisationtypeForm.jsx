import React, { Component } from "react";
import Joi from "joi-browser";
import { saveOrganisationtype, getOrganisationtype } from "../../services/organisationtypeService";
import { getAmounttypes } from "../../services/amounttypeService";

class createOrganisationtype extends Component{

 constructor(props){
super(props);
    this.populateissuedCapitals = this.populateissuedCapitals.bind(this);
}  state = {
    data: { id: "", organisationName: "", issuedCapital: "", issuedCapitalId: "", },
    issuedCapitals: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    organisationName:  Joi.string()
      .allow('').allow(null)



      .label("organisationName"),
    issuedCapital:  Joi.number()



      .label("issuedCapital"),
    issuedCapitalId:  Joi.string()
      .required()
      .label("issuedCapitalId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const organisationtypeId = this.props.match.params.id;
      if(organisationtypeId!=="new"){
        const { data } = await getOrganisationtype(organisationtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateissuedCapitals() {
    const { data: issuedCapitals } = await getAmounttypes();
    this.setState({ issuedCapitals: issuedCapitals });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateissuedCapitals();
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
    await saveOrganisationtype(this.state.data);
    this.props.history.push("/organisationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Organisationtype Form</h1>
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
              <label htmlFor="organisationName">Organisation Name</label>
              <input
                value={this.state.data["organisationName"]}
                onChange={this.handleChange}
                name="organisationName"
                id="organisationName"
                type="text"
                className="form-control"
              />
              {this.state.errors["organisationName"] && <div className="alert alert-danger">{this.state.errors["organisationName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="issuedCapital">Issued Capital</label>
              <input
                value={this.state.data["issuedCapital"]}
                onChange={this.handleChange}
                name="issuedCapital"
                id="issuedCapital"
                type="number"
                className="form-control"
              />
              {this.state.errors["issuedCapital"] && <div className="alert alert-danger">{this.state.errors["issuedCapital"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="issuedCapitalId">          Issued Capital <a target="_blank" href="/Amounttypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateissuedCapitals}> Refresh</a> </label>
              <select
                value={this.state.data["issuedCapitalId"]}
                onChange={this.handleChange}
                name="issuedCapitalId"
                id="issuedCapitalId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Amounttype
                  </option>
                  {this.state.issuedCapitals.map(Amounttype => (
                    <option key={Amounttype._id} value={Amounttype._id}>
                      {Amounttype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["issuedCapitalId"] && <div className="alert alert-danger">{this.state.errors["issuedCapitalId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createOrganisationtype;