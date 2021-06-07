import React, { Component } from "react";
import { getTransportinstructiontermstype } from "../../services/transportinstructiontermstypeService";
import { getAmounttypes } from "../../services/amounttypeService";
import { getIdentifiertypes } from "../../services/identifiertypeService";
import { getLogisticservicetypes } from "../../services/logisticservicetypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class TransportinstructiontermstypeDetails extends Component{

  state = {
    data: { id: "", transportServiceCategoryType: "", transportCollectChargeAmount: "", transportPaymentMethodTypeCode: "", transportPickUpChargeAmount: "", transportServiceConditionType: "", transportServiceLevelCode: "", routeID: "", logisticService: "", transportCollectChargeAmountId: "", transportPickUpChargeAmountId: "", routeIDId: "", logisticServiceId: "", transportServiceCategoryTypeId: "", transportPaymentMethodTypeCodeId: "", transportServiceConditionTypeId: "", transportServiceLevelCodeId: "", },
    transportCollectChargeAmounts: [],
    transportPickUpChargeAmounts: [],
    routeIDs: [],
    logisticServices: [],
    transportServiceCategoryTypes: [],
    transportPaymentMethodTypeCodes: [],
    transportServiceConditionTypes: [],
    transportServiceLevelCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const transportinstructiontermstypeId = this.props.match.params.id;
        const { data } = await getTransportinstructiontermstype(transportinstructiontermstypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatetransportCollectChargeAmounts() {
    const { data } = await getAmounttypes();
    this.setState({ transportCollectChargeAmounts: data });
  }

  async populatetransportPickUpChargeAmounts() {
    const { data } = await getAmounttypes();
    this.setState({ transportPickUpChargeAmounts: data });
  }

  async populaterouteIDs() {
    const { data } = await getIdentifiertypes();
    this.setState({ routeIDs: data });
  }

  async populatelogisticServices() {
    const { data } = await getLogisticservicetypes();
    this.setState({ logisticServices: data });
  }

  async populatetransportServiceCategoryTypes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ transportServiceCategoryTypes: data });
  }

  async populatetransportPaymentMethodTypeCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ transportPaymentMethodTypeCodes: data });
  }

  async populatetransportServiceConditionTypes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ transportServiceConditionTypes: data });
  }

  async populatetransportServiceLevelCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ transportServiceLevelCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatetransportCollectChargeAmounts();
    await this.populatetransportPickUpChargeAmounts();
    await this.populaterouteIDs();
    await this.populatelogisticServices();
    await this.populatetransportServiceCategoryTypes();
    await this.populatetransportPaymentMethodTypeCodes();
    await this.populatetransportServiceConditionTypes();
    await this.populatetransportServiceLevelCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/transportinstructiontermstypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportinstructiontermstype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Service Category Type : 
                 {this.state.data["transportServiceCategoryType"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Collect Charge Amount : 
                 {this.state.data["transportCollectChargeAmount"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Payment Method Type Code : 
                 {this.state.data["transportPaymentMethodTypeCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Pick Up Charge Amount : 
                 {this.state.data["transportPickUpChargeAmount"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Service Condition Type : 
                 {this.state.data["transportServiceConditionType"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Service Level Code : 
                 {this.state.data["transportServiceLevelCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Route I D : 
                 {this.state.data["routeID"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Service : 
                 {this.state.data["logisticService"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Collect Charge Amount : 
                  {this.state.transportCollectChargeAmounts.map(Amounttype => 
                      this.state.data["transportCollectChargeAmountId"] == Amounttype._id ? " "+ Amounttype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Pick Up Charge Amount : 
                  {this.state.transportPickUpChargeAmounts.map(Amounttype => 
                      this.state.data["transportPickUpChargeAmountId"] == Amounttype._id ? " "+ Amounttype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Route I D : 
                  {this.state.routeIDs.map(Identifiertype => 
                      this.state.data["routeIDId"] == Identifiertype._id ? " "+ Identifiertype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Service : 
                  {this.state.logisticServices.map(Logisticservicetype => 
                      this.state.data["logisticServiceId"] == Logisticservicetype._id ? " "+ Logisticservicetype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Service Category Type : 
                  {this.state.transportServiceCategoryTypes.map(Enumerationlibrary => 
                      this.state.data["transportServiceCategoryTypeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Payment Method Type Code : 
                  {this.state.transportPaymentMethodTypeCodes.map(Enumerationlibrary => 
                      this.state.data["transportPaymentMethodTypeCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Service Condition Type : 
                  {this.state.transportServiceConditionTypes.map(Enumerationlibrary => 
                      this.state.data["transportServiceConditionTypeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Service Level Code : 
                  {this.state.transportServiceLevelCodes.map(Enumerationlibrary => 
                      this.state.data["transportServiceLevelCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default TransportinstructiontermstypeDetails;