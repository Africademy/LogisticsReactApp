import React, { Component } from "react";
import { getTab2 } from "../../services/tab2Service";

class Tab2Details extends Component{

  state = {
    data: { id: "", varcharcol: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const tab2Id = this.props.match.params.id;
        const { data } = await getTab2(tab2Id);
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
    this.props.history.push("/tab2s");
  };

  render() {
    return (
      <div className="content">
        <h1>Tab2 Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Varcharcol : 
                 {this.state.data["varcharcol"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default Tab2Details;