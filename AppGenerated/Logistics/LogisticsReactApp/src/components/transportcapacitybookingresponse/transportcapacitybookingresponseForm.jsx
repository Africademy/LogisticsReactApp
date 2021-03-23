import React, { Component } from "react";
import Joi from "joi-browser";
import { saveTransportcapacitybookingresponse, getTransportcapacitybookingresponse } from "../../services/transportcapacitybookingresponseService";
import { getEntityidentificationtypes } from "../../services/entityidentificationtypeService";
import { getEcomstringattributevaluepairlists } from "../../services/ecomstringattributevaluepairlistService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";
import { getTransportcapacitybookings } from "../../services/transportcapacitybookingService";

class createTransportcapacitybookingresponse extends Component{

 constructor(props){
super(props);
    this.populatetransportCapacityBookingResponseIdentifications = this.populatetransportCapacityBookingResponseIdentifications.bind(this);
    this.populateavpLists = this.populateavpLists.bind(this);
    this.populatedocumentStatusCodes = this.populatedocumentStatusCodes.bind(this);
    this.populatedocumentActionCodes = this.populatedocumentActionCodes.bind(this);
    this.populatetransportCapacityBookingStatusCodes = this.populatetransportCapacityBookingStatusCodes.bind(this);
    this.populatelogisticServicesBuyers = this.populatelogisticServicesBuyers.bind(this);
    this.populatelogisticServicesSellers = this.populatelogisticServicesSellers.bind(this);
    this.populatetransportCapacityBookings = this.populatetransportCapacityBookings.bind(this);
}  state = {
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

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    creationDateTime:  Joi.date()
      .required()


      .label("creationDateTime"),
    documentStatusCode:  Joi.number()
      .required()


      .label("documentStatusCode"),
    documentActionCode:  Joi.number()



      .label("documentActionCode"),
    documentStructureVersion:  Joi.string()
      .allow('').allow(null)

     .min(1)
     .max(80)
      .label("documentStructureVersion"),
    lastUpdateDateTime:  Joi.date()
      .allow('').allow(null)



      .label("lastUpdateDateTime"),
    revisionNumber:  Joi.number()

     .min(0)
     .max(1000)
      .label("revisionNumber"),
    extension:  Joi.string()
      .allow('').allow(null)



      .label("extension"),
    documentEffectiveDate:  Joi.date()
      .allow('').allow(null)



      .label("documentEffectiveDate"),
    avpList:  Joi.string()
      .allow('').allow(null)



      .label("avpList"),
    transportCapacityBookingResponseIdentification:  Joi.number()



      .label("transportCapacityBookingResponseIdentification"),
    transportCapacityBookingStatusCode:  Joi.number()



      .label("transportCapacityBookingStatusCode"),
    logisticServicesBuyer:  Joi.number()
      .required()


      .label("logisticServicesBuyer"),
    logisticServicesSeller:  Joi.number()
      .required()


      .label("logisticServicesSeller"),
    transportCapacityBooking:  Joi.number()



      .label("transportCapacityBooking"),
    transportCapacityBookingResponseIdentificationId:  Joi.string()
      .required()
      .label("transportCapacityBookingResponseIdentificationId"),
    avpListId:  Joi.string()
      .required()
      .label("avpListId"),
    documentStatusCodeId:  Joi.string()
      .required()
      .label("documentStatusCodeId"),
    documentActionCodeId:  Joi.string()
      .required()
      .label("documentActionCodeId"),
    transportCapacityBookingStatusCodeId:  Joi.string()
      .required()
      .label("transportCapacityBookingStatusCodeId"),
    logisticServicesBuyerId:  Joi.string()
      .required()
      .label("logisticServicesBuyerId"),
    logisticServicesSellerId:  Joi.string()
      .required()
      .label("logisticServicesSellerId"),
    transportCapacityBookingId:  Joi.string()
      .required()
      .label("transportCapacityBookingId"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const transportcapacitybookingresponseId = this.props.match.params.id;
      if(transportcapacitybookingresponseId!=="new"){
        const { data } = await getTransportcapacitybookingresponse(transportcapacitybookingresponseId);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatetransportCapacityBookingResponseIdentifications() {
    const { data: transportCapacityBookingResponseIdentifications } = await getEntityidentificationtypes();
    this.setState({ transportCapacityBookingResponseIdentifications: transportCapacityBookingResponseIdentifications });
  }

  async populateavpLists() {
    const { data: avpLists } = await getEcomstringattributevaluepairlists();
    this.setState({ avpLists: avpLists });
  }

  async populatedocumentStatusCodes() {
    const { data: documentStatusCodes } = await getEnumerationlibrarys();
    this.setState({ documentStatusCodes: documentStatusCodes });
  }

  async populatedocumentActionCodes() {
    const { data: documentActionCodes } = await getEnumerationlibrarys();
    this.setState({ documentActionCodes: documentActionCodes });
  }

  async populatetransportCapacityBookingStatusCodes() {
    const { data: transportCapacityBookingStatusCodes } = await getEnumerationlibrarys();
    this.setState({ transportCapacityBookingStatusCodes: transportCapacityBookingStatusCodes });
  }

  async populatelogisticServicesBuyers() {
    const { data: logisticServicesBuyers } = await getEnumerationlibrarys();
    this.setState({ logisticServicesBuyers: logisticServicesBuyers });
  }

  async populatelogisticServicesSellers() {
    const { data: logisticServicesSellers } = await getEnumerationlibrarys();
    this.setState({ logisticServicesSellers: logisticServicesSellers });
  }

  async populatetransportCapacityBookings() {
    const { data: transportCapacityBookings } = await getTransportcapacitybookings();
    this.setState({ transportCapacityBookings: transportCapacityBookings });
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
    await saveTransportcapacitybookingresponse(this.state.data);
    this.props.history.push("/transportcapacitybookingresponses");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportcapacitybookingresponse Form</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label htmlFor="id">Id</label>
              <input
                value={this.state.data["id"]}
                onChange={this.handleChange}
                name="id"
                id="id"
                type="number"
                className="form-control"
              />
              {this.state.errors["id"] && <div className="alert alert-danger">{this.state.errors["id"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="creationDateTime">Creation Date Time</label>
              <input
                value={this.state.data["creationDateTime"].substring(0, 10)}
                onChange={this.handleChange}
                name="creationDateTime"
                id="creationDateTime"
                type="date"
                className="form-control"
              />
              {this.state.errors["creationDateTime"] && <div className="alert alert-danger">{this.state.errors["creationDateTime"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="documentStatusCode">Document Status Code</label>
              <input
                value={this.state.data["documentStatusCode"]}
                onChange={this.handleChange}
                name="documentStatusCode"
                id="documentStatusCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["documentStatusCode"] && <div className="alert alert-danger">{this.state.errors["documentStatusCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="documentActionCode">Document Action Code</label>
              <input
                value={this.state.data["documentActionCode"]}
                onChange={this.handleChange}
                name="documentActionCode"
                id="documentActionCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["documentActionCode"] && <div className="alert alert-danger">{this.state.errors["documentActionCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="documentStructureVersion">Document Structure Version</label>
              <input
                value={this.state.data["documentStructureVersion"]}
                onChange={this.handleChange}
                name="documentStructureVersion"
                id="documentStructureVersion"
                type="text"
                className="form-control"
              />
              {this.state.errors["documentStructureVersion"] && <div className="alert alert-danger">{this.state.errors["documentStructureVersion"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="lastUpdateDateTime">Last Update Date Time</label>
              <input
                value={this.state.data["lastUpdateDateTime"].substring(0, 10)}
                onChange={this.handleChange}
                name="lastUpdateDateTime"
                id="lastUpdateDateTime"
                type="date"
                className="form-control"
              />
              {this.state.errors["lastUpdateDateTime"] && <div className="alert alert-danger">{this.state.errors["lastUpdateDateTime"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="revisionNumber">Revision Number</label>
              <input
                value={this.state.data["revisionNumber"]}
                onChange={this.handleChange}
                name="revisionNumber"
                id="revisionNumber"
                type="number"
                className="form-control"
              />
              {this.state.errors["revisionNumber"] && <div className="alert alert-danger">{this.state.errors["revisionNumber"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="extension">Extension</label>
              <input
                value={this.state.data["extension"]}
                onChange={this.handleChange}
                name="extension"
                id="extension"
                type="text"
                className="form-control"
              />
              {this.state.errors["extension"] && <div className="alert alert-danger">{this.state.errors["extension"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="documentEffectiveDate">Document Effective Date</label>
              <input
                value={this.state.data["documentEffectiveDate"].substring(0, 10)}
                onChange={this.handleChange}
                name="documentEffectiveDate"
                id="documentEffectiveDate"
                type="date"
                className="form-control"
              />
              {this.state.errors["documentEffectiveDate"] && <div className="alert alert-danger">{this.state.errors["documentEffectiveDate"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="avpList">Avp List</label>
              <input
                value={this.state.data["avpList"]}
                onChange={this.handleChange}
                name="avpList"
                id="avpList"
                type="text"
                className="form-control"
              />
              {this.state.errors["avpList"] && <div className="alert alert-danger">{this.state.errors["avpList"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportCapacityBookingResponseIdentification">Transport Capacity Booking Response Identification</label>
              <input
                value={this.state.data["transportCapacityBookingResponseIdentification"]}
                onChange={this.handleChange}
                name="transportCapacityBookingResponseIdentification"
                id="transportCapacityBookingResponseIdentification"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportCapacityBookingResponseIdentification"] && <div className="alert alert-danger">{this.state.errors["transportCapacityBookingResponseIdentification"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportCapacityBookingStatusCode">Transport Capacity Booking Status Code</label>
              <input
                value={this.state.data["transportCapacityBookingStatusCode"]}
                onChange={this.handleChange}
                name="transportCapacityBookingStatusCode"
                id="transportCapacityBookingStatusCode"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportCapacityBookingStatusCode"] && <div className="alert alert-danger">{this.state.errors["transportCapacityBookingStatusCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticServicesBuyer">Logistic Services Buyer</label>
              <input
                value={this.state.data["logisticServicesBuyer"]}
                onChange={this.handleChange}
                name="logisticServicesBuyer"
                id="logisticServicesBuyer"
                type="number"
                className="form-control"
              />
              {this.state.errors["logisticServicesBuyer"] && <div className="alert alert-danger">{this.state.errors["logisticServicesBuyer"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticServicesSeller">Logistic Services Seller</label>
              <input
                value={this.state.data["logisticServicesSeller"]}
                onChange={this.handleChange}
                name="logisticServicesSeller"
                id="logisticServicesSeller"
                type="number"
                className="form-control"
              />
              {this.state.errors["logisticServicesSeller"] && <div className="alert alert-danger">{this.state.errors["logisticServicesSeller"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportCapacityBooking">Transport Capacity Booking</label>
              <input
                value={this.state.data["transportCapacityBooking"]}
                onChange={this.handleChange}
                name="transportCapacityBooking"
                id="transportCapacityBooking"
                type="number"
                className="form-control"
              />
              {this.state.errors["transportCapacityBooking"] && <div className="alert alert-danger">{this.state.errors["transportCapacityBooking"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportCapacityBookingResponseIdentificationId">          Transport Capacity Booking Response Identification <a target="_blank" href="/Entityidentificationtypes/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportCapacityBookingResponseIdentifications}> Refresh</a> </label>
              <select
                value={this.state.data["transportCapacityBookingResponseIdentificationId"]}
                onChange={this.handleChange}
                name="transportCapacityBookingResponseIdentificationId"
                id="transportCapacityBookingResponseIdentificationId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Entityidentificationtype
                  </option>
                  {this.state.transportCapacityBookingResponseIdentifications.map(Entityidentificationtype => (
                    <option key={Entityidentificationtype._id} value={Entityidentificationtype._id}>
                      {Entityidentificationtype.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportCapacityBookingResponseIdentificationId"] && <div className="alert alert-danger">{this.state.errors["transportCapacityBookingResponseIdentificationId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="avpListId">          Avp List <a target="_blank" href="/Ecomstringattributevaluepairlists/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populateavpLists}> Refresh</a> </label>
              <select
                value={this.state.data["avpListId"]}
                onChange={this.handleChange}
                name="avpListId"
                id="avpListId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Ecomstringattributevaluepairlist
                  </option>
                  {this.state.avpLists.map(Ecomstringattributevaluepairlist => (
                    <option key={Ecomstringattributevaluepairlist._id} value={Ecomstringattributevaluepairlist._id}>
                      {Ecomstringattributevaluepairlist.qualifierCodeName}
                    </option>
                  ))}
              </select>
              {this.state.errors["avpListId"] && <div className="alert alert-danger">{this.state.errors["avpListId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="documentStatusCodeId">          Document Status Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedocumentStatusCodes}> Refresh</a> </label>
              <select
                value={this.state.data["documentStatusCodeId"]}
                onChange={this.handleChange}
                name="documentStatusCodeId"
                id="documentStatusCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.documentStatusCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["documentStatusCodeId"] && <div className="alert alert-danger">{this.state.errors["documentStatusCodeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="documentActionCodeId">          Document Action Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatedocumentActionCodes}> Refresh</a> </label>
              <select
                value={this.state.data["documentActionCodeId"]}
                onChange={this.handleChange}
                name="documentActionCodeId"
                id="documentActionCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.documentActionCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["documentActionCodeId"] && <div className="alert alert-danger">{this.state.errors["documentActionCodeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportCapacityBookingStatusCodeId">          Transport Capacity Booking Status Code <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportCapacityBookingStatusCodes}> Refresh</a> </label>
              <select
                value={this.state.data["transportCapacityBookingStatusCodeId"]}
                onChange={this.handleChange}
                name="transportCapacityBookingStatusCodeId"
                id="transportCapacityBookingStatusCodeId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.transportCapacityBookingStatusCodes.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportCapacityBookingStatusCodeId"] && <div className="alert alert-danger">{this.state.errors["transportCapacityBookingStatusCodeId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticServicesBuyerId">          Logistic Services Buyer <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatelogisticServicesBuyers}> Refresh</a> </label>
              <select
                value={this.state.data["logisticServicesBuyerId"]}
                onChange={this.handleChange}
                name="logisticServicesBuyerId"
                id="logisticServicesBuyerId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.logisticServicesBuyers.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["logisticServicesBuyerId"] && <div className="alert alert-danger">{this.state.errors["logisticServicesBuyerId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="logisticServicesSellerId">          Logistic Services Seller <a target="_blank" href="/Enumerationlibrarys/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatelogisticServicesSellers}> Refresh</a> </label>
              <select
                value={this.state.data["logisticServicesSellerId"]}
                onChange={this.handleChange}
                name="logisticServicesSellerId"
                id="logisticServicesSellerId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Enumerationlibrary
                  </option>
                  {this.state.logisticServicesSellers.map(Enumerationlibrary => (
                    <option key={Enumerationlibrary._id} value={Enumerationlibrary._id}>
                      {Enumerationlibrary.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["logisticServicesSellerId"] && <div className="alert alert-danger">{this.state.errors["logisticServicesSellerId"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="transportCapacityBookingId">          Transport Capacity Booking <a target="_blank" href="/Transportcapacitybookings/new">Add New</a>  <a href="javascript:void(0)" onClick={this.populatetransportCapacityBookings}> Refresh</a> </label>
              <select
                value={this.state.data["transportCapacityBookingId"]}
                onChange={this.handleChange}
                name="transportCapacityBookingId"
                id="transportCapacityBookingId"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Transportcapacitybooking
                  </option>
                  {this.state.transportCapacityBookings.map(Transportcapacitybooking => (
                    <option key={Transportcapacitybooking._id} value={Transportcapacitybooking._id}>
                      {Transportcapacitybooking.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["transportCapacityBookingId"] && <div className="alert alert-danger">{this.state.errors["transportCapacityBookingId"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createTransportcapacitybookingresponse;