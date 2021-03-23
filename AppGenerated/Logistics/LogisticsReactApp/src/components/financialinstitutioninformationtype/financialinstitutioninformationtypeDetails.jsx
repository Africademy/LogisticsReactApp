import React, { Component } from "react";
import { getFinancialinstitutioninformationtype } from "../../services/financialinstitutioninformationtypeService";
import { getFinancialaccounttypes } from "../../services/financialaccounttypeService";
import { getFinancialroutingnumbertypes } from "../../services/financialroutingnumbertypeService";
import { getMultidescription70types } from "../../services/multidescription70typeService";
import { getAddresss } from "../../services/addressService";

class FinancialinstitutioninformationtypeDetails extends Component{

  state = {
    data: { id: "", financialInstitutionName: "", financialInstitutionBranchName: "", financialAccount: "", financialRoutingNumber: "", additionalFinancialInformation: "", address: "", financialAccountId: "", financialRoutingNumberId: "", additionalFinancialInformationId: "", addressId: "", },
    financialAccounts: [],
    financialRoutingNumbers: [],
    additionalFinancialInformations: [],
    addresss: [],
    errors: {}
  };

  async populateForm() {
    try {
        const financialinstitutioninformationtypeId = this.props.match.params.id;
        const { data } = await getFinancialinstitutioninformationtype(financialinstitutioninformationtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatefinancialAccounts() {
    const { data } = await getFinancialaccounttypes();
    this.setState({ financialAccounts: data });
  }

  async populatefinancialRoutingNumbers() {
    const { data } = await getFinancialroutingnumbertypes();
    this.setState({ financialRoutingNumbers: data });
  }

  async populateadditionalFinancialInformations() {
    const { data } = await getMultidescription70types();
    this.setState({ additionalFinancialInformations: data });
  }

  async populateaddresss() {
    const { data } = await getAddresss();
    this.setState({ addresss: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatefinancialAccounts();
    await this.populatefinancialRoutingNumbers();
    await this.populateadditionalFinancialInformations();
    await this.populateaddresss();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/financialinstitutioninformationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Financialinstitutioninformationtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Financial Institution Name : 
                 {this.state.data["financialInstitutionName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Financial Institution Branch Name : 
                 {this.state.data["financialInstitutionBranchName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Financial Account : 
                 {this.state.data["financialAccount"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Financial Routing Number : 
                 {this.state.data["financialRoutingNumber"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Financial Information : 
                 {this.state.data["additionalFinancialInformation"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Address : 
                 {this.state.data["address"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Financial Account : 
                  {this.state.financialAccounts.map(Financialaccounttype => 
                      this.state.data["financialAccountId"] == Financialaccounttype._id ? " "+ Financialaccounttype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Financial Routing Number : 
                  {this.state.financialRoutingNumbers.map(Financialroutingnumbertype => 
                      this.state.data["financialRoutingNumberId"] == Financialroutingnumbertype._id ? " "+ Financialroutingnumbertype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Financial Information : 
                  {this.state.additionalFinancialInformations.map(Multidescription70type => 
                      this.state.data["additionalFinancialInformationId"] == Multidescription70type._id ? " "+ Multidescription70type.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Address : 
                  {this.state.addresss.map(Address => 
                      this.state.data["addressId"] == Address._id ? " "+ Address.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default FinancialinstitutioninformationtypeDetails;