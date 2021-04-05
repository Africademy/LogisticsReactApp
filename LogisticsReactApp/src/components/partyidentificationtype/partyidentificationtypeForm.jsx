import React, { Component } from "react";
import Joi from "joi-browser";
import { savePartyidentificationtype, getPartyidentificationtype } from "../../services/partyidentificationtypeService";
import { getAdditionalpartyidentificationtypes } from "../../services/additionalpartyidentificationtypeService";

class createPartyidentificationtype extends Component{

 constructor(props){
super(props);
    this.populateadditionalPartyIdentifications = this.populateadditionalPartyIdentifications.bind(this);
}  state = {
    data: { id: "", gln: "", additionalPartyIdentification: "", additionalPartyIdentificationId: "", },
    additionalPartyIdentifications: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    gln:  Joi.string()
      .allow('').allow(null)



      .label("gln"),
    additionalPartyIdentification:  Joi.number()



      .label("additionalPartyIdentification"),
    additionalPartyIdentificationId:  Joi.string()
      .required()
      .label("additionalPartyIdentificationId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const partyidentificationtypeId = this.props.match.params.id;
      if(partyidentificationtypeId!=="new"){
        const { data } = await getPartyidentificationtype(partyidentificationtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateadditionalPartyIdentifications() {
    const { data: additionalPartyIdentifications } = await getAdditionalpartyidentificationtypes();
    this.setState({ additionalPartyIdentifications: additionalPartyIdentifications });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateadditionalPartyIdentifications();
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
    await savePartyidentificationtype(this.state.data);
    this.props.history.push("/partyidentificationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Partyidentificationtype Form</h1>
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
              <label htmlFor="gln">Gln</label>
              <input
                value={this.state.data["gln"]}
                onChange={this.handleChange}
                name="gln"
                id="gln"
                type="text"
                className="form-control"
              />
              {this.state.errors["gln"] && <div className="alert alert-danger">{this.state.errors["gln"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalPartyIdentification">Additional Party Identification</label>
              <input
                value={this.state.data["additionalPartyIdentification"]}
                onChange={this.handleChange}
                name="additionalPartyIdentification"
                id="additionalPartyIdentification"
                type="number"
                className="form-control"
              />
              {this.state.errors["additionalPartyIdentification"] && <div className="alert alert-danger">{this.state.errors["additionalPartyIdentification"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalPartyIdentificationId">          Additional Party Identification <a target="_blank" href="/Additionalpartyidentificationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateadditionalPartyIdentifications}> Refresh</a> </label>
              <select
                value={this.state.data["additionalPartyIdentificationId"]}
                onChange={this.handleChange}
                name="additionalPartyIdentificationId"
                id="additionalPartyIdentificationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Additionalpartyidentificationtype
                  </option>
                  {this.state.additionalPartyIdentifications.map(Additionalpartyidentificationtype => (
                    <option key={Additionalpartyidentificationtype._id} value={Additionalpartyidentificationtype._id}>
                      {Additionalpartyidentificationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["additionalPartyIdentificationId"] && <div className="alert alert-danger">{this.state.errors["additionalPartyIdentificationId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createPartyidentificationtype;