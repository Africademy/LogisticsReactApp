import React, { Component } from "react";
import { getTransportreferencetype } from "../../services/transportreferencetypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class TransportreferencetypeDetails extends Component{

  state = {
    data: { id: "", creationDateTime: "", revisionNumber: "", lineItemNumber: "", transportReferenceTypeCode: "", transportReferenceTypeCodeId: "", },
    transportReferenceTypeCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const transportreferencetypeId = this.props.match.params.id;
        const { data } = await getTransportreferencetype(transportreferencetypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatetransportReferenceTypeCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ transportReferenceTypeCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatetransportReferenceTypeCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/transportreferencetypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportreferencetype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Creation Date Time : 
                 {this.state.data["creationDateTime"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Revision Number : 
                 {this.state.data["revisionNumber"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Line Item Number : 
                 {this.state.data["lineItemNumber"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Reference Type Code : 
                 {this.state.data["transportReferenceTypeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Reference Type Code : 
                  {this.state.transportReferenceTypeCodes.map(Enumerationlibrary => 
                      this.state.data["transportReferenceTypeCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default TransportreferencetypeDetails;