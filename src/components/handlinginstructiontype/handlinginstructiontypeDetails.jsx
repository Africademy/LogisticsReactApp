import React, { Component } from "react";
import { getHandlinginstructiontype } from "../../services/handlinginstructiontypeService";
import { getDescription500types } from "../../services/description500typeService";
import { getTemperaturerangetypes } from "../../services/temperaturerangetypeService";
import { getEnumerationlibrarys } from "../../services/enumerationlibraryService";

class HandlinginstructiontypeDetails extends Component{

  state = {
    data: { id: "", handlingInstructionCode: "", handlingInstructionText: "", printingInstructionCode: "", storageTemperature: "", transportTemperature: "", handlingInstructionTextId: "", storageTemperatureId: "", transportTemperatureId: "", handlingInstructionCodeId: "", printingInstructionCodeId: "", },
    handlingInstructionTexts: [],
    storageTemperatures: [],
    transportTemperatures: [],
    handlingInstructionCodes: [],
    printingInstructionCodes: [],
    errors: {}
  };

  async populateForm() {
    try {
        const handlinginstructiontypeId = this.props.match.params.id;
        const { data } = await getHandlinginstructiontype(handlinginstructiontypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatehandlingInstructionTexts() {
    const { data } = await getDescription500types();
    this.setState({ handlingInstructionTexts: data });
  }

  async populatestorageTemperatures() {
    const { data } = await getTemperaturerangetypes();
    this.setState({ storageTemperatures: data });
  }

  async populatetransportTemperatures() {
    const { data } = await getTemperaturerangetypes();
    this.setState({ transportTemperatures: data });
  }

  async populatehandlingInstructionCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ handlingInstructionCodes: data });
  }

  async populateprintingInstructionCodes() {
    const { data } = await getEnumerationlibrarys();
    this.setState({ printingInstructionCodes: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatehandlingInstructionTexts();
    await this.populatestorageTemperatures();
    await this.populatetransportTemperatures();
    await this.populatehandlingInstructionCodes();
    await this.populateprintingInstructionCodes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/handlinginstructiontypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Handlinginstructiontype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Handling Instruction Code : 
                 {this.state.data["handlingInstructionCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Handling Instruction Text : 
                 {this.state.data["handlingInstructionText"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Printing Instruction Code : 
                 {this.state.data["printingInstructionCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Storage Temperature : 
                 {this.state.data["storageTemperature"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Temperature : 
                 {this.state.data["transportTemperature"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Handling Instruction Text : 
                  {this.state.handlingInstructionTexts.map(Description500type => 
                      this.state.data["handlingInstructionTextId"] == Description500type._id ? " "+ Description500type.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Storage Temperature : 
                  {this.state.storageTemperatures.map(Temperaturerangetype => 
                      this.state.data["storageTemperatureId"] == Temperaturerangetype._id ? " "+ Temperaturerangetype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Transport Temperature : 
                  {this.state.transportTemperatures.map(Temperaturerangetype => 
                      this.state.data["transportTemperatureId"] == Temperaturerangetype._id ? " "+ Temperaturerangetype.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Handling Instruction Code : 
                  {this.state.handlingInstructionCodes.map(Enumerationlibrary => 
                      this.state.data["handlingInstructionCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Printing Instruction Code : 
                  {this.state.printingInstructionCodes.map(Enumerationlibrary => 
                      this.state.data["printingInstructionCodeId"] == Enumerationlibrary._id ? " "+ Enumerationlibrary.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default HandlinginstructiontypeDetails;