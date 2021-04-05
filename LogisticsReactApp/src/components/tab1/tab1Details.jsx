import React, { Component } from "react";
import { getTab1 } from "../../services/tab1Service";
import { getTab2s } from "../../services/tab2Service";

class Tab1Details extends Component{

  state = {
    data: { id: "", intcol: "", VarCharCol: "", DateTime: "", FloatCol: "", TimeCol: "", DecimalCol: "", MediumTextCol: "", fk1Id: "", fk2Ids: [], },
    fk1s: [],
    fk2s: [],
    errors: {}
  };

  async populateForm() {
    try {
        const tab1Id = this.props.match.params.id;
        const { data } = await getTab1(tab1Id);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatefk1s() {
    const { data } = await getTab2s();
    this.setState({ fk1s: data });
  }

  async populatefk2s() {
    const { data } = await getTab2s();
    this.setState({ fk2s: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatefk1s();
    await this.populatefk2s();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/tab1s");
  };

  render() {
    return (
      <div className="content">
        <h1>Tab1 Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Intcol : 
                 {this.state.data["intcol"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Var Char Col : 
                 {this.state.data["VarCharCol"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Date Time : 
                 {this.state.data["DateTime"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Float Col : 
                 {this.state.data["FloatCol"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Time Col : 
                 {this.state.data["TimeCol"].substring(0, 10)}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Decimal Col : 
                 {this.state.data["DecimalCol"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control">  Medium Text Col : 
                 {this.state.data["MediumTextCol"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Fk1 : 
                  {this.state.fk1s.map(Tab2 => 
                      this.state.data["fk1Id"] == Tab2._id ? " "+ Tab2.id : ""
                  )}              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Fk2 : 
                   {this.state.fk2s.map(Tab2 => 
                       this.state.data["fk2Ids"].includes(Tab2._id) ? " "+ Tab2.varcharcol+"," : ""
                  )}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default Tab1Details;