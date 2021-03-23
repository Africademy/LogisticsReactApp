import React, { Component } from "react";
import { getFinancialroutingnumbertype } from "../../services/financialroutingnumbertypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class FinancialroutingnumbertypeDetails extends Component{

  state = {
    data: { id: "", financialRoutingNumber: "", financialRoutingNumberTypeCode: "", financialRoutingNumberTypeCodeId: "", },
    financialRoutingNumberTypeCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const financialroutingnumbertypeId = this.props.match.params.id;
        const { data } = await getFinancialroutingnumbertype(financialroutingnumbertypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatefinancialRoutingNumberTypeCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ financialRoutingNumberTypeCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatefinancialRoutingNumberTypeCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/financialroutingnumbertypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Financialroutingnumbertype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Financial Routing Number : 
                 {this.state.data["financialRoutingNumber"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Financial Routing Number Type Code : 
                 {this.state.data["financialRoutingNumberTypeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Financial Routing Number Type Code : 
                  {this.state.financialRoutingNumberTypeCodes.map(Enumerationlibrary => 
                      this.state.data["financialRoutingNumberTypeCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default FinancialroutingnumbertypeDetails;