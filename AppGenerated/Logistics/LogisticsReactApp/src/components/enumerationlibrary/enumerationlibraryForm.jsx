import React, { Component } from "react";
import Joi from "joi-browser";
import { saveEnumerationlibrary, getEnumerationlibrary } from "../../services/enumerationlibraryService";

class createEnumerationlibrary extends Component{

 constructor(props){
super(props);
}  state = {
    data: { id: "", semanticResourceURN: "", CodeValue: "", resourceSubTypeCode: "", CodeList: "", Domain: "", ExternalLink: "", codeName: "", Definition: "", changeLog: "", Status: "", Version: "", ChangeDate: "", changeLogComment: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()


      .label("id"),
    semanticResourceURN:  Joi.string()
      .allow('').allow(null)



      .label("semanticResourceURN"),
    CodeValue:  Joi.string()
      .allow('').allow(null)



      .label("CodeValue"),
    resourceSubTypeCode:  Joi.string()
      .allow('').allow(null)



      .label("resourceSubTypeCode"),
    CodeList:  Joi.string()
      .allow('').allow(null)



      .label("CodeList"),
    Domain:  Joi.string()
      .allow('').allow(null)



      .label("Domain"),
    ExternalLink:  Joi.string()
      .allow('').allow(null)



      .label("ExternalLink"),
    codeName:  Joi.string()
      .allow('').allow(null)



      .label("codeName"),
    Definition:  Joi.string()
      .allow('').allow(null)



      .label("Definition"),
    changeLog:  Joi.string()
      .allow('').allow(null)



      .label("changeLog"),
    Status:  Joi.string()
      .allow('').allow(null)



      .label("Status"),
    Version:  Joi.string()
      .allow('').allow(null)



      .label("Version"),
    ChangeDate:  Joi.string()
      .allow('').allow(null)



      .label("ChangeDate"),
    changeLogComment:  Joi.string()
      .allow('').allow(null)



      .label("changeLogComment"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const enumerationlibraryId = this.props.match.params.id;
      if(enumerationlibraryId!=="new"){
        const { data } = await getEnumerationlibrary(enumerationlibraryId);
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
    await saveEnumerationlibrary(this.state.data);
    this.props.history.push("/enumerationlibrarys");
  };

  render() {
    return (
      <div className="content">
        <h1>Enumerationlibrary Form</h1>
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
              <label htmlFor="semanticResourceURN">Semantic Resource U R N</label>
              <input
                value={this.state.data["semanticResourceURN"]}
                onChange={this.handleChange}
                name="semanticResourceURN"
                id="semanticResourceURN"
                type="text"
                className="form-control"
              />
              {this.state.errors["semanticResourceURN"] && <div className="alert alert-danger">{this.state.errors["semanticResourceURN"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="CodeValue"> Code Value</label>
              <input
                value={this.state.data["CodeValue"]}
                onChange={this.handleChange}
                name="CodeValue"
                id="CodeValue"
                type="text"
                className="form-control"
              />
              {this.state.errors["CodeValue"] && <div className="alert alert-danger">{this.state.errors["CodeValue"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="resourceSubTypeCode">Resource Sub Type Code</label>
              <input
                value={this.state.data["resourceSubTypeCode"]}
                onChange={this.handleChange}
                name="resourceSubTypeCode"
                id="resourceSubTypeCode"
                type="text"
                className="form-control"
              />
              {this.state.errors["resourceSubTypeCode"] && <div className="alert alert-danger">{this.state.errors["resourceSubTypeCode"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="CodeList"> Code List</label>
              <input
                value={this.state.data["CodeList"]}
                onChange={this.handleChange}
                name="CodeList"
                id="CodeList"
                type="text"
                className="form-control"
              />
              {this.state.errors["CodeList"] && <div className="alert alert-danger">{this.state.errors["CodeList"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="Domain"> Domain</label>
              <input
                value={this.state.data["Domain"]}
                onChange={this.handleChange}
                name="Domain"
                id="Domain"
                type="text"
                className="form-control"
              />
              {this.state.errors["Domain"] && <div className="alert alert-danger">{this.state.errors["Domain"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="ExternalLink"> External Link</label>
              <input
                value={this.state.data["ExternalLink"]}
                onChange={this.handleChange}
                name="ExternalLink"
                id="ExternalLink"
                type="text"
                className="form-control"
              />
              {this.state.errors["ExternalLink"] && <div className="alert alert-danger">{this.state.errors["ExternalLink"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="codeName">Code Name</label>
              <input
                value={this.state.data["codeName"]}
                onChange={this.handleChange}
                name="codeName"
                id="codeName"
                type="text"
                className="form-control"
              />
              {this.state.errors["codeName"] && <div className="alert alert-danger">{this.state.errors["codeName"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="Definition"> Definition</label>
              <input
                value={this.state.data["Definition"]}
                onChange={this.handleChange}
                name="Definition"
                id="Definition"
                type="text"
                className="form-control"
              />
              {this.state.errors["Definition"] && <div className="alert alert-danger">{this.state.errors["Definition"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="changeLog">Change Log</label>
              <input
                value={this.state.data["changeLog"]}
                onChange={this.handleChange}
                name="changeLog"
                id="changeLog"
                type="text"
                className="form-control"
              />
              {this.state.errors["changeLog"] && <div className="alert alert-danger">{this.state.errors["changeLog"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="Status"> Status</label>
              <input
                value={this.state.data["Status"]}
                onChange={this.handleChange}
                name="Status"
                id="Status"
                type="text"
                className="form-control"
              />
              {this.state.errors["Status"] && <div className="alert alert-danger">{this.state.errors["Status"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="Version"> Version</label>
              <input
                value={this.state.data["Version"]}
                onChange={this.handleChange}
                name="Version"
                id="Version"
                type="text"
                className="form-control"
              />
              {this.state.errors["Version"] && <div className="alert alert-danger">{this.state.errors["Version"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="ChangeDate"> Change Date</label>
              <input
                value={this.state.data["ChangeDate"]}
                onChange={this.handleChange}
                name="ChangeDate"
                id="ChangeDate"
                type="text"
                className="form-control"
              />
              {this.state.errors["ChangeDate"] && <div className="alert alert-danger">{this.state.errors["ChangeDate"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="changeLogComment">Change Log Comment</label>
              <input
                value={this.state.data["changeLogComment"]}
                onChange={this.handleChange}
                name="changeLogComment"
                id="changeLogComment"
                type="text"
                className="form-control"
              />
              {this.state.errors["changeLogComment"] && <div className="alert alert-danger">{this.state.errors["changeLogComment"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createEnumerationlibrary;