import React, { Component } from "react";
import { getAmounttype } from "../../services/amounttypeService";

class AmounttypeDetails extends Component{

  state = {
    data: { id: "", currencyCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const amounttypeId = this.props.match.params.id;
        const { data } = await getAmounttype(amounttypeId);
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
    this.props.history.push("/amounttypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Amounttype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Currency Code : 
                 {this.state.data["currencyCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Code List Version : 
                 {this.state.data["codeListVersion"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default AmounttypeDetails;