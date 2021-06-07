import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getDutyfeetaxregistrationtypes, deleteDutyfeetaxregistrationtype } from "../../services/dutyfeetaxregistrationtypeService";

class Dutyfeetaxregistrationtypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:dutyfeetaxregistrationtypes } = await getDutyfeetaxregistrationtypes();
    this.setState({ records:dutyfeetaxregistrationtypes });
  }

  handleDelete = async id => {
    const alldutyfeetaxregistrationtypes = this.state.records; 
    const dutyfeetaxregistrationtypes = alldutyfeetaxregistrationtypes.filter(m => m._id !== id);
    this.setState({ records:dutyfeetaxregistrationtypes });
    try {
      await deleteDutyfeetaxregistrationtype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alldutyfeetaxregistrationtypes });
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

    const { totalCount, data: paginatedDutyfeetaxregistrationtypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/dutyfeetaxregistrationtypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Dutyfeetaxregistrationtype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} dutyfeetaxregistrationtypes</p>
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
                      Duty Fee Tax Registration I D
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Duty Fee Tax Type Code
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Duty Fee Tax Agency Name
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Duty Fee Tax Description
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Duty Fee Tax Description
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Duty Fee Tax Registration I D
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Duty Fee Tax Type Code
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedDutyfeetaxregistrationtypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.dutyFeeTaxRegistrationID}</td>
                      <td key="3">{record.dutyFeeTaxTypeCode}</td>
                      <td key="4">{record.dutyFeeTaxAgencyName}</td>
                      <td key="5">{record.dutyFeeTaxDescription}</td>
                      <td key="6">{record.d.Name}</td>
                      <td key="7">{record.d.Name}</td>
                      <td key="8">{record.d.Name}</td>
                      <td key="9">
                              <Link
                                to={`/viewdutyfeetaxregistrationtype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/dutyfeetaxregistrationtypes/${record._id}`}
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
export default Dutyfeetaxregistrationtypes;
