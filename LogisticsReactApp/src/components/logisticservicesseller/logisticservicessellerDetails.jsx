import React, { Component } from "react";
import { getLogisticservicesseller } from "../../services/logisticservicessellerService";

class LogisticservicessellerDetails extends Component{

  state = {
    data: { gln: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const logisticservicessellerId = this.props.match.params.id;
        const { data } = await getLogisticservicesseller(logisticservicessellerId);
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
    this.props.history.push("/logisticservicessellers");
  };

  render() {
    return (
      <div className="content">
        <h1>Logisticservicesseller Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Gln : 
                 {this.state.data["gln"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default LogisticservicessellerDetails;