import React, { Component } from "react";
import { getPackagetotal } from "../../services/packagetotalService";

class PackagetotalDetails extends Component{

  state = {
    data: { totalPackageQuantity: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const packagetotalId = this.props.match.params.id;
        const { data } = await getPackagetotal(packagetotalId);
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
    this.props.history.push("/packagetotals");
  };

  render() {
    return (
      <div className="content">
        <h1>Packagetotal Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Total Package Quantity : 
                 {this.state.data["totalPackageQuantity"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default PackagetotalDetails;