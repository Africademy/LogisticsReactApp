import React, { Component } from "react";
import { getDescription70type } from "../../services/description70typeService";

class Description70typeDetails extends Component{

  state = {
    data: { id: "", languageCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const description70typeId = this.props.match.params.id;
        const { data } = await getDescription70type(description70typeId);
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
    this.props.history.push("/description70types");
  };

  render() {
    return (
      <div className="content">
        <h1>Description70type Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Language Code : 
                 {this.state.data["languageCode"]}
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

export default Description70typeDetails;