import React, { Component } from "react";
import { getStandardbusinessdocumentheader } from "../../services/standardbusinessdocumentheaderService";

class StandardbusinessdocumentheaderDetails extends Component{

  state = {
    data: { HeaderVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const standardbusinessdocumentheaderId = this.props.match.params.id;
        const { data } = await getStandardbusinessdocumentheader(standardbusinessdocumentheaderId);
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
    this.props.history.push("/standardbusinessdocumentheaders");
  };

  render() {
    return (
      <div className="content">
        <h1>Standardbusinessdocumentheader Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control">  Header Version : 
                 {this.state.data["HeaderVersion"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default StandardbusinessdocumentheaderDetails;