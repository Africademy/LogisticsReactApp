import React, { Component } from "react";
import { getOfficialaddress } from "../../services/officialaddressService";

class OfficialaddressDetails extends Component{

  state = {
    data: { city: "", cityCode: "", countyCode: "", crossStreet: "", name: "", pOBoxNumber: "", postalCode: "", provinceCode: "", state: "", streetAddressOne: "", streetAddressTwo: "", streetAddressThree: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const officialaddressId = this.props.match.params.id;
        const { data } = await getOfficialaddress(officialaddressId);
        this.setState({ data });
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

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/officialaddresss");
  };

  render() {
    return (
      <div className="content">
        <h1>Officialaddress Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> City : 
                 {this.state.data["city"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> City Code : 
                 {this.state.data["cityCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> County Code : 
                 {this.state.data["countyCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Cross Street : 
                 {this.state.data["crossStreet"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Name : 
                 {this.state.data["name"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> P O Box Number : 
                 {this.state.data["pOBoxNumber"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Postal Code : 
                 {this.state.data["postalCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Province Code : 
                 {this.state.data["provinceCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> State : 
                 {this.state.data["state"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Street Address One : 
                 {this.state.data["streetAddressOne"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Street Address Two : 
                 {this.state.data["streetAddressTwo"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Street Address Three : 
                 {this.state.data["streetAddressThree"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default OfficialaddressDetails;