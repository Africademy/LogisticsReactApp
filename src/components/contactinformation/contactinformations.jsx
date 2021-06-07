import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getContactinformations, deleteContactinformation } from "../../services/contactinformationService";

class Contactinformations extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:contactinformations } = await getContactinformations();
    this.setState({ records:contactinformations });
  }

  handleDelete = async id => {
    const allcontactinformations = this.state.records; 
    const contactinformations = allcontactinformations.filter(m => m._id !== id);
    this.setState({ records:contactinformations });
    try {
      await deleteContactinformation(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: allcontactinformations });
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

    const { totalCount, data: paginatedContactinformations } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/contactinformations/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Contactinformation
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} contactinformations</p>
                </div>
              }
          </div>
            <div className="table-responsive">

              <table className="table">
                <thead>
                    <tr>
                    <th scope="col" key="1" style={{ cursor: "pointer" }}>
                       Contact
                    </th>
                    <th scope="col" key="2" style={{ cursor: "pointer" }}>
                       Email Address
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                       Fax Number
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                       Telephone Number
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                       Contact Type Identifier
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedContactinformations.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.Contact}</td>
                      <td key="2">{record.EmailAddress}</td>
                      <td key="3">{record.FaxNumber}</td>
                      <td key="4">{record.TelephoneNumber}</td>
                      <td key="5">{record.ContactTypeIdentifier}</td>
                      <td key="6">
                              <Link
                                to={`/viewcontactinformation/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/contactinformations/${record._id}`}
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
export default Contactinformations;
