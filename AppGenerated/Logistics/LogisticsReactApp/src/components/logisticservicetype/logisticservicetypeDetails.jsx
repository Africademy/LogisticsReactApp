import React, { Component } from "react";
import { getLogisticservicetype } from "../../services/logisticservicetypeService";
import { getAmounttypes } from "../../services/amounttypeService";
import { getTransactionalpartytypes } from "../../services/transactionalpartytypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class LogisticservicetypeDetails extends Component{

  state = {
    data: { id: "", logisticServiceRequirementCode: "", cashOnDeliveryAmount: "", insuranceValue: "", logisticServiceChargeAmount: "", cashOnDeliveryPayer: "", cashOnDeliveryBillTo: "", cashOnDeliveryAmountId: "", insuranceValueId: "", logisticServiceChargeAmountId: "", cashOnDeliveryPayerId: "", cashOnDeliveryBillToId: "", logisticServiceRequirementCodeId: "", },
    cashOnDeliveryAmounts: [],
    insuranceValues: [],
    logisticServiceChargeAmounts: [],
    cashOnDeliveryPayers: [],
    cashOnDeliveryBillTos: [],
    logisticServiceRequirementCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const logisticservicetypeId = this.props.match.params.id;
        const { data } = await getLogisticservicetype(logisticservicetypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatecashOnDeliveryAmounts() {
    const { data } = await getAmounttypes();
    this.setState({ cashOnDeliveryAmounts: data });
  }

  async populateinsuranceValues() {
    const { data } = await getAmounttypes();
    this.setState({ insuranceValues: data });
  }

  async populatelogisticServiceChargeAmounts() {
    const { data } = await getAmounttypes();
    this.setState({ logisticServiceChargeAmounts: data });
  }

  async populatecashOnDeliveryPayers() {
    const { data } = await getTransactionalpartytypes();
    this.setState({ cashOnDeliveryPayers: data });
  }

  async populatecashOnDeliveryBillTos() {
    const { data } = await getTransactionalpartytypes();
    this.setState({ cashOnDeliveryBillTos: data });
  }

  async populatelogisticServiceRequirementCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ logisticServiceRequirementCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatecashOnDeliveryAmounts();
    await this.populateinsuranceValues();
    await this.populatelogisticServiceChargeAmounts();
    await this.populatecashOnDeliveryPayers();
    await this.populatecashOnDeliveryBillTos();
    await this.populatelogisticServiceRequirementCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/logisticservicetypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Logisticservicetype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Service Requirement Code : 
                 {this.state.data["logisticServiceRequirementCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Cash On Delivery Amount : 
                 {this.state.data["cashOnDeliveryAmount"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Insurance Value : 
                 {this.state.data["insuranceValue"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Service Charge Amount : 
                 {this.state.data["logisticServiceChargeAmount"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Cash On Delivery Payer : 
                 {this.state.data["cashOnDeliveryPayer"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Cash On Delivery Bill To : 
                 {this.state.data["cashOnDeliveryBillTo"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Cash On Delivery Amount : 
                  {this.state.cashOnDeliveryAmounts.map(Amounttype => 
                      this.state.data["cashOnDeliveryAmountId"] == Amounttype._id ? " "+ Amounttype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Insurance Value : 
                  {this.state.insuranceValues.map(Amounttype => 
                      this.state.data["insuranceValueId"] == Amounttype._id ? " "+ Amounttype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Service Charge Amount : 
                  {this.state.logisticServiceChargeAmounts.map(Amounttype => 
                      this.state.data["logisticServiceChargeAmountId"] == Amounttype._id ? " "+ Amounttype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Cash On Delivery Payer : 
                  {this.state.cashOnDeliveryPayers.map(Transactionalpartytype => 
                      this.state.data["cashOnDeliveryPayerId"] == Transactionalpartytype._id ? " "+ Transactionalpartytype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Cash On Delivery Bill To : 
                  {this.state.cashOnDeliveryBillTos.map(Transactionalpartytype => 
                      this.state.data["cashOnDeliveryBillToId"] == Transactionalpartytype._id ? " "+ Transactionalpartytype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Logistic Service Requirement Code : 
                  {this.state.logisticServiceRequirementCodes.map(Enumerationlibrary => 
                      this.state.data["logisticServiceRequirementCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default LogisticservicetypeDetails;