import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getAlternatedeliverytermscodes, deleteAlternatedeliverytermscode } from "../../services/alternatedeliverytermscodeService";

class Alternatedeliverytermscodes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:alternatedeliverytermscodes } = await getAlternatedeliverytermscodes();
    this.setState({ records:alternatedeliverytermscodes });
  }

  handleDelete = async id => {
    const allalternatedeliverytermscodes = this.state.records; 
    const alternatedeliverytermscodes = allalternatedeliverytermscodes.filter(m => m._id !== id);
    this.setState({ records:alternatedeliverytermscodes });
    try {
      await deleteAlternatedeliverytermscode(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: allalternatedeliverytermscodes });
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

    const { totalCount, data: paginatedAlternatedeliverytermscodes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/alternatedeliverytermscodes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Alternatedeliverytermscode
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} alternatedeliverytermscodes</p>
                </div>
              }
          </div>
            <div className="table-responsive">

              <table className="table">
                <thead>
                    <tr>
                    <th scope="col" key="1" style={{ cursor: "pointer" }}>
                      Code Description
                    </th>
                    <th scope="col" key="2" style={{ cursor: "pointer" }}>
                      Code List Agency Code
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Code List Agency Code List Version
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Code List Agency Name
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Code List Name
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Code List U R I
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Code List Version
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedAlternatedeliverytermscodes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.codeDescription}</td>
                      <td key="2">{record.codeListAgencyCode}</td>
                      <td key="3">{record.codeListAgencyCodeListVersion}</td>
                      <td key="4">{record.codeListAgencyName}</td>
                      <td key="5">{record.codeListName}</td>
                      <td key="6">{record.codeListURI}</td>
                      <td key="7">{record.codeListVersion}</td>
                      <td key="8">
                              <Link
                                to={`/viewalternatedeliverytermscode/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/alternatedeliverytermscodes/${record._id}`}
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
export default Alternatedeliverytermscodes;
