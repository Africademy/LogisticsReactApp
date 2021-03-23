import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getServicetransactions, deleteServicetransaction } from "../../services/servicetransactionService";

class Servicetransactions extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:servicetransactions } = await getServicetransactions();
    this.setState({ records:servicetransactions });
  }

  handleDelete = async id => {
    const allservicetransactions = this.state.records; 
    const servicetransactions = allservicetransactions.filter(m => m._id !== id);
    this.setState({ records:servicetransactions });
    try {
      await deleteServicetransaction(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: allservicetransactions });
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

    const { totalCount, data: paginatedServicetransactions } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/servicetransactions/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Servicetransaction
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} servicetransactions</p>
                </div>
              }
          </div>
            <div className="table-responsive">

              <table className="table">
                <thead>
                    <tr>
                    <th scope="col" key="1" style={{ cursor: "pointer" }}>
                       Type Of Service Transaction
                    </th>
                    <th scope="col" key="2" style={{ cursor: "pointer" }}>
                       Is Non Repudiation Required
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                       Is Authentication Required
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                       Is Non Repudiation Of Receipt Required
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                       Is Integrity Check Required
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                       Is Application Error Response Requested
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                       Time To Acknowledge Receipt
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                       Time To Acknowledge Acceptance
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                       Time To Perform
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                       Recurrence
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedServicetransactions.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.TypeOfServiceTransaction}</td>
                      <td key="2">{record.IsNonRepudiationRequired}</td>
                      <td key="3">{record.IsAuthenticationRequired}</td>
                      <td key="4">{record.IsNonRepudiationOfReceiptRequired}</td>
                      <td key="5">{record.IsIntegrityCheckRequired}</td>
                      <td key="6">{record.IsApplicationErrorResponseRequested}</td>
                      <td key="7">{record.TimeToAcknowledgeReceipt}</td>
                      <td key="8">{record.TimeToAcknowledgeAcceptance}</td>
                      <td key="9">{record.TimeToPerform}</td>
                      <td key="10">{record.Recurrence}</td>
                      <td key="11">
                              <Link
                                to={`/viewservicetransaction/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/servicetransactions/${record._id}`}
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
export default Servicetransactions;
