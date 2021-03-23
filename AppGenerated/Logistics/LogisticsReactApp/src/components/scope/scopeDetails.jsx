import React, { Component } from "react";
import { getScope } from "../../services/scopeService";

class ScopeDetails extends Component{

  state = {
    data: { Type: "", InstanceIdentifier: "", Identifier: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const scopeId = this.props.match.params.id;
        const { data } = await getScope(scopeId);
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
    this.props.history.push("/scopes");
  };

  render() {
    return (
      <div className="content">
        <h1>Scope Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control">  Type : 
                 {this.state.data["Type"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Instance Identifier : 
                 {this.state.data["InstanceIdentifier"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Identifier : 
                 {this.state.data["Identifier"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default ScopeDetails;