import React, { Component } from "react";
import Joi from "joi-browser";
import { saveTab1, getTab1 } from "../../services/tab1Service";
import { getTab2s } from "../../services/tab2Service";

class createTab1 extends Component{

  state = {
    data: { id: "", intcol: "", VarCharCol: "", DateTime: "", FloatCol: "", TimeCol: "", DecimalCol: "", MediumTextCol: "", fk1Id: "", fk2Ids: [], },
    fk1s: [],
    fk2s: [],
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    id:  Joi.number()
      .required()
     .min(1)
     .max(10)
             .label("id"),
    intcol:  Joi.number()

     .min(5)
     .max(12)
             .label("intcol"),
    VarCharCol:  Joi.string()
      .allow('').allow(null)

     .min(3)
     .max(7)
      .regex(/^[a-zA-Z0-9]{3,30}$/)      .label("VarCharCol"),
    DateTime:  Joi.date()
      .allow('').allow(null)



      .label("DateTime"),
    FloatCol:  Joi.number()



      .label("FloatCol"),
    TimeCol:  Joi.date()
      .allow('').allow(null)



      .label("TimeCol"),
    DecimalCol:  Joi.number()



      .label("DecimalCol"),
    MediumTextCol:  Joi.string()
      .allow('').allow(null)



      .label("MediumTextCol"),
    fk1Id:  Joi.string()
      .required()
      .label("fk1Id"),
    fk2Ids:  Joi.array()
      .label("fk2Ids"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const tab1Id = this.props.match.params.id;
      if(tab1Id!=="new"){
        const { data } = await getTab1(tab1Id);
        this.setState({ data });
      }    
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatefk1s() {
    const { data: fk1s } = await getTab2s();
    this.setState({ fk1s: fk1s });
  }

  async populatefk2s() {
    const { data: fk2s } = await getTab2s();
    this.setState({ fk2s: fk2s });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatefk1s();
    await this.populatefk2s();
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
    await saveTab1(this.state.data);
    this.props.history.push("/tab1s");
  };

  handleMultiSelectChange = event => {
    const data = { ...this.state.data };
    var options = event.target.options;
    data[event.currentTarget.name] = []; //remove old selected values
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) { //add new selected values
        data[event.currentTarget.name].push(options[i].value); 
      }
    }
    this.setState({ data: data});
  };

  render() {
    return (
      <div className="content">
        <h1>Tab1 Form</h1>
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
              <label htmlFor="intcol">Intcol</label>
              <input
                value={this.state.data["intcol"]}
                onChange={this.handleChange}
                name="intcol"
                id="intcol"
                type="number"
                className="form-control"
              />
              {this.state.errors["intcol"] && <div className="alert alert-danger">{this.state.errors["intcol"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="VarCharCol"> Var Char Col</label>
              <input
                value={this.state.data["VarCharCol"]}
                onChange={this.handleChange}
                name="VarCharCol"
                id="VarCharCol"
                type="text"
                className="form-control"
              />
              {this.state.errors["VarCharCol"] && <div className="alert alert-danger">{this.state.errors["VarCharCol"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="DateTime"> Date Time</label>
              <input
                value={this.state.data["DateTime"].substring(0, 10)}
                onChange={this.handleChange}
                name="DateTime"
                id="DateTime"
                type="date"
                className="form-control"
              />
              {this.state.errors["DateTime"] && <div className="alert alert-danger">{this.state.errors["DateTime"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="FloatCol"> Float Col</label>
              <input
                value={this.state.data["FloatCol"]}
                onChange={this.handleChange}
                name="FloatCol"
                id="FloatCol"
                type="number"
                className="form-control"
              />
              {this.state.errors["FloatCol"] && <div className="alert alert-danger">{this.state.errors["FloatCol"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="TimeCol"> Time Col</label>
              <input
                value={this.state.data["TimeCol"].substring(0, 10)}
                onChange={this.handleChange}
                name="TimeCol"
                id="TimeCol"
                type="date"
                className="form-control"
              />
              {this.state.errors["TimeCol"] && <div className="alert alert-danger">{this.state.errors["TimeCol"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="DecimalCol"> Decimal Col</label>
              <input
                value={this.state.data["DecimalCol"]}
                onChange={this.handleChange}
                name="DecimalCol"
                id="DecimalCol"
                type="number"
                className="form-control"
              />
              {this.state.errors["DecimalCol"] && <div className="alert alert-danger">{this.state.errors["DecimalCol"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="MediumTextCol"> Medium Text Col</label>
              <input
                value={this.state.data["MediumTextCol"]}
                onChange={this.handleChange}
                name="MediumTextCol"
                id="MediumTextCol"
                type="text"
                className="form-control"
              />
              {this.state.errors["MediumTextCol"] && <div className="alert alert-danger">{this.state.errors["MediumTextCol"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="fk1Id">          Fk1<a target="_blank" href="/Tab2s/new">Add New</a> <a href="javascript:void(0)" onClick={this.populatefk1s()}>Refresh</a></label> 
              <select
                value={this.state.data["fk1Id"]}
                onChange={this.handleChange}
                name="fk1Id"
                id="fk1Id"
                className="form-control"
                  >
                  <option value="" disabled defaultValue>
                     Select Tab2
                  </option>
                  {this.state.fk1s.map(Tab2 => (
                    <option key={Tab2._id} value={Tab2._id}>
                      {Tab2.id}
                    </option>
                  ))}
              </select>
              {this.state.errors["fk1Id"] && <div className="alert alert-danger">{this.state.errors["fk1Id"]}</div>}
          </div>

          <div className="form-group">
              <label htmlFor="fk2Ids">Fk2 <a target="_blank" href="/Tab2s/new">Add New</a><a href="this.populatefk2s()">Refresh</a></label>
              <select
                value={this.state.data["fk2Id"]}
                onChange={this.handleMultiSelectChange}
                multiple
                name="fk2Ids"
                id="fk2Ids"
                className="form-control"
                  >
                  {this.state.fk2s.map(Tab2 => (
                    <option 
                       key={Tab2._id} value={Tab2._id}
                       selected = {this.state.data["fk2Ids"].includes(Tab2._id)}>
                      {Tab2.varcharcol}
                    </option>
                  ))}
              </select>
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createTab1;