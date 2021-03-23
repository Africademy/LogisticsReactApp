import React, { Component } from "react";
import { getPackagingmarkingtype } from "../../services/packagingmarkingtypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class PackagingmarkingtypeDetails extends Component{

  state = {
    data: { id: "", markingTypeCode: "", markingContentDateTime: "", markingContentText: "", markingTypeCodeId: "", },
    markingTypeCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const packagingmarkingtypeId = this.props.match.params.id;
        const { data } = await getPackagingmarkingtype(packagingmarkingtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatemarkingTypeCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ markingTypeCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatemarkingTypeCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/packagingmarkingtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Packagingmarkingtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Marking Type Code : 
                 {this.state.data["markingTypeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Marking Content Date Time : 
                 {this.state.data["markingContentDateTime"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Marking Content Text : 
                 {this.state.data["markingContentText"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Marking Type Code : 
                  {this.state.markingTypeCodes.map(Enumerationlibrary => 
                      this.state.data["markingTypeCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default PackagingmarkingtypeDetails;