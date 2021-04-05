import React, { Component } from "react";
import { getCurrencyofpartycode } from "../../services/currencyofpartycodeService";

class CurrencyofpartycodeDetails extends Component{

  state = {
    data: { codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const currencyofpartycodeId = this.props.match.params.id;
        const { data } = await getCurrencyofpartycode(currencyofpartycodeId);
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
    this.props.history.push("/currencyofpartycodes");
  };

  render() {
    return (
      <div className="content">
        <h1>Currencyofpartycode Details</h1>
        <form onSubmit={this.handleSubmit}>

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

export default CurrencyofpartycodeDetails;