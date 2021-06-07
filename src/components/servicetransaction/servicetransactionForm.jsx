import React, { Component } from "react";
import Joi from "joi-browser";
import { saveServicetransaction, getServicetransaction } from "../../services/servicetransactionService";

class createServicetransaction extends Component{

 constructor(props){
super(props);
}  state = {
    data: { TypeOfServiceTransaction: "", IsNonRepudiationRequired: "", IsAuthenticationRequired: "", IsNonRepudiationOfReceiptRequired: "", IsIntegrityCheckRequired: "", IsApplicationErrorResponseRequested: "", TimeToAcknowledgeReceipt: "", TimeToAcknowledgeAcceptance: "", TimeToPerform: "", Recurrence: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    TypeOfServiceTransaction:  Joi.string()
      .allow('').allow(null)



      .label("TypeOfServiceTransaction"),
    IsNonRepudiationRequired:  Joi.string()
      .allow('').allow(null)



      .label("IsNonRepudiationRequired"),
    IsAuthenticationRequired:  Joi.string()
      .allow('').allow(null)



      .label("IsAuthenticationRequired"),
    IsNonRepudiationOfReceiptRequired:  Joi.string()
      .allow('').allow(null)



      .label("IsNonRepudiationOfReceiptRequired"),
    IsIntegrityCheckRequired:  Joi.string()
      .allow('').allow(null)



      .label("IsIntegrityCheckRequired"),
    IsApplicationErrorResponseRequested:  Joi.string()
      .allow('').allow(null)



      .label("IsApplicationErrorResponseRequested"),
    TimeToAcknowledgeReceipt:  Joi.string()
      .allow('').allow(null)



      .label("TimeToAcknowledgeReceipt"),
    TimeToAcknowledgeAcceptance:  Joi.string()
      .allow('').allow(null)



      .label("TimeToAcknowledgeAcceptance"),
    TimeToPerform:  Joi.string()
      .allow('').allow(null)



      .label("TimeToPerform"),
    Recurrence:  Joi.string()
      .allow('').allow(null)



      .label("Recurrence"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const servicetransactionId = this.props.match.params.id;
      if(servicetransactionId!=="new"){
        const { data } = await getServicetransaction(servicetransactionId);
        this.setState({ data });
      }    
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


  validate = () => {
    const result = Joi.validate(this.state.data, this.scheema, {
      abortEarly: false
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = inputField => {
    const { name, value } = inputField;
    const obj = { [name]: value };
    const scheema = { [name]: this.scheema[name] };
    const result = Joi.validate(obj, scheema);
    return result.error ? result.error.details[0].message : null;
  };

  handleChange = event => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(event.currentTarget);
    if (errorMessage) errors[event.currentTarget.name] = errorMessage;
    else delete errors[event.currentTarget.name];

    const data = { ...this.state.data };
    data[event.currentTarget.name] = event.currentTarget.value;

    this.setState({ data: data, errors: errors });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors ? errors : {} });
    if (errors) return;
    await saveServicetransaction(this.state.data);
    this.props.history.push("/servicetransactions");
  };

  render() {
    return (
      <div className="content">
        <h1>Servicetransaction Form</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label htmlFor="TypeOfServiceTransaction"> Type Of Service Transaction</label>
              <input
                value={this.state.data["TypeOfServiceTransaction"]}
                onChange={this.handleChange}
                name="TypeOfServiceTransaction"
                id="TypeOfServiceTransaction"
                type="text"
                className="form-control"
              />
              {this.state.errors["TypeOfServiceTransaction"] && <div className="alert alert-danger">{this.state.errors["TypeOfServiceTransaction"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="IsNonRepudiationRequired"> Is Non Repudiation Required</label>
              <input
                value={this.state.data["IsNonRepudiationRequired"]}
                onChange={this.handleChange}
                name="IsNonRepudiationRequired"
                id="IsNonRepudiationRequired"
                type="text"
                className="form-control"
              />
              {this.state.errors["IsNonRepudiationRequired"] && <div className="alert alert-danger">{this.state.errors["IsNonRepudiationRequired"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="IsAuthenticationRequired"> Is Authentication Required</label>
              <input
                value={this.state.data["IsAuthenticationRequired"]}
                onChange={this.handleChange}
                name="IsAuthenticationRequired"
                id="IsAuthenticationRequired"
                type="text"
                className="form-control"
              />
              {this.state.errors["IsAuthenticationRequired"] && <div className="alert alert-danger">{this.state.errors["IsAuthenticationRequired"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="IsNonRepudiationOfReceiptRequired"> Is Non Repudiation Of Receipt Required</label>
              <input
                value={this.state.data["IsNonRepudiationOfReceiptRequired"]}
                onChange={this.handleChange}
                name="IsNonRepudiationOfReceiptRequired"
                id="IsNonRepudiationOfReceiptRequired"
                type="text"
                className="form-control"
              />
              {this.state.errors["IsNonRepudiationOfReceiptRequired"] && <div className="alert alert-danger">{this.state.errors["IsNonRepudiationOfReceiptRequired"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="IsIntegrityCheckRequired"> Is Integrity Check Required</label>
              <input
                value={this.state.data["IsIntegrityCheckRequired"]}
                onChange={this.handleChange}
                name="IsIntegrityCheckRequired"
                id="IsIntegrityCheckRequired"
                type="text"
                className="form-control"
              />
              {this.state.errors["IsIntegrityCheckRequired"] && <div className="alert alert-danger">{this.state.errors["IsIntegrityCheckRequired"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="IsApplicationErrorResponseRequested"> Is Application Error Response Requested</label>
              <input
                value={this.state.data["IsApplicationErrorResponseRequested"]}
                onChange={this.handleChange}
                name="IsApplicationErrorResponseRequested"
                id="IsApplicationErrorResponseRequested"
                type="text"
                className="form-control"
              />
              {this.state.errors["IsApplicationErrorResponseRequested"] && <div className="alert alert-danger">{this.state.errors["IsApplicationErrorResponseRequested"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="TimeToAcknowledgeReceipt"> Time To Acknowledge Receipt</label>
              <input
                value={this.state.data["TimeToAcknowledgeReceipt"]}
                onChange={this.handleChange}
                name="TimeToAcknowledgeReceipt"
                id="TimeToAcknowledgeReceipt"
                type="text"
                className="form-control"
              />
              {this.state.errors["TimeToAcknowledgeReceipt"] && <div className="alert alert-danger">{this.state.errors["TimeToAcknowledgeReceipt"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="TimeToAcknowledgeAcceptance"> Time To Acknowledge Acceptance</label>
              <input
                value={this.state.data["TimeToAcknowledgeAcceptance"]}
                onChange={this.handleChange}
                name="TimeToAcknowledgeAcceptance"
                id="TimeToAcknowledgeAcceptance"
                type="text"
                className="form-control"
              />
              {this.state.errors["TimeToAcknowledgeAcceptance"] && <div className="alert alert-danger">{this.state.errors["TimeToAcknowledgeAcceptance"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="TimeToPerform"> Time To Perform</label>
              <input
                value={this.state.data["TimeToPerform"]}
                onChange={this.handleChange}
                name="TimeToPerform"
                id="TimeToPerform"
                type="text"
                className="form-control"
              />
              {this.state.errors["TimeToPerform"] && <div className="alert alert-danger">{this.state.errors["TimeToPerform"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="Recurrence"> Recurrence</label>
              <input
                value={this.state.data["Recurrence"]}
                onChange={this.handleChange}
                name="Recurrence"
                id="Recurrence"
                type="text"
                className="form-control"
              />
              {this.state.errors["Recurrence"] && <div className="alert alert-danger">{this.state.errors["Recurrence"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createServicetransaction;