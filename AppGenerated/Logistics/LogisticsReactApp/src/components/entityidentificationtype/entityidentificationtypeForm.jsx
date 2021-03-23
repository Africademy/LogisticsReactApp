import React, { Component } from "react";
import Joi from "joi-browser";
import { saveEntityidentificationtype, getEntityidentificationtype } from "../../services/entityidentificationtypeService";
import { getPartyidentificationtypes } from "../../services/partyidentificationtypeService";

class createEntityidentificationtype extends Component{

 constructor(props){
super(props);
    this.populatecontentOwners = this.populatecontentOwners.bind(this);
}  state = {
    data: { id: "", entityIdentification: "", contentOwner: "", contentOwnerId: "", },
    contentOwners: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    entityIdentification:  Joi.string()
      .allow('').allow(null)



      .label("entityIdentification"),
    contentOwner:  Joi.number()



      .label("contentOwner"),
    contentOwnerId:  Joi.string()
      .required()
      .label("contentOwnerId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const entityidentificationtypeId = this.props.match.params.id;
      if(entityidentificationtypeId!=="new"){
        const { data } = await getEntityidentificationtype(entityidentificationtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatecontentOwners() {
    const { data: contentOwners } = await getPartyidentificationtypes();
    this.setState({ contentOwners: contentOwners });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatecontentOwners();
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
    await saveEntityidentificationtype(this.state.data);
    this.props.history.push("/entityidentificationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Entityidentificationtype Form</h1>
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
              <label htmlFor="entityIdentification">Entity Identification</label>
              <input
                value={this.state.data["entityIdentification"]}
                onChange={this.handleChange}
                name="entityIdentification"
                id="entityIdentification"
                type="text"
                className="form-control"
              />
              {this.state.errors["entityIdentification"] && <div className="alert alert-danger">{this.state.errors["entityIdentification"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="contentOwner">Content Owner</label>
              <input
                value={this.state.data["contentOwner"]}
                onChange={this.handleChange}
                name="contentOwner"
                id="contentOwner"
                type="number"
                className="form-control"
              />
              {this.state.errors["contentOwner"] && <div className="alert alert-danger">{this.state.errors["contentOwner"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="contentOwnerId">          Content Owner <a target="_blank" href="/Partyidentificationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatecontentOwners}> Refresh</a> </label>
              <select
                value={this.state.data["contentOwnerId"]}
                onChange={this.handleChange}
                name="contentOwnerId"
                id="contentOwnerId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Partyidentificationtype
                  </option>
                  {this.state.contentOwners.map(Partyidentificationtype => (
                    <option key={Partyidentificationtype._id} value={Partyidentificationtype._id}>
                      {Partyidentificationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["contentOwnerId"] && <div className="alert alert-danger">{this.state.errors["contentOwnerId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createEntityidentificationtype;