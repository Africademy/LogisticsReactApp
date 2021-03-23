import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getEcom_attributevaluepairlisttypes, deleteEcom_attributevaluepairlisttype } from "../../services/ecom_attributevaluepairlisttypeService";

class Ecom_attributevaluepairlisttypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:ecom_attributevaluepairlisttypes } = await getEcom_attributevaluepairlisttypes();
    this.setState({ records:ecom_attributevaluepairlisttypes });
  }

  handleDelete = async id => {
    const allecom_attributevaluepairlisttypes = this.state.records; 
    const ecom_attributevaluepairlisttypes = allecom_attributevaluepairlisttypes.filter(m => m._id !== id);
    this.setState({ records:ecom_attributevaluepairlisttypes });
    try {
      await deleteEcom_attributevaluepairlisttype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: allecom_attributevaluepairlisttypes });
    }
};


  handlePageChange = pageNo => {
    this.setState({ currentPage: pageNo });
  };

  getPagedData = () => {
    
    const {
      pageSize,
      currentPage,
      records
    } = this.state;
    
    const paginatedRecords = paginate(records, currentPage, pageSize);
    
    return { totalCount: !records.length ? 0 : records.length, data: paginatedRecords };
  
  };

  render() {

    const { totalCount, data: paginatedEcom_attributevaluepairlisttypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/ecom_attributevaluepairlisttypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Ecom_attributevaluepairlisttype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} ecom_attributevaluepairlisttypes</p>
                </div>
              }
          </div>
            <div className="table-responsive">

              <table className="table">
                <thead>
                    <tr>
                    <th scope="col" key="1" style={{ cursor: "pointer" }}>
                      Id
                    </th>
                    <th scope="col" key="2" style={{ cursor: "pointer" }}>
                      E Com String Attribute Value Pair List
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      E Com String Attribute Value Pair List
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedEcom_attributevaluepairlisttypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.eComStringAttributeValuePairList}</td>
                      <td key="3">{record.e.Name}</td>
                      <td key="4">
                              <Link
                                to={`/viewecom_attributevaluepairlisttype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/ecom_attributevaluepairlisttypes/${record._id}`}
                                className="btn btn-warning btn-sm m-1"
                                >
                                Update
                              </Link>
                            <button
                              onClick={() => this.handleDelete(record._id)}
                              className="btn btn-danger btn-sm m-1"
                              >
                              Delete
                            </button>
                       </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          
            <Pagination
              itemsCount={totalCount}
              pageSize={this.state.pageSize}
              onPageChange={this.handlePageChange}
              currentPage={this.state.currentPage}
            />
      </React.Fragment>
    );
  }
}
export default Ecom_attributevaluepairlisttypes;
