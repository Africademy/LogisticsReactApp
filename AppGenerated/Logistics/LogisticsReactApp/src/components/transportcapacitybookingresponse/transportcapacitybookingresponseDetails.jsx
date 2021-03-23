import React, { Component } from "react";
import { getTransportcapacitybookingresponse } from "../../services/transportcapacitybookingresponseService";
import { getEntityidentificationtypes } from "../../services/entityidentificationtypeService";
import { getEcomstringattributevaluepairlists } from "../../services/ecomstringattributevaluepairlistService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";
import { getTransportcapacitybookings } from "../../services/transportcapacitybookingService";

class TransportcapacitybookingresponseDetails extends Component{

  state = {
    data: { id: "", creationDateTime: "", documentStatusCode: "", documentActionCode: "", documentStructureVersion: "", lastUpdateDateTime: "", revisionNumber: "", extension: "", documentEffectiveDate: "", avpList: "", transportCapacityBookingResponseIdentification: "", transportCapacityBookingStatusCode: "", logisticServicesBuyer: "", logisticServicesSeller: "", transportCapacityBooking: "", transportCapacityBookingResponseIdentificationId: "", avpListId: "", documentStatusCodeId: "", documentActionCodeId: "", transportCapacityBookingStatusCodeId: "", logisticServicesBuyerId: "", logisticServicesSellerId: "", transportCapacityBookingId: "", },
    transportCapacityBookingResponseIdentifications: [],
    avpLists: [],
    documentStatusCodes: [],
    documentActionCodes: [],
    transportCapacityBookingStatusCodes: [],
    logisticServicesBuyers: [],
    logisticServicesSellers: [],
    transportCapacityBookings: [],
    errors: {}
  };

  async populateForm() {
    try {
        const transportcapacitybookingresponseId = this.props.match.params.id;
        const { data } = await getTransportcapacitybookingresponse(transportcapacitybookingresponseId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatetransportCapacityBookingResponseIdentifications() {
    const { data } = await getEntityidentificationtypes();
    this.setState({ transportCapacityBookingResponseIdentifications: data });
  }

  async populateavpLists() {
    const { data } = await getEcomstringattributevaluepairlists();
    this.setState({ avpLists: data });
  }

  async populatedocumentStatusCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ documentStatusCodes: data });
  }

  async populatedocumentActionCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ documentActionCodes: data });
  }

  async populatetransportCapacityBookingStatusCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ transportCapacityBookingStatusCodes: data });
  }

  async populatelogisticServicesBuyers() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ logisticServicesBuyers: data });
  }

  async populatelogisticServicesSellers() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ logisticServicesSellers: data });
  }

  async populatetransportCapacityBookings() {
    const { data } = await getTransportcapacitybookings();
    this.setState({ transportCapacityBookings: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatetransportCapacityBookingResponseIdentifications();
    await this.populateavpLists();
    await this.populatedocumentStatusCodes();
    await this.populatedocumentActionCodes();
    await this.populatetransportCapacityBookingStatusCodes();
    await this.populatelogisticServicesBuyers();
    await this.populatelogisticServicesSellers();
    await this.populatetransportCapacityBookings();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/transportcapacitybookingresponses");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportcapacitybookingresponse Details</h1>
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
              <label  className="form-control"> Document Status Code : 
                 {this.state.data["documentStatusCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Document Action Code : 
                 {this.state.data["documentActionCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Document Structure Version : 
                 {this.state.data["documentStructureVersion"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Last Update Date Time : 
                 {this.state.data["lastUpdateDateTime"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Revision Number : 
                 {this.state.data["revisionNumber"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Extension : 
                 {this.state.data["extension"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Document Effective Date : 
                 {this.state.data["documentEffectiveDate"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Avp List : 
                 {this.state.data["avpList"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Capacity Booking Response Identification : 
                 {this.state.data["transportCapacityBookingResponseIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Capacity Booking Status Code : 
                 {this.state.data["transportCapacityBookingStatusCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Services Buyer : 
                 {this.state.data["logisticServicesBuyer"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Services Seller : 
                 {this.state.data["logisticServicesSeller"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Capacity Booking : 
                 {this.state.data["transportCapacityBooking"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Capacity Booking Response Identification : 
                  {this.state.transportCapacityBookingResponseIdentifications.map(Entityidentificationtype => 
                      this.state.data["transportCapacityBookingResponseIdentificationId"] == Entityidentificationtype._id ? " "+ Entityidentificationtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Avp List : 
                  {this.state.avpLists.map(Ecomstringattributevaluepairlist => 
                      this.state.data["avpListId"] == Ecomstringattributevaluepairlist._id ? " "+ Ecomstringattributevaluepairlist.qualifierCodeName : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Document Status Code : 
                  {this.state.documentStatusCodes.map(Enumerationlibrary => 
                      this.state.data["documentStatusCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Document Action Code : 
                  {this.state.documentActionCodes.map(Enumerationlibrary => 
                      this.state.data["documentActionCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Capacity Booking Status Code : 
                  {this.state.transportCapacityBookingStatusCodes.map(Enumerationlibrary => 
                      this.state.data["transportCapacityBookingStatusCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Services Buyer : 
                  {this.state.logisticServicesBuyers.map(Enumerationlibrary => 
                      this.state.data["logisticServicesBuyerId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Services Seller : 
                  {this.state.logisticServicesSellers.map(Enumerationlibrary => 
                      this.state.data["logisticServicesSellerId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Capacity Booking : 
                  {this.state.transportCapacityBookings.map(Transportcapacitybooking => 
                      this.state.data["transportCapacityBookingId"] == Transportcapacitybooking._id ? " "+ Transportcapacitybooking.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default TransportcapacitybookingresponseDetails;