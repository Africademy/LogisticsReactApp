import React, { Component } from "react";
import { getDescription1000type } from "../../services/description1000typeService";

class Description1000typeDetails extends Component{

  state = {
    data: { id: "", String1000Type: "", languageCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const description1000typeId = this.props.match.params.id;
        const { data } = await getDescription1000type(description1000typeId);
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
    this.props.history.push("/description1000types");
  };

  render() {
    return (
      <div className="content">
        <h1>Description1000type Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  String1000 Type : 
                 {this.state.data["String1000Type"]}
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

export default Description1000typeDetails;