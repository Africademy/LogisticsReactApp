import React, { Component } from "react";
import Joi from "joi-browser";
import { savePackagetotal, getPackagetotal } from "../../services/packagetotalService";

class createPackagetotal extends Component{

 constructor(props){
super(props);
}  state = {
    data: { totalPackageQuantity: "", },
    errors: {}
  };

  scheema = {
    _id: Joi.string(),
    totalPackageQuantity:  Joi.number()
      .required()


      .label("totalPackageQuantity"),
    createdAt: Joi.date()
      .label("createAt")
  };

  async populateForm() {
    try {
      const packagetotalId = this.props.match.params.id;
      if(packagetotalId!=="new"){
        const { data } = await getPackagetotal(packagetotalId);
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
    await savePackagetotal(this.state.data);
    this.props.history.push("/packagetotals");
  };

  render() {
    return (
      <div className="content">
        <h1>Packagetotal Form</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label htmlFor="totalPackageQuantity">Total Package Quantity</label>
              <input
                value={this.state.data["totalPackageQuantity"]}
                onChange={this.handleChange}
                name="totalPackageQuantity"
                id="totalPackageQuantity"
                type="number"
                className="form-control"
              />
              {this.state.errors["totalPackageQuantity"] && <div className="alert alert-danger">{this.state.errors["totalPackageQuantity"]}</div>}
          </div>

          <button disabled={this.validate()} className="btn btn-primary custom-btn">Save</button>

        </form>
      </div>
    );
  }
}

export default createPackagetotal;