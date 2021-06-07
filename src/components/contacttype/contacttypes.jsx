import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getContacttypes, deleteContacttype } from "../../services/contacttypeService";

class Contacttypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:contacttypes } = await getContacttypes();
    this.setState({ records:contacttypes });
  }

  handleDelete = async id => {
    const allcontacttypes = this.state.records; 
    const contacttypes = allcontacttypes.filter(m => m._id !== id);
    this.setState({ records:contacttypes });
    try {
      await deleteContacttype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: allcontacttypes });
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

    const { totalCount, data: paginatedContacttypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/contacttypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Contacttype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} contacttypes</p>
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
                      Contact Type Code
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Person Name
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Department Name
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Job Title
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Responsibility
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Communication Channel
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      After Hours Communication Channel
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Communication Channel
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      After Hours Communication Channel
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                      Responsibility
                    </th>
                    <th scope="col" key="12" style={{ cursor: "pointer" }}>
                      Contact Type Code
                    </th>
                    <th scope="col" key="13" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedContacttypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.contactTypeCode}</td>
                      <td key="3">{record.personName}</td>
                      <td key="4">{record.departmentName}</td>
                      <td key="5">{record.jobTitle}</td>
                      <td key="6">{record.responsibility}</td>
                      <td key="7">{record.communicationChannel}</td>
                      <td key="8">{record.afterHoursCommunicationChannel}</td>
                      <td key="9">{record.c.Name}</td>
                      <td key="10">{record.a.Name}</td>
                      <td key="11">{record.r.Name}</td>
                      <td key="12">{record.c.Name}</td>
                      <td key="13">
                              <Link
                                to={`/viewcontacttype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/contacttypes/${record._id}`}
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
export default Contacttypes;
