import React, { Component } from "react";
import { getFinancialaccount } from "../../services/financialaccountService";

class FinancialaccountDetails extends Component{

  state = {
    data: { financialAccountNumber: "", financialAccountName: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const financialaccountId = this.props.match.params.id;
        const { data } = await getFinancialaccount(financialaccountId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async componentDidMount() {
    await this.populateForm();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/financialaccounts");
  };

  render() {
    return (
      <div className="content">
        <h1>Financialaccount Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Financial Account Number : 
                 {this.state.data["financialAccountNumber"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Financial Account Name : 
                 {this.state.data["financialAccountName"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default FinancialaccountDetails;