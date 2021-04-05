import React, { Component } from "react";
import { getDangerousgoodsregulationinformationtype } from "../../services/dangerousgoodsregulationinformationtypeService";
import { getDangerousgoodsattributetypes } from "../../services/dangerousgoodsattributetypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class DangerousgoodsregulationinformationtypeDetails extends Component{

  state = {
    data: { id: "", dangerousGoodsRegulationCode: "", dangerousGoodsRegulationName: "", dangerousGoodsHazardClass: "", dangerousGoodsPackingGroup: "", dangerousGoodsAttribute: "", dangerousGoodsAttributeId: "", dangerousGoodsRegulationCodeId: "", },
    dangerousGoodsAttributes: [],
    dangerousGoodsRegulationCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const dangerousgoodsregulationinformationtypeId = this.props.match.params.id;
        const { data } = await getDangerousgoodsregulationinformationtype(dangerousgoodsregulationinformationtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatedangerousGoodsAttributes() {
    const { data } = await getDangerousgoodsattributetypes();
    this.setState({ dangerousGoodsAttributes: data });
  }

  async populatedangerousGoodsRegulationCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ dangerousGoodsRegulationCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatedangerousGoodsAttributes();
    await this.populatedangerousGoodsRegulationCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/dangerousgoodsregulationinformationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Dangerousgoodsregulationinformationtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Regulation Code : 
                 {this.state.data["dangerousGoodsRegulationCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Regulation Name : 
                 {this.state.data["dangerousGoodsRegulationName"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Hazard Class : 
                 {this.state.data["dangerousGoodsHazardClass"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Packing Group : 
                 {this.state.data["dangerousGoodsPackingGroup"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Attribute : 
                 {this.state.data["dangerousGoodsAttribute"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Attribute : 
                  {this.state.dangerousGoodsAttributes.map(Dangerousgoodsattributetype => 
                      this.state.data["dangerousGoodsAttributeId"] == Dangerousgoodsattributetype._id ? " "+ Dangerousgoodsattributetype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dangerous Goods Regulation Code : 
                  {this.state.dangerousGoodsRegulationCodes.map(Enumerationlibrary => 
                      this.state.data["dangerousGoodsRegulationCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default DangerousgoodsregulationinformationtypeDetails;