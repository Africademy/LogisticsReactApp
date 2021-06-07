import React, { Component } from "react";
import { getTransportcapacitybookingspacerequirement } from "../../services/transportcapacitybookingspacerequirementService";
import { getMeasurementtypes } from "../../services/measurementtypeService";
import { getTransportcargocharacteristicstypes } from "../../services/transportcargocharacteristicstypeService";
import { getTransportequipmenttypes } from "../../services/transportequipmenttypeService";
import { getDimensiontypes } from "../../services/dimensiontypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";
import { getPassengerinformationtypes } from "../../services/passengerinformationtypeService";
import { getTransportmeanstypes } from "../../services/transportmeanstypeService";

class TransportcapacitybookingspacerequirementDetails extends Component{

  state = {
    data: { id: "", transportCargoCharacteristics: "", packageTotal: "", includedTransportMeans: "", passengerInformation: "", includedTransportEquipment: "", numberOfPiecesOfEquipment: "", transportEquipmentWeight: "", dimension: "", transportEquipmentWeightId: "", transportCargoCharacteristicsId: "", includedTransportEquipmentId: "", dimensionId: "", packageTotalId: "", passengerInformationId: "", includedTransportMeansId: "", },
    transportEquipmentWeights: [],
    transportCargoCharacteristicss: [],
    includedTransportEquipments: [],
    dimensions: [],
    packageTotals: [],
    passengerInformations: [],
    includedTransportMeanss: [],
    errors: {}
  };

  async populateForm() {
    try {
        const transportcapacitybookingspacerequirementId = this.props.match.params.id;
        const { data } = await getTransportcapacitybookingspacerequirement(transportcapacitybookingspacerequirementId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatetransportEquipmentWeights() {
    const { data } = await getMeasurementtypes();
    this.setState({ transportEquipmentWeights: data });
  }

  async populatetransportCargoCharacteristicss() {
    const { data } = await getTransportcargocharacteristicstypes();
    this.setState({ transportCargoCharacteristicss: data });
  }

  async populateincludedTransportEquipments() {
    const { data } = await getTransportequipmenttypes();
    this.setState({ includedTransportEquipments: data });
  }

  async populatedimensions() {
    const { data } = await getDimensiontypes();
    this.setState({ dimensions: data });
  }

  async populatepackageTotals() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ packageTotals: data });
  }

  async populatepassengerInformations() {
    const { data } = await getPassengerinformationtypes();
    this.setState({ passengerInformations: data });
  }

  async populateincludedTransportMeanss() {
    const { data } = await getTransportmeanstypes();
    this.setState({ includedTransportMeanss: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatetransportEquipmentWeights();
    await this.populatetransportCargoCharacteristicss();
    await this.populateincludedTransportEquipments();
    await this.populatedimensions();
    await this.populatepackageTotals();
    await this.populatepassengerInformations();
    await this.populateincludedTransportMeanss();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/transportcapacitybookingspacerequirements");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportcapacitybookingspacerequirement Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Cargo Characteristics : 
                 {this.state.data["transportCargoCharacteristics"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Package Total : 
                 {this.state.data["packageTotal"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Included Transport Means : 
                 {this.state.data["includedTransportMeans"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Passenger Information : 
                 {this.state.data["passengerInformation"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Included Transport Equipment : 
                 {this.state.data["includedTransportEquipment"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Number Of Pieces Of Equipment : 
                 {this.state.data["numberOfPiecesOfEquipment"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Equipment Weight : 
                 {this.state.data["transportEquipmentWeight"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dimension : 
                 {this.state.data["dimension"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Equipment Weight : 
                  {this.state.transportEquipmentWeights.map(Measurementtype => 
                      this.state.data["transportEquipmentWeightId"] == Measurementtype._id ? " "+ Measurementtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Cargo Characteristics : 
                  {this.state.transportCargoCharacteristicss.map(Transportcargocharacteristicstype => 
                      this.state.data["transportCargoCharacteristicsId"] == Transportcargocharacteristicstype._id ? " "+ Transportcargocharacteristicstype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Included Transport Equipment : 
                  {this.state.includedTransportEquipments.map(Transportequipmenttype => 
                      this.state.data["includedTransportEquipmentId"] == Transportequipmenttype._id ? " "+ Transportequipmenttype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Dimension : 
                  {this.state.dimensions.map(Dimensiontype => 
                      this.state.data["dimensionId"] == Dimensiontype._id ? " "+ Dimensiontype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Package Total : 
                  {this.state.packageTotals.map(Enumerationlibrary => 
                      this.state.data["packageTotalId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Passenger Information : 
                  {this.state.passengerInformations.map(Passengerinformationtype => 
                      this.state.data["passengerInformationId"] == Passengerinformationtype._id ? " "+ Passengerinformationtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Included Transport Means : 
                  {this.state.includedTransportMeanss.map(Transportmeanstype => 
                      this.state.data["includedTransportMeansId"] == Transportmeanstype._id ? " "+ Transportmeanstype.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default TransportcapacitybookingspacerequirementDetails;