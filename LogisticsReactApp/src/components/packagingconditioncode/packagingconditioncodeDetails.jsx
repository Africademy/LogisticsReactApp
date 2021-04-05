import React, { Component } from "react";
import { getPackagingconditioncode } from "../../services/packagingconditioncodeService";

class PackagingconditioncodeDetails extends Component{

  state = {
    data: { codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const packagingconditioncodeId = this.props.match.params.id;
        const { data } = await getPackagingconditioncode(packagingconditioncodeId);
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
    this.props.history.push("/packagingconditioncodes");
  };

  render() {
    return (
      <div className="content">
        <h1>Packagingconditioncode Details</h1>
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

export default PackagingconditioncodeDetails;