import React, { Component } from "react";
import { getTransportcargocharacteristicstype } from "../../services/transportcargocharacteristicstypeService";

class TransportcargocharacteristicstypeDetails extends Component{

  state = {
    data: { id: "", cargoTypeCode: "", harmonizedSystemCode: "", cargoTypeDescription: "", countryOfOriginCode: "", finalDestinationCountry: "", totalGrossVolume: "", totalGrossWeight: "", totalTransportNetWeight: "", totalChargeableWeight: "", declaredWeightForCustoms: "", totalLoadingLength: "", associatedInvoiceAmount: "", declaredValueForCustoms: "", totalPackageQuantity: "", totalItemQuantity: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const transportcargocharacteristicstypeId = this.props.match.params.id;
        const { data } = await getTransportcargocharacteristicstype(transportcargocharacteristicstypeId);
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
    this.props.history.push("/transportcargocharacteristicstypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportcargocharacteristicstype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Cargo Type Code : 
                 {this.state.data["cargoTypeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Harmonized System Code : 
                 {this.state.data["harmonizedSystemCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Cargo Type Description : 
                 {this.state.data["cargoTypeDescription"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Country Of Origin Code : 
                 {this.state.data["countryOfOriginCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Final Destination Country : 
                 {this.state.data["finalDestinationCountry"]}
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
              <label  className="form-control"> Total Transport Net Weight : 
                 {this.state.data["totalTransportNetWeight"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Total Chargeable Weight : 
                 {this.state.data["totalChargeableWeight"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Declared Weight For Customs : 
                 {this.state.data["declaredWeightForCustoms"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Total Loading Length : 
                 {this.state.data["totalLoadingLength"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Associated Invoice Amount : 
                 {this.state.data["associatedInvoiceAmount"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Declared Value For Customs : 
                 {this.state.data["declaredValueForCustoms"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Total Package Quantity : 
                 {this.state.data["totalPackageQuantity"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Total Item Quantity : 
                 {this.state.data["totalItemQuantity"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default TransportcargocharacteristicstypeDetails;