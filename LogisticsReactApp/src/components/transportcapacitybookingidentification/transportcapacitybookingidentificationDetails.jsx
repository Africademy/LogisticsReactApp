import React, { Component } from "react";
import { getTransportcapacitybookingidentification } from "../../services/transportcapacitybookingidentificationService";

class TransportcapacitybookingidentificationDetails extends Component{

  state = {
    data: { entityIdentification: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const transportcapacitybookingidentificationId = this.props.match.params.id;
        const { data } = await getTransportcapacitybookingidentification(transportcapacitybookingidentificationId);
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
    this.props.history.push("/transportcapacitybookingidentifications");
  };

  render() {
    return (
      <div className="content">
        <h1>Transportcapacitybookingidentification Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Entity Identification : 
                 {this.state.data["entityIdentification"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default TransportcapacitybookingidentificationDetails;