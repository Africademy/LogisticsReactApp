import React, { Component } from "react";
import { getTransactionalpartytype } from "../../services/transactionalpartytypeService";
import { getAdditionalpartyidentificationtypes } from "../../services/additionalpartyidentificationtypeService";
import { getDutyfeetaxregistrationtypes } from "../../services/dutyfeetaxregistrationtypeService";
import { getFinancialinstitutioninformationtypes } from "../../services/financialinstitutioninformationtypeService";
import { getOrganisationtypes } from "../../services/organisationtypeService";
import { getAddresss } from "../../services/addressService";
import { getContacttypes } from "../../services/contacttypeService";

class TransactionalpartytypeDetails extends Component{

  state = {
    data: { id: "", gln: "", additionalPartyIdentification: "", address: "", contact: "", dutyFeeTaxRegistration: "", organisationDetails: "", financialInstitutionInformation: "", additionalPartyIdentificationId: "", dutyFeeTaxRegistrationId: "", financialInstitutionInformationId: "", organisationDetailsId: "", addressId: "", contactId: "", },
    additionalPartyIdentifications: [],
    dutyFeeTaxRegistrations: [],
    financialInstitutionInformations: [],
    organisationDetailss: [],
    addresss: [],
    contacts: [],
    errors: {}
  };

  async populateForm() {
    try {
        const transactionalpartytypeId = this.props.match.params.id;
        const { data } = await getTransactionalpartytype(transactionalpartytypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateadditionalPartyIdentifications() {
    const { data } = await getAdditionalpartyidentificationtypes();
    this.setState({ additionalPartyIdentifications: data });
  }

  async populatedutyFeeTaxRegistrations() {
    const { data } = await getDutyfeetaxregistrationtypes();
    this.setState({ dutyFeeTaxRegistrations: data });
  }

  async populatefinancialInstitutionInformations() {
    const { data } = await getFinancialinstitutioninformationtypes();
    this.setState({ financialInstitutionInformations: data });
  }

  async populateorganisationDetailss() {
    const { data } = await getOrganisationtypes();
    this.setState({ organisationDetailss: data });
  }

  async populateaddresss() {
    const { data } = await getAddresss();
    this.setState({ addresss: data });
  }

  async populatecontacts() {
    const { data } = await getContacttypes();
    this.setState({ contacts: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateadditionalPartyIdentifications();
    await this.populatedutyFeeTaxRegistrations();
    await this.populatefinancialInstitutionInformations();
    await this.populateorganisationDetailss();
    await this.populateaddresss();
    await this.populatecontacts();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/transactionalpartytypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Transactionalpartytype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Gln : 
                 {this.state.data["gln"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Party Identification : 
                 {this.state.data["additionalPartyIdentification"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Address : 
                 {this.state.data["address"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Contact : 
                 {this.state.data["contact"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Duty Fee Tax Registration : 
                 {this.state.data["dutyFeeTaxRegistration"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Organisation Details : 
                 {this.state.data["organisationDetails"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Financial Institution Information : 
                 {this.state.data["financialInstitutionInformation"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Additional Party Identification : 
                  {this.state.additionalPartyIdentifications.map(Additionalpartyidentificationtype => 
                      this.state.data["additionalPartyIdentificationId"] == Additionalpartyidentificationtype._id ? " "+ Additionalpartyidentificationtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Duty Fee Tax Registration : 
                  {this.state.dutyFeeTaxRegistrations.map(Dutyfeetaxregistrationtype => 
                      this.state.data["dutyFeeTaxRegistrationId"] == Dutyfeetaxregistrationtype._id ? " "+ Dutyfeetaxregistrationtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Financial Institution Information : 
                  {this.state.financialInstitutionInformations.map(Financialinstitutioninformationtype => 
                      this.state.data["financialInstitutionInformationId"] == Financialinstitutioninformationtype._id ? " "+ Financialinstitutioninformationtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Organisation Details : 
                  {this.state.organisationDetailss.map(Organisationtype => 
                      this.state.data["organisationDetailsId"] == Organisationtype._id ? " "+ Organisationtype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Address : 
                  {this.state.addresss.map(Address => 
                      this.state.data["addressId"] == Address._id ? " "+ Address.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Contact : 
                  {this.state.contacts.map(Contacttype => 
                      this.state.data["contactId"] == Contacttype._id ? " "+ Contacttype.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default TransactionalpartytypeDetails;