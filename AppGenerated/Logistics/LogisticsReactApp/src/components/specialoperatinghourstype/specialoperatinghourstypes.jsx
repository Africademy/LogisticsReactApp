import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getSpecialoperatinghourstypes, deleteSpecialoperatinghourstype } from "../../services/specialoperatinghourstypeService";

class Specialoperatinghourstypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:specialoperatinghourstypes } = await getSpecialoperatinghourstypes();
    this.setState({ records:specialoperatinghourstypes });
  }

  handleDelete = async id => {
    const allspecialoperatinghourstypes = this.state.records; 
    const specialoperatinghourstypes = allspecialoperatinghourstypes.filter(m => m._id !== id);
    this.setState({ records:specialoperatinghourstypes });
    try {
      await deleteSpecialoperatinghourstype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: allspecialoperatinghourstypes });
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

    const { totalCount, data: paginatedSpecialoperatinghourstypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/specialoperatinghourstypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Specialoperatinghourstype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} specialoperatinghourstypes</p>
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
                      Is Operational
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Special Date
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Closing Time
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Opening Time
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Special Date Name
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Special Date Name
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedSpecialoperatinghourstypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.isOperational}</td>
                      <td key="3">{record.specialDate}</td>
                      <td key="4">{record.closingTime}</td>
                      <td key="5">{record.openingTime}</td>
                      <td key="6">{record.specialDateName}</td>
                      <td key="7">{record.s.Name}</td>
                      <td key="8">
                              <Link
                                to={`/viewspecialoperatinghourstype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/specialoperatinghourstypes/${record._id}`}
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
export default Specialoperatinghourstypes;
