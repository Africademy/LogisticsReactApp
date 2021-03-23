import React, { Component } from "react";
import { getHandlinginstructiontext } from "../../services/handlinginstructiontextService";

class HandlinginstructiontextDetails extends Component{

  state = {
    data: { languageCode: "", codeListVersion: "", },
    errors: {}
  };

  async populateForm() {
    try {
        const handlinginstructiontextId = this.props.match.params.id;
        const { data } = await getHandlinginstructiontext(handlinginstructiontextId);
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
    this.props.history.push("/handlinginstructiontexts");
  };

  render() {
    return (
      <div className="content">
        <h1>Handlinginstructiontext Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Language Code : 
                 {this.state.data["languageCode"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> Code List Version : 
                 {this.state.data["codeListVersion"]}
              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default HandlinginstructiontextDetails;