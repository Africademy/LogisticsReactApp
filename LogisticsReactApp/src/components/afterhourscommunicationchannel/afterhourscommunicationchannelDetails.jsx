import React, { Component } from "react";
import { getAfterhourscommunicationchannel } from "../../services/afterhourscommunicationchannelService";

class AfterhourscommunicationchannelDetails extends Component{

  state = {
    data: { communicationValue: "", communicationChannelName: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const afterhourscommunicationchannelId = this.props.match.params.id;
        const { data } = await getAfterhourscommunicationchannel(afterhourscommunicationchannelId);
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
    this.props.history.push("/afterhourscommunicationchannels");
  };

  render() {
    return (
      <div className="content">
        <h1>Afterhourscommunicationchannel Details</h1>
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

export default AfterhourscommunicationchannelDetails;