import React, { Component } from "react";
import { getCommunicationchannel } from "../../services/communicationchannelService";

class CommunicationchannelDetails extends Component{

  state = {
    data: { communicationValue: "", communicationChannelName: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const communicationchannelId = this.props.match.params.id;
        const { data } = await getCommunicationchannel(communicationchannelId);
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
    this.props.history.push("/communicationchannels");
  };

  render() {
    return (
      <div className="content">
        <h1>Communicationchannel Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Communication Value : 
                 {this.state.data["communicationValue"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Communication Channel Name : 
                 {this.state.data["communicationChannelName"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default CommunicationchannelDetails;