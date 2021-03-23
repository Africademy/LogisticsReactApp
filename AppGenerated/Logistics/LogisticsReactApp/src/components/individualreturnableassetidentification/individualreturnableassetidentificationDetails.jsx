import React, { Component } from "react";
import { getIndividualreturnableassetidentification } from "../../services/individualreturnableassetidentificationService";

class IndividualreturnableassetidentificationDetails extends Component{

  state = {
    data: { grai: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const individualreturnableassetidentificationId = this.props.match.params.id;
        const { data } = await getIndividualreturnableassetidentification(individualreturnableassetidentificationId);
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
    this.props.history.push("/individualreturnableassetidentifications");
  };

  render() {
    return (
      <div className="content">
        <h1>Individualreturnableassetidentification Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Grai : 
                 {this.state.data["grai"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default IndividualreturnableassetidentificationDetails;