import React, { Component } from "react";
import { getMultidescription70type } from "../../services/multidescription70typeService";
import { getDescription70types } from "../../services/description70typeService";

class Multidescription70typeDetails extends Component{

  state = {
    data: { id: "", description: "", descriptionId: "", },
    descriptions: [],
    errors: {}
  };

  async populateForm() {
    try {
        const multidescription70typeId = this.props.match.params.id;
        const { data } = await getMultidescription70type(multidescription70typeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populatedescriptions() {
    const { data } = await getDescription70types();
    this.setState({ descriptions: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populatedescriptions();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/multidescription70types");
  };

  render() {
    return (
      <div className="content">
        <h1>Multidescription70type Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Description : 
                 {this.state.data["description"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Description : 
                  {this.state.descriptions.map(Description70type => 
                      this.state.data["descriptionId"] == Description70type._id ? " "+ Description70type.id : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default Multidescription70typeDetails;