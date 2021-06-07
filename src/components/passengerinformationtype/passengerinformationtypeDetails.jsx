import React, { Component } from "react";
import { getPassengerinformationtype } from "../../services/passengerinformationtypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class PassengerinformationtypeDetails extends Component{

  state = {
    data: { id: "", numberOfPassengers: "", passengerCategoryCode: "", passengerTariffGroup: "", person: "", passengerCategoryCodeId: "", },
    passengerCategoryCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const passengerinformationtypeId = this.props.match.params.id;
        const { data } = await getPassengerinformationtype(passengerinformationtypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatepassengerCategoryCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ passengerCategoryCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatepassengerCategoryCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/passengerinformationtypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Passengerinformationtype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Number Of Passengers : 
                 {this.state.data["numberOfPassengers"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Passenger Category Code : 
                 {this.state.data["passengerCategoryCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Passenger Tariff Group : 
                 {this.state.data["passengerTariffGroup"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Person : 
                 {this.state.data["person"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Passenger Category Code : 
                  {this.state.passengerCategoryCodes.map(Enumerationlibrary => 
                      this.state.data["passengerCategoryCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default PassengerinformationtypeDetails;