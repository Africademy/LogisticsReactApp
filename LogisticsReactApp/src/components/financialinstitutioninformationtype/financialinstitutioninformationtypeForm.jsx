import React, { Component } from "react";
import Joi from "joi-browser";
import { saveFinancialinstitutioninformationtype, getFinancialinstitutioninformationtype } from "../../services/financialinstitutioninformationtypeService";
import { getFinancialaccounttypes } from "../../services/financialaccounttypeService";
import { getFinancialroutingnumbertypes } from "../../services/financialroutingnumbertypeService";
import { getMultidescription70types } from "../../services/multidescription70typeService";
import { getAddresss } from "../../services/addressService";

class createFinancialinstitutioninformationtype extends Component{

 constructor(props){
super(props);
    this.populatefinancialAccounts = this.populatefinancialAccounts.bind(this);
    this.populatefinancialRoutingNumbers = this.populatefinancialRoutingNumbers.bind(this);
    this.populateadditionalFinancialInformations = this.populateadditionalFinancialInformations.bind(this);
    this.populateaddresss = this.populateaddresss.bind(this);
}  state = {
    data: { id: "", financialInstitutionName: "", financialInstitutionBranchName: "", financialAccount: "", financialRoutingNumber: "", additionalFinancialInformation: "", address: "", financialAccountId: "", financialRoutingNumberId: "", additionalFinancialInformationId: "", addressId: "", },
    financialAccounts: [],
    financialRoutingNumbers: [],
    additionalFinancialInformations: [],
    addresss: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    financialInstitutionName:  Joi.string()
      .allow('').allow(null)



      .label("financialInstitutionName"),
    financialInstitutionBranchName:  Joi.string()
      .allow('').allow(null)



      .label("financialInstitutionBranchName"),
    financialAccount:  Joi.number()



      .label("financialAccount"),
    financialRoutingNumber:  Joi.number()



      .label("financialRoutingNumber"),
    additionalFinancialInformation:  Joi.number()



      .label("additionalFinancialInformation"),
    address:  Joi.number()



      .label("address"),
    financialAccountId:  Joi.string()
      .required()
      .label("financialAccountId"),
    financialRoutingNumberId:  Joi.string()
      .required()
      .label("financialRoutingNumberId"),
    additionalFinancialInformationId:  Joi.string()
      .required()
      .label("additionalFinancialInformationId"),
    addressId:  Joi.string()
      .required()
      .label("addressId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const financialinstitutioninformationtypeId = this.props.match.params.id;
      if(financialinstitutioninformationtypeId!=="new"){
        const { data } = await getFinancialinstitutioninformationtype(financialinstitutioninformationtypeId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatefinancialAccounts() {
    const { data: financialAccounts } = await getFinancialaccounttypes();
    this.setState({ financialAccounts: financialAccounts });
  }

  async populatefinancialRoutingNumbers() {
    const { data: financialRoutingNumbers } = await getFinancialroutingnumbertypes();
    this.setState({ financialRoutingNumbers: financialRoutingNumbers });
  }

  async populateadditionalFinancialInformations() {
    const { data: additionalFinancialInformations } = await getMultidescription70types();
    this.setState({ additionalFinancialInformations: additionalFinancialInformations });
  }

  async populateaddresss() {
    const { data: addresss } = await getAddresss();
    this.setState({ addresss: addresss });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatefinancialAccounts();
    await this.populatefinancialRoutingNumbers();
    await this.populateadditionalFinancialInformations();
    await this.populateaddresss();
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
    await saveFinancialinstitutioninformationtype(this.state.data);
    this.props.history.push("/financialinstitutioninformationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Financialinstitutioninformationtype Form</h1>
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
              <label htmlFor="financialInstitutionName">Financial Institution Name</label>
              <input
                value={this.state.data["financialInstitutionName"]}
                onChange={this.handleChange}
                name="financialInstitutionName"
                id="financialInstitutionName"
                type="text"
                className="form-control"
              />
              {this.state.errors["financialInstitutionName"] && <div className="alert alert-danger">{this.state.errors["financialInstitutionName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="financialInstitutionBranchName">Financial Institution Branch Name</label>
              <input
                value={this.state.data["financialInstitutionBranchName"]}
                onChange={this.handleChange}
                name="financialInstitutionBranchName"
                id="financialInstitutionBranchName"
                type="text"
                className="form-control"
              />
              {this.state.errors["financialInstitutionBranchName"] && <div className="alert alert-danger">{this.state.errors["financialInstitutionBranchName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="financialAccount">Financial Account</label>
              <input
                value={this.state.data["financialAccount"]}
                onChange={this.handleChange}
                name="financialAccount"
                id="financialAccount"
                type="number"
                className="form-control"
              />
              {this.state.errors["financialAccount"] && <div className="alert alert-danger">{this.state.errors["financialAccount"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="financialRoutingNumber">Financial Routing Number</label>
              <input
                value={this.state.data["financialRoutingNumber"]}
                onChange={this.handleChange}
                name="financialRoutingNumber"
                id="financialRoutingNumber"
                type="number"
                className="form-control"
              />
              {this.state.errors["financialRoutingNumber"] && <div className="alert alert-danger">{this.state.errors["financialRoutingNumber"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalFinancialInformation">Additional Financial Information</label>
              <input
                value={this.state.data["additionalFinancialInformation"]}
                onChange={this.handleChange}
                name="additionalFinancialInformation"
                id="additionalFinancialInformation"
                type="number"
                className="form-control"
              />
              {this.state.errors["additionalFinancialInformation"] && <div className="alert alert-danger">{this.state.errors["additionalFinancialInformation"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                value={this.state.data["address"]}
                onChange={this.handleChange}
                name="address"
                id="address"
                type="number"
                className="form-control"
              />
              {this.state.errors["address"] && <div className="alert alert-danger">{this.state.errors["address"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="financialAccountId">          Financial Account <a target="_blank" href="/Financialaccounttypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatefinancialAccounts}> Refresh</a> </label>
              <select
                value={this.state.data["financialAccountId"]}
                onChange={this.handleChange}
                name="financialAccountId"
                id="financialAccountId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Financialaccounttype
                  </option>
                  {this.state.financialAccounts.map(Financialaccounttype => (
                    <option key={Financialaccounttype._id} value={Financialaccounttype._id}>
                      {Financialaccounttype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["financialAccountId"] && <div className="alert alert-danger">{this.state.errors["financialAccountId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="financialRoutingNumberId">          Financial Routing Number <a target="_blank" href="/Financialroutingnumbertypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatefinancialRoutingNumbers}> Refresh</a> </label>
              <select
                value={this.state.data["financialRoutingNumberId"]}
                onChange={this.handleChange}
                name="financialRoutingNumberId"
                id="financialRoutingNumberId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Financialroutingnumbertype
                  </option>
                  {this.state.financialRoutingNumbers.map(Financialroutingnumbertype => (
                    <option key={Financialroutingnumbertype._id} value={Financialroutingnumbertype._id}>
                      {Financialroutingnumbertype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["financialRoutingNumberId"] && <div className="alert alert-danger">{this.state.errors["financialRoutingNumberId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="additionalFinancialInformationId">          Additional Financial Information <a target="_blank" href="/Multidescription70types/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateadditionalFinancialInformations}> Refresh</a> </label>
              <select
                value={this.state.data["additionalFinancialInformationId"]}
                onChange={this.handleChange}
                name="additionalFinancialInformationId"
                id="additionalFinancialInformationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Multidescription70type
                  </option>
                  {this.state.additionalFinancialInformations.map(Multidescription70type => (
                    <option key={Multidescription70type._id} value={Multidescription70type._id}>
                      {Multidescription70type.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["additionalFinancialInformationId"] && <div className="alert alert-danger">{this.state.errors["additionalFinancialInformationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="addressId">          Address <a target="_blank" href="/Addresss/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateaddresss}> Refresh</a> </label>
              <select
                value={this.state.data["addressId"]}
                onChange={this.handleChange}
                name="addressId"
                id="addressId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Address
                  </option>
                  {this.state.addresss.map(Address => (
                    <option key={Address._id} value={Address._id}>
                      {Address.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["addressId"] && <div className="alert alert-danger">{this.state.errors["addressId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createFinancialinstitutioninformationtype;