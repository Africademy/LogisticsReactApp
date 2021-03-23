import React, { Component } from "react";
import { getEcomstringattributevaluepairlist } from "../../services/ecomstringattributevaluepairlistService";

class EcomstringattributevaluepairlistDetails extends Component{

  state = {
    data: { attributeName: "", qualifierCodeName: "", qualifierCodeList: "", qualifierCodeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const ecomstringattributevaluepairlistId = this.props.match.params.id;
        const { data } = await getEcomstringattributevaluepairlist(ecomstringattributevaluepairlistId);
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
    this.props.history.push("/ecomstringattributevaluepairlists");
  };

  render() {
    return (
      <div className="content">
        <h1>Ecomstringattributevaluepairlist Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Attribute Name : 
                 {this.state.data["attributeName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Qualifier Code Name : 
                 {this.state.data["qualifierCodeName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Qualifier Code List : 
                 {this.state.data["qualifierCodeList"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Qualifier Code List Version : 
                 {this.state.data["qualifierCodeListVersion"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default EcomstringattributevaluepairlistDetails;