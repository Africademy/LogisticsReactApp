import React, { Component } from "react";
import Joi from "joi-browser";
import { saveFinancialaccounttype, getFinancialaccounttype } from "../../services/financialaccounttypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class createFinancialaccounttype extends Component{

 constructor(props){
super(props);
    this.populatefinancialAccountNumberTypeCodes = this.populatefinancialAccountNumberTypeCodes.bind(this);
}  state = {
    data: { id: "", financialAccountNumber: "", financialAccountNumberTypeCode: "", financialAccountName: "", financialAccountNumberTypeCodeId: "", },
    financialAccountNumberTypeCodes: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    financialAccountNumber:  Joi.string()
      .allow('').allow(null)



      .label("financialAccountNumber"),
    financialAccountNumberTypeCode:  Joi.number()



      .label("financialAccountNumberTypeCode"),
    financialAccountName:  Joi.string()
      .allow('').allow(null)



      .label("financialAccountName"),
    financialAccountNumberTypeCodeId:  Joi.string()
      .required()
      .label("financialAccountNumberTypeCodeId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const financialaccounttypeId = this.props.match.params.id;
      if(financialaccounttypeId!=="new"){
        const { data } = await getFinancialaccounttype(financialaccounttypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatefinancialAccountNumberTypeCodes() {
    const { data: financialAccountNumberTypeCodes } = await getEnumerationlibrarys();
    this.setState({ financialAccountNumberTypeCodes: financialAccountNumberTypeCodes });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatefinancialAccountNumberTypeCodes();
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
    await saveFinancialaccounttype(this.state.data);
    this.props.history.push("/financialaccounttypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Financialaccounttype Form</h1>
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
              <label htmlFor="financialAccountNumber">Financial Account Number</label>
              <input
                value={this.state.data["financialAccountNumber"]}
                onChange={this.handleChange}
                name="financialAccountNumber"
                id="financialAccountNumber"
                type="text"
                className="form-control"
              />
              {this.state.errors["financialAccountNumber"] && <div className="alert alert-danger">{this.state.errors["financialAccountNumber"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="financialAccountNumberTypeCode">Financial Account Number Type Code</label>
              <input
                value={this.state.data["financialAccountNumberTypeCode"]}
                onChange={this.handleChange}
                name="financialAccountNumberTypeCode"
                id="financialAccountNumberTypeCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["financialAccountNumberTypeCode"] && <div className="alert alert-danger">{this.state.errors["financialAccountNumberTypeCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="financialAccountName">Financial Account Name</label>
              <input
                value={this.state.data["financialAccountName"]}
                onChange={this.handleChange}
                name="financialAccountName"
                id="financialAccountName"
                type="text"
                className="form-control"
              />
              {this.state.errors["financialAccountName"] && <div className="alert alert-danger">{this.state.errors["financialAccountName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="financialAccountNumberTypeCodeId">          Financial Account Number Type Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatefinancialAccountNumberTypeCodes}> Refresh</a> </label>
              <select
                value={this.state.data["financialAccountNumberTypeCodeId"]}
                onChange={this.handleChange}
                name="financialAccountNumberTypeCodeId"
                id="financialAccountNumberTypeCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.financialAccountNumberTypeCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["financialAccountNumberTypeCodeId"] && <div className="alert alert-danger">{this.state.errors["financialAccountNumberTypeCodeId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createFinancialaccounttype;