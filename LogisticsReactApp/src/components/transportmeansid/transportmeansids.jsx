import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getTransportmeansids, deleteTransportmeansid } from "../../services/transportmeansidService";

class Transportmeansids extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:transportmeansids } = await getTransportmeansids();
    this.setState({ records:transportmeansids });
  }

  handleDelete = async id => {
    const alltransportmeansids = this.state.records; 
    const transportmeansids = alltransportmeansids.filter(m => m._id !== id);
    this.setState({ records:transportmeansids });
    try {
      await deleteTransportmeansid(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alltransportmeansids });
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

    const { totalCount, data: paginatedTransportmeansids } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/transportmeansids/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Transportmeansid
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} transportmeansids</p>
                </div>
              }
          </div>
            <div className="table-responsive">

              <table className="table">
                <thead>
                    <tr>
                    <th scope="col" key="1" style={{ cursor: "pointer" }}>
                      Identification Scheme Agency Code
                    </th>
                    <th scope="col" key="2" style={{ cursor: "pointer" }}>
                      Identification Scheme Agency Code Code List Version
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Identification Scheme Agency Name
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Identification Scheme Name
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTransportmeansids.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.identificationSchemeAgencyCode}</td>
                      <td key="2">{record.identificationSchemeAgencyCodeCodeListVersion}</td>
                      <td key="3">{record.identificationSchemeAgencyName}</td>
                      <td key="4">{record.identificationSchemeName}</td>
                      <td key="5">
                              <Link
                                to={`/viewtransportmeansid/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/transportmeansids/${record._id}`}
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
export default Transportmeansids;
