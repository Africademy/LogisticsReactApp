import React, { Component } from "react";
import { getReturnableassettypeidentification } from "../../services/returnableassettypeidentificationService";

class ReturnableassettypeidentificationDetails extends Component{

  state = {
    data: { grai: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const returnableassettypeidentificationId = this.props.match.params.id;
        const { data } = await getReturnableassettypeidentification(returnableassettypeidentificationId);
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
    this.props.history.push("/returnableassettypeidentifications");
  };

  render() {
    return (
      <div className="content">
        <h1>Returnableassettypeidentification Details</h1>
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

export default ReturnableassettypeidentificationDetails;