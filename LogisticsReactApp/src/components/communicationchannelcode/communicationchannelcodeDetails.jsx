import React, { Component } from "react";
import { getCommunicationchannelcode } from "../../services/communicationchannelcodeService";

class CommunicationchannelcodeDetails extends Component{

  state = {
    data: { codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const communicationchannelcodeId = this.props.match.params.id;
        const { data } = await getCommunicationchannelcode(communicationchannelcodeId);
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
    this.props.history.push("/communicationchannelcodes");
  };

  render() {
    return (
      <div className="content">
        <h1>Communicationchannelcode Details</h1>
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

export default CommunicationchannelcodeDetails;