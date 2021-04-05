import React, { Component } from "react";
import { getBusinessservice } from "../../services/businessserviceService";

class BusinessserviceDetails extends Component{

  state = {
    data: { BusinessServiceName: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const businessserviceId = this.props.match.params.id;
        const { data } = await getBusinessservice(businessserviceId);
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
    this.props.history.push("/businessservices");
  };

  render() {
    return (
      <div className="content">
        <h1>Businessservice Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control">  Business Service Name : 
                 {this.state.data["BusinessServiceName"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default BusinessserviceDetails;