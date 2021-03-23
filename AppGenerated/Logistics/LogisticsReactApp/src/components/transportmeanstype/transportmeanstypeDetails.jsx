import React, { Component } from "react";
import { getTransportmeanstype } from "../../services/transportmeanstypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class TransportmeanstypeDetails extends Component{

  state = {
    data: { id: "", transportMeansType: "", transportMeansID: "", transportMeansName: "", transportMeansTypeId: "", },
    transportMeansTypes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const transportmeanstypeId = this.props.match.params.id;
        const { data } = await getTransportmeanstype(transportmeanstypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatetransportMeansTypes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ transportMeansTypes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatetransportMeansTypes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/transportmeanstypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportmeanstype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Means Type : 
                 {this.state.data["transportMeansType"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Means I D : 
                 {this.state.data["transportMeansID"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Means Name : 
                 {this.state.data["transportMeansName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Means Type : 
                  {this.state.transportMeansTypes.map(Enumerationlibrary => 
                      this.state.data["transportMeansTypeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default TransportmeanstypeDetails;