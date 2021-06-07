import React, { Component } from "react";
import { getPackagetotaltype } from "../../services/packagetotaltypeService";
import { getMeasurementtypes } from "../../services/measurementtypeService";
import { getReturnablepackagingtypes } from "../../services/returnablepackagingtypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class PackagetotaltypeDetails extends Component{

  state = {
    data: { id: "", packageTypeCode: "", totalPackageQuantity: "", totalGrossVolume: "", totalGrossWeight: "", returnablePackaging: "", totalGrossVolumeId: "", totalGrossWeightId: "", returnablePackagingId: "", packageTypeCodeId: "", },
    totalGrossVolumes: [],
    totalGrossWeights: [],
    returnablePackagings: [],
    packageTypeCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const packagetotaltypeId = this.props.match.params.id;
        const { data } = await getPackagetotaltype(packagetotaltypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatetotalGrossVolumes() {
    const { data } = await getMeasurementtypes();
    this.setState({ totalGrossVolumes: data });
  }

  async populatetotalGrossWeights() {
    const { data } = await getMeasurementtypes();
    this.setState({ totalGrossWeights: data });
  }

  async populatereturnablePackagings() {
    const { data } = await getReturnablepackagingtypes();
    this.setState({ returnablePackagings: data });
  }

  async populatepackageTypeCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ packageTypeCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatetotalGrossVolumes();
    await this.populatetotalGrossWeights();
    await this.populatereturnablePackagings();
    await this.populatepackageTypeCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/packagetotaltypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Packagetotaltype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Package Type Code : 
                 {this.state.data["packageTypeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Total Package Quantity : 
                 {this.state.data["totalPackageQuantity"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Total Gross Volume : 
                 {this.state.data["totalGrossVolume"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Total Gross Weight : 
                 {this.state.data["totalGrossWeight"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Returnable Packaging : 
                 {this.state.data["returnablePackaging"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Total Gross Volume : 
                  {this.state.totalGrossVolumes.map(Measurementtype => 
                      this.state.data["totalGrossVolumeId"] == Measurementtype._id ? " "+ Measurementtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Total Gross Weight : 
                  {this.state.totalGrossWeights.map(Measurementtype => 
                      this.state.data["totalGrossWeightId"] == Measurementtype._id ? " "+ Measurementtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Returnable Packaging : 
                  {this.state.returnablePackagings.map(Returnablepackagingtype => 
                      this.state.data["returnablePackagingId"] == Returnablepackagingtype._id ? " "+ Returnablepackagingtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Package Type Code : 
                  {this.state.packageTypeCodes.map(Enumerationlibrary => 
                      this.state.data["packageTypeCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default PackagetotaltypeDetails;