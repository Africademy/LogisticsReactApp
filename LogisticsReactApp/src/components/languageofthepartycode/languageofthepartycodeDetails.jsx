import React, { Component } from "react";
import { getLanguageofthepartycode } from "../../services/languageofthepartycodeService";

class LanguageofthepartycodeDetails extends Component{

  state = {
    data: { codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const languageofthepartycodeId = this.props.match.params.id;
        const { data } = await getLanguageofthepartycode(languageofthepartycodeId);
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
    this.props.history.push("/languageofthepartycodes");
  };

  render() {
    return (
      <div className="content">
        <h1>Languageofthepartycode Details</h1>
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

export default LanguageofthepartycodeDetails;