import React, { Component } from "react";
import { getFinancialroutingnumber } from "../../services/financialroutingnumberService";

class FinancialroutingnumberDetails extends Component{

  state = {
    data: { financialRoutingNumber: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const financialroutingnumberId = this.props.match.params.id;
        const { data } = await getFinancialroutingnumber(financialroutingnumberId);
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
    this.props.history.push("/financialroutingnumbers");
  };

  render() {
    return (
      <div className="content">
        <h1>Financialroutingnumber Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Financial Routing Number : 
                 {this.state.data["financialRoutingNumber"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default FinancialroutingnumberDetails;