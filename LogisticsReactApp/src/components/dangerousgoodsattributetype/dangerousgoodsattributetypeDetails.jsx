import React, { Component } from "react";
import { getDangerousgoodsattributetype } from "../../services/dangerousgoodsattributetypeService";
import { getMeasurementtypes } from "../../services/measurementtypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class DangerousgoodsattributetypeDetails extends Component{

  state = {
    data: { id: "", dangerousGoodsAttributeTypeCode: "", dangerousGoodsAttributeText: "", dangerousGoodsAttributeMeasurement: "", dangerousGoodsAttributeIndicator: "", dangerousGoodsAttributeDateTime: "", dangerousGoodsAttributeMeasurementId: "", dangerousGoodsAttributeTypeCodeId: "", },
    dangerousGoodsAttributeMeasurements: [],
    dangerousGoodsAttributeTypeCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const dangerousgoodsattributetypeId = this.props.match.params.id;
        const { data } = await getDangerousgoodsattributetype(dangerousgoodsattributetypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatedangerousGoodsAttributeMeasurements() {
    const { data } = await getMeasurementtypes();
    this.setState({ dangerousGoodsAttributeMeasurements: data });
  }

  async populatedangerousGoodsAttributeTypeCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ dangerousGoodsAttributeTypeCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatedangerousGoodsAttributeMeasurements();
    await this.populatedangerousGoodsAttributeTypeCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/dangerousgoodsattributetypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Dangerousgoodsattributetype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Attribute Type Code : 
                 {this.state.data["dangerousGoodsAttributeTypeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Attribute Text : 
                 {this.state.data["dangerousGoodsAttributeText"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Attribute Measurement : 
                 {this.state.data["dangerousGoodsAttributeMeasurement"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Attribute Indicator : 
                 {this.state.data["dangerousGoodsAttributeIndicator"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Attribute Date Time : 
                 {this.state.data["dangerousGoodsAttributeDateTime"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Attribute Measurement : 
                  {this.state.dangerousGoodsAttributeMeasurements.map(Measurementtype => 
                      this.state.data["dangerousGoodsAttributeMeasurementId"] == Measurementtype._id ? " "+ Measurementtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Attribute Type Code : 
                  {this.state.dangerousGoodsAttributeTypeCodes.map(Enumerationlibrary => 
                      this.state.data["dangerousGoodsAttributeTypeCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default DangerousgoodsattributetypeDetails;