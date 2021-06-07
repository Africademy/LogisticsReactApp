import React, { Component } from "react";
import { getLogisticservicesbuyer } from "../../services/logisticservicesbuyerService";

class LogisticservicesbuyerDetails extends Component{

  state = {
    data: { gln: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const logisticservicesbuyerId = this.props.match.params.id;
        const { data } = await getLogisticservicesbuyer(logisticservicesbuyerId);
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
    this.props.history.push("/logisticservicesbuyers");
  };

  render() {
    return (
      <div className="content">
        <h1>Logisticservicesbuyer Details</h1>
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

export default LogisticservicesbuyerDetails;