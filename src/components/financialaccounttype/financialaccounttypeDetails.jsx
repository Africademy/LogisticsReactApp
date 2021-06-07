import React, { Component } from "react";
import { getFinancialaccounttype } from "../../services/financialaccounttypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class FinancialaccounttypeDetails extends Component{

  state = {
    data: { id: "", financialAccountNumber: "", financialAccountNumberTypeCode: "", financialAccountName: "", financialAccountNumberTypeCodeId: "", },
    financialAccountNumberTypeCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const financialaccounttypeId = this.props.match.params.id;
        const { data } = await getFinancialaccounttype(financialaccounttypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatefinancialAccountNumberTypeCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ financialAccountNumberTypeCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatefinancialAccountNumberTypeCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/financialaccounttypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Financialaccounttype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Financial Account Number : 
                 {this.state.data["financialAccountNumber"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Financial Account Number Type Code : 
                 {this.state.data["financialAccountNumberTypeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Financial Account Name : 
                 {this.state.data["financialAccountName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Financial Account Number Type Code : 
                  {this.state.financialAccountNumberTypeCodes.map(Enumerationlibrary => 
                      this.state.data["financialAccountNumberTypeCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default FinancialaccounttypeDetails;