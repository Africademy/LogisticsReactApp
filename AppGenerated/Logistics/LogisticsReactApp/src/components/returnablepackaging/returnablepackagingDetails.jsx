import React, { Component } from "react";
import { getReturnablepackaging } from "../../services/returnablepackagingService";

class ReturnablepackagingDetails extends Component{

  state = {
    data: { packagingQuantity: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const returnablepackagingId = this.props.match.params.id;
        const { data } = await getReturnablepackaging(returnablepackagingId);
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
    this.props.history.push("/returnablepackagings");
  };

  render() {
    return (
      <div className="content">
        <h1>Returnablepackaging Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Packaging Quantity : 
                 {this.state.data["packagingQuantity"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default ReturnablepackagingDetails;