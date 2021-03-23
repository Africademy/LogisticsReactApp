import React, { Component } from "react";
import Joi from "joi-browser";
import { saveFinancialroutingnumbertype, getFinancialroutingnumbertype } from "../../services/financialroutingnumbertypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createFinancialroutingnumbertype extends Component{

 constructor(props){
super(props);
    this.populatefinancialRoutingNumberTypeCodes = this.populatefinancialRoutingNumberTypeCodes.bind(this);
}  state = {
    data: { id: "", financialRoutingNumber: "", financialRoutingNumberTypeCode: "", financialRoutingNumberTypeCodeId: "", },
    financialRoutingNumberTypeCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    financialRoutingNumber:  Joi.string()
      .allow('').allow(null)



      .label("financialRoutingNumber"),
    financialRoutingNumberTypeCode:  Joi.number()



      .label("financialRoutingNumberTypeCode"),
    financialRoutingNumberTypeCodeId:  Joi.string()
      .required()
      .label("financialRoutingNumberTypeCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const financialroutingnumbertypeId = this.props.match.params.id;
      if(financialroutingnumbertypeId!=="new"){
        const { data } = await getFinancialroutingnumbertype(financialroutingnumbertypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatefinancialRoutingNumberTypeCodes() {
    const { data: financialRoutingNumberTypeCodes } = await getEnumerationlibrarys();
    this.setState({ financialRoutingNumberTypeCodes: financialRoutingNumberTypeCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatefinancialRoutingNumberTypeCodes();
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
    await saveFinancialroutingnumbertype(this.state.data);
    this.props.history.push("/financialroutingnumbertypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Financialroutingnumbertype Form</h1>
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
              <label htmlFor="financialRoutingNumber">Financial Routing Number</label>
              <input
                value={this.state.data["financialRoutingNumber"]}
                onChange={this.handleChange}
                name="financialRoutingNumber"
                id="financialRoutingNumber"
                type="text"
                className="form-control"
              />
              {this.state.errors["financialRoutingNumber"] && <div className="alert alert-danger">{this.state.errors["financialRoutingNumber"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="financialRoutingNumberTypeCode">Financial Routing Number Type Code</label>
              <input
                value={this.state.data["financialRoutingNumberTypeCode"]}
                onChange={this.handleChange}
                name="financialRoutingNumberTypeCode"
                id="financialRoutingNumberTypeCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["financialRoutingNumberTypeCode"] && <div className="alert alert-danger">{this.state.errors["financialRoutingNumberTypeCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="financialRoutingNumberTypeCodeId">          Financial Routing Number Type Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatefinancialRoutingNumberTypeCodes}> Refresh</a> </label>
              <select
                value={this.state.data["financialRoutingNumberTypeCodeId"]}
                onChange={this.handleChange}
                name="financialRoutingNumberTypeCodeId"
                id="financialRoutingNumberTypeCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.financialRoutingNumberTypeCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["financialRoutingNumberTypeCodeId"] && <div className="alert alert-danger">{this.state.errors["financialRoutingNumberTypeCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createFinancialroutingnumbertype;