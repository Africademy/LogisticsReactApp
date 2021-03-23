import React, { Component } from "react";
import { getFinaldestinationcountry } from "../../services/finaldestinationcountryService";

class FinaldestinationcountryDetails extends Component{

  state = {
    data: { codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const finaldestinationcountryId = this.props.match.params.id;
        const { data } = await getFinaldestinationcountry(finaldestinationcountryId);
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
    this.props.history.push("/finaldestinationcountrys");
  };

  render() {
    return (
      <div className="content">
        <h1>Finaldestinationcountry Details</h1>
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

export default FinaldestinationcountryDetails;