import React, { Component } from "react";
import { getEcom_attributevaluepairlisttype } from "../../services/ecom_attributevaluepairlisttypeService";
import { getEcomstringattributevaluepairlists } from "../../services/ecomstringattributevaluepairlistService";

class Ecom_attributevaluepairlisttypeDetails extends Component{

  state = {
    data: { id: "", eComStringAttributeValuePairList: "", eComStringAttributeValuePairListId: "", },
    eComStringAttributeValuePairLists: [],
    errors: {}
  };

  async populateForm() {
    try {
        const ecom_attributevaluepairlisttypeId = this.props.match.params.id;
        const { data } = await getEcom_attributevaluepairlisttype(ecom_attributevaluepairlisttypeId);
        this.setState({ data });
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found"); 
      }
    }
  }

  async populateeComStringAttributeValuePairLists() {
    const { data } = await getEcomstringattributevaluepairlists();
    this.setState({ eComStringAttributeValuePairLists: data });
  }

  async componentDidMount() {
    await this.populateForm();
    await this.populateeComStringAttributeValuePairLists();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/ecom_attributevaluepairlisttypes");
  };

  render() {
    return (
      <div className="content">
        <h1>Ecom_attributevaluepairlisttype Details</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label  className="form-control"> Id : 
                 {this.state.data["id"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> E Com String Attribute Value Pair List : 
                 {this.state.data["eComStringAttributeValuePairList"]}
              </label>
          </div>
          <div className="form-group">
              <label  className="form-control"> E Com String Attribute Value Pair List : 
                  {this.state.eComStringAttributeValuePairLists.map(Ecomstringattributevaluepairlist => 
                      this.state.data["eComStringAttributeValuePairListId"] == Ecomstringattributevaluepairlist._id ? " "+ Ecomstringattributevaluepairlist.qualifierCodeName : ""
                  )}              </label>
          </div>
           <button className="btn btn-primary custom-btn">OK</button>

        </form>
      </div>
    );
  }
}

export default Ecom_attributevaluepairlisttypeDetails;