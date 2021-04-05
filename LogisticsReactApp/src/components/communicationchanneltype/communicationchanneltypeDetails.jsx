import React, { Component } from "react";
import { getCommunicationchanneltype } from "../../services/communicationchanneltypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class CommunicationchanneltypeDetails extends Component{

  state = {
    data: { id: "", communicationChannelCode: "", communicationValue: "", communicationChannelName: "", communicationChannelCodeId: "", },
    communicationChannelCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const communicationchanneltypeId = this.props.match.params.id;
        const { data } = await getCommunicationchanneltype(communicationchanneltypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatecommunicationChannelCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ communicationChannelCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatecommunicationChannelCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/communicationchanneltypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Communicationchanneltype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Communication Channel Code : 
                 {this.state.data["communicationChannelCode"]}
              </label>
          </div>
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
          <div className="form-group">
              <label  className="form-control"> Communication Channel Code : 
                  {this.state.communicationChannelCodes.map(Enumerationlibrary => 
                      this.state.data["communicationChannelCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default CommunicationchanneltypeDetails;