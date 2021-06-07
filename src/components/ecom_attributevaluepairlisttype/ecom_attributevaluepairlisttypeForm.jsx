import React, { Component } from "react";
import Joi from "joi-browser";
import { saveEcom_attributevaluepairlisttype, getEcom_attributevaluepairlisttype } from "../../services/ecom_attributevaluepairlisttypeService";
import { getEcomstringattributevaluepairlists } from "../../services/ecomstringattributevaluepairlistService";

class createEcom_attributevaluepairlisttype extends Component{

 constructor(props){
super(props);
    this.populateeComStringAttributeValuePairLists = this.populateeComStringAttributeValuePairLists.bind(this);
}  state = {
    data: { id: "", eComStringAttributeValuePairList: "", eComStringAttributeValuePairListId: "", },
    eComStringAttributeValuePairLists: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    eComStringAttributeValuePairList:  Joi.string()
      .allow('').allow(null)



      .label("eComStringAttributeValuePairList"),
    eComStringAttributeValuePairListId:  Joi.string()
      .required()
      .label("eComStringAttributeValuePairListId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const ecom_attributevaluepairlisttypeId = this.props.match.params.id;
      if(ecom_attributevaluepairlisttypeId!=="new"){
        const { data } = await getEcom_attributevaluepairlisttype(ecom_attributevaluepairlisttypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateeComStringAttributeValuePairLists() {
    const { data: eComStringAttributeValuePairLists } = await getEcomstringattributevaluepairlists();
    this.setState({ eComStringAttributeValuePairLists: eComStringAttributeValuePairLists });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateeComStringAttributeValuePairLists();
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
    await saveEcom_attributevaluepairlisttype(this.state.data);
    this.props.history.push("/ecom_attributevaluepairlisttypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Ecom_attributevaluepairlisttype Form</h1>
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
              <label htmlFor="eComStringAttributeValuePairList">E Com String Attribute Value Pair List</label>
              <input
                value={this.state.data["eComStringAttributeValuePairList"]}
                onChange={this.handleChange}
                name="eComStringAttributeValuePairList"
                id="eComStringAttributeValuePairList"
                type="text"
                className="form-control"
              />
              {this.state.errors["eComStringAttributeValuePairList"] && <div className="alert alert-danger">{this.state.errors["eComStringAttributeValuePairList"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="eComStringAttributeValuePairListId">          E Com String Attribute Value Pair List <a target="_blank" href="/Ecomstringattributevaluepairlists/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateeComStringAttributeValuePairLists}> Refresh</a> </label>
              <select
                value={this.state.data["eComStringAttributeValuePairListId"]}
                onChange={this.handleChange}
                name="eComStringAttributeValuePairListId"
                id="eComStringAttributeValuePairListId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Ecomstringattributevaluepairlist
                  </option>
                  {this.state.eComStringAttributeValuePairLists.map(Ecomstringattributevaluepairlist => (
                    <option key={Ecomstringattributevaluepairlist._id} value={Ecomstringattributevaluepairlist._id}>
                      {Ecomstringattributevaluepairlist.qualifierCodeName}
                    </option>
                  ))}
              </select>
              {this.state.errors["eComStringAttributeValuePairListId"] && <div className="alert alert-danger">{this.state.errors["eComStringAttributeValuePairListId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createEcom_attributevaluepairlisttype;